"use client";

import { useEffect, useRef, useState } from "react";
import { home } from "@/data";

// ─── Accordion item ───────────────────────────────────────────────────────────

function AccordionItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
  animDelay,
  visible,
}: {
  question:   string;
  answer:     string;
  index:      number;
  isOpen:     boolean;
  onToggle:   () => void;
  animDelay:  number;
  visible:    boolean;
}) {
  return (
    <div
      className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden
                 hover:shadow-md transition-shadow duration-200"
      style={{
        opacity:   visible ? undefined : 0,
        animation: visible ? `fadeUp 0.5s ease-out ${animDelay}ms both` : undefined,
      }}
    >
      {/* Question row */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-5 sm:px-6 py-5 text-left group/btn"
        aria-expanded={isOpen}
      >
        {/* Number badge */}
        <span
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                      text-[11px] font-black tracking-wide transition-colors duration-200
                      ${isOpen ? "bg-primary text-white" : "bg-brand-100 text-primary"}`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Question text */}
        <span
          className={`flex-1 text-sm sm:text-base font-bold leading-snug transition-colors duration-200
                      ${isOpen ? "text-primary" : "text-secondary-dark group-hover/btn:text-primary"}`}
        >
          {question}
        </span>

        {/* Chevron */}
        <span
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                      border transition-all duration-300
                      ${isOpen
                        ? "bg-primary border-primary text-white rotate-180"
                        : "bg-transparent border-neutral-200 text-neutral-400 group-hover/btn:border-primary group-hover/btn:text-primary"}`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {/* Answer — grid-template-rows trick for smooth height animation */}
      <div
        style={{
          display:           "grid",
          gridTemplateRows:  isOpen ? "1fr" : "0fr",
          transition:        "grid-template-rows 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div className="overflow-hidden">
          <p className="px-5 sm:px-6 pb-5 pt-1 text-sm text-neutral-500 leading-relaxed
                        border-t border-neutral-50">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────

export function FAQSection() {
  const { faq } = home;
  const [openIndex, setOpenIndex] = useState<number>(0);

  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? -1 : i));

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 md:py-18 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* ── Left: heading column ──────────────────────────────────────── */}
          <div
            className="lg:col-span-2 lg:sticky lg:top-28"
            style={{
              opacity:   visible ? undefined : 0,
              animation: visible ? "fadeUp 0.6s ease-out both" : undefined,
            }}
          >

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary-dark
                           leading-[1.1] mb-5 whitespace-pre-line">
              {faq.heading}
            </h2>

            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed mb-8 max-w-sm">
              {faq.subheading}
            </p>

            {/* Decorative dot grid */}
            <svg
              width="96" height="80" viewBox="0 0 96 80"
              className="mb-8 text-brand-300 opacity-60" aria-hidden
            >
              {Array.from({ length: 4 }, (_, row) =>
                Array.from({ length: 6 }, (_, col) => (
                  <circle
                    key={`${row}-${col}`}
                    cx={col * 18 + 4} cy={row * 22 + 4} r="3"
                    fill="currentColor"
                  />
                ))
              )}
            </svg>
          </div>

          {/* ── Right: accordion column ───────────────────────────────────── */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            {faq.items.map((item, i) => (
              <AccordionItem
                key={i}
                index={i}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
                visible={visible}
                animDelay={100 + i * 70}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
