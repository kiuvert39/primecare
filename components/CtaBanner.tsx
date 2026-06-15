import { home } from "@/data";
import { Button } from "@/components/ui";

export function CtaBanner() {
  return (
    <section className="bg-primary px-6 md:px-12 py-24 text-center">
      <h2 className="text-3xl font-bold text-white max-w-xl mx-auto leading-snug">
        {home.cta.heading}
      </h2>
      <p className="mt-4 text-primary-light max-w-md mx-auto text-sm leading-relaxed">
        {home.cta.subheading}
      </p>
      <div className="mt-8">
        <Button href={home.cta.button.href} variant="white">
          {home.cta.button.label}
        </Button>
      </div>
    </section>
  );
}
