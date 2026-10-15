"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { Arrow, Chip, HomeCopy, HomeLang, tk } from "@/app/home/shared";
import { SaudiRiyalIcon } from "@/app/components/SaudiRiyalIcon";

type HomeOffersClientProps = {
  lang: HomeLang;
  copy: HomeCopy;
};

const GAP = 16;
const AUTOPLAY_MS = 3000;

export default function HomeOffersClient({ lang, copy }: HomeOffersClientProps) {
  const isAr = lang === "ar";
  const fH = isAr ? tk.ff.headAr : tk.ff.headEn;
  const fB = isAr ? tk.ff.bodyAr : tk.ff.bodyEn;
  const ctaHref = isAr ? "/#contact" : "/?lang=en#contact";
  const packages = copy.services.packages;

  const viewportRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const update = () => {
      const isMobile = window.innerWidth < 768;
      setCardsPerView(isMobile ? 1 : 3);
      if (viewportRef.current) {
        setViewportWidth(viewportRef.current.clientWidth);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalPages = Math.max(1, Math.ceil(packages.length / cardsPerView));
  const safePage = Math.min(page, totalPages - 1);
  const cardWidth = viewportWidth > 0 ? (viewportWidth - (cardsPerView - 1) * GAP) / cardsPerView : 0;
  const offset = safePage * viewportWidth;
  const trackTransform = isAr ? `translateX(${offset}px)` : `translateX(-${offset}px)`;

  const goPrev = () => setPage((p) => (p <= 0 ? totalPages - 1 : p - 1));
  const goNext = () => setPage((p) => (p >= totalPages - 1 ? 0 : p + 1));

  useEffect(() => {
    if (isPaused || totalPages <= 1) return;
    const id = setInterval(() => {
      setPage((p) => (p >= totalPages - 1 ? 0 : p + 1));
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [isPaused, totalPages]);

  const navBtnStyle = (side: "left" | "right"): React.CSSProperties => ({
    position: "absolute",
    [side]: 0,
    top: "50%",
    transform: "translateY(-50%)",
    width: 32,
    height: 32,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.92)",
    border: `1.5px solid ${tk.border}`,
    boxShadow: tk.shadow,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 3,
    padding: 0,
  });

  return (
    <section id="services" style={{ background: tk.bg, padding: "clamp(56px,8vw,88px) clamp(16px,4vw,32px)", direction: copy.dir, position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ marginBottom: 40, display: "flex", flexDirection: "column", gap: 12, alignItems: "center", textAlign: "center" }}>
          <Chip>{copy.services.chip}</Chip>
          <h2 style={{ fontFamily: fH, fontSize: "clamp(26px,4.5vw,46px)", fontWeight: 900, color: tk.ink, margin: 0, letterSpacing: isAr ? "-0.01em" : "-0.04em", lineHeight: 1.1, textAlign: "center" }}>
            {copy.services.h2a}
            <br />
            <span style={{ color: tk.lime }}>{copy.services.h2b}</span>
          </h2>
          {copy.services.sub ? <p style={{ fontSize: 15, color: tk.muted, fontFamily: fB, lineHeight: 1.8, maxWidth: 560, margin: "6px 0 0", textAlign: "center" }}>{copy.services.sub}</p> : null}
        </div>

        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <button onClick={goPrev} aria-label={isAr ? "السابق" : "Previous"} style={navBtnStyle(isAr ? "right" : "left")}>
            <Arrow dir={isAr ? "ltr" : "rtl"} color={tk.forest} />
          </button>
          <button onClick={goNext} aria-label={isAr ? "التالي" : "Next"} style={navBtnStyle(isAr ? "left" : "right")}>
            <Arrow dir={isAr ? "rtl" : "ltr"} color={tk.forest} />
          </button>

          <div ref={viewportRef} style={{ overflow: "hidden", margin: "0 8px" }}>
            <div
              style={{
                display: "flex",
                gap: GAP,
                transform: trackTransform,
                transition: `transform 0.55s ${tk.ease}`,
              }}
            >
              {packages.map((pkg) => {
                const detailsHref = isAr ? `/services/${pkg.id}?lang=ar` : `/services/${pkg.id}?lang=en`;
                return (
                  <div key={pkg.id} style={{ width: cardWidth || "auto", flexShrink: 0 }}>
                    <div style={{ background: tk.white, borderRadius: "10px", border: `1.5px solid ${tk.border}`, padding: "clamp(14px,3vw,20px) clamp(12px,2.5vw,18px)", boxShadow: tk.shadow, display: "flex", flexDirection: "column", gap: 8, textAlign: isAr ? "right" : "left", height: "100%" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4, gap: 6 }}>
                        <h3 style={{ fontFamily: fH, fontSize: "clamp(15px,4vw,21px)", fontWeight: 900, color: tk.ink, margin: 0 }}>{pkg.title}</h3>
                        {pkg.badge ? <span style={{ fontSize: "clamp(8px,2vw,9.5px)", padding: "2px 7px", borderRadius: "8px", background: "rgba(118,196,66,0.12)", color: tk.forestMid, fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, textTransform: "uppercase", letterSpacing: "0.05em", border: `1px solid ${tk.borderG}`, whiteSpace: "nowrap" }}>{pkg.badge}</span> : null}
                      </div>
                      <p style={{ fontSize: "clamp(11px,3vw,12.5px)", color: tk.body, fontFamily: fB, lineHeight: 1.6, margin: 0 }}>{pkg.summary}</p>
                      <div style={{ marginTop: "auto", paddingTop: 10, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: isAr ? "flex-end" : "flex-start" }}>
                          <span style={{ fontSize: "clamp(17px,5vw,22px)", fontWeight: 900, color: tk.forest, fontFamily: fH }}>{pkg.price}</span>
                          <span style={{ fontSize: "clamp(9px,2.5vw,11px)", color: tk.muted, fontFamily: fB }}><SaudiRiyalIcon size={11} color={tk.muted} title={isAr ? "ريال سعودي" : "Saudi Riyal"} /></span>
                        </div>
                        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: isAr ? "flex-start" : "flex-end" }}>
                          <Link href={detailsHref} style={{ padding: "clamp(7px,2vw,9px) clamp(10px,2.5vw,14px)", borderRadius: "8px", background: tk.forest, color: tk.white, fontSize: "clamp(10px,2.5vw,12px)", fontWeight: 700, fontFamily: fH, boxShadow: "0 3px 12px rgba(27,94,32,0.22)", textDecoration: "none", whiteSpace: "nowrap" }}>{isAr ? "التفاصيل" : "Details"}</Link>
                          <Link href={ctaHref} style={{ padding: "clamp(7px,2vw,9px) clamp(10px,2.5vw,14px)", borderRadius: "8px", background: "transparent", color: tk.forest, border: `1.5px solid ${tk.borderDk}`, fontSize: "clamp(10px,2.5vw,12px)", fontWeight: 700, fontFamily: fH, textDecoration: "none", whiteSpace: "nowrap" }}>{pkg.cta}</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {totalPages > 1 ? (
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 28 }}>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`${isAr ? "صفحة" : "Page"} ${i + 1}`}
                  style={{
                    width: i === safePage ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: i === safePage ? tk.forest : tk.borderDk,
                    border: "none",
                    cursor: "pointer",
                    transition: `all 0.3s ${tk.ease}`,
                    padding: 0,
                  }}
                />
              ))}
            </div>
          ) : null}
        </div>

        <div style={{ marginTop: 40, textAlign: "center" }}>
          <Link href={isAr ? "/services?lang=ar" : "/services?lang=en"} style={{ padding: 0, background: "transparent", color: tk.forest, border: "none", fontSize: 15, fontWeight: 800, fontFamily: fH, display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            {isAr ? "عرض المزيد" : "View More"} <Arrow dir={copy.dir} color={tk.forest} />
          </Link>
        </div>
      </div>
    </section>
  );
}
