"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { relatedResearch, researchPaper } from "@/data/research";

type ResearchCardItem = {
  title: string;
  venue: string;
  status: string;
  summary: string;
  proof?: string;
  terminalLines: string[];
  cta?: string;
  href: string;
};

const cveResearch: ResearchCardItem = {
  title: researchPaper.title,
  venue: researchPaper.venue,
  status: researchPaper.status,
  summary:
    "Benchmarked three frontier LLMs on real CVE detection across temporal code states, exposing patch blindness and reliability gaps in AI-assisted security auditing.",
  terminalLines: [
    "> assessments: 810",
    "> cves_validated: 30",
    "> lpa_repos: 13",
    "> frontier_models: 3",
  ],
  cta: "./explore --full-findings",
  href: "/research",
};

const researchItems: ResearchCardItem[] = [
  cveResearch,
  ...relatedResearch.map((item) => ({
    ...item,
    href: `/research/${item.slug}`,
    cta: "./explore --findings",
  })),
];

function TerminalResearchCard({
  item,
  index,
  isInView,
}: {
  item: ResearchCardItem;
  index: number;
  isInView: boolean;
}) {
  const content = (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
      className="terminal-window h-full overflow-hidden group"
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="w-2.5 h-2.5 rounded-full bg-warning" />
        <span className="w-2.5 h-2.5 rounded-full bg-danger" />
        <span className="w-2.5 h-2.5 rounded-full bg-safe" />
        <span className="ml-2 text-[11px] font-mono text-muted">research-artifact</span>
      </div>

      <div className="p-5 md:p-6">
        <p className="text-xs font-mono text-accent mb-3">
          {item.venue} / {item.status}
        </p>
        <h3 className="text-2xl md:text-3xl font-display font-bold leading-tight mb-4 group-hover:text-accent transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-6">
          {item.summary}
        </p>

        <div className="space-y-2 font-mono text-sm text-foreground mb-6">
          {item.terminalLines.map((line, lineIndex) => (
            <div key={line} className="min-h-5">
              <span
                className={`type-line ${isInView ? "type-line-active" : ""}`}
                style={{
                  ["--chars" as string]: line.length,
                  animationDelay: `${(index + lineIndex) * 0.18}s`,
                }}
              >
                {line}
              </span>
            </div>
          ))}
        </div>

        {item.proof && (
          <p className="text-xs font-mono text-accent leading-relaxed mb-6">
            {item.proof}
          </p>
        )}

        <span className="inline-flex font-mono text-sm text-accent group-hover:text-foreground transition-colors">
          {item.cta ?? "./open --research-repo"}
        </span>
      </div>
    </motion.article>
  );

  return <Link href={item.href}>{content}</Link>;
}

export default function ResearchSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="research" className="py-24 border-t border-border/50">
      <div className="mb-10">
        <h2 className="text-4xl font-bold font-display mb-4">Research Spotlight</h2>
        <p className="text-muted text-lg max-w-2xl">
          Research artifacts across LLM evaluation, financial forecasting, and local weather prediction.
        </p>
      </div>

      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {researchItems.map((item, index) => (
          <TerminalResearchCard
            key={item.title}
            item={item}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>
    </section>
  );
}
