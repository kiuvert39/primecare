"use client";

import { useState } from "react";
import { home } from "@/data";

export function MedicineInquirySection() {
  const { inquiry } = home;
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = value.trim()
      ? `?type=inquiry&q=${encodeURIComponent(value.trim())}`
      : "?type=inquiry";
    window.location.href = `/contact${params}`;
  };

  return (
    <section className="relative py-16 md:py-24 px-6 md:px-12 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1e1f45 0%, #282A5F 50%, #3A3DAD 100%)" }}>

      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #7A80D1 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #A3A6CA 0%, transparent 70%)" }} />

      {/* Dot grid */}
      <svg className="absolute right-16 top-8 opacity-10 pointer-events-none hidden md:block"
        width="80" height="80" viewBox="0 0 80 80" aria-hidden>
        {Array.from({ length: 4 }, (_, r) =>
          Array.from({ length: 4 }, (_, c) => (
            <circle key={`${r}-${c}`} cx={c * 20 + 10} cy={r * 20 + 10} r="2.5" fill="white" />
          ))
        )}
      </svg>

      <div className="max-w-3xl mx-auto text-center relative z-10">

        <span className="inline-flex items-center border border-white/20 text-white/70
                         text-[11px] font-bold uppercase tracking-[0.18em]
                         px-3.5 py-1.5 rounded-full mb-5">
          {inquiry.eyebrow}
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight mb-4">
          {inquiry.heading}
        </h2>

        <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-10 max-w-lg mx-auto">
          {inquiry.body}
        </p>

        {/* Search bar */}
        <form onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-5">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={inquiry.placeholder}
            className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20
                       text-white placeholder-white/40 text-sm
                       focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/15
                       transition-all duration-200"
          />
          <button
            type="submit"
            className="shrink-0 px-7 py-3.5 bg-white text-primary font-bold text-sm rounded-xl
                       hover:bg-brand-50 transition-colors duration-200 whitespace-nowrap">
            {inquiry.cta.label}
          </button>
        </form>

        <p className="text-white/40 text-xs">{inquiry.note}</p>

      </div>
    </section>
  );
}
