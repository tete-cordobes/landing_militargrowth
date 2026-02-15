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

export default function HomePage() {
  return (
    <>
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
