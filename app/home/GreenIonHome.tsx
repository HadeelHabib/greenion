import Image from "next/image";
import Link from "next/link";

import SiteNavbar from "@/app/components/SiteNavbar";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";
import { PriceWithRiyal, SaudiRiyalIcon, extractMoneyAmount } from "@/app/components/SaudiRiyalIcon";
import HomeCalculatorClient from "@/app/home/HomeCalculatorClient";
import HomeContactClient from "@/app/home/HomeContactClient";
import HomeFaqClient from "@/app/home/HomeFaqClient";
import HomeHeroClient from "@/app/home/HomeHeroClient";
import HomeProjectsClient from "@/app/home/HomeProjectsClient";
import HomeTestimonialsClient from "@/app/home/HomeTestimonialsClient";
import {
  Arrow,
  BrandLogo,
  Chip,
  DEFAULT_LAYOUT,
  getHomeNavHrefs,
  heroImage,
  HomeLang,
  productImages,
  tk,
} from "@/app/home/shared";
import { LANDING_COPY } from "@/app/content/site-copy";

function WhyUsFeatureIcon({ index }: { index: number }) {
  const iconWrap: React.CSSProperties = {
    width: 62,
    height: 62,
    borderRadius: "50%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1.5px solid rgba(118,196,66,0.55)",
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
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (index === 0) {
    return <span style={iconWrap} aria-hidden="true"><svg {...iconProps}><circle cx="12" cy="12" r="7" /><path d="M12 5V2.5M12 21.5V19M19 12h2.5M2.5 12H5M16.95 7.05l1.8-1.8M5.25 18.75l1.8-1.8M16.95 16.95l1.8 1.8M5.25 5.25l1.8 1.8" /><circle cx="12" cy="12" r="2.5" /></svg></span>;
  }
  if (index === 1) {
    return <span style={iconWrap} aria-hidden="true"><svg {...iconProps}><rect x="7" y="4" width="9" height="16" rx="2" /><path d="M10.5 9.5h3l-2 5h2" /><path d="M10 2h4" /></svg></span>;
  }
  if (index === 2) {
    return <span style={iconWrap} aria-hidden="true"><svg {...iconProps}><path d="M12 14c2.5 0 4.5-2.13 4.5-4.75S14.5 4.5 12 4.5 7.5 6.63 7.5 9.25 9.5 14 12 14Z" /><path d="M5 19.5c1.65-2.33 4.15-3.5 7-3.5s5.35 1.17 7 3.5" /><path d="M4.5 6.5 2.75 8.25 4.5 10M19.5 6.5l1.75 1.75L19.5 10" /></svg></span>;
  }
  if (index === 3) {
    return <span style={iconWrap} aria-hidden="true"><svg {...iconProps}><path d="M5 18.5 18.5 5a1.41 1.41 0 0 1 2 2L7 20.5 3.5 21.5 5 18.5Z" /><path d="M14.5 5.5 18.5 9.5" /><path d="M4 4h7" /><path d="M4 8h4" /></svg></span>;
  }
  return <span style={iconWrap} aria-hidden="true"><svg {...iconProps}><path d="M8 4h8v2.5A4 4 0 0 0 20 10v1c0 3.35-2.5 6.2-6 6.82V21h3" /><path d="M16 4H8v2.5A4 4 0 0 1 4 10v1c0 3.35 2.5 6.2 6 6.82V21H7" /><path d="M9.5 10.5 12 8.5l2.5 2-1 3h-3l-1-3Z" /></svg></span>;
}

function footerHref(label: string, isAr: boolean) {
  if (label === "About Us") return "/about?lang=en";
  if (label === "من نحن") return "/about?lang=ar";
  if (label === "Projects") return "/?lang=en#projects";
  if (label === "المشاريع") return "/#projects";
  if (label === "Services") return isAr ? "/services?lang=ar" : "/services?lang=en";
  if (label === "الخدمات") return "/services?lang=ar";
  return isAr ? "/#contact" : "/?lang=en#contact";
}

export default function GreenIonHome({ lang }: { lang: HomeLang }) {
  const c = { ...LANDING_COPY[lang], layout: DEFAULT_LAYOUT };
  const isAr = lang === "ar";
  const fH = isAr ? tk.ff.headAr : tk.ff.headEn;
  const fB = isAr ? tk.ff.bodyAr : tk.ff.bodyEn;
  const navHrefs = getHomeNavHrefs(lang);
  const homeHref = isAr ? "/" : "/?lang=en";
  const langHref = isAr ? "/?lang=en" : "/";
  const ctaHref = isAr ? "/#contact" : "/?lang=en#contact";
  const displayedPackages = c.services.packages.slice(0, 3);

  return (
    <div style={{ background: tk.bg, minHeight: "100vh", overflowX: "hidden", fontFamily: isAr ? tk.ff.bodyAr : tk.ff.bodyEn }}>
      <SiteNavbar
        lang={lang}
        brand={c.brand}
        navLinks={c.nav.links}
        navHrefs={navHrefs}
        langLabel={c.langAlt}
        langHref={langHref}
        ctaLabel={c.nav.cta}
        ctaHref={ctaHref}
        homeHref={homeHref}
      />

      <HomeHeroClient lang={lang} copy={c} />

      <div style={{ position: "relative", zIndex: 1, background: tk.bg }}>
        <section id="services" style={{ background: tk.bg, padding: "clamp(64px,10vw,100px) clamp(16px,4vw,32px)", direction: c.dir, position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 1240, margin: "0 auto" }}>
            <div style={{ marginBottom: 64, display: "flex", flexDirection: "column", gap: 14, alignItems: "center", textAlign: "center" }}>
              <Chip>{c.services.chip}</Chip>
              <h2 style={{ fontFamily: fH, fontSize: "clamp(30px,5vw,54px)", fontWeight: 900, color: tk.ink, margin: 0, letterSpacing: isAr ? "-0.01em" : "-0.04em", lineHeight: 1.1, textAlign: "center" }}>
                {c.services.h2a}
                <br />
                <span style={{ color: tk.lime }}>{c.services.h2b}</span>
              </h2>
              {c.services.sub ? <p style={{ fontSize: 16, color: tk.muted, fontFamily: fB, lineHeight: 1.85, maxWidth: 600, margin: "8px 0 0", textAlign: "center" }}>{c.services.sub}</p> : null}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {displayedPackages.map((pkg) => {
                const detailsHref = isAr ? `/services/${pkg.id}?lang=ar` : `/services/${pkg.id}?lang=en`;
                return (
                  <div key={pkg.id} style={{ background: tk.white, borderRadius: "10px", border: `1.5px solid ${tk.border}`, padding: "28px 24px", boxShadow: tk.shadow, display: "flex", flexDirection: "column", gap: 14, textAlign: isAr ? "right" : "left" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, gap: 12 }}>
                      <h3 style={{ fontFamily: fH, fontSize: "clamp(20px, 2.1vw, 26px)", fontWeight: 900, color: tk.ink, margin: 0 }}>{pkg.title}</h3>
                      {pkg.badge ? <span style={{ fontSize: 11, padding: "4px 12px", borderRadius: "10px", background: "rgba(118,196,66,0.12)", color: tk.forestMid, fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, textTransform: "uppercase", letterSpacing: "0.06em", border: `1px solid ${tk.borderG}` }}>{pkg.badge}</span> : null}
                    </div>
                    <p style={{ fontSize: 14, color: tk.body, fontFamily: fB, lineHeight: 1.75, margin: 0 }}>{pkg.summary}</p>
                    <div style={{ marginTop: "auto", paddingTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: isAr ? "flex-end" : "flex-start" }}>
                        <span style={{ fontSize: 28, fontWeight: 900, color: tk.forest, fontFamily: fH }}>{pkg.price}</span>
                        <span style={{ fontSize: 12, color: tk.muted, fontFamily: fB }}><SaudiRiyalIcon size={12} color={tk.muted} title={isAr ? "ريال سعودي" : "Saudi Riyal"} /></span>
                      </div>
                      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: isAr ? "flex-start" : "flex-end" }}>
                        <Link href={detailsHref} style={{ padding: "12px 18px", borderRadius: "10px", background: tk.forest, color: tk.white, fontSize: 13, fontWeight: 700, fontFamily: fH, boxShadow: "0 4px 16px rgba(27,94,32,0.25)", textDecoration: "none" }}>{isAr ? "التفاصيل" : "Details"}</Link>
                        <Link href={ctaHref} style={{ padding: "12px 18px", borderRadius: "10px", background: "transparent", color: tk.forest, border: `1.5px solid ${tk.borderDk}`, fontSize: 13, fontWeight: 700, fontFamily: fH, textDecoration: "none" }}>{pkg.cta}</Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: 48, textAlign: "center" }}>
              <Link href={isAr ? "/services?lang=ar" : "/services?lang=en"} style={{ padding: 0, background: "transparent", color: tk.forest, border: "none", fontSize: 16, fontWeight: 800, fontFamily: fH, display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
                {isAr ? "عرض المزيد" : "View More"} <Arrow dir={c.dir} color={tk.forest} />
              </Link>
            </div>
          </div>
        </section>

        <section id="how-it-works" style={{ background: tk.bgMid, padding: "clamp(64px,10vw,100px) clamp(16px,4vw,32px)", direction: c.dir, position: "relative", overflow: "hidden" }}>
          <div className="gi-section-bg" style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none" }}>
            <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
              <Image src={heroImage} alt="" fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
            </div>
          </div>
          <div style={{ position: "absolute", top: "8%", [isAr ? "left" : "right"]: "-8%", width: 460, height: 460, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(118,196,66,0.10), transparent 70%)", pointerEvents: "none" }} />
          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ textAlign: "center", marginBottom: 72, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Chip>{c.howit.chip}</Chip>
              <h2 style={{ fontFamily: fH, fontSize: "clamp(26px,4.5vw,50px)", fontWeight: 900, color: tk.ink, margin: "18px 0 14px", letterSpacing: isAr ? "-0.01em" : "-0.04em", textAlign: "center" }}>{c.howit.h2}</h2>
              <p style={{ fontSize: 16, color: tk.muted, fontFamily: fB, maxWidth: 480, margin: "0 auto", lineHeight: 1.85, textAlign: "center" }}>{c.howit.sub}</p>
            </div>
            <div className="gi-howit-timeline" style={{ display: "grid", gap: 24 }}>
              {c.howit.steps.map((step, index) => (
                <div key={step.title} style={{ display: "flex", gap: 16, alignItems: "flex-start", position: "relative", paddingBottom: index < c.howit.steps.length - 1 ? 28 : 0 }}>
                  {index < c.howit.steps.length - 1 ? <div style={{ position: "absolute", [isAr ? "right" : "left"]: 19, top: 40, bottom: 0, width: 1.5, background: `linear-gradient(180deg, ${tk.borderG}, transparent)` }} /> : null}
                  <div style={{ width: 40, height: 40, borderRadius: "50%", flexShrink: 0, background: tk.bgCard, border: `1.5px solid ${tk.borderG}`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: tk.shadow }}>
                    <span style={{ fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, fontWeight: 700, fontSize: 11, color: tk.forestMid }}>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div style={{ background: tk.bgCard, borderRadius: 12, border: `1.5px solid ${tk.border}`, padding: "14px 16px", boxShadow: "0 2px 12px rgba(27,94,32,0.06)", flex: 1, textAlign: isAr ? "right" : "left" }}>
                    <h3 style={{ fontFamily: fH, fontSize: 14.5, fontWeight: 800, color: tk.ink, margin: "0 0 6px" }}>{step.title}</h3>
                    <p style={{ fontSize: 12.5, color: tk.muted, lineHeight: 1.7, margin: 0, fontFamily: fB }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <HomeCalculatorClient lang={lang} copy={c} />
        <HomeProjectsClient lang={lang} copy={c} />

        <section style={{ background: tk.bg, padding: "clamp(64px,10vw,100px) clamp(16px,4vw,32px)", direction: c.dir }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, marginBottom: 52 }}>
              <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Chip>{c.products.chip}</Chip>
                <h2 style={{ fontFamily: fH, fontSize: "clamp(24px,4vw,44px)", fontWeight: 900, color: tk.ink, margin: "16px 0 0", letterSpacing: isAr ? "-0.01em" : "-0.04em", textAlign: "center" }}>{c.products.h2}</h2>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 14 }}>
              {c.products.items.map((item) => {
                const productImage = item.image ? productImages[item.image as keyof typeof productImages] : null;
                const amount = extractMoneyAmount(item.price);
                return (
                  <div key={item.name} style={{ padding: "28px 24px", background: tk.bgCard, border: `1.5px solid ${tk.border}`, borderRadius: "10px", position: "relative", boxShadow: "0 2px 8px rgba(27,94,32,0.04)" }}>
                    {item.tag ? <div style={{ position: "absolute", top: 16, [c.dir === "rtl" ? "left" : "right"]: 16, background: tk.lime, color: tk.forest, fontSize: 10, fontWeight: 800, fontFamily: fH, padding: "3px 10px", borderRadius: "10px" }}>{item.tag}</div> : null}
                    <div style={{ width: "100%", height: 160, marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {productImage ? <Image src={productImage} alt={item.name} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", width: "auto", height: "auto" }} /> : null}
                    </div>
                    <h3 style={{ fontFamily: fH, fontSize: 15, fontWeight: 800, color: tk.ink, margin: "0 0 6px" }}>{item.name}</h3>
                    <p style={{ fontSize: 12, color: tk.muted, fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, margin: "0 0 20px" }}>{item.spec}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <PriceWithRiyal amount={amount} color={tk.forest} iconSize={16} style={{ fontFamily: fH, fontSize: 18, fontWeight: 900 }} />
                      <Link href={ctaHref} style={{ padding: "7px 14px", borderRadius: "10px", background: tk.forest, color: tk.white, fontSize: 12, fontFamily: fB, fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{c.products.getQuote}</Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section style={{ background: "linear-gradient(135deg, #062a1a 0%, #07341f 50%, #0a3c26 100%)", padding: "clamp(64px,10vw,100px) clamp(16px,4vw,32px)", direction: c.dir, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at top right, rgba(118,196,66,0.18), transparent 24%)" }} />
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at bottom left, rgba(118,196,66,0.12), transparent 26%)" }} />
            <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(102deg, rgba(255,255,255,0.035) 0 2px, transparent 2px 44px)" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(2,14,10,0.12) 0%, rgba(2,14,10,0.18) 100%)" }} />
          </div>
          <div style={{ maxWidth: 1120, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 56 }}>
              <Chip style={{ color: tk.lime, border: "1px solid rgba(118,196,66,0.38)", background: "rgba(118,196,66,0.08)" }}>{c.whyus.chip}</Chip>
              <h2 style={{ fontFamily: fH, fontSize: "clamp(26px,3.8vw,46px)", fontWeight: 900, color: tk.white, margin: "18px 0 16px", letterSpacing: isAr ? "-0.01em" : "-0.04em", lineHeight: 1.15, textAlign: "center" }}>
                {c.whyus.h2a}
                <br />
                <span style={{ color: tk.lime }}>{c.whyus.h2b}</span>
              </h2>
              <p style={{ fontSize: 15.5, color: "rgba(255,255,255,0.78)", fontFamily: fB, margin: 0, maxWidth: 760, lineHeight: 1.95, textAlign: "center" }}>{c.whyus.sub}</p>
            </div>
            <div className="gi-grid-2" style={{ columnGap: "clamp(28px,5vw,64px)", rowGap: 28 }}>
              {c.whyus.cards.map((card, index) => (
                <div key={card.title} style={{ borderTop: "1px solid rgba(255,255,255,0.16)", paddingTop: 26, display: "grid", gridTemplateColumns: isAr ? "1fr auto" : "auto 1fr", gap: 18, alignItems: "start" }}>
                  <div style={{ order: isAr ? 1 : 2, textAlign: isAr ? "right" : "left" }}>
                    <h3 style={{ fontFamily: fH, fontSize: "clamp(20px,2.1vw,28px)", fontWeight: 900, color: tk.lime, margin: "0 0 12px", lineHeight: 1.4 }}>{card.title}</h3>
                    <p style={{ fontSize: "clamp(14px,1.5vw,16px)", color: "rgba(255,255,255,0.76)", fontFamily: fB, margin: 0, lineHeight: 2 }}>{card.desc}</p>
                  </div>
                  <div style={{ order: isAr ? 2 : 1, paddingTop: 2 }}>
                    <WhyUsFeatureIcon index={index} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <HomeTestimonialsClient lang={lang} copy={c} />
        <HomeFaqClient lang={lang} copy={c} />
        <HomeContactClient lang={lang} copy={c} />

        <footer style={{ background: tk.bgDark, borderTop: "1px solid rgba(255,255,255,0.06)", padding: "clamp(40px,7vw,64px) clamp(16px,4vw,32px) clamp(24px,5vw,36px)", direction: c.dir }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="gi-footer-grid" style={{ gap: 48, marginBottom: 52 }}>
              <div style={{ textAlign: isAr ? "right" : "left" }}>
                <div style={{ marginBottom: 16 }}>
                  <BrandLogo width={150} alt={c.brand} />
                </div>
                <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.5)", fontFamily: fB, lineHeight: 1.85, maxWidth: 260, margin: "0 0 20px" }}>{c.footer.tagline}</p>
                <p style={{ fontSize: 12, color: tk.lime, fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, letterSpacing: "0.06em", opacity: 0.7 }}>{c.footer.locations}</p>
              </div>
              {c.footer.cols.map((col) => (
                <div key={col.h} style={{ textAlign: isAr ? "right" : "left" }}>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 18 }}>{col.h}</div>
                  {col.ls.map((label) => (
                    <div key={label} style={{ marginBottom: 10 }}>
                      <Link href={footerHref(label, isAr)} style={{ fontSize: 13.5, color: "rgba(255,255,255,0.5)", fontFamily: fB, textDecoration: "none" }}>{label}</Link>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(118,196,66,0.3),transparent)", margin: "0 0 24px" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", fontFamily: fB }}>{c.footer.copyright}</span>
              <span style={{ fontSize: 11, color: tk.lime, fontFamily: isAr ? tk.ff.monoAr : tk.ff.monoEn, letterSpacing: "0.06em", opacity: 0.6 }}>{c.footer.badge}</span>
            </div>
          </div>
        </footer>
      </div>

      <ScrollToTopButton lang={lang} />
    </div>
  );
}
