"use client";

import { motion } from "framer-motion";
import { ArrowRight, FlaskConical } from "lucide-react";
import { researchPaper, benchmarkStats } from "@/data/research";
import Link from "next/link";

/* ─── Compact Research Teaser ─────────────────────── */
export default function ResearchSpotlight() {
  return (
    <section id="research" className="py-24 border-t border-border/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-8 md:p-10"
      >
        <div className="flex items-center gap-3 mb-6">
          <FlaskConical className="w-6 h-6 text-accent" />
          <h2 className="text-2xl md:text-3xl font-bold font-sans">Research Spotlight</h2>
        </div>

        <h3 className="text-lg md:text-xl font-bold text-foreground/90 leading-snug mb-2 max-w-3xl">
          {researchPaper.title}
        </h3>
        <p className="text-sm md:text-base text-muted font-mono mb-4">
          {researchPaper.subtitle}
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="px-3 py-1 rounded-full border border-accent/40 bg-accent/10 text-accent text-sm font-mono font-medium">
            {researchPaper.venue}
          </span>
          <span className="px-3 py-1 rounded-full border border-border bg-surface text-muted text-sm font-mono">
            {researchPaper.status}
          </span>
        </div>

        {/* Compact stat row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {benchmarkStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-4 bg-surface border border-border rounded-lg text-center"
            >
              <div className="text-2xl md:text-3xl font-bold font-sans text-foreground mb-0.5">
                {stat.value}
              </div>
              <div className="text-[11px] font-mono text-muted uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-foreground/70 leading-relaxed mb-8 max-w-2xl text-sm md:text-base">
          Benchmarked three frontier LLMs on real-world CVE detection across temporal code states — uncovering severe patch blindness and reliability gaps in AI-assisted security auditing.
        </p>

        <Link
          href="/research"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-medium rounded-md hover:bg-accent/90 transition-colors text-sm"
        >
          Explore Full Findings <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}
