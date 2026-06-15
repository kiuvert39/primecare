import { home } from "@/data";

const MOCK_PRODUCTS = [
  { id: 1, name: "Amoxicillin 500mg", category: "prescription", price: "$12.99", tag: "Prescription" },
  { id: 2, name: "Ibuprofen 400mg", category: "otc", price: "$4.49", tag: "OTC" },
  { id: 3, name: "Vitamin D3 5000IU", category: "vitamins", price: "$9.99", tag: "Supplement" },
  { id: 4, name: "Paracetamol 500mg", category: "otc", price: "$3.99", tag: "OTC" },
  { id: 5, name: "Omega-3 Fish Oil", category: "vitamins", price: "$14.99", tag: "Supplement" },
  { id: 6, name: "Cetirizine 10mg", category: "otc", price: "$5.49", tag: "OTC" },
  { id: 7, name: "Moisturising Cream SPF50", category: "personal-care", price: "$18.99", tag: "Care" },
  { id: 8, name: "Blood Pressure Monitor", category: "devices", price: "$49.99", tag: "Device" },
  { id: 9, name: "Metformin 500mg", category: "prescription", price: "$8.99", tag: "Prescription" },
  { id: 10, name: "Baby Multivitamin Drops", category: "baby", price: "$11.99", tag: "Baby" },
  { id: 11, name: "Zinc + Magnesium", category: "vitamins", price: "$13.99", tag: "Supplement" },
  { id: 12, name: "Digital Thermometer", category: "devices", price: "$16.99", tag: "Device" },
];

const TAG_COLORS: Record<string, string> = {
  Prescription: "bg-brand-100 text-primary",
  OTC: "bg-accent-100 text-accent-500",
  Supplement: "bg-success/10 text-success",
  Care: "bg-warning/10 text-warning",
  Baby: "bg-accent-200/40 text-accent-500",
  Device: "bg-neutral-100 text-neutral-600",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-neutral-50 pt-20">

      {/* Page hero */}
      <section className="bg-white border-b border-neutral-100 px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <span className="inline-flex items-center bg-brand-100 text-primary text-[11px]
                           font-bold uppercase tracking-[0.18em] px-3.5 py-1.5 rounded-full mb-4">
            Our Products
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-secondary-dark leading-tight mb-3">
            Shop All Products
          </h1>
          <p className="text-neutral-500 text-base max-w-xl">
            Browse our full range of authentic medicines, supplements, and health essentials.
          </p>
        </div>
      </section>

      {/* Category filter strip */}
      <section className="bg-white border-b border-neutral-100 px-6 md:px-12 py-4 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-none">
          <button className="shrink-0 px-4 py-2 rounded-full bg-primary text-white text-xs font-semibold">
            All
          </button>
          {home.categories.map((cat) => (
            <button key={cat.id}
              className="shrink-0 px-4 py-2 rounded-full bg-neutral-100 text-neutral-600
                         hover:bg-brand-100 hover:text-primary text-xs font-semibold
                         transition-colors duration-150 whitespace-nowrap">
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Products grid */}
      <section className="px-6 md:px-12 py-10 md:py-14">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {MOCK_PRODUCTS.map((product) => (
              <div key={product.id}
                className="bg-white rounded-2xl border border-neutral-100 p-4
                           hover:shadow-md hover:-translate-y-0.5 transition-all duration-200
                           flex flex-col gap-3 group">

                {/* Product image placeholder */}
                <div className="aspect-square rounded-xl bg-neutral-50 flex items-center justify-center">
                  <svg className="w-10 h-10 text-neutral-200" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M9 3h6a6 6 0 016 6v6a6 6 0 01-6 6H9a6 6 0 01-6-6V9a6 6 0 016-6z" />
                  </svg>
                </div>

                <span className={`self-start text-[10px] font-bold uppercase tracking-wide
                                  px-2 py-0.5 rounded-full ${TAG_COLORS[product.tag] ?? "bg-neutral-100 text-neutral-500"}`}>
                  {product.tag}
                </span>

                <p className="text-xs font-semibold text-secondary-dark leading-snug flex-1">
                  {product.name}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-primary">{product.price}</span>
                  <button className="w-7 h-7 rounded-lg bg-primary/10 text-primary
                                     hover:bg-primary hover:text-white flex items-center justify-center
                                     transition-colors duration-150">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
