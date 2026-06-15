export const home = {
  hero: {
    eyebrow: "Trusted Healthcare Solutions",
    heading: "Fast.\nSimple.\nReliable Care.",
    subheading:
      "We are dedicated to delivering high-quality, personalised care to every individual — making healthcare accessible, straightforward, and stress-free.",
    cta: { label: "Shop Now", href: "/products" },
    secondary: { label: "Learn More", href: "/about" },
    backgroundImage: "/images/bg-hero.jpeg",
  },

  intro: {
    heading: "The Premier Care Platform for Every Individual",
    body: "PrimeCare establishes itself as the premier care destination where patients can feel at ease and trust in equitable care with every interaction. We strive to foster lifelong relationships with our partners.",
  },

  features: [
    { icon: "shield", title: "Trusted Professionals", description: "Every provider is fully licensed, background-checked, and peer-reviewed." },
    { icon: "clock",  title: "Same-Day Availability", description: "Flexible scheduling including evenings and weekends — get seen when you need it." },
    { icon: "heart",  title: "Personalised Care",     description: "Care plans built around your health history, lifestyle, and personal goals." },
    { icon: "globe",  title: "Telehealth Ready",       description: "Consult a doctor via secure video, phone, or chat — no travel required." },
  ],

  stats: [
    { value: "50,000+", label: "Patients Served" },
    { value: "200+",    label: "Specialist Providers" },
    { value: "4.9 / 5", label: "Average Rating" },
    { value: "98%",     label: "Satisfaction Rate" },
  ],

  about: {
    eyebrow: "Est. 2020",
    heading: "We Help Our Clients Find The Right Care Solution",
    body: "Our approach combines cutting-edge technology with compassionate care to deliver personalised health solutions for every individual. We make healthcare simple, fast, and truly reliable.",
    bullets: [
      "Fully licensed and peer-reviewed healthcare professionals",
      "Same-day appointments available, evenings and weekends included",
      "Integrated telehealth and in-person care options",
      "Transparent pricing — no hidden fees, ever",
    ],
    stats: [
      { value: "50k+", label: "Patients Served" },
      { value: "4.9★", label: "Average Rating" },
    ],
    reviewsLabel: "Patient Reviews",
    floatingCards: {
      satisfaction: { value: "98%", label: "Satisfaction Rate", sub: "From our patients" },
      patients: { value: "50k+", label: "Patients Served" },
    },
    contact: { label: "Call Us Anytime", number: "+1 (800) 774-6328" },
    cta: { label: "Get Started", href: "/contact" },
    image: "/images/bg-hero.jpeg",
  },

  categories: [
    {
      id: "prescription",
      label: "Prescription Medicines",
      description: "Upload your Rx and get verified medicines delivered",
      href: "/products?cat=prescription",
      colorClass: "bg-brand-100 text-primary",
    },
    {
      id: "otc",
      label: "OTC & Generics",
      description: "Quality over-the-counter medicines at great prices",
      href: "/products?cat=otc",
      colorClass: "bg-accent-100 text-accent-500",
    },
    {
      id: "vitamins",
      label: "Vitamins & Supplements",
      description: "Premium supplements to support your wellbeing",
      href: "/products?cat=vitamins",
      colorClass: "bg-success/10 text-success",
    },
    {
      id: "personal-care",
      label: "Personal Care",
      description: "Skincare, hygiene, and everyday wellness",
      href: "/products?cat=personal-care",
      colorClass: "bg-warning/10 text-warning",
    },
    {
      id: "baby",
      label: "Baby & Mother Care",
      description: "Trusted products for every stage of motherhood",
      href: "/products?cat=baby",
      colorClass: "bg-accent-200/40 text-accent-500",
    },
    {
      id: "devices",
      label: "Medical Devices",
      description: "Home monitoring and diagnostic equipment",
      href: "/products?cat=devices",
      colorClass: "bg-neutral-100 text-neutral-600",
    },
  ],

  whyChooseUs: {
    eyebrow: "Why PrimeCare",
    heading: "The Pharmacy That Puts You First",
    body: "From licensed pharmacists to same-day delivery, everything we do is built around your health, your time, and your peace of mind.",
    features: [
      {
        icon: "shield",
        title: "Licensed Pharmacists",
        body: "Every dispensing is verified by a fully licensed, accredited pharmacist — always.",
      },
      {
        icon: "check",
        title: "100% Authentic Products",
        body: "Sourced directly from certified manufacturers. No counterfeits, no grey-market products.",
      },
      {
        icon: "clock",
        title: "Same-Day Delivery",
        body: "Order before 3 PM and receive your medicines at your door the same day.",
      },
      {
        icon: "heart",
        title: "Personalised Support",
        body: "Our pharmacists answer questions, check interactions, and advise on dosage at no extra charge.",
      },
      {
        icon: "tag",
        title: "Best Price Guarantee",
        body: "We match or beat competitor prices on all generics and OTC medicines — guaranteed.",
      },
      {
        icon: "refresh",
        title: "Easy Refills",
        body: "One-tap refill reminders for your regular prescriptions. Never run out again.",
      },
    ],
  },

  inquiry: {
    eyebrow: "Can't Find What You Need?",
    heading: "Submit a Medicine Inquiry",
    body: "Tell our pharmacists what you're looking for. We'll source it, confirm availability, and get back to you within 2 business hours.",
    placeholder: "Enter medicine name, dosage, or description…",
    cta: { label: "Submit Inquiry", href: "/contact?type=inquiry" },
    note: "Responses within 2 business hours · Valid prescription required for Rx medicines",
  },

  testimonials: {
    eyebrow: "Customer Stories",
    heading: "Trusted by Thousands of Patients",
    items: [
      {
        name: "Sarah M.",
        role: "Regular Customer",
        rating: 5,
        body: "PrimeCare has made managing my family's prescriptions so much easier. Same-day delivery is an absolute lifesaver!",
        initials: "SM",
      },
      {
        name: "Dr. James K.",
        role: "General Practitioner",
        rating: 5,
        body: "I recommend PrimeCare to my patients without hesitation. Their pharmacists are thorough and always verify prescriptions correctly.",
        initials: "JK",
      },
      {
        name: "Aisha T.",
        role: "Chronic Care Patient",
        rating: 5,
        body: "The refill reminders mean I never run out of my maintenance medicines. Outstanding service, every single time.",
        initials: "AT",
      },
      {
        name: "Robert P.",
        role: "Senior Customer",
        rating: 5,
        body: "Friendly staff, fair prices, and they actually take time to explain my medications. This is what a pharmacy should be.",
        initials: "RP",
      },
    ],
  },

  contactSection: {
    eyebrow: "Get In Touch",
    heading: "We're Here Whenever You Need Us",
    body: "Whether it's a question about your prescription, pharmacist advice, or a bulk order — our team is ready to help.",
    details: [
      { icon: "phone",    label: "Call Us",        value: "+1 (800) 774-6328" },
      { icon: "email",    label: "Email Us",        value: "hello@primecare.com" },
      { icon: "location", label: "Visit Us",        value: "123 Health Ave, Suite 100, New York, NY 10001" },
      { icon: "clock",    label: "Opening Hours",   value: "Mon–Sat 8 AM–9 PM · Sun 10 AM–6 PM" },
    ],
  },

  partners: {
    label: "In Good Hands — Trusted By",
    logos: ["HealthNet", "MediGroup", "CareFirst", "VitalCare", "LifeHealth", "WellSpring"],
  },

  cta: {
    heading: "Ready to take control of your health?",
    subheading: "Join thousands of people who trust PrimeCare for their everyday healthcare needs.",
    button: { label: "Get Started Today", href: "/contact" },
  },
};
