import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { BootScreen } from "@/components/ui/boot-screen";
import { BulletHoles } from "@/components/ui/bullet-holes";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { Analytics } from "@vercel/analytics/react";
import "../globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jose Gilarte | Especialista SEO & Marketing Digital",
    template: "%s | Jose Gilarte",
  },
  description:
    "Especialista en SEO, Marketing Digital y Desarrollo Web con +8 años de experiencia. Estrategias basadas en datos que transforman visitantes en clientes.",
  metadataBase: new URL("https://josegilarte.es"),
  alternates: {
    canonical: "/",
    languages: {
      es: "/es",
      en: "/en",
      "x-default": "/es",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_US",
    siteName: "Jose Gilarte",
    title: "Jose Gilarte | Especialista SEO & Marketing Digital",
    description:
      "Estrategias de marketing digital basadas en datos que transforman visitantes en clientes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jose Gilarte | Especialista SEO & Marketing Digital",
    description:
      "Estrategias de marketing digital basadas en datos que transforman visitantes en clientes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${jakarta.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <BootScreen />
        <BulletHoles />
        <NextIntlClientProvider messages={messages}>
          {children}
          <CookieBanner />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
