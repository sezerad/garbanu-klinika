// layout.tsx file to define the layout for all pages in the app

// Importing necessary libraries and configurations
import "@styles/globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { loadMessages } from "@/utils/localization";

// Integrating Roboto font from RootLayout
const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Garbanų Klinika",
  description: "Garbanų Klinika",
  icons: {
    icon: "/icons/favicon.ico",
  },
};

// Defining prop types for LocaleLayout component
type RootLayoutProps = {
  children: ReactNode;
  params: {
    locale: string;
  };
};

// Layout component to provide locale and messages to all pages in the app
// Additionally integrating Inter font styles from Layout
export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const messages = await loadMessages(locale);

  return (
    <html lang={locale}>
      <body className={roboto.className}>
        {/* Wrapping children with NextIntlClientProvider to provide localization features */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
