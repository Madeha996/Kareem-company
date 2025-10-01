import { hasLocale, NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import Header from "./components/main-layouts/header/Header";
import Footer from "./components/main-layouts/footer/Footer";
import "./globals.css";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

interface Props {
  children: ReactNode;
  params: { locale: string };
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  let messages;
  try {
    messages = (await import(`../../i18n/messages/${locale}.json`)).default;
  } catch (error) {
    console.error(error);
    messages = (await import(`../../i18n/messages/en.json`)).default;
  }

  return (
    <html lang={locale}>
      <body className="flex flex-col min-h-screen">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
