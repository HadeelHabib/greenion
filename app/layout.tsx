import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono, Cairo, Montserrat, Source_Sans_3, DM_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import {
  jsonLd,
  OG_LOCALE,
  organizationSchema,
  parseLang,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_URL,
  websiteSchema,
} from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const alyamama = Cairo({
  subsets: ["arabic"],
  variable: "--font-alyamama",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans-3",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "جرين أيون | حلول الطاقة الشمسية في السعودية",
    template: "%s",
  },
  description: SITE_DESCRIPTION.ar,
  applicationName: SITE_NAME.en,
  keywords: [...SITE_KEYWORDS.ar, ...SITE_KEYWORDS.en],
  authors: [{ name: SITE_NAME.en, url: SITE_URL }],
  creator: SITE_NAME.en,
  publisher: SITE_NAME.en,
  category: "Renewable Energy",
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: "website",
    siteName: SITE_NAME.ar,
    locale: OG_LOCALE.ar,
    alternateLocale: [OG_LOCALE.en],
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#1B5E20",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Set by proxy.ts from ?lang= so <html lang/dir> match the rendered page.
  const lang = parseLang((await headers()).get("x-site-lang") ?? undefined);

  return (
    <ClerkProvider>
      <html
        lang={lang}
        dir={lang === "ar" ? "rtl" : "ltr"}
        className={`${geistSans.variable} ${geistMono.variable} ${alyamama.variable} ${montserrat.variable} ${sourceSans3.variable} ${dmMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={jsonLd([organizationSchema(lang), websiteSchema(lang)])}
          />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
