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

  categories: {
    eyebrow: "Browse by Category",
    heading: "Everything You Need, All in One Place",
    subheading:
      "From prescription medicines to everyday health essentials — shop every category with confidence.",
    items: [
      {
        id: "prescription",
        label: "Prescription Medicines",
        description: "Upload your Rx and get verified medicines delivered to your door.",
        href: "/products?cat=prescription",
        image: "/images/med1.jpeg",
        gradient: "linear-gradient(145deg, rgba(30,31,69,0.78) 0%, rgba(40,42,95,0.72) 100%)",
        iconColor: "text-primary",
      },
      {
        id: "otc",
        label: "OTC & Generics",
        description: "Quality over-the-counter medicines at great prices, no prescription needed.",
        href: "/products?cat=otc",
        image: "/images/images (1).jpeg",
        gradient: "linear-gradient(145deg, rgba(124,45,18,0.78) 0%, rgba(194,65,12,0.72) 100%)",
        iconColor: "text-orange-600",
      },
      {
        id: "vitamins",
        label: "Vitamins & Supplements",
        description: "Premium supplements to support your daily wellbeing and immune health.",
        href: "/products?cat=vitamins",
        image: "/images/download (1).jpeg",
        gradient: "linear-gradient(145deg, rgba(20,83,45,0.78) 0%, rgba(22,101,52,0.72) 100%)",
        iconColor: "text-green-700",
      },
      {
        id: "personal-care",
        label: "Personal Care",
        description: "Skincare, hygiene, and everyday wellness essentials you can trust.",
        href: "/products?cat=personal-care",
        image: "/images/bg-hero.jpeg",
        gradient: "linear-gradient(145deg, rgba(76,29,149,0.78) 0%, rgba(109,40,217,0.72) 100%)",
        iconColor: "text-violet-700",
      },
      {
        id: "baby",
        label: "Baby & Mother Care",
        description: "Trusted products for every stage of motherhood and early childhood.",
        href: "/products?cat=baby",
        image: "/images/images (1).jpeg",
        gradient: "linear-gradient(145deg, rgba(131,24,67,0.78) 0%, rgba(190,24,93,0.72) 100%)",
        iconColor: "text-pink-700",
      },
      {
        id: "devices",
        label: "Medical Devices",
        description: "Home monitoring and diagnostic equipment for accurate health tracking.",
        href: "/products?cat=devices",
        image: "/images/med1.jpeg",
        gradient: "linear-gradient(145deg, rgba(12,74,110,0.78) 0%, rgba(3,105,161,0.72) 100%)",
        iconColor: "text-sky-700",
      },
    ],
  },

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
        avatar: "https://i.pravatar.cc/150?img=47",
      },
      {
        name: "Dr. James K.",
        role: "General Practitioner",
        rating: 5,
        body: "I recommend PrimeCare to my patients without hesitation. Their pharmacists are thorough and always verify prescriptions correctly.",
        initials: "JK",
        avatar: "https://i.pravatar.cc/150?img=12",
      },
      {
        name: "Aisha T.",
        role: "Chronic Care Patient",
        rating: 5,
        body: "The refill reminders mean I never run out of my maintenance medicines. Outstanding service, every single time.",
        initials: "AT",
        avatar: "https://i.pravatar.cc/150?img=45",
      },
      {
        name: "Robert P.",
        role: "Senior Customer",
        rating: 5,
        body: "Friendly staff, fair prices, and they actually take time to explain my medications. This is what a pharmacy should be.",
        initials: "RP",
        avatar: "https://i.pravatar.cc/150?img=56",
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

  faq: {
    eyebrow: "FAQ",
    heading: "Got Questions?\nWe Have\nAnswers.",
    subheading:
      "Everything you need to know about ordering, delivery, and our pharmacy services.",
    contact: {
      prompt: "Still have questions?",
      cta:    "Chat with a pharmacist",
      href:   "/contact",
    },
    items: [
      {
        question: "How do I submit a prescription?",
        answer:
          "Upload a clear photo or scan of your prescription during checkout. Our licensed pharmacists verify every prescription within 30 minutes before dispensing — no waiting around.",
      },
      {
        question: "Do you offer same-day delivery?",
        answer:
          "Yes. Orders placed before 3 PM are delivered the same day within our delivery zones. You'll receive an SMS with real-time tracking once your order is dispatched by our rider.",
      },
      {
        question: "Are your medicines authentic and safe?",
        answer:
          "Every medicine we stock is sourced directly from certified manufacturers and licensed wholesalers. We never carry grey-market or counterfeit products, and each batch is verified on arrival.",
      },
      {
        question: "Can I set up automatic refill reminders?",
        answer:
          "Yes. After your first order we offer one-tap refill reminders for maintenance prescriptions. Manage your schedule anytime from your account dashboard.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit and debit cards, mobile money, bank transfer, and cash on delivery for eligible areas. All online payments are processed over a secure, encrypted connection.",
      },
      {
        question: "Is a pharmacist consultation free?",
        answer:
          "Absolutely. Our licensed pharmacists are available by chat, phone, or in-store. Medication queries, interaction checks, and dosage advice are always free of charge.",
      },
      {
        question: "What is your return and refund policy?",
        answer:
          "Unopened, un-dispensed items can be returned within 7 days of purchase for a full refund. Prescription medicines cannot be returned once dispensed for regulatory reasons.",
      },
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
