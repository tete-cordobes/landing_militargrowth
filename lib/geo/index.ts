export type {
  Municipality,
  ServicePattern,
  GeoUrl,
  Pilar,
  Tier,
} from "./types";

export {
  municipalities,
  servicePatterns,
  geoUrls,
  SERVICE_NAMES,
  parseGeoSlug,
  getUrlsByPilar,
  getUrlsByTier,
  getUrlsByCity,
  getMunicipality,
  generateGeoStaticParams,
  getRelatedCitiesInProvince,
  getRelatedCitiesInCCAA,
  getOtherServicesForCity,
  getProvincesByCCAA,
  getProvincialCapital,
} from "./data";

export { getServiceContent, getSectionLabels } from "./content";
