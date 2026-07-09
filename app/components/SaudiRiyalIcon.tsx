import type { CSSProperties } from "react";

type SaudiRiyalIconProps = {
  size?: number;
  color?: string;
  style?: CSSProperties;
  title?: string;
};

type PriceWithRiyalProps = {
  amount: string | number;
  color?: string;
  iconSize?: number;
  gap?: number;
  style?: CSSProperties;
  numberStyle?: CSSProperties;
  iconStyle?: CSSProperties;
};

const RIYAL_VIEWBOX = "0 0 1124.14 1256.39";

const RIYAL_PATHS = [
  "M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z",
  "M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z",
];

export function extractMoneyAmount(value: string | number): string {
  if (typeof value === "number") return value.toLocaleString();
  const match = value.match(/\d[\d,]*(?:\.\d+)?/g);
  return match ? match.join(" ") : value.trim();
}

export function SaudiRiyalIcon({
  size = 16,
  color = "currentColor",
  style,
  title = "Saudi Riyal",
}: SaudiRiyalIconProps) {
  return (
    <svg
      aria-label={title}
      role="img"
      viewBox={RIYAL_VIEWBOX}
      width={size}
      height={size * 1.12}
      style={{ display: "block", flexShrink: 0, ...style }}
    >
      <title>{title}</title>
      {RIYAL_PATHS.map((d) => (
        <path key={d} d={d} fill={color} />
      ))}
    </svg>
  );
}

export function PriceWithRiyal({
  amount,
  color = "currentColor",
  iconSize = 16,
  gap = 6,
  style,
  numberStyle,
  iconStyle,
}: PriceWithRiyalProps) {
  const formattedAmount = typeof amount === "number" ? amount.toLocaleString() : amount;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap,
        direction: "ltr",
        unicodeBidi: "isolate",
        color,
        ...style,
      }}
    >
      <span style={{ lineHeight: 1, ...numberStyle }}>{formattedAmount}</span>
      <SaudiRiyalIcon
        size={iconSize}
        color={color}
       
        {...(iconStyle ? { style: { transform: "translateY(1px)", ...iconStyle } } : {})}
      />
    </span>
  );
}
