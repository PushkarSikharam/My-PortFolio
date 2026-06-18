"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[88vh] flex flex-col justify-center relative pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-4xl"
      >
        <h1 className="text-6xl md:text-8xl font-display font-bold leading-none mb-6">
          Sai Pushkar Sikharam
        </h1>
        <p className="text-lg md:text-2xl text-muted font-mono mb-8 max-w-3xl">
          I build LLM systems and benchmark their failure modes.
        </p>

        <p className="text-base md:text-lg text-foreground/75 leading-relaxed mb-10 max-w-2xl">
          I work across AI applications, data pipelines, backend APIs, and security evaluation, with research grounded in real CVEs and production-shaped systems.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-10">
          <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-background font-medium rounded-md hover:bg-foreground transition-colors">
            View Work <ArrowDown className="w-4 h-4" />
          </a>
          <Link href="/research" className="inline-flex items-center gap-2 px-5 py-3 border border-border bg-surface text-foreground font-medium rounded-md hover:border-accent hover:text-accent transition-colors">
            Read Research
          </Link>
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
      </motion.div>
    </section>
  );
}
