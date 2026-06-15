"use client";

import { useEffect, useRef, useState } from "react";
import { site, nav } from "@/data";
import { Button } from "@/components/ui";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden,   setHidden]   = useState(false);
  const [open,     setOpen]     = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY.current && y > 80) {
        setHidden(true);
        setOpen(false); // close mobile menu when navbar hides
      } else if (y < lastY.current) {
        setHidden(false);
      }
      setScrolled(y > 40);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      {/* ── Header bar ──────────────────────────────────────────────────── */}
      <header
        style={{
          transition:
            "transform 500ms ease-in-out, background-color 300ms, box-shadow 300ms, border-color 300ms",
        }}
        className={[
          "fixed top-0 left-0 right-0 z-50",
          hidden ? "-translate-y-full" : "translate-y-0",
          solid
            ? "bg-white/97 backdrop-blur-md shadow-sm border-b border-neutral-200"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-12 h-16 flex items-center justify-between gap-4">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 shrink-0">
            <span className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center text-white font-black text-sm">
              {site.name.charAt(0)}
            </span>
            <span
              className="font-bold text-sm tracking-widest uppercase"
              style={{
                color: solid ? "#1B2B3C" : "#ffffff",
                transition: "color 300ms",
              }}
            >
              {site.name}
            </span>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={[
                  "relative group px-3 py-5 text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap",
                  "transition-colors duration-200",
                  scrolled
                    ? "text-neutral-500 hover:text-primary"
                    : "text-white/75 hover:text-white",
                ].join(" ")}
              >
                {link.label}

                {/* Animated underline — slides in from left on hover */}
                <span
                  className={[
                    "absolute bottom-3 left-3 right-3 h-0.5 rounded-full",
                    "origin-left scale-x-0 group-hover:scale-x-100",
                    "transition-transform duration-300 ease-out",
                    scrolled ? "bg-primary" : "bg-white",
                  ].join(" ")}
                />
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3 shrink-0">
            {/* CTA — desktop only */}
            <div className="hidden lg:block">
              <Button href={nav.cta.href} size="sm" className="rounded-b-full">
                {nav.cta.label}
              </Button>
            </div>

            {/* Hamburger / close button — mobile only */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.25"
              style={{ color: solid ? "#323043" : "#ffffff" }}
            >
              <span
                className="block w-5 h-0.5 bg-current rounded-full"
                style={{
                  transition: "transform 300ms, opacity 300ms",
                  transform: open ? "translateY(6.5px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="block w-5 h-0.5 bg-current rounded-full"
                style={{
                  transition: "transform 300ms, opacity 300ms",
                  opacity: open ? 0 : 1,
                  transform: open ? "scaleX(0)" : "none",
                }}
              />
              <span
                className="block w-5 h-0.5 bg-current rounded-full"
                style={{
                  transition: "transform 300ms, opacity 300ms",
                  transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>

        </div>
      </header>

      {/* ── Mobile menu panel ──────────────────────────────────────────────
          Positioned just below the 64 px header. Slides in with max-height
          + opacity so the animation is smooth even with variable content.  */}
      <div
        className="fixed top-16 left-0 right-0 z-40 lg:hidden overflow-hidden"
        style={{
          maxHeight: open ? "480px" : "0px",
          opacity: open ? 1 : 0,
          transition: "max-height 400ms cubic-bezier(0.4,0,0.2,1), opacity 300ms",
        }}
      >
        <div className="bg-white/97 backdrop-blur-md border-b border-neutral-200 shadow-lg">
          <nav className="max-w-7xl mx-auto px-5 pt-2 pb-6 flex flex-col">
            {nav.links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={[
                  "py-4 text-sm font-semibold uppercase tracking-wider text-neutral-700",
                  "hover:text-primary transition-colors duration-200",
                  i < nav.links.length - 1
                    ? "border-b border-neutral-100"
                    : "",
                ].join(" ")}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-5">
              <Button
                href={nav.cta.href}
                size="md"
                className="w-full justify-center rounded-b-full"
                onClick={() => setOpen(false)}
              >
                {nav.cta.label}
              </Button>
            </div>
          </nav>
        </div>
      </div>

      {/* Backdrop — closes menu on outside tap */}
      {open && (
        <div
          className="fixed inset-0 z-30 lg:hidden bg-secondary-dark/30 backdrop-blur-[2px]"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
