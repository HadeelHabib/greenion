import type { Metadata } from "next";

export type SiteLang = "ar" | "en";

function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");
  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProd) return `https://${vercelProd}`;
  const vercel = process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();

export const SITE_NAME = { en: "Green Ion", ar: "جرين أيون" } as const;

export const SITE_DESCRIPTION = {
  en: "Green Ion is a Saudi renewable energy company delivering EPC solar solutions: solar water pumping, rooftop and commercial solar systems, installation, monitoring, and maintenance across Saudi Arabia.",
  ar: "جرين أيون شركة سعودية للطاقة المتجددة متخصصة في حلول الطاقة الشمسية بنظام EPC: أنظمة ضخ المياه بالطاقة الشمسية، وأنظمة الأسطح والمنشآت التجارية، والتركيب والمراقبة والصيانة في جميع أنحاء المملكة.",
} as const;

export const SITE_KEYWORDS = {
  en: [
    "solar energy Saudi Arabia",
    "solar panels KSA",
    "solar water pumping",
    "solar pump system",
    "solar EPC company",
    "solar installation Riyadh",
    "solar installation Jeddah",
    "solar installation Dammam",
    "commercial solar",
    "residential solar",
    "Green Ion",
  ],
  ar: [
    "طاقة شمسية السعودية",
    "ألواح شمسية",
    "ضخ المياه بالطاقة الشمسية",
    "مضخات الطاقة الشمسية",
    "شركة طاقة شمسية",
    "تركيب طاقة شمسية الرياض",
    "تركيب طاقة شمسية جدة",
    "تركيب طاقة شمسية الدمام",
    "طاقة متجددة",
    "جرين أيون",
  ],
} as const;

export const OG_LOCALE = { en: "en_US", ar: "ar_SA" } as const;

export function parseLang(raw: string | string[] | undefined, fallback: SiteLang = "ar"): SiteLang {
  const value = Array.isArray(raw) ? raw[0] : raw;
  if (value === "en" || value === "ar") return value;
  return fallback;
}

/**
 * Default language per route when `?lang` is missing. Mirrors what each page
 * already renders: services pages fall back to English, everything else to Arabic.
 */
export function defaultLangForPath(pathname: string): SiteLang {
  return pathname.startsWith("/services") ? "en" : "ar";
}

/** Canonical, language-explicit URLs for a route (matches the site's internal links). */
export function localizedPaths(path: string): Record<SiteLang, string> {
  if (path === "/") return { ar: "/", en: "/?lang=en" };
  return { ar: `${path}?lang=ar`, en: `${path}?lang=en` };
}

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

type PageMetaInput = {
  lang: SiteLang;
  path: string;
  title: string;
  description: string;
  /** Use the title as-is instead of appending "| Green Ion". */
  absoluteTitle?: boolean;
  type?: "website" | "article";
  noindex?: boolean;
};

export function buildPageMetadata({
  lang,
  path,
  title,
  description,
  absoluteTitle,
  type = "website",
  noindex,
}: PageMetaInput): Metadata {
  const paths = localizedPaths(path);
  const canonical = paths[lang];
  const otherLang: SiteLang = lang === "ar" ? "en" : "ar";
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME[lang]}`;
  const image = { url: "/opengraph-image", width: 1200, height: 630, alt: SITE_NAME[lang] };

  return {
    title: { absolute: fullTitle },
    description,
    keywords: [...SITE_KEYWORDS[lang]],
    alternates: {
      canonical,
      languages: {
        "ar-SA": paths.ar,
        "en-US": paths.en,
        "x-default": paths.ar,
      },
    },
    openGraph: {
      type,
      url: canonical,
      siteName: SITE_NAME[lang],
      title: fullTitle,
      description,
      locale: OG_LOCALE[lang],
      alternateLocale: [OG_LOCALE[otherLang]],
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

/** Serialises JSON-LD safely for a <script> tag. */
export function jsonLd(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}

export function organizationSchema(lang: SiteLang) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME.en,
    alternateName: SITE_NAME.ar,
    url: SITE_URL,
    logo: absoluteUrl("/logo.png"),
    description: SITE_DESCRIPTION[lang],
    areaServed: { "@type": "Country", name: "Saudi Arabia" },
    knowsAbout: ["Solar energy", "Solar water pumping", "Photovoltaic systems", "EPC solar projects"],
    address: { "@type": "PostalAddress", addressCountry: "SA" },
  };
}

export function websiteSchema(lang: SiteLang) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME[lang],
    inLanguage: lang === "ar" ? "ar-SA" : "en-US",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

// Project detail pages still use placeholder copy. Flip to true once real
// project details are written so they are indexed and listed in the sitemap.
export const PROJECT_PAGES_INDEXABLE = false;
