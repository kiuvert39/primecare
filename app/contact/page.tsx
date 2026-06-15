import { ContactSection } from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-20">

      {/* Page header */}
      <section className="bg-brand-50 border-b border-brand-100 px-6 md:px-12 py-14 md:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center bg-white text-primary border border-brand-200
                           text-[11px] font-bold uppercase tracking-[0.18em]
                           px-3.5 py-1.5 rounded-full mb-5">
            Contact Us
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-secondary-dark leading-tight mb-4">
            Let&apos;s Talk
          </h1>
          <p className="text-neutral-500 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            Questions about your prescription? Need pharmacist advice? Want to place a bulk order?
            We&apos;re here to help.
          </p>
        </div>
      </section>

      <ContactSection />

    </main>
  );
}
