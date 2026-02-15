import type { Pilar } from "./types";

type Locale = "es" | "en";

type ServiceContent = {
  /** For the page title tag */
  title: (city: string) => string;
  /** For meta description */
  metaDescription: (city: string, province: string, ccaa: string) => string;
  /** H1 heading */
  h1: (city: string) => string;
  /** Intro paragraph - unique per city using province/CCAA context */
  intro: (city: string, province: string, ccaa: string) => string;
  /** Why choose us section heading */
  whyTitle: (city: string) => string;
  /** 4 bullet points for why choose us */
  whyPoints: (city: string) => string[];
  /** 4 FAQ items: [question, answer] */
  faqs: (city: string, province: string) => [string, string][];
  /** CTA heading */
  ctaTitle: (city: string) => string;
  /** CTA description */
  ctaDescription: (city: string) => string;
  /** 3-4 process steps [title, description] - NO {city} */
  processSteps: [string, string][];
  /** Primary CTA button text */
  ctaButtonText: string;
  /** Secondary CTA text (schedule) */
  ctaSecondaryText: string;
  /** Urgency message below CTA */
  urgencyMessage: string;
  /** Featured stat for the service */
  trustStat: string;
};

/* -------------------------------------------------------------------------- */
/*  ES Content                                                                */
/* -------------------------------------------------------------------------- */

const esContent: Record<string, ServiceContent> = {
  "agencia-seo": {
    title: (city) => `Agencia SEO en ${city} | Jose Gilarte`,
    metaDescription: (city, province, ccaa) => {
      const location = city === province ? `en ${city}` : `en ${city}, ${province}`;
      return `Agencia SEO ${location}. Estrategias de posicionamiento web que generan tráfico y clientes reales. Auditoría gratis.`;
    },
    h1: (city) => `Agencia SEO en ${city}`,
    intro: (city, province, ccaa) => {
      const location = city === province ? city : `${city}, ${province}`;
      return `¿Buscas una agencia SEO en ${location} que entienda tu mercado? Ofrezco estrategias de posicionamiento web personalizadas que combinan auditoría técnica, optimización on-page y contenidos orientados a conversión. El objetivo es claro: que tu negocio aparezca donde tus clientes buscan.`;
    },
    whyTitle: (city) => `¿Por qué elegir mi servicio SEO en ${city}?`,
    whyPoints: (city) => [
      `Auditoría SEO técnica completa y plan de acción personalizado para tu negocio en ${city}`,
      `Estrategia de contenidos optimizada para tu mercado local y alrededores`,
      `Posicionamiento en Google Maps y búsquedas geolocalizadas de tu zona`,
      `Informes mensuales transparentes con métricas reales de rendimiento`,
    ],
    faqs: (city, province) => [
      [
        `¿Cuánto cuesta contratar una agencia SEO en ${city}?`,
        `Los planes de posicionamiento local parten desde 300\u20AC/mes. Estrategias avanzadas para sectores competitivos pueden superar los 800\u20AC/mes. Cada proyecto recibe una propuesta personalizada tras la auditoría inicial gratuita, adaptada a tus objetivos reales.`,
      ],
      [
        `¿Cuánto tarda el SEO en dar resultados?`,
        `Los primeros resultados suelen verse entre los 3 y 6 meses, dependiendo de la competencia del sector y el estado actual de tu web. Para búsquedas locales, los tiempos son menores que para keywords nacionales.`,
      ],
      [
        `¿Qué incluye el servicio de SEO?`,
        `Auditoría técnica completa, investigación de palabras clave, optimización on-page, estrategia de contenidos, link building de calidad y posicionamiento local en Google Business Profile.`,
      ],
      [
        `¿Por qué necesito SEO local?`,
        `El 46% de las búsquedas en Google tienen intención local. Si tu negocio no aparece cuando alguien busca tus servicios en ${city}, estás perdiendo clientes frente a tu competencia directa.`,
      ],
    ],
    ctaTitle: (city) => `¿Listo para dominar los resultados en ${city}?`,
    ctaDescription: (city) =>
      `Solicita una auditoría SEO gratuita y descubre cómo posicionar tu negocio en los primeros resultados de Google.`,
    processSteps: [
      ["Auditoría gratuita", "Analizamos tu web, competencia y mercado"],
      ["Plan estratégico", "Hoja de ruta con acciones priorizadas por impacto"],
      ["Ejecución", "Implementamos con reporting mensual"],
      ["Resultados", "Métricas reales: tráfico, posiciones, conversiones"],
    ],
    ctaButtonText: "Pide tu auditoría SEO gratis",
    ctaSecondaryText: "Agendar llamada",
    urgencyMessage: "Solo acepto 3 proyectos nuevos al mes",
    trustStat: "+150 proyectos SEO completados",
  },

  "posicionamiento-web": {
    title: (city) => `Posicionamiento Web en ${city} | Jose Gilarte`,
    metaDescription: (city, province, ccaa) => {
      const location = city === province ? `en ${city}` : `en ${city}, ${province}`;
      return `Posicionamiento web ${location}. Mejora tu visibilidad en Google con estrategias SEO basadas en datos. Resultados medibles.`;
    },
    h1: (city) => `Posicionamiento Web en ${city}`,
    intro: (city, province, ccaa) => {
      const location = city === province ? city : `${city} y ${province}`;
      return `El posicionamiento web es clave para que tu negocio sea visible en Google. Ayudo a empresas en ${location} a escalar posiciones en los resultados de búsqueda con estrategias basadas en datos y resultados medibles.`;
    },
    whyTitle: (city) => `Ventajas de invertir en posicionamiento web en ${city}`,
    whyPoints: (city) => [
      `Estrategia SEO adaptada al mercado local de ${city} y su entorno`,
      `Optimización técnica que mejora velocidad, indexación y experiencia de usuario`,
      `Contenido estratégico orientado a las búsquedas de tu público objetivo`,
      `Seguimiento continuo y reporting mensual con métricas claras`,
    ],
    faqs: (city, province) => [
      [
        `¿Qué es el posicionamiento web y por qué lo necesito?`,
        `El posicionamiento web (SEO) es el conjunto de técnicas que mejoran la visibilidad de tu sitio en Google. Aparecer en los primeros resultados es la diferencia entre captar clientes o perderlos. El 75% de los usuarios nunca pasa de la primera página.`,
      ],
      [
        `¿Cuánto cuesta el posicionamiento web?`,
        `Los planes parten desde 250\u20AC/mes para negocios locales con baja competencia. Sectores más disputados en ${province} requieren inversiones desde 500\u20AC/mes. Siempre con un retorno medible y adaptado a tus objetivos.`,
      ],
      [
        `¿Qué diferencia hay entre SEO y SEM?`,
        `El SEO genera tráfico orgánico gratuito y sostenible a largo plazo. El SEM (Google Ads) da visibilidad inmediata pero desaparece al cortar la inversión. Lo ideal es combinar ambas: SEM para resultados rápidos y SEO para autoridad duradera.`,
      ],
      [
        `¿Cómo sé si mi web está bien posicionada?`,
        `Realizo una auditoría SEO gratuita donde analizo tu posición actual en Google, visibilidad orgánica, rendimiento técnico, perfil de enlaces y oportunidades de mejora frente a tu competencia en ${city}.`,
      ],
    ],
    ctaTitle: (city) => `Mejora tu posicionamiento web en ${city}`,
    ctaDescription: (city) =>
      `Descubre qué posiciones ocupa tu web en Google y cómo mejorarlas. Solicita un análisis gratuito.`,
    processSteps: [
      ["Análisis inicial", "Evaluamos posiciones actuales, competencia y oportunidades"],
      ["Estrategia SEO", "Plan personalizado con keywords y acciones priorizadas"],
      ["Implementación", "Optimización técnica, contenidos y link building"],
      ["Seguimiento", "Reporting mensual con evolución de posiciones y tráfico"],
    ],
    ctaButtonText: "Analiza tu web gratis",
    ctaSecondaryText: "Reservar consulta",
    urgencyMessage: "Plazas limitadas cada mes",
    trustStat: "+8 años posicionando webs",
  },

  "consultor-seo": {
    title: (city) => `Consultor SEO en ${city} | Jose Gilarte`,
    metaDescription: (city, province, ccaa) => {
      const location = city === province ? `en ${city}` : `en ${city}, ${province}`;
      return `Consultor SEO freelance ${location}. Estrategias personalizadas sin intermediarios. Contacto directo y resultados reales.`;
    },
    h1: (city) => `Consultor SEO en ${city}`,
    intro: (city, province, ccaa) => {
      const location = city === province ? city : `${city}, ${province}`;
      return `Como consultor SEO en ${location}, ofrezco un servicio personalizado y directo, sin intermediarios. Trabajo de cerca con cada cliente, adaptando la estrategia SEO a las necesidades específicas de tu negocio y tu mercado.`;
    },
    whyTitle: (city) => `Ventajas de un consultor SEO en ${city}`,
    whyPoints: (city) => [
      `Trato directo y personalizado: hablas siempre con el mismo profesional en ${city}`,
      `Estrategia SEO 100% adaptada a tu sector y competencia`,
      `Flexibilidad total para ajustar según resultados reales y cambios del mercado`,
      `Comunicación transparente con informes claros y reuniones periódicas`,
    ],
    faqs: (city, province) => [
      [
        `¿Qué hace un consultor SEO?`,
        `Analizo tu web, investigo a tu competencia y diseño una estrategia de posicionamiento a medida. Esto incluye auditoría técnica, investigación de keywords, optimización de contenidos, link building y seguimiento de resultados. La diferencia con una agencia es el trato directo en ${city}.`,
      ],
      [
        `¿Cuánto cobra un consultor SEO?`,
        `Las consultorías puntuales parten desde 150\u20AC. Los planes mensuales van desde 350\u20AC/mes hasta 900\u20AC/mes para proyectos complejos. Cada presupuesto se ajusta a los objetivos y necesidades reales del cliente.`,
      ],
      [
        `¿Freelance o agencia SEO?`,
        `Un consultor freelance ofrece trato directo, mayor flexibilidad y costes más ajustados. No hay intermediarios ni rotación de cuentas. Para pymes y autónomos, suele ofrecer mejor relación calidad-precio que una agencia tradicional.`,
      ],
      [
        `¿Cómo es el proceso de trabajo?`,
        `Comienza con una auditoría SEO gratuita. Después presento una propuesta con objetivos, acciones y plazos. Si decides avanzar, ejecuto la estrategia con informes mensuales. Cada acción se explica y justifica con datos.`,
      ],
    ],
    ctaTitle: (city) => `Consulta SEO gratuita en ${city}`,
    ctaDescription: (city) =>
      `Solicita una consultoría sin compromiso y descubre cómo mejorar la visibilidad de tu negocio.`,
    processSteps: [
      ["Consulta inicial", "Hablamos de tu negocio, objetivos y competencia"],
      ["Auditoría SEO", "Análisis técnico completo de tu web y mercado"],
      ["Propuesta", "Plan de acción con objetivos claros y plazos definidos"],
      ["Ejecución y seguimiento", "Implementación con reporting mensual"],
    ],
    ctaButtonText: "Habla conmigo directamente",
    ctaSecondaryText: "Agendar videollamada",
    urgencyMessage: "Respuesta en menos de 24h",
    trustStat: "Contacto directo, sin intermediarios",
  },

  "experto-seo": {
    title: (city) => `Experto SEO en ${city} | Jose Gilarte`,
    metaDescription: (city, province, ccaa) => {
      const location = city === province ? `en ${city}` : `en ${city}, ${province}`;
      return `Experto SEO ${location} con +8 años y +150 proyectos. Resultados demostrables en posicionamiento web. Solicita diagnóstico.`;
    },
    h1: (city) => `Experto SEO en ${city}`,
    intro: (city, province, ccaa) => {
      const location = city === province ? city : `${city} y toda ${ccaa}`;
      return `Con más de 8 años de experiencia y más de 150 proyectos completados, trabajo con empresas en ${location}. Mi especialización incluye SEO técnico, estrategia de contenidos, link building y optimización para búsquedas locales con resultados verificables.`;
    },
    whyTitle: (city) => `¿Por qué confiar en un experto SEO en ${city}?`,
    whyPoints: (city) => [
      `Más de 8 años de experiencia real con resultados verificables en ${city}`,
      `+150 proyectos en sectores diversos: salud, legal, ecommerce, servicios`,
      `Dominio de SEO técnico, contenidos y link building adaptado a tu mercado`,
      `Metodología probada con auditoría, ejecución y medición continua`,
    ],
    faqs: (city, province) => [
      [
        `¿Qué diferencia a un experto SEO de un principiante?`,
        `Un experto tiene experiencia real con decenas de proyectos. Conoce los matices del algoritmo de Google, sabe priorizar acciones por impacto y ha aprendido de errores reales en ${city}. Un principiante aplica técnicas genéricas sin entender por qué funcionan o fallan.`,
      ],
      [
        `¿Cómo demuestras tus resultados?`,
        `Cada proyecto incluye un dashboard con métricas reales: posiciones en Google, tráfico orgánico, conversiones y visibilidad general. Además comparto casos de éxito anónimos de proyectos similares para que veas resultados tangibles.`,
      ],
      [
        `¿En qué sectores tienes experiencia?`,
        `Salud, despachos de abogados, ecommerce, SaaS, hostelería, inmobiliarias y servicios profesionales. Cada sector tiene sus particularidades SEO. Mi experiencia multi-sector me permite aplicar estrategias probadas adaptadas a cada nicho.`,
      ],
      [
        `¿Merece la pena invertir en SEO frente a publicidad?`,
        `El SEO genera tráfico gratuito y sostenible a medio-largo plazo. La publicidad de pago da resultados inmediatos pero tiene coste recurrente. A los 6-12 meses, el SEO puede ser tu principal fuente de clientes sin coste por clic.`,
      ],
    ],
    ctaTitle: (city) => `¿Buscas un experto SEO en ${city}?`,
    ctaDescription: (city) =>
      `Contacta conmigo para una auditoría SEO gratuita y descubre cómo llevar tu web a los primeros resultados.`,
    processSteps: [
      ["Diagnóstico", "Evaluación completa del estado actual de tu web"],
      ["Estrategia", "Plan personalizado basado en datos y competencia"],
      ["Ejecución", "Implementación técnica, contenidos y autoridad"],
      ["Medición", "Dashboard con métricas reales y ajustes continuos"],
    ],
    ctaButtonText: "Solicita diagnóstico SEO",
    ctaSecondaryText: "Reservar sesión",
    urgencyMessage: "Solo acepto 3 proyectos nuevos al mes",
    trustStat: "+150 proyectos con resultados verificables",
  },

  "consultoria-ia": {
    title: (city) => `Consultoría IA en ${city} | Jose Gilarte`,
    metaDescription: (city, province, ccaa) => {
      const location = city === province ? `en ${city}` : `en ${city}, ${province}`;
      return `Consultoría de inteligencia artificial ${location}. Implementa IA y automatización en tu empresa. Diagnóstico gratuito.`;
    },
    h1: (city) => `Consultoría de Inteligencia Artificial en ${city}`,
    intro: (city, province, ccaa) => {
      const location = city === province ? city : `${city} y toda ${ccaa}`;
      return `La inteligencia artificial está transformando los negocios en ${location}. Ayudo a empresas a implementar soluciones de automatización, chatbots, análisis predictivo y procesamiento de datos que optimizan procesos y reducen costes de forma medible.`;
    },
    whyTitle: (city) => `¿Por qué implementar IA en tu empresa en ${city}?`,
    whyPoints: (city) => [
      `Automatización de procesos repetitivos que ahorra tiempo y reduce errores en ${city}`,
      `Chatbots y asistentes virtuales que atienden a tus clientes 24/7`,
      `Análisis de datos con IA para tomar decisiones más inteligentes`,
      `Integración de herramientas de IA en tu flujo de trabajo sin disrupciones`,
    ],
    faqs: (city, province) => [
      [
        `¿Qué tipo de empresas pueden beneficiarse de la IA?`,
        `Cualquier empresa con procesos repetitivos, atención al cliente o gestión de datos puede beneficiarse. Desde pymes que quieren automatizar con chatbots hasta empresas medianas que necesitan análisis predictivo para optimizar ventas en ${city}.`,
      ],
      [
        `¿Cuánto cuesta implementar IA?`,
        `Una integración básica de chatbot parte desde 500\u20AC. Proyectos de análisis predictivo o soluciones personalizadas van desde 2.000\u20AC hasta 10.000\u20AC según complejidad. Siempre empezamos con un diagnóstico gratuito.`,
      ],
      [
        `¿Necesito conocimientos técnicos?`,
        `No. Diseño soluciones que tu equipo pueda usar sin formación técnica. Las herramientas se integran en tus procesos actuales con formación incluida. El objetivo es que la IA trabaje para ti de forma transparente.`,
      ],
      [
        `¿Cuánto tarda la implementación?`,
        `Un chatbot inteligente puede estar operativo en 2-4 semanas. Automatizaciones de procesos requieren 4-8 semanas. Proyectos de IA personalizada pueden llevar 2-3 meses. Siempre trabajamos en fases con entregables parciales.`,
      ],
    ],
    ctaTitle: (city) => `Transforma tu empresa en ${city} con IA`,
    ctaDescription: (city) =>
      `Solicita un diagnóstico gratuito y descubre cómo la inteligencia artificial puede impulsar tu negocio.`,
    processSteps: [
      ["Diagnóstico gratuito", "Identificamos procesos automatizables y oportunidades"],
      ["Propuesta técnica", "Solución a medida con tecnologías adecuadas"],
      ["Implementación", "Desarrollo e integración por fases con tu equipo"],
      ["Optimización", "Ajustes basados en datos reales de uso"],
    ],
    ctaButtonText: "Pide tu diagnóstico IA gratis",
    ctaSecondaryText: "Reservar demo",
    urgencyMessage: "Diagnóstico gratuito sin compromiso",
    trustStat: "Soluciones IA con ROI medible",
  },

  "automatizacion-ia": {
    title: (city) => `Automatización IA en ${city} | Jose Gilarte`,
    metaDescription: (city, province, ccaa) => {
      const location = city === province ? `en ${city}` : `en ${city}, ${province}`;
      return `Automatización con IA ${location}. Optimiza procesos, reduce costes y escala tu negocio con soluciones a medida. Consulta gratuita.`;
    },
    h1: (city) => `Automatización con IA en ${city}`,
    intro: (city, province, ccaa) => {
      const location = city === province ? city : `${city} y ${province}`;
      return `La automatización con inteligencia artificial permite a empresas en ${location} optimizar procesos, reducir costes operativos y escalar sin aumentar plantilla. Diseño e implemento soluciones a medida para negocios que quieren competir con las herramientas más avanzadas del mercado.`;
    },
    whyTitle: (city) => `Beneficios de la automatización con IA en ${city}`,
    whyPoints: (city) => [
      `Reducción de hasta el 70% en tiempo dedicado a tareas repetitivas en ${city}`,
      `Flujos de trabajo inteligentes que se adaptan y mejoran con el uso`,
      `Integración con tus herramientas actuales: CRM, email, facturación, soporte`,
      `Escalabilidad real: crece tu negocio sin multiplicar costes operativos`,
    ],
    faqs: (city, province) => [
      [
        `¿Qué procesos puedo automatizar con IA?`,
        `Los más habituales incluyen: atención al cliente con chatbots, clasificación de emails, generación de informes, procesamiento de facturas, seguimiento de leads en CRM y análisis de datos de ventas. Cualquier tarea repetitiva en ${city} es candidata.`,
      ],
      [
        `¿La automatización reemplazará a mis empleados?`,
        `No. La automatización libera a tu equipo de tareas repetitivas para que se centren en estrategia, relación con clientes y toma de decisiones. Las empresas que implementan IA mejoran la productividad y satisfacción de sus empleados.`,
      ],
      [
        `¿Cuánto puedo ahorrar con automatización?`,
        `Empresas que automatizan atención al cliente ahorran entre 15 y 30 horas semanales. La automatización de reporting reduce un 60% el tiempo de gestión. En promedio, mis clientes recuperan la inversión en 2-4 meses.`,
      ],
      [
        `¿Qué herramientas de IA utilizas?`,
        `Make, n8n, Zapier para orquestación de flujos; OpenAI y Claude para procesamiento de lenguaje natural; y soluciones personalizadas con Python para necesidades específicas. Elijo la herramienta según el caso de uso, no por moda.`,
      ],
    ],
    ctaTitle: (city) => `Automatiza tu negocio en ${city} con IA`,
    ctaDescription: (city) =>
      `Solicita un diagnóstico gratuito y descubre qué procesos de tu empresa pueden optimizarse con inteligencia artificial.`,
    processSteps: [
      ["Mapeo de procesos", "Identificamos tareas repetitivas y cuellos de botella"],
      ["Diseño de flujos", "Arquitectura de automatización con las herramientas adecuadas"],
      ["Implementación", "Desarrollo, testing e integración con tus sistemas"],
      ["Monitorización", "Seguimiento de rendimiento y ajustes continuos"],
    ],
    ctaButtonText: "Analiza qué puedes automatizar",
    ctaSecondaryText: "Agendar consulta",
    urgencyMessage: "Diagnóstico gratuito sin compromiso",
    trustStat: "Ahorro medio del 70% en tiempo",
  },

  "growth-marketing": {
    title: (city) => `Growth Marketing en ${city} | Jose Gilarte`,
    metaDescription: (city, province, ccaa) => {
      const location = city === province ? `en ${city}` : `en ${city}, ${province}`;
      return `Growth marketing ${location}. Estrategias de crecimiento orgánico basadas en datos: SEO + contenidos + conversión. Pide tu plan.`;
    },
    h1: (city) => `Growth Marketing en ${city}`,
    intro: (city, province, ccaa) => {
      const location = city === province ? city : `${city} y toda ${ccaa}`;
      return `El growth marketing combina SEO, marketing de contenidos, optimización de conversión y análisis de datos para generar crecimiento orgánico sostenible. Ayudo a empresas en ${location} a escalar su presencia digital sin depender de publicidad de pago.`;
    },
    whyTitle: (city) => `¿Por qué apostar por growth marketing en ${city}?`,
    whyPoints: (city) => [
      `Estrategia integral que combina SEO, contenidos, CRO y analítica en ${city}`,
      `Crecimiento orgánico sostenible que reduce tu dependencia de publicidad`,
      `Experimentación constante con tests A/B y optimización basada en datos`,
      `Funnels de conversión optimizados que transforman visitantes en clientes`,
    ],
    faqs: (city, province) => [
      [
        `¿Qué es el growth marketing?`,
        `Es una metodología que combina marketing digital, análisis de datos y experimentación continua. Identifico los canales de adquisición más rentables, optimizo cada paso del funnel y escalo lo que funciona. No es marketing tradicional: es crecimiento basado en datos para empresas en ${city}.`,
      ],
      [
        `¿Cuánto tarda en funcionar?`,
        `Las primeras mejoras en conversión se ven en 4-6 semanas con quick wins. La estrategia completa muestra resultados significativos a los 3-6 meses. A los 12 meses, los canales orgánicos suelen convertirse en la principal fuente de clientes.`,
      ],
      [
        `¿Growth marketing o marketing tradicional?`,
        `El marketing tradicional se basa en campañas puntuales y presupuesto de publicidad. El growth marketing construye sistemas de crecimiento sostenibles: SEO que genera tráfico gratuito, contenidos que convierten, y procesos que escalan.`,
      ],
      [
        `¿Qué incluye el servicio?`,
        `Auditoría digital, estrategia SEO, plan de contenidos orientado a conversión, optimización de landing pages (CRO), analítica avanzada, tests A/B y reporting mensual. Todo orientado a crecimiento medible para tu negocio en ${city}.`,
      ],
    ],
    ctaTitle: (city) => `Escala tu negocio en ${city} con growth marketing`,
    ctaDescription: (city) =>
      `Solicita un diagnóstico de crecimiento gratuito y descubre cómo escalar tu presencia digital.`,
    processSteps: [
      ["Auditoría de crecimiento", "Analizamos métricas, canales y oportunidades"],
      ["Plan de growth", "Estrategia con experimentos priorizados por impacto"],
      ["Experimentación", "Tests A/B, optimización de funnels y contenidos"],
      ["Escalado", "Duplicamos lo que funciona y cortamos lo que no"],
    ],
    ctaButtonText: "Pide tu plan de crecimiento",
    ctaSecondaryText: "Reservar sesión",
    urgencyMessage: "Solo 3 proyectos nuevos al mes",
    trustStat: "Crecimiento orgánico medible",
  },

  "posicionamiento-ia": {
    title: (city) => `SEO para IA en ${city} | Jose Gilarte`,
    metaDescription: (city, province, ccaa) => {
      const location = city === province ? `en ${city}` : `en ${city}, ${province}`;
      return `Posicionamiento en buscadores IA ${location}. Aparece en ChatGPT, Gemini y Perplexity. Servicio pionero de GEO. Auditoría gratis.`;
    },
    h1: (city) => `Posicionamiento en Buscadores IA en ${city}`,
    intro: (city, province, ccaa) => {
      const location = city === province ? city : `${city} y toda ${ccaa}`;
      return `Los buscadores con IA como ChatGPT, Gemini y Perplexity están cambiando cómo la gente encuentra servicios. Como pionero en GEO (Generative Engine Optimization), ayudo a empresas en ${location} a optimizar su presencia para aparecer en las respuestas de estos nuevos motores de búsqueda.`;
    },
    whyTitle: (city) => `¿Por qué tu negocio en ${city} necesita GEO?`,
    whyPoints: (city) => [
      `Aparece en las respuestas de ChatGPT cuando buscan servicios en ${city}`,
      `Optimización para Gemini, Perplexity y otros buscadores IA emergentes`,
      `Estrategia de contenido estructurado que los modelos de IA pueden citar`,
      `Servicio pionero en España con metodología propia de posicionamiento`,
    ],
    faqs: (city, province) => [
      [
        `¿Qué es el GEO y por qué importa?`,
        `GEO (Generative Engine Optimization) es la optimización para buscadores basados en IA. Cada vez más personas en ${city} usan estos asistentes. Si tu negocio no está optimizado, estás perdiendo una fuente creciente de clientes que ya no busca solo en Google.`,
      ],
      [
        `¿Cómo hago que mi negocio aparezca en ChatGPT?`,
        `Necesitas contenido estructurado, datos verificables, presencia en fuentes que los modelos de IA consultan y una estrategia de E-E-A-T sólida. Mi servicio de GEO cubre todos estos aspectos con metodología probada.`,
      ],
      [
        `¿El GEO sustituye al SEO tradicional?`,
        `No. Lo complementa. El 80% de las búsquedas aún se hacen en Google, pero los buscadores IA crecen un 300% anual. La estrategia ideal combina SEO clásico con GEO. Quien se posicione primero en ambos canales dominará su mercado.`,
      ],
      [
        `¿Cuánto tarda en funcionar el GEO?`,
        `Negocios con buena autoridad web pueden ver menciones en ChatGPT en 4-8 semanas. Empresas que empiezan desde cero necesitan 3-6 meses para construir la autoridad que los modelos reconocen. Es una inversión en el futuro de tu visibilidad.`,
      ],
    ],
    ctaTitle: (city) => `Sé el primero en ${city} en dominar los buscadores IA`,
    ctaDescription: (city) =>
      `Solicita una auditoría GEO gratuita y descubre si tu negocio aparece en ChatGPT y Gemini.`,
    processSteps: [
      ["Auditoría GEO", "Comprobamos tu visibilidad actual en buscadores IA"],
      ["Estrategia de contenido", "Plan de contenido estructurado para modelos de IA"],
      ["Optimización E-E-A-T", "Reforzamos autoridad, experiencia y confianza"],
      ["Monitorización", "Seguimiento de menciones en ChatGPT, Gemini y Perplexity"],
    ],
    ctaButtonText: "Auditoría GEO gratuita",
    ctaSecondaryText: "Reservar sesión",
    urgencyMessage: "Servicio pionero con plazas limitadas",
    trustStat: "Pionero en GEO en España",
  },
};

/* -------------------------------------------------------------------------- */
/*  EN Content                                                                */
/* -------------------------------------------------------------------------- */

const enContent: Record<string, ServiceContent> = {
  "agencia-seo": {
    title: (city) => `SEO Agency in ${city} | Jose Gilarte`,
    metaDescription: (city, province, ccaa) => {
      const location = city === province ? `in ${city}` : `in ${city}, ${province}`;
      return `SEO agency ${location}. Web positioning strategies that drive traffic and real customers. Free audit.`;
    },
    h1: (city) => `SEO Agency in ${city}`,
    intro: (city, province, ccaa) => {
      const location = city === province ? city : `${city}, ${province}`;
      return `Looking for an SEO agency in ${location} that understands your market? I offer customized web positioning strategies combining technical auditing, on-page optimization, and conversion-oriented content. The goal is clear: get your business where your customers are searching.`;
    },
    whyTitle: (city) => `Why choose my SEO service in ${city}?`,
    whyPoints: (city) => [
      `Comprehensive technical SEO audit with a customized action plan for your business in ${city}`,
      `Content strategy optimized for your local market and surrounding areas`,
      `Google Maps positioning and geo-targeted search visibility`,
      `Transparent monthly reports with real performance metrics`,
    ],
    faqs: (city, province) => [
      [
        `How much does an SEO agency cost in ${city}?`,
        `Local positioning plans start from 300EUR/month. Advanced strategies for competitive sectors can exceed 800EUR/month. Each project receives a customized proposal after the free initial audit, tailored to your real goals.`,
      ],
      [
        `How long does SEO take to show results?`,
        `First results typically appear between 3 and 6 months, depending on industry competition and your website's state. Local searches tend to show faster improvement than national keywords.`,
      ],
      [
        `What does the SEO service include?`,
        `Comprehensive technical audit, keyword research, on-page optimization, content strategy, quality link building, and local positioning on Google Business Profile.`,
      ],
      [
        `Why do I need local SEO?`,
        `46% of Google searches have local intent. If your business doesn't appear when someone searches for your services in ${city}, you're losing customers to your direct competition.`,
      ],
    ],
    ctaTitle: (city) => `Ready to dominate search results in ${city}?`,
    ctaDescription: (city) =>
      `Request a free SEO audit and discover how to position your business at the top of Google results.`,
    processSteps: [
      ["Free audit", "We analyze your website, competition, and market"],
      ["Strategic plan", "Roadmap with actions prioritized by impact"],
      ["Execution", "Implementation with monthly reporting"],
      ["Results", "Real metrics: traffic, rankings, conversions"],
    ],
    ctaButtonText: "Get your free SEO audit",
    ctaSecondaryText: "Schedule a call",
    urgencyMessage: "Only 3 new projects accepted per month",
    trustStat: "150+ completed SEO projects",
  },

  "posicionamiento-web": {
    title: (city) => `Web Positioning in ${city} | Jose Gilarte`,
    metaDescription: (city, province, ccaa) => {
      const location = city === province ? `in ${city}` : `in ${city}, ${province}`;
      return `Web positioning ${location}. Improve your Google visibility with data-driven SEO strategies. Measurable results.`;
    },
    h1: (city) => `Web Positioning in ${city}`,
    intro: (city, province, ccaa) => {
      const location = city === province ? city : `${city} and ${province}`;
      return `Web positioning is key to making your business visible on Google. I help businesses in ${location} climb search result rankings with data-driven strategies and measurable results.`;
    },
    whyTitle: (city) => `Benefits of investing in web positioning in ${city}`,
    whyPoints: (city) => [
      `SEO strategy tailored to the local market of ${city} and surroundings`,
      `Technical optimization that improves speed, indexing, and user experience`,
      `Strategic content targeting your audience's search intent`,
      `Continuous monitoring and monthly reporting with clear metrics`,
    ],
    faqs: (city, province) => [
      [
        `What is web positioning and why do I need it?`,
        `Web positioning (SEO) improves your site's visibility on Google. Appearing in top results is the difference between capturing customers or losing them. 75% of users never go past the first page.`,
      ],
      [
        `How much does web positioning cost?`,
        `Plans start from 250EUR/month for local businesses with low competition. More competitive sectors in ${province} require investments from 500EUR/month. Always with measurable return tailored to your goals.`,
      ],
      [
        `What's the difference between SEO and SEM?`,
        `SEO generates free, sustainable organic traffic long-term. SEM (Google Ads) gives immediate visibility but disappears when you stop paying. The ideal approach combines both: SEM for quick results and SEO for lasting authority.`,
      ],
      [
        `How do I know if my website is well positioned?`,
        `I perform a free SEO audit analyzing your Google rankings, organic visibility, technical performance, link profile, and improvement opportunities against your competition in ${city}.`,
      ],
    ],
    ctaTitle: (city) => `Improve your web positioning in ${city}`,
    ctaDescription: (city) =>
      `Find out where your website ranks on Google and how to improve it. Request a free analysis.`,
    processSteps: [
      ["Initial analysis", "We evaluate current rankings, competition, and opportunities"],
      ["SEO strategy", "Custom plan with prioritized keywords and actions"],
      ["Implementation", "Technical optimization, content, and link building"],
      ["Tracking", "Monthly reporting with ranking and traffic evolution"],
    ],
    ctaButtonText: "Analyze your website free",
    ctaSecondaryText: "Book a consultation",
    urgencyMessage: "Limited spots each month",
    trustStat: "8+ years positioning websites",
  },

  "consultor-seo": {
    title: (city) => `SEO Consultant in ${city} | Jose Gilarte`,
    metaDescription: (city, province, ccaa) => {
      const location = city === province ? `in ${city}` : `in ${city}, ${province}`;
      return `Freelance SEO consultant ${location}. Personalized strategies with no middlemen. Direct contact and real results.`;
    },
    h1: (city) => `SEO Consultant in ${city}`,
    intro: (city, province, ccaa) => {
      const location = city === province ? city : `${city}, ${province}`;
      return `As an SEO consultant in ${location}, I offer a personalized and direct service with no middlemen. I work closely with each client, tailoring SEO strategy to the specific needs of your business and market.`;
    },
    whyTitle: (city) => `Advantages of an SEO consultant in ${city}`,
    whyPoints: (city) => [
      `Direct and personalized approach: you always speak to the same professional in ${city}`,
      `SEO strategy fully adapted to your industry and competition`,
      `Total flexibility to adjust based on real results and market changes`,
      `Transparent communication with clear reports and regular meetings`,
    ],
    faqs: (city, province) => [
      [
        `What does an SEO consultant do?`,
        `I analyze your website, research your competition, and design a tailored positioning strategy. This includes technical auditing, keyword research, content optimization, link building, and results tracking. The difference from an agency is direct communication in ${city}.`,
      ],
      [
        `How much does an SEO consultant charge?`,
        `One-off consultations start from 150EUR. Monthly support plans range from 350EUR/month to 900EUR/month for complex projects. Each quote is adjusted to actual goals and needs.`,
      ],
      [
        `Freelance consultant or agency?`,
        `A freelance consultant offers direct communication, greater flexibility, and competitive pricing. No middlemen or account rotation. For SMEs and freelancers, it usually offers better value than a traditional agency.`,
      ],
      [
        `What does the process look like?`,
        `It begins with a free SEO audit. Then I present a proposal with objectives, actions, and timelines. If you proceed, I execute the strategy with monthly reports. Every action is explained with data.`,
      ],
    ],
    ctaTitle: (city) => `Free SEO consultation in ${city}`,
    ctaDescription: (city) =>
      `Request a no-commitment consultation and discover how to improve your business visibility.`,
    processSteps: [
      ["Initial consultation", "We discuss your business, goals, and competition"],
      ["SEO audit", "Complete technical analysis of your website and market"],
      ["Proposal", "Action plan with clear objectives and defined timelines"],
      ["Execution & tracking", "Implementation with monthly reporting"],
    ],
    ctaButtonText: "Talk to me directly",
    ctaSecondaryText: "Schedule a video call",
    urgencyMessage: "Response within 24 hours",
    trustStat: "Direct contact, no middlemen",
  },

  "experto-seo": {
    title: (city) => `SEO Expert in ${city} | Jose Gilarte`,
    metaDescription: (city, province, ccaa) => {
      const location = city === province ? `in ${city}` : `in ${city}, ${province}`;
      return `SEO expert ${location} with 8+ years and 150+ projects. Demonstrable web positioning results. Request a diagnostic.`;
    },
    h1: (city) => `SEO Expert in ${city}`,
    intro: (city, province, ccaa) => {
      const location = city === province ? city : `${city} and across ${ccaa}`;
      return `With over 8 years of experience and more than 150 completed projects, I work with businesses in ${location}. My specialization includes technical SEO, content strategy, link building, and local search optimization with verifiable results.`;
    },
    whyTitle: (city) => `Why trust an SEO expert in ${city}?`,
    whyPoints: (city) => [
      `Over 8 years of real experience with verifiable results in ${city}`,
      `150+ projects across diverse industries: health, legal, ecommerce, services`,
      `Mastery of technical SEO, content, and link building for your market`,
      `Proven methodology with auditing, execution, and continuous measurement`,
    ],
    faqs: (city, province) => [
      [
        `What sets an SEO expert apart from a beginner?`,
        `An expert has real experience with dozens of projects. They understand Google's algorithm nuances, prioritize actions by impact, and have learned from real mistakes in ${city}. A beginner applies generic techniques without understanding why they work or fail.`,
      ],
      [
        `How do you prove your results?`,
        `Every project includes a tracking dashboard with real metrics: Google rankings, organic traffic, conversions, and overall visibility. I also share anonymized case studies from similar projects.`,
      ],
      [
        `What industries do you have experience in?`,
        `Healthcare, law firms, ecommerce, SaaS, hospitality, real estate, and professional services. Each industry has its own SEO nuances. My cross-industry experience allows me to apply proven strategies to each niche.`,
      ],
      [
        `Is SEO worth the investment vs paid advertising?`,
        `SEO generates free, sustainable traffic long-term. Paid advertising has recurring costs. Within 6-12 months, SEO can become your primary customer source with zero cost per click.`,
      ],
    ],
    ctaTitle: (city) => `Looking for an SEO expert in ${city}?`,
    ctaDescription: (city) =>
      `Get in touch for a free SEO audit and discover how to get your website to the top results.`,
    processSteps: [
      ["Diagnostic", "Complete evaluation of your website's current state"],
      ["Strategy", "Personalized plan based on data and competition"],
      ["Execution", "Technical implementation, content, and authority building"],
      ["Measurement", "Dashboard with real metrics and continuous adjustments"],
    ],
    ctaButtonText: "Request SEO diagnostic",
    ctaSecondaryText: "Book a session",
    urgencyMessage: "Only 3 new projects accepted per month",
    trustStat: "150+ projects with verifiable results",
  },

  "consultoria-ia": {
    title: (city) => `AI Consulting in ${city} | Jose Gilarte`,
    metaDescription: (city, province, ccaa) => {
      const location = city === province ? `in ${city}` : `in ${city}, ${province}`;
      return `Artificial intelligence consulting ${location}. Implement AI and automation in your business. Free diagnostic.`;
    },
    h1: (city) => `Artificial Intelligence Consulting in ${city}`,
    intro: (city, province, ccaa) => {
      const location = city === province ? city : `${city} and across ${ccaa}`;
      return `Artificial intelligence is transforming businesses in ${location}. I help companies implement automation solutions, chatbots, predictive analytics, and data processing that optimize processes and reduce costs measurably.`;
    },
    whyTitle: (city) => `Why implement AI in your business in ${city}?`,
    whyPoints: (city) => [
      `Automation of repetitive processes that saves time and reduces errors in ${city}`,
      `Chatbots and virtual assistants serving your customers 24/7`,
      `AI-powered data analysis for smarter business decisions`,
      `Integration of AI tools into your current workflow without disruptions`,
    ],
    faqs: (city, province) => [
      [
        `What types of businesses can benefit from AI?`,
        `Any business with repetitive processes, customer service, or data management can benefit. From SMEs automating with chatbots to mid-sized companies needing predictive analytics for sales optimization in ${city}.`,
      ],
      [
        `How much does AI implementation cost?`,
        `A basic chatbot integration starts from 500EUR. Predictive analytics or custom solutions range from 2,000EUR to 10,000EUR depending on complexity. We always start with a free diagnostic.`,
      ],
      [
        `Do I need technical knowledge?`,
        `No. I design solutions your team can use without technical skills. Tools integrate into your current processes with training included. The goal is for AI to work transparently for you.`,
      ],
      [
        `How long does implementation take?`,
        `A smart chatbot can be operational in 2-4 weeks. Process automations take 4-8 weeks. Custom AI projects may take 2-3 months. We always work in phases with partial deliverables.`,
      ],
    ],
    ctaTitle: (city) => `Transform your business in ${city} with AI`,
    ctaDescription: (city) =>
      `Request a free diagnostic and discover how artificial intelligence can drive your business.`,
    processSteps: [
      ["Free diagnostic", "We identify automatable processes and opportunities"],
      ["Technical proposal", "Custom solution with the right technologies"],
      ["Implementation", "Phased development and integration with your team"],
      ["Optimization", "Adjustments based on real usage data"],
    ],
    ctaButtonText: "Get your free AI diagnostic",
    ctaSecondaryText: "Book a demo",
    urgencyMessage: "Free diagnostic, no commitment",
    trustStat: "AI solutions with measurable ROI",
  },

  "automatizacion-ia": {
    title: (city) => `AI Automation in ${city} | Jose Gilarte`,
    metaDescription: (city, province, ccaa) => {
      const location = city === province ? `in ${city}` : `in ${city}, ${province}`;
      return `AI-powered automation ${location}. Optimize processes, reduce costs, and scale your business with custom solutions. Free consultation.`;
    },
    h1: (city) => `AI Automation in ${city}`,
    intro: (city, province, ccaa) => {
      const location = city === province ? city : `${city} and ${province}`;
      return `AI-powered automation enables businesses in ${location} to optimize processes, reduce operational costs, and scale without increasing headcount. I design and implement custom solutions for businesses that want to compete with the most advanced tools on the market.`;
    },
    whyTitle: (city) => `Benefits of AI automation in ${city}`,
    whyPoints: (city) => [
      `Up to 70% reduction in time spent on repetitive tasks in ${city}`,
      `Smart workflows that adapt and improve with use`,
      `Integration with your current tools: CRM, email, billing, support`,
      `Real scalability: grow your business without multiplying costs`,
    ],
    faqs: (city, province) => [
      [
        `What processes can I automate with AI?`,
        `The most common include: customer service chatbots, email classification, report generation, invoice processing, CRM lead tracking, and sales data analysis. Any repetitive task in ${city} is a candidate.`,
      ],
      [
        `Will automation replace my employees?`,
        `No. Automation frees your team from repetitive tasks so they can focus on strategy, customer relationships, and decision making. Companies that implement AI improve productivity and employee satisfaction.`,
      ],
      [
        `How much can I save with automation?`,
        `Businesses automating customer service save 15-30 hours per week. Reporting automation reduces management time by 60%. On average, clients recover their investment in 2-4 months.`,
      ],
      [
        `What AI tools do you use?`,
        `Make, n8n, Zapier for workflow orchestration; OpenAI and Claude for natural language processing; and custom Python solutions for specific needs. I choose the tool based on the use case, not trends.`,
      ],
    ],
    ctaTitle: (city) => `Automate your business in ${city} with AI`,
    ctaDescription: (city) =>
      `Request a free diagnostic and discover which processes can be optimized with artificial intelligence.`,
    processSteps: [
      ["Process mapping", "We identify repetitive tasks and bottlenecks"],
      ["Flow design", "Automation architecture with the right tools"],
      ["Implementation", "Development, testing, and integration with your systems"],
      ["Monitoring", "Performance tracking and continuous adjustments"],
    ],
    ctaButtonText: "Find out what you can automate",
    ctaSecondaryText: "Schedule a consultation",
    urgencyMessage: "Free diagnostic, no commitment",
    trustStat: "Average 70% time savings",
  },

  "growth-marketing": {
    title: (city) => `Growth Marketing in ${city} | Jose Gilarte`,
    metaDescription: (city, province, ccaa) => {
      const location = city === province ? `in ${city}` : `in ${city}, ${province}`;
      return `Growth marketing ${location}. Data-driven organic growth strategies: SEO + content + conversion. Request your plan.`;
    },
    h1: (city) => `Growth Marketing in ${city}`,
    intro: (city, province, ccaa) => {
      const location = city === province ? city : `${city} and across ${ccaa}`;
      return `Growth marketing combines SEO, content marketing, conversion optimization, and data analytics to generate sustainable organic growth. I help businesses in ${location} scale their digital presence without relying on paid advertising.`;
    },
    whyTitle: (city) => `Why invest in growth marketing in ${city}?`,
    whyPoints: (city) => [
      `Comprehensive strategy combining SEO, content, CRO, and analytics in ${city}`,
      `Sustainable organic growth that reduces your dependence on advertising`,
      `Constant experimentation with A/B testing and data-driven optimization`,
      `Optimized conversion funnels that turn visitors into customers`,
    ],
    faqs: (city, province) => [
      [
        `What is growth marketing?`,
        `A methodology combining digital marketing, data analysis, and continuous experimentation. I identify the most profitable channels, optimize every funnel step, and scale what works. Data-driven growth for businesses in ${city}.`,
      ],
      [
        `How long does it take to work?`,
        `Initial conversion improvements appear in 4-6 weeks with quick wins. The full strategy shows significant results at 3-6 months. At 12 months, organic channels typically become the primary customer source.`,
      ],
      [
        `Growth marketing or traditional marketing?`,
        `Traditional marketing relies on one-off campaigns and ad budget. Growth marketing builds sustainable systems: SEO for free traffic, content that converts, and processes that scale. It's building your own digital asset.`,
      ],
      [
        `What does the service include?`,
        `Digital audit, SEO strategy, conversion-oriented content plan, landing page optimization (CRO), advanced analytics, A/B testing, and monthly reporting. All focused on measurable growth for your business in ${city}.`,
      ],
    ],
    ctaTitle: (city) => `Scale your business in ${city} with growth marketing`,
    ctaDescription: (city) =>
      `Request a free growth diagnostic and discover how to scale your digital presence.`,
    processSteps: [
      ["Growth audit", "We analyze metrics, channels, and opportunities"],
      ["Growth plan", "Strategy with experiments prioritized by impact"],
      ["Experimentation", "A/B testing, funnel optimization, and content"],
      ["Scaling", "We double what works and cut what doesn't"],
    ],
    ctaButtonText: "Get your growth plan",
    ctaSecondaryText: "Book a session",
    urgencyMessage: "Only 3 new projects per month",
    trustStat: "Measurable organic growth",
  },

  "posicionamiento-ia": {
    title: (city) => `AI Search SEO in ${city} | Jose Gilarte`,
    metaDescription: (city, province, ccaa) => {
      const location = city === province ? `in ${city}` : `in ${city}, ${province}`;
      return `AI search engine optimization ${location}. Get featured in ChatGPT, Gemini, and Perplexity. Pioneering GEO service. Free audit.`;
    },
    h1: (city) => `AI Search Engine Optimization in ${city}`,
    intro: (city, province, ccaa) => {
      const location = city === province ? city : `${city} and across ${ccaa}`;
      return `AI-powered search engines like ChatGPT, Gemini, and Perplexity are changing how people find services. As a GEO (Generative Engine Optimization) pioneer, I help businesses in ${location} optimize their presence to appear in the answers of these new search engines.`;
    },
    whyTitle: (city) => `Why does your business in ${city} need GEO?`,
    whyPoints: (city) => [
      `Appear in ChatGPT answers when people search for services in ${city}`,
      `Optimization for Gemini, Perplexity, and other emerging AI search engines`,
      `Structured content strategy that AI models can cite and reference`,
      `Pioneering service in Spain with proprietary positioning methodology`,
    ],
    faqs: (city, province) => [
      [
        `What is GEO and why does it matter?`,
        `GEO (Generative Engine Optimization) is optimization for AI-based search engines. More people in ${city} use these assistants daily. If your business isn't optimized, you're missing a growing source of customers beyond Google.`,
      ],
      [
        `How do I get featured in ChatGPT?`,
        `You need structured content, verifiable data, presence in AI-consulted sources, and a solid E-E-A-T strategy. My GEO service covers all aspects with proven methodology.`,
      ],
      [
        `Does GEO replace traditional SEO?`,
        `No. It complements it. 80% of searches are still on Google, but AI search grows 300% annually. The ideal strategy combines classic SEO with GEO. Whoever positions first in both channels dominates.`,
      ],
      [
        `How long does GEO take to work?`,
        `Businesses with strong web authority may see ChatGPT mentions in 4-8 weeks. Starting from scratch takes 3-6 months to build the authority AI models recognize. It's an investment in the future of your visibility.`,
      ],
    ],
    ctaTitle: (city) => `Be the first in ${city} to master AI search`,
    ctaDescription: (city) =>
      `Request a free GEO audit and find out if your business appears in ChatGPT and Gemini.`,
    processSteps: [
      ["GEO audit", "We check your current visibility in AI search engines"],
      ["Content strategy", "Structured content plan for AI models"],
      ["E-E-A-T optimization", "We strengthen authority, expertise, and trust"],
      ["Monitoring", "Tracking mentions in ChatGPT, Gemini, and Perplexity"],
    ],
    ctaButtonText: "Free GEO audit",
    ctaSecondaryText: "Book a session",
    urgencyMessage: "Pioneering service with limited spots",
    trustStat: "GEO pioneer in Spain",
  },
};

/* -------------------------------------------------------------------------- */
/*  Public API                                                                */
/* -------------------------------------------------------------------------- */

/**
 * Get all localized content templates for a service.
 * The returned object contains functions that accept city/province/ccaa strings.
 */
export function getServiceContent(
  serviceSlugEs: string,
  locale: Locale,
): ServiceContent {
  const contentMap = locale === "es" ? esContent : enContent;
  const content = contentMap[serviceSlugEs];

  if (!content) {
    throw new Error(
      `No content found for service "${serviceSlugEs}" in locale "${locale}"`,
    );
  }

  return content;
}

/**
 * Common section labels used across all geo landing pages.
 * Placeholders like {province}, {ccaa}, {city} should be replaced by the caller.
 */
export function getSectionLabels(locale: Locale) {
  return locale === "es"
    ? ({
        breadcrumbHome: "Inicio",
        otherCitiesProvince: "en {province}",
        otherCitiesCCAA: "en toda {ccaa}",
        otherServices: "Otros servicios en {city}",
        faqTitle: "Preguntas frecuentes",
        ctaButton: "Solicitar briefing gratuito",
        relatedCities: "Ciudades relacionadas",
      } as const)
    : ({
        breadcrumbHome: "Home",
        otherCitiesProvince: "in {province}",
        otherCitiesCCAA: "across {ccaa}",
        otherServices: "Other services in {city}",
        faqTitle: "Frequently asked questions",
        ctaButton: "Request free briefing",
        relatedCities: "Related cities",
      } as const);
}
