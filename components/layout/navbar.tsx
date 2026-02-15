"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { LanguageSwitcher } from "@/components/layout/language-switcher";

const NAV_LINKS = [
  { href: "#operaciones", key: "services" },
  { href: "#misiones", key: "portfolio" },
  { href: "#inteligencia", key: "blog" },
  { href: "#centro-de-mando", key: "contact" },
] as const;

const SERVICE_TYPES = {
  es: [
    { slug: "agencia-seo-cordoba", label: "Agencia SEO" },
    { slug: "posicionamiento-web-cordoba", label: "Posicionamiento Web" },
    { slug: "consultor-seo-cordoba", label: "Consultor SEO" },
    { slug: "experto-seo-cordoba", label: "Experto SEO" },
    { slug: "consultoria-ia-cordoba", label: "Consultoría IA" },
    { slug: "automatizacion-ia-cordoba", label: "Automatización IA" },
    { slug: "growth-marketing-cordoba", label: "Growth Marketing" },
    { slug: "posicionamiento-ia-cordoba", label: "Posicionamiento IA" },
  ],
  en: [
    { slug: "agencia-seo-cordoba", label: "SEO Agency" },
    { slug: "posicionamiento-web-cordoba", label: "Web Positioning" },
    { slug: "consultor-seo-cordoba", label: "SEO Consultant" },
    { slug: "experto-seo-cordoba", label: "SEO Expert" },
    { slug: "consultoria-ia-cordoba", label: "AI Consulting" },
    { slug: "automatizacion-ia-cordoba", label: "AI Automation" },
    { slug: "growth-marketing-cordoba", label: "Growth Marketing" },
    { slug: "posicionamiento-ia-cordoba", label: "AI Search SEO" },
  ],
} as const;

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = SERVICE_TYPES[locale as "es" | "en"] ?? SERVICE_TYPES.es;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "glass-military-strong border-b border-border/50 shadow-sm" : ""}`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href={`/${locale}`} className="transition-opacity hover:opacity-80">
          <Image
            src="/logo.svg"
            alt="Jose Gilarte"
            width={500}
            height={500}
            className="h-24 w-auto"
            priority
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={`/${locale}${link.href}`}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {t(link.key)}
            </a>
          ))}

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              {locale === "es" ? "Servicios" : "Services"}
              <ChevronDown className={`size-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>

            {isServicesOpen && (
              <div className="absolute top-full right-0 pt-2">
                <div className="w-56 rounded-xl border-military bg-card py-2 shadow-lg">
                {services.map((svc) => (
                  <a
                    key={svc.slug}
                    href={`/${locale}/${svc.slug}`}
                    className="block px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    {svc.label}
                  </a>
                ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <a
            href={`/${locale}#centro-de-mando`}
            className="inline-flex h-9 items-center justify-center rounded-md border-gold px-4 text-sm font-medium text-primary transition-all hover:bg-gradient-gold hover:text-primary-foreground"
          >
            {t("cta")}
          </a>
        </div>

        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="border-b border-border bg-card md:hidden">
          <div className="flex flex-col gap-4 px-4 py-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={`/${locale}${link.href}`}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setIsMobileOpen(false)}
              >
                {t(link.key)}
              </a>
            ))}

            {/* Mobile services section */}
            <div className="border-t border-border/30 pt-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary/60">
                {locale === "es" ? "Servicios" : "Services"}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {services.map((svc) => (
                  <a
                    key={svc.slug}
                    href={`/${locale}/${svc.slug}`}
                    className="rounded-lg border-military bg-background px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {svc.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <LanguageSwitcher />
              <a
                href={`/${locale}#centro-de-mando`}
                className="inline-flex h-9 flex-1 items-center justify-center rounded-md border-gold px-4 text-sm font-medium text-primary transition-all hover:bg-gradient-gold hover:text-primary-foreground"
              >
                {t("cta")}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
