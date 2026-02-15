"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "@/components/layout/language-switcher";

const NAV_LINKS = [
  { href: "#operaciones", key: "services" },
  { href: "#misiones", key: "portfolio" },
  { href: "#inteligencia", key: "blog" },
  { href: "#centro-de-mando", key: "contact" },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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
        <a href="#" className="transition-opacity hover:opacity-80">
          <Image
            src="/logo.svg"
            alt="Jose Gilarte"
            width={500}
            height={500}
            className="h-24 w-auto"
            priority
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {t(link.key)}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <a
            href="#centro-de-mando"
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

      {isMobileOpen && (
        <div className="border-b border-border bg-card md:hidden">
          <div className="flex flex-col gap-4 px-4 py-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setIsMobileOpen(false)}
              >
                {t(link.key)}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <LanguageSwitcher />
              <a
                href="#centro-de-mando"
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
