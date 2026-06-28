import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.100.211"],
  turbopack: {
    root: path.resolve(__dirname),
  },
  distDir: ".next-local",
};

export default nextConfig;
