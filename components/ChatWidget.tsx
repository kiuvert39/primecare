"use client";

import { useEffect, useRef, useState } from "react";

type Sender = "bot" | "user";

interface Message {
  id: number;
  sender: Sender;
  text: string;
}

const WELCOME_TEXT =
  "Welcome to PrimeCare! Have a question about your prescription, an order, or our services? I'm here to help — just type below.";

const BOT_REPLY =
  "Thanks for reaching out! A pharmacist will follow up shortly. For urgent queries, call us on +1 (800) 774-6328.";

const QUICK_REPLIES = [
  "Track my order",
  "Upload a prescription",
  "Speak to a pharmacist",
];

// Two-tone notification chime using Web Audio API — no audio file needed
function playChime() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Ctx = (window as any).AudioContext || (window as any).webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx() as AudioContext;

    const tone = (freq: number, start: number, dur: number) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.22, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, start + dur);
      osc.start(start);
      osc.stop(start + dur);
    };

    tone(880,  ctx.currentTime,        0.18);
    tone(1100, ctx.currentTime + 0.14, 0.24);
  } catch {
    // Audio API unavailable — silently skip
  }
}

function BotAvatar({ size = 7 }: { size?: number }) {
  return (
    <div className={`w-${size} h-${size} rounded-full bg-primary flex items-center justify-center shrink-0`}>
      <svg className={`w-${size - 3} h-${size - 3} text-white`} fill="none" viewBox="0 0 24 24"
        stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3-3-3z" />
      </svg>
    </div>
  );
}

export function ChatWidget() {
  const [open, setOpen]         = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput]       = useState("");
  const [typing, setTyping]     = useState(false);
  const [unread, setUnread]     = useState(0);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef       = useRef<HTMLInputElement>(null);
  const nextId         = useRef(1);
  const openRef        = useRef(open);
  openRef.current      = open;

  // Auto-send welcome message after 3 s
  useEffect(() => {
    const t = setTimeout(() => {
      setMessages([{ id: nextId.current++, sender: "bot", text: WELCOME_TEXT }]);
      playChime();
      if (!openRef.current) setUnread(1);
    }, 3000);
    return () => clearTimeout(t);
  }, []);

  // Scroll to latest message
  useEffect(() => {
    if (open) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, open]);

  // Focus input & clear badge when chat opens
  useEffect(() => {
    if (open) {
      setUnread(0);
      const t = setTimeout(() => inputRef.current?.focus(), 280);
      return () => clearTimeout(t);
    }
  }, [open]);

  const send = () => {
    const text = input.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { id: nextId.current++, sender: "user", text }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      const reply: Message = { id: nextId.current++, sender: "bot", text: BOT_REPLY };
      setMessages((prev) => [...prev, reply]);
      if (!openRef.current) setUnread((n) => n + 1);
    }, 1600);
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  };

  const quickReply = (text: string) => {
    setInput(text);
    inputRef.current?.focus();
  };

  const showQuickReplies = messages.length <= 1 && !typing;

  return (
    <>
      {/* ── Chat panel ─────────────────────────────────────────────────── */}
      {open && (
        <div
          className="fixed bottom-24 right-4 sm:right-6 z-50
                     w-[calc(100vw-32px)] sm:w-96
                     flex flex-col bg-white rounded-2xl overflow-hidden"
          style={{
            maxHeight: "min(580px, calc(100dvh - 128px))",
            boxShadow: "0 24px 64px -8px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.04)",
            animation: "chatSlideUp 0.32s cubic-bezier(0.34,1.4,0.64,1) both",
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3.5 bg-primary shrink-0">
            <BotAvatar size={9} />
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-bold leading-tight truncate">
                PrimeCare Assistant
              </p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-success" />
                <p className="text-white/65 text-[10px]">Online · Replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/25
                         flex items-center justify-center transition-colors shrink-0"
              aria-label="Close chat"
            >
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-neutral-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 items-end ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
                style={{ animation: "chatMsgIn 0.22s ease-out both" }}
              >
                {msg.sender === "bot" && <BotAvatar size={7} />}
                <div
                  className={`max-w-[82%] px-3.5 py-2.5 text-sm leading-relaxed
                               ${msg.sender === "bot"
                                 ? "bg-white text-neutral-700 border border-neutral-100 shadow-sm rounded-2xl rounded-bl-sm"
                                 : "bg-primary text-white rounded-2xl rounded-br-sm"}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className="flex gap-2 items-end" style={{ animation: "chatMsgIn 0.22s ease-out both" }}>
                <BotAvatar size={7} />
                <div className="bg-white border border-neutral-100 shadow-sm
                                rounded-2xl rounded-bl-sm px-4 py-3.5
                                flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce [animation-delay:0ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce [animation-delay:150ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick reply chips */}
          {showQuickReplies && messages.length > 0 && (
            <div className="flex gap-2 px-4 py-2.5 bg-neutral-50 border-t border-neutral-100 overflow-x-auto shrink-0">
              {QUICK_REPLIES.map((r) => (
                <button
                  key={r}
                  onClick={() => quickReply(r)}
                  className="shrink-0 text-[11px] font-semibold text-primary
                             border border-brand-200 bg-brand-50 hover:bg-brand-100
                             rounded-full px-3 py-1.5 whitespace-nowrap
                             transition-colors duration-150"
                >
                  {r}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="flex items-center gap-2 px-3 py-3 bg-white border-t border-neutral-100 shrink-0">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type a message…"
              className="flex-1 text-sm text-neutral-800 placeholder:text-neutral-400
                         bg-neutral-50 border border-neutral-200 rounded-xl
                         px-3.5 py-2.5 outline-none
                         focus:border-primary/40 focus:ring-2 focus:ring-primary/10
                         transition-all"
            />
            <button
              onClick={send}
              disabled={!input.trim()}
              className="w-10 h-10 rounded-xl bg-primary hover:bg-primary-dark
                         disabled:opacity-35 disabled:cursor-not-allowed
                         flex items-center justify-center shrink-0
                         transition-all duration-200"
              aria-label="Send message"
            >
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.269 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* ── FAB ────────────────────────────────────────────────────────── */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50
                    w-14 h-14 rounded-full shadow-xl
                    flex items-center justify-center
                    transition-all duration-300 active:scale-95
                    ${open ? "bg-neutral-700 hover:bg-neutral-800" : "bg-primary hover:bg-primary-dark"}`}
        style={!open ? { animation: "fabRing 3.5s ease-in-out 2s infinite" } : undefined}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {/* Unread badge */}
        {!open && unread > 0 && (
          <span
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-danger
                       text-white text-[10px] font-black flex items-center justify-center
                       border-2 border-white"
            style={{ animation: "chatMsgIn 0.3s cubic-bezier(0.34,1.56,0.64,1) both" }}
          >
            {unread}
          </span>
        )}

        <div
          className="transition-all duration-300"
          style={{ transform: open ? "rotate(180deg) scale(0.85)" : "rotate(0deg) scale(1)" }}
        >
          {open ? (
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3-3-3z" />
            </svg>
          )}
        </div>
      </button>
    </>
  );
}
