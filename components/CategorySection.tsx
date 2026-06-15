"use client";

import { home } from "@/data";

// ── Category metadata ─────────────────────────────────────────────────────────

const CATEGORY_META: Record<
  string,
  {
    description: string;
    cta: string;
    gradient: string;
    iconBg: string;
    iconColor: string;
    accentDot: string;
  }
> = {
  prescription: {
    description: "Upload your Rx and get same-day doorstep delivery.",
    cta: "Upload Prescription",
    gradient: "from-violet-600 via-purple-600 to-indigo-700",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    accentDot: "bg-violet-400",
  },
  otc: {
    description: "Fast relief for everyday ailments — no prescription needed.",
    cta: "Shop OTC",
    gradient: "from-sky-500 via-blue-600 to-cyan-700",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    accentDot: "bg-sky-400",
  },
  vitamins: {
    description: "Vitamins & supplements for your daily wellness routine.",
    cta: "Explore Vitamins",
    gradient: "from-emerald-500 via-teal-600 to-green-700",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    accentDot: "bg-emerald-400",
  },
  "personal-care": {
    description: "Skincare, hygiene & grooming essentials you love.",
    cta: "Shop Personal Care",
    gradient: "from-rose-500 via-pink-600 to-fuchsia-700",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
    accentDot: "bg-rose-400",
  },
  baby: {
    description: "Trusted, gentle products for babies, toddlers & new mums.",
    cta: "Shop Baby",
    gradient: "from-amber-400 via-orange-500 to-yellow-600",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    accentDot: "bg-amber-400",
  },
  devices: {
    description: "Blood pressure monitors, glucometers & medical devices.",
    cta: "View Devices",
    gradient: "from-slate-600 via-gray-700 to-zinc-800",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    accentDot: "bg-slate-400",
  },
};

// ── Icons ─────────────────────────────────────────────────────────────────────

function PrescriptionIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  );
}

function OTCIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  );
}

function VitaminsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8M8 12h8" />
    </svg>
  );
}

function PersonalCareIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15a2.25 2.25 0 01-.659 1.591l-1.591 1.591a2.25 2.25 0 01-3.182 0l-1.59-1.591a2.25 2.25 0 000-3.182l1.59-1.591a2.25 2.25 0 013.182 0l1.591 1.59a2.25 2.25 0 010 3.183z" />
    </svg>
  );
}

function BabyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75s.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
    </svg>
  );
}

function DevicesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 13l2-2 2 2 2-3 2 3" />
    </svg>
  );
}

const ICONS: Record<string, ({ className }: { className?: string }) => React.JSX.Element> = {
  prescription: PrescriptionIcon,
  otc: OTCIcon,
  vitamins: VitaminsIcon,
  "personal-care": PersonalCareIcon,
  baby: BabyIcon,
  devices: DevicesIcon,
};

// ── Card ──────────────────────────────────────────────────────────────────────

function CategoryCard({
  id,
  label,
  href,
}: {
  id: string;
  label: string;
  href: string;
  colorClass?: string;
}) {
  const meta = CATEGORY_META[id];
  const Icon = ICONS[id];

  if (!meta || !Icon) return null;

  return (
    <div className="group h-56 [perspective:1000px]">
      <div
        className="relative w-full h-full [transform-style:preserve-3d]
                   transition-all duration-[620ms] ease-[cubic-bezier(0.23,1,0.32,1)]
                   group-hover:[transform:rotateY(180deg)]"
      >
        {/* ── FRONT ─────────────────────────────────────────────────── */}
        <div
          className="absolute inset-0 [backface-visibility:hidden]
                     flex flex-col items-center justify-center gap-4
                     bg-white rounded-3xl
                     border border-neutral-100
                     shadow-[0_2px_12px_rgba(0,0,0,0.06)]
                     transition-shadow duration-300
                     group-hover:shadow-none"
        >
          {/* Soft tinted top strip */}
          <div className={`absolute top-0 inset-x-0 h-1.5 rounded-t-3xl bg-gradient-to-r ${meta.gradient} opacity-60`} />

          {/* Icon bubble */}
          <span
            className={`w-16 h-16 rounded-2xl flex items-center justify-center
                       ${meta.iconBg} ${meta.iconColor}
                       transition-transform duration-500 ease-out
                       group-hover:scale-110`}
          >
            <Icon className="w-8 h-8" />
          </span>

          {/* Label */}
          <span className="text-sm font-bold text-slate-800 text-center px-3 leading-snug">
            {label}
          </span>

          {/* Hover dot hint */}
          <span
            className={`w-1.5 h-1.5 rounded-full ${meta.accentDot}
                       opacity-0 group-hover:opacity-100
                       transition-opacity duration-300`}
          />
        </div>

        {/* ── BACK ──────────────────────────────────────────────────── */}
        <a
          href={href}
          className={`absolute inset-0 [backface-visibility:hidden]
                     [transform:rotateY(180deg)]
                     rounded-3xl overflow-hidden
                     flex flex-col justify-between p-5
                     cursor-pointer
                     bg-gradient-to-br ${meta.gradient}`}
        >
          {/* Subtle noise texture for depth */}
          <div
            className="absolute inset-0 rounded-3xl opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: "180px",
            }}
          />

          {/* Decorative glow blob */}
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-black/10 blur-2xl pointer-events-none" />

          {/* Top row */}
          <div className="relative flex items-start justify-between">
            <span className="bg-white/20 rounded-xl p-2 backdrop-blur-sm">
              <Icon className="w-5 h-5 text-white" />
            </span>
            <span className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-white/50 mt-1">
              {label}
            </span>
          </div>

          {/* Description */}
          <p className="relative text-[13px] leading-relaxed text-white/90 font-medium">
            {meta.description}
          </p>

          {/* CTA */}
          <div className="relative">
            <span
              className="inline-flex items-center gap-1.5
                         bg-white/95 text-slate-900 text-[11px] font-bold
                         px-4 py-2 rounded-full
                         shadow-lg shadow-black/20
                         transition-transform duration-200
                         group-hover:translate-x-0.5"
            >
              {meta.cta}
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export function CategorySection() {
  return (
    <section className="bg-neutral-50 py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span
            className="inline-flex items-center gap-2 text-xs font-bold uppercase
                       tracking-widest text-primary px-4 py-1.5 rounded-full mb-4
                       bg-primary/10 border border-primary/20"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Browse by category
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
            Everything You Need,
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-primary to-sky-500">
              {" "}All in One Place
            </span>
          </h2>

          <p className="mt-4 text-neutral-500 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Hover any card to explore what's inside — from prescriptions to everyday health essentials.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {home.categories.map((cat) => (
            <CategoryCard key={cat.id} {...cat} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/products"
            className="inline-flex items-center gap-2.5
                       bg-slate-900 hover:bg-slate-700
                       text-white text-sm font-bold
                       px-7 py-3 rounded-full
                       shadow-lg shadow-slate-900/20
                       transition-all duration-200 hover:-translate-y-0.5"
          >
            View all products
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}