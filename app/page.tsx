import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { TrustBar } from "@/components/TrustBar";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function HomePage() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <TrustBar />
    </main>
  );
}
