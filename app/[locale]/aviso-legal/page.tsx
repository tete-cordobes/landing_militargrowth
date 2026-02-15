import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Aviso Legal",
  robots: { index: false, follow: false },
};

export default async function AvisoLegalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === "es";

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-32 sm:px-6">
        <h1 className="text-3xl font-black text-foreground">
          {isEs ? "Aviso Legal" : "Legal Notice"}
        </h1>
        <div className="prose-military mt-8 space-y-6 text-sm text-muted-foreground">
          {isEs ? (
            <>
              <section>
                <h2 className="text-lg font-semibold text-foreground">1. Datos identificativos</h2>
                <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Titular:</strong> Jose Gilarte Álvarez</li>
                  <li><strong>Domicilio:</strong> Sevilla, España</li>
                  <li><strong>Email:</strong> jose@josegilarte.es</li>
                  <li><strong>Actividad:</strong> Servicios de consultoría SEO, marketing digital e inteligencia artificial</li>
                  <li><strong>Sitio web:</strong> https://josegilarte.es</li>
                </ul>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-foreground">2. Objeto</h2>
                <p>El presente aviso legal regula el uso del sitio web josegilarte.es. El acceso al sitio web atribuye la condición de usuario e implica la aceptación plena de las presentes disposiciones.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-foreground">3. Propiedad intelectual e industrial</h2>
                <p>Todos los contenidos del sitio web (textos, imágenes, diseño gráfico, código fuente, logos, marcas) son propiedad de Jose Gilarte Álvarez o de terceros que han autorizado su uso, y están protegidos por las leyes de propiedad intelectual e industrial.</p>
                <p>Queda prohibida la reproducción, distribución, comunicación pública o transformación de los contenidos sin autorización expresa.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-foreground">4. Responsabilidad</h2>
                <p>Jose Gilarte Álvarez no se responsabiliza de los daños que pudieran derivarse del uso del sitio web, ni de la información obtenida a través del mismo. No garantiza la ausencia de virus o elementos que pudieran causar alteraciones en el sistema informático del usuario.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-foreground">5. Enlaces externos</h2>
                <p>El sitio web puede contener enlaces a páginas de terceros. Jose Gilarte Álvarez no asume responsabilidad por los contenidos, políticas de privacidad o prácticas de sitios de terceros.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-foreground">6. Legislación aplicable</h2>
                <p>Las presentes condiciones se rigen por la legislación española. Para cualquier controversia, las partes se someten a los Juzgados y Tribunales de Sevilla.</p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="text-lg font-semibold text-foreground">1. Identification</h2>
                <p>In compliance with Article 10 of Law 34/2002 (LSSI-CE):</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Owner:</strong> Jose Gilarte Álvarez</li>
                  <li><strong>Address:</strong> Seville, Spain</li>
                  <li><strong>Email:</strong> jose@josegilarte.es</li>
                  <li><strong>Activity:</strong> SEO consulting, digital marketing and artificial intelligence services</li>
                  <li><strong>Website:</strong> https://josegilarte.es</li>
                </ul>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-foreground">2. Purpose</h2>
                <p>This legal notice governs the use of josegilarte.es. Accessing this website implies full acceptance of these provisions.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-foreground">3. Intellectual property</h2>
                <p>All website content (texts, images, graphic design, source code, logos, trademarks) is owned by Jose Gilarte Álvarez or authorized third parties and is protected by intellectual and industrial property laws.</p>
                <p>Reproduction, distribution, public communication or transformation of content without express authorization is prohibited.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-foreground">4. Liability</h2>
                <p>Jose Gilarte Álvarez is not liable for damages arising from the use of this website. No guarantee is made regarding the absence of viruses or harmful elements.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-foreground">5. External links</h2>
                <p>This website may contain links to third-party pages. Jose Gilarte Álvarez assumes no responsibility for third-party content or privacy practices.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-foreground">6. Applicable law</h2>
                <p>These conditions are governed by Spanish law. Any disputes shall be submitted to the Courts of Seville.</p>
              </section>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
