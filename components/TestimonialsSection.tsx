import Image from "next/image";
import { home } from "@/data";

function QuoteMark() {
  return (
    <svg
      className="absolute inset-0 w-full h-full text-neutral-100 pointer-events-none select-none"
      aria-hidden
      viewBox="0 0 80 60"
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
    >
      <path d="M10 40 Q10 20 25 20 Q15 20 15 32 L22 32 L22 48 L10 48 Z" />
      <path d="M32 40 Q32 20 47 20 Q37 20 37 32 L44 32 L44 48 L32 48 Z" />
    </svg>
  );
}

function TestimonialCard({
  item,
}: {
  item: (typeof home.testimonials.items)[number];
}) {
  return (
    <div
      className="relative bg-white rounded-2xl border border-neutral-100
                 p-6 w-72 shrink-0 mx-3 flex flex-col items-center text-center
                 overflow-hidden"
      style={{ boxShadow: "0 4px 24px -4px rgba(0,0,0,0.08)" }}
    >
      <QuoteMark />

      {/* Avatar image */}
      <div
        className="relative z-10 w-16 h-16 rounded-full overflow-hidden shrink-0 mb-3 ring-4 ring-white"
        style={{ boxShadow: "0 4px 16px -2px rgba(0,0,0,0.18)" }}
      >
        <Image
          src={item.avatar}
          alt={item.name}
          fill
          sizes="64px"
          unoptimized
          className="object-cover object-center"
        />
      </div>

      {/* Name */}
      <p className="relative z-10 text-sm font-bold text-secondary-dark leading-tight">
        {item.name}
      </p>

      {/* Role */}
      <p className="relative z-10 text-[11px] text-neutral-400 mt-0.5 mb-4">
        {item.role}
      </p>

      {/* Quote */}
      <p className="relative z-10 text-sm text-neutral-500 leading-relaxed line-clamp-3">
        {item.body}
      </p>
    </div>
  );
}

export function TestimonialsSection() {
  const { testimonials } = home;
  const items = testimonials.items;
  const count = items.length;

  const row = [...items, ...items];

  const waveDelay = (i: number) =>
    `${((i % count) / count) * 3}s`;

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-secondary-dark leading-tight">
          {testimonials.heading}
        </h2>
      </div>

      {/* Single marquee row — each card floats on its own wave phase */}
      <div className="py-8 group">
        <div
          className="flex group-hover:[animation-play-state:paused]"
          style={{ width: "max-content", animation: "marquee 32s linear infinite" }}
        >
          {row.map((item, i) => (
            <div
              key={`r-${i}`}
              style={{
                animation: `waveFloat 3s ease-in-out ${waveDelay(i)} infinite`,
              }}
            >
              <TestimonialCard item={item} />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
