export const nav = {
  links: [
    { label: "Products",  href: "/products" },
    { label: "Services",  href: "/services" },
    { label: "About",     href: "/about" },
    { label: "Contact",   href: "/contact" },
  ],
  cta: { label: "Order Now", href: "/products" },
};

export const footer = {
  tagline: "Quality medicines, delivered with care.",
  columns: [
    {
      heading: "Shop",
      links: [
        { label: "All Products",      href: "/products" },
        { label: "Prescription",      href: "/products?cat=prescription" },
        { label: "OTC & Generics",    href: "/products?cat=otc" },
        { label: "Vitamins",          href: "/products?cat=vitamins" },
        { label: "Personal Care",     href: "/products?cat=personal-care" },
      ],
    },
    {
      heading: "Services",
      links: [
        { label: "Same-Day Delivery",       href: "/services#delivery" },
        { label: "Prescription Refills",    href: "/services#refills" },
        { label: "Pharmacist Consult",      href: "/services#consultation" },
        { label: "Telehealth",              href: "/services#telehealth" },
        { label: "Medicine Inquiry",        href: "/contact?type=inquiry" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us",    href: "/about" },
        { label: "Our Team",    href: "/about#team" },
        { label: "Careers",     href: "/careers" },
        { label: "Press",       href: "/press" },
        { label: "Blog",        href: "/blog" },
      ],
    },
    {
      heading: "Support",
      links: [
        { label: "Contact Us",      href: "/contact" },
        { label: "Help Center",     href: "/help" },
        { label: "Privacy Policy",  href: "/privacy" },
        { label: "Terms of Use",    href: "/terms" },
        { label: "Accessibility",   href: "/accessibility" },
      ],
    },
  ],
  badge: "Licensed & Regulated Pharmacy",
  copyright: "© 2026 PrimeCare. All rights reserved.",
};
