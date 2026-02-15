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
    provider: {
      "@type": "Person",
      name: "Jose Gilarte",
      jobTitle: JOB_TITLE_MAP[locale],
      url: BASE_URL,
      sameAs: [
        "https://es.linkedin.com/in/jose-gilarte-alvarez",
      ],
    },
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
      email: "jose@josegilarte.es",
      availableLanguage: ["Spanish", "English"],
    },
    priceRange: "€€",
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
    buildProfessionalService(pageUrl, locale, service, city, content),
    ...buildReviews(pageUrl),
  ];

  if (content.faqs.length > 0) {
    graph.push(buildFaqPage(pageUrl, content.faqs));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
