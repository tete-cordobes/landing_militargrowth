import type { MetadataRoute } from "next";
import { geoUrls } from "@/lib/geo";
import type { Tier } from "@/lib/geo";

const BASE_URL = "https://josegilarte.es";

const TIER_PRIORITY: Record<Tier, number> = {
  1: 0.9,
  2: 0.8,
  3: 0.7,
  4: 0.6,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const rootPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/es`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/en`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];

  const geoPages: MetadataRoute.Sitemap = geoUrls.flatMap((geo) => [
    {
      url: `${BASE_URL}/es${geo.urlEs}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: TIER_PRIORITY[geo.tier],
    },
    {
      url: `${BASE_URL}/en${geo.urlEn}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: TIER_PRIORITY[geo.tier],
    },
  ]);

  return [...rootPages, ...geoPages];
}
