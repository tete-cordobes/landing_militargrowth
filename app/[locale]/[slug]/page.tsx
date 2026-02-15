import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  geoUrls,
  parseGeoSlug,
  getRelatedCitiesInProvince,
  getRelatedCitiesInCCAA,
  getOtherServicesForCity,
  SERVICE_NAMES,
} from "@/lib/geo";
import { getServiceContent, getSectionLabels } from "@/lib/geo/content";
import { generateGeoSchema } from "@/lib/geo/seo";
import { LeadForm } from "@/components/geo/lead-form";

export const dynamicParams = false;

type Props = { params: Promise<{ locale: string; slug: string }> };

/* -------------------------------------------------------------------------- */
/*  Static params generation                                                  */
/* -------------------------------------------------------------------------- */

export function generateStaticParams() {
  const seen = new Set<string>();
  return geoUrls
    .filter((u) => {
      const slug = u.urlEs.slice(1);
      if (seen.has(slug)) return false;
      seen.add(slug);
      return true;
    })
    .map((u) => ({ slug: u.urlEs.slice(1) }));
}

/* -------------------------------------------------------------------------- */
/*  Dynamic metadata                                                          */
/* -------------------------------------------------------------------------- */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const parsed = parseGeoSlug(slug, "es");

  if (!parsed) {
    return { title: "Not Found" };
  }

  const { service, city } = parsed;
  const content = getServiceContent(service.slugEs, locale as "es" | "en");

  const title = content.title(city.name);
  const description = content.metaDescription(
    city.name,
    city.provincia,
    city.ccaa,
  );
  const canonical = `https://josegilarte.es/${locale}/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        es: `/es/${slug}`,
        en: `/en/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
      siteName: "Jose Gilarte",
    },
    robots: { index: true, follow: true },
  };
}

/* -------------------------------------------------------------------------- */
/*  Trust bar labels                                                          */
/* -------------------------------------------------------------------------- */

const TRUST_STATS = {
  es: [
    { value: "+8", label: "años" },
    { value: "+150", label: "proyectos" },
    { value: "+50", label: "clientes" },
    { value: "Google", label: "Partner" },
  ],
  en: [
    { value: "8+", label: "years" },
    { value: "150+", label: "projects" },
    { value: "50+", label: "clients" },
    { value: "Google", label: "Partner" },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/*  Social proof data                                                         */
/* -------------------------------------------------------------------------- */

const TESTIMONIALS = {
  es: [
    {
      quote: "En 6 meses duplicamos el tráfico orgánico. Profesionalidad y resultados reales.",
      name: "Carlos M.",
      company: "CEO, TechSolutions",
      badge: "+180% tráfico",
    },
    {
      quote: "La mejor inversión en marketing digital. Comunicación directa y resultados medibles.",
      name: "Laura S.",
      company: "Directora, Clínica Dental",
      badge: "+120% leads",
    },
  ],
  en: [
    {
      quote: "In 6 months we doubled organic traffic. Professionalism and real results.",
      name: "Carlos M.",
      company: "CEO, TechSolutions",
      badge: "+180% traffic",
    },
    {
      quote: "The best investment in digital marketing. Direct communication and measurable results.",
      name: "Laura S.",
      company: "Director, Dental Clinic",
      badge: "+120% leads",
    },
  ],
} as const;

const PROCESS_LABEL = {
  es: "Proceso de trabajo",
  en: "Work process",
} as const;

/* -------------------------------------------------------------------------- */
/*  Page component (Server Component)                                         */
/* -------------------------------------------------------------------------- */

export default async function GeoLandingPage({ params }: Props) {
  const { locale, slug } = await params;
  const parsed = parseGeoSlug(slug, "es");

  if (!parsed) {
    notFound();
  }

  const { service, city } = parsed;
  const loc = locale as "es" | "en";
  const content = getServiceContent(service.slugEs, loc);
  const labels = getSectionLabels(loc);

  const provinceCities = getRelatedCitiesInProvince(
    city.provincia,
    service.slugEs,
    city.slug,
  );
  const ccaaCities = getRelatedCitiesInCCAA(
    city.ccaa,
    service.slugEs,
    city.provincia,
  );
  const otherServices = getOtherServicesForCity(city.slug, service.slugEs);

  const faqs = content.faqs(city.name, city.provincia);

  const serviceNameLocalized =
    SERVICE_NAMES[service.slugEs as keyof typeof SERVICE_NAMES]?.[loc] ??
    service.slugEs;

  const jsonLd = generateGeoSchema({
    service,
    city,
    locale: loc,
    content: {
      title: content.title(city.name),
      description: content.metaDescription(city.name, city.provincia, city.ccaa),
      h1: content.h1(city.name),
      faqs,
    },
  });

  const trustStats = TRUST_STATS[loc];
  const testimonials = TESTIMONIALS[loc];

  return (
    <div className="min-h-screen bg-background">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main>
        {/* ================================================================ */}
        {/*  1. Hero + Inline Form                                          */}
        {/* ================================================================ */}
        <section className="relative overflow-hidden py-20 lg:py-28">
          <div className="bg-gradient-military absolute inset-0" />
          <div className="noise-texture absolute inset-0 opacity-[0.04] pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol
                className="flex items-center gap-2 text-sm text-muted-foreground"
                itemScope
                itemType="https://schema.org/BreadcrumbList"
              >
                <li
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  <a
                    href={`/${locale}`}
                    className="hover:text-primary transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">{labels.breadcrumbHome}</span>
                  </a>
                  <meta itemProp="position" content="1" />
                </li>
                <li className="text-muted-foreground/50">/</li>
                <li
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  <span itemProp="name" className="text-muted-foreground">
                    {city.ccaa}
                  </span>
                  <meta itemProp="position" content="2" />
                </li>
                <li className="text-muted-foreground/50">/</li>
                <li
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  <span itemProp="name" className="text-muted-foreground">
                    {city.provincia}
                  </span>
                  <meta itemProp="position" content="3" />
                </li>
                <li className="text-muted-foreground/50">/</li>
                <li
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  <span itemProp="name" className="text-primary font-medium">
                    {content.h1(city.name)}
                  </span>
                  <meta itemProp="position" content="4" />
                </li>
              </ol>
            </nav>

            {/* Hero: 2 columns */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              {/* Text - 60% */}
              <div className="lg:col-span-3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  {content.h1(city.name)}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {content.intro(city.name, city.provincia, city.ccaa)}
                </p>
              </div>

              {/* Form compact - 40% */}
              <div className="lg:col-span-2">
                <LeadForm
                  variant="compact"
                  service={serviceNameLocalized}
                  city={city.name}
                  locale={loc}
                  ctaButtonText={content.ctaButtonText}
                  ctaSecondaryText={content.ctaSecondaryText}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  2. Trust Bar                                                    */}
        {/* ================================================================ */}
        <section className="border-y border-border/30 bg-card/50 py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {trustStats.map((stat) => (
                <div key={stat.label}>
                  <span className="block text-2xl md:text-3xl font-bold text-primary">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  3. Process Steps                                                */}
        {/* ================================================================ */}
        <section className="py-20 bg-gradient-military-section">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              {PROCESS_LABEL[loc]}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.processSteps.map(([title, desc], i) => (
                <div key={i} className="relative p-6 rounded-xl border-military bg-card">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-lg font-bold text-primary">{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  4. Why Choose Us                                                */}
        {/* ================================================================ */}
        <section className="py-20 bg-gradient-military-section-alt">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              {content.whyTitle(city.name)}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.whyPoints(city.name).map((point, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-6 rounded-xl border-military bg-card"
                >
                  <div className="shrink-0 size-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      className="size-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  5. Social Proof                                                 */}
        {/* ================================================================ */}
        <section className="py-16 bg-gradient-military-section">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="rounded-xl border-military bg-card p-6"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className="size-4 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {t.badge}
                    </span>
                  </div>
                  <blockquote className="mb-4 text-muted-foreground leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  6. FAQ Section                                                  */}
        {/* ================================================================ */}
        <section className="py-20 bg-gradient-military-section-alt">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              {labels.faqTitle}
            </h2>

            <div className="space-y-4 max-w-4xl">
              {faqs.map(([question, answer], i) => (
                <details
                  key={i}
                  className="group rounded-xl border-military bg-card overflow-hidden"
                  {...(i === 0 ? { open: true } : {})}
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-muted/30 transition-colors">
                    <h3 className="text-lg font-semibold text-foreground pr-4">
                      {question}
                    </h3>
                    <svg
                      className="size-5 text-primary shrink-0 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  7. CTA + Full Form + Urgency                                   */}
        {/* ================================================================ */}
        <section className="py-20 bg-gradient-military-section">
          <div className="mx-auto max-w-4xl px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {content.ctaTitle(city.name)}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {content.ctaDescription(city.name)}
              </p>
            </div>

            <div className="mx-auto max-w-lg">
              <LeadForm
                variant="full"
                service={serviceNameLocalized}
                city={city.name}
                locale={loc}
                ctaButtonText={content.ctaButtonText}
                ctaSecondaryText={content.ctaSecondaryText}
              />
              <p className="mt-4 text-center text-sm font-medium text-primary/70">
                {content.urgencyMessage}
              </p>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  8. Internal Links: Other Cities in Province                     */}
        {/* ================================================================ */}
        {provinceCities.length > 0 && (
          <section className="py-16 bg-gradient-military-section-alt">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                {serviceNameLocalized}{" "}
                {labels.otherCitiesProvince.replace(
                  "{province}",
                  city.provincia,
                )}
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {provinceCities.map((related) => (
                  <a
                    key={related.slug}
                    href={`/${locale}${related.url}`}
                    className="rounded-lg border-military bg-card px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:border-gold transition-all text-center"
                  >
                    {related.name}
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ================================================================ */}
        {/*  9. Internal Links: Same Service in CCAA                         */}
        {/* ================================================================ */}
        {ccaaCities.length > 0 && (
          <section className="py-16 bg-gradient-military-section">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                {serviceNameLocalized}{" "}
                {labels.otherCitiesCCAA.replace("{ccaa}", city.ccaa)}
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {ccaaCities.map((related) => (
                  <a
                    key={related.slug}
                    href={`/${locale}${related.url}`}
                    className="rounded-lg border-military bg-card px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:border-gold transition-all"
                  >
                    <span className="block font-medium">{related.name}</span>
                    <span className="text-xs text-muted-foreground/60">
                      {related.province}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ================================================================ */}
        {/*  10. Internal Links: Other Services in City                      */}
        {/* ================================================================ */}
        {otherServices.length > 0 && (
          <section className="py-16 bg-gradient-military-section-alt">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                {labels.otherServices.replace("{city}", city.name)}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {otherServices.map((svc) => {
                  const svcNameLocalized =
                    SERVICE_NAMES[svc.slug as keyof typeof SERVICE_NAMES]?.[
                      loc
                    ] ?? svc.name;

                  return (
                    <a
                      key={svc.slug}
                      href={`/${locale}${svc.url}`}
                      className="group rounded-xl border-military bg-card p-6 hover:border-gold hover:glow-gold transition-all"
                    >
                      <span className="stencil-text text-xs text-primary/60 block mb-2">
                        {svc.pilar.toUpperCase()}
                      </span>
                      <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {svcNameLocalized}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
