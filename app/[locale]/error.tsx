"use client";

import { useEffect } from "react";
import Link from "next/link";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        Error del sistema
      </p>
      <h1 className="mt-4 text-4xl font-black text-foreground sm:text-5xl">
        Algo salió mal
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        Se ha producido un error inesperado. Puedes intentar de nuevo o volver
        al inicio.
      </p>
      <div className="mt-8 flex gap-4">
        <button
          type="button"
          onClick={reset}
          className="rounded-lg border border-primary/30 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
        >
          Reintentar
        </button>
        <Link
          href="/"
          className="rounded-lg bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
