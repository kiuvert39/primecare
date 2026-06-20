import { home } from "@/data";
import Image from "next/image";

const TEAM = [
  {
    name: "Dr. Emily Carter",
    role: "Chief Pharmacist",
    avatar: "https://i.pravatar.cc/150?img=44",
  },
  {
    name: "Marcus Osei",
    role: "Head of Operations",
    avatar: "https://i.pravatar.cc/150?img=68",
  },
  {
    name: "Priya Nair",
    role: "Clinical Lead",
    avatar: "https://i.pravatar.cc/150?img=49",
  },
  {
    name: "James Whitfield",
    role: "Customer Experience",
    avatar: "https://i.pravatar.cc/150?img=65",
  },
];

const VALUES = [
  {
    title: "Patient First",
    body: "Every decision we make starts with a simple question: is this best for our patients?",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Radical Honesty",
    body: "Transparent pricing, clear instructions, and honest advice — always.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Continuous Care",
    body: "Healthcare doesn't stop at the pharmacy counter. We follow up, remind, and support.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
  },
  {
    title: "Accessibility",
    body: "Quality healthcare should be available to everyone, regardless of location or budget.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

// ── Shape helpers ─────────────────────────────────────────────────────────────

function DotsGrid({ className }: { className?: string }) {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" className={className} aria-hidden>
      {Array.from({ length: 6 }, (_, row) =>
        Array.from({ length: 6 }, (_, col) => (
          <circle key={`${row}-${col}`} cx={col * 24 + 4} cy={row * 24 + 4} r="3" fill="currentColor" />
        ))
      )}
    </svg>
  );
}

function RingDecor({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="65" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.75" />
    </svg>
  );
}

function PlusMarks({ className }: { className?: string }) {
  const pts = [
    { x: 0,  y: 0  }, { x: 40, y: 16 }, { x: 80, y: 0  },
    { x: 16, y: 40 }, { x: 56, y: 40 }, { x: 0,  y: 56 },
  ];
  return (
    <svg width="100" height="72" viewBox="0 0 100 72" className={className} aria-hidden>
      {pts.map(({ x, y }, i) => (
        <path key={i} d={`M${x + 5} ${y + 2}v8M${x + 1} ${y + 6}h8`}
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      ))}
    </svg>
  );
}

function HexOutline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 116" className={className} aria-hidden>
      <polygon points="50,4 96,28 96,88 50,112 4,88 4,28"
        fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function DiamondDecor({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" className={className} aria-hidden>
      <rect x="3" y="3" width="14" height="14" fill="currentColor" transform="rotate(45 10 10)" />
    </svg>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-20">

      {/* ── Hero ── */}
      <section className="relative bg-secondary-dark px-6 md:px-12 py-20 md:py-32 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 opacity-25">
          <Image src={home.about.image} alt="" fill className="object-cover object-top" />
        </div>
        <div className="absolute inset-0 bg-secondary-dark/80" />

        {/* Shape decorations */}
        <RingDecor className="absolute -top-16 -right-16 w-72 h-72 text-brand-400 opacity-10" />
        <RingDecor className="absolute -bottom-20 -left-20 w-56 h-56 text-white opacity-5" />
        <DotsGrid className="absolute top-10 right-10 text-white opacity-10" />
        <HexOutline className="absolute bottom-12 right-1/4 w-24 h-24 text-brand-300 opacity-10" />
        <DiamondDecor className="absolute top-1/3 left-1/3 text-brand-300 opacity-15 w-4 h-4" />
        <DiamondDecor className="absolute top-1/4 right-1/3 text-white opacity-10 w-3 h-3" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="inline-flex items-center bg-white/10 text-brand-300 border border-white/20
                           text-[11px] font-bold uppercase tracking-[0.18em]
                           px-3.5 py-1.5 rounded-full mb-6">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight max-w-2xl mb-5">
            Pharmacy Built<br />Around You
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl leading-relaxed">
            {home.about.body}
          </p>
        </div>

        {/* White wave transition */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none"
            className="w-full h-10 md:h-16 block" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,80 C480,20 960,20 1440,80 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="relative px-6 md:px-12 py-16 md:py-28 overflow-hidden">
        {/* Shape decorations */}
        <DotsGrid className="absolute top-8 right-8 text-brand-200 opacity-60" />
        <PlusMarks className="absolute bottom-12 left-6 text-accent-300 opacity-40" />
        <HexOutline className="absolute top-1/2 -translate-y-1/2 -right-10 w-40 h-40 text-brand-100 opacity-70" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-secondary-dark leading-tight mb-5">
              {home.about.heading}
            </h2>
            <p className="text-neutral-500 text-base leading-relaxed mb-8">{home.about.body}</p>
            <ul className="flex flex-col gap-3">
              {home.about.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary
                                   flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm text-neutral-600 leading-snug">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            {/* Decorative ring behind stats */}
            <RingDecor className="absolute -top-8 -right-8 w-48 h-48 text-brand-200 opacity-40" />
            <DotsGrid className="absolute -bottom-6 -left-6 text-brand-300 opacity-30" />

            <div className="relative z-10 grid grid-cols-2 gap-4">
              {home.about.stats.map((s) => (
                <div key={s.label}
                  className="bg-brand-50 rounded-2xl p-6 border border-brand-100 text-center
                             hover:border-brand-200 hover:shadow-md transition-all duration-200">
                  <p className="text-3xl md:text-4xl font-black text-primary leading-none">{s.value}</p>
                  <p className="text-[11px] text-neutral-400 uppercase tracking-wider mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="relative bg-neutral-50 px-6 md:px-12 py-16 md:py-24 overflow-hidden">
        {/* Shape decorations */}
        <HexOutline className="absolute -top-12 -left-12 w-48 h-48 text-brand-200 opacity-40" />
        <PlusMarks className="absolute top-8 right-12 text-accent-300 opacity-35" />
        <RingDecor className="absolute -bottom-16 right-0 w-56 h-56 text-brand-100 opacity-50" />
        <DiamondDecor className="absolute top-1/2 left-1/2 text-brand-200 opacity-20 w-5 h-5" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em]
                             text-brand-500 bg-brand-50 border border-brand-100
                             px-3.5 py-1.5 rounded-full mb-4">
              What We Stand For
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-secondary-dark">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v) => (
              <div key={v.title}
                className="bg-white rounded-2xl p-6 border border-neutral-100
                           hover:shadow-md hover:border-brand-200 transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary
                                flex items-center justify-center mb-4">
                  {v.icon}
                </div>
                <h3 className="font-black text-secondary-dark mb-2">{v.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section id="team" className="relative px-6 md:px-12 py-16 md:py-28 overflow-hidden">
        {/* Shape decorations */}
        <RingDecor className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 text-brand-100 opacity-30 pointer-events-none" />
        <DotsGrid className="absolute top-10 left-6 text-brand-200 opacity-40" />
        <DotsGrid className="absolute bottom-10 right-6 text-brand-200 opacity-40" />
        <HexOutline className="absolute bottom-16 left-1/4 w-20 h-20 text-accent-200 opacity-30" />
        <DiamondDecor className="absolute top-16 right-1/3 text-brand-300 opacity-20 w-4 h-4" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em]
                             text-brand-500 bg-brand-50 border border-brand-100
                             px-3.5 py-1.5 rounded-full mb-4">
              The People
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-secondary-dark">Meet Our Team</h2>
            <p className="text-neutral-400 text-sm mt-3 max-w-sm mx-auto">
              Licensed professionals dedicated to your health and wellbeing.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
            {TEAM.map((member) => (
              <div key={member.name}
                className="group bg-white rounded-2xl border border-neutral-100
                           p-6 flex flex-col items-center text-center
                           hover:shadow-xl hover:border-brand-200
                           transition-all duration-300">

                {/* Avatar */}
                <div className="relative mb-5">
                  {/* Decorative outer ring */}
                  <div className="absolute -inset-1.5 rounded-full border-2 border-brand-200
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Accent ring */}
                  <div className="absolute -inset-3 rounded-full border border-brand-100
                                  opacity-60 group-hover:opacity-0 transition-opacity duration-300" />

                  <div className="relative w-24 h-24 rounded-full overflow-hidden
                                  ring-4 ring-white shadow-lg">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      sizes="96px"
                      unoptimized
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                <p className="font-black text-secondary-dark text-sm sm:text-base leading-tight">
                  {member.name}
                </p>
                <p className="text-[11px] text-brand-500 font-semibold mt-1 uppercase tracking-wide">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
