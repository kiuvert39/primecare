import { home } from "@/data";

function ShieldIcon() {
  return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3L4 7v5c0 5.25 3.5 9.74 8 11 4.5-1.26 8-5.75 8-11V7l-8-4z" /></svg>;
}
function CheckCircleIcon() {
  return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="9" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l3 3 5-5" /></svg>;
}
function ClockIcon() {
  return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="9" /><path strokeLinecap="round" d="M12 7v5l3 3" /></svg>;
}
function HeartIcon() {
  return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21 4.318 12.682a4.5 4.5 0 010-6.364z" /></svg>;
}
function TagIcon() {
  return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M3 3h8l10 10a2 2 0 010 2.83l-5.17 5.17a2 2 0 01-2.83 0L3 11V3z" /></svg>;
}
function RefreshIcon() {
  return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m0 0a8 8 0 0114.836 2M4.582 9H9m11 11v-5h-.582m0 0a8 8 0 01-14.836-2M19.418 15H15" /></svg>;
}

const ICONS: Record<string, () => React.JSX.Element> = {
  shield: ShieldIcon, check: CheckCircleIcon, clock: ClockIcon,
  heart: HeartIcon, tag: TagIcon, refresh: RefreshIcon,
};

const ACCENT_COLORS = [
  "bg-primary/10 text-primary",
  "bg-success/10 text-success",
  "bg-warning/10 text-warning",
  "bg-accent-200/60 text-accent-500",
  "bg-brand-200/60 text-brand-700",
  "bg-neutral-100 text-neutral-600",
];

export function WhyChooseUsSection() {
  const { whyChooseUs } = home;
  return (
    <section className="bg-brand-50 py-16 md:py-24 px-6 md:px-12 overflow-hidden relative">

      {/* Subtle background ring */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-brand-200/40 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full border border-brand-200/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center bg-white text-primary border border-brand-200
                           text-[11px] font-bold uppercase tracking-[0.18em]
                           px-3.5 py-1.5 rounded-full mb-4">
            {whyChooseUs.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-secondary-dark leading-tight mb-4">
            {whyChooseUs.heading}
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            {whyChooseUs.body}
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {whyChooseUs.features.map((feat, i) => {
            const Icon = ICONS[feat.icon] ?? ShieldIcon;
            return (
              <div key={feat.title}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-100
                           hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${ACCENT_COLORS[i % ACCENT_COLORS.length]}`}>
                  <Icon />
                </div>
                <h3 className="text-base font-bold text-secondary-dark mb-2">{feat.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{feat.body}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom stat strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "50k+",   label: "Happy Patients" },
            { value: "200+",   label: "Medicine Brands" },
            { value: "4.9★",   label: "Average Rating" },
            { value: "98%",    label: "On-Time Delivery" },
          ].map((s) => (
            <div key={s.label}
              className="bg-white rounded-2xl px-5 py-4 text-center border border-neutral-100">
              <p className="text-2xl sm:text-3xl font-black text-primary leading-none">{s.value}</p>
              <p className="text-[11px] text-neutral-400 uppercase tracking-wider mt-1.5">{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
