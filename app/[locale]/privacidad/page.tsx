import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  robots: { index: false, follow: false },
};

export default async function PrivacidadPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === "es";

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-32 sm:px-6">
        <h1 className="text-3xl font-black text-foreground">
          {isEs ? "Política de Privacidad" : "Privacy Policy"}
        </h1>
        <div className="prose-military mt-8 space-y-6 text-sm text-muted-foreground">
          {isEs ? (
            <>
              <section>
                <h2 className="text-lg font-semibold text-foreground">1. Responsable del tratamiento</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Responsable:</strong> Jose Gilarte Álvarez</li>
                  <li><strong>Email:</strong> jose@josegilarte.es</li>
                  <li><strong>Finalidad:</strong> Gestión de consultas y prestación de servicios profesionales</li>
                </ul>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-foreground">2. Datos que recopilamos</h2>
                <p>A través del formulario de contacto recopilamos: nombre, email y, opcionalmente, teléfono y mensaje. No recopilamos datos sensibles.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-foreground">3. Finalidad y base legal</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Finalidad:</strong> Responder consultas y ofrecer presupuestos de servicios</li>
                  <li><strong>Base legal:</strong> Consentimiento del interesado (Art. 6.1.a RGPD) y ejecución de medidas precontractuales (Art. 6.1.b RGPD)</li>
                  <li><strong>Conservación:</strong> Los datos se conservarán mientras exista interés legítimo o durante el plazo legal aplicable</li>
                </ul>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-foreground">4. Destinatarios</h2>
                <p>No se cederán datos a terceros salvo obligación legal. Utilizamos Vercel como proveedor de hosting (datos tratados conforme a su política de privacidad y las cláusulas contractuales tipo de la UE).</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-foreground">5. Derechos del usuario</h2>
                <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad enviando un email a jose@josegilarte.es.</p>
                <p>También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aepd.es</a>.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-foreground">6. Seguridad</h2>
                <p>Aplicamos medidas técnicas y organizativas para proteger tus datos: comunicaciones cifradas (HTTPS), acceso restringido y proveedores con certificaciones de seguridad.</p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="text-lg font-semibold text-foreground">1. Data controller</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Controller:</strong> Jose Gilarte Álvarez</li>
                  <li><strong>Email:</strong> jose@josegilarte.es</li>
                  <li><strong>Purpose:</strong> Managing inquiries and providing professional services</li>
                </ul>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-foreground">2. Data we collect</h2>
                <p>Through our contact form we collect: name, email and optionally phone number and message. We do not collect sensitive data.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-foreground">3. Purpose and legal basis</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Purpose:</strong> Responding to inquiries and providing service quotes</li>
                  <li><strong>Legal basis:</strong> User consent (Art. 6.1.a GDPR) and pre-contractual measures (Art. 6.1.b GDPR)</li>
                  <li><strong>Retention:</strong> Data will be kept while there is legitimate interest or during the applicable legal period</li>
                </ul>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-foreground">4. Recipients</h2>
                <p>Data will not be shared with third parties except as required by law. We use Vercel as hosting provider (data processed in accordance with their privacy policy and EU standard contractual clauses).</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-foreground">5. User rights</h2>
                <p>You can exercise your rights of access, rectification, erasure, objection, restriction and portability by emailing jose@josegilarte.es.</p>
                <p>You also have the right to lodge a complaint with the Spanish Data Protection Agency (AEPD) at <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aepd.es</a>.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-foreground">6. Security</h2>
                <p>We apply technical and organizational measures to protect your data: encrypted communications (HTTPS), restricted access and security-certified providers.</p>
              </section>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
