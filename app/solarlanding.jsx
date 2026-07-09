/* eslint-disable @typescript-eslint/no-require-imports */
'use client'
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/LOGO_.png"
import hero from "@/app/assets/hero.png"
import bg1 from "@/app/assets/bg1.png"
import panel650 from "@/app/assets/2u.png"
import inverterImage from "@/app/assets/inverter.png"
import { LANDING_COPY } from "@/app/content/site-copy";
import { PriceWithRiyal, SaudiRiyalIcon, extractMoneyAmount } from "@/app/components/SaudiRiyalIcon";
/* ═══════════════════════════════════════════════════════════════
   DESIGN TOKENS — Green Ion Light Theme
═══════════════════════════════════════════════════════════════ */
const tk = {
  /* backgrounds */
  bg: "#F7F9F4",   /* off-white with green tint */
  bgMid: "#EEF3E8",   /* soft sage */
  bgCard: "#FFFFFF",
  bgDark: "#1A3A1A",   /* deep forest for accents */

  /* greens */
  forest: "#1B5E20",   /* dark brand green */
  forestMid: "#2E7D32",
  lime: "#76C442",   /* bright lime from logo */
  limeLt: "#A8D96A",
  limeDim: "#4E8A1E",
  emerald: "#388E3C",

  /* text */
  ink: "#0F2710",   /* near black */
  body: "#3A4E35",   /* body text */
  muted: "#7A9472",   /* muted text */
  mutedLt: "#A8C0A0",

  /* borders */
  border: "rgba(27,94,32,0.12)",
  borderG: "rgba(118,196,66,0.35)",
  borderDk: "rgba(27,94,32,0.22)",

  /* misc */
  white: "#FFFFFF",
  shadow: "0 4px 24px rgba(27,94,32,0.10)",
  shadowLg: "0 8px 48px rgba(27,94,32,0.15)",
  ease: "cubic-bezier(0.16,1,0.3,1)",

  ff: {
    headEn: "'Montserrat', system-ui, sans-serif",
    bodyEn: "'Source Sans 3', system-ui, sans-serif",
    monoEn: "'DM Mono', monospace",
    headAr: "'Alyamama', 'Cairo', 'Noto Kufi Arabic', sans-serif",
    bodyAr: "'Alyamama', 'Cairo', sans-serif",
    monoAr: "'Alyamama', 'Cairo', sans-serif",
  },
};

const HERO_BG_VIDEO = "https://res.cloudinary.com/dbjdq8ztb/video/upload/v1783011650/green_ion_stgygv.mp4";

const productImages = {
  "/eco-panel-650w.png": panel650,
  "/invt-inverter.png": inverterImage,
};

const STORAGE_KEYS = {
  overrides: "giLandingOverrides",
  sections: "giLandingSections",
  layout: "giLandingLayout",
};

const DEFAULT_SECTIONS = {
  hero: true,
  stats: true,
  solutions: true,
  services: true,
  "how-it-works": true,
  calculator: true,
  projects: true,
  products: true,
  whyus: true,
  testimonials: true,
  faq: true,
  contact: true,
  footer: true,
};

const DEFAULT_LAYOUT = {
  overlay: 78,
  heroFocus: "right",
  themeMode: "balanced",
};

function deepMerge(base, patch) {
  if (patch === null || patch === undefined) return base;
  if (Array.isArray(base) || Array.isArray(patch)) return patch;
  if (typeof base !== "object" || typeof patch !== "object") return patch;
  const out = { ...base };
  for (const [k, v] of Object.entries(patch)) {
    out[k] = deepMerge(base?.[k], v);
  }
  return out;
}

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

/* ═══════════════════════════════════════════════════════════════
   TRANSLATIONS
═══════════════════════════════════════════════════════════════ */
const COPY = LANDING_COPY;

/* ═══════════════════════════════════════════════════════════════
   HOOKS
═══════════════════════════════════════════════════════════════ */
function useInView(thresh = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); ob.disconnect(); } }, { threshold: thresh });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [thresh]);
  return [ref, vis];
}
/* ═══════════════════════════════════════════════════════════════
   LOGO COMPONENT
═══════════════════════════════════════════════════════════════ */
const BrandLogo = ({ width = 190, alt = "Green Ion logo" }) => (
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

/* ═══════════════════════════════════════════════════════════════
   SHARED UI
═══════════════════════════════════════════════════════════════ */
const Chip = ({ children, style }) => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: tk.forestMid, padding: "5px 14px", border: `1px solid ${tk.borderG}`, borderRadius: "10px", background: `rgba(118,196,66,0.1)`, fontWeight: 700, ...style }}>{children}</span>
);

const Arrow = ({ dir, color = tk.forest }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: dir === "rtl" ? "scaleX(-1)" : "none" }}>
    <path d="M3 8H13M9 4L13 8L9 12" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function LangToggle({ lang, onToggle, c }) {
  return (
    <button onClick={onToggle} style={{
      padding: "7px 18px", borderRadius: "10px", cursor: "pointer",
      background: tk.bgMid, border: `1.5px solid ${tk.borderDk}`,
      color: tk.forest, fontSize: 12, fontWeight: 800,
      fontFamily: lang === "ar" ? tk.ff.headAr : tk.ff.headEn,
      letterSpacing: lang === "ar" ? 0 : "0.06em",
      transition: "all 0.2s",
    }}
      onMouseEnter={e => { e.currentTarget.style.background = tk.forest; e.currentTarget.style.color = tk.white; }}
      onMouseLeave={e => { e.currentTarget.style.background = tk.bgMid; e.currentTarget.style.color = tk.forest; }}
    >{c.langAlt}</button>
  );
}

function SolutionCard({ card, c, isAr, fH, fB, vis, delayMs }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "20px 10px 12px",
        background: hov ? "rgba(255,255,255,0.45)" : "transparent",
        borderTop: `1px solid ${tk.border}`,
        cursor: "pointer",
        position: "relative",
        opacity: vis ? 1 : 0,
        transform: vis ? (hov ? "translateY(-2px)" : "translateY(0)") : "translateY(24px)",
        transition: `opacity 0.6s ease ${delayMs}ms, transform 0.6s ease ${delayMs}ms, background 0.3s`,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, textAlign: "center", minHeight: "100%" }}>
        <div>
          <h3 style={{ fontFamily: fH, fontSize: "clamp(11px,0.95vw,14px)", fontWeight: 800, color: tk.ink, margin: 0, letterSpacing: isAr ? "-0.01em" : "-0.02em", lineHeight: 1.6, whiteSpace: "nowrap" }}>
            {card.desc}
          </h3>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ p, span, c, pr, isAr, fH, fB, vis, delayMs }) {
  const [hov, setHov] = useState(false);
  const meta = [p.type, p.loc].filter(Boolean).join(" · ");
  const href = `/projects/${p.slug}${isAr ? "" : "?lang=en"}`;

  return (
    <Link
      href={href}
      className="gi-project-card"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        gridColumn: span,
        minHeight: 100,
        borderRadius: "10px",
        background: tk.bgCard,
        border: `1.5px solid ${hov ? tk.borderG : tk.border}`,
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        textDecoration: "none",
        opacity: vis ? 1 : 0,
        transform: vis ? (hov ? "translateY(-4px)" : "translateY(0)") : "translateY(18px)",
        transition: `all 0.6s ease ${delayMs}ms`,
        boxShadow: hov ? tk.shadowLg : "0 8px 24px rgba(27,94,32,0.08)",
      }}
    >
      <div style={{ position: "relative", aspectRatio: "16 / 10", background: p.color || tk.bgMid }}>
        {p.video ? (
          <video
            src={p.video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        ) : null}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,39,16,0.08) 0%, rgba(15,39,16,0.18) 100%)" }} />
        {p.tag && <div style={{ position: "absolute", top: 14, [c.dir === "rtl" ? "left" : "right"]: 14, background: tk.lime, color: tk.forest, fontSize: 10, fontWeight: 800, fontFamily: fH, padding: "4px 10px", borderRadius: "10px" }}>{p.tag}</div>}
      </div>
      <div style={{ padding: "18px 18px 20px", display: "grid", gap: 10 }}>
        {meta ? <div style={{ fontSize: 11, color: tk.forestMid, fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, letterSpacing: isAr ? 0 : "0.08em", textTransform: isAr ? "none" : "uppercase" }}>{meta}</div> : null}
        <div style={{ fontSize: 18, color: tk.ink, fontFamily: fH, fontWeight: 800 }}>{p.title}</div>
        <div style={{ fontSize: 13.5, color: tk.body, fontFamily: fB, lineHeight: 1.8 }}>
          {p.kw ? <>{pr.size} <span style={{ color: tk.forest, fontWeight: 700 }}>{p.kw}</span></> : null}
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, color: hov ? tk.forest : tk.forestMid, fontSize: 13, fontFamily: fB, fontWeight: 700, transition: "color 0.2s" }}>
          <span>{pr.viewCase}</span>
          <Arrow dir={c.dir} color={hov ? tk.forest : tk.forestMid} />
        </div>
      </div>
    </Link>
  );
}

function ProductCard({ item, c, pr, isAr, fH, fB, vis, delayMs }) {
  const [hov, setHov] = useState(false);
  const productImage = item.image ? productImages[item.image] : null;
  const contactHref = isAr ? "/#contact" : "/?lang=en#contact";
  const amount = extractMoneyAmount(item.price);

  return (
    <div
      key={item.name}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "28px 24px",
        background: hov ? tk.bgMid : tk.bgCard,
        border: `1.5px solid ${hov ? tk.borderG : tk.border}`,
        borderRadius: "10px",
        position: "relative",
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(18px)",
        transition: `all 0.6s ease ${delayMs}ms`,
        boxShadow: hov ? tk.shadow : "0 2px 8px rgba(27,94,32,0.04)",
        cursor: "pointer",
      }}
    >
      {item.tag && <div style={{ position: "absolute", top: 16, [c.dir === "rtl" ? "left" : "right"]: 16, background: item.tag === "New" || item.tag === "جديد" ? tk.forestMid : tk.lime, color: item.tag === "New" || item.tag === "جديد" ? tk.white : tk.forest, fontSize: 10, fontWeight: 800, fontFamily: fH, padding: "3px 10px", borderRadius: "10px" }}>{item.tag}</div>}
      <div style={{ width: "100%", height: 160, marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {productImage ? (
          <Image
            src={productImage}
            alt={item.name}
            style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", width: "auto", height: "auto" }}
          />
        ) : null}
      </div>
      <h3 style={{ fontFamily: fH, fontSize: 15, fontWeight: 800, color: tk.ink, margin: "0 0 6px" }}>{item.name}</h3>
      <p style={{ fontSize: 12, color: tk.muted, fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, margin: "0 0 20px" }}>{item.spec}</p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <PriceWithRiyal
          amount={amount}
          color={tk.forest}
          iconSize={16}
          style={{ fontFamily: fH, fontSize: 18, fontWeight: 900 }}
        />
        <Link
          href={contactHref}
          style={{ padding: "7px 14px", borderRadius: "10px", background: tk.forest, color: tk.white, border: "none", cursor: "pointer", fontSize: 12, fontFamily: fB, fontWeight: 600, transition: "all 0.2s", textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
          onMouseEnter={e => { e.currentTarget.style.background = tk.forestMid; }}
          onMouseLeave={e => { e.currentTarget.style.background = tk.forest; }}
        >{pr.getQuote}</Link>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NAV
═══════════════════════════════════════════════════════════════ */
function Nav({ lang, onToggle, c }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isAr = lang === "ar";
  const navHrefs = ["#home", isAr ? "/about?lang=ar" : "/about?lang=en", `/services?lang=${lang}`, "#how-it-works", "#projects", "#calculator", "#contact"];
  const fHead = isAr ? tk.ff.headAr : tk.ff.headEn;
  const fBody = isAr ? tk.ff.bodyAr : tk.ff.bodyEn;
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => {
    const onKeyDown = e => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
  return (
    <nav className="gi-nav" style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      padding: "0 clamp(16px,4vw,40px)", direction: c.dir,
      background: scrolled ? "rgba(247,249,244,0.14)" : "transparent",
      backdropFilter: scrolled ? "blur(8px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(8px)" : "none",
      borderBottom: `1px solid ${scrolled ? "rgba(27,94,32,0.08)" : "transparent"}`,
      boxShadow: scrolled ? "0 1px 12px rgba(27,94,32,0.05)" : "none",
      transition: "all 0.35s ease",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        {/* Logo */}
        <a href="#home" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <BrandLogo width={176} alt={c.brand} />
        </a>
        {/* Links */}
        <div className="gi-nav-links" style={{ display: "flex", gap: 24, alignItems: "center" }}>
          {c.nav.links.map((l, index) => (
            <a key={l} href={navHrefs[index] ?? "#home"} style={{ fontSize: 13.5, color: tk.body, textDecoration: "none", fontFamily: fBody, fontWeight: 500, transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = tk.forestMid}
              onMouseLeave={e => e.target.style.color = tk.body}>{l}</a>
          ))}
        </div>
        {/* Right group */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <LangToggle lang={lang} onToggle={onToggle} c={c} />
          <button className="gi-nav-cta" style={{
            padding: "10px 22px", borderRadius: "10px", background: tk.forest, color: tk.white,
            border: "none", cursor: "pointer", fontSize: 13, fontWeight: 700,
            fontFamily: fHead, boxShadow: `0 4px 16px rgba(27,94,32,0.3)`, transition: "all 0.2s",
          }}
            onClick={() => window.location.hash = "contact"}
            onMouseEnter={e => { e.currentTarget.style.background = tk.forestMid; e.currentTarget.style.boxShadow = `0 6px 24px rgba(27,94,32,0.4)`; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = tk.forest; e.currentTarget.style.boxShadow = `0 4px 16px rgba(27,94,32,0.3)`; e.currentTarget.style.transform = "translateY(0)"; }}
          >{c.nav.cta}</button>
          <button
            type="button"
            className="gi-nav-menu-btn"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
            style={{
              width: 42,
              height: 42,
              borderRadius: "10px",
              background: tk.white,
              border: `1.5px solid ${tk.borderDk}`,
              color: tk.forest,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: tk.shadow,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ display: "block" }}>
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div
          style={{
            position: "fixed",
            top: 68,
            left: 0,
            right: 0,
            background: "rgba(247,249,244,0.42)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderBottom: `1px solid ${tk.border}`,
            boxShadow: "0 12px 30px rgba(27,94,32,0.12)",
            padding: "14px clamp(16px,4vw,40px) 18px",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 10 }}>
            {c.nav.links.map((l, index) => (
              <a
                key={l}
                href={navHrefs[index] ?? "#home"}
                onClick={() => setOpen(false)}
                style={{
                  textDecoration: "none",
                  fontFamily: fBody,
                  fontSize: 14,
                  color: tk.ink,
                  padding: "10px 12px",
                  borderRadius: "10px",
                  border: `1.5px solid ${tk.border}`,
                  background: tk.bgCard,
                }}
              >
                {l}
              </a>
            ))}
            <button
              type="button"
              onClick={() => { setOpen(false); window.location.hash = "contact"; }}
              style={{
                padding: "12px 14px",
                borderRadius: "10px",
                background: tk.forest,
                color: tk.white,
                border: "none",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 800,
                fontFamily: fHead,
                boxShadow: `0 6px 24px rgba(27,94,32,0.25)`,
              }}
            >
              {c.nav.cta}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════════════════ */
function Hero({ lang, c }) {
  const [on, setOn] = useState(false);
  const isAr = lang === "ar";
  const fHead = isAr ? tk.ff.headAr : tk.ff.headEn;
  const fBody = isAr ? tk.ff.bodyAr : tk.ff.bodyEn;
  useEffect(() => {
    const id = window.setTimeout(() => setOn(true), 80);
    return () => window.clearTimeout(id);
  }, []);
  const layout = c?.layout ?? DEFAULT_LAYOUT;
  const overlayAlpha =
    layout.themeMode === "strong"
      ? layout.overlay / 100
      : layout.themeMode === "soft"
        ? Math.min(0.86, layout.overlay / 115)
        : layout.overlay / 110;
  const overlayBase = layout.themeMode === "soft" ? "255,255,255" : "247,249,244";
  const overlayA1 = Math.min(0.98, Math.max(0.15, overlayAlpha));
  const overlayA2 = Math.min(0.94, Math.max(0.12, overlayA1 * 0.94));
  const heroPos = layout.heroFocus === "left" ? "left center" : "right center";
  return (
    <section id="home" className="gi-hero-section" style={{ minHeight: "100vh", background: "transparent", position: "relative", zIndex: 0, direction: c.dir, overflow: "hidden", padding: "clamp(96px,14vw,132px) clamp(16px,4vw,32px) clamp(56px,10vw,80px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        {/* Background pattern */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle, rgba(118,196,66,0.08) 1px, transparent 1px)`, backgroundSize: "40px 40px", pointerEvents: "none" }} />
        {/* Large circle glow */}
        <div style={{ position: "absolute", top: "-5%", [isAr ? "left" : "right"]: "-10%", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(118,196,66,0.12), transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-5%", [isAr ? "right" : "left"]: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(27,94,32,0.06), transparent 70%)", pointerEvents: "none" }} />
        {/* Hero background video */}
        <div className="gi-hero-video-layer" style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
            <video
              className="gi-hero-video"
              src={HERO_BG_VIDEO}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: heroPos, opacity: on ? 1 : 0, transform: on ? "scale(1)" : "scale(1.05)", transition: "opacity 1.1s ease 0.2s, transform 1.4s ease 0.2s" }}
            />
          </div>
          <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at ${isAr ? "top right" : "top left"}, rgba(${overlayBase},${Math.min(0.24, overlayA1 * 0.26)}) 0%, rgba(${overlayBase},${Math.min(0.12, overlayA2 * 0.14)}) 20%, rgba(${overlayBase},0.04) 38%, transparent 58%)` }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,39,16,0.02) 0%, rgba(15,39,16,0.06) 100%)" }} />
        </div>
        <div className="gi-hero-shell" style={{ position: "relative", zIndex: 1 }}>
          <div className="gi-hero-copy" style={{ textAlign: isAr ? "right" : "left", marginInlineStart: 0 }}>
            <div style={{ marginBottom: 24, opacity: on ? 1 : 0, transform: on ? "translateY(0)" : "translateY(12px)", transition: `all 0.6s ${tk.ease}` }}>
              <Chip>{c.hero.chip}</Chip>
            </div>
            <h1 style={{ fontFamily: fHead, fontSize: "clamp(34px,5.6vw,68px)", fontWeight: 900, color: tk.ink, lineHeight: isAr ? 1.22 : 1.06, letterSpacing: isAr ? "-0.01em" : "-0.04em", margin: "0 0 24px", opacity: on ? 1 : 0, transform: on ? "translateY(0)" : "translateY(24px)", transition: `all 0.7s ${tk.ease} 0.08s` }}>
              {c.hero.h1a}<br />
              <span style={{ background: `linear-gradient(135deg,${tk.forest},${tk.lime})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{c.hero.h1b}</span>
            </h1>
            {c.hero.sub ? <p style={{ fontSize: "clamp(15px,2vw,18px)", color: tk.white, lineHeight: 1.9, margin: "0 0 44px", maxWidth: 540, fontFamily: fBody, opacity: on ? 1 : 0, transform: on ? "translateY(0)" : "translateY(18px)", transition: `all 0.7s ${tk.ease} 0.16s` }}>{c.hero.sub}</p> : null}
            <div className="gi-hero-actions" style={{ opacity: on ? 1 : 0, transform: on ? "translateY(0)" : "translateY(14px)", transition: `all 0.7s ${tk.ease} 0.24s` }}>
              <button style={{ padding: "15px 34px", borderRadius: "10px", background: tk.forest, color: tk.white, border: "none", cursor: "pointer", fontSize: 14, fontWeight: 700, fontFamily: fHead, boxShadow: `0 6px 28px rgba(27,94,32,0.35)`, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 8, transition: "all 0.2s" }}
                onClick={() => window.location.hash = "contact"}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 10px 36px rgba(27,94,32,0.45)`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 6px 28px rgba(27,94,32,0.35)`; }}
              >
                {c.hero.cta1} <Arrow dir={c.dir} color={tk.white} />
              </button>
              <button style={{ padding: "15px 26px", borderRadius: "10px", background: tk.white, color: tk.forest, border: `1.5px solid ${tk.borderDk}`, cursor: "pointer", fontSize: 14, fontFamily: fBody, fontWeight: 500, boxShadow: tk.shadow, transition: "all 0.2s", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}
                onClick={() => window.location.hash = "how-it-works"}
                onMouseEnter={e => { e.currentTarget.style.borderColor = tk.lime; e.currentTarget.style.color = tk.forestMid; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = tk.borderDk; e.currentTarget.style.color = tk.forest; }}
              >{c.hero.cta2}</button>
            </div>
          </div>
        </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SERVICES (CHANGED FROM SOLUTIONS)
═══════════════════════════════════════════════════════════════ */
function Services({ lang, c }) {
  const [ref, vis] = useInView();
  const isAr = lang === "ar";
  const fH = isAr ? tk.ff.headAr : tk.ff.headEn;
  const fB = isAr ? tk.ff.bodyAr : tk.ff.bodyEn;
  const s = c.services;
  const { useRouter } = require('next/navigation');
  const router = useRouter();
  const displayedPackages = s.packages.slice(0, 3);
  
  
  return (
    <section id="services" ref={ref} style={{ background: tk.bg, padding: "clamp(64px,10vw,100px) clamp(16px,4vw,32px)", direction: c.dir, position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ marginBottom: 64, display: "flex", flexDirection: "column", gap: 14, alignItems: "center", textAlign: "center" }}>
          <Chip>{s.chip}</Chip>
          <h2 style={{ fontFamily: fH, fontSize: "clamp(30px,5vw,54px)", fontWeight: 900, color: tk.ink, margin: 0, letterSpacing: isAr ? "-0.01em" : "-0.04em", lineHeight: 1.1, textAlign: "center" }}>
            {s.h2a}<br /><span style={{ color: tk.lime }}>{s.h2b}</span>
          </h2>
          {s.sub && <p style={{ fontSize: 16, color: tk.muted, fontFamily: fB, lineHeight: 1.85, maxWidth: 600, margin: "8px 0 0", textAlign: "center" }}>{s.sub}</p>}
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
          gap: 20 
        }}>
          {displayedPackages.map((pkg, i) => (
            <div 
              key={pkg.id}
              onClick={() => router.push(`/services/${pkg.id}?lang=${lang}`)}
              style={{
                background: tk.white,
                borderRadius: "10px",
                border: `1.5px solid ${tk.border}`,
                padding: "28px 24px",
                boxShadow: tk.shadow,
                cursor: "pointer",
                transition: "all 0.3s ease",
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 80}ms`,
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
                  fontFamily: fH,
                  fontSize: "clamp(20px, 2.1vw, 26px)",
                  fontWeight: 900,
                  color: tk.ink,
                  margin: 0
                }}>{pkg.title}</h3>
                {pkg.badge && (
                  <span style={{
                    fontSize: 11,
                    padding: "4px 12px",
                    borderRadius: "10px",
                    background: `rgba(118,196,66,0.12)`,
                    color: tk.forestMid,
                    fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    border: `1px solid ${tk.borderG}`
                  }}>{pkg.badge}</span>
                )}
              </div>

              <p style={{
                fontSize: 14,
                color: tk.body,
                fontFamily: fB,
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
                    fontFamily: fH
                  }}>{pkg.price}</span>
                  <span style={{
                    fontSize: 12,
                    color: tk.muted,
                    fontFamily: fB
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
                    borderRadius: "10px",
                    background: tk.forest,
                    color: tk.white,
                    border: "none",
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: 700,
                    fontFamily: fH,
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
        
        <div style={{ marginTop: 48, textAlign: "center" }}>
          <button 
            onClick={() => router.push(`/services?lang=${lang}`)}
            style={{
              padding: 0,
              borderRadius: 0,
              background: "transparent",
              color: tk.forest,
              border: "none",
              cursor: "pointer",
              fontSize: 16,
              fontWeight: 800,
              fontFamily: fH,
              boxShadow: "none",
              transition: "all 0.2s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: 8
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {isAr ? "عرض المزيد" : "View More"} <Arrow dir={c.dir} color={tk.forest} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HOW IT WORKS
═══════════════════════════════════════════════════════════════ */
function HowItWorks({ lang, c }) {
  const [ref, vis] = useInView();
  const isAr = lang === "ar";
  const fH = isAr ? tk.ff.headAr : tk.ff.headEn;
  const fB = isAr ? tk.ff.bodyAr : tk.ff.bodyEn;
  const h = c.howit;
  const processLabel = isAr ? "منهجية التنفيذ" : "Execution Framework";

  return (
    <section id="how-it-works" ref={ref} style={{ background: tk.bgMid, padding: "clamp(64px,10vw,100px) clamp(16px,4vw,32px)", direction: c.dir, position: "relative", overflow: "hidden" }}>
      {/* Full section background image */}
      <div className="gi-section-bg" style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none" }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Image
            src={hero}
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 72, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Chip>{h.chip}</Chip>
          <h2 style={{ fontFamily: fH, fontSize: "clamp(26px,4.5vw,50px)", fontWeight: 900, color: tk.ink, margin: "18px 0 14px", letterSpacing: isAr ? "-0.01em" : "-0.04em", textAlign: "center" }}>{h.h2}</h2>
          <p style={{ fontSize: 16, color: tk.muted, fontFamily: fB, maxWidth: 480, margin: "0 auto", lineHeight: 1.85, textAlign: "center" }}>{h.sub}</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 14 }}>
          {h.steps.map((s, i) => (
            <div key={s.title} style={{ padding: "32px 26px", background: tk.bgCard, borderRadius: 12, border: `1.5px solid ${tk.border}`, boxShadow: "0 2px 16px rgba(27,94,32,0.06)", opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)", transition: `all 0.6s ease ${i * 100}ms`, position: "relative", textAlign: isAr ? "right" : "left" }}>
              {/* Step number accent */}
             <h3 style={{ fontFamily: fH, fontSize: 17, fontWeight: 800, color: tk.ink, margin: "0 0 10px", letterSpacing: isAr ? "-0.01em" : "-0.02em" }}>{s.title}</h3>
              <p style={{ fontSize: 13.5, color: tk.muted, lineHeight: 1.85, margin: 0, fontFamily: fB }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CALCULATOR
═══════════════════════════════════════════════════════════════ */
function Calculator({ lang, c }) {
  const [ref, vis] = useInView();
  const [bill, setBill] = useState(500);
  const [area, setArea] = useState(120);
  const isAr = lang === "ar";
  const fH = isAr ? tk.ff.headAr : tk.ff.headEn;
  const fB = isAr ? tk.ff.bodyAr : tk.ff.bodyEn;
  const cc = c.calc;

  const systemKw = Math.round(area * 0.12 * 10) / 10;
  const annualGen = Math.round(systemKw * 1650);
  const annualSave = Math.round(bill * 0.82 * 12);
  const co2 = Math.round(annualGen * 0.00082 * 10) / 10;
  const payback = (systemKw * 6500 / annualSave).toFixed(1);

  const results = [
    {
      label: cc.rows[0],
      val: (
        <PriceWithRiyal
          amount={annualSave.toLocaleString()}
          color={tk.lime}
          iconSize={16}
          style={{ fontFamily: fH, fontSize: 18, fontWeight: 900 }}
        />
      ),
      sub: cc.units[0],
      hi: true
    },
    { label: cc.rows[1], val: `${annualGen.toLocaleString()} kWh`, sub: cc.units[1], hi: false },
    { label: cc.rows[2], val: `${co2} ${isAr ? "طن" : "t"}`, sub: cc.units[2], hi: false },
    { label: cc.rows[3], val: `${payback} ${isAr ? "سنة" : "yrs"}`, sub: cc.units[3], hi: false },
  ];

  return (
    <section id="calculator" ref={ref} style={{ background: tk.bg, padding: "clamp(64px,10vw,100px) clamp(16px,4vw,32px)", direction: c.dir }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Chip>{cc.chip}</Chip>
          <h2 style={{ fontFamily: fH, fontSize: "clamp(26px,4vw,46px)", fontWeight: 900, color: tk.ink, margin: "18px 0 12px", letterSpacing: isAr ? "-0.01em" : "-0.04em", textAlign: "center" }}>{cc.h2}</h2>
          <p style={{ fontSize: 15, color: tk.muted, fontFamily: fB, lineHeight: 1.85, textAlign: "center" }}>{cc.sub}</p>
        </div>
        <div style={{ background: tk.bgCard, borderRadius: "10px", border: `1.5px solid ${tk.border}`, overflow: "hidden", boxShadow: tk.shadowLg, opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s ease" }}>
          <div className="gi-grid-2">
            {/* Inputs */}
            <div className="gi-no-border-mobile" style={{ padding: "clamp(22px,5vw,44px) clamp(18px,5vw,40px)", borderInlineEnd: `1.5px solid ${tk.border}`, order: isAr ? 2 : 1, textAlign: isAr ? "right" : "left" }}>
              <h3 style={{ fontFamily: fH, fontSize: 16, fontWeight: 800, color: tk.ink, margin: "0 0 32px" }}>{isAr ? "بياناتك" : "Your Details"}</h3>
              {[
                {
                  label: cc.billLabel,
                  val: bill,
                  setter: setBill,
                  min: 100,
                  max: 2000,
                  step: 50,
                  lo: <PriceWithRiyal amount="100" color={tk.mutedLt} iconSize={11} style={{ fontSize: 11, fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn }} />,
                  hi: <PriceWithRiyal amount="2000" color={tk.mutedLt} iconSize={11} style={{ fontSize: 11, fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn }} />,
                  dispVal: <PriceWithRiyal amount={bill} color={tk.forestMid} iconSize={13} style={{ fontSize: 13, fontWeight: 700, fontFamily: fH }} />
                },
                { label: cc.areaLabel, val: area, setter: setArea, min: 20, max: 500, step: 10, lo: "20 m²", hi: "500 m²", dispVal: `${area} m²` },
              ].map(sl => (
                <div key={sl.label} style={{ marginBottom: 32 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                    <label style={{ fontSize: 13, color: tk.muted, fontFamily: fB }}>{sl.label}</label>
                    <span style={{ fontSize: 13, fontWeight: 700, color: tk.forestMid, fontFamily: fH }}>{sl.dispVal}</span>
                  </div>
                  <input type="range" min={sl.min} max={sl.max} step={sl.step} value={sl.val} onChange={e => sl.setter(+e.target.value)} style={{ width: "100%", accentColor: tk.forestMid }} />
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontSize: 11, color: tk.mutedLt, fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn }}><span>{sl.lo}</span><span>{sl.hi}</span></div>
                </div>
              ))}
              <div style={{ padding: "16px 18px", background: `rgba(27,94,32,0.05)`, borderRadius: "10px", border: `1.5px solid ${tk.borderG}` }}>
                <div style={{ fontSize: 11, color: tk.forestMid, fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, letterSpacing: "0.08em", marginBottom: 6, textTransform: "uppercase" }}>{cc.sys}</div>
                <div style={{ fontFamily: fH, fontSize: 28, fontWeight: 900, color: tk.forest }}>{systemKw} kWp</div>
                <div style={{ fontSize: 13, color: tk.muted, fontFamily: fB, marginTop: 4 }}>{cc.sysDesc} {Math.ceil(systemKw / 0.55)} {cc.panels}</div>
              </div>
            </div>
            {/* Results */}
            <div style={{ padding: "clamp(22px,5vw,44px) clamp(18px,5vw,40px)", background: tk.bgMid, order: isAr ? 1 : 2, textAlign: isAr ? "right" : "left" }}>
              <h3 style={{ fontFamily: fH, fontSize: 16, fontWeight: 800, color: tk.ink, margin: "0 0 32px" }}>{cc.results}</h3>
              <div className="gi-grid-2" style={{ gap: 12, marginBottom: 24 }}>
                {results.map(r => (
                  <div key={r.label} style={{ padding: "18px 16px", borderRadius: "10px", background: r.hi ? tk.forest : tk.bgCard, border: `1.5px solid ${r.hi ? "transparent" : tk.border}`, boxShadow: r.hi ? `0 4px 20px rgba(27,94,32,0.2)` : "none" }}>
                    <div style={{ fontSize: 11, color: r.hi ? "rgba(255,255,255,0.7)" : tk.muted, fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, letterSpacing: "0.06em", marginBottom: 8, textTransform: "uppercase" }}>{r.label}</div>
                    <div style={{ fontFamily: fH, fontSize: 18, fontWeight: 900, color: r.hi ? tk.lime : tk.ink }}>{r.val}</div>
                    <div style={{ fontSize: 11, color: r.hi ? "rgba(255,255,255,0.6)" : tk.muted, fontFamily: fB, marginTop: 4 }}>{r.sub}</div>
                  </div>
                ))}
              </div>
              <button style={{ width: "100%", padding: "14px", borderRadius: "10px", background: tk.forest, color: tk.white, border: "none", cursor: "pointer", fontSize: 13.5, fontWeight: 700, fontFamily: fH, boxShadow: `0 4px 20px rgba(27,94,32,0.3)`, transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = tk.forestMid; }}
                onMouseLeave={e => { e.currentTarget.style.background = tk.forest; }}
              >{cc.btn}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PROJECTS
═══════════════════════════════════════════════════════════════ */
function Projects({ lang, c }) {
  const [ref, vis] = useInView();
  const [active, setActive] = useState(0);
  const isAr = lang === "ar";
  const fH = isAr ? tk.ff.headAr : tk.ff.headEn;
  const fB = isAr ? tk.ff.bodyAr : tk.ff.bodyEn;
  const pr = c.projects;
  const cats = pr.cats;
  const shown = active === 0 ? pr.items : pr.items.filter(p => p.type === cats[active]);

  return (
    <section id="projects" ref={ref} style={{ background: tk.bgMid, padding: "clamp(64px,10vw,100px) clamp(16px,4vw,32px)", direction: c.dir, position: "relative", overflow: "hidden" }}>
      {/* Background image on the right side with 50% opacity */}
      <div className="gi-section-bg" style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: "45%", opacity: 0.5, pointerEvents: "none" }}>
      
        
        {/* Soft gradient masks to blend the image into the section's background color */}
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(270deg, transparent 60%, ${tk.bgMid} 100%)` }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, ${tk.bgMid} 0%, transparent 15%, transparent 85%, ${tk.bgMid} 100%)` }} />
      </div>

      <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, marginBottom: 48 }}>
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Chip>{pr.chip}</Chip>
            <h2 style={{ fontFamily: fH, fontSize: "clamp(26px,4vw,46px)", fontWeight: 900, color: tk.ink, margin: "16px 0 0", letterSpacing: isAr ? "-0.01em" : "-0.04em", textAlign: "center" }}>{pr.h2}</h2>
          </div>
          <div style={{ display: cats.length > 1 ? "flex" : "none", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
            {cats.map((cat, i) => (
              <button key={cat} onClick={() => setActive(i)} style={{ padding: "7px 16px", borderRadius: "10px", background: active === i ? tk.forest : "transparent", color: active === i ? tk.white : tk.muted, border: `1.5px solid ${active === i ? tk.forest : tk.borderDk}`, cursor: "pointer", fontSize: 12, fontFamily: fB, fontWeight: 600, transition: "all 0.2s" }}>{cat}</button>
            ))}
          </div>
        </div>
        <div className="gi-projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 18 }}>
          {shown.map((p, i) => <ProjectCard key={p.title} p={p} span="span 1" c={c} pr={pr} isAr={isAr} fH={fH} fB={fB} vis={vis} delayMs={i * 90} />)}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PRODUCTS
═══════════════════════════════════════════════════════════════ */
function Products({ lang, c }) {
  const [ref, vis] = useInView();
  const isAr = lang === "ar";
  const fH = isAr ? tk.ff.headAr : tk.ff.headEn;
  const fB = isAr ? tk.ff.bodyAr : tk.ff.bodyEn;
  const pr = c.products;
  return (
    <section ref={ref} style={{ background: tk.bg, padding: "clamp(64px,10vw,100px) clamp(16px,4vw,32px)", direction: c.dir }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, marginBottom: 52 }}>
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Chip>{pr.chip}</Chip>
            <h2 style={{ fontFamily: fH, fontSize: "clamp(24px,4vw,44px)", fontWeight: 900, color: tk.ink, margin: "16px 0 0", letterSpacing: isAr ? "-0.01em" : "-0.04em", textAlign: "center" }}>{pr.h2}</h2>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 14 }}>
          {pr.items.map((item, i) => <ProductCard key={item.name} item={item} c={c} pr={pr} isAr={isAr} fH={fH} fB={fB} vis={vis} delayMs={i * 90} />)}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   WHY US
═══════════════════════════════════════════════════════════════ */
function WhyUsFeatureIcon({ index }) {
  const iconWrap = {
    width: 62,
    height: 62,
    borderRadius: "50%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: `1.5px solid rgba(118,196,66,0.55)`,
    background: "rgba(8,33,18,0.72)",
    boxShadow: "0 0 0 6px rgba(118,196,66,0.08)",
    flexShrink: 0,
  };
  const iconProps = {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: tk.lime,
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (index === 0) {
    return (
      <span style={iconWrap} aria-hidden="true">
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="7" />
          <path d="M12 5V2.5M12 21.5V19M19 12h2.5M2.5 12H5M16.95 7.05l1.8-1.8M5.25 18.75l1.8-1.8M16.95 16.95l1.8 1.8M5.25 5.25l1.8 1.8" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      </span>
    );
  }

  if (index === 1) {
    return (
      <span style={iconWrap} aria-hidden="true">
        <svg {...iconProps}>
          <rect x="7" y="4" width="9" height="16" rx="2" />
          <path d="M10.5 9.5h3l-2 5h2" />
          <path d="M10 2h4" />
        </svg>
      </span>
    );
  }

  if (index === 2) {
    return (
      <span style={iconWrap} aria-hidden="true">
        <svg {...iconProps}>
          <path d="M12 14c2.5 0 4.5-2.13 4.5-4.75S14.5 4.5 12 4.5 7.5 6.63 7.5 9.25 9.5 14 12 14Z" />
          <path d="M5 19.5c1.65-2.33 4.15-3.5 7-3.5s5.35 1.17 7 3.5" />
          <path d="M4.5 6.5 2.75 8.25 4.5 10M19.5 6.5l1.75 1.75L19.5 10" />
        </svg>
      </span>
    );
  }

  if (index === 3) {
    return (
      <span style={iconWrap} aria-hidden="true">
        <svg {...iconProps}>
          <path d="M5 18.5 18.5 5a1.41 1.41 0 0 1 2 2L7 20.5 3.5 21.5 5 18.5Z" />
          <path d="M14.5 5.5 18.5 9.5" />
          <path d="M4 4h7" />
          <path d="M4 8h4" />
        </svg>
      </span>
    );
  }

  return (
    <span style={iconWrap} aria-hidden="true">
      <svg {...iconProps}>
        <path d="M8 4h8v2.5A4 4 0 0 0 20 10v1c0 3.35-2.5 6.2-6 6.82V21h3" />
        <path d="M16 4H8v2.5A4 4 0 0 1 4 10v1c0 3.35 2.5 6.2 6 6.82V21H7" />
        <path d="M9.5 10.5 12 8.5l2.5 2-1 3h-3l-1-3Z" />
      </svg>
    </span>
  );
}

function WhyUs({ lang, c }) {
  const [ref, vis] = useInView();
  const isAr = lang === "ar";
  const fH = isAr ? tk.ff.headAr : tk.ff.headEn;
  const fB = isAr ? tk.ff.bodyAr : tk.ff.bodyEn;
  const w = c.whyus;
  return (
    <section ref={ref} style={{ background: "linear-gradient(135deg, #062a1a 0%, #07341f 50%, #0a3c26 100%)", padding: "clamp(64px,10vw,100px) clamp(16px,4vw,32px)", direction: c.dir, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at top right, rgba(118,196,66,0.18), transparent 24%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at bottom left, rgba(118,196,66,0.12), transparent 26%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(102deg, rgba(255,255,255,0.035) 0 2px, transparent 2px 44px)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(2,14,10,0.12) 0%, rgba(2,14,10,0.18) 100%)" }} />
      </div>
      <div style={{ maxWidth: 1120, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 56, opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)", transition: "all 0.7s ease" }}>
          <Chip style={{ color: tk.lime, border: "1px solid rgba(118,196,66,0.38)", background: "rgba(118,196,66,0.08)" }}>{w.chip}</Chip>
          <h2 style={{ fontFamily: fH, fontSize: "clamp(26px,3.8vw,46px)", fontWeight: 900, color: tk.white, margin: "18px 0 16px", letterSpacing: isAr ? "-0.01em" : "-0.04em", lineHeight: 1.15, textAlign: "center" }}>
            {w.h2a}<br /><span style={{ color: tk.lime }}>{w.h2b}</span>
          </h2>
          <p style={{ fontSize: 15.5, color: "rgba(255,255,255,0.78)", fontFamily: fB, margin: 0, maxWidth: 760, lineHeight: 1.95, textAlign: "center" }}>{w.sub}</p>
        </div>

        <div className="gi-grid-2" style={{ columnGap: "clamp(28px,5vw,64px)", rowGap: 28 }}>
          {w.cards.map((card, i) => (
            <div
              key={card.title}
              style={{
                borderTop: "1px solid rgba(255,255,255,0.16)",
                paddingTop: 26,
                display: "grid",
                gridTemplateColumns: isAr ? "1fr auto" : "auto 1fr",
                gap: 18,
                alignItems: "start",
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(16px)",
                transition: `all 0.55s ease ${0.1 + i * 0.08}s`,
              }}
            >
              <div style={{ order: isAr ? 1 : 2, textAlign: isAr ? "right" : "left" }}>
                <h3 style={{ fontFamily: fH, fontSize: "clamp(20px,2.1vw,28px)", fontWeight: 900, color: tk.lime, margin: "0 0 12px", lineHeight: 1.4 }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: "clamp(14px,1.5vw,16px)", color: "rgba(255,255,255,0.76)", fontFamily: fB, margin: 0, lineHeight: 2 }}>
                  {card.desc}
                </p>
              </div>
              <div style={{ order: isAr ? 2 : 1, paddingTop: 2 }}>
                <WhyUsFeatureIcon index={i} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TESTIMONIALS
═══════════════════════════════════════════════════════════════ */
function Testimonials({ lang, c }) {
  const [ref, vis] = useInView();
  const [idx, setIdx] = useState(0);
  const isAr = lang === "ar";
  const fH = isAr ? tk.ff.headAr : tk.ff.headEn;
  const fB = isAr ? tk.ff.bodyAr : tk.ff.bodyEn;
  const tm = c.testimonials;
  const cur = tm.items[idx];

  useEffect(() => { const id = setInterval(() => setIdx(i => (i + 1) % tm.items.length), 5000); return () => clearInterval(id); }, [tm.items.length]);

  return (
    <section ref={ref} style={{ background: tk.bg, padding: "clamp(64px,10vw,100px) clamp(16px,4vw,32px)", direction: c.dir }}>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Chip>{tm.chip}</Chip>
          <h2 style={{ fontFamily: fH, fontSize: "clamp(24px,4vw,44px)", fontWeight: 900, color: tk.ink, margin: "18px 0 0", letterSpacing: isAr ? "-0.01em" : "-0.04em", textAlign: "center" }}>{tm.h2}</h2>
        </div>
        <div style={{ background: tk.bgCard, borderRadius: "10px", border: `1.5px solid ${tk.border}`, padding: "clamp(24px,5vw,44px) clamp(20px,5vw,48px)", position: "relative", opacity: vis ? 1 : 0, transition: "opacity 0.7s ease", boxShadow: tk.shadowLg, textAlign: isAr ? "right" : "left" }}>
          <div style={{ fontSize: 72, color: tk.lime, opacity: 0.25, position: "absolute", top: 14, [c.dir === "rtl" ? "right" : "left"]: 32, lineHeight: 1, fontFamily: fH }}>{isAr ? "\u201C" : '"'}</div>
          <p style={{ fontSize: 17, color: tk.body, lineHeight: 1.9, fontFamily: fB, fontStyle: "italic", margin: "0 0 32px", position: "relative" }}>{cur.quote}</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: `${cur.color}18`, border: `2px solid ${cur.color}60`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: cur.color, fontFamily: fH }}>{cur.init}</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: tk.ink, fontFamily: fH }}>{cur.name}</div>
                <div style={{ fontSize: 13, color: tk.muted, fontFamily: fB }}>{cur.role}</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {tm.items.map((_, i) => <button key={i} onClick={() => setIdx(i)} style={{ width: i === idx ? 28 : 8, height: 8, borderRadius: "10px", background: i === idx ? tk.forest : tk.borderDk, border: "none", cursor: "pointer", padding: 0, transition: "all 0.35s ease" }} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FAQ
═══════════════════════════════════════════════════════════════ */
function FAQ({ lang, c }) {
  const [ref, vis] = useInView();
  const [open, setOpen] = useState(null);
  const isAr = lang === "ar";
  const fH = isAr ? tk.ff.headAr : tk.ff.headEn;
  const fB = isAr ? tk.ff.bodyAr : tk.ff.bodyEn;
  const fq = c.faq;
  return (
    <section ref={ref} style={{ background: tk.bgMid, padding: "clamp(56px,9vw,90px) clamp(16px,4vw,32px)", direction: c.dir }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Chip>{fq.chip}</Chip>
          <h2 style={{ fontFamily: fH, fontSize: "clamp(24px,4vw,42px)", fontWeight: 900, color: tk.ink, margin: "18px 0 0", letterSpacing: isAr ? "-0.01em" : "-0.04em", textAlign: "center" }}>{fq.h2}</h2>
        </div>
        {fq.items.map((item, i) => (
          <div key={i} style={{ borderBottom: `1.5px solid ${tk.border}`, opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(10px)", transition: `all 0.5s ease ${i * 70}ms` }}>
            <button onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", background: "none", border: "none", cursor: "pointer", textAlign: c.dir === "rtl" ? "right" : "left" }}>
              <span style={{ fontSize: 15, color: open === i ? tk.forestMid : tk.ink, fontFamily: fB, fontWeight: 600, paddingInlineEnd: 20, transition: "color 0.2s" }}>{item.q}</span>
              <span style={{ color: tk.lime, fontSize: 20, flexShrink: 0, transform: open === i ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.3s", display: "inline-block", width: 28, height: 28, borderRadius: "50%", background: open === i ? tk.forest : "rgba(118,196,66,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>+</span>
            </button>
            <div style={{ overflow: "hidden", maxHeight: open === i ? "180px" : "0", transition: "max-height 0.4s ease", paddingBottom: open === i ? 20 : 0 }}>
              <p style={{ fontSize: 14.5, color: tk.body, lineHeight: 1.9, margin: 0, fontFamily: fB }}>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CONTACT
═══════════════════════════════════════════════════════════════ */
function Contact({ lang, c }) {
  const [ref, vis] = useInView();
  const [form, setForm] = useState(() => ({ name: "", phone: "", city: "", type: c.contact.types[0] }));
  const [sent, setSent] = useState(false);
  const isAr = lang === "ar";
  const fH = isAr ? tk.ff.headAr : tk.ff.headEn;
  const fB = isAr ? tk.ff.bodyAr : tk.ff.bodyEn;
  const ct = c.contact;
  const up = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const inputStyle = { width: "100%", padding: "12px 16px", borderRadius: 8, background: tk.bgCard, border: `1.5px solid ${tk.border}`, color: tk.ink, fontSize: 14, fontFamily: fB, outline: "none", boxSizing: "border-box", textAlign: c.dir === "rtl" ? "right" : "left", transition: "border 0.2s" };

  return (
    <section id="contact" ref={ref} style={{ background: tk.bg, padding: "clamp(64px,10vw,100px) clamp(16px,4vw,32px)", direction: c.dir }}>
      <div style={{ maxWidth: 1020, margin: "0 auto" }}>
        {/* CTA Banner */}
        <div className="gi-contact-banner" style={{ borderRadius: "10px", background: "linear-gradient(135deg, #062a1a 0%, #07341f 50%, #0a3c26 100%)", padding: "clamp(26px,5vw,52px) clamp(22px,5vw,56px)", boxShadow: `0 12px 48px rgba(27,94,32,0.25)`, marginBottom: 72, opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)", transition: "all 0.7s ease" }}>
          <div className="gi-contact-banner-copy" style={{ textAlign: isAr ? "right" : "left" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <span style={{ fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, fontSize: 11, color: tk.lime, letterSpacing: "0.1em", textTransform: "uppercase" }}>{ct.slots}</span>
            </div>
            <h2 style={{ fontFamily: fH, fontSize: "clamp(20px,3vw,38px)", fontWeight: 900, color: tk.white, margin: "0 0 12px", letterSpacing: isAr ? "-0.01em" : "-0.04em", lineHeight: 1.15 }}>
              {ct.bannerTitle1}<br /><span style={{ color: tk.lime }}>{ct.bannerTitle2}</span>
            </h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", fontFamily: fB, margin: 0, lineHeight: 1.8 }}>{ct.bannerSub}</p>
          </div>
          <button className="gi-contact-banner-button" style={{ padding: "14px 32px", borderRadius: "10px", background: tk.lime, color: tk.forest, border: "none", cursor: "pointer", fontSize: 14, fontWeight: 800, fontFamily: fH, whiteSpace: "nowrap", boxShadow: `0 4px 20px rgba(118,196,66,0.4)`, transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = tk.limeLt; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = tk.lime; e.currentTarget.style.transform = "translateY(0)"; }}
          >{ct.bannerCta}</button>
        </div>

        {/* Form */}
        <div className="gi-grid-2" style={{ gap: "clamp(20px,6vw,56px)", opacity: vis ? 1 : 0, transition: "opacity 0.7s ease 0.1s" }}>
          <div style={{ textAlign: isAr ? "right" : "left", order: isAr ? 2 : 1 }}>
            <Chip>{ct.chip}</Chip>
            <h3 style={{ fontFamily: fH, fontSize: 26, fontWeight: 900, color: tk.ink, margin: "18px 0 12px", letterSpacing: isAr ? "-0.01em" : "-0.04em" }}>{ct.h3}</h3>
            <p style={{ fontSize: 14, color: tk.muted, fontFamily: fB, margin: "0 0 32px", lineHeight: 1.85 }}>{ct.sub}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {ct.contactItems.map(([icon, val]) => (
                <div key={val} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", background: tk.bgCard, borderRadius: "10px", border: `1px solid ${tk.border}` }}>
                  <span style={{ fontSize: 16 }}>{icon}</span>
                  <span style={{ fontSize: 13.5, color: tk.body, fontFamily: fB }}>{val}</span>
                </div>
              ))}
            </div>
          </div>

          {sent ? (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: isAr ? "flex-end" : "center", gap: 14, padding: "40px 0", background: tk.bgCard, borderRadius: "10px", border: `1.5px solid ${tk.border}`, order: isAr ? 1 : 2, textAlign: isAr ? "right" : "center" }}>
              <div style={{ fontSize: 52 }}>🌿</div>
              <h3 style={{ fontFamily: fH, fontSize: 22, color: tk.forestMid, margin: 0 }}>{ct.sentTitle}</h3>
              <p style={{ fontSize: 14, color: tk.muted, fontFamily: fB, textAlign: "center", lineHeight: 1.8, maxWidth: 280 }}>{ct.sentMsg}</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 14, order: isAr ? 1 : 2, textAlign: isAr ? "right" : "left" }}>
              {ct.fields.map(([label, key, type]) => (
                <div key={key}>
                  <label style={{ display: "block", fontSize: 11, color: tk.forestMid, fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, letterSpacing: "0.08em", marginBottom: 8, textTransform: "uppercase", fontWeight: 700 }}>{label}</label>
                  <input type={type} value={form[key]} onChange={e => up(key, e.target.value)} placeholder={label}
                    style={inputStyle}
                    onFocus={e => { e.currentTarget.style.border = `1.5px solid ${tk.forestMid}`; }}
                    onBlur={e => { e.currentTarget.style.border = `1.5px solid ${tk.border}`; }} />
                </div>
              ))}
              <div>
                <label style={{ display: "block", fontSize: 11, color: tk.forestMid, fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, letterSpacing: "0.08em", marginBottom: 8, textTransform: "uppercase", fontWeight: 700 }}>{ct.cityLabel}</label>
                <input value={form.city} onChange={e => up("city", e.target.value)} placeholder={ct.cityPh} style={inputStyle}
                  onFocus={e => { e.currentTarget.style.border = `1.5px solid ${tk.forestMid}`; }}
                  onBlur={e => { e.currentTarget.style.border = `1.5px solid ${tk.border}`; }} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 11, color: tk.forestMid, fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, letterSpacing: "0.08em", marginBottom: 8, textTransform: "uppercase", fontWeight: 700 }}>{ct.typeLabel}</label>
                <select value={form.type} onChange={e => up("type", e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
                  {ct.types.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <button onClick={() => setSent(true)} style={{ marginTop: 8, padding: "14px", borderRadius: "10px", background: tk.forest, color: tk.white, border: "none", cursor: "pointer", fontSize: 14, fontWeight: 700, fontFamily: fH, boxShadow: `0 4px 20px rgba(27,94,32,0.25)`, transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = tk.forestMid; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = tk.forest; e.currentTarget.style.transform = "translateY(0)"; }}
              >{ct.btn}</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════════════════════ */
function Footer({ lang, c }) {
  const isAr = lang === "ar";
  const fB = isAr ? tk.ff.bodyAr : tk.ff.bodyEn;
  const ft = c.footer;
  return (
    <footer style={{ background: tk.bgDark, borderTop: `1px solid rgba(255,255,255,0.06)`, padding: "clamp(40px,7vw,64px) clamp(16px,4vw,32px) clamp(24px,5vw,36px)", direction: c.dir }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="gi-footer-grid" style={{ gap: 48, marginBottom: 52 }}>
          <div style={{ textAlign: isAr ? "right" : "left" }}>
            <div style={{ marginBottom: 16 }}>
              <BrandLogo width={150} alt={c.brand} />
            </div>
            <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.5)", fontFamily: fB, lineHeight: 1.85, maxWidth: 260, margin: "0 0 20px" }}>{ft.tagline}</p>
            <p style={{ fontSize: 12, color: tk.lime, fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, letterSpacing: "0.06em", opacity: 0.7 }}>{ft.locations}</p>
          </div>
          {ft.cols.map(col => (
            <div key={col.h} style={{ textAlign: isAr ? "right" : "left" }}>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 18 }}>{col.h}</div>
              {col.ls.map(l => (
                <div key={l} style={{ marginBottom: 10 }}>
                  <a href={l === "About Us" ? "/about?lang=en" : l === "من نحن" ? "/about?lang=ar" : "#"} style={{ fontSize: 13.5, color: "rgba(255,255,255,0.5)", fontFamily: fB, textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => e.target.style.color = tk.lime}
                    onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.5)"}>{l}</a>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ height: 1, background: `linear-gradient(90deg,transparent,rgba(118,196,66,0.3),transparent)`, margin: "0 0 24px" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", fontFamily: fB }}>{ft.copyright}</span>
          <span style={{ fontSize: 11, color: tk.lime, fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, letterSpacing: "0.06em", opacity: 0.6 }}>{ft.badge}</span>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ROOT APP
═══════════════════════════════════════════════════════════════ */
export default function GreenIonSite() {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "ar";
    const raw = new URLSearchParams(window.location.search).get("lang");
    return raw === "en" ? "en" : "ar";
  });
  const [overridesByLang, setOverridesByLang] = useState(() => ({ en: {}, ar: {} }));
  const [sectionsEnabled, setSectionsEnabled] = useState(() => ({ ...DEFAULT_SECTIONS }));
  const [layout, setLayout] = useState(() => ({ ...DEFAULT_LAYOUT }));
  const c = deepMerge({ ...COPY[lang], layout }, overridesByLang[lang] ?? {});

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Source+Sans+3:wght@400;500;600&family=DM+Mono&family=Cairo:wght@400;500;600;700;800;900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    const load = () => {
      const all = readJson(STORAGE_KEYS.overrides, {});
      setOverridesByLang({ en: all?.en ?? {}, ar: all?.ar ?? {} });
      setSectionsEnabled({ ...DEFAULT_SECTIONS, ...(readJson(STORAGE_KEYS.sections, {}) ?? {}) });
      setLayout({ ...DEFAULT_LAYOUT, ...(readJson(STORAGE_KEYS.layout, {}) ?? {}) });
    };
    load();
    const onStorage = e => {
      if (!e.key) return;
      if (e.key === STORAGE_KEYS.overrides || e.key === STORAGE_KEYS.sections || e.key === STORAGE_KEYS.layout) {
        load();
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  useEffect(() => {
    document.documentElement.dir = c.dir;
    document.documentElement.lang = lang;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [lang, c.dir]);

  const toggle = () => setLang(l => l === "en" ? "ar" : "en");

  return (
    <div style={{ background: tk.bg, minHeight: "100vh", overflowX: "hidden", fontFamily: lang === "ar" ? tk.ff.bodyAr : tk.ff.bodyEn }}>
      <Nav lang={lang} onToggle={toggle} c={c} />
      {sectionsEnabled.hero && <Hero lang={lang} c={c} />}
      <div style={{ position: "relative", zIndex: 1, background: tk.bg }}>
        {sectionsEnabled.services && <Services lang={lang} c={c} />}
        {sectionsEnabled["how-it-works"] && <HowItWorks lang={lang} c={c} />}
        {sectionsEnabled.calculator && <Calculator lang={lang} c={c} />}
        {sectionsEnabled.projects && <Projects lang={lang} c={c} />}
        {sectionsEnabled.products && <Products lang={lang} c={c} />}
        {sectionsEnabled.whyus && <WhyUs lang={lang} c={c} />}
        {sectionsEnabled.testimonials && <Testimonials lang={lang} c={c} />}
        {sectionsEnabled.faq && <FAQ lang={lang} c={c} />}
        {sectionsEnabled.contact && <Contact key={lang} lang={lang} c={c} />}
        {sectionsEnabled.footer && <Footer lang={lang} c={c} />}
      </div>
    </div>
  );
}
