"use client";

import { useEffect, useState } from "react";
import { home } from "@/data";
import { Button } from "@/components/ui";

const CYCLE_WORDS = ["Care.", "Health.", "Healing.", "Lives.", "You."];

export function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState<number | null>(null);
  const [support, punchBase] = home.hero.heading.split("\n");

  useEffect(() => {
    const t = setInterval(() => {
      setWordIdx((i) => {
        const next = (i + 1) % CYCLE_WORDS.length;
        setPrevIdx(i);
        setTimeout(() => setPrevIdx(null), 500);
        return next;
      });
    }, 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative flex items-center overflow-hidden bg-secondary-dark min-h-svh">

      {/* Background video
          poster= shows the static image while the video loads or if the file is missing.
          Drop /public/videos/hero.mp4 to activate the video background. */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={home.hero.backgroundImage}
        className="absolute inset-0 w-full h-full object-cover object-[center_15%] md:object-[65%_center]"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Mobile — solid brand-900 overlay */}
      <div
        className="absolute inset-0 md:hidden"
        style={{ background: "rgba(40,42,95,0.88)" }}
      />

      {/* Desktop — left-to-right gradient, video shows through on right */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(to right, rgba(40,42,95,0.97) 0%, rgba(40,42,95,0.88) 25%, rgba(74,79,188,0.58) 50%, rgba(74,79,188,0.14) 70%, transparent 85%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 pt-24 pb-32 md:pt-28 md:pb-40">
        <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-2xl mx-auto md:mx-0">
          {/* Heading */}
          <h1 className="w-full tracking-tight">
            {/* Supporting line — lighter weight */}
            <span
              className="block font-medium text-white/70 leading-tight"
              style={{ fontSize: "clamp(1.6rem, 4vw, 3.25rem)" }}
            >
              {support}
            </span>

            {/* Punch line: "Reliable" + animated cycling word — always one line */}
            <span
              className="block font-black text-white leading-none"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.75rem)" }}
            >
              {punchBase}{" "}
              <span
                className="inline-block relative overflow-hidden"
                style={{ verticalAlign: "bottom", height: "1.05em" }}
              >
                {prevIdx !== null && (
                  <span
                    className="absolute inset-x-0 top-0 text-brand-300 whitespace-nowrap"
                    style={{ animation: "wordFallOut 0.48s cubic-bezier(0.4,0,0.8,0.6) both" }}
                  >
                    {CYCLE_WORDS[prevIdx]}
                  </span>
                )}
                <span
                  key={wordIdx}
                  className="inline-block text-brand-300 whitespace-nowrap"
                  style={{ animation: "wordFallIn 0.48s cubic-bezier(0.2,0,0.2,1) both" }}
                >
                  {CYCLE_WORDS[wordIdx]}
                </span>
              </span>
            </span>
          </h1>

          <div className="w-14 h-0.5 bg-primary mt-6 rounded-full" />

          <p className="mt-6 text-white/75 text-base md:text-lg leading-relaxed max-w-sm md:max-w-md">
            {home.hero.subheading}
          </p>

          <div className="mt-8 md:mt-10">
            <Button href={home.hero.cta.href} variant="white" size="md">
              {home.hero.cta.label}
            </Button>
          </div>

        </div>
      </div>

      {/* White arch wave */}
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
