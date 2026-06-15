import { Hero }                  from "@/components/Hero";
import { CategorySection }        from "@/components/CategorySection";
import AboutSection               from "@/components/AboutSection";
import { WhyChooseUsSection }     from "@/components/WhyChooseUsSection";
import { MedicineInquirySection } from "@/components/MedicineInquirySection";
import { TestimonialsSection }    from "@/components/TestimonialsSection";
import { ContactSection }         from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen font-sans">
      <Hero />
        <AboutSection />
      <CategorySection />
    
      <WhyChooseUsSection />
      <MedicineInquirySection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
