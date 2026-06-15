import { home } from "@/data";

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg className={`w-4 h-4 ${filled ? "text-warning" : "text-neutral-200"}`}
      viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg className="w-8 h-8 text-brand-200" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21v-7.391c0-5.704 3.748-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.966z" />
    </svg>
  );
}

const AVATAR_COLORS = [
  "bg-primary text-white",
  "bg-brand-400 text-white",
  "bg-accent-400 text-white",
  "bg-success text-white",
];

export function TestimonialsSection() {
  const { testimonials } = home;
  return (
    <section className="bg-neutral-50 py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center bg-brand-100 text-primary
                           text-[11px] font-bold uppercase tracking-[0.18em]
                           px-3.5 py-1.5 rounded-full mb-4">
            {testimonials.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-secondary-dark leading-tight">
            {testimonials.heading}
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {testimonials.items.map((item, i) => (
            <div key={item.name}
              className="bg-white rounded-2xl p-6 border border-neutral-100
                         flex flex-col gap-4 hover:shadow-md transition-shadow duration-200">

              <div className="flex items-start justify-between">
                <QuoteIcon />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <StarIcon key={s} filled={s < item.rating} />
                  ))}
                </div>
              </div>

              <p className="text-sm text-neutral-600 leading-relaxed flex-1 italic">
                &ldquo;{item.body}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-neutral-100">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center
                                 text-sm font-bold shrink-0 ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}>
                  {item.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-secondary-dark leading-tight">{item.name}</p>
                  <p className="text-[11px] text-neutral-400 mt-0.5">{item.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
