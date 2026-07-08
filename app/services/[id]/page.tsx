import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import logo from "@/app/assets/LOGO_.png";
import { SaudiRiyalIcon } from "@/app/components/SaudiRiyalIcon";
import { LANDING_COPY } from "@/app/content/site-copy";

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
  if (!pkg) return { title: "Service not found | Green Ion" };

  return {
    title: `${pkg.title} | Green Ion`,
    description: pkg.summary,
  };
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

  const pkg = c.services?.packages.find((p) => p.id === id);
  if (!pkg) notFound();

  return (
    <div style={{ background: tk.bg, minHeight: "100vh", fontFamily: fB }}>
      {/* Header/ Nav */}
      <header style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        padding: "0 clamp(16px, 4vw, 32px)",
        background: "rgba(247,249,244,0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${tk.border}`,
        boxShadow: "0 2px 20px rgba(27,94,32,0.08)",
      }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: 16,
          minHeight: 68,
        }}>
          <Link href={isAr ? "/" : "/?lang=en"} style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
            color: tk.ink,
          }}>
            <BrandLogo width={176} alt={isAr ? "جرين ايون" : "Green Ion"} />
          </Link>

          <nav style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            flexWrap: "wrap",
            justifyContent: "center",
          }}>
            {[
              { label: isAr ? "الرئيسية" : "Home", href: isAr ? "/" : "/?lang=en" },
              { label: isAr ? "من نحن" : "About Us", href: isAr ? "/about?lang=ar" : "/about?lang=en" },
              { label: isAr ? "خدماتنا" : "Our Services", href: isAr ? "/services?lang=ar" : "/services?lang=en" },
              { label: isAr ? "كيف نعمل" : "How It Works", href: isAr ? "/#how-it-works" : "/?lang=en#how-it-works" },
              { label: isAr ? "المشاريع" : "Projects", href: isAr ? "/#projects" : "/?lang=en#projects" },
              { label: isAr ? "الحاسبة" : "Calculator", href: isAr ? "/#calculator" : "/?lang=en#calculator" },
              { label: isAr ? "تواصل" : "Contact", href: isAr ? "/#contact" : "/?lang=en#contact" },
            ].map((item, index) => (
              <Link key={item.label} href={item.href} style={{
                textDecoration: "none",
                color: tk.body,
                fontWeight: 500,
                fontSize: 13.5,
                fontFamily: fB,
                transition: "color 0.2s",
              }}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div style={{
            marginInlineStart: "auto",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}>
            <Link href={isAr ? `/services/${params.id}?lang=en` : `/services/${params.id}?lang=ar`} style={{
              padding: "7px 18px",
              borderRadius: 20,
              textDecoration: "none",
              background: tk.bgMid,
              border: `1.5px solid ${tk.borderDk}`,
              color: tk.forest,
              fontWeight: 800,
              fontSize: 12,
              fontFamily: fH,
              letterSpacing: isAr ? 0 : "0.06em",
            }}>
              {isAr ? "English" : "العربية"}
            </Link>
            <Link href={isAr ? "/?lang=ar" : "/?lang=en"} style={{
              padding: "10px 22px",
              borderRadius: 8,
              textDecoration: "none",
              background: tk.forest,
              color: tk.white,
              fontWeight: 700,
              fontSize: 13,
              fontFamily: fH,
              boxShadow: "0 4px 16px rgba(27,94,32,0.3)",
            }}>
              {isAr ? "الصفحة الرئيسية" : "Back Home"}
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        paddingTop: "120px",
        paddingBottom: "clamp(48px, 8vw, 80px)",
        paddingLeft: "clamp(16px, 4vw, 32px)",
        paddingRight: "clamp(16px, 4vw, 32px)",
        maxWidth: 1160,
        margin: "0 auto",
        textAlign: isAr ? "right" : "left"
      }}>
        <div style={{
          background: `linear-gradient(145deg, ${tk.forest}, ${tk.forestMid})`,
          borderRadius: 24,
          padding: "clamp(32px, 6vw, 56px)",
          color: tk.white,
          boxShadow: tk.shadowLg,
          overflow: "hidden",
          position: "relative"
        }}>
          <div style={{ position: "relative", zIndex: 2, maxWidth: 720 }}>
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
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 0.7fr",
          gap: 28,
          alignItems: "flex-start"
        }}>
          {/* Left Column - Main details */}
          <div>
            {/* System Components */}
            {pkg.components && pkg.components.length > 0 && (
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
                <div style={{
                  background: tk.white,
                  borderRadius: 16,
                  padding: 24,
                  border: `1.5px solid ${tk.border}`,
                  boxShadow: tk.shadow
                }}>
                  <ul style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "grid",
                    gap: 12
                  }}>
                    {pkg.components.map((comp, idx) => (
                      <li key={idx} style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "14px 0",
                        borderBottom: idx < pkg.components.length - 1 ? `1px solid ${tk.border}` : "none"
                      }}>
                        <span style={{ fontFamily: fB, fontSize: 15, color: tk.body }}>
                          {comp[0]}
                        </span>
                        <span style={{ fontFamily: fB, fontSize: 15, color: tk.ink, fontWeight: 600 }}>
                          {comp[1]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
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
                <div style={{
                  background: tk.white,
                  borderRadius: 16,
                  padding: 24,
                  border: `1.5px solid ${tk.border}`,
                  boxShadow: tk.shadow
                }}>
                  <ul style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "grid",
                    gap: 12
                  }}>
                    {pkg.quantities.map((qty, idx) => (
                      <li key={idx} style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "14px 0",
                        borderBottom: idx < pkg.quantities.length - 1 ? `1px solid ${tk.border}` : "none"
                      }}>
                        <span style={{ fontFamily: fB, fontSize: 15, color: tk.body }}>
                          {qty[0]}
                        </span>
                        <span style={{ fontFamily: fB, fontSize: 15, color: tk.ink, fontWeight: 600 }}>
                          {qty[1]}
                        </span>
                      </li>
                    ))}
                  </ul>
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
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: 14
                }}>
                  {pkg.warranties.map((w, idx) => (
                    <div key={idx} style={{
                      background: tk.white,
                      borderRadius: 16,
                      padding: 20,
                      border: `1.5px solid ${tk.border}`,
                      boxShadow: tk.shadow
                    }}>
                      <div style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: `rgba(118,196,66,0.12)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 12,
                        color: tk.lime,
                        fontSize: 20
                      }}>
                        ✓
                      </div>
                      <p style={{ fontFamily: fH, fontSize: 16, fontWeight: 700, color: tk.ink, margin: 0 }}>
                        {w[0]}
                      </p>
                      <p style={{ fontFamily: fB, fontSize: 13, color: tk.muted, margin: "4px 0 0" }}>
                        {w[1]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Sticky CTA / Price */}
          <div style={{
            position: "sticky",
            top: 100
          }}>
            <div style={{
              background: tk.white,
              borderRadius: 16,
              padding: 24,
              border: `1.5px solid ${tk.border}`,
              boxShadow: tk.shadowLg
            }}>
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
                borderRadius: 12,
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
      <footer style={{ background: tk.bgDark, borderTop: `1px solid rgba(255,255,255,0.06)`, padding: "clamp(40px,7vw,64px) clamp(16px,4vw,32px) clamp(24px,5vw,36px)", direction: c.dir }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48, marginBottom: 52 }}>
            <div style={{ textAlign: isAr ? "right" : "left" }}>
              <div style={{ marginBottom: 16 }}>
                <BrandLogo width={150} alt={c.brand} />
              </div>
              <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.5)", fontFamily: fB, lineHeight: 1.85, maxWidth: 260, margin: "0 0 20px" }}>
                {isAr ? "نجعل الطاقة الشمسية النظيفة والمعقولة التكلفة متاحةً لكل منزل ومنشأة في المملكة العربية السعودية." : "Making clean, affordable solar energy accessible to every home and business in Saudi Arabia."}
              </p>
              <p style={{ fontSize: 12, color: tk.lime, fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, letterSpacing: "0.06em", opacity: 0.7 }}>
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
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 18 }}>{col.h}</div>
                {col.ls.map(l => (
                  <div key={l} style={{ marginBottom: 10 }}>
                    <Link href={l === "About Us" ? "/about?lang=en" : l === "من نحن" ? "/about?lang=ar" : "/#contact"} style={{ fontSize: 13.5, color: "rgba(255,255,255,0.5)", fontFamily: fB, textDecoration: "none", transition: "color 0.2s" }}>{l}</Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ height: 1, background: `linear-gradient(90deg,transparent,rgba(118,196,66,0.3),transparent)`, margin: "0 0 24px" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", fontFamily: fB }}>{isAr ? "© 2026 شركة جرين أيون للطاقة. جميع الحقوق محفوظة." : "© 2026 Green Ion Energy Co. All rights reserved."}</span>
            <span style={{ fontSize: 11, color: tk.lime, fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, letterSpacing: "0.06em", opacity: 0.6 }}>
              {isAr ? "نحو مستقبل مشرق ومستدام بطاقة الشمس" : "⚡ POWERING A GREENER FUTURE"}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
