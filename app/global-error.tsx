"use client";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: Props) {
  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          background: "#0a0a0a",
          color: "#fafafa",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            padding: "1.5rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#d4a843",
            }}
          >
            Error crítico
          </p>
          <h1
            style={{
              marginTop: "1rem",
              fontSize: "2.5rem",
              fontWeight: 900,
            }}
          >
            Algo salió mal
          </h1>
          <p
            style={{
              marginTop: "1rem",
              maxWidth: "28rem",
              color: "#a1a1aa",
            }}
          >
            Se ha producido un error crítico. Por favor, recarga la página.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: "2rem",
              padding: "0.75rem 1.5rem",
              border: "1px solid rgba(212,168,67,0.3)",
              background: "rgba(212,168,67,0.1)",
              color: "#d4a843",
              borderRadius: "0.5rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Recargar página
          </button>
        </div>
      </body>
    </html>
  );
}
