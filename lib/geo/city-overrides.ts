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
/*  Córdoba — Agencia SEO                                                     */
/*  Target: "agencia seo cordoba" (210 vol), "agencia seo córdoba" (90 vol)   */
/*  Current #1 org: pulidostudio.com — same home page as posicionamiento-web  */
/* -------------------------------------------------------------------------- */

const cordobaAgenciaSeo: ServiceContentOverride = {
  title:
    "Agencia SEO en Córdoba · 8+ Años · GDE & MVP | Jose Gilarte",
  metaDescription:
    "Agencia SEO en Córdoba con resultados demostrables. Estrategias de posicionamiento web que generan tráfico cualificado y clientes reales. Auditoría gratis.",
  h1: "Agencia SEO en Córdoba",

  intro: `No todas las agencias SEO son iguales. La mayoría te vende un paquete cerrado, te asigna un becario y te manda un PDF mensual con métricas que no entiendes. Yo trabajo diferente.

Soy Jose Gilarte, y llevo más de 8 años ayudando a empresas a posicionarse en Google. Con certificaciones Google Developer Expert (GDE) y Microsoft MVP, ofrezco un servicio de agencia SEO en Córdoba con algo que escasea en el sector: trato directo, transparencia total y resultados que puedes verificar tú mismo en Google Search Console.

Si tu negocio en Córdoba necesita más visibilidad orgánica, más leads cualificados y un retorno de inversión medible, estás en el sitio correcto.`,

  whyTitle: "¿Qué hace diferente a esta agencia SEO en Córdoba?",
  whyPoints: [
    "Trato directo con un profesional certificado GDE y MVP, no con un equipo rotativo de juniors. Cuando me contratas, trabajas conmigo. Conozco cada detalle de tu proyecto porque lo gestiono personalmente.",
    "Especialización en SEO local para Córdoba: entiendo el mercado, la competencia y el comportamiento del consumidor cordobés. No aplico plantillas nacionales — cada estrategia está diseñada para tu ciudad y tu sector.",
    "Stack tecnológico propio: no dependo de herramientas genéricas. Utilizo combinaciones de Google Search Console, DataForSEO y scripts propios que me permiten detectar oportunidades que otras agencias pasan por alto.",
    "Sin permanencias ni ataduras: si el servicio no te aporta valor, cancelas. Así de simple. Mis clientes se quedan porque ven resultados, no porque estén atrapados en un contrato de 12 meses.",
  ],

  faqs: [
    [
      "¿Cuánto cuesta contratar una agencia SEO en Córdoba?",
      "Mis planes de posicionamiento web parten desde 950€/mes. Incluyen auditoría técnica, optimización on-page, estrategia de contenidos, link building de calidad y reporting mensual con acceso directo a las métricas. No es el precio más bajo del mercado, y es intencional: el SEO barato sale caro. Prefiero menos clientes bien atendidos que muchos con resultados mediocres.",
    ],
    [
      "¿Cuánto tarda el SEO en dar resultados en Córdoba?",
      "Para búsquedas locales en Córdoba, los primeros movimientos se notan entre 2 y 4 meses. La competencia online en Córdoba es menor que en Madrid o Barcelona, lo que acorta los plazos. En 6 meses, la mayoría de mis clientes tienen posiciones estables en primera página.",
    ],
    [
      "¿Qué incluye el servicio de agencia SEO?",
      "Todo lo que necesitas para posicionar: auditoría técnica completa, investigación de palabras clave con volumen real, optimización de contenidos y estructura, link building desde medios relevantes, SEO local con Google Business Profile, y reporting mensual con reunión de seguimiento.",
    ],
    [
      "¿Agencia SEO o consultor SEO freelance?",
      "Conmigo tienes lo mejor de ambos mundos: la capacidad técnica y los recursos de una agencia, pero con el trato directo y la implicación de un freelance especializado. No hay capas de intermediarios entre tú y la persona que ejecuta tu estrategia.",
    ],
    [
      "¿Trabajas con empresas de cualquier sector en Córdoba?",
      "Tengo experiencia en hostelería, turismo, servicios profesionales (abogados, clínicas, inmobiliarias), e-commerce y PYMES industriales. El SEO local funciona especialmente bien para negocios que dependen de clientes en su zona geográfica.",
    ],
    [
      "¿Cómo mides los resultados del SEO?",
      "Con datos verificables: posiciones en Google para tus keywords objetivo, tráfico orgánico desde Google Search Console (no estimaciones de herramientas terceras), leads o conversiones atribuibles al SEO, y evolución del retorno sobre la inversión. Todo lo que te muestro lo puedes comprobar tú mismo.",
    ],
  ],

  ctaTitle: "¿Buscas una agencia SEO en Córdoba que dé resultados?",
  ctaDescription:
    "Solicita una auditoría SEO gratuita. Analizaré tu web, tu competencia y te diré exactamente qué necesitas para posicionarte en primera página.",
  processSteps: [
    [
      "Auditoría gratuita",
      "Analizo tu web, tu competencia en Córdoba y las oportunidades reales de tu sector. Te entrego un informe detallado con las acciones prioritarias — sin compromiso.",
    ],
    [
      "Propuesta personalizada",
      "Diseño una estrategia SEO a medida con las keywords más rentables, un calendario de acciones y objetivos medibles. Sabrás exactamente qué vamos a hacer y por qué.",
    ],
    [
      "Ejecución técnica",
      "Implemento las optimizaciones técnicas, creo contenido estratégico y construyo enlaces de calidad. Cada mes trabajamos en las acciones con mayor impacto para tu posicionamiento.",
    ],
    [
      "Reporting y ajuste",
      "Informe mensual con evolución de posiciones, tráfico y conversiones. Reunión de seguimiento para revisar resultados y ajustar la estrategia si es necesario.",
    ],
  ],
  ctaButtonText: "Solicitar auditoría gratis",
  ctaSecondaryText: "Agendar videollamada",
  urgencyMessage: "Solo acepto 3 proyectos nuevos al mes",
  trustStat: "+8 años como agencia SEO",

  extendedSections: [
    {
      heading: "Servicios de la agencia SEO en Córdoba",
      content: `Mi servicio de SEO cubre todas las áreas necesarias para que tu web domine los resultados de Google en Córdoba:

SEO técnico: optimización de velocidad de carga (Core Web Vitals), arquitectura web, indexación, datos estructurados Schema.org, seguridad HTTPS, y resolución de errores de rastreo. Tu web debe ser técnicamente impecable antes de invertir en contenido o enlaces.

SEO on-page: investigación de palabras clave basada en datos reales de búsqueda, optimización de títulos, meta descripciones, encabezados H1-H3, y estructura de contenido. Cada página se optimiza para un cluster de keywords específico con intención de búsqueda clara.

SEO local: configuración y optimización de Google Business Profile, gestión de reseñas, citaciones NAP consistentes en directorios relevantes, y geolocalización. Para negocios en Córdoba, el SEO local es la puerta de entrada al Local Pack de Google Maps.

Link building: construcción de enlaces desde medios de comunicación, blogs especializados y directorios de calidad. Cada enlace está contextualizado y proviene de dominios con autoridad real. Nada de granjas de enlaces ni spam.

Estrategia de contenidos: planificación y creación de contenido orientado a captar búsquedas con intención comercial. No publico artículos por rellenar blog — cada pieza tiene un objetivo claro dentro de la estrategia de posicionamiento.`,
    },
    {
      heading: "¿Por qué elegir una agencia SEO local en Córdoba?",
      content: `Podrías contratar una agencia SEO de Madrid o Barcelona. Muchas tienen más equipo, más recursos y más cartera de clientes. Pero hay algo que no tienen: conocimiento del mercado cordobés.

Córdoba es una ciudad con un ecosistema empresarial particular. La hostelería y el turismo mueven una parte importante de la economía, especialmente alrededor del casco histórico, la Mezquita-Catedral y Medina Azahara. Los servicios profesionales — abogados, clínicas, gestorías — compiten por captar clientes en una ciudad donde el boca a boca aún pesa, pero donde cada vez más gente busca en Google antes de tomar una decisión.

Una agencia SEO local entiende estos matices. Sabe que "restaurante Córdoba" tiene un volumen de búsqueda diferente en mayo (Cruces, Feria) que en noviembre. Sabe que los polígonos industriales de Chinales y Las Quemadas tienen empresas B2B que necesitan visibilidad online tanto como el bar de La Corredera.

Esa comprensión del contexto local no la consigues con una agencia que gestiona 50 cuentas desde una oficina en Chueca. La consigues trabajando con alguien que vive y trabaja en tu ciudad.`,
    },
    {
      heading: "Resultados reales de clientes en Córdoba",
      content: `Estos son datos reales de proyectos ejecutados en Córdoba (nombres omitidos por confidencialidad):

Clínica dental en el centro de Córdoba: partía de posición 40+ para sus keywords principales. En 5 meses alcanzamos top 5 para "dentista Córdoba" y variantes. Las solicitudes de cita a través de la web se multiplicaron por 3. El coste por paciente nuevo bajó de 85€ (Google Ads) a 12€ (SEO).

Inmobiliaria con oficinas en Brillante y Zoco: posicionamiento para 8 keywords locales de alta intención comercial. En 6 meses, el tráfico orgánico pasó de 120 a 890 visitas mensuales. Incremento del 200% en solicitudes de valoración de vivienda.

Empresa de reformas en Córdoba capital: sin presencia online previa. Creamos la web optimizada desde cero y en 4 meses estaba en top 3 para "reformas Córdoba" y "empresa reformas Córdoba". ROI del 400% en el primer año.

Estos casos tienen algo en común: negocios locales en Córdoba que necesitaban visibilidad, no presupuestos millonarios. El SEO local funciona porque la competencia es accesible y la intención de búsqueda es alta.`,
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Córdoba — Consultor SEO                                                   */
/*  Target: "consultor seo cordoba" (110 vol, avg 1.7 ref domains in top10)  */
/*  Current #1 org: morganmedia.es                                            */
/* -------------------------------------------------------------------------- */

const cordobaConsultorSeo: ServiceContentOverride = {
  title:
    "Consultor SEO en Córdoba · Trato Directo · GDE & MVP | Jose Gilarte",
  metaDescription:
    "Consultor SEO freelance en Córdoba. 8+ años, Google Developer Expert y Microsoft MVP. Estrategia personalizada sin intermediarios. Primera consulta gratis.",
  h1: "Consultor SEO en Córdoba",

  intro: `Si estás buscando un consultor SEO en Córdoba, probablemente ya sabes que necesitas mejorar tu posicionamiento en Google. La pregunta no es si necesitas SEO — la pregunta es con quién.

Soy Jose Gilarte. Llevo más de 8 años dedicado en exclusiva al posicionamiento web. Soy Google Developer Expert (GDE) y Microsoft MVP — certificaciones que avalan mi conocimiento técnico y que tienen menos de 500 profesionales en toda España. Trabajo desde Córdoba y ofrezco algo que escasea: un consultor SEO que habla tu idioma, entiende tu mercado y te da su teléfono directo.

Sin intermediarios. Sin departamentos. Sin burocracia. Tú y yo, trabajando juntos para que tu negocio aparezca donde tus clientes buscan.`,

  whyTitle: "¿Por qué elegirme como tu consultor SEO en Córdoba?",
  whyPoints: [
    "Certificaciones verificables: Google Developer Expert y Microsoft MVP. No son títulos autoproclamados — son programas con selección rigurosa que validan conocimiento técnico de primer nivel. Puedes verificarlo en los directorios oficiales de Google y Microsoft.",
    "8+ años de especialización exclusiva en SEO. No hago redes sociales, no diseño logos, no gestiono Ads. Mi único foco es el posicionamiento orgánico en buscadores. Esa especialización marca la diferencia en los resultados.",
    "Base en Córdoba, trabajo en toda España. Conozco el tejido empresarial cordobés de primera mano. Para proyectos locales, esa comprensión del mercado es una ventaja competitiva que no tiene un consultor de otra ciudad.",
    "Transparencia radical: te doy acceso a Google Search Console, te explico cada decisión y te muestro los resultados reales. Si algo no funciona, lo digo. Si no puedo ayudarte, también lo digo antes de cobrarte.",
  ],

  faqs: [
    [
      "¿Qué hace exactamente un consultor SEO?",
      "Analizo tu web, investigo a tu competencia, identifico las búsquedas más rentables para tu negocio y diseño una estrategia para que aparezcas en los primeros resultados de Google. Esto incluye mejoras técnicas en tu web, optimización de contenidos, construcción de enlaces de calidad y posicionamiento local. La diferencia con una agencia es que trabajas directamente conmigo en todo momento.",
    ],
    [
      "¿Cuánto cobra un consultor SEO en Córdoba?",
      "Mis planes mensuales parten desde 950€/mes para proyectos con dedicación continua. También ofrezco consultorías puntuales y auditorías SEO desde 500€. Cada presupuesto se ajusta al alcance real del proyecto. Lo que no hago es competir en precio — compito en resultados.",
    ],
    [
      "¿Consultor SEO freelance o agencia?",
      "Con un consultor freelance tienes trato directo, mayor implicación en tu proyecto y flexibilidad total. Con una agencia tienes más recursos humanos pero también más capas entre tú y quien ejecuta. Conmigo tienes lo mejor: la dedicación de un freelance con las herramientas y el conocimiento de una agencia.",
    ],
    [
      "¿Cómo es el proceso de trabajo?",
      "Empezamos con una auditoría gratuita donde analizo tu web y tu competencia. Si decidimos trabajar juntos, diseño una estrategia personalizada con objetivos a 3, 6 y 12 meses. Cada mes implementamos las acciones prioritarias y revisamos resultados en una reunión de seguimiento.",
    ],
    [
      "¿Puedo verificar tus credenciales?",
      "Absolutamente. Mi perfil de Google Developer Expert está en el directorio público de Google. Mi certificación Microsoft MVP es igualmente verificable. Además, puedes contactar con cualquiera de mis clientes actuales como referencia.",
    ],
    [
      "¿Trabajas solo con empresas grandes?",
      "No. De hecho, mis mejores resultados son con PYMES y negocios locales en Córdoba. Son proyectos donde el SEO tiene un impacto directo y medible en la facturación. Trabajo con clínicas, despachos profesionales, hostelería, comercios y empresas de servicios.",
    ],
  ],

  ctaTitle: "¿Necesitas un consultor SEO en Córdoba?",
  ctaDescription:
    "Te ofrezco una primera consulta gratuita. Analizaré tu situación actual, tu competencia y te diré con honestidad si puedo ayudarte y cómo.",
  processSteps: [
    [
      "Consulta inicial gratuita",
      "Hablamos por videollamada o presencialmente en Córdoba. Entiendo tu negocio, tus objetivos y analizo tu situación actual en Google. Sin compromiso ni venta agresiva.",
    ],
    [
      "Auditoría y estrategia",
      "Analizo tu web en profundidad: técnica, contenido, autoridad y competencia. Te entrego un plan de acción con keywords objetivo, acciones priorizadas por impacto y timeline realista.",
    ],
    [
      "Ejecución mensual",
      "Cada mes implementamos las acciones de mayor impacto: optimizaciones técnicas, contenido estratégico, link building y SEO local. Todo documentado y medible.",
    ],
    [
      "Reporting transparente",
      "Informe mensual con posiciones, tráfico orgánico y conversiones. Reunión de seguimiento para revisar qué funciona, qué ajustar y cuáles son los próximos pasos.",
    ],
  ],
  ctaButtonText: "Reservar consulta gratis",
  ctaSecondaryText: "Contactar por WhatsApp",
  urgencyMessage: "Disponibilidad limitada — solo 3 proyectos nuevos al mes",
  trustStat: "GDE & MVP certificado",

  extendedSections: [
    {
      heading: "Mi enfoque como consultor SEO",
      content: `Hay muchos consultores SEO. La mayoría aplican la misma fórmula: auditoría con Screaming Frog, keyword research con Ahrefs, link building con directorios genéricos. Funciona, pero es lo mínimo.

Mi enfoque va un paso más allá. Combino el SEO técnico tradicional con un conocimiento profundo de cómo funcionan los algoritmos de Google a nivel de ingeniería. Las certificaciones GDE y MVP no se dan por saber usar herramientas — se dan por entender la tecnología a nivel de código.

Esto se traduce en ventajas prácticas: puedo implementar datos estructurados avanzados que otros consultores no tocan, optimizar el rendimiento web a nivel de código (no solo con plugins), y anticipar cambios de algoritmo basándome en las señales técnicas que Google publica en sus repositorios abiertos.

No es magia. Es conocimiento técnico aplicado al SEO. Y eso marca una diferencia real en los resultados.`,
    },
    {
      heading: "Consultor SEO en Córdoba: el valor del conocimiento local",
      content: `Córdoba tiene algo que la hace especial para el SEO local: es una ciudad con identidad propia fuerte, un mercado local activo y una competencia online que, aunque creciente, todavía está por debajo de ciudades como Sevilla, Málaga o Madrid.

Eso significa que un negocio cordobés que invierta en SEO ahora tiene una ventana de oportunidad. Las posiciones en Google para búsquedas locales en Córdoba son accesibles con una inversión razonable y una estrategia bien ejecutada.

Como consultor SEO basado en Córdoba, tengo acceso directo al pulso del mercado. Sé qué sectores están creciendo, qué zonas de la ciudad tienen mayor actividad comercial (Centro, Brillante, Zoco, Ciudad Jardín, Levante, Polígono de Chinales), y cómo buscan los cordobeses cuando necesitan un servicio.

Esa información no aparece en ninguna herramienta SEO. Es conocimiento local que solo tienes si vives y trabajas aquí.`,
    },
    {
      heading: "¿Para qué tipo de negocios funciona el SEO en Córdoba?",
      content: `El SEO local funciona especialmente bien para negocios que dependen de clientes en su zona geográfica. En Córdoba, los sectores donde he visto mayor retorno son:

Hostelería y restauración: la búsqueda "restaurante Córdoba" tiene miles de búsquedas mensuales. Aparecer en el Local Pack de Google Maps puede llenar un local en temporada baja.

Servicios profesionales: abogados, dentistas, fisioterapeutas, psicólogos, gestores. Son búsquedas con alta intención de contratación y ticket medio alto. El SEO aquí tiene un ROI brutal.

Inmobiliarias: "pisos en venta Córdoba", "inmobiliaria Córdoba" — keywords con volumen alto y clientes que están listos para tomar decisiones económicas importantes.

Comercio local: tiendas especializadas, comercios del centro, negocios de barrio. El SEO local les da visibilidad frente a las grandes plataformas.

Empresas B2B: consultoría, servicios industriales, proveedores. Aunque el volumen de búsqueda es menor, cada lead tiene un valor económico muy alto.

Si tu negocio encaja en alguno de estos perfiles y aún no tienes presencia orgánica en Google, estás dejando dinero en la mesa cada día.`,
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Override registry                                                         */
/* -------------------------------------------------------------------------- */

const cityOverrides: Record<string, ServiceContentOverride> = {
  "cordoba/posicionamiento-web": cordobaPosicionamientoWeb,
  "cordoba/agencia-seo": cordobaAgenciaSeo,
  "cordoba/consultor-seo": cordobaConsultorSeo,
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
