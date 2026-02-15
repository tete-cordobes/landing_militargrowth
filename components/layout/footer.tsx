import { useTranslations } from "next-intl";
import Image from "next/image";
import { Linkedin, Instagram, Twitter, Mail } from "lucide-react";

const SOCIAL_LINKS = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:hola@josegilarte.es", label: "Email" },
] as const;

const NAV_LINKS = [
  { href: "#operaciones", key: "services" },
  { href: "#misiones", key: "portfolio" },
  { href: "#inteligencia", key: "blog" },
  { href: "#centro-de-mando", key: "contact" },
] as const;

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

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
                    href={link.href}
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

        {/* Bottom Row */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Jose Gilarte. {t("rights")}
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              {t("privacy")}
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              {t("legal")}
            </a>
            <a
              href="#"
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
