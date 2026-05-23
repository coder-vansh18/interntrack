import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import TimelineSection from "@/components/landing/TimelineSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05050a]">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TimelineSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
