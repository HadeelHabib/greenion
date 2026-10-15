import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import logo from "@/app/assets/LOGO_.png";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";
import SiteNavbar from "@/app/components/SiteNavbar";
import { SaudiRiyalIcon } from "@/app/components/SaudiRiyalIcon";
import { LANDING_COPY } from "@/app/content/site-copy";
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
  borderDk: "rgba(27,94,32,0.22)",
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

const Chip = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 11,
      padding: "6px 14px",
      borderRadius: 999,
      border: `1.5px solid ${tk.borderG}`,
      background: "rgba(118,196,66,0.08)",
      color: tk.forestMid,
      fontFamily: "'DM Mono', monospace",
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      ...style,
    }}
  >
    {children}
  </span>
);

const BrandLogo = ({ width = 176, alt = "Green Ion logo", style }: { width?: number; alt?: string; style?: React.CSSProperties }) => (
  <Image
    src={logo}
    alt={alt}
    width={width}
    height={Math.round((width * logo.height) / logo.width)}
    style={{ width: `min(${width}px, 44vw)`, height: "auto", display: "block", ...style }}
  />
);

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ lang?: string | string[] | undefined }>;
}): Promise<Metadata> {
  const { id } = await params;
  const { lang } = await searchParams;
  const langKey = (lang === "ar" ? "ar" : "en") as "ar" | "en";
  const c = LANDING_COPY[langKey];

  const pkg = c.services?.packages.find((p) => p.id === id);
  if (!pkg) return { title: "Service not found | Green Ion", robots: { index: false } };

  return buildPageMetadata({
    lang: langKey,
    path: `/services/${pkg.id}`,
    title: packageSeoTitle(pkg.title, langKey),
    description: pkg.summary,
  });
}

function packageSeoTitle(title: string, lang: "ar" | "en") {
  return lang === "ar"
    ? `منظومة ضخ مياه بالطاقة الشمسية ${title}`
    : `${title} Solar Water Pumping System`;
}

export async function generateStaticParams() {
  return LANDING_COPY.en.services.packages.map((p) => ({ id: p.id }));
}

export default async function ServiceDetail({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ lang?: string | string[] | undefined }>;
}) {
  const { id } = await params;
  const { lang } = await searchParams;
  const langKey = (lang === "ar" ? "ar" : "en") as "ar" | "en";
  const c = LANDING_COPY[langKey];
  const isAr = langKey === "ar";
  const fH = isAr ? tk.ff.headAr : tk.ff.headEn;
  const fB = isAr ? tk.ff.bodyAr : tk.ff.bodyEn;
  const fMono = isAr ? tk.ff.monoAr : tk.ff.monoEn;

  const pkg = c.services?.packages.find((p) => p.id === id);
  if (!pkg) notFound();

  const qtyHeadA = isAr ? "البند" : "Item";
  const qtyHeadB = isAr ? "الكمية" : "Quantity";
  const warHeadA = isAr ? "الضمان" : "Warranty";
  const warHeadB = isAr ? "المدة" : "Coverage";

  const componentIntro = isAr
    ? "يشمل العرض مكونات أساسية مرتبة لضمان سهولة المراجعة:"
    : "The package is summarized into key components for clear review:";
  const componentGroupLabel = isAr ? "الكوابل والتركيب" : "Cabling & Installation";
  const componentPoints = (() => {
    const items = pkg.components ?? [];
    if (items.length <= 4) return items.map(([title, desc]) => ({ title, desc }));
    const first = items.slice(0, 3).map(([title, desc]) => ({ title, desc }));
    const rest = items.slice(3);
    const restText = rest.map(([title, desc]) => `${title}: ${desc}`).join(isAr ? "، " : " · ");
    return [...first, { title: componentGroupLabel, desc: restText }];
  })();
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
  const langHref = isAr ? `/services/${id}?lang=en` : `/services/${id}?lang=ar`;
  const ctaHref = isAr ? "/#contact" : "/?lang=en#contact";

  const pageUrl = absoluteUrl(localizedPaths(`/services/${pkg.id}`)[langKey]);
  const structuredData = [
    breadcrumbSchema([
      { name: isAr ? "الرئيسية" : "Home", path: localizedPaths("/")[langKey] },
      { name: isAr ? "خدماتنا" : "Our Services", path: localizedPaths("/services")[langKey] },
      { name: pkg.title, path: localizedPaths(`/services/${pkg.id}`)[langKey] },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: packageSeoTitle(pkg.title, langKey),
      description: pkg.summary,
      category: isAr ? "أنظمة ضخ المياه بالطاقة الشمسية" : "Solar water pumping systems",
      url: pageUrl,
      brand: { "@type": "Brand", name: "Green Ion" },
      offers: {
        "@type": "Offer",
        price: pkg.price.replace(/[^\d.]/g, ""),
        priceCurrency: "SAR",
        availability: "https://schema.org/InStock",
        url: pageUrl,
        seller: { "@type": "Organization", name: "Green Ion" },
      },
    },
  ];

  return (
    <div style={{ background: tk.bg, minHeight: "100vh", fontFamily: fB }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />
      <SiteNavbar
        lang={langKey}
        brand={c.brand}
        navLinks={c.nav.links}
        navHrefs={navHrefs}
        langLabel={isAr ? "English" : "العربية"}
        langHref={langHref}
        ctaLabel={c.nav.cta}
        ctaHref={ctaHref}
        homeHref={homeHref}
      />

      {/* Hero Section */}
      <section style={{
        paddingTop: "clamp(96px, 14vw, 120px)",
        paddingBottom: "clamp(48px, 8vw, 80px)",
        paddingLeft: "clamp(16px, 4vw, 32px)",
        paddingRight: "clamp(16px, 4vw, 32px)",
        textAlign: isAr ? "right" : "left",
        background: `linear-gradient(145deg, ${tk.forest}, ${tk.forestMid})`,
        color: tk.white
      }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ maxWidth: 720 }}>
            <Chip style={{
              background: "rgba(118,196,66,0.15)",
              border: "1px solid rgba(118,196,66,0.4)",
              color: tk.lime,
              marginBottom: 16
            }}>
              {c.services?.chip}
            </Chip>

            <h1 style={{
              fontFamily: fH,
              fontSize: "clamp(34px, 5vw, 56px)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              margin: "0 0 16px",
              lineHeight: 1.1
            }}>
              {pkg.title}
            </h1>

            <p style={{
              fontSize: "clamp(16px, 2.1vw, 20px)",
              color: "rgba(255,255,255,0.85)",
              fontFamily: fB,
              lineHeight: 1.75,
              margin: 0,
              maxWidth: 640
            }}>
              {pkg.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Details */}
      <section style={{
        padding: "clamp(40px, 7vw, 72px) clamp(16px, 4vw, 32px)",
        maxWidth: 1160,
        margin: "0 auto",
        direction: isAr ? "rtl" : "ltr"
      }}>
        <div className="gi-service-detail-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.3fr) minmax(280px, 0.7fr)", gap: 28, alignItems: "flex-start" }}>
          {/* Left Column - Main details */}
          <div style={{ minWidth: 0 }}>
            {/* System Components */}
            {componentPoints.length > 0 && (
              <div style={{ marginBottom: 32 }}>
                <h2 style={{
                  fontFamily: fH,
                  fontSize: "clamp(22px, 3vw, 30px)",
                  fontWeight: 900,
                  color: tk.ink,
                  margin: "0 0 20px"
                }}>
                  {isAr ? "مكونات النظام" : "System Components"}
                </h2>
                <p style={{ margin: "0 0 14px", fontFamily: fB, fontSize: 15, color: tk.body, lineHeight: 1.95 }}>
                  {componentIntro}
                </p>
                <ul className="gi-service-points" style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
                  {componentPoints.map((point) => (
                    <li
                      key={`${pkg.id}-${point.title}`}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 4,
                        padding: "12px 0",
                        borderBottom: `1px solid ${tk.border}`,
                      }}
                    >
                      <div style={{ fontFamily: fH, fontSize: 15, fontWeight: 800, color: tk.ink }}>{point.title}</div>
                      <div style={{ fontFamily: fB, fontSize: 14, color: tk.body, lineHeight: 1.9 }}>{point.desc}</div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quantities */}
            {pkg.quantities && pkg.quantities.length > 0 && (
              <div style={{ marginBottom: 32 }}>
                <h2 style={{
                  fontFamily: fH,
                  fontSize: "clamp(22px, 3vw, 30px)",
                  fontWeight: 900,
                  color: tk.ink,
                  margin: "0 0 20px"
                }}>
                  {isAr ? "جدول التكميات" : "Quantity Table"}
                </h2>
                <div className="gi-qty-wrap" style={{ overflowX: "auto" }}>
                  <table className="gi-qty-table" style={{ width: "100%", borderCollapse: "collapse", minWidth: 420 }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: isAr ? "right" : "left" }}>{qtyHeadA}</th>
                        <th style={{ textAlign: isAr ? "right" : "left" }}>{qtyHeadB}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pkg.quantities.map((qty) => (
                        <tr key={`${pkg.id}-${qty[0]}`}>
                          <td data-label={qtyHeadA}>{qty[0]}</td>
                          <td data-label={qtyHeadB}>{qty[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Warranties */}
            {pkg.warranties && pkg.warranties.length > 0 && (
              <div style={{ marginBottom: 32 }}>
                <h2 style={{
                  fontFamily: fH,
                  fontSize: "clamp(22px, 3vw, 30px)",
                  fontWeight: 900,
                  color: tk.ink,
                  margin: "0 0 20px"
                }}>
                  {isAr ? "الضمانات" : "Warranties"}
                </h2>
                <div className="gi-qty-wrap" style={{ overflowX: "auto" }}>
                  <table className="gi-qty-table" style={{ width: "100%", borderCollapse: "collapse", minWidth: 420 }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: isAr ? "right" : "left" }}>{warHeadA}</th>
                        <th style={{ textAlign: isAr ? "right" : "left" }}>{warHeadB}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pkg.warranties.map((w) => (
                        <tr key={`${pkg.id}-${w[0]}`}>
                          <td data-label={warHeadA}>{w[0]}</td>
                          <td data-label={warHeadB}>{w[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Sticky CTA / Price */}
          <div className="gi-service-sticky" style={{ position: "sticky", top: 96 }}>
            <div style={{ paddingTop: 18, borderTop: `1px solid ${tk.border}`, minWidth: 0 }}>
              <h3 style={{
                fontFamily: fH,
                fontSize: 14,
                fontWeight: 600,
                color: tk.muted,
                margin: "0 0 8px"
              }}>
                {isAr ? "سعر العرض" : "Package Price"}
              </h3>

              <div style={{
                display: "flex",
                alignItems: "baseline",
                gap: 8,
                marginBottom: 16
              }}>
                <span style={{
                  fontFamily: fH,
                  fontSize: 42,
                  fontWeight: 900,
                  color: tk.forest,
                  lineHeight: 1
                }}>
                  {pkg.price}
                </span>
                <span style={{
                  fontFamily: fB,
                  fontSize: 15,
                  color: tk.muted
                }}>
                  <SaudiRiyalIcon
                    size={15}
                    color={tk.muted}
                    title={isAr ? "ريال سعودي" : "Saudi Riyal"}
                  />
                </span>
              </div>

              <Link href={isAr ? "/#contact" : "/?lang=en#contact"} style={{
                width: "100%",
                display: "block",
                textAlign: "center",
                padding: "16px 24px",
                borderRadius: 0,
                background: tk.forest,
                color: tk.white,
                border: "none",
                cursor: "pointer",
                fontSize: 15,
                fontWeight: 800,
                fontFamily: fH,
                boxShadow: `0 6px 24px rgba(27,94,32,0.3)`,
                transition: "all 0.2s ease",
                textDecoration: "none"
              }}>
                {isAr ? "اطلب الآن" : "Order Now"}
              </Link>

              <div style={{
                marginTop: 20,
                paddingTop: 20,
                borderTop: `1px solid ${tk.border}`
              }}>
                <p style={{
                  fontFamily: fB,
                  fontSize: 12,
                  color: tk.muted,
                  margin: 0,
                  textAlign: "center"
                }}>
                  {isAr ? "جميع الأسعار شاملة الضريبة" : "All prices include VAT"}
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Footer */}
      <footer style={{ background: "#0C1F10", borderTop: `1px solid rgba(255,255,255,0.06)`, padding: "clamp(40px,7vw,64px) clamp(16px,4vw,32px) clamp(24px,5vw,36px)", direction: c.dir }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="gi-footer-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48, marginBottom: 52 }}>
            <div style={{ textAlign: isAr ? "right" : "left" }}>
              <div style={{ marginBottom: 16 }}>
                <BrandLogo width={150} alt={c.brand} />
              </div>
              <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.68)", fontFamily: fB, lineHeight: 1.85, maxWidth: 260, margin: "0 0 20px" }}>
                {isAr ? "نجعل الطاقة الشمسية النظيفة والمعقولة التكلفة متاحةً لكل منزل ومنشأة في المملكة العربية السعودية." : "Making clean, affordable solar energy accessible to every home and business in Saudi Arabia."}
              </p>
              <p style={{ fontSize: 12, color: tk.lime, fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, letterSpacing: "0.06em", opacity: 0.85 }}>
                {isAr ? "الرياض · جدة · الدمام" : "Riyadh · Jeddah · Dammam"}
              </p>
            </div>
            {(isAr ? [
              { h: "الشركة", ls: ["من نحن", "المشاريع"] },
              { h: "الدعم", ls: ["الأسئلة الشائعة"] }
            ] : [
              { h: "Company", ls: ["About Us", "Projects"] },
              { h: "Support", ls: ["FAQ"] }
            ]).map(col => (
              <div key={col.h} style={{ textAlign: isAr ? "right" : "left" }}>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 18 }}>{col.h}</div>
                {col.ls.map(l => (
                  <div key={l} style={{ marginBottom: 10 }}>
                    <Link href={l === "About Us" ? "/about?lang=en" : l === "من نحن" ? "/about?lang=ar" : l === "Projects" ? "/?lang=en#projects" : l === "المشاريع" ? "/#projects" : isAr ? "/#contact" : "/?lang=en#contact"} style={{ fontSize: 13.5, color: "rgba(255,255,255,0.68)", fontFamily: fB, textDecoration: "none", transition: "color 0.2s" }}>{l}</Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ height: 1, background: `linear-gradient(90deg,transparent,rgba(118,196,66,0.3),transparent)`, margin: "0 0 24px" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", fontFamily: fB }}>{isAr ? "© 2026 شركة جرين أيون للطاقة. جميع الحقوق محفوظة." : "© 2026 Green Ion Energy Co. All rights reserved."}</span>
            <span style={{ fontSize: 11, color: tk.lime, fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, letterSpacing: "0.06em", opacity: 0.72 }}>
              {isAr ? "نحو مستقبل مشرق ومستدام بطاقة الشمس" : "⚡ POWERING A GREENER FUTURE"}
            </span>
          </div>
        </div>
      </footer>

      <ScrollToTopButton lang={langKey} />
    </div>
  );
}
