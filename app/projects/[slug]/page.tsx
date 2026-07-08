import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import logo from "@/app/assets/LOGO_.png";
import { LANDING_COPY } from "@/app/content/site-copy";

const tk = {
  bg: "#F7F9F4",
  bgMid: "#EEF3E8",
  bgCard: "#FFFFFF",
  forest: "#1B5E20",
  forestMid: "#2E7D32",
  lime: "#76C442",
  limeLt: "#A8D96A",
  ink: "#0F2710",
  body: "#3A4E35",
  muted: "#7A9472",
  border: "rgba(27,94,32,0.12)",
  borderDk: "rgba(27,94,32,0.22)",
  white: "#FFFFFF",
  shadow: "0 8px 40px rgba(27,94,32,0.12)",
  ff: {
    headEn: "'Montserrat', system-ui, sans-serif",
    bodyEn: "'Source Sans 3', system-ui, sans-serif",
    monoEn: "'DM Mono', monospace",
    headAr: "'Alyamama', 'Cairo', 'Noto Kufi Arabic', sans-serif",
    bodyAr: "'Alyamama', 'Cairo', sans-serif",
    monoAr: "'Alyamama', 'Cairo', sans-serif",
  },
};

type DetailLang = keyof typeof LANDING_COPY;
type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ lang?: string | string[] | undefined }>;

const DETAILS_COPY = {
  en: {
    pageTitle: "Project Details",
    back: "Back to projects",
    switchLabel: "عربي",
    heroChip: "Project Details",
    videoHint: "Video is paused by default. Press play when you want to preview it.",
    summaryTitle: "Project Summary",
    summaryText:
      "This is placeholder content for now. Replace it later with the real project story, client background, and system goals after you review the final footage.",
    highlightsTitle: "Quick Highlights",
    highlights: [
      ["Project Type", "Commercial rooftop solar installation with expandable battery-ready design."],
      ["Delivery Window", "Planned in six weeks with phased electrical integration and final commissioning."],
      ["Scope", "Engineering review, mounting, inverter setup, testing, and monitoring handover."],
    ],
    aboutTitle: "About This Project",
    aboutText:
      "This section is intentionally filled with editable placeholder copy. You can later describe the customer challenge, site conditions, the installation process, and the final energy outcome in as much detail as you want.",
    scopeTitle: "Included Work",
    scope: [
      "Site survey and technical layout review.",
      "Panel positioning strategy and cable routing plan.",
      "Electrical integration, inverter setup, and safety checks.",
      "Monitoring configuration and post-installation handover.",
    ],
    factsTitle: "Snapshot",
    facts: [
      ["Location", "Saudi Arabia"],
      ["Status", "Completed"],
      ["System", "Placeholder 250 kWp"],
      ["Timeline", "Placeholder 6 Weeks"],
    ],
    noteTitle: "Editing Note",
    noteText:
      "All text on this page can be replaced later with the real project details, metrics, and client-facing wording.",
  },
  ar: {
    pageTitle: "تفاصيل المشروع",
    back: "العودة إلى المشاريع",
    switchLabel: "EN",
    heroChip: "تفاصيل المشروع",
    videoHint: "الفيديو متوقف افتراضياً. اضغط تشغيل عند الرغبة في المعاينة.",
    summaryTitle: "ملخص المشروع",
    summaryText:
      "هذا محتوى تجريبي مؤقت حالياً. يمكنك لاحقاً استبداله بالقصة الحقيقية للمشروع وخلفية العميل وأهداف النظام بعد مراجعة الفيديو النهائي.",
    highlightsTitle: "نقاط سريعة",
    highlights: [
      ["نوع المشروع", "تركيب طاقة شمسية تجاري على الأسطح مع جاهزية مستقبلية للتخزين."],
      ["مدة التنفيذ", "خطة تنفيذ خلال ستة أسابيع مع ربط كهربائي على مراحل واختبارات نهائية."],
      ["نطاق العمل", "مراجعة هندسية، تركيب القواعد والألواح، إعداد العواكس، الفحص، وتسليم المراقبة."],
    ],
    aboutTitle: "عن هذا المشروع",
    aboutText:
      "هذا القسم يحتوي على نص تجريبي قابل للتعديل بالكامل. يمكنك لاحقاً كتابة تحديات الموقع، متطلبات العميل، مراحل التنفيذ، والنتائج النهائية بالتفصيل الذي تريده.",
    scopeTitle: "الأعمال المنفذة",
    scope: [
      "رفع موقعي ومراجعة المخطط الفني.",
      "تخطيط توزيع الألواح ومسارات الكوابل.",
      "الربط الكهربائي وإعداد العاكس وفحوصات السلامة.",
      "تهيئة نظام المراقبة وتسليم المشروع بعد التركيب.",
    ],
    factsTitle: "معلومات سريعة",
    facts: [
      ["الموقع", "المملكة العربية السعودية"],
      ["الحالة", "مكتمل"],
      ["النظام", "قدرة تجريبية 250 kWp"],
      ["المدة", "مدة تجريبية 6 أسابيع"],
    ],
    noteTitle: "ملاحظة للتعديل",
    noteText:
      "يمكنك لاحقاً استبدال كل النصوص هنا بتفاصيل المشروع الحقيقية والأرقام النهائية والصياغة المناسبة للعرض.",
  },
} as const;

const BrandLogo = ({ width = 176, alt = "Green Ion logo" }) => (
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

function resolveLang(rawLang: string | string[] | undefined): DetailLang {
  const value = Array.isArray(rawLang) ? rawLang[0] : rawLang;
  return value === "en" ? "en" : "ar";
}

function resolveProject(lang: DetailLang, slug: string) {
  return LANDING_COPY[lang].projects.items.find((item) => item.slug === slug);
}

export async function generateStaticParams() {
  return LANDING_COPY.en.projects.items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const query = await searchParams;
  const lang = resolveLang(query.lang);
  const project = resolveProject(lang, slug);

  if (!project) {
    return {
      title: "Project Details | Green Ion",
    };
  }

  return {
    title: `${project.title} | Green Ion`,
    description:
      lang === "ar"
        ? `صفحة تفاصيل ${project.title} مع فيديو المشروع ومحتوى قابل للتعديل لاحقاً.`
        : `${project.title} details page with the project video and editable placeholder content.`,
  };
}

export default async function ProjectDetailsPage({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { slug } = await params;
  const query = await searchParams;
  const lang = resolveLang(query.lang);
  const isAr = lang === "ar";
  const project = resolveProject(lang, slug);

  if (!project) notFound();

  const copy = DETAILS_COPY[lang];
  const fHead = isAr ? tk.ff.headAr : tk.ff.headEn;
  const fBody = isAr ? tk.ff.bodyAr : tk.ff.bodyEn;
  const fMono = isAr ? tk.ff.monoAr : tk.ff.monoEn;
  const switchHref = isAr ? `/projects/${slug}?lang=en` : `/projects/${slug}`;
  const homeHref = isAr ? "/#projects" : "/?lang=en#projects";

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      style={{
        minHeight: "100vh",
        background: `linear-gradient(180deg, ${tk.bg} 0%, ${tk.bgMid} 100%)`,
        color: tk.ink,
        fontFamily: fBody,
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(247,249,244,0.9)",
          backdropFilter: "blur(16px)",
          borderBottom: `1px solid ${tk.border}`,
        }}
      >
        <div
          className="gi-project-detail-header-inner"
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "0 clamp(16px, 4vw, 32px)",
            minHeight: 72,
            gap: 16,
          }}
        >
          <Link href={homeHref} style={{ textDecoration: "none", color: tk.ink }}>
            <BrandLogo width={176} alt={isAr ? "جرين ايون" : "Green Ion"} />
          </Link>

          <div className="gi-project-detail-header-actions">
            <Link
              href={homeHref}
              className="gi-header-pill"
              style={{
                padding: "10px 16px",
                borderRadius: 999,
                textDecoration: "none",
                color: tk.forest,
                border: `1px solid ${tk.borderDk}`,
                background: tk.bgCard,
                fontWeight: 700,
                fontSize: 13,
                fontFamily: fHead,
              }}
            >
              {copy.back}
            </Link>
            <Link
              href={switchHref}
              className="gi-header-pill"
              style={{
                padding: "10px 16px",
                borderRadius: 999,
                textDecoration: "none",
                color: tk.white,
                background: tk.forest,
                fontWeight: 800,
                fontSize: 13,
                fontFamily: fHead,
              }}
            >
              {copy.switchLabel}
            </Link>
          </div>
        </div>
      </header>

      <section
        style={{
          padding: "clamp(20px, 4vw, 34px) clamp(16px, 4vw, 32px) 0",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div
            style={{
              position: "relative",
              borderRadius: 28,
              overflow: "hidden",
              minHeight: "clamp(360px, 68vh, 760px)",
              background: "#0f2710",
              boxShadow: tk.shadow,
            }}
          >
            <video
              src={project.video}
              controls
              preload="metadata"
              playsInline
              style={{
                width: "100%",
                height: "100%",
                minHeight: "clamp(360px, 68vh, 760px)",
                display: "block",
                objectFit: "cover",
                background: "#0f2710",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background:
                  "linear-gradient(180deg, rgba(15,39,16,0.12) 0%, rgba(15,39,16,0.2) 40%, rgba(15,39,16,0.75) 100%)",
              }}
            />
            <div
              className="gi-project-detail-overlay"
              style={{
                position: "absolute",
                left: isAr ? "auto" : 24,
                right: isAr ? 24 : "auto",
                bottom: 24,
                maxWidth: 640,
                padding: "18px 20px",
                borderRadius: 22,
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.22)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                color: tk.white,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 12px",
                  borderRadius: 999,
                  background: "rgba(118,196,66,0.18)",
                  color: tk.limeLt,
                  fontWeight: 800,
                  fontSize: 11,
                  fontFamily: fMono,
                  letterSpacing: isAr ? 0 : "0.08em",
                  textTransform: isAr ? "none" : "uppercase",
                }}
              >
                {copy.heroChip}
              </div>
              <h1
                style={{
                  margin: "14px 0 10px",
                  fontFamily: fHead,
                  fontSize: "clamp(32px, 5vw, 62px)",
                  lineHeight: isAr ? 1.2 : 1.02,
                  letterSpacing: isAr ? 0 : "-0.04em",
                }}
              >
                {project.title}
              </h1>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                  alignItems: "center",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.86)",
                }}
              >
                <span>{project.type}</span>
                <span>•</span>
                <span>{project.loc}</span>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: 14,
              padding: "0 4px",
              color: tk.muted,
              fontSize: 13,
              fontFamily: fBody,
            }}
          >
            {copy.videoHint}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "clamp(28px, 5vw, 48px) clamp(16px, 4vw, 32px) clamp(72px, 9vw, 96px)",
        }}
      >
        <div
          className="gi-project-detail-main-grid"
          style={{
            maxWidth: 1240,
            margin: "0 auto",
          }}
        >
          <div style={{ display: "grid", gap: 20 }}>
            <div
              style={{
                padding: "28px clamp(20px, 3vw, 30px)",
                borderRadius: 24,
                background: tk.bgCard,
                border: `1px solid ${tk.border}`,
                boxShadow: "0 4px 20px rgba(27,94,32,0.06)",
              }}
            >
              <h2 style={{ margin: "0 0 14px", fontFamily: fHead, fontSize: 28 }}>{copy.summaryTitle}</h2>
              <p style={{ margin: 0, color: tk.body, lineHeight: 1.9, fontSize: 15.5 }}>{copy.summaryText}</p>
            </div>

            <div
              style={{
                padding: "28px clamp(20px, 3vw, 30px)",
                borderRadius: 24,
                background: tk.bgCard,
                border: `1px solid ${tk.border}`,
                boxShadow: "0 4px 20px rgba(27,94,32,0.06)",
              }}
            >
              <h2 style={{ margin: "0 0 14px", fontFamily: fHead, fontSize: 28 }}>{copy.aboutTitle}</h2>
              <p style={{ margin: 0, color: tk.body, lineHeight: 1.9, fontSize: 15.5 }}>{copy.aboutText}</p>
            </div>

            <div
              style={{
                padding: "28px clamp(20px, 3vw, 30px)",
                borderRadius: 24,
                background: tk.bgCard,
                border: `1px solid ${tk.border}`,
                boxShadow: "0 4px 20px rgba(27,94,32,0.06)",
              }}
            >
              <h2 style={{ margin: "0 0 16px", fontFamily: fHead, fontSize: 28 }}>{copy.scopeTitle}</h2>
              <div style={{ display: "grid", gap: 12 }}>
                {copy.scope.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      color: tk.body,
                      fontSize: 15,
                      lineHeight: 1.8,
                    }}
                  >
                    <span style={{ color: tk.forestMid, fontWeight: 900 }}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside style={{ display: "grid", gap: 20 }}>
            <div
              style={{
                padding: "24px",
                borderRadius: 24,
                background: "linear-gradient(145deg, rgba(27,94,32,0.96), rgba(46,125,50,0.95))",
                color: tk.white,
                boxShadow: "0 10px 34px rgba(27,94,32,0.24)",
              }}
            >
              <h3 style={{ margin: "0 0 14px", fontFamily: fHead, fontSize: 22 }}>{copy.highlightsTitle}</h3>
              <div style={{ display: "grid", gap: 14 }}>
                {copy.highlights.map(([label, value]) => (
                  <div key={label} style={{ paddingBottom: 14, borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
                    <div style={{ color: tk.limeLt, fontSize: 11, fontFamily: fMono, letterSpacing: isAr ? 0 : "0.08em" }}>
                      {label}
                    </div>
                    <div style={{ marginTop: 6, lineHeight: 1.8, fontSize: 14.5 }}>{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                padding: "24px",
                borderRadius: 24,
                background: tk.bgCard,
                border: `1px solid ${tk.border}`,
                boxShadow: "0 4px 20px rgba(27,94,32,0.06)",
              }}
            >
              <h3 style={{ margin: "0 0 14px", fontFamily: fHead, fontSize: 22 }}>{copy.factsTitle}</h3>
              <div style={{ display: "grid", gap: 12 }}>
                {copy.facts.map(([label, value]) => (
                  <div
                    className="gi-project-detail-facts-row"
                    key={label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 18,
                      paddingBottom: 12,
                      borderBottom: `1px solid ${tk.border}`,
                    }}
                  >
                    <span style={{ color: tk.muted, fontSize: 13 }}>{label}</span>
                    <span style={{ color: tk.ink, fontWeight: 700, fontSize: 13.5, textAlign: isAr ? "left" : "right" }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                padding: "24px",
                borderRadius: 24,
                background: tk.bgCard,
                border: `1px solid ${tk.border}`,
                boxShadow: "0 4px 20px rgba(27,94,32,0.06)",
              }}
            >
              <h3 style={{ margin: "0 0 12px", fontFamily: fHead, fontSize: 22 }}>{copy.noteTitle}</h3>
              <p style={{ margin: 0, color: tk.body, lineHeight: 1.85, fontSize: 14.5 }}>{copy.noteText}</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
