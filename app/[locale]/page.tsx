"use client";

import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Home");

  return (
    <div className="min-h-screen bg-background">
      <main>
        <h1>{t("welcome")}</h1>
        {/* <HeroSection /> */}
        {/* <FeaturedSection /> */}
        {/* <CategoriesSection /> */}
        {/* <QuotesSection /> */}
      </main>
    </div>
  );
}
