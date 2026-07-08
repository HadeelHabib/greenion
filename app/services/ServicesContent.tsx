'use client';

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import logo from "@/app/assets/LOGO_.png";
import { SaudiRiyalIcon } from "@/app/components/SaudiRiyalIcon";
import { LANDING_COPY } from "@/app/content/site-copy";

const tk = {
  bg: "#F7F9F4",
  bgMid: "#EEF3E8",
  bgCard: "#FFFFFF",
  bgDark: "#1A3A1A",
  forest: "#1B5E20",
  forestMid: "#2E7D32",
  lime: "#76C442",
  limeLt: "#A8D96A",
  limeDim: "#4E8A1E",
  emerald: "#388E3C",
  ink: "#0F2710",
  body: "#3A4E35",
  muted: "#7A9472",
  mutedLt: "#A8C0A0",
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

const BrandLogo = ({ width = 176, alt = "Green Ion logo" }) => (
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

const Chip = ({
  children,
  isAr,
}: {
  children: React.ReactNode;
  isAr: boolean;
}) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 11,
      letterSpacing: isAr ? 0 : "0.1em",
      textTransform: isAr ? "none" : "uppercase",
      color: tk.forestMid,
      padding: "5px 14px",
      border: `1px solid ${tk.borderG}`,
      borderRadius: 20,
      background: "rgba(118,196,66,0.1)",
      fontWeight: 700,
    }}
  >
    {children}
  </span>
);

const Arrow = ({ dir, color = tk.forest }: { dir: "ltr" | "rtl"; color?: string }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: dir === "rtl" ? "scaleX(-1)" : "none" }}>
    <path d="M3 8H13M9 4L13 8L9 12" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const pageCopy = LANDING_COPY;

type ServicesLang = keyof typeof pageCopy;

export default function ServicesContent({ lang }: { lang: ServicesLang }) {
  const router = useRouter();
  const c = pageCopy[lang];
  const isAr = lang === "ar";
  const fHead = isAr ? tk.ff.headAr : tk.ff.headEn;
  const fBody = isAr ? tk.ff.bodyAr : tk.ff.bodyEn;
  const fMono = isAr ? tk.ff.monoAr : tk.ff.monoEn;
  const s = c.services;

  return (
    <section style={{ padding: "clamp(120px, 14vw, 160px) clamp(16px,4vw,32px) clamp(64px, 10vw, 100px)", background: tk.bg }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ marginBottom: 64, display: "flex", flexDirection: "column", gap: 14, alignItems: "center", textAlign: "center" }}>
          <Chip isAr={isAr}>{s.chip}</Chip>
          <h1 style={{ fontFamily: fHead, fontSize: "clamp(30px,5vw,54px)", fontWeight: 900, color: tk.ink, margin: 0, letterSpacing: isAr ? "-0.01em" : "-0.04em", lineHeight: 1.1, textAlign: "center" }}>
            {s.h2a}<br /><span style={{ color: tk.lime }}>{s.h2b}</span>
          </h1>
          {s.sub && <p style={{ fontSize: 16, color: tk.muted, fontFamily: fBody, lineHeight: 1.85, maxWidth: 600, margin: "8px 0 0", textAlign: "center" }}>{s.sub}</p>}
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
          gap: 20 
        }}>
          {s.packages.map((pkg, i) => (
            <div 
              key={pkg.id}
              onClick={() => router.push(`/services/${pkg.id}?lang=${lang}`)}
              style={{
                background: tk.white,
                borderRadius: 16,
                border: `1.5px solid ${tk.border}`,
                padding: "28px 24px",
                boxShadow: tk.shadow,
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                textAlign: isAr ? "right" : "left"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = tk.shadowLg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = tk.shadow;
              }}
            >
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 8
              }}>
                <h3 style={{
                  fontFamily: fHead,
                  fontSize: "clamp(20px, 2.1vw, 26px)",
                  fontWeight: 900,
                  color: tk.ink,
                  margin: 0
                }}>{pkg.title}</h3>
                {pkg.badge && (
                  <span style={{
                    fontSize: 11,
                    padding: "4px 12px",
                    borderRadius: 20,
                    background: `rgba(118,196,66,0.12)`,
                    color: tk.forestMid,
                    fontFamily: fMono,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    border: `1px solid ${tk.borderG}`
                  }}>{pkg.badge}</span>
                )}
              </div>

              <p style={{
                fontSize: 14,
                color: tk.body,
                fontFamily: fBody,
                lineHeight: 1.75,
                margin: 0
              }}>{pkg.summary}</p>

              <div style={{
                marginTop: "auto",
                paddingTop: 16,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: isAr ? "flex-end" : "flex-start"
                }}>
                  <span style={{
                    fontSize: 28,
                    fontWeight: 900,
                    color: tk.forest,
                    fontFamily: fHead
                  }}>{pkg.price}</span>
                  <span style={{
                    fontSize: 12,
                    color: tk.muted,
                    fontFamily: fBody
                  }}>
                    <SaudiRiyalIcon
                      size={12}
                      color={tk.muted}
                      title={isAr ? "ريال سعودي" : "Saudi Riyal"}
                    />
                  </span>
                </div>
                
                <Link
                  href={isAr ? "/#contact" : "/?lang=en#contact"}
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    padding: "12px 24px",
                    borderRadius: 10,
                    background: tk.forest,
                    color: tk.white,
                    border: "none",
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: 700,
                    fontFamily: fHead,
                    boxShadow: `0 4px 16px rgba(27,94,32,0.25)`,
                    transition: "all 0.2s ease",
                    textDecoration: "none"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = tk.forestMid}
                  onMouseLeave={(e) => e.currentTarget.style.background = tk.forest}
                >{pkg.cta}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
