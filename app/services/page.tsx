import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import logo from "@/app/assets/LOGO_.png";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";
import SiteNavbar from "@/app/components/SiteNavbar";
import { LANDING_COPY } from "@/app/content/site-copy";
import ServicesCatalog from "@/app/services/ServicesCatalog";
import { absoluteUrl, breadcrumbSchema, buildPageMetadata, jsonLd, localizedPaths } from "@/lib/seo";

const tk = {
  bg: "#F7F9F4",
  bgMid: "#EEF3E8",
  bgCard: "#FFFFFF",
  forest: "#1B5E20",
  forestMid: "#2E7D32",
  lime: "#76C442",
  ink: "#0F2710",
  body: "#3A4E35",
  muted: "#7A9472",
  border: "rgba(27,94,32,0.12)",
  borderG: "rgba(118,196,66,0.35)",
  white: "#FFFFFF",
  shadow: "0 4px 24px rgba(27,94,32,0.10)",
  shadowLg: "0 8px 48px rgba(27,94,32,0.15)",
  ff: {
    headEn: "'Montserrat', system-ui, sans-serif",
    bodyEn: "'Source Sans 3', system-ui, sans-serif",
    monoEn: "'DM Mono', monospace",
    headAr: "'Alyamama', 'Cairo', 'Noto Kufi Arabic', sans-serif",
    bodyAr: "'Alyamama', 'Cairo', sans-serif",
    monoAr: "'Alyamama', 'Cairo', sans-serif",
  },
};

const BrandLogo = ({ width = 176, alt = "Green Ion logo" }: { width?: number; alt?: string }) => (
  <Image
    src={logo}
    alt={alt}
    width={width}
    height={Math.round((width * logo.height) / logo.width)}
    sizes={`${width}px`}
    priority={width >= 170}
    style={{ width: `min(${width}px, 44vw)`, height: "auto", display: "block" }}
  />
);

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string | string[] | undefined }>;
}): Promise<Metadata> {
  const { lang } = await searchParams;
  const langKey = (lang === "ar" ? "ar" : "en") as "ar" | "en";

  return buildPageMetadata({
    lang: langKey,
    path: "/services",
    title: langKey === "ar" ? "خدماتنا وعروض ضخ المياه بالطاقة الشمسية" : "Solar Water Pumping Packages & Services",
    description:
      langKey === "ar"
        ? "عروض جرين أيون لأنظمة ضخ المياه بالطاقة الشمسية من 30 إلى 750 حصان: ألواح 650 واط، عواكس INVT، هياكل ZAM مقاومة للصدأ، تركيب وتشغيل وضمانات حتى 25 سنة، بأسعار شاملة الضريبة."
        : "Green Ion solar water pumping packages from 30 HP to 750 HP: 650W panels, INVT inverters, ZAM steel structures, installation, commissioning, and warranties up to 25 years. VAT-inclusive pricing.",
  });
}

export default async function ServicesPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string | string[] | undefined }>;
}) {
  const { lang } = await searchParams;
  const langKey = (lang === "ar" ? "ar" : "en") as "ar" | "en";
  const c = LANDING_COPY[langKey];
  const isAr = langKey === "ar";
  const fH = isAr ? tk.ff.headAr : tk.ff.headEn;
  const fB = isAr ? tk.ff.bodyAr : tk.ff.bodyEn;
  const fMono = isAr ? tk.ff.monoAr : tk.ff.monoEn;

  const homeHref = isAr ? "/" : "/?lang=en";
  const navHrefs = [
    homeHref,
    isAr ? "/about?lang=ar" : "/about?lang=en",
    isAr ? "/services?lang=ar" : "/services?lang=en",
    isAr ? "/#how-it-works" : "/?lang=en#how-it-works",
    isAr ? "/#projects" : "/?lang=en#projects",
    isAr ? "/#calculator" : "/?lang=en#calculator",
    isAr ? "/#contact" : "/?lang=en#contact",
  ];
  const langHref = isAr ? "/services?lang=en" : "/services?lang=ar";
  const ctaHref = isAr ? "/#contact" : "/?lang=en#contact";

  const structuredData = [
    breadcrumbSchema([
      { name: isAr ? "الرئيسية" : "Home", path: localizedPaths("/")[langKey] },
      { name: isAr ? "خدماتنا" : "Our Services", path: localizedPaths("/services")[langKey] },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: isAr ? "عروض ضخ المياه بالطاقة الشمسية" : "Solar water pumping packages",
      itemListElement: c.services.packages.map((pkg, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: pkg.title,
        url: absoluteUrl(localizedPaths(`/services/${pkg.id}`)[langKey]),
      })),
    },
  ];

  return (
    <div style={{ minHeight: "100vh", background: tk.bg, color: tk.ink, fontFamily: fB }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />
      <SiteNavbar
        lang={langKey}
        brand={c.brand}
        navLinks={c.nav.links}
        navHrefs={navHrefs}
        langLabel={c.langAlt}
        langHref={langHref}
        ctaLabel={c.nav.cta}
        ctaHref={ctaHref}
        homeHref={homeHref}
      />

      <section
        style={{
          padding: "clamp(104px, 14vw, 132px) clamp(16px, 4vw, 32px) clamp(44px, 7vw, 64px)",
          background: `linear-gradient(180deg, ${tk.bg} 0%, ${tk.bgMid} 100%)`,
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 11,
              letterSpacing: isAr ? 0 : "0.08em",
              textTransform: isAr ? "none" : "uppercase",
              color: tk.forestMid,
              padding: "6px 14px",
              border: `1px solid ${tk.borderG}`,
              borderRadius: "10px",
              background: "rgba(118,196,66,0.08)",
              fontWeight: 800,
              fontFamily: fMono,
            }}
          >
            {c.services.chip}
          </span>
          <h1
            style={{
              margin: "18px 0 14px",
              fontFamily: fH,
              fontSize: "clamp(34px, 5vw, 58px)",
              fontWeight: 900,
              letterSpacing: isAr ? "-0.01em" : "-0.04em",
              lineHeight: 1.08,
            }}
          >
            {c.services.h2a}
            {c.services.h2b ? (
              <>
                <br />
                <span style={{ color: tk.lime }}>{c.services.h2b}</span>
              </>
            ) : null}
          </h1>
          <p
            style={{
              maxWidth: 760,
              margin: "0 auto",
              color: tk.body,
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: 1.9,
            }}
          >
            {c.services.sub}
          </p>
        </div>
      </section>

      <section style={{ padding: "0 clamp(16px, 4vw, 32px) clamp(72px, 9vw, 96px)" }}>
        <ServicesCatalog lang={langKey} packages={c.services.packages} fH={fH} tk={tk} />
      </section>

      <footer
        style={{
          background: "#0C1F10",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "clamp(40px,7vw,64px) clamp(16px,4vw,32px) clamp(24px,5vw,36px)",
          direction: c.dir,
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            className="gi-footer-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 48,
              marginBottom: 52,
            }}
          >
            <div style={{ textAlign: isAr ? "right" : "left" }}>
              <div style={{ marginBottom: 16 }}>
                <BrandLogo width={150} alt={c.brand} />
              </div>
              <p
                style={{
                  fontSize: 13.5,
                  color: "rgba(255,255,255,0.68)",
                  fontFamily: fB,
                  lineHeight: 1.85,
                  maxWidth: 260,
                  margin: "0 0 20px",
                }}
              >
                {isAr
                  ? "نجعل الطاقة الشمسية النظيفة والمعقولة التكلفة متاحةً لكل منزل ومنشأة في المملكة العربية السعودية."
                  : "Making clean, affordable solar energy accessible to every home and business in Saudi Arabia."}
              </p>
              <p
                style={{
                  fontSize: 12,
                  color: tk.lime,
                  fontFamily: fMono,
                  letterSpacing: "0.06em",
                  opacity: 0.85,
                }}
              >
                {isAr ? "الرياض · جدة · الدمام" : "Riyadh · Jeddah · Dammam"}
              </p>
            </div>

            {(isAr
              ? [
                  { h: "الشركة", ls: [["من نحن", "/about?lang=ar"], ["المشاريع", "/#projects"]] },
                  { h: "الدعم", ls: [["تواصل", "/#contact"], ["الخدمات", "/services?lang=ar"]] },
                ]
              : [
                  { h: "Company", ls: [["About Us", "/about?lang=en"], ["Projects", "/?lang=en#projects"]] },
                  { h: "Support", ls: [["Contact", "/?lang=en#contact"], ["Services", "/services?lang=en"]] },
                ]).map((col) => (
              <div key={col.h} style={{ textAlign: isAr ? "right" : "left" }}>
                <div
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.35)",
                    fontFamily: fMono,
                    letterSpacing: "0.1em",
                    textTransform: isAr ? "none" : "uppercase",
                    marginBottom: 18,
                  }}
                >
                  {col.h}
                </div>
                {col.ls.map(([label, href]) => (
                  <div key={label} style={{ marginBottom: 10 }}>
                    <Link
                      href={href}
                      style={{
                        fontSize: 13.5,
                        color: "rgba(255,255,255,0.68)",
                        fontFamily: fB,
                        textDecoration: "none",
                      }}
                    >
                      {label}
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(118,196,66,0.3),transparent)", margin: "0 0 24px" }} />

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", fontFamily: fB }}>
              {isAr ? "© 2026 شركة جرين أيون للطاقة. جميع الحقوق محفوظة." : "© 2026 Green Ion Energy Co. All rights reserved."}
            </span>
            <span style={{ fontSize: 11, color: tk.lime, fontFamily: fMono, letterSpacing: "0.06em", opacity: 0.72 }}>
              {isAr ? "نحو مستقبل مشرق ومستدام بطاقة الشمس" : "POWERING A GREENER FUTURE"}
            </span>
          </div>
        </div>
      </footer>

      <ScrollToTopButton lang={langKey} />
    </div>
  );
}
