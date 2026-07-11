"use client";

import { useEffect, useState } from "react";

import { Arrow, Chip, HERO_BG_VIDEO, heroImage, HomeCopy, HomeLang, tk } from "@/app/home/shared";

type HomeHeroClientProps = {
  lang: HomeLang;
  copy: HomeCopy;
};

export default function HomeHeroClient({ lang, copy }: HomeHeroClientProps) {
  const [on, setOn] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);
  const isAr = lang === "ar";
  const fHead = isAr ? tk.ff.headAr : tk.ff.headEn;
  const fBody = isAr ? tk.ff.bodyAr : tk.ff.bodyEn;
  const layout = copy.layout!;

  useEffect(() => {
    const id = window.setTimeout(() => setOn(true), 80);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (connection?.saveData) return undefined;

    let timeoutId: number | undefined;
    let idleId: number | undefined;
    const idleWindow = window as Window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    const enableVideo = () => setLoadVideo(true);

    if (typeof idleWindow.requestIdleCallback === "function") {
      idleId = idleWindow.requestIdleCallback(enableVideo, { timeout: 1400 });
    } else {
      timeoutId = window.setTimeout(enableVideo, 900);
    }

    return () => {
      if (idleId && typeof idleWindow.cancelIdleCallback === "function") {
        idleWindow.cancelIdleCallback(idleId);
      }
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

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
    <section
      id="home"
      className="gi-hero-section"
      style={{
        minHeight: "100vh",
        background: "transparent",
        position: "relative",
        zIndex: 0,
        direction: copy.dir,
        overflow: "hidden",
        padding: "clamp(96px,14vw,132px) clamp(16px,4vw,32px) clamp(56px,10vw,80px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(118,196,66,0.08) 1px, transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "-5%", [isAr ? "left" : "right"]: "-10%", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(118,196,66,0.12), transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-5%", [isAr ? "right" : "left"]: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(27,94,32,0.06), transparent 70%)", pointerEvents: "none" }} />

      <div className="gi-hero-video-layer" style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            backgroundImage: `url(${heroImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: heroPos,
            transform: on ? "scale(1)" : "scale(1.03)",
            transition: "transform 1.4s ease 0.2s",
          }}
        >
          {loadVideo ? (
            <video
              className="gi-hero-video"
              src={HERO_BG_VIDEO}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster={heroImage.src}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: heroPos, opacity: on ? 1 : 0, transform: on ? "scale(1)" : "scale(1.05)", transition: "opacity 1.1s ease 0.2s, transform 1.4s ease 0.2s" }}
            />
          ) : null}
        </div>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at ${isAr ? "top right" : "top left"}, rgba(${overlayBase},${Math.min(0.24, overlayA1 * 0.26)}) 0%, rgba(${overlayBase},${Math.min(0.12, overlayA2 * 0.14)}) 20%, rgba(${overlayBase},0.04) 38%, transparent 58%)` }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,39,16,0.02) 0%, rgba(15,39,16,0.06) 100%)" }} />
      </div>

      <div className="gi-hero-shell" style={{ position: "relative", zIndex: 1 }}>
        <div className="gi-hero-copy" style={{ textAlign: isAr ? "right" : "left", marginInlineStart: 0 }}>
          <div style={{ marginBottom: 24, opacity: on ? 1 : 0, transform: on ? "translateY(0)" : "translateY(12px)", transition: `all 0.6s ${tk.ease}` }}>
            <Chip>{copy.hero.chip}</Chip>
          </div>
          <h1 style={{ fontFamily: fHead, fontSize: "clamp(34px,5.6vw,68px)", fontWeight: 900, color: tk.ink, lineHeight: isAr ? 1.22 : 1.06, letterSpacing: isAr ? "-0.01em" : "-0.04em", margin: "0 0 24px", opacity: on ? 1 : 0, transform: on ? "translateY(0)" : "translateY(24px)", transition: `all 0.7s ${tk.ease} 0.08s` }}>
            {copy.hero.h1a}
            <br />
            <span style={{ background: `linear-gradient(135deg,${tk.forest},${tk.lime})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{copy.hero.h1b}</span>
          </h1>
          {copy.hero.sub ? <p style={{ fontSize: "clamp(15px,2vw,18px)", color: tk.white, lineHeight: 1.9, margin: "0 0 44px", maxWidth: 540, fontFamily: fBody, opacity: on ? 1 : 0, transform: on ? "translateY(0)" : "translateY(18px)", transition: `all 0.7s ${tk.ease} 0.16s` }}>{copy.hero.sub}</p> : null}
          <div className="gi-hero-actions" style={{ opacity: on ? 1 : 0, transform: on ? "translateY(0)" : "translateY(14px)", transition: `all 0.7s ${tk.ease} 0.24s` }}>
            <a href={isAr ? "/#contact" : "/?lang=en#contact"} style={{ padding: "15px 34px", borderRadius: "10px", background: tk.forest, color: tk.white, border: "none", fontSize: 14, fontWeight: 700, fontFamily: fHead, boxShadow: "0 6px 28px rgba(27,94,32,0.35)", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 8, textDecoration: "none" }}>
              {copy.hero.cta1} <Arrow dir={copy.dir} color={tk.white} />
            </a>
            <a href={isAr ? "/#how-it-works" : "/?lang=en#how-it-works"} style={{ padding: "15px 26px", borderRadius: "10px", background: tk.white, color: tk.forest, border: `1.5px solid ${tk.borderDk}`, fontSize: 14, fontFamily: fBody, fontWeight: 500, boxShadow: tk.shadow, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", textDecoration: "none" }}>
              {copy.hero.cta2}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
