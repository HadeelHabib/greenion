"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { SaudiRiyalIcon } from "@/app/components/SaudiRiyalIcon";

type ServicePackage = {
  id: string;
  title: string;
  badge: string | null;
  price: string;
  priceUnit: string;
  summary: string;
  cta: string;
};

type ServicesCatalogProps = {
  lang: "ar" | "en";
  packages: readonly ServicePackage[];
  fH: string;
  tk: {
    ink: string;
    body: string;
    forest: string;
    forestMid: string;
    muted: string;
  };
};

const getPriceValue = (price: string) => Number(price.replace(/[^\d]/g, "")) || 0;
const formatPriceValue = (value: number) => value.toLocaleString("en-US");

export default function ServicesCatalog({ lang, packages, fH, tk }: ServicesCatalogProps) {
  const isAr = lang === "ar";

  const sortedPackages = useMemo(
    () => [...packages].sort((a, b) => getPriceValue(a.price) - getPriceValue(b.price)),
    [packages]
  );

  const priceValues = sortedPackages.map((pkg) => getPriceValue(pkg.price)).filter(Boolean);
  const minPrice = priceValues[0] ?? 0;
  const maxPrice = priceValues[priceValues.length - 1] ?? 0;
  const sliderStep = Math.max(1000, Math.floor((maxPrice - minPrice) / 50 / 1000) * 1000 || 1000);
  const [selectedPrice, setSelectedPrice] = useState(maxPrice);

  const visiblePackages = sortedPackages.filter((pkg) => getPriceValue(pkg.price) <= selectedPrice);

  return (
    <div style={{ maxWidth: 1160, margin: "0 auto" }}>
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #DCE4D6",
          borderRadius: 18,
          padding: "20px 22px",
          boxShadow: "0 6px 22px rgba(12,31,16,0.05)",
          marginBottom: 28,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: isAr ? "row-reverse" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
            marginBottom: 14,
          }}
        >
          <div style={{ textAlign: isAr ? "right" : "left" }}>
            <div style={{ fontFamily: fH, fontSize: 24, fontWeight: 900, color: tk.ink }}>
              {isAr ? "السعر" : "Price"}
            </div>
            <div style={{ marginTop: 4, fontSize: 13.5, color: tk.muted }}>
              {isAr ? "اسحب المؤشر لتحديد  السعر" : "Drag to choose the price"}
            </div>
          </div>
          <div
            style={{
              fontFamily: fH,
              fontSize: 18,
              fontWeight: 800,
              color: tk.forest,
              background: "#F3F9EA",
              border: "1px solid #B6D69B",
              borderRadius: 12,
              padding: "10px 14px",
              whiteSpace: "nowrap",
              textAlign: isAr ? "right" : "left",
            }}
          >
            {isAr
              ? `حتى ${formatPriceValue(selectedPrice)} ريال`
              : `Up to ${formatPriceValue(selectedPrice)} SAR`}
          </div>
        </div>

        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          step={sliderStep}
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(Number(e.target.value))}
          style={{ width: "100%", accentColor: tk.forest, cursor: "pointer" }}
          aria-label={isAr ? "تصفية حسب السعر" : "Filter by price"}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            marginTop: 10,
            fontSize: 12.5,
            color: tk.muted,
            fontFamily: fH,
          }}
        >
          <span>{isAr ? `${formatPriceValue(minPrice)} ريال` : `${formatPriceValue(minPrice)} SAR`}</span>
          <span>{isAr ? `${formatPriceValue(maxPrice)} ريال` : `${formatPriceValue(maxPrice)} SAR`}</span>
        </div>
      </div>

      <div
        className="gi-services-cards-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 360px)",
          gap: 24,
          justifyContent: "center",
        }}
      >
        {visiblePackages.map((pkg) => {
          const detailsHref = isAr ? `/services/${pkg.id}?lang=ar` : `/services/${pkg.id}?lang=en`;

          return (
            <Link
              key={pkg.id}
              href={detailsHref}
              className="gi-services-card"
              style={{
                background: "#FFFFFF",
                borderRadius: 18,
                border: "1px solid #DCE4D6",
                padding: "26px 26px 22px",
                boxShadow: "0 6px 22px rgba(12,31,16,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: 0,
                textAlign: "center",
                width: 360,
                minWidth: 360,
                maxWidth: 360,
                textDecoration: "none",
                color: "inherit",
                minHeight: 300,
                height: 300,
                fontFamily: fH,
              }}
            >
              <div
                className="gi-services-card-head"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 14,
                  flexDirection: isAr ? "row-reverse" : "row",
                }}
              >
                <div style={{ flex: 1 }}>
                  <h2
                    style={{
                      fontFamily: fH,
                      fontSize: 25,
                      fontWeight: 900,
                      color: tk.ink,
                      margin: 0,
                      lineHeight: 1,
                      textAlign: isAr ? "right" : "left",
                      letterSpacing: isAr ? 0 : "-0.03em",
                    }}
                  >
                    {pkg.title}
                  </h2>
                </div>
                {pkg.badge ? (
                  <span
                    style={{
                      fontSize: 11.5,
                      lineHeight: 1.15,
                      padding: "8px 14px",
                      borderRadius: 14,
                      background: "#F3F9EA",
                      color: tk.forestMid,
                      fontFamily: fH,
                      fontWeight: 500,
                      border: "1px solid #B6D69B",
                      whiteSpace: "nowrap",
                      alignSelf: "flex-start",
                    }}
                  >
                    {pkg.badge}
                  </span>
                ) : null}
              </div>

              <p
                style={{
                  margin: "30px auto 0",
                  color: tk.body,
                  fontSize: 14,
                  lineHeight: 1.7,
                  fontFamily: fH,
                  fontWeight: 400,
                  maxWidth: 300,
                }}
              >
                {pkg.summary}
              </p>

              <div
                className="gi-services-card-foot"
                style={{
                  marginTop: "auto",
                  paddingTop: 22,
                  display: "flex",
                  flexDirection: isAr ? "row-reverse" : "row",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  gap: 14,
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: 104,
                    minHeight: 42,
                    padding: "10px 18px",
                    borderRadius: 14,
                    background: tk.forest,
                    color: "#FFFFFF",
                    fontSize: 13.5,
                    fontWeight: 800,
                    fontFamily: fH,
                    boxShadow: "0 4px 16px rgba(27,94,32,0.25)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {pkg.cta}
                </span>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: isAr ? "flex-end" : "flex-start",
                    textAlign: isAr ? "right" : "left",
                  }}
                >
                  <span
                    style={{
                      fontSize: 26,
                      fontWeight: 900,
                      color: tk.forest,
                      fontFamily: fH,
                      lineHeight: 1,
                      letterSpacing: isAr ? 0 : "-0.03em",
                    }}
                  >
                    {pkg.price}
                  </span>
                  <span style={{ marginTop: 4 }}>
                    <SaudiRiyalIcon
                      size={12}
                      color="#8BA078"
                      title={isAr ? "ريال سعودي" : "Saudi Riyal"}
                    />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
