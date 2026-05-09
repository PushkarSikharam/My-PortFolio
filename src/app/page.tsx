import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Capabilities from "@/components/sections/Capabilities";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <Capabilities />
        <Projects />
        <Experience />

        <footer className="py-12 border-t border-border/50 text-center text-muted font-mono text-sm mt-12">
          <p>Architected by Sai Pushkar Sikharam | {new Date().getFullYear()}</p>
        </footer>
      </main>
    </>
  );
}
