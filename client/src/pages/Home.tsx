import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturedEventSection from "@/components/sections/FeaturedEventSection";
import UpcomingEventsSection from "@/components/sections/UpcomingEventsSection";
import PastEventsSection from "@/components/sections/PastEventsSection";
import ContactSection from "@/components/sections/ContactSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <FeaturedEventSection />
        <UpcomingEventsSection />
        <PastEventsSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}