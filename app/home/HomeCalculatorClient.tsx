"use client";

import { useState } from "react";

import { PriceWithRiyal } from "@/app/components/SaudiRiyalIcon";
import { Chip, HomeCopy, HomeLang, tk } from "@/app/home/shared";

type HomeCalculatorClientProps = {
  lang: HomeLang;
  copy: HomeCopy;
};

export default function HomeCalculatorClient({ lang, copy }: HomeCalculatorClientProps) {
  const [bill, setBill] = useState(500);
  const [area, setArea] = useState(120);
  const isAr = lang === "ar";
  const fH = isAr ? tk.ff.headAr : tk.ff.headEn;
  const fB = isAr ? tk.ff.bodyAr : tk.ff.bodyEn;
  const cc = copy.calc;

  const systemKw = Math.round(area * 0.12 * 10) / 10;
  const annualGen = Math.round(systemKw * 1650);
  const annualSave = Math.round(bill * 0.82 * 12);
  const co2 = Math.round(annualGen * 0.00082 * 10) / 10;
  const payback = (systemKw * 6500 / annualSave).toFixed(1);

  const results = [
    {
      label: cc.rows[0],
      val: <PriceWithRiyal amount={annualSave.toLocaleString()} color={tk.lime} iconSize={16} style={{ fontFamily: fH, fontSize: 18, fontWeight: 900 }} />,
      sub: cc.units[0],
      hi: true,
    },
    { label: cc.rows[1], val: `${annualGen.toLocaleString()} kWh`, sub: cc.units[1], hi: false },
    { label: cc.rows[2], val: `${co2} ${isAr ? "طن" : "t"}`, sub: cc.units[2], hi: false },
    { label: cc.rows[3], val: `${payback} ${isAr ? "سنة" : "yrs"}`, sub: cc.units[3], hi: false },
  ];

  return (
    <section id="calculator" style={{ background: tk.bg, padding: "clamp(64px,10vw,100px) clamp(16px,4vw,32px)", direction: copy.dir }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Chip>{cc.chip}</Chip>
          <h2 style={{ fontFamily: fH, fontSize: "clamp(26px,4vw,46px)", fontWeight: 900, color: tk.ink, margin: "18px 0 12px", letterSpacing: isAr ? "-0.01em" : "-0.04em", textAlign: "center" }}>{cc.h2}</h2>
          <p style={{ fontSize: 15, color: tk.muted, fontFamily: fB, lineHeight: 1.85, textAlign: "center" }}>{cc.sub}</p>
        </div>
        <div style={{ background: tk.bgCard, borderRadius: "10px", border: `1.5px solid ${tk.border}`, overflow: "hidden", boxShadow: tk.shadowLg }}>
          <div className="gi-grid-2">
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
                  dispVal: <PriceWithRiyal amount={bill} color={tk.forestMid} iconSize={13} style={{ fontSize: 13, fontWeight: 700, fontFamily: fH }} />,
                },
                { label: cc.areaLabel, val: area, setter: setArea, min: 20, max: 500, step: 10, lo: "20 m²", hi: "500 m²", dispVal: `${area} m²` },
              ].map((sl) => (
                <div key={sl.label} style={{ marginBottom: 32 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                    <label style={{ fontSize: 13, color: tk.muted, fontFamily: fB }}>{sl.label}</label>
                    <span style={{ fontSize: 13, fontWeight: 700, color: tk.forestMid, fontFamily: fH }}>{sl.dispVal}</span>
                  </div>
                  <input type="range" min={sl.min} max={sl.max} step={sl.step} value={sl.val} onChange={(e) => sl.setter(Number(e.target.value))} style={{ width: "100%", accentColor: tk.forestMid }} />
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontSize: 11, color: tk.mutedLt, fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn }}><span>{sl.lo}</span><span>{sl.hi}</span></div>
                </div>
              ))}
              <div style={{ padding: "16px 18px", background: "rgba(27,94,32,0.05)", borderRadius: "10px", border: `1.5px solid ${tk.borderG}` }}>
                <div style={{ fontSize: 11, color: tk.forestMid, fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, letterSpacing: "0.08em", marginBottom: 6, textTransform: "uppercase" }}>{cc.sys}</div>
                <div style={{ fontFamily: fH, fontSize: 28, fontWeight: 900, color: tk.forest }}>{systemKw} kWp</div>
                <div style={{ fontSize: 13, color: tk.muted, fontFamily: fB, marginTop: 4 }}>{cc.sysDesc} {Math.ceil(systemKw / 0.55)} {cc.panels}</div>
              </div>
            </div>
            <div style={{ padding: "clamp(22px,5vw,44px) clamp(18px,5vw,40px)", background: tk.bgMid, order: isAr ? 1 : 2, textAlign: isAr ? "right" : "left" }}>
              <h3 style={{ fontFamily: fH, fontSize: 16, fontWeight: 800, color: tk.ink, margin: "0 0 32px" }}>{cc.results}</h3>
              <div className="gi-grid-2" style={{ gap: 12, marginBottom: 24 }}>
                {results.map((r) => (
                  <div key={r.label} style={{ padding: "18px 16px", borderRadius: "10px", background: r.hi ? tk.forest : tk.bgCard, border: `1.5px solid ${r.hi ? "transparent" : tk.border}`, boxShadow: r.hi ? "0 4px 20px rgba(27,94,32,0.2)" : "none" }}>
                    <div style={{ fontSize: 11, color: r.hi ? "rgba(255,255,255,0.7)" : tk.muted, fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, letterSpacing: "0.06em", marginBottom: 8, textTransform: "uppercase" }}>{r.label}</div>
                    <div style={{ fontFamily: fH, fontSize: 18, fontWeight: 900, color: r.hi ? tk.lime : tk.ink }}>{r.val}</div>
                    <div style={{ fontSize: 11, color: r.hi ? "rgba(255,255,255,0.6)" : tk.muted, fontFamily: fB, marginTop: 4 }}>{r.sub}</div>
                  </div>
                ))}
              </div>
              <button style={{ width: "100%", padding: "14px", borderRadius: "10px", background: tk.forest, color: tk.white, border: "none", fontSize: 13.5, fontWeight: 700, fontFamily: fH, boxShadow: "0 4px 20px rgba(27,94,32,0.3)" }}>{cc.btn}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
