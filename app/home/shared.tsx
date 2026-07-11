import Image from "next/image";

import logo from "@/app/assets/LOGO_.png";
import hero from "@/app/assets/hero.png";
import panel650 from "@/app/assets/2u.png";
import inverterImage from "@/app/assets/inverter.png";
import { LANDING_COPY } from "@/app/content/site-copy";

export type HomeLang = "ar" | "en";
export type HomeCopy = (typeof LANDING_COPY)[keyof typeof LANDING_COPY] & {
  layout?: {
    overlay: number;
    heroFocus: "left" | "right";
    themeMode: "balanced" | "soft" | "strong";
  };
};

export const tk = {
  bg: "#F7F9F4",
  bgMid: "#EEF3E8",
  bgCard: "#FFFFFF",
  bgDark: "#1A3A1A",
  forest: "#1B5E20",
  forestMid: "#2E7D32",
  lime: "#76C442",
  limeLt: "#A8D96A",
  limeDim: "#4E8A1E",
  emerald: "#388E3C",
  ink: "#0F2710",
  body: "#3A4E35",
  muted: "#7A9472",
  mutedLt: "#A8C0A0",
  border: "rgba(27,94,32,0.12)",
  borderG: "rgba(118,196,66,0.35)",
  borderDk: "rgba(27,94,32,0.22)",
  white: "#FFFFFF",
  shadow: "0 4px 24px rgba(27,94,32,0.10)",
  shadowLg: "0 8px 48px rgba(27,94,32,0.15)",
  ease: "cubic-bezier(0.16,1,0.3,1)",
  ff: {
    headEn: "'Montserrat', system-ui, sans-serif",
    bodyEn: "'Source Sans 3', system-ui, sans-serif",
    monoEn: "'DM Mono', monospace",
    headAr: "'Alyamama', 'Cairo', 'Noto Kufi Arabic', sans-serif",
    bodyAr: "'Alyamama', 'Cairo', sans-serif",
    monoAr: "'Alyamama', 'Cairo', sans-serif",
  },
} as const;

export const DEFAULT_LAYOUT = {
  overlay: 78,
  heroFocus: "right" as const,
  themeMode: "balanced" as const,
};

export const HERO_BG_VIDEO = "https://res.cloudinary.com/dbjdq8ztb/video/upload/v1783011650/green_ion_stgygv.mp4";

export const heroImage = hero;

export const productImages = {
  "/eco-panel-650w.png": panel650,
  "/invt-inverter.png": inverterImage,
};

export const BrandLogo = ({ width = 190, alt = "Green Ion logo" }: { width?: number; alt?: string }) => (
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

export const Chip = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 11,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: tk.forestMid,
      padding: "5px 14px",
      border: `1px solid ${tk.borderG}`,
      borderRadius: "10px",
      background: "rgba(118,196,66,0.1)",
      fontWeight: 700,
      ...style,
    }}
  >
    {children}
  </span>
);

export const Arrow = ({ dir, color = tk.forest }: { dir: string; color?: string }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: dir === "rtl" ? "scaleX(-1)" : "none" }}>
    <path d="M3 8H13M9 4L13 8L9 12" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function getHomeNavHrefs(lang: HomeLang) {
  return [
    lang === "ar" ? "/" : "/?lang=en",
    lang === "ar" ? "/about?lang=ar" : "/about?lang=en",
    lang === "ar" ? "/services?lang=ar" : "/services?lang=en",
    lang === "ar" ? "/#how-it-works" : "/?lang=en#how-it-works",
    lang === "ar" ? "/#projects" : "/?lang=en#projects",
    lang === "ar" ? "/#calculator" : "/?lang=en#calculator",
    lang === "ar" ? "/#contact" : "/?lang=en#contact",
  ] as const;
}
