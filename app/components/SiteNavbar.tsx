'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@/app/assets/LOGO_.png";

const tk = {
  bg: "#F7F9F4",
  bgCard: "#FFFFFF",
  forest: "#1B5E20",
  forestMid: "#2E7D32",
  body: "#3A4E35",
  border: "rgba(27,94,32,0.12)",
  borderDk: "rgba(27,94,32,0.22)",
  white: "#FFFFFF",
  shadow: "0 4px 24px rgba(27,94,32,0.10)",
  ff: {
    headEn: "'Montserrat', system-ui, sans-serif",
    bodyEn: "'Source Sans 3', system-ui, sans-serif",
    headAr: "'Alyamama', 'Cairo', 'Noto Kufi Arabic', sans-serif",
    bodyAr: "'Alyamama', 'Cairo', sans-serif",
  },
};

type SiteNavbarProps = {
  lang: "ar" | "en";
  brand: string;
  navLinks: readonly string[];
  navHrefs: readonly string[];
  langLabel: string;
  langHref: string;
  ctaLabel: string;
  ctaHref: string;
  homeHref: string;
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

export default function SiteNavbar({
  lang,
  brand,
  navLinks,
  navHrefs,
  langLabel,
  langHref,
  ctaLabel,
  ctaHref,
  homeHref,
}: SiteNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isAr = lang === "ar";
  const fHead = isAr ? tk.ff.headAr : tk.ff.headEn;
  const fBody = isAr ? tk.ff.bodyAr : tk.ff.bodyEn;

  useEffect(() => {
    let ticking = false;

    const updateScrolled = () => {
      const nextScrolled = window.scrollY > 50;
      setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateScrolled);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    updateScrolled();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <nav
      className="gi-nav"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        padding: "0 clamp(16px,4vw,40px)",
        direction: isAr ? "rtl" : "ltr",
        background: scrolled ? "rgba(247,249,244,0.14)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: `1px solid ${scrolled ? "rgba(27,94,32,0.08)" : "transparent"}`,
        boxShadow: scrolled ? "0 1px 12px rgba(27,94,32,0.05)" : "none",
        transition: "all 0.35s ease",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        <Link href={homeHref} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <BrandLogo width={176} alt={brand} />
        </Link>

        <div className="gi-nav-links" style={{ display: "flex", gap: 24, alignItems: "center" }}>
          {navLinks.map((label, index) => (
            <Link
              key={label}
              href={navHrefs[index] ?? homeHref}
              style={{ fontSize: 13.5, color: tk.body, textDecoration: "none", fontFamily: fBody, fontWeight: 500, transition: "color 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = tk.forestMid; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = tk.body; }}
            >
              {label}
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Link
            href={langHref}
            style={{
              padding: "7px 18px",
              borderRadius: "10px",
              textDecoration: "none",
              background: "#EEF3E8",
              border: `1.5px solid ${tk.borderDk}`,
              color: tk.forest,
              fontSize: 12,
              fontWeight: 800,
              fontFamily: fHead,
              letterSpacing: isAr ? 0 : "0.06em",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {langLabel}
          </Link>
          <Link
            href={ctaHref}
            className="gi-nav-cta"
            style={{
              padding: "10px 22px",
              borderRadius: "10px",
              background: tk.forest,
              color: tk.white,
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 700,
              fontFamily: fHead,
              boxShadow: "0 4px 16px rgba(27,94,32,0.3)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = tk.forestMid;
              e.currentTarget.style.boxShadow = "0 6px 24px rgba(27,94,32,0.4)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = tk.forest;
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(27,94,32,0.3)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {ctaLabel}
          </Link>
          <button
            type="button"
            className="gi-nav-menu-btn"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
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
            {navLinks.map((label, index) => (
              <Link
                key={label}
                href={navHrefs[index] ?? homeHref}
                onClick={() => setOpen(false)}
                style={{
                  textDecoration: "none",
                  fontFamily: fBody,
                  fontSize: 14,
                  color: "#0F2710",
                  padding: "10px 12px",
                  borderRadius: "10px",
                  border: `1.5px solid ${tk.border}`,
                  background: tk.bgCard,
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              href={ctaHref}
              onClick={() => setOpen(false)}
              style={{
                padding: "12px 14px",
                borderRadius: "10px",
                background: tk.forest,
                color: tk.white,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 800,
                fontFamily: fHead,
                boxShadow: "0 6px 24px rgba(27,94,32,0.25)",
                textAlign: "center",
              }}
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
