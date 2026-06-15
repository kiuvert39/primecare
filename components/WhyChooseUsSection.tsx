"use client";

import { useEffect, useRef, useState } from "react";
import type { FC } from "react";
import { home } from "@/data";

// ─── Icon components ──────────────────────────────────────────────────────────

const ShieldIcon: FC = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L4 7v5c0 5.25 3.5 9.74 8 11 4.5-1.26 8-5.75 8-11V7l-8-4z" />
  </svg>
);
const CheckCircleIcon: FC = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <circle cx="12" cy="12" r="9" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l3 3 5-5" />
  </svg>
);
const ClockIcon: FC = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <circle cx="12" cy="12" r="9" /><path strokeLinecap="round" d="M12 7v5l3 3" />
  </svg>
);
const HeartIcon: FC = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21 4.318 12.682a4.5 4.5 0 010-6.364z" />
  </svg>
);
const TagIcon: FC = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M3 3h8l10 10a2 2 0 010 2.83l-5.17 5.17a2 2 0 01-2.83 0L3 11V3z" />
  </svg>
);
const RefreshIcon: FC = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m0 0a8 8 0 0114.836 2M4.582 9H9m11 11v-5h-.582m0 0a8 8 0 01-14.836-2M19.418 15H15" />
  </svg>
);
const UsersIcon: FC = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 110 8 4 4 0 010-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>
);
const BoxIcon: FC = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
  </svg>
);
const StarIcon: FC = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);
const TruckIcon: FC = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l3 .001M13 16l.001-10H17l4 5v5h-2" />
  </svg>
);

const FEATURE_ICONS: Record<string, FC> = {
  shield: ShieldIcon, check: CheckCircleIcon, clock: ClockIcon,
  heart: HeartIcon,   tag: TagIcon,           refresh: RefreshIcon,
};

// ─── Decorative SVG shapes ────────────────────────────────────────────────────

/** Stacked horizontal sine waves — bold */
function WavyLines({ className }: { className?: string }) {
  const wave = (dy: number, amp = 18, freq = 55) =>
    `M0,${dy} ` +
    Array.from({ length: 8 }, (_, i) =>
      `Q${freq / 2 + i * freq},${dy - amp} ${(i + 1) * freq},${dy}`
    ).join(" ");
  return (
    <svg viewBox="0 0 440 120" className={className} aria-hidden>
      {[16, 36, 56, 76, 96].map((y, i) => (
        <path key={i} d={wave(y, 16, 55)} fill="none"
          stroke="currentColor" strokeWidth={i === 2 ? 4 : i === 1 || i === 3 ? 2.5 : 1.5}
          strokeOpacity={0.9 - i * 0.12} strokeLinecap="round" />
      ))}
    </svg>
  );
}

/** Diagonal zigzag — bold */
function ZigZag({ className }: { className?: string }) {
  const pts  = Array.from({ length: 10 }, (_, i) => `${i * 28},${i % 2 === 0 ? 0 : 30}`).join(" ");
  const pts2 = Array.from({ length: 10 }, (_, i) => `${i * 28},${i % 2 === 0 ? 14 : 44}`).join(" ");
  return (
    <svg viewBox="0 0 252 46" className={className} aria-hidden>
      <polyline points={pts}  fill="none" stroke="currentColor" strokeWidth={3}   strokeLinecap="round" strokeLinejoin="round" />
      <polyline points={pts2} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" strokeOpacity={0.55} />
    </svg>
  );
}

/** Dot grid cluster — bolder dots */
function DotGrid({ className, cols = 7, rows = 5 }: { className?: string; cols?: number; rows?: number }) {
  return (
    <svg viewBox={`0 0 ${cols * 20} ${rows * 20}`} className={className} aria-hidden>
      {Array.from({ length: rows }, (_, r) =>
        Array.from({ length: cols }, (_, c) => (
          <circle key={`${r}-${c}`} cx={c * 20 + 5} cy={r * 20 + 5} r={4} fill="currentColor"
            opacity={0.65 - (r + c) % 3 * 0.1} />
        ))
      )}
    </svg>
  );
}

/** Hexagon outline — thicker strokes */
function HexOutline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" className={className} aria-hidden>
      <polygon points="80,4 152,42 152,118 80,156 8,118 8,42"
        fill="none" stroke="currentColor" strokeWidth={3} />
      <polygon points="80,30 128,56 128,106 80,132 32,106 32,56"
        fill="none" stroke="currentColor" strokeWidth={1.8} strokeOpacity={0.6} />
      <polygon points="80,54 108,70 108,94 80,110 52,94 52,70"
        fill="none" stroke="currentColor" strokeWidth={1} strokeOpacity={0.3} />
    </svg>
  );
}

/** Plus / cross scatter — bigger and bolder */
function PlusScatter({ className }: { className?: string }) {
  const positions = [[10,10],[55,22],[95,5],[18,58],[72,52],[42,88],[88,80],[30,35],[65,72]];
  return (
    <svg viewBox="0 0 110 100" className={className} aria-hidden>
      {positions.map(([x, y], i) => {
        const arm = i % 3 === 0 ? 8 : i % 3 === 1 ? 6 : 4;
        return (
          <g key={i} transform={`translate(${x},${y})`} opacity={0.8 - (i % 3) * 0.15}>
            <line x1={-arm} y1="0" x2={arm} y2="0" stroke="currentColor" strokeWidth={i % 3 === 0 ? 3 : 2} strokeLinecap="round" />
            <line x1="0" y1={-arm} x2="0" y2={arm} stroke="currentColor" strokeWidth={i % 3 === 0 ? 3 : 2} strokeLinecap="round" />
          </g>
        );
      })}
    </svg>
  );
}

/** Concentric rings — bolder */
function ConcentricRings({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      {[88, 66, 44, 24].map((r, i) => (
        <circle key={i} cx="100" cy="100" r={r}
          fill="none" stroke="currentColor"
          strokeWidth={i === 0 ? 3 : i === 1 ? 2 : 1.5}
          strokeOpacity={0.7 - i * 0.1}
          strokeDasharray={i % 2 === 1 ? "8 5" : undefined} />
      ))}
    </svg>
  );
}

/** Large sweeping S-curve — bolder */
function SCurve({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 500" className={className} aria-hidden preserveAspectRatio="none">
      <path d="M280,0 C180,80 120,180 150,250 C180,320 240,400 140,500"
        fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" />
      <path d="M240,0 C140,90 80,190 110,260 C140,330 200,410 100,500"
        fill="none" stroke="currentColor" strokeWidth={1.5} strokeOpacity={0.5} strokeLinecap="round" />
    </svg>
  );
}

/** Wavy arc — thicker */
function WaveArc({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 80" className={className} aria-hidden>
      <path d="M0,55 C80,5 160,75 240,25 C320,-25 380,55 400,35"
        fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="round" />
      <path d="M0,68 C80,18 160,88 240,38 C320,-12 380,68 400,48"
        fill="none" stroke="currentColor" strokeWidth={2} strokeOpacity={0.5} strokeLinecap="round" />
      <path d="M0,42 C80,-8 160,62 240,12 C320,-38 380,42 400,22"
        fill="none" stroke="currentColor" strokeWidth={1.5} strokeOpacity={0.3} strokeLinecap="round" />
    </svg>
  );
}

// ─── Feature accent palette ───────────────────────────────────────────────────

const ACCENTS = [
  { bg: "#eef0ff", color: "#282A5F" },
  { bg: "#dcfce7", color: "#166534" },
  { bg: "#fef3c7", color: "#92400e" },
  { bg: "#fce7f3", color: "#831843" },
  { bg: "#ede9fe", color: "#4c1d95" },
  { bg: "#e0f2fe", color: "#0c4a6e" },
];

// ─── Honeycomb geometry ───────────────────────────────────────────────────────

const HEX = 200;
const COL = 210;
const ROW = Math.round(COL * 0.866);

const POSITIONS = [
  { top: 0,       left: Math.round(COL * 0.5), feat: 0 },
  { top: 0,       left: Math.round(COL * 1.5), feat: 1 },
  { top: ROW,     left: 0,                     feat: 2 },
  { top: ROW,     left: COL,                   feat: -1 },
  { top: ROW,     left: COL * 2,               feat: 3 },
  { top: ROW * 2, left: Math.round(COL * 0.5), feat: 4 },
  { top: ROW * 2, left: Math.round(COL * 1.5), feat: 5 },
];

const HEX_DELAYS = [300, 300, 150, 0, 150, 300, 300];
const CLIP_HEX   = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";
const W = COL * 2 + HEX;
const H = ROW * 2 + HEX;

// ─── Stats strip ─────────────────────────────────────────────────────────────

const STATS = [
  { Icon: UsersIcon, value: "50k+", label: "Happy Patients",   desc: "Across all branches"      },
  { Icon: BoxIcon,   value: "200+", label: "Medicine Brands",  desc: "Authentic & certified"    },
  { Icon: StarIcon,  value: "4.9★", label: "Average Rating",   desc: "Verified patient reviews" },
  { Icon: TruckIcon, value: "98%",  label: "On-Time Delivery", desc: "Same-day delivery rate"   },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function WhyChooseUsSection() {
  const { whyChooseUs } = home;
  const features = whyChooseUs.features;

  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 md:py-24 px-6 md:px-12 overflow-hidden relative"
    >
      {/* ── Decorative background layer ──────────────────────────────────── */}

      {/* Top-left: wavy lines stack + dot grid */}
      <WavyLines className="absolute top-0 -left-4 w-96 text-brand-400 opacity-55 pointer-events-none" />
      <DotGrid   className="absolute top-6 left-8 w-36 text-primary opacity-40 pointer-events-none" cols={5} rows={4} />

      {/* Top-right: large rotating hex + concentric rings */}
      <HexOutline
        className="absolute -top-8 -right-8 w-80 text-brand-400 opacity-45
                   pointer-events-none animate-ring-spin [animation-duration:45s]"
      />
      <ConcentricRings
        className="absolute top-16 right-16 w-52 text-primary opacity-35 pointer-events-none"
      />

      {/* Left mid: S-curve + plus scatter */}
      <SCurve       className="absolute top-20 left-0 w-44 h-112 text-brand-400 opacity-50 pointer-events-none" />
      <PlusScatter  className="absolute top-1/3 left-8 w-36 text-primary opacity-45 pointer-events-none" />

      {/* Right mid: zigzag + plus scatter */}
      <ZigZag      className="absolute top-1/3 -right-2 w-64 text-brand-500 opacity-50 pointer-events-none -rotate-6" />
      <PlusScatter className="absolute top-1/2 right-10 w-32 text-brand-400 opacity-45 pointer-events-none" />

      {/* Bottom-left: rotating hex + wavy arc */}
      <HexOutline
        className="absolute -bottom-8 -left-8 w-64 text-brand-400 opacity-45
                   pointer-events-none animate-ring-spin [animation-direction:reverse] [animation-duration:55s]"
      />
      <WaveArc className="absolute bottom-28 left-0 w-80 text-brand-500 opacity-50 pointer-events-none" />

      {/* Bottom-right: wavy lines + dot grid */}
      <WavyLines className="absolute bottom-0 -right-4 w-96 text-brand-400 opacity-55 pointer-events-none rotate-180" />
      <DotGrid   className="absolute bottom-12 right-8 w-32 text-primary opacity-35 pointer-events-none" cols={4} rows={3} />

      {/* Center: large semi-transparent filled blobs for depth */}
      <div className="absolute top-10 left-1/4 w-48 h-48 rounded-full bg-brand-100/60 blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-56 h-56 rounded-full bg-brand-100/50 blur-2xl pointer-events-none" />

      {/* Center rotating rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border-2 border-brand-200/60
                        animate-ring-spin [animation-duration:80s]" />
        <div className="absolute w-100 h-100 rounded-full border border-brand-300/40
                        animate-ring-spin [animation-direction:reverse] [animation-duration:55s]" />
      </div>

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto relative">

        {/* Header */}
        <div
          className="text-center mb-12 md:mb-16"
          style={{
            opacity:   visible ? undefined : 0,
            animation: visible ? "fadeUp 0.7s ease-out both" : undefined,
          }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-secondary-dark leading-tight mb-4">
            {whyChooseUs.heading}
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            {whyChooseUs.body}
          </p>
        </div>

        {/* ── Honeycomb — desktop lg+ ──────────────────────────────────────── */}
        <div className="hidden lg:flex justify-center mb-16">
          <div className="relative" style={{ width: W, height: H }}>
            {POSITIONS.map((pos, i) => {
              const isCenter = pos.feat === -1;
              const feat     = isCenter ? null : features[pos.feat];
              const accent   = isCenter ? null : ACCENTS[pos.feat % ACCENTS.length];
              const Icon     = feat ? (FEATURE_ICONS[feat.icon] ?? ShieldIcon) : null;
              const delay    = HEX_DELAYS[i];

              const animation = visible
                ? isCenter
                  ? `hexBloom 0.55s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms both,
                     hexPulse 4s ease-in-out ${delay + 900}ms infinite`
                  : `hexBloom 0.55s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms both`
                : undefined;

              return (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    top: pos.top, left: pos.left, width: HEX, height: HEX,
                    opacity:   visible ? undefined : 0,
                    animation,
                    filter: isCenter
                      ? "drop-shadow(0 6px 24px rgba(40,42,95,0.35))"
                      : "drop-shadow(0 4px 14px rgba(40,42,95,0.10))",
                  }}
                >
                  <div
                    className={`w-full h-full flex flex-col items-center justify-center
                                 transition-transform duration-300 hover:scale-105 cursor-default
                                 select-none px-4
                                 ${isCenter ? "bg-primary" : "bg-white"}`}
                    style={{ clipPath: CLIP_HEX }}
                  >
                    {isCenter ? (
                      <>
                        <div className="text-white mb-1.5">
                          <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" strokeWidth={1.4}>
                            <path strokeLinecap="round" strokeLinejoin="round"
                              d="M4.5 12.75l7.5-7.5 7.5 7.5M4.5 19.5l7.5-7.5 7.5 7.5" />
                          </svg>
                        </div>
                        <p className="text-white text-[13px] font-black tracking-wide leading-none">PrimeCare</p>
                        <p className="text-white/65 text-[9px] text-center leading-tight mt-1 px-2">
                          Your Health, Our Priority
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2 shrink-0"
                          style={{ background: accent!.bg, color: accent!.color }}>
                          {Icon && <Icon />}
                        </div>
                        <p className="text-[11px] font-black text-secondary-dark text-center leading-tight mb-1 px-1">
                          {feat!.title}
                        </p>
                        <p className="text-[9px] text-neutral-400 text-center leading-tight line-clamp-2 px-2">
                          {feat!.body}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              );
            })}

            {/* ── Top-left corner: rating badge ─────────────────────────────── */}
            {visible && (
              <div
                className="absolute z-20 bg-white rounded-2xl border border-brand-100 px-4 py-3.5"
                style={{
                  top: -24,
                  left: -24,
                  minWidth: 172,
                  filter: "drop-shadow(0 8px 24px rgba(40,42,95,0.14))",
                  animation: "hexBloom 0.5s cubic-bezier(0.34,1.56,0.64,1) 700ms both",
                }}
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-2">
                  {[0,1,2,3,4].map(s => (
                    <svg key={s} className="w-3.5 h-3.5 text-warning" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-2xl font-black text-secondary-dark leading-none">
                  4.9{" "}
                  <span className="text-sm font-semibold text-neutral-400">/ 5</span>
                </p>
                <p className="text-[10px] text-neutral-400 leading-tight mt-1.5">
                  12,000+ verified reviews
                </p>
              </div>
            )}

            {/* ── Bottom-right corner: patients badge ───────────────────────── */}
            {visible && (
              <div
                className="absolute z-20 bg-primary rounded-2xl px-4 py-3.5"
                style={{
                  bottom: -24,
                  right: -24,
                  minWidth: 172,
                  filter: "drop-shadow(0 8px 28px rgba(40,42,95,0.30))",
                  animation: "hexBloom 0.5s cubic-bezier(0.34,1.56,0.64,1) 800ms both",
                }}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-black text-white leading-none">50k+</p>
                    <p className="text-[10px] text-white/70 uppercase tracking-wider">Patients Served</p>
                  </div>
                </div>
                {/* Satisfaction bar */}
                <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white/70 rounded-full" style={{ width: "98%" }} />
                </div>
                <p className="text-[9px] text-white/60 mt-1.5 font-medium">98% Satisfaction Rate</p>
              </div>
            )}
          </div>
        </div>

        {/* ── Mobile / tablet grid ─────────────────────────────────────────── */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
          {features.map((feat, i) => {
            const Icon   = FEATURE_ICONS[feat.icon] ?? ShieldIcon;
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <div key={feat.title}
                className="bg-white rounded-2xl p-5 border border-neutral-100 shadow-sm
                           hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                style={{
                  opacity:   visible ? undefined : 0,
                  animation: visible ? `fadeUp 0.55s ease-out ${i * 80}ms both` : undefined,
                }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                  style={{ background: accent.bg, color: accent.color }}>
                  <Icon />
                </div>
                <h3 className="text-sm font-black text-secondary-dark mb-1.5 leading-snug">{feat.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{feat.body}</p>
              </div>
            );
          })}
        </div>

        {/* ── Wave separator before stats ──────────────────────────────────── */}
        <WaveArc className="w-full max-w-2xl mx-auto text-brand-200 opacity-40 mb-8 hidden lg:block" />

        {/* ── Stats strip ──────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {STATS.map(({ Icon, value, label, desc }, i) => (
            <div key={label}
              className="bg-white rounded-2xl p-5 md:p-6 text-center border border-neutral-100 shadow-sm
                         hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              style={{
                opacity:   visible ? undefined : 0,
                animation: visible ? `fadeUp 0.55s ease-out ${600 + i * 100}ms both` : undefined,
              }}
            >
              <div className="w-14 h-14 rounded-full border-2 border-primary/25 bg-primary/5
                              flex items-center justify-center mx-auto mb-3 text-primary">
                <Icon />
              </div>
              <p className="text-2xl font-black text-primary leading-none">{value}</p>
              <p className="text-sm font-bold text-secondary-dark mt-1.5">{label}</p>
              <p className="text-[11px] text-neutral-400 mt-0.5">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
