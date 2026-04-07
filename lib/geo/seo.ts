import type { Pilar, ServicePattern, Municipality } from "./types";

const BASE_URL = "https://josegilarte.es";

type Locale = "es" | "en";

interface SchemaContent {
  title: string;
  description: string;
  h1: string;
  faqs: [string, string][];
}

interface SchemaInput {
  service: ServicePattern;
  city: Municipality;
  locale: Locale;
  content: SchemaContent;
}

const LANGUAGE_MAP = {
  es: "es-ES",
  en: "en-US",
} as const;

const SERVICE_TYPE_MAP = {
  seo: "Search Engine Optimization",
  ia: "Artificial Intelligence Consulting",
  growth: "Growth Marketing",
  geo: "Generative Engine Optimization",
} as const satisfies Record<Pilar, string>;

const JOB_TITLE_MAP = {
  es: "Especialista SEO y Marketing Digital",
  en: "SEO & Digital Marketing Specialist",
} as const;

const HOME_LABEL_MAP = {
  es: "Inicio",
  en: "Home",
} as const;

/** Map pilar to schema.org service type */
export function getServiceType(pilar: Pilar): string {
  return SERVICE_TYPE_MAP[pilar];
}

function buildSlug(service: ServicePattern, city: Municipality, locale: Locale): string {
  const serviceSlug = locale === "es" ? service.slugEs : service.slugEn;
  return `${serviceSlug}-${city.slug}`;
}

function buildPageUrl(locale: Locale, slug: string): string {
  return `${BASE_URL}/${locale}/${slug}`;
}

function buildWebPage(
  pageUrl: string,
  locale: Locale,
  slug: string,
  content: SchemaContent,
): Record<string, unknown> {
  return {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: content.title,
    description: content.description,
    inLanguage: LANGUAGE_MAP[locale],
    isPartOf: { "@id": `${BASE_URL}/#website` },
    breadcrumb: { "@id": `${BASE_URL}/${locale}/${slug}#breadcrumb` },
  };
}

function buildBreadcrumbList(
  pageUrl: string,
  locale: Locale,
  slug: string,
  city: Municipality,
  content: SchemaContent,
): Record<string, unknown> {
  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: HOME_LABEL_MAP[locale],
        item: `${BASE_URL}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: city.ccaa,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: city.provincia,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: content.h1,
      },
    ],
  };
}

function buildReviews(pageUrl: string): Record<string, unknown>[] {
  return [
    {
      "@type": "Review",
      "@id": `${pageUrl}#review-1`,
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Carlos M." },
      reviewBody: "Excelente trabajo de posicionamiento. En 6 meses duplicamos el tráfico orgánico.",
    },
    {
      "@type": "Review",
      "@id": `${pageUrl}#review-2`,
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Laura S." },
      reviewBody: "Profesionalidad y resultados reales. La mejor inversión en marketing digital.",
    },
  ];
}

function buildProfessionalService(
  pageUrl: string,
  locale: Locale,
  service: ServicePattern,
  city: Municipality,
  content: SchemaContent,
): Record<string, unknown> {
  return {
    "@type": "ProfessionalService",
    "@id": `${pageUrl}#service`,
    name: `Jose Gilarte - ${content.h1}`,
    description: content.description,
    url: pageUrl,
    serviceType: getServiceType(service.pilar),
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: city.ccaa,
      },
    },
    provider: { "@id": `${BASE_URL}/#person` },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+34619955181",
      email: "jose@josegilarte.es",
      availableLanguage: ["Spanish", "English"],
    },
    priceRange: "€€€",
  };
}

function buildFaqPage(
  pageUrl: string,
  faqs: [string, string][],
): Record<string, unknown> {
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

/**
 * Person schema — Jose Gilarte EEAT signals.
 * Included in every geo page to establish authoritativeness.
 */
function buildPerson(): Record<string, unknown> {
  return {
    "@type": "Person",
    "@id": `${BASE_URL}/#person`,
    name: "Jose Gilarte",
    alternateName: "Jose Gilarte Alvarez",
    jobTitle: "Consultor SEO · Google Developer Expert · Microsoft MVP",
    description:
      "Consultor SEO en Córdoba con más de 8 años de experiencia. Google Developer Expert (GDE) y Microsoft MVP. Especialista en posicionamiento web, SEO local, marketing digital e inteligencia artificial aplicada al SEO.",
    url: BASE_URL,
    image: `${BASE_URL}/images/jose-gilarte.jpg`,
    telephone: "+34619955181",
    email: "jose@josegilarte.es",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Córdoba",
      addressRegion: "Andalucía",
      addressCountry: "ES",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Data SEO Academy",
        url: "https://dataseoacademy.com",
      },
      {
        "@type": "EducationalOrganization",
        name: "ENAE Business School",
        url: "https://www.enae.es",
      },
    ],
    worksFor: {
      "@type": "Organization",
      name: "Jose Gilarte — Consultor SEO",
      url: BASE_URL,
    },
    memberOf: [
      {
        "@type": "Organization",
        name: "Data SEO Academy",
        url: "https://dataseoacademy.com",
        description: "Co-Founder & SEO Teacher — Python aplicado a SEO",
      },
    ],
    knowsAbout: [
      "SEO",
      "Posicionamiento Web",
      "SEO Local",
      "SEO Técnico",
      "Marketing Digital",
      "Google Search Console",
      "Inteligencia Artificial",
      "Automatización con IA",
      "Growth Hacking",
      "Python para SEO",
      "Data Analytics para SEO",
      "n8n",
      "Make",
      "Claude Code",
      "Flowise",
      "Next.js",
      "Martech",
      "CRO",
    ],
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "Consultor SEO",
        occupationalCategory: "Marketing Digital",
      },
      {
        "@type": "Occupation",
        name: "Profesor de SEO y Automatización con IA",
        description: "Profesor en ENAE Business School (Congreso ENAE Digital Meeting) y Data SEO Academy. Imparte formación sobre Python aplicado a SEO, automatizaciones con n8n, Make, Claude Code y Flowise.",
        educationRequirements: "Google Developer Expert, Microsoft MVP",
      },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "Google Developer Expert (GDE)",
        recognizedBy: {
          "@type": "Organization",
          name: "Google",
          url: "https://developers.google.com/community/experts",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "Microsoft Most Valuable Professional (MVP)",
        recognizedBy: {
          "@type": "Organization",
          name: "Microsoft",
          url: "https://mvp.microsoft.com",
        },
      },
    ],
    sameAs: [
      "https://es.linkedin.com/in/jose-gilarte-alvarez",
      "https://x.com/Jose_Gilartete",
      "https://www.youtube.com/@JoseGilarte",
      "https://dataseoacademy.com/nosotros/",
      "https://www.enae.es/congreso-marketing-digital-meeting-enae/",
      "https://www.youtube.com/watch?v=E69WnobrFao",
      "https://www.youtube.com/watch?v=ZJNjz95ZXqo",
    ],
  };
}

/**
 * LocalBusiness schema for Córdoba (base city).
 * Only included when the geo page targets Córdoba.
 */
function buildLocalBusiness(pageUrl: string): Record<string, unknown> {
  return {
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#localbusiness`,
    name: "Jose Gilarte — Consultor SEO",
    description:
      "Consultor SEO en Córdoba con 8+ años de experiencia. Google Developer Expert y Microsoft MVP. Posicionamiento web, SEO local e inteligencia artificial para empresas.",
    url: BASE_URL,
    telephone: "+34619955181",
    email: "jose@josegilarte.es",
    image: `${BASE_URL}/images/jose-gilarte.jpg`,
    priceRange: "€€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Córdoba",
      addressRegion: "Andalucía",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.8882,
      longitude: -4.7794,
    },
    areaServed: [
      { "@type": "City", name: "Córdoba" },
      { "@type": "AdministrativeArea", name: "Andalucía" },
      { "@type": "Country", name: "España" },
    ],
    founder: { "@id": `${BASE_URL}/#person` },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

/**
 * Generates the full JSON-LD @graph array for a geo landing page.
 * Returns a serializable object ready to be placed in a <script type="application/ld+json"> tag.
 */
export function generateGeoSchema(input: SchemaInput): Record<string, unknown> {
  const { service, city, locale, content } = input;

  const slug = buildSlug(service, city, locale);
  const pageUrl = buildPageUrl(locale, slug);

  const graph: Record<string, unknown>[] = [
    buildWebPage(pageUrl, locale, slug, content),
    buildBreadcrumbList(pageUrl, locale, slug, city, content),
    buildPerson(),
    buildProfessionalService(pageUrl, locale, service, city, content),
    ...buildReviews(pageUrl),
  ];

  if (content.faqs.length > 0) {
    graph.push(buildFaqPage(pageUrl, content.faqs));
  }

  // Add LocalBusiness schema for Córdoba pages
  if (city.slug === "cordoba") {
    graph.push(buildLocalBusiness(pageUrl));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
