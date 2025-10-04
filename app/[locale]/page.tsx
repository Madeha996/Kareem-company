"use client";

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContacSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SuppliersSection from "@/components/SuppliersSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SuppliersSection />
        <ContactSection />
        {/* <FeaturedSection /> */}
        {/* <CategoriesSection /> */}
      </main>
    </div>
  );
}
