"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { Arrow, Chip, HomeCopy, HomeLang, tk } from "@/app/home/shared";

type HomeProjectsClientProps = {
  lang: HomeLang;
  copy: HomeCopy;
};

export default function HomeProjectsClient({ lang, copy }: HomeProjectsClientProps) {
  const [active, setActive] = useState(0);
  const isAr = lang === "ar";
  const fH = isAr ? tk.ff.headAr : tk.ff.headEn;
  const fB = isAr ? tk.ff.bodyAr : tk.ff.bodyEn;
  const pr = copy.projects;
  const cats = pr.cats;
  const activeCategory = cats[active] as string | undefined;

  const shown = useMemo(
    () => (active === 0 || !activeCategory ? pr.items : pr.items.filter((item) => item.type === activeCategory)),
    [active, activeCategory, pr.items]
  );

  return (
    <section id="projects" style={{ background: tk.bgMid, padding: "clamp(64px,10vw,100px) clamp(16px,4vw,32px)", direction: copy.dir, position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, marginBottom: 48 }}>
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Chip>{pr.chip}</Chip>
            <h2 style={{ fontFamily: fH, fontSize: "clamp(26px,4vw,46px)", fontWeight: 900, color: tk.ink, margin: "16px 0 0", letterSpacing: isAr ? "-0.01em" : "-0.04em", textAlign: "center" }}>{pr.h2}</h2>
          </div>
          <div style={{ display: cats.length > 1 ? "flex" : "none", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
            {cats.map((cat, index) => (
              <button key={cat} onClick={() => setActive(index)} style={{ padding: "7px 16px", borderRadius: "10px", background: active === index ? tk.forest : "transparent", color: active === index ? tk.white : tk.muted, border: `1.5px solid ${active === index ? tk.forest : tk.borderDk}`, cursor: "pointer", fontSize: 12, fontFamily: fB, fontWeight: 600 }}>
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="gi-projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 18 }}>
          {shown.map((project) => {
            const meta = [project.type, project.loc].filter(Boolean).join(" · ");
            const href = `/projects/${project.slug}${isAr ? "" : "?lang=en"}`;
            const tag = "tag" in project ? project.tag : undefined;
            return (
              <Link key={project.title} href={href} className="gi-project-card" style={{ display: "flex", flexDirection: "column", minHeight: 100, borderRadius: "10px", background: tk.bgCard, border: `1.5px solid ${tk.border}`, position: "relative", overflow: "hidden", textDecoration: "none", boxShadow: "0 8px 24px rgba(27,94,32,0.08)" }}>
                <div style={{ position: "relative", aspectRatio: "16 / 10", background: project.color || tk.bgMid }}>
                  {project.video ? <video src={project.video} autoPlay muted loop playsInline preload="none" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> : null}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,39,16,0.08) 0%, rgba(15,39,16,0.18) 100%)" }} />
                  {tag ? <div style={{ position: "absolute", top: 14, [copy.dir === "rtl" ? "left" : "right"]: 14, background: tk.lime, color: tk.forest, fontSize: 10, fontWeight: 800, fontFamily: fH, padding: "4px 10px", borderRadius: "10px" }}>{tag}</div> : null}
                </div>
                <div style={{ padding: "18px 18px 20px", display: "grid", gap: 10 }}>
                  {meta ? <div style={{ fontSize: 11, color: tk.forestMid, fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, letterSpacing: isAr ? 0 : "0.08em", textTransform: isAr ? "none" : "uppercase" }}>{meta}</div> : null}
                  <div style={{ fontSize: 18, color: tk.ink, fontFamily: fH, fontWeight: 800 }}>{project.title}</div>
                  <div style={{ fontSize: 13.5, color: tk.body, fontFamily: fB, lineHeight: 1.8 }}>
                    {project.kw ? <>{pr.size} <span style={{ color: tk.forest, fontWeight: 700 }}>{project.kw}</span></> : null}
                  </div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, color: tk.forestMid, fontSize: 13, fontFamily: fB, fontWeight: 700 }}>
                    <span>{pr.viewCase}</span>
                    <Arrow dir={copy.dir} color={tk.forestMid} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
