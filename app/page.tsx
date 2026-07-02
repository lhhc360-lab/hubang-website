import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { AiCapabilities } from "@/components/ai-capabilities";
import { Solutions } from "@/components/solutions";
import { Cases } from "@/components/cases";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <AiCapabilities />
      <Solutions />
      <Cases />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
