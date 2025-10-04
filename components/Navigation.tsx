"use client";
import { navItems } from "@/lib/constants";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import MobileNavigtaion from "./MobileNavigation";
import LanguageDropdown from "./ui/LanguageDropdown";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Navigation() {
  const { locale } = useParams();
  const t = useTranslations("General");
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="logo-kareemco"
              width={150}
              height={50}
            />
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}/${item.href}`}
                className="relative group hover:text-blue-600 transition"
              >
                {t(item.label)}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>
          <div className="flex gap-1">
            {/* <ThemeToggle /> */}
            <LanguageDropdown />
          </div>

          {/* Mobile nav */}

          <MobileNavigtaion />
        </div>
      </div>
    </nav>
  );
}
