"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  // تحديد اللغة الافتراضية من URL أو من localStorage
  const getInitialLang = () => {
    if (pathname.startsWith("/ar")) return "ar";
    if (pathname.startsWith("/en")) return "en";
    return localStorage.getItem("lang") || "en";
  };

  const [lang, setLang] = useState(getInitialLang());

  const changeLang = (newLang: string) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    const newPath = pathname.replace(/^\/(en|ar)/, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <header className="flex justify-end p-4 bg-gray-100">
      <select
        value={lang}
        onChange={(e) => changeLang(e.target.value)}
        className="px-3 py-1 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="en">🇺🇸 English</option>
        <option value="ar">🇸🇾 العربية</option>
      </select>
    </header>
  );
}
