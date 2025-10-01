"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function LanguageDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const getInitialLang = () => {
    if (pathname.startsWith("/ar")) return "ar";
    if (pathname.startsWith("/en")) return "en";
    return localStorage.getItem("lang") || "en";
  };

  const [lang, setLang] = useState(getInitialLang());
  const [open, setOpen] = useState(false);

  const changeLang = (newLang: string) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    setOpen(false);
    const newPath = pathname.replace(/^\/(en|ar)/, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1 border border-gray-300 rounded-md bg-white shadow-sm hover:bg-gray-50 transition"
      >
        {lang === "en" ? "🇺🇸 English" : "🇸🇾 العربية"} ▼
      </button>

      {open && (
        <ul className="absolute right-0 top-full mt-2 w-36 bg-white border border-gray-300 rounded-md shadow-lg z-50">
          <li
            onClick={() => changeLang("en")}
            className={`px-4 py-2 cursor-pointer flex items-center gap-2 hover:bg-gray-100 ${
              lang === "en" ? "bg-gray-100 font-semibold" : ""
            }`}
          >
            🇺🇸 English
          </li>
          <li
            onClick={() => changeLang("ar")}
            className={`px-4 py-2 cursor-pointer flex items-center gap-2 hover:bg-gray-100 ${
              lang === "ar" ? "bg-gray-100 font-semibold" : ""
            }`}
          >
            🇸🇾 العربية
          </li>
        </ul>
      )}
    </div>
  );
}
