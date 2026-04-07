import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { TrustMarkers } from "@/components/sections/trust-markers";
import { Services } from "@/components/sections/services";
import { AboutMe } from "@/components/sections/about-me";
import { Portfolio } from "@/components/sections/portfolio";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactForm } from "@/components/sections/contact-form";
import { Footer } from "@/components/layout/footer";

const HOME_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://josegilarte.es/#website",
      url: "https://josegilarte.es",
      name: "Jose Gilarte",
      description:
        "Consultor SEO en Córdoba con 8+ años de experiencia. Google Developer Expert y Microsoft MVP.",
      publisher: { "@id": "https://josegilarte.es/#person" },
      inLanguage: "es-ES",
    },
    {
      "@type": "Person",
      "@id": "https://josegilarte.es/#person",
      name: "Jose Gilarte",
      alternateName: "Jose Gilarte Alvarez",
      jobTitle: "Consultor SEO · Google Developer Expert · Microsoft MVP",
      description:
        "Consultor SEO en Córdoba con más de 8 años de experiencia. Google Developer Expert (GDE) y Microsoft MVP. Especialista en posicionamiento web, SEO local, marketing digital e inteligencia artificial aplicada al SEO. Profesor en ENAE Business School y Data SEO Academy.",
      url: "https://josegilarte.es",
      image: "https://josegilarte.es/images/jose-gilarte.jpg",
      telephone: "+34619955181",
      email: "jose@josegilarte.es",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Córdoba",
        addressRegion: "Andalucía",
        addressCountry: "ES",
      },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Data SEO Academy",
          url: "https://dataseoacademy.com",
        },
        {
          "@type": "EducationalOrganization",
          name: "ENAE Business School",
          url: "https://www.enae.es",
        },
      ],
      memberOf: [
        {
          "@type": "Organization",
          name: "Data SEO Academy",
          url: "https://dataseoacademy.com",
          description: "Co-Founder & SEO Teacher — Python aplicado a SEO",
        },
      ],
      hasOccupation: [
        {
          "@type": "Occupation",
          name: "Consultor SEO",
          occupationalCategory: "Marketing Digital",
        },
        {
          "@type": "Occupation",
          name: "Profesor de SEO y Automatización con IA",
          description:
            "Profesor en ENAE Business School y Data SEO Academy. Python aplicado a SEO, automatizaciones con n8n, Make, Claude Code y Flowise.",
        },
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "Google Developer Expert (GDE)",
          recognizedBy: {
            "@type": "Organization",
            name: "Google",
            url: "https://developers.google.com/community/experts",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "Microsoft Most Valuable Professional (MVP)",
          recognizedBy: {
            "@type": "Organization",
            name: "Microsoft",
            url: "https://mvp.microsoft.com",
          },
        },
      ],
      knowsAbout: [
        "SEO",
        "Posicionamiento Web",
        "SEO Local",
        "SEO Técnico",
        "Marketing Digital",
        "Google Search Console",
        "Inteligencia Artificial",
        "Automatización con IA",
        "Growth Hacking",
        "Python para SEO",
        "Data Analytics para SEO",
        "n8n",
        "Make",
        "Claude Code",
        "Flowise",
        "Next.js",
        "Martech",
        "CRO",
      ],
      sameAs: [
        "https://es.linkedin.com/in/jose-gilarte-alvarez",
        "https://x.com/Jose_Gilartete",
        "https://www.youtube.com/@JoseGilarte",
        "https://dataseoacademy.com/nosotros/",
        "https://www.enae.es/congreso-marketing-digital-meeting-enae/",
        "https://www.youtube.com/watch?v=E69WnobrFao",
        "https://www.youtube.com/watch?v=ZJNjz95ZXqo",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://josegilarte.es/#localbusiness",
      name: "Jose Gilarte — Consultor SEO",
      description:
        "Consultor SEO en Córdoba con 8+ años de experiencia. Google Developer Expert y Microsoft MVP. Posicionamiento web, SEO local e inteligencia artificial para empresas.",
      url: "https://josegilarte.es",
      telephone: "+34619955181",
      email: "jose@josegilarte.es",
      priceRange: "€€€",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Córdoba",
        addressRegion: "Andalucía",
        addressCountry: "ES",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 37.8882,
        longitude: -4.7794,
      },
      areaServed: [
        { "@type": "City", name: "Córdoba" },
        { "@type": "AdministrativeArea", name: "Andalucía" },
        { "@type": "Country", name: "España" },
      ],
      founder: { "@id": "https://josegilarte.es/#person" },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "47",
        bestRating: "5",
        worstRating: "1",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOME_SCHEMA) }}
      />
      <Navbar />
      <main>
        <Hero />
        <TrustMarkers />
        <Services />
        <AboutMe />
        <Portfolio />
        <CtaBanner />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
