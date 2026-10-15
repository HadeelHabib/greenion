import type { NextConfig } from "next";
import path from "path";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.100.211"],
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  ...(isDev ? { distDir: ".next-local" } : {}),
};

export default nextConfig;
