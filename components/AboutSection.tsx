import Image from "next/image";
import { home } from "@/data";
import { Button } from "@/components/ui";

// ─── SVG decorative shapes ────────────────────────────────────────────────────

function DotsGrid() {
  return (
    <svg
      width="120" height="120" viewBox="0 0 120 120"
      className="absolute -left-6 bottom-10 opacity-30 text-brand-400"
      aria-hidden
    >
      {Array.from({ length: 6 }, (_, row) =>
        Array.from({ length: 6 }, (_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={col * 24 + 4}
            cy={row * 24 + 4}
            r="3"
            fill="currentColor"
          />
        ))
      )}
    </svg>
  );
}

function RingDecor({ className }: { className?: string }) {
  return (
    <svg
      width="160" height="160" viewBox="0 0 160 160"
      className={className}
      aria-hidden
    >
      <circle cx="80" cy="80" r="70" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="80" cy="80" r="50" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="80" cy="80" r="30" fill="none" stroke="currentColor" strokeWidth="0.75" />
    </svg>
  );
}

function PlusMarks() {
  const positions = [
    { x: 0, y: 0 }, { x: 40, y: 20 }, { x: 80, y: 0 }, { x: 20, y: 40 }, { x: 60, y: 40 },
  ];
  return (
    <svg
      width="100" height="60" viewBox="0 0 100 60"
      className="absolute top-10 -right-4 opacity-25 text-accent-300"
      aria-hidden
    >
      {positions.map(({ x, y }, i) => (
        <g key={i} transform={`translate(${x},${y})`}>
          <line x1="5" y1="10" x2="5" y2="10" stroke="currentColor" strokeWidth="0" />
          <path d="M5 7v6M2 10h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );
}

function BlobOutline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200" className={className} aria-hidden
    >
      <path
        d="M44,-62.3C56.9,-54.2,67,-40.5,72.3,-25C77.6,-9.5,78.1,7.7,72.2,22.2C66.3,36.7,54,48.5,39.9,56.8C25.8,65.1,9.9,69.9,-5.5,69.1C-20.9,68.3,-35.8,61.9,-48.1,52.1C-60.4,42.3,-70.1,29.1,-73.8,14.1C-77.5,-0.9,-75.2,-17.7,-67.3,-31.2C-59.4,-44.7,-45.9,-54.9,-31.6,-62.1C-17.3,-69.3,-2.3,-73.5,11.4,-71.4C25.1,-69.3,31.1,-70.4,44,-62.3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="translate(100 100)"
      />
    </svg>
  );
}

function WaveArc({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 60" className={className} aria-hidden>
      <path
        d="M0 50 Q50 0 100 30 Q150 60 200 10"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      />
    </svg>
  );
}

function DiamondDecor({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" className={className} aria-hidden>
      <rect x="2" y="2" width="12" height="12" fill="currentColor" transform="rotate(45 8 8)" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 text-warning" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24"
      stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2A19.8 19.8 0 013.08 5.18 2 2 0 015.06 3h3a2 2 0 012 1.72l.34 2.28a2 2 0 01-.57 1.77l-1.2 1.2a16 16 0 006.17 6.17l1.2-1.2a2 2 0 011.77-.57l2.28.34A2 2 0 0122 16.92z" />
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutSection() {
  const { about, partners } = home;

  return (
    <section className="bg-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ── Two-column grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* LEFT — image column */}
          <div className="order-1 relative flex justify-center lg:justify-start">

            {/* Background blob outline */}
            <BlobOutline className="absolute -top-10 -left-10 w-64 h-64 text-brand-200 opacity-50" />

            {/* Concentric rings — top-right behind the photo */}
            <RingDecor className="absolute -top-6 right-4 lg:right-0 text-brand-300 opacity-20" />

            {/* Dot grid — bottom-left */}
            <DotsGrid />

            {/* Plus marks scatter */}
            <PlusMarks />

            {/* Wave arc — below image */}
            <WaveArc className="absolute -bottom-8 left-10 w-48 text-accent-300 opacity-40" />

            {/* Diamond accents */}
            <DiamondDecor className="absolute top-4 left-24 text-brand-400 opacity-40" />
            <DiamondDecor className="absolute bottom-16 right-10 text-accent-400 opacity-30 w-3 h-3" />

            {/* Image group — main blob + two smaller image blobs */}
            <div className="relative z-10 inline-block">

              {/* Image blob — bottom-right */}
              <div
                className="absolute -bottom-8 -right-10 w-32 h-36 overflow-hidden shadow-xl border-2 border-white"
                style={{ borderRadius: "55% 45% 38% 62% / 62% 38% 62% 38%" }}
              >
                <Image
                  src={about.image}
                  alt=""
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-brand-700/20" />
              </div>

              {/* Image blob — bottom-left */}
              <div
                className="absolute -bottom-6 -left-10 -top-28 w-48 h-42 overflow-hidden shadow-xl border-2  border-white"
                style={{ borderRadius: "42% 58% 65% 35% / 35% 65% 35% 65%" }}
              >
                <Image
                  src={about.image}
                  alt=""
                  fill
                  className="object-cover object-[30%_center]"
                />
                <div className="absolute inset-0 bg-accent-500/20" />
              </div>

              {/* Main photo blob */}
              <div
                className="relative w-72 h-80 md:w-80 md:h-96 overflow-hidden shadow-2xl"
                style={{ borderRadius: "60% 40% 55% 45% / 45% 55% 45% 55%" }}
              >
                <Image
                  src={about.image}
                  alt="Healthcare professionals"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-brand-900/10" />
              </div>

            </div>

            

            {/* Floating satisfaction card — bottom-left */}
            <div className="absolute bottom-6 -left-2 lg:-left-4 z-20 bg-white rounded-2xl shadow-xl px-4 py-3.5 flex items-center gap-3 max-w-47.5">
              <div className="w-9 h-9 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-secondary-dark leading-tight">
                  {about.floatingCards.satisfaction.value} {about.floatingCards.satisfaction.label}
                </p>
                <p className="text-[11px] text-neutral-400 mt-0.5">
                  {about.floatingCards.satisfaction.sub}
                </p>
              </div>
            </div>

            {/* Floating patients card — top-right */}
            <div className="absolute top-4 -right-2 lg:-right-4 z-20 bg-primary rounded-2xl shadow-xl px-4 py-3 text-white text-center">
              <p className="text-xl font-black leading-none">{about.floatingCards.patients.value}</p>
              <p className="text-[10px] font-medium opacity-80 mt-1 uppercase tracking-wide">
                {about.floatingCards.patients.label}
              </p>
            </div>

          </div>

          {/* RIGHT — text content */}
          <div className="order-2 flex flex-col">

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-black text-secondary-dark leading-[1.15] mb-5">
              {about.heading}
            </h2>

            {/* Body */}
            <p className="text-neutral-500 text-base leading-relaxed mb-8 max-w-lg">
              {about.body}
            </p>

            {/* Bullet list */}
            <ul className="flex flex-col gap-3.5 mb-10">
              {about.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-white mt-0.5 shrink-0">
                    <CheckIcon />
                  </span>
                  <span className="text-sm text-neutral-600 leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            {/* Mini stats + star row */}
            {/* <div className="flex flex-wrap items-center gap-6 mb-10 pl-1">
              {about.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-black text-primary leading-none">{stat.value}</p>
                  <p className="text-[11px] text-neutral-400 uppercase tracking-wider mt-1.5">
                    {stat.label}
                  </p>
                </div>
              ))}
              <div className="w-px h-10 bg-neutral-200 self-center" />
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className="text-[11px] text-neutral-400 uppercase tracking-wider">
                  {about.reviewsLabel}
                </p>
              </div>
            </div> */}

            {/* CTA row: button + call link */}
            <div className="flex flex-wrap items-center gap-6">
              <Button href={about.cta.href} size="md">
                {about.cta.label}
              </Button>

              <div className="flex items-center gap-3">
                <div className="flex w-11 h-11 items-center justify-center rounded-full border border-brand-200 bg-brand-50 text-primary">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="text-[11px] text-neutral-400 uppercase tracking-wider">
                    {about.contact.label}
                  </p>
                  <p className="text-sm font-bold text-secondary-dark">{about.contact.number}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── Partner logos strip — infinite marquee ── */}
        <div className="mt-24 pt-10 border-neutral-200">
          <p className="text-center text-[20px] font-semibold uppercase tracking-[0.2em] text-neutral-600 mb-8">
            {partners.label}
          </p>

          {/* Overflow container with fade edges */}
          <div
            className="relative overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            {/* Track — duplicated so the loop is seamless */}
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
              {[...partners.logos, ...partners.logos].map((name, i) => (
                <span
                  key={i}
                  className="px-10  text-neutral-400 font-black text-xl tracking-tight whitespace-nowrap select-none"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export { AboutSection };
