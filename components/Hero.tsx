import { home } from "@/data";
import { Button } from "@/components/ui";
import Image from "next/image";

export function Hero() {
  return (
    // Navbar is fixed (overlays the hero), so hero uses min-h-svh (full viewport)
    <section className="relative flex items-center overflow-hidden bg-secondary-dark min-h-svh">

      {/* Background photo
          Mobile:  object-[center_15%] — shows top of image (face visible)
          Desktop: object-[65%_center] — shifts focal point right (person on right half) */}
      <Image
        src={home.hero.backgroundImage}
        alt=""
        fill
        priority
        className="object-cover object-[center_15%] md:object-[65%_center]"
      />

      {/* Mobile — solid brand-900 overlay, full coverage for readability */}
      <div
        className="absolute inset-0 md:hidden"
        style={{ background: "rgba(40,42,95,0.88)" }}
      />

      {/* Desktop — deep-indigo left-to-right gradient, photo shows through on right */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(to right, rgba(40,42,95,0.97) 0%, rgba(40,42,95,0.88) 25%, rgba(74,79,188,0.58) 50%, rgba(74,79,188,0.14) 70%, transparent 85%)",
        }}
      />

      {/* Content
          Mobile: full-width centred column, pt-24 clears the fixed navbar
          Desktop: left-aligned, max ~half-viewport wide                    */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 pt-24 pb-32 md:pt-28 md:pb-40">
        <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-lg mx-auto md:mx-0">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-primary block shrink-0" />
            <p className="text-primary font-medium tracking-[0.22em] uppercase text-[11px]">
              {home.hero.eyebrow}
            </p>
          </div>

          {/* Headline — fluid: 2.25rem on mobile, scales with vw, caps at 5.25rem */}
          <h1
            className="font-black text-white uppercase whitespace-pre-line leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 6.5vw, 5.25rem)" }}
          >
            {home.hero.heading}
          </h1>

          <div className="w-14 h-0.75 bg-primary mt-6 rounded-full" />

          <p className="mt-5 text-neutral-300 text-sm leading-relaxed max-w-xs md:max-w-sm">
            {home.hero.subheading}
          </p>

          <div className="mt-8 md:mt-10">
            <Button href={home.hero.cta.href} size="md">
              {home.hero.cta.label}
            </Button>
          </div>

        </div>
      </div>

      {/* White arch wave — flows into the white PrimaryPanel below */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-28 block"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,120 C480,30 960,30 1440,120 Z" fill="#ffffff" />
        </svg>
      </div>

    </section>
  );
}
