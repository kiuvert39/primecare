import { home, site } from "@/data";
import Image from "next/image";

const TEAM = [
  { name: "Dr. Emily Carter",  role: "Chief Pharmacist",     initials: "EC", color: "bg-primary" },
  { name: "Marcus Osei",       role: "Head of Operations",   initials: "MO", color: "bg-brand-400" },
  { name: "Priya Nair",        role: "Clinical Lead",         initials: "PN", color: "bg-accent-400" },
  { name: "James Whitfield",   role: "Customer Experience",  initials: "JW", color: "bg-success" },
];

const VALUES = [
  { title: "Patient First",    body: "Every decision we make starts with a simple question: is this best for our patients?" },
  { title: "Radical Honesty",  body: "Transparent pricing, clear instructions, and honest advice — always." },
  { title: "Continuous Care",  body: "Healthcare doesn't stop at the pharmacy counter. We follow up, remind, and support." },
  { title: "Accessibility",    body: "Quality healthcare should be available to everyone, regardless of location or budget." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-20">

      {/* Hero */}
      <section className="relative bg-secondary-dark px-6 md:px-12 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image src={home.about.image} alt="" fill className="object-cover object-top" />
          <div className="absolute inset-0 bg-secondary-dark/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="inline-flex items-center border border-white/20 text-white/70
                           text-[11px] font-bold uppercase tracking-[0.18em]
                           px-3.5 py-1.5 rounded-full mb-5">
            {home.about.eyebrow}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight max-w-2xl mb-5">
            Pharmacy Built Around You
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl leading-relaxed">
            {home.about.body}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center bg-brand-100 text-primary text-[11px]
                             font-bold uppercase tracking-[0.18em] px-3.5 py-1.5 rounded-full mb-5">
              Our Mission
            </span>
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
          <div className="grid grid-cols-2 gap-4">
            {home.about.stats.map((s) => (
              <div key={s.label}
                className="bg-brand-50 rounded-2xl p-6 border border-brand-100 text-center">
                <p className="text-3xl md:text-4xl font-black text-primary leading-none">{s.value}</p>
                <p className="text-[11px] text-neutral-400 uppercase tracking-wider mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-neutral-50 px-6 md:px-12 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center bg-brand-100 text-primary text-[11px]
                             font-bold uppercase tracking-[0.18em] px-3.5 py-1.5 rounded-full mb-4">
              What We Stand For
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-secondary-dark">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, i) => (
              <div key={v.title}
                className="bg-white rounded-2xl p-6 border border-neutral-100
                           hover:shadow-md transition-shadow duration-200">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary
                                flex items-center justify-center mb-4 text-base font-black">
                  {i + 1}
                </div>
                <h3 className="font-black text-secondary-dark mb-2">{v.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="px-6 md:px-12 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center bg-brand-100 text-primary text-[11px]
                             font-bold uppercase tracking-[0.18em] px-3.5 py-1.5 rounded-full mb-4">
              The People Behind PrimeCare
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-secondary-dark">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 md:gap-8">
            {TEAM.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center gap-3">
                <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full ${member.color}
                                  flex items-center justify-center text-white
                                  text-xl sm:text-2xl font-black`}>
                  {member.initials}
                </div>
                <div>
                  <p className="font-bold text-secondary-dark text-sm sm:text-base">{member.name}</p>
                  <p className="text-[11px] text-neutral-400 mt-0.5">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
