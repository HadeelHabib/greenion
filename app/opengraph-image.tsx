import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Green Ion — Solar energy and solar water pumping solutions in Saudi Arabia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "app/assets/LOGO_.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #F7F9F4 0%, #EEF3E8 55%, #DCEBCF 100%)",
          color: "#0F2710",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="" height={110} style={{ height: 110 }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 66, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            Solar Energy Solutions
          </div>
          <div style={{ fontSize: 66, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, color: "#1B5E20" }}>
            for Saudi Arabia
          </div>
          <div style={{ marginTop: 24, fontSize: 30, color: "#3A4E35" }}>
            Solar water pumping · Rooftop & commercial PV · EPC installation
          </div>
        </div>
        <div style={{ display: "flex", height: 10, width: 220, borderRadius: 999, background: "#76C442" }} />
      </div>
    ),
    size,
  );
}
