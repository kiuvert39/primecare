const SERVICES = [
  {
    id: "delivery",
    icon: "delivery",
    title: "Same-Day Delivery",
    tagline: "Order by 3 PM, delivered by evening.",
    body: "We dispatch all confirmed orders placed before 3 PM for same-day delivery across covered areas. Prescription orders are verified by our pharmacists before dispatch.",
    points: ["Free delivery on orders over $30", "Real-time order tracking", "Contactless delivery available", "Cold-chain storage for temperature-sensitive medicines"],
  },
  {
    id: "refills",
    icon: "refills",
    title: "Prescription Refills",
    tagline: "Never run out of your maintenance medicines.",
    body: "Set up automatic refill reminders for your regular prescriptions. We'll notify you when it's time to refill and process the order with a single tap.",
    points: ["One-tap reorder from your history", "SMS & email reminders", "Pharmacist review on every refill", "Synced with your doctor's records"],
  },
  {
    id: "consultation",
    icon: "consult",
    title: "Pharmacist Consultation",
    tagline: "Expert advice, no appointment needed.",
    body: "Our licensed pharmacists are available for free consultations on medication queries, drug interactions, dosage guidance, and more — in-store or via chat.",
    points: ["Free for all customers", "Drug interaction checks", "Dosage & administration guidance", "Private consultation rooms in-store"],
  },
  {
    id: "telehealth",
    icon: "telehealth",
    title: "Telehealth",
    tagline: "See a doctor from anywhere.",
    body: "Connect with a licensed physician via secure video or phone call. Get diagnoses, prescriptions, and referrals without leaving home.",
    points: ["Available 7 days a week", "Prescriptions sent directly to PrimeCare", "Follow-up support included", "Accepts most health insurance plans"],
  },
];

const ICON_PATHS: Record<string, React.JSX.Element> = {
  delivery: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
    </svg>
  ),
  refills: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  consult: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  telehealth: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-20">

      {/* Page hero */}
      <section className="bg-brand-50 border-b border-brand-100 px-6 md:px-12 py-14 md:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center bg-white text-primary border border-brand-200
                           text-[11px] font-bold uppercase tracking-[0.18em]
                           px-3.5 py-1.5 rounded-full mb-5">
            Our Services
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-secondary-dark leading-tight mb-4">
            More Than a Pharmacy
          </h1>
          <p className="text-neutral-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            From same-day delivery to telehealth consultations, we go beyond dispensing medicines
            to support every aspect of your health.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="px-6 md:px-12 py-14 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20">
          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Icon panel */}
              <div className="flex justify-center">
                <div className="bg-brand-50 rounded-3xl p-12 md:p-16 flex items-center justify-center
                                w-full max-w-sm aspect-square relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5">
                    {Array.from({ length: 6 }, (_, r) =>
                      Array.from({ length: 6 }, (_, c) => (
                        <div key={`${r}-${c}`}
                          className="absolute w-2 h-2 rounded-full bg-primary"
                          style={{ top: `${r * 20 + 5}%`, left: `${c * 20 + 5}%` }} />
                      ))
                    )}
                  </div>
                  <div className="relative z-10 w-20 h-20 rounded-2xl bg-primary/10 text-primary
                                  flex items-center justify-center">
                    {ICON_PATHS[service.icon]}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-5">
                <h2 className="text-2xl sm:text-3xl font-black text-secondary-dark leading-tight">
                  {service.title}
                </h2>
                <p className="text-primary font-semibold text-base">{service.tagline}</p>
                <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">{service.body}</p>
                <ul className="flex flex-col gap-2.5">
                  {service.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-primary/10 text-primary
                                       flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm text-neutral-600 leading-snug">{p}</span>
                    </li>
                  ))}
                </ul>
                <a href="/contact"
                  className="self-start mt-2 px-6 py-3 bg-primary text-white font-semibold
                             text-sm rounded-xl hover:bg-primary-dark transition-colors duration-200">
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
