"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tight mb-4">
          Sai Pushkar Sikharam
        </h1>
        <h2 className="text-xl md:text-3xl text-muted font-mono mb-6">
          AI + Backend Systems Engineer
        </h2>

        <div className="flex items-center gap-6 mb-8">
          <a href="https://github.com/PushkarSikharam" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors hover:scale-110 transform duration-200">
            <Github className="w-7 h-7" />
          </a>
          <a href="https://linkedin.com/in/sai-pushkar-sikharam-167666234" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors hover:scale-110 transform duration-200">
            <Linkedin className="w-7 h-7" />
          </a>
          <a href="mailto:s.sai.pushkar@gmail.com" className="text-muted hover:text-accent transition-colors hover:scale-110 transform duration-200">
            <Mail className="w-7 h-7" />
          </a>
        </div>

        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-10 max-w-2xl">
          I build scalable backend systems that bring machine learning models into real-world production.
          Bridging data, APIs, and infrastructure to turn ML ideas into reliable systems.
        </p>

        <div className="flex gap-4">
          <a href="#projects" className="px-6 py-3 bg-foreground text-background font-medium rounded-md hover:bg-foreground/90 transition-colors">
            View Systems
          </a>
          <a href="/resume.pdf" target="_blank" className="px-6 py-3 bg-surface border border-border font-medium rounded-md hover:border-accent/50 transition-colors">
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
