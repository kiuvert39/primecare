import { home } from "@/data";
import { ICON_MAP, GlobeIcon } from "@/components/ui";

export function PrimaryPanel() {
  return (
    <section className="bg-white pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center pt-10">

        {/* Teal rule */}
        <div className="w-14 h-0.75 bg-primary mx-auto mb-8 rounded-full" />

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-secondary-dark leading-snug">
          {home.intro.heading}
        </h2>

        {/* Subtitle */}
        <p className="mt-5 text-neutral-500 text-base leading-relaxed max-w-2xl mx-auto">
          {home.intro.body}
        </p>

        {/* Icon row */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-10">
          {home.features.map((feature) => {
            const Icon = ICON_MAP[feature.icon] ?? GlobeIcon;
            return (
              <div key={feature.title} className="flex flex-col items-center gap-3">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-sm text-secondary-dark">{feature.title}</h3>
                <p className="text-neutral-500 text-xs leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
