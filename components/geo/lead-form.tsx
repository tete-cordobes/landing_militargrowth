"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

// --- Types ---

const VARIANT = {
  COMPACT: "compact",
  FULL: "full",
} as const;

type Variant = (typeof VARIANT)[keyof typeof VARIANT];

const LOCALE = {
  ES: "es",
  EN: "en",
} as const;

type Locale = (typeof LOCALE)[keyof typeof LOCALE];

const FORM_STATUS = {
  IDLE: "idle",
  SUBMITTING: "submitting",
  SUCCESS: "success",
  ERROR: "error",
} as const;

type FormStatus = (typeof FORM_STATUS)[keyof typeof FORM_STATUS];

type LeadFormProps = {
  variant: Variant;
  service: string;
  city: string;
  locale: Locale;
  ctaButtonText: string;
  ctaSecondaryText: string;
};

// --- Labels ---

const LABELS = {
  es: {
    name: "Nombre",
    email: "Email",
    phone: "Teléfono",
    message: "Mensaje",
    sending: "Enviando...",
    successTitle: "Mensaje enviado",
    successMessage: "Te contactaré en menos de 24h",
    errorMessage: "Hubo un error. Inténtalo de nuevo.",
  },
  en: {
    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    sending: "Sending...",
    successTitle: "Message sent",
    successMessage: "I'll get back to you within 24h",
    errorMessage: "Something went wrong. Please try again.",
  },
} as const;

// --- Component ---

export function LeadForm({
  variant,
  service,
  city,
  locale,
  ctaButtonText,
  ctaSecondaryText,
}: LeadFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>(FORM_STATUS.IDLE);

  const labels = LABELS[locale];
  const isCompact = variant === VARIANT.COMPACT;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(FORM_STATUS.SUBMITTING);

    const body = {
      name,
      email,
      phone,
      message: isCompact
        ? locale === LOCALE.ES
          ? `Solicitud desde landing: ${service} en ${city}`
          : `Request from landing: ${service} in ${city}`
        : message,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus(FORM_STATUS.SUCCESS);
    } catch {
      setStatus(FORM_STATUS.ERROR);
    }
  };

  if (status === FORM_STATUS.SUCCESS) {
    return (
      <div className="rounded-xl border-military bg-card p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
          <svg
            className="h-8 w-8 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-semibold text-foreground">
          {labels.successTitle}
        </h3>
        <p className="text-muted-foreground">{labels.successMessage}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border-military bg-card p-6 space-y-4"
    >
      {/* Name */}
      <div className="space-y-1.5">
        <label htmlFor="lead-name" className="text-sm font-semibold text-muted-foreground">
          {labels.name}
        </label>
        <input
          id="lead-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={labels.name}
          className="w-full rounded-xl border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
        />
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <label htmlFor="lead-email" className="text-sm font-semibold text-muted-foreground">
          {labels.email}
        </label>
        <input
          id="lead-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={labels.email}
          className="w-full rounded-xl border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
        />
      </div>

      {/* Phone */}
      <div className="space-y-1.5">
        <label htmlFor="lead-phone" className="text-sm font-semibold text-muted-foreground">
          {labels.phone}
        </label>
        <input
          id="lead-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={labels.phone}
          className="w-full rounded-xl border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
        />
      </div>

      {/* Message (full variant only) */}
      {!isCompact && (
        <div className="space-y-1.5">
          <label htmlFor="lead-message" className="text-sm font-semibold text-muted-foreground">
            {labels.message}
          </label>
          <textarea
            id="lead-message"
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={labels.message}
            className="w-full rounded-xl border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors resize-none"
          />
        </div>
      )}

      {/* Error message */}
      {status === FORM_STATUS.ERROR && (
        <p className="text-sm text-red-400">{labels.errorMessage}</p>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={status === FORM_STATUS.SUBMITTING}
        className="w-full rounded-xl bg-gradient-gold py-4 font-semibold text-primary-foreground hover:scale-[1.02] transition-transform glow-gold disabled:opacity-50"
      >
        {status === FORM_STATUS.SUBMITTING ? labels.sending : ctaButtonText}
      </button>

      {/* Secondary CTA */}
      <Link
        href={`/${locale}#centro-de-mando`}
        className="block w-full rounded-xl border border-primary/30 py-3 text-primary font-medium hover:bg-primary/10 transition-colors text-center"
      >
        {ctaSecondaryText}
      </Link>
    </form>
  );
}
