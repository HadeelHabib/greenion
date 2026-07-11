"use client";

import { useEffect, useState } from "react";

import { Chip, HomeCopy, HomeLang, tk } from "@/app/home/shared";

type HomeTestimonialsClientProps = {
  lang: HomeLang;
  copy: HomeCopy;
};

export default function HomeTestimonialsClient({ lang, copy }: HomeTestimonialsClientProps) {
  const [idx, setIdx] = useState(0);
  const isAr = lang === "ar";
  const fH = isAr ? tk.ff.headAr : tk.ff.headEn;
  const fB = isAr ? tk.ff.bodyAr : tk.ff.bodyEn;
  const tm = copy.testimonials;
  const cur = tm.items[idx];

  useEffect(() => {
    const id = window.setInterval(() => setIdx((prev) => (prev + 1) % tm.items.length), 5000);
    return () => window.clearInterval(id);
  }, [tm.items.length]);

  return (
    <section style={{ background: tk.bg, padding: "clamp(64px,10vw,100px) clamp(16px,4vw,32px)", direction: copy.dir }}>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Chip>{tm.chip}</Chip>
          <h2 style={{ fontFamily: fH, fontSize: "clamp(24px,4vw,44px)", fontWeight: 900, color: tk.ink, margin: "18px 0 0", letterSpacing: isAr ? "-0.01em" : "-0.04em", textAlign: "center" }}>{tm.h2}</h2>
        </div>
        <div style={{ background: tk.bgCard, borderRadius: "10px", border: `1.5px solid ${tk.border}`, padding: "clamp(24px,5vw,44px) clamp(20px,5vw,48px)", position: "relative", boxShadow: tk.shadowLg, textAlign: isAr ? "right" : "left" }}>
          <div style={{ fontSize: 72, color: tk.lime, opacity: 0.25, position: "absolute", top: 14, [copy.dir === "rtl" ? "right" : "left"]: 32, lineHeight: 1, fontFamily: fH }}>{isAr ? "\u201C" : '"'}</div>
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
              {tm.items.map((_, index) => <button key={index} onClick={() => setIdx(index)} style={{ width: index === idx ? 28 : 8, height: 8, borderRadius: "10px", background: index === idx ? tk.forest : tk.borderDk, border: "none", cursor: "pointer", padding: 0, transition: "all 0.35s ease" }} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
