import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Capabilities from "@/components/sections/Capabilities";
import ResearchSpotlight from "@/components/sections/ResearchSpotlight";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <Capabilities />
        <ResearchSpotlight />
        <Projects />
        <Experience />
        <Contact />

        <footer className="py-8 border-t border-border/50 text-center text-muted font-mono text-xs">
          <p>Architected by Sai Pushkar Sikharam | {new Date().getFullYear()}</p>
        </footer>
      </main>
    </>
  );
}
