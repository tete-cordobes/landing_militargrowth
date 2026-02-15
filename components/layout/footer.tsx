import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

const SOCIAL_LINKS = [
  { icon: Linkedin, href: "https://es.linkedin.com/in/jose-gilarte-alvarez", label: "LinkedIn" },
  { icon: Mail, href: "mailto:jose@josegilarte.es", label: "Email" },
] as const;

const NAV_LINKS = [
  { href: "#operaciones", key: "services" },
  { href: "#misiones", key: "portfolio" },
  { href: "#inteligencia", key: "blog" },
  { href: "#centro-de-mando", key: "contact" },
] as const;

const TOP_CITIES = [
  { name: "Madrid", slug: "madrid" },
  { name: "Barcelona", slug: "barcelona" },
  { name: "Valencia", slug: "valencia" },
  { name: "Sevilla", slug: "sevilla" },
  { name: "Zaragoza", slug: "zaragoza" },
  { name: "Málaga", slug: "malaga" },
  { name: "Murcia", slug: "murcia" },
  { name: "Bilbao", slug: "bilbao" },
] as const;

const SERVICE_CATEGORIES = {
  es: [
    { name: "Agencia SEO", slug: "agencia-seo" },
    { name: "Posicionamiento Web", slug: "posicionamiento-web" },
    { name: "Consultor SEO", slug: "consultor-seo" },
    { name: "Experto SEO", slug: "experto-seo" },
    { name: "Consultoría IA", slug: "consultoria-ia" },
    { name: "Automatización IA", slug: "automatizacion-ia" },
    { name: "Growth Marketing", slug: "growth-marketing" },
    { name: "Posicionamiento IA", slug: "posicionamiento-ia" },
  ],
  en: [
    { name: "SEO Agency", slug: "agencia-seo" },
    { name: "Web Positioning", slug: "posicionamiento-web" },
    { name: "SEO Consultant", slug: "consultor-seo" },
    { name: "SEO Expert", slug: "experto-seo" },
    { name: "AI Consulting", slug: "consultoria-ia" },
    { name: "AI Automation", slug: "automatizacion-ia" },
    { name: "Growth Marketing", slug: "growth-marketing" },
    { name: "AI Search SEO", slug: "posicionamiento-ia" },
  ],
} as const;

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const locale = useLocale();
  const categories = SERVICE_CATEGORIES[locale as "es" | "en"] ?? SERVICE_CATEGORIES.es;

  return (
    <footer className="border-t border-border bg-background">
      <div className="h-0.5 bg-gradient-gold" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand Column */}
          <div>
            <Image
              src="/logo.svg"
              alt="Jose Gilarte"
              width={500}
              height={500}
              className="h-12 w-auto"
            />
            <p className="mt-3 text-sm text-muted-foreground">
              {t("tagline")}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {t("base")}
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="stencil-text mb-4 text-sm text-muted-foreground">
              Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <a
                    href={`/${locale}${link.href}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {tNav(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="stencil-text mb-4 text-sm text-muted-foreground">
              Social
            </h3>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-muted-foreground transition-all hover:scale-110 hover:text-primary hover:glow-gold"
                  aria-label={social.label}
                >
                  <social.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Geo Cities by Service */}
        <div className="mt-10 border-t border-border pt-8">
          <h3 className="stencil-text mb-6 text-sm text-muted-foreground">
            {locale === "es" ? "Servicios por ciudad" : "Services by city"}
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <div key={cat.slug}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary/70">
                  {cat.name}
                </p>
                <ul className="space-y-1">
                  {TOP_CITIES.map((city) => (
                    <li key={city.slug}>
                      <a
                        href={`/${locale}/${cat.slug}-${city.slug}`}
                        className="text-xs text-muted-foreground transition-colors hover:text-primary"
                      >
                        {cat.name} {city.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Jose Gilarte. {t("rights")}
          </p>
          <div className="flex gap-4">
            <a
              href={`/${locale}/privacidad`}
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              {t("privacy")}
            </a>
            <a
              href={`/${locale}/aviso-legal`}
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              {t("legal")}
            </a>
            <a
              href={`/${locale}/cookies`}
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              {t("cookies")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
