"use client";

import { useState } from "react";
import { home } from "@/data";
import { Button } from "@/components/ui";

function PhoneIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2A19.8 19.8 0 013.08 5.18 2 2 0 015.06 3h3a2 2 0 012 1.72l.34 2.28a2 2 0 01-.57 1.77l-1.2 1.2a16 16 0 006.17 6.17l1.2-1.2a2 2 0 011.77-.57l2.28.34A2 2 0 0122 16.92z" /></svg>;
}
function EmailIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
}
function LocationIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
}
function ClockIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="9" /><path strokeLinecap="round" d="M12 7v5l3 3" /></svg>;
}

const DETAIL_ICONS: Record<string, () => React.JSX.Element> = {
  phone: PhoneIcon, email: EmailIcon, location: LocationIcon, clock: ClockIcon,
};

export function ContactSection() {
  const { contactSection } = home;
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm text-secondary-dark " +
    "placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary " +
    "transition-all duration-200";

  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-secondary-dark leading-tight mb-4">
            {contactSection.heading}
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            {contactSection.body}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

          {/* Contact details */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {contactSection.details.map((d) => {
              const Icon = DETAIL_ICONS[d.icon] ?? PhoneIcon;
              return (
                <div key={d.label}
                  className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl
                             bg-neutral-50 border border-neutral-100">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary
                                  flex items-center justify-center shrink-0">
                    <Icon />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-0.5">
                      {d.label}
                    </p>
                    <p className="text-sm font-semibold text-secondary-dark leading-snug">{d.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3 bg-neutral-50 rounded-2xl p-6 sm:p-8 border border-neutral-100">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center">
                  <svg className="w-7 h-7 text-success" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-secondary-dark">Message Sent!</h3>
                <p className="text-sm text-neutral-500 max-w-xs">
                  We&apos;ll get back to you within 2 business hours.
                </p>
                <button onClick={() => setSent(false)}
                  className="text-sm text-primary font-semibold hover:underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                      Full Name
                    </label>
                    <input required type="text" placeholder="Jane Smith"
                      className={inputClass} value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                      Email Address
                    </label>
                    <input required type="email" placeholder="jane@email.com"
                      className={inputClass} value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                    Subject
                  </label>
                  <input required type="text" placeholder="How can we help?"
                    className={inputClass} value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                    Message
                  </label>
                  <textarea required rows={5} placeholder="Describe your question or request…"
                    className={`${inputClass} resize-none`} value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })} />
                </div>
                <Button type="submit" size="md" className="self-start">
                  Send Message
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
