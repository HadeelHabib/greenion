import type { MetadataRoute } from "next";

import { LANDING_COPY } from "@/app/content/site-copy";
import { absoluteUrl, localizedPaths, PROJECT_PAGES_INDEXABLE, type SiteLang } from "@/lib/seo";

const LANGS: SiteLang[] = ["ar", "en"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: Array<{ path: string; priority: number; changeFrequency: "weekly" | "monthly" }> = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    ...LANDING_COPY.en.services.packages.map((pkg) => ({
      path: `/services/${pkg.id}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
    ...(PROJECT_PAGES_INDEXABLE
      ? LANDING_COPY.en.projects.items.map((item) => ({
          path: `/projects/${item.slug}`,
          priority: 0.6,
          changeFrequency: "monthly" as const,
        }))
      : []),
  ];

  return routes.flatMap(({ path, priority, changeFrequency }) => {
    const paths = localizedPaths(path);
    const languages = { "ar-SA": absoluteUrl(paths.ar), "en-US": absoluteUrl(paths.en) };
    return LANGS.map((lang) => ({
      url: absoluteUrl(paths[lang]),
      lastModified,
      changeFrequency,
      priority: lang === "ar" ? priority : Math.max(priority - 0.1, 0.1),
      alternates: { languages },
    }));
  });
}
