import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Política de Cookies",
  robots: { index: false, follow: false },
};

export default async function CookiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === "es";

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-32 sm:px-6">
        <h1 className="text-3xl font-black text-foreground">
          {isEs ? "Política de Cookies" : "Cookie Policy"}
        </h1>
        <div className="prose-military mt-8 space-y-6 text-sm text-muted-foreground">
          {isEs ? (
            <>
              <section>
                <h2 className="text-lg font-semibold text-foreground">1. ¿Qué son las cookies?</h2>
                <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo al visitar un sitio web. Permiten recordar preferencias y mejorar la experiencia de navegación.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-foreground">2. Cookies que utilizamos</h2>
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-2 pr-4 font-semibold text-foreground">Cookie</th>
                      <th className="py-2 pr-4 font-semibold text-foreground">Tipo</th>
                      <th className="py-2 pr-4 font-semibold text-foreground">Duración</th>
                      <th className="py-2 font-semibold text-foreground">Finalidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">cookie_consent</td>
                      <td className="py-2 pr-4">Técnica</td>
                      <td className="py-2 pr-4">365 días</td>
                      <td className="py-2">Recordar tu preferencia de cookies</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">va_*</td>
                      <td className="py-2 pr-4">Analítica</td>
                      <td className="py-2 pr-4">Sesión</td>
                      <td className="py-2">Vercel Analytics: estadísticas anónimas de uso</td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-foreground">3. Base legal</h2>
                <p>Las cookies técnicas son necesarias para el funcionamiento del sitio (Art. 22.2 LSSI-CE). Las cookies analíticas requieren tu consentimiento previo conforme al RGPD y la Directiva ePrivacy.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-foreground">4. Gestión de cookies</h2>
                <p>Puedes aceptar o rechazar las cookies analíticas a través del banner que aparece en tu primera visita. También puedes configurar tu navegador para bloquear o eliminar cookies.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-foreground">5. Más información</h2>
                <p>Para más información sobre el tratamiento de tus datos, consulta nuestra <a href="/es/privacidad" className="text-primary hover:underline">Política de Privacidad</a>.</p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="text-lg font-semibold text-foreground">1. What are cookies?</h2>
                <p>Cookies are small text files stored on your device when you visit a website. They help remember preferences and improve your browsing experience.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-foreground">2. Cookies we use</h2>
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-2 pr-4 font-semibold text-foreground">Cookie</th>
                      <th className="py-2 pr-4 font-semibold text-foreground">Type</th>
                      <th className="py-2 pr-4 font-semibold text-foreground">Duration</th>
                      <th className="py-2 font-semibold text-foreground">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">cookie_consent</td>
                      <td className="py-2 pr-4">Technical</td>
                      <td className="py-2 pr-4">365 days</td>
                      <td className="py-2">Remember your cookie preference</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">va_*</td>
                      <td className="py-2 pr-4">Analytics</td>
                      <td className="py-2 pr-4">Session</td>
                      <td className="py-2">Vercel Analytics: anonymous usage statistics</td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-foreground">3. Legal basis</h2>
                <p>Technical cookies are necessary for the website to function (Art. 22.2 LSSI-CE). Analytics cookies require your prior consent under GDPR and the ePrivacy Directive.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-foreground">4. Cookie management</h2>
                <p>You can accept or reject analytics cookies through the banner shown on your first visit. You can also configure your browser to block or delete cookies.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-foreground">5. More information</h2>
                <p>For more information about data processing, see our <a href="/en/privacidad" className="text-primary hover:underline">Privacy Policy</a>.</p>
              </section>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
