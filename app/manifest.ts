import type { MetadataRoute } from "next";

import { SITE_DESCRIPTION } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Green Ion | جرين أيون",
    short_name: "Green Ion",
    description: SITE_DESCRIPTION.en,
    start_url: "/",
    display: "standalone",
    background_color: "#F7F9F4",
    theme_color: "#1B5E20",
    lang: "ar",
    dir: "rtl",
    icons: [{ src: "/icon.png", type: "image/png", sizes: "any" }],
  };
}
