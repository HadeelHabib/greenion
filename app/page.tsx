import type { Metadata } from "next";

import { LANDING_COPY } from "@/app/content/site-copy";
import { buildPageMetadata, jsonLd, parseLang, SITE_URL } from "@/lib/seo";
import GreenIonSite from "./solarlanding";

type SearchParams = Promise<{ lang?: string | string[] | undefined }>;

const HOME_META = {
  ar: {
    title: "جرين أيون | حلول الطاقة الشمسية وضخ المياه بالطاقة الشمسية في السعودية",
    description:
      "جرين أيون شركة سعودية متخصصة في هندسة وتوريد وتنفيذ مشاريع الطاقة الشمسية (EPC): أنظمة ضخ المياه الزراعية، أنظمة الأسطح للمنازل والمنشآت، مع التركيب والضمان والصيانة. احصل على تقييم مجاني.",
  },
  en: {
    title: "Green Ion | Solar Energy & Solar Water Pumping Solutions in Saudi Arabia",
    description:
      "Green Ion is a Saudi solar EPC company: solar water pumping packages, residential and commercial solar systems, professional installation, warranties, and maintenance. Get a free assessment.",
  },
} as const;

export async function generateMetadata({ searchParams }: { searchParams: SearchParams }): Promise<Metadata> {
  const lang = parseLang((await searchParams).lang);
  return buildPageMetadata({
    lang,
    path: "/",
    title: HOME_META[lang].title,
    description: HOME_META[lang].description,
    absoluteTitle: true,
  });
}

export default async function Page({ searchParams }: { searchParams: SearchParams }) {
  const langKey = parseLang((await searchParams).lang);
  const faq = LANDING_COPY[langKey].faq;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: langKey === "ar" ? "ar-SA" : "en-US",
    url: langKey === "ar" ? SITE_URL : `${SITE_URL}/?lang=en`,
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema)} />
      <GreenIonSite lang={langKey} />
    </>
  );
}
