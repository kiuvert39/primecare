"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "primecare_welcomed";

export function WelcomeModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, "1");
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[60] bg-black/45 backdrop-blur-sm"
        style={{ animation: "welcomeFadeIn 0.35s ease-out both" }}
        onClick={dismiss}
        aria-hidden
      />

      {/* Modal */}
      <div
        className="fixed inset-0 z-[61] flex items-center justify-center p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-heading"
      >
        <div
          className="relative bg-white rounded-3xl w-full max-w-md overflow-hidden"
          style={{
            boxShadow: "0 32px 80px -8px rgba(0,0,0,0.28), 0 0 0 1px rgba(0,0,0,0.04)",
            animation: "welcomeSlideUp 0.5s cubic-bezier(0.34,1.4,0.64,1) 0.05s both",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* ── Banner ───────────────────────────────────────────────────── */}
          <div className="bg-primary relative overflow-hidden px-8 pt-8 pb-12">
            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/10 pointer-events-none" />
            <div className="absolute -bottom-14 -left-10 w-44 h-44 rounded-full bg-white/8 pointer-events-none" />

            {/* Close */}
            <button
              onClick={dismiss}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full
                         bg-white/15 hover:bg-white/28 flex items-center justify-center
                         transition-colors duration-150"
              aria-label="Close"
            >
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Logo badge */}
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" strokeWidth={1.6}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M4.5 12.75l7.5-7.5 7.5 7.5M4.5 19.5l7.5-7.5 7.5 7.5" />
                </svg>
              </div>
              <p className="text-white/65 text-[11px] font-bold uppercase tracking-[0.18em] mb-1.5">
                Welcome to
              </p>
              <h2 id="welcome-heading" className="text-white text-2xl sm:text-3xl font-black leading-tight">
                PrimeCare Pharmacy
              </h2>
              <p className="text-white/60 text-sm mt-2 leading-relaxed max-w-xs">
                Fast. Simple. Reliable healthcare — right at your door.
              </p>
            </div>
          </div>

          {/* ── Body ─────────────────────────────────────────────────────── */}
          <div className="px-8 py-7">
            {/* Feature list */}
            <div className="flex flex-col gap-3 mb-7">
              {[
                "Same-day delivery on orders before 3 PM",
                "100% authentic, manufacturer-verified medicines",
                "Free consultations with licensed pharmacists",
              ].map((text) => (
                <div key={text} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-success/15 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-success" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <p className="text-sm text-neutral-600 leading-snug">{text}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/products"
                onClick={dismiss}
                className="flex-1 bg-primary hover:bg-primary-dark text-white text-sm font-bold
                           rounded-xl px-5 py-3 text-center transition-colors duration-200"
              >
                Shop Now
              </a>
              <button
                onClick={dismiss}
                className="flex-1 border border-neutral-200 hover:border-neutral-300
                           text-neutral-600 hover:text-neutral-800
                           text-sm font-semibold rounded-xl px-5 py-3
                           transition-colors duration-200"
              >
                Browse First
              </button>
            </div>

            <p className="text-center text-[10px] text-neutral-400 mt-4">
              This message won&apos;t show again on your next visit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
