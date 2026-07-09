import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import logo from "@/app/assets/LOGO_.png";
import { ABOUT_COPY } from "@/app/content/site-copy";

export const metadata: Metadata = {
  title: "About Us | Green Ion",
  description:
    "Learn more about Green Ion, a Saudi renewable energy company delivering EPC solar solutions across utility, commercial, industrial, and residential sectors.",
};

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

const pageCopy = ABOUT_COPY;

type AboutLang = keyof typeof pageCopy;
type SearchParams = Promise<{ lang?: string | string[] | undefined }>;

export default async function AboutPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = await searchParams;
  const rawLang = Array.isArray(query.lang) ? query.lang[0] : query.lang;
  const lang: AboutLang = rawLang === "en" ? "en" : "ar";
  const c = pageCopy[lang];
  const isAr = lang === "ar";
  const switchHref = `/about?lang=${isAr ? "en" : "ar"}`;
  const fHead = isAr ? tk.ff.headAr : tk.ff.headEn;
  const fBody = isAr ? tk.ff.bodyAr : tk.ff.bodyEn;

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
          className="gi-about-header-inner"
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
            className="gi-about-nav-links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {c.nav.links.map(([label, href]) => {
              const active = href.startsWith("/about");
              return (
                <Link
                  key={label}
                  href={href}
                  style={{
                    textDecoration: "none",
                    color: active ? tk.forestMid : tk.body,
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
            className="gi-about-header-controls"
            style={{
              marginInlineStart: "auto",
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
              {c.nav.langAlt}
            </Link>
            <Link
              href="/#contact"
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

      <section
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: 80,
          background: tk.ink,
        }}
      >
        <div className="gi-about-video-shell">
          <video
            autoPlay
            muted
            loop
            controls
            preload="metadata"
            playsInline
            poster=""
            className="gi-about-video"
            style={{
              background: tk.ink,
            }}
            src="https://res.cloudinary.com/dbjdq8ztb/video/upload/v1782488726/vid_jwn4bn.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section style={{ padding: "clamp(36px, 6vw, 56px) clamp(16px, 4vw, 40px) clamp(64px, 9vw, 96px)" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <div style={{ borderBottom: `1px solid ${tk.border}`, paddingBottom: 28, marginBottom: 28 }}>
            <Chip isAr={isAr}>{c.sectionChip}</Chip>
            <h2
              style={{
                margin: "16px 0 14px",
                fontSize: "clamp(30px, 4vw, 46px)",
                fontFamily: fHead,
                lineHeight: isAr ? 1.25 : 1.04,
                letterSpacing: isAr ? 0 : "-0.04em",
              }}
            >
              {c.sectionTitle}
            </h2>
            <p style={{ margin: "0 0 18px", lineHeight: isAr ? 2 : 1.9, color: tk.body, fontSize: 15.5 }}>
              {c.heroSub}
            </p>
            <p style={{ margin: 0, lineHeight: isAr ? 2 : 1.9, color: tk.body, fontSize: 15.5 }}>
              {c.intro}
            </p>
          </div>

          <div style={{ borderBottom: `1px solid ${tk.border}`, paddingBottom: 28, marginBottom: 28 }}>
            <h3 style={{ margin: "0 0 16px", fontSize: "clamp(24px, 3vw, 34px)", fontFamily: fHead, color: tk.ink }}>
              {c.snapshotTitle}
            </h3>
            <ul style={{ margin: 0, paddingInlineStart: isAr ? 20 : 22, color: tk.body, display: "grid", gap: 10 }}>
              {c.snapshotPoints.map((item) => (
                <li key={item} style={{ lineHeight: isAr ? 1.95 : 1.8, fontSize: 15 }}>{item}</li>
              ))}
            </ul>
            <p style={{ margin: "16px 0 0", color: tk.muted, fontSize: 14.5, lineHeight: 1.8 }}>{c.snapshotTag}</p>
          </div>

          <div style={{ borderBottom: `1px solid ${tk.border}`, paddingBottom: 28, marginBottom: 28 }}>
            <h3 style={{ margin: "0 0 16px", fontSize: "clamp(24px, 3vw, 34px)", fontFamily: fHead, color: tk.ink }}>
              {c.whyTitle}
            </h3>
            <ul style={{ margin: 0, paddingInlineStart: isAr ? 20 : 22, color: tk.body, display: "grid", gap: 12 }}>
              {c.why.map((item) => (
                <li key={item} style={{ lineHeight: isAr ? 1.95 : 1.85, fontSize: 15 }}>{item}</li>
              ))}
            </ul>
          </div>

          <div style={{ borderBottom: `1px solid ${tk.border}`, paddingBottom: 28, marginBottom: 28 }}>
            <h3 style={{ margin: "0 0 16px", fontSize: "clamp(24px, 3vw, 34px)", fontFamily: fHead, color: tk.ink }}>
              {c.servicesTitle}
            </h3>
            <ul style={{ margin: 0, paddingInlineStart: isAr ? 20 : 22, color: tk.body, display: "grid", gap: 12 }}>
              {c.services.map((item) => (
                <li key={item} style={{ lineHeight: isAr ? 1.95 : 1.85, fontSize: 15 }}>{item}</li>
              ))}
            </ul>
          </div>

          <div style={{ borderBottom: `1px solid ${tk.border}`, paddingBottom: 28, marginBottom: 28 }}>
            <h3 style={{ margin: "0 0 16px", fontSize: "clamp(24px, 3vw, 34px)", fontFamily: fHead, color: tk.ink }}>
              {c.valuesTitle}
            </h3>
            <div style={{ display: "grid", gap: 14 }}>
              {c.values.map(([title, text]) => (
                <div key={title}>
                  <h4 style={{ margin: "0 0 6px", fontSize: 18, fontFamily: fHead, color: tk.forest }}>
                    {title}
                  </h4>
                  <p style={{ margin: 0, color: tk.body, fontSize: 15, lineHeight: isAr ? 1.95 : 1.85 }}>{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ margin: "0 0 12px", fontSize: "clamp(24px, 3vw, 34px)", fontFamily: fHead, color: tk.ink }}>
              {c.ctaTitle}
            </h3>
            <p style={{ margin: "0 0 18px", lineHeight: isAr ? 1.95 : 1.85, color: tk.body, fontSize: 15 }}>
              {c.ctaSub}
            </p>
            <Link
              href="/#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 18px",
                borderRadius: 8,
                textDecoration: "none",
                background: tk.forest,
                color: tk.white,
                fontWeight: 800,
                fontFamily: fHead,
                boxShadow: "0 4px 16px rgba(27,94,32,0.18)",
              }}
            >
              {c.ctaPrimary}
            </Link>
            <p style={{ margin: "18px 0 0", color: tk.muted, fontSize: 14.5, lineHeight: 1.8 }}>
              {c.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#1A3A1A", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "clamp(40px,7vw,64px) clamp(16px,4vw,32px) clamp(24px,5vw,36px)", direction: c.dir }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ gap: 48, marginBottom: 52 }}>
            <div style={{ textAlign: isAr ? "right" : "left" }}>
              <div style={{ marginBottom: 16 }}>
                <BrandLogo width={150} alt={c.brandSub}/>
              </div>
              <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.5)", fontFamily: fBody, lineHeight: 1.85, maxWidth: 260, margin: "0 0 20px" }}>{c.footer.tagline}</p>
              <p style={{ fontSize: 12, color: tk.lime, fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, letterSpacing: "0.06em", opacity: 0.7 }}>{c.footer.locations}</p>
            </div>
            {c.footer.cols.map(col => (
              <div key={col.h} style={{ textAlign: isAr ? "right" : "left" }}>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 18 }}>{col.h}</div>
                {col.ls.map(l => (
                  <div key={l} style={{ marginBottom: 10 }}>
                    <Link href={l === "About Us" ? "/about?lang=en" : l === "من نحن" ? "/about?lang=ar" : "/#contact"} style={{ fontSize: 13.5, color: "rgba(255,255,255,0.5)", fontFamily: fBody, textDecoration: "none", transition: "color 0.2s" }}>{l}</Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(118,196,66,0.3),transparent)", margin: "0 0 24px" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", fontFamily: fBody }}>{c.footer.copyright}</span>
            <span style={{ fontSize: 11, color: tk.lime, fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, letterSpacing: "0.06em", opacity: 0.6 }}>{c.footer.badge}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
