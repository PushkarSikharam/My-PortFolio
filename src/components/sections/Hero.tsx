"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[88vh] flex flex-col justify-center relative pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-12 items-center"
      >
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-none mb-6">
            Sai Pushkar Sikharam
          </h1>
          <p className="text-lg md:text-2xl text-muted font-mono mb-8 max-w-3xl">
            Graduate software engineer building ML-powered products, data pipelines, and backend systems.
          </p>

          <p className="text-base md:text-lg text-foreground/75 leading-relaxed mb-10 max-w-2xl">
            I am focused on software engineering, ML engineering, and data engineering roles where I can turn models, APIs, and messy real-world data into reliable user-facing systems.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-background font-medium rounded-md hover:bg-foreground transition-colors">
              View Work <ArrowDown className="w-4 h-4" />
            </a>
            <a href="#research" className="inline-flex items-center gap-2 px-5 py-3 border border-border bg-surface text-foreground font-medium rounded-md hover:border-accent hover:text-accent transition-colors">
              Read Research
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://github.com/PushkarSikharam" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-3 rounded-full border border-border bg-surface text-muted hover:text-accent hover:border-accent transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/sai-pushkar-sikharam-167666234" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 rounded-full border border-border bg-surface text-muted hover:text-accent hover:border-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:s.sai.pushkar@gmail.com" aria-label="Email" className="p-3 rounded-full border border-border bg-surface text-muted hover:text-accent hover:border-accent transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="hidden lg:block justify-self-end">
          <div className="relative w-72 aspect-[4/5] rounded-2xl border border-accent/40 bg-surface overflow-hidden shadow-2xl shadow-accent/10">
            <img
              src="/image.png"
              alt="Sai Pushkar Sikharam portrait"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-xs font-mono text-accent">Software + ML</p>
              <p className="text-sm text-foreground/80">Graduate Computer Science Student</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
