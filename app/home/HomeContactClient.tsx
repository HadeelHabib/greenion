"use client";

import { useState } from "react";

import { Chip, HomeCopy, HomeLang, tk } from "@/app/home/shared";

type HomeContactClientProps = {
  lang: HomeLang;
  copy: HomeCopy;
};

export default function HomeContactClient({ lang, copy }: HomeContactClientProps) {
  const isAr = lang === "ar";
  const fH = isAr ? tk.ff.headAr : tk.ff.headEn;
  const fB = isAr ? tk.ff.bodyAr : tk.ff.bodyEn;
  const ct = copy.contact;
  const [form, setForm] = useState(() => ({ name: "", phone: "", city: "", type: ct.types[0] }));
  const [sent, setSent] = useState(false);

  const up = (key: keyof typeof form, value: string) => setForm((prev) => ({ ...prev, [key]: value }));
  const inputStyle: React.CSSProperties = { width: "100%", padding: "12px 16px", borderRadius: 8, background: tk.bgCard, border: `1.5px solid ${tk.border}`, color: tk.ink, fontSize: 14, fontFamily: fB, outline: "none", boxSizing: "border-box", textAlign: copy.dir === "rtl" ? "right" : "left" };

  return (
    <section id="contact" style={{ background: tk.bg, padding: "clamp(64px,10vw,100px) clamp(16px,4vw,32px)", direction: copy.dir }}>
      <div style={{ maxWidth: 1020, margin: "0 auto" }}>
        <div className="gi-contact-banner" style={{ borderRadius: "10px", background: "linear-gradient(135deg, #062a1a 0%, #07341f 50%, #0a3c26 100%)", padding: "clamp(26px,5vw,52px) clamp(22px,5vw,56px)", boxShadow: "0 12px 48px rgba(27,94,32,0.25)", marginBottom: 72 }}>
          <div className="gi-contact-banner-copy" style={{ textAlign: isAr ? "right" : "left" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <span style={{ fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, fontSize: 11, color: tk.lime, letterSpacing: "0.1em", textTransform: "uppercase" }}>{ct.slots}</span>
            </div>
            <h2 style={{ fontFamily: fH, fontSize: "clamp(20px,3vw,38px)", fontWeight: 900, color: tk.white, margin: "0 0 12px", letterSpacing: isAr ? "-0.01em" : "-0.04em", lineHeight: 1.15 }}>
              {ct.bannerTitle1}
              <br />
              <span style={{ color: tk.lime }}>{ct.bannerTitle2}</span>
            </h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", fontFamily: fB, margin: 0, lineHeight: 1.8 }}>{ct.bannerSub}</p>
          </div>
        </div>

        <div className="gi-grid-2" style={{ gap: "clamp(20px,6vw,56px)" }}>
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
                  <input type={type} value={form[key as keyof typeof form]} onChange={(e) => up(key as keyof typeof form, e.target.value)} placeholder={label} style={inputStyle} />
                </div>
              ))}
              <div>
                <label style={{ display: "block", fontSize: 11, color: tk.forestMid, fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, letterSpacing: "0.08em", marginBottom: 8, textTransform: "uppercase", fontWeight: 700 }}>{ct.cityLabel}</label>
                <input value={form.city} onChange={(e) => up("city", e.target.value)} placeholder={ct.cityPh} style={inputStyle} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 11, color: tk.forestMid, fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, letterSpacing: "0.08em", marginBottom: 8, textTransform: "uppercase", fontWeight: 700 }}>{ct.typeLabel}</label>
                <select value={form.type} onChange={(e) => up("type", e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
                  {ct.types.map((option) => <option key={option}>{option}</option>)}
                </select>
              </div>
              <button onClick={() => setSent(true)} style={{ marginTop: 8, padding: "14px", borderRadius: "10px", background: tk.forest, color: tk.white, border: "none", fontSize: 14, fontWeight: 700, fontFamily: fH, boxShadow: "0 4px 20px rgba(27,94,32,0.25)" }}>{ct.btn}</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
