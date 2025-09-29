import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import Header from "../components/main-layouts/header/Header";
import Footer from "../components/main-layouts/footer/Footer";

interface Props {
  children: ReactNode;
  params: { locale: string };
}

export default async function RootLayout({ children, params }: Props) {
  // ⚡ استخدم await للوصول للـ locale
  const { locale } = await params;

  let messages;
  try {
    messages = (await import(`../../i18n/messages/${locale}.json`)).default;
  } catch (error) {
    console.error(error);
    messages = (await import(`../../i18n/messages/en.json`)).default;
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
