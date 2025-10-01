"use client";
import { useTranslations } from "next-intl";

export default function SuppliersPage() {
  const t = useTranslations("Suppliers");

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">{t("title")}</h1>
      <p className="text-lg text-gray-700">{t("description")}</p>
    </main>
  );
}
