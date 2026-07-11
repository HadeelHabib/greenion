"use client";

import { useState } from "react";

import { Chip, HomeCopy, HomeLang, tk } from "@/app/home/shared";

type HomeFaqClientProps = {
  lang: HomeLang;
  copy: HomeCopy;
};

export default function HomeFaqClient({ lang, copy }: HomeFaqClientProps) {
  const [open, setOpen] = useState<number | null>(null);
  const isAr = lang === "ar";
  const fH = isAr ? tk.ff.headAr : tk.ff.headEn;
  const fB = isAr ? tk.ff.bodyAr : tk.ff.bodyEn;
  const fq = copy.faq;

  return (
    <section style={{ background: tk.bgMid, padding: "clamp(56px,9vw,90px) clamp(16px,4vw,32px)", direction: copy.dir }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Chip>{fq.chip}</Chip>
          <h2 style={{ fontFamily: fH, fontSize: "clamp(24px,4vw,42px)", fontWeight: 900, color: tk.ink, margin: "18px 0 0", letterSpacing: isAr ? "-0.01em" : "-0.04em", textAlign: "center" }}>{fq.h2}</h2>
        </div>
        {fq.items.map((item, index) => (
          <div key={index} style={{ borderBottom: `1.5px solid ${tk.border}` }}>
            <button onClick={() => setOpen(open === index ? null : index)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", background: "none", border: "none", cursor: "pointer", textAlign: copy.dir === "rtl" ? "right" : "left" }}>
              <span style={{ fontSize: 15, color: open === index ? tk.forestMid : tk.ink, fontFamily: fB, fontWeight: 600, paddingInlineEnd: 20, transition: "color 0.2s" }}>{item.q}</span>
              <span style={{ color: tk.lime, fontSize: 20, flexShrink: 0, transform: open === index ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.3s", width: 28, height: 28, borderRadius: "50%", background: open === index ? tk.forest : "rgba(118,196,66,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>+</span>
            </button>
            <div style={{ overflow: "hidden", maxHeight: open === index ? "180px" : "0", transition: "max-height 0.4s ease", paddingBottom: open === index ? 20 : 0 }}>
              <p style={{ fontSize: 14.5, color: tk.body, lineHeight: 1.9, margin: 0, fontFamily: fB }}>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
