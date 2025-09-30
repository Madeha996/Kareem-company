"use client";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import LanguageDropdown from "./LanguageDropdown";
import ContactUsBtn from "./ContactUsBtn";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4  bg-amber-500">
        <Logo />

        {/* NavLinks وسط الهيدر */}
        <div className="hidden md:flex">
          <NavLinks />
        </div>

        {/* Language + Contact */}
        <div className="flex items-center gap-4">
          <LanguageDropdown />
          <ContactUsBtn />
        </div>
      </div>
    </header>
  );
}
