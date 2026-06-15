import { home } from "@/data";

export function Stats() {
  return (
    <section className="bg-neutral-50 border-y border-neutral-100 px-6 md:px-12 py-20">
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
        {home.stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-4xl font-black text-primary">{stat.value}</p>
            <p className="mt-2 text-sm text-neutral-400 uppercase tracking-wide">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
