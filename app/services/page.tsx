import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import logo from "@/app/assets/LOGO_.png";
import { LANDING_COPY } from "@/app/content/site-copy";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Our Services | Green Ion",
  description:
    "Explore Green Ion's solar package options for residential, commercial, and industrial projects.",
};

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

const pageCopy = LANDING_COPY;

type ServicesLang = keyof typeof pageCopy;
type SearchParams = Promise<{ lang?: string | string[] | undefined }>;

export default async function ServicesPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const rawLang = Array.isArray(params.lang) ? params.lang[0] : params.lang;
  const lang: ServicesLang = rawLang === "en" ? "en" : "ar";
  const c = pageCopy[lang];
  const isAr = lang === "ar";
  const switchHref = `/services?lang=${isAr ? "en" : "ar"}`;
  const fHead = isAr ? tk.ff.headAr : tk.ff.headEn;
  const fBody = isAr ? tk.ff.bodyAr : tk.ff.bodyEn;
  const fMono = isAr ? tk.ff.monoAr : tk.ff.monoEn;

  return (
    <main
      dir={c.dir}
      style={{
        minHeight: "100vh",
        background: tk.bg,
        color: tk.ink,
        fontFamily: fBody,
      }}
    >
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: "0 clamp(16px, 4vw, 32px)",
          background: "rgba(247,249,244,0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${tk.border}`,
          boxShadow: "0 2px 20px rgba(27,94,32,0.08)",
        }}
      >
        <div
          className="gi-services-header-inner"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            minHeight: 68,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <Link
            href={isAr ? "/" : "/?lang=en"}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
              color: tk.ink,
            }}
          >
            <BrandLogo width={176} alt={isAr ? "جرين ايون" : "Green Ion"} />
          </Link>

          <nav
            className="gi-services-nav-links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {c.nav.links.map((label, index) => {
              const navHrefs = [
                isAr ? "/" : "/?lang=en",
                isAr ? "/about?lang=ar" : "/about?lang=en",
                `/services?lang=${lang}`,
                "#how-it-works",
                "#projects",
                "#calculator",
                "#contact"
              ];
              return (
                <Link
                  key={label}
                  href={navHrefs[index]}
                  style={{
                    textDecoration: "none",
                    color: tk.body,
                    fontWeight: 500,
                    fontSize: 13.5,
                    fontFamily: fBody,
                    transition: "color 0.2s",
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div
            className="gi-services-header-controls"
            style={{
              marginInlineStart: "auto",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Link
              href={switchHref}
              className="gi-header-pill"
              style={{
                padding: "7px 18px",
                borderRadius: 20,
                textDecoration: "none",
                background: tk.bgMid,
                border: `1.5px solid ${tk.borderDk}`,
                color: tk.forest,
                fontWeight: 800,
                fontSize: 12,
                fontFamily: fHead,
                letterSpacing: isAr ? 0 : "0.06em",
              }}
            >
              {c.langAlt}
            </Link>
            <Link
              href={isAr ? "/#contact" : "/?lang=en#contact"}
              className="gi-header-pill"
              style={{
                padding: "10px 22px",
                borderRadius: 8,
                textDecoration: "none",
                background: tk.forest,
                color: tk.white,
                fontWeight: 700,
                fontSize: 13,
                fontFamily: fHead,
                boxShadow: "0 4px 16px rgba(27,94,32,0.3)",
              }}
            >
              {c.nav.cta}
            </Link>
          </div>
        </div>
      </header>

      <ServicesContent lang={lang} />

      {/* Footer */}
      <footer style={{ background: tk.bgDark, borderTop: `1px solid rgba(255,255,255,0.06)`, padding: "clamp(40px,7vw,64px) clamp(16px,4vw,32px) clamp(24px,5vw,36px)", direction: c.dir }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48, marginBottom: 52 }}>
            <div style={{ textAlign: isAr ? "right" : "left" }}>
              <div style={{ marginBottom: 16 }}>
                <BrandLogo width={150} alt={c.brand} />
              </div>
              <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.5)", fontFamily: fBody, lineHeight: 1.85, maxWidth: 260, margin: "0 0 20px" }}>{c.footer.tagline}</p>
              <p style={{ fontSize: 12, color: tk.lime, fontFamily: fMono, letterSpacing: "0.06em", opacity: 0.7 }}>{c.footer.locations}</p>
            </div>
            {c.footer.cols.map(col => (
              <div key={col.h} style={{ textAlign: isAr ? "right" : "left" }}>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", fontFamily: fMono, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 18 }}>{col.h}</div>
                {col.ls.map(l => (
                  <div key={l} style={{ marginBottom: 10 }}>
                    <Link href={l === "About Us" ? "/about?lang=en" : l === "من نحن" ? "/about?lang=ar" : "/#contact"} style={{ fontSize: 13.5, color: "rgba(255,255,255,0.5)", fontFamily: fBody, textDecoration: "none", transition: "color 0.2s" }}>{l}</Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ height: 1, background: `linear-gradient(90deg,transparent,rgba(118,196,66,0.3),transparent)`, margin: "0 0 24px" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", fontFamily: fBody }}>{c.footer.copyright}</span>
            <span style={{ fontSize: 11, color: tk.lime, fontFamily: fMono, letterSpacing: "0.06em", opacity: 0.6 }}>{c.footer.badge}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
