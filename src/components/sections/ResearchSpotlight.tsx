"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { researchPaper } from "@/data/research";

const terminalLines = [
  "> assessments: 810",
  "> cves_validated: 30",
  "> lpa_repos: 13",
  "> frontier_models: 3",
];

export default function ResearchSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="research" className="py-24 border-t border-border/50">
      <div className="mb-10">
        <h2 className="text-4xl font-bold font-display mb-4">Research Spotlight</h2>
        <p className="text-muted text-lg max-w-2xl">
          The benchmark behind the failure-mode half of the claim.
        </p>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.25 }}
        className="terminal-window overflow-hidden"
      >
        <div className="flex items-center gap-2 border-b border-border px-5 py-4">
          <span className="w-3 h-3 rounded-full bg-warning" />
          <span className="w-3 h-3 rounded-full bg-danger" />
          <span className="w-3 h-3 rounded-full bg-safe" />
          <span className="ml-3 text-xs font-mono text-muted">tri-state-benchmark</span>
        </div>

        <div className="p-6 md:p-10">
          <p className="text-xs font-mono text-accent mb-3">
            {researchPaper.venue} / {researchPaper.status}
          </p>
          <h3 className="text-3xl md:text-5xl font-display font-bold leading-tight max-w-4xl mb-4">
            {researchPaper.title}
          </h3>
          <p className="text-muted font-mono mb-8">{researchPaper.subtitle}</p>

          <div className="space-y-2 font-mono text-sm md:text-base text-foreground mb-8">
            {terminalLines.map((line, index) => (
              <div key={line} className="min-h-6">
                <span
                  className={`type-line ${isInView ? "type-line-active" : ""}`}
                  style={{
                    ["--chars" as string]: line.length,
                    animationDelay: `${index * 0.35}s`,
                  }}
                >
                  {line}
                </span>
              </div>
            ))}
          </div>

          <p className="text-foreground/75 leading-relaxed max-w-3xl mb-8">
            Benchmarked three frontier LLMs on real CVE detection across temporal code states, exposing patch blindness and reliability gaps in AI-assisted security auditing.
          </p>

          <Link href="/research" className="inline-flex font-mono text-sm text-accent hover:text-foreground transition-colors">
            ./explore --full-findings
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
