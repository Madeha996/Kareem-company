"use client";

import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        {/* <FeaturedSection /> */}
        {/* <CategoriesSection /> */}
        {/* <QuotesSection /> */}
      </main>
    </div>
  );
}
