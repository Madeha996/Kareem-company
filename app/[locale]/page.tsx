"use client";

import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <AboutSection />
        {/* <FeaturedSection /> */}
        {/* <CategoriesSection /> */}
        {/* <QuotesSection /> */}
      </main>
    </div>
  );
}
