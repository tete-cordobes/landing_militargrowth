"use client";

import { useState, useEffect } from "react";
import { useLocale } from "next-intl";

const LABELS = {
  es: {
    message:
      "Utilizamos cookies analíticas para mejorar tu experiencia. Puedes aceptar o rechazar su uso.",
    accept: "Aceptar",
    reject: "Rechazar",
    more: "Más info",
  },
  en: {
    message:
      "We use analytics cookies to improve your experience. You can accept or reject their use.",
    accept: "Accept",
    reject: "Reject",
    more: "More info",
  },
} as const;

export function CookieBanner() {
  const locale = useLocale();
  const [visible, setVisible] = useState(false);
  const labels = LABELS[locale as "es" | "en"] ?? LABELS.es;

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const handleChoice = (choice: "accepted" | "rejected") => {
    localStorage.setItem("cookie_consent", choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-border bg-card/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-muted-foreground">
          {labels.message}{" "}
          <a
            href={`/${locale}/cookies`}
            className="text-primary underline-offset-2 hover:underline"
          >
            {labels.more}
          </a>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => handleChoice("rejected")}
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {labels.reject}
          </button>
          <button
            type="button"
            onClick={() => handleChoice("accepted")}
            className="rounded-lg bg-gradient-gold px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            {labels.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
