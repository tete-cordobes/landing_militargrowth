export type Tier = 1 | 2 | 3 | 4;

export type Pilar = "seo" | "ia" | "growth" | "geo";

export type Municipality = {
  name: string;
  originalName: string;
  slug: string;
  provincia: string;
  ccaa: string;
  habitantes: number;
  tier: Tier;
};

export type ServicePattern = {
  pilar: Pilar;
  slugEs: string;
  slugEn: string;
  kwEs: string;
  kwEn: string;
  tiers: Tier[];
};

export type GeoUrl = {
  urlEs: string;
  urlEn: string;
  city: string;
  citySlug: string;
  province: string;
  ccaa: string;
  population: number;
  tier: Tier;
  pilar: Pilar;
  serviceEs: string;
  serviceEn: string;
  kwEs: string;
  kwEn: string;
};
