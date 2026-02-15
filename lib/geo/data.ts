import type { Municipality, ServicePattern, GeoUrl, Pilar, Tier } from "./types";
import municipalitiesJson from "@/data/municipalities.json";
import servicesPatternsJson from "@/data/service-patterns.json";
import geoUrlsJson from "@/data/geo-urls.json";

export const municipalities = municipalitiesJson as Municipality[];

export const servicePatterns = servicesPatternsJson as ServicePattern[];

export const geoUrls = geoUrlsJson as GeoUrl[];

export const SERVICE_NAMES = {
  "agencia-seo": { es: "Agencia SEO", en: "SEO Agency" },
  "posicionamiento-web": { es: "Posicionamiento Web", en: "Web Positioning" },
  "consultor-seo": { es: "Consultor SEO", en: "SEO Consultant" },
  "experto-seo": { es: "Experto SEO", en: "SEO Expert" },
  "consultoria-ia": { es: "Consultoría IA", en: "AI Consulting" },
  "automatizacion-ia": { es: "Automatización IA", en: "AI Automation" },
  "growth-marketing": { es: "Growth Marketing", en: "Growth Marketing" },
  "posicionamiento-ia": {
    es: "Posicionamiento IA",
    en: "AI Search Optimization",
  },
} as const satisfies Record<string, { es: string; en: string }>;

/** All valid service slugs (ES) mapped to their pattern */
const serviceMapEs = new Map(
  servicePatterns.map((s) => [s.slugEs, s]),
);

/** All valid service slugs (EN) mapped to their pattern */
const serviceMapEn = new Map(
  servicePatterns.map((s) => [s.slugEn, s]),
);

/** All valid city slugs mapped to their municipality */
const cityMap = new Map(municipalities.map((m) => [m.slug, m]));

/**
 * Parse a combined slug like "agencia-seo-madrid" into service + city.
 * Tries each service prefix and checks if the remainder is a valid city.
 */
export function parseGeoSlug(
  slug: string,
  locale: "es" | "en",
): { service: ServicePattern; city: Municipality } | null {
  const map = locale === "es" ? serviceMapEs : serviceMapEn;

  for (const [prefix, service] of map) {
    if (slug.startsWith(`${prefix}-`)) {
      const citySlug = slug.slice(prefix.length + 1);
      const city = cityMap.get(citySlug);
      if (city && service.tiers.includes(city.tier)) {
        return { service, city };
      }
    }
  }

  return null;
}

/** Get all geo URLs for a specific pilar */
export function getUrlsByPilar(pilar: Pilar): GeoUrl[] {
  return geoUrls.filter((u) => u.pilar === pilar);
}

/** Get all geo URLs for a specific tier */
export function getUrlsByTier(tier: Tier): GeoUrl[] {
  return geoUrls.filter((u) => u.tier === tier);
}

/** Get all geo URLs for a specific city */
export function getUrlsByCity(citySlug: string): GeoUrl[] {
  return geoUrls.filter((u) => u.citySlug === citySlug);
}

/** Get municipality by slug */
export function getMunicipality(slug: string): Municipality | undefined {
  return cityMap.get(slug);
}

/**
 * Generate static params for Next.js dynamic route [slug].
 * Returns all valid slug combinations for a given locale.
 */
export function generateGeoStaticParams(locale: "es" | "en") {
  return geoUrls.map((u) => ({
    slug: locale === "es" ? u.urlEs.slice(1) : u.urlEn.slice(1),
  }));
}

/** Get other cities in the same province with the same service */
export function getRelatedCitiesInProvince(
  province: string,
  serviceSlugEs: string,
  excludeCitySlug: string,
  limit = 12,
): { name: string; slug: string; url: string; population: number }[] {
  return geoUrls
    .filter(
      (u) =>
        u.province === province &&
        u.serviceEs === serviceSlugEs &&
        u.citySlug !== excludeCitySlug,
    )
    .sort((a, b) => b.population - a.population)
    .slice(0, limit)
    .map((u) => ({
      name: u.city,
      slug: u.citySlug,
      url: u.urlEs,
      population: u.population,
    }));
}

/** Get provincial capitals / biggest cities in the same CCAA with the same service */
export function getRelatedCitiesInCCAA(
  ccaa: string,
  serviceSlugEs: string,
  excludeProvince: string,
  limit = 10,
): {
  name: string;
  slug: string;
  url: string;
  province: string;
  population: number;
}[] {
  const matchingUrls = geoUrls.filter(
    (u) =>
      u.ccaa === ccaa &&
      u.serviceEs === serviceSlugEs &&
      u.province !== excludeProvince,
  );

  // Pick the biggest city per province for a good geographic spread
  const biggestByProvince = new Map<string, GeoUrl>();
  for (const u of matchingUrls) {
    const existing = biggestByProvince.get(u.province);
    if (!existing || u.population > existing.population) {
      biggestByProvince.set(u.province, u);
    }
  }

  return Array.from(biggestByProvince.values())
    .sort((a, b) => b.population - a.population)
    .slice(0, limit)
    .map((u) => ({
      name: u.city,
      slug: u.citySlug,
      url: u.urlEs,
      province: u.province,
      population: u.population,
    }));
}

/** Get other services available for this city */
export function getOtherServicesForCity(
  citySlug: string,
  excludeServiceSlugEs: string,
): { name: string; slug: string; url: string; pilar: string }[] {
  return geoUrls
    .filter(
      (u) => u.citySlug === citySlug && u.serviceEs !== excludeServiceSlugEs,
    )
    .sort((a, b) => b.population - a.population)
    .map((u) => {
      const serviceKey = u.serviceEs as keyof typeof SERVICE_NAMES;
      const label = SERVICE_NAMES[serviceKey];
      return {
        name: label ? label.es : u.serviceEs,
        slug: u.serviceEs,
        url: u.urlEs,
        pilar: u.pilar,
      };
    });
}

/** Get all unique provinces for a CCAA */
export function getProvincesByCCAA(ccaa: string): string[] {
  const provinces = new Set<string>();
  for (const m of municipalities) {
    if (m.ccaa === ccaa) {
      provinces.add(m.provincia);
    }
  }
  return Array.from(provinces).sort();
}

/** Get the biggest city in a province (for breadcrumb/reference) */
export function getProvincialCapital(province: string): Municipality | undefined {
  let capital: Municipality | undefined;
  for (const m of municipalities) {
    if (m.provincia === province) {
      if (!capital || m.habitantes > capital.habitantes) {
        capital = m;
      }
    }
  }
  return capital;
}
