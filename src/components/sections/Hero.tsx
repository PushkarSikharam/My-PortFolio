"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="min-h-[88vh] flex flex-col justify-center relative pt-24 pb-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-12 items-center"
      >
        <div className="max-w-4xl">
          <motion.h1 variants={item} className="text-6xl md:text-8xl font-display font-bold leading-none mb-6">
            Sai Pushkar Sikharam
          </motion.h1>
          <motion.p variants={item} className="text-lg md:text-2xl text-muted font-mono mb-8 max-w-3xl">
            Graduate software engineer targeting software, ML engineering, backend, and data engineering roles.
          </motion.p>

          <motion.p variants={item} className="text-base md:text-lg text-foreground/75 leading-relaxed mb-10 max-w-2xl">
            I work across full-stack applications, applied machine learning, and research-grade evaluation, with projects spanning LLM systems, forecasting models, and production APIs.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-10">
            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-background font-medium rounded-md hover:bg-foreground transition-colors">
              View Work <ArrowDown className="w-4 h-4" />
            </a>
            <a href="#research" className="inline-flex items-center gap-2 px-5 py-3 border border-border bg-surface text-foreground font-medium rounded-md hover:border-accent hover:text-accent transition-colors">
              Read Research
            </a>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-3">
            <a href="https://github.com/PushkarSikharam" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-3 rounded-full border border-border bg-surface text-muted hover:text-accent hover:border-accent transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/sai-pushkar-sikharam-167666234" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 rounded-full border border-border bg-surface text-muted hover:text-accent hover:border-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:s.sai.pushkar@gmail.com" aria-label="Email" className="p-3 rounded-full border border-border bg-surface text-muted hover:text-accent hover:border-accent transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        <motion.div variants={item} className="justify-self-center lg:justify-self-end order-first lg:order-none">
          <div className="relative w-40 sm:w-48 lg:w-72 aspect-[4/5] rounded-2xl border border-accent/40 bg-surface overflow-hidden shadow-2xl shadow-accent/10 transition-all duration-300 hover:border-accent/70 hover:shadow-accent/20">
            <img
              src="/image.png"
              alt="Sai Pushkar Sikharam portrait"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
