import { home } from "@/data";

export function Intro() {
  return (
    <section className="bg-white px-6 md:px-12 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-16 h-1 bg-primary mx-auto mb-8 rounded-full" />
        <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-snug">
          {home.intro.heading}
        </h2>
        <p className="mt-5 text-neutral-500 text-base leading-relaxed">
          {home.intro.body}
        </p>
      </div>
    </section>
  );
}
