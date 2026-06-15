import type { ReactElement } from "react";
import Image from "next/image";
import { home } from "@/data";

// ─── Icon map — keyed by category id ────────────────────────────────────────
// Gradients, colors, text, and hrefs all live in data/home.ts.
// Only SVG markup stays here (presentation layer).

const ICONS: Record<string, ReactElement> = {
  prescription: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M9 3h6a6 6 0 010 12H9V3z" />
      <path d="M9 15l6 6M13.5 18l3-3" />
    </svg>
  ),
  otc: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="3.5" y="9.5" width="17" height="5" rx="2.5" />
      <path d="M12 9.5v5" />
    </svg>
  ),
  vitamins: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M21 3C14 3 9 8 7.4 14.6M21 3c0 0-1 7-6 10M3 21l5-5" />
    </svg>
  ),
  "personal-care": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M10 8h4l2 4H8zM8 12h8v7a2 2 0 01-2 2h-4a2 2 0 01-2-2v-7z" />
      <path d="M12 14v4" />
    </svg>
  ),
  baby: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="8" r="4" />
      <path d="M8 21v-2a4 4 0 018 0v2" />
      <path d="M9.5 7.5c.4-.9 1.4-1.5 2.5-1.5" strokeWidth={1.4} />
    </svg>
  ),
  devices: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M7 12h2l2-3 2 6 2-3h2" />
    </svg>
  ),
};

// ─── Component ────────────────────────────────────────────────────────────────

const { eyebrow, heading, subheading, items } = home.categories;

export function CategorySection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-secondary-dark
                         leading-tight mb-4">
            {heading}
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((cat) => (
            <a
              key={cat.id}
              href={cat.href}
              className="group relative flex flex-col rounded-3xl bg-white
                         border border-neutral-100 shadow-sm
                         hover:shadow-2xl hover:-translate-y-2
                         transition-all duration-300 ease-out"
            >
              {/* Image header zone */}
              <div className="relative rounded-t-3xl overflow-hidden" style={{ height: "180px" }}>
                {/* Photo */}
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
              </div>

              {/* Floating icon badge — centered at the gradient/content boundary */}
              <div
                className={`absolute z-10 w-14 h-14 rounded-full bg-white shadow-lg
                             flex items-center justify-center ring-4 ring-white
                             ${cat.iconColor}
                             group-hover:scale-110 transition-transform duration-300`}
                style={{ top: "180px", left: "50%", transform: "translateX(-50%) translateY(-50%)" }}
              >
                {ICONS[cat.id]}
              </div>

              {/* Text content */}
              <div className="flex flex-col flex-1 items-center text-center px-5 sm:px-6 pt-10 pb-6">
                <h3 className="text-base sm:text-lg font-black text-secondary-dark leading-snug mb-2">
                  {cat.label}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-5 flex-1">
                  {cat.description}
                </p>
                <span className={`inline-flex items-center gap-1.5 text-sm font-semibold
                                  ${cat.iconColor} group-hover:gap-2.5 transition-all duration-200`}>
                  Shop now
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
