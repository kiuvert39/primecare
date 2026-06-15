import { home, site } from "@/data";

// Minimal inline SVGs — swap for lucide-react or heroicons later
function ShieldIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L4 7v5c0 5.25 3.5 9.74 8 11 4.5-1.26 8-5.75 8-11V7l-8-4z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M12 7v5l3 3" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21 4.318 12.682a4.5 4.5 0 010-6.364z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
    </svg>
  );
}

const ICONS: Record<string, () => React.JSX.Element> = {
  shield: ShieldIcon,
  clock:  ClockIcon,
  heart:  HeartIcon,
  globe:  GlobeIcon,
};

export function Features() {
  return (
    <section className="bg-neutral-50 px-6 md:px-12 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-semibold text-center text-primary mb-14 uppercase tracking-widest">
          Why choose {site.name}?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {home.features.map((feature) => {
            const Icon = ICONS[feature.icon] ?? GlobeIcon;
            return (
              <div key={feature.title} className="flex flex-col items-center text-center gap-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                  <Icon />
                </div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
