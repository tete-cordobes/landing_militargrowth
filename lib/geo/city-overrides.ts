/**
 * City-specific content overrides.
 *
 * When a city has an override for a service, it replaces the generic
 * template content with unique, locally-relevant copy.
 *
 * Key: `${citySlug}/${serviceSlugEs}`
 */

import type { Pilar } from "./types";

type ServiceContentOverride = {
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  whyTitle: string;
  whyPoints: string[];
  faqs: [string, string][];
  ctaTitle: string;
  ctaDescription: string;
  processSteps: [string, string][];
  ctaButtonText: string;
  ctaSecondaryText: string;
  urgencyMessage: string;
  trustStat: string;
  /** Extended content sections — rendered between process steps and why-choose */
  extendedSections?: {
    heading: string;
    content: string;
  }[];
};

/* -------------------------------------------------------------------------- */
/*  Córdoba — Posicionamiento Web                                             */
/*  Target: superar pulidostudio.com (1.632 palabras, 55 ref domains, #1 org) */
/*  Keywords: posicionamiento web cordoba (320), posicionamiento seo cordoba  */
/*  (320), posicionamiento web en cordoba (320, KD 6)                         */
/* -------------------------------------------------------------------------- */

const cordobaPosicionamientoWeb: ServiceContentOverride = {
  title:
    "Posicionamiento Web en Córdoba → Más Tráfico, Más Clientes | Jose Gilarte",
  metaDescription:
    "Posicionamiento web en Córdoba con resultados medibles. 8+ años ayudando a PYMES cordobesas a posicionarse en Google. Auditoría SEO gratis. GDE & MVP.",
  h1: "Posicionamiento Web en Córdoba",

  intro: `Si tienes un negocio en Córdoba y tu web no aparece en la primera página de Google, estás perdiendo clientes cada día. El 92% de los usuarios no pasa de los primeros resultados, y en un mercado local como el cordobés — donde hostelería, turismo, comercio y servicios profesionales compiten por la misma visibilidad — la diferencia entre aparecer o no aparecer se traduce directamente en facturación.

Soy Jose Gilarte, consultor de posicionamiento web en Córdoba con más de 8 años de experiencia y certificaciones Google Developer Expert (GDE) y Microsoft MVP. No soy una agencia con capas de intermediarios: trabajo directamente contigo para diseñar una estrategia SEO adaptada a tu negocio, tu sector y tu mercado en Córdoba.`,

  whyTitle: "¿Por qué confiar en mi servicio de posicionamiento web en Córdoba?",
  whyPoints: [
    "Trato directo y personal: hablas siempre conmigo, no con un gestor de cuentas que no conoce tu negocio. Conozco el tejido empresarial de Córdoba, desde la hostelería del casco histórico hasta las empresas del Polígono de Chinales.",
    "Certificaciones reales: Google Developer Expert y Microsoft MVP. No son sellos decorativos — significan que Google y Microsoft avalan mi conocimiento técnico. Son credenciales que menos del 0,1% de profesionales del sector tienen en España.",
    "Estrategia basada en datos, no en intuición: utilizo Google Search Console, DataForSEO y herramientas de análisis propias para tomar decisiones basadas en métricas reales. Cada acción tiene un porqué medible.",
    "Resultados que puedes verificar: informes mensuales con posiciones, tráfico y conversiones. Sin humo ni métricas vanidosas. Si no sube, ajustamos. Así de simple.",
  ],

  faqs: [
    [
      "¿Cuánto cuesta el posicionamiento web en Córdoba?",
      "Los planes de posicionamiento web en Córdoba parten desde 950€/mes. Este precio incluye auditoría técnica completa, optimización on-page, estrategia de contenidos, link building de calidad y reporting mensual con métricas reales. No es el servicio más barato del mercado, y es intencional: el SEO barato sale caro. Trabajas directamente conmigo, con certificaciones GDE y MVP, no con un becario. Lo importante: no hay permanencias. Si no ves valor, puedes cancelar cuando quieras.",
    ],
    [
      "¿Cuánto tarda en funcionar el SEO en Córdoba?",
      "Para búsquedas locales en Córdoba, los primeros resultados suelen verse entre 2 y 4 meses. El SEO local tiene una ventaja: la competencia es menor que en ciudades como Madrid o Barcelona, lo que acorta los plazos. En 6 meses, la mayoría de mis clientes ven un retorno claro de la inversión.",
    ],
    [
      "¿Qué diferencia hay entre SEO y pagar anuncios en Google?",
      "Los anuncios de Google Ads te dan visibilidad inmediata pero desaparecen en cuanto dejas de pagar. El SEO construye una base sólida y duradera: una vez que tu web posiciona, ese tráfico es gratuito y se mantiene en el tiempo. Lo ideal es combinar ambos: Ads para resultados rápidos mientras el SEO madura. A medio plazo, el coste por adquisición del SEO es entre 5 y 10 veces menor que el de Ads.",
    ],
    [
      "¿Cómo sé si mi web está bien posicionada en Córdoba?",
      "Te ofrezco una auditoría SEO gratuita donde analizo tu posición actual para las búsquedas más importantes de tu sector en Córdoba. Verás exactamente dónde apareces, quién está por encima y qué hay que hacer para superarlos. Sin compromiso y sin letra pequeña.",
    ],
    [
      "¿Trabajas solo con empresas de Córdoba?",
      "Mi base está en Córdoba, pero trabajo con clientes en toda España de forma remota. Dicho esto, para negocios locales cordobeses tengo una ventaja clara: conozco el mercado, la competencia y el comportamiento del consumidor local de primera mano.",
    ],
    [
      "¿Necesito rediseñar mi web para hacer SEO?",
      "No siempre. Muchas veces las mejoras se hacen sobre la web existente: optimización de velocidad, estructura de URLs, contenidos y metadatos. Solo recomiendo un rediseño cuando la web tiene problemas técnicos graves que impiden el posicionamiento. Te lo digo en la auditoría gratuita.",
    ],
  ],

  ctaTitle: "¿Quieres que tu negocio en Córdoba aparezca primero en Google?",
  ctaDescription:
    "Solicita una auditoría SEO gratuita. Analizaré tu web, tu competencia en Córdoba y te entregaré un plan de acción personalizado. Sin compromiso.",
  processSteps: [
    [
      "Auditoría SEO completa",
      "Analizo tu web a nivel técnico, de contenido y de autoridad. Reviso velocidad de carga, indexación, estructura de URLs, contenido y perfil de enlaces. También estudio a tu competencia directa en Córdoba para identificar las oportunidades reales.",
    ],
    [
      "Estrategia personalizada",
      "Diseño un plan de acción con las keywords más rentables para tu negocio en Córdoba. Priorizo las búsquedas con intención comercial que realmente generan clientes, no tráfico vacío. Cada acción tiene un calendario y un objetivo medible.",
    ],
    [
      "Ejecución y optimización",
      "Implemento las mejoras técnicas, optimizo tus páginas clave y creo contenido estratégico. Trabajo el SEO local con Google Business Profile, citaciones y señales geográficas para que Google entienda que eres relevante en Córdoba.",
    ],
    [
      "Medición y ajuste continuo",
      "Cada mes recibes un informe claro con evolución de posiciones, tráfico orgánico y conversiones. Sin jerga innecesaria: números que puedes entender y verificar. Si algo no funciona, pivotamos. Así se hace el SEO de verdad.",
    ],
  ],
  ctaButtonText: "Solicitar auditoría gratis",
  ctaSecondaryText: "Reservar videollamada",
  urgencyMessage: "Solo acepto 3 proyectos nuevos al mes para garantizar dedicación real",
  trustStat: "+8 años posicionando webs",

  extendedSections: [
    {
      heading: "El mercado digital en Córdoba: oportunidades reales",
      content: `Córdoba tiene un tejido empresarial rico y diverso. Desde los negocios de hostelería y turismo del casco histórico — una ciudad Patrimonio de la Humanidad con millones de visitantes al año — hasta empresas de servicios profesionales, clínicas, inmobiliarias y comercios en zonas como Brillante, Zoco, Ciudad Jardín o Levante.

El problema es que la mayoría de estos negocios no tienen presencia digital o la que tienen es invisible para Google. Mientras tanto, portales nacionales y directorios se llevan los clics que deberían ser tuyos.

El posicionamiento web local en Córdoba es una de las inversiones con mayor retorno que puede hacer una PYME. La competencia online en Córdoba es significativamente menor que en Madrid, Barcelona o Sevilla, lo que significa que alcanzar las primeras posiciones requiere menos tiempo y menos inversión. Es literalmente una ventana de oportunidad.`,
    },
    {
      heading: "¿Qué incluye mi servicio de posicionamiento web?",
      content: `Mi servicio de SEO en Córdoba no es un paquete cerrado — se adapta a lo que tu negocio necesita. Pero como mínimo, siempre incluye:

SEO técnico: optimización de velocidad (Core Web Vitals), estructura de URLs, indexación correcta, datos estructurados Schema.org y resolución de errores de rastreo.

SEO on-page: investigación de palabras clave con volumen real de búsqueda, optimización de títulos, meta descripciones, encabezados y contenido para las keywords que realmente importan en tu sector.

SEO local: configuración y optimización de Google Business Profile, gestión de reseñas, citaciones NAP consistentes en directorios relevantes, y señales de geolocalización.

Contenido estratégico: creación de contenido orientado a captar las búsquedas que tienen intención de compra. No publico artículos por publicar — cada pieza tiene un objetivo claro en la estrategia.

Link building: construcción de enlaces de calidad desde medios relevantes y directorios especializados. Sin spam, sin granjas de enlaces. Calidad sobre cantidad.`,
    },
    {
      heading: "Por qué el SEO local es tan rentable en Córdoba",
      content: `El 46% de las búsquedas en Google tienen intención local. Cuando alguien en Córdoba busca "dentista en Córdoba" o "abogado laboralista Córdoba", está listo para contratar. Es tráfico con alta intención de compra.

En ciudades medianas como Córdoba, el SEO local tiene ventajas que no existen en grandes capitales:

Menor competencia: hay menos webs optimizadas compitiendo por las mismas keywords. Donde en Madrid necesitarías 12 meses y 50 backlinks, en Córdoba puedes posicionar en 3-4 meses con una estrategia bien ejecutada.

Google Maps domina: en las búsquedas locales, el Local Pack (los 3 resultados de Google Maps) se lleva más del 40% de los clics. Con un Google Business Profile bien optimizado, puedes estar ahí arriba sin necesidad de un dominio con años de antigüedad.

El usuario local convierte mejor: alguien que busca "posicionamiento web en Córdoba" tiene intención de contratar ahora, no está investigando. El CTR (porcentaje de clic) y la tasa de conversión de búsquedas locales son significativamente mayores que las nacionales.`,
    },
    {
      heading: "Casos reales de posicionamiento web en Córdoba",
      content: `Aunque por confidencialidad no puedo revelar nombres, estos son resultados reales de proyectos que he ejecutado:

Clínica en zona centro de Córdoba: de la página 4 de Google a posición 3 en 4 meses para su keyword principal. Resultado: incremento del 180% en solicitudes de cita a través de la web.

Despacho de abogados en Córdoba: posicionamiento para 12 keywords locales con intención comercial. En 6 meses, la web pasó de 50 a 320 visitas orgánicas mensuales. El coste por lead bajó un 60% respecto a Google Ads.

Restaurante del casco histórico: optimización de Google Business Profile y web. De 2 a 5 estrellas en visibilidad local. Incremento del 90% en reservas online en temporada baja.

Estos resultados no son excepcionales — son lo que ocurre cuando aplicas una estrategia SEO bien ejecutada en un mercado local con la competencia que tiene Córdoba.`,
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Override registry                                                         */
/* -------------------------------------------------------------------------- */

const cityOverrides: Record<string, ServiceContentOverride> = {
  "cordoba/posicionamiento-web": cordobaPosicionamientoWeb,
};

/**
 * Get a city-specific content override, if one exists.
 * Key format: `${citySlug}/${serviceSlugEs}`
 */
export function getCityOverride(
  citySlug: string,
  serviceSlugEs: string,
): ServiceContentOverride | null {
  return cityOverrides[`${citySlug}/${serviceSlugEs}`] ?? null;
}
