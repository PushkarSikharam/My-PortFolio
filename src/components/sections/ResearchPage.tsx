"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Target,
  EyeOff,
  ShieldAlert,
  FileText,
  FlaskConical,
  GitBranch,
  Layers,
  BarChart3,
} from "lucide-react";
import {
  researchPaper,
  benchmarkStats,
  modelComparison,
  keyFindings,
  vulnerabilityFamilies,
} from "@/data/research";
import Link from "next/link";

/* ─── Animated Counter ────────────────────────────── */
function AnimatedNumber({
  target,
  duration = 1.6,
}: {
  target: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return <span ref={ref}>{value}</span>;
}

/* ─── Icon helper ─────────────────────────────────── */
const findingIcons: Record<string, React.ReactNode> = {
  target: <Target className="w-5 h-5" />,
  "eye-off": <EyeOff className="w-5 h-5" />,
  "shield-alert": <ShieldAlert className="w-5 h-5" />,
};

const phaseColors: Record<string, string> = {
  A: "var(--warning)",
  B: "var(--danger)",
  C: "var(--safe)",
};

/* ─── Mini bar (percentage) ───────────────────────── */
function MetricBar({
  value,
  color,
  delay,
}: {
  value: number;
  color: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div
      ref={ref}
      className="relative h-7 bg-surface border border-border rounded-md overflow-hidden"
    >
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${value}%` } : { width: 0 }}
        transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-y-0 left-0 rounded-md"
        style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
      />
      <span className="absolute inset-0 flex items-center justify-end pr-2.5 text-xs font-mono font-medium text-foreground/80">
        {value}%
      </span>
    </div>
  );
}

/* ─── Temporal Phase Card ─────────────────────────── */
function PhaseCard({
  phase,
  label,
  description,
  scoring,
  delay,
}: {
  phase: string;
  label: string;
  description: string;
  scoring: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="card-base p-6 border-l-2"
      style={{ borderLeftColor: phaseColors[phase] ?? "var(--accent)" }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="px-2.5 py-1 bg-accent/10 border border-accent/30 rounded text-accent font-mono font-bold text-sm">
          {phase}
        </span>
        <h4 className="font-bold text-foreground">{label}</h4>
      </div>
      <p className="text-sm text-foreground/70 mb-3">{description}</p>
      <div className="text-xs font-mono text-muted">
        <span className="text-accent">Scoring:</span> {scoring}
      </div>
    </motion.div>
  );
}

/* ─── Main Page ───────────────────────────────────── */
export default function ResearchPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      {/* Back navigation */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-12"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </motion.div>

      {/* ── Hero Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-6">
          <FlaskConical className="w-8 h-8 text-accent" />
          <span className="text-sm font-mono text-muted uppercase tracking-wider">
            Research Paper
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-3 leading-tight">
          {researchPaper.title}
        </h1>
        <p className="text-lg md:text-xl text-muted font-mono mb-6">
          {researchPaper.subtitle}
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent text-sm font-mono font-medium">
            {researchPaper.venue}
          </span>
          <span className="px-4 py-1.5 rounded-full border border-border bg-surface text-muted text-sm font-mono">
            {researchPaper.status}
          </span>
          <a
            href={researchPaper.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
          >
            View Repository <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <p className="text-foreground/70 leading-relaxed max-w-3xl text-base md:text-lg">
          {researchPaper.abstract}
        </p>
      </motion.div>

      {/* ── Benchmark Stats ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {benchmarkStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-base p-6 text-center group"
          >
            <div className="text-3xl md:text-4xl font-bold font-display text-foreground mb-1">
              <AnimatedNumber target={stat.value} />
            </div>
            <div className="text-xs font-mono text-muted uppercase tracking-wider">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Tri-State Temporal Framework ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="flex items-center gap-3 mb-6">
          <GitBranch className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold font-display">
            Tri-State Temporal Framework
          </h2>
        </div>
        <p className="text-foreground/70 leading-relaxed mb-8 max-w-3xl">
          Each vulnerability is evaluated across three temporal phases of the
          code&apos;s lifecycle, enabling measurement of detection consistency
          and patch recognition.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PhaseCard
            phase="A"
            label="Pre-Fix"
            description="Parent of the buggy commit, stratified as Present (60%), Absent (33.3%), or Uncertain (6.7%) via manual audit."
            scoring="Present -> TP, Absent -> FP, Uncertain -> excluded"
            delay={0}
          />
          <PhaseCard
            phase="B"
            label="Vulnerable"
            description="Code at the known buggy state, immediately prior to the patch being applied."
            scoring="Standard Recall (True Positive)"
            delay={0.1}
          />
          <PhaseCard
            phase="C"
            label="Patched"
            description="Code immediately after the fix commit has been applied. The vulnerability should no longer be present."
            scoring="Patch Blindness (FP on safe code)"
            delay={0.2}
          />
        </div>
      </motion.div>

      {/* ── Model Performance Comparison ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="flex items-center gap-3 mb-6">
          <BarChart3 className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold font-display">
            Model Performance Comparison
          </h2>
        </div>
        <p className="text-foreground/70 leading-relaxed mb-8 max-w-3xl">
          Head-to-head comparison of three frontier models across detection
          rate, false positive rate, patch blindness, and overall precision.
        </p>

        <div className="card-base p-6 md:p-8">
          <div className="space-y-10">
            {modelComparison.map((m, idx) => (
              <div key={m.model}>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-3.5 h-3.5 rounded-full shrink-0"
                    style={{ backgroundColor: m.color }}
                  />
                  <span className="font-bold text-foreground text-base md:text-lg">
                    {m.model}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  <div>
                    <span className="text-xs font-mono text-muted block mb-1.5">
                      Phase A Detection Rate (Recall)
                    </span>
                    <MetricBar
                      value={m.detectionRate}
                      color={m.color}
                      delay={idx * 0.15}
                    />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-muted block mb-1.5">
                      Phase A False Positive Rate
                    </span>
                    <MetricBar
                      value={m.falsePositiveRate}
                      color="#e05252"
                      delay={idx * 0.15 + 0.08}
                    />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-muted block mb-1.5">
                      Patch Blindness (Phase C FP)
                    </span>
                    <MetricBar
                      value={m.patchBlindness}
                      color="#f59e0b"
                      delay={idx * 0.15 + 0.16}
                    />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-muted block mb-1.5">
                      Overall Precision
                    </span>
                    <MetricBar
                      value={m.precision}
                      color={m.color}
                      delay={idx * 0.15 + 0.24}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Detailed Results Table ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h3 className="text-sm font-mono text-muted uppercase tracking-wider mb-4">
          Full Metrics Table
        </h3>

        <div className="card-base overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-mono text-muted text-xs uppercase tracking-wider">
                  Metric
                </th>
                {modelComparison.map((m) => (
                  <th
                    key={m.model}
                    className="p-4 text-center font-mono text-xs uppercase tracking-wider"
                    style={{ color: m.color }}
                  >
                    {m.model}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              <tr>
                <td className="p-4 text-foreground/80">
                  Phase A Detection Rate
                </td>
                {modelComparison.map((m) => (
                  <td
                    key={m.model}
                    className="p-4 text-center font-mono font-medium"
                  >
                    {m.detectionRate}%
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 text-foreground/80">
                  Phase A False Positive Rate
                </td>
                {modelComparison.map((m) => (
                  <td
                    key={m.model}
                    className="p-4 text-center font-mono font-medium"
                  >
                    {m.falsePositiveRate}%
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 text-foreground/80">
                  Phase B Detection Rate
                </td>
                {modelComparison.map((m) => (
                  <td
                    key={m.model}
                    className="p-4 text-center font-mono font-medium"
                  >
                    {m.model === "Gemini 2.5 Flash"
                      ? "66.7%"
                      : m.model === "Claude 3.5 Sonnet"
                      ? "53.6%"
                      : "32.1%"}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 text-foreground/80">
                  Patch Blindness Rate
                </td>
                {modelComparison.map((m) => (
                  <td
                    key={m.model}
                    className="p-4 text-center font-mono font-medium"
                  >
                    {m.patchBlindness}%
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 text-foreground/80">Overall Precision</td>
                {modelComparison.map((m) => (
                  <td
                    key={m.model}
                    className="p-4 text-center font-mono font-medium"
                  >
                    {m.precision}%
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* ── Key Findings ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-2xl font-bold font-display mb-8">Key Findings</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {keyFindings.map((finding, i) => (
            <motion.div
              key={finding.headline}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="card-base p-6"
            >
              <div className="flex items-center gap-2 mb-3 text-accent">
                {findingIcons[finding.icon]}
                <h5 className="text-sm font-bold font-display uppercase tracking-wide">
                  {finding.headline}
                </h5>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {finding.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Context-Delivery Modes ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="flex items-center gap-3 mb-6">
          <Layers className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold font-display">
            Context-Delivery Modes
          </h2>
        </div>
        <p className="text-foreground/70 leading-relaxed mb-8 max-w-3xl">
          Models were tested under different levels of code context to isolate
          whether accuracy depends on how much information is provided.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              mode: "ARA",
              cli: "url",
              description:
                "Commit-pinned GitHub URLs — the model retrieves code autonomously",
              scope: "Gemini only",
            },
            {
              mode: "DCA-File",
              cli: "code-debug",
              description:
                "Complete source files provided inline in the prompt",
              scope: "All 3 models",
            },
            {
              mode: "DCA-Region",
              cli: "diff",
              description:
                "Only the changed-region source context from the fix patch",
              scope: "All 3 models",
            },
            {
              mode: "DCA-Function",
              cli: "function",
              description:
                "Enclosing functions containing the changed lines",
              scope: "All 3 models",
            },
          ].map((item, i) => (
            <motion.div
              key={item.mode}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 bg-surface border border-border rounded-xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2 py-0.5 bg-accent/10 border border-accent/30 rounded text-accent font-mono font-bold text-xs">
                  {item.mode}
                </span>
                <code className="text-xs font-mono text-muted">
                  --mode {item.cli}
                </code>
              </div>
              <p className="text-sm text-foreground/70 mb-2">
                {item.description}
              </p>
              <span className="text-[11px] font-mono text-muted">
                {item.scope}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Vulnerability Families ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-2xl font-bold font-display mb-6">
          Dataset Composition
        </h2>

        <div className="card-base p-6 md:p-8">
          <h4 className="text-sm font-mono text-muted uppercase tracking-wider mb-5">
            Vulnerability Families
          </h4>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {vulnerabilityFamilies.map((v) => (
              <div
                key={v.family}
                className="p-4 bg-background border border-border rounded-lg text-center"
              >
                <div className="text-2xl font-bold font-display text-foreground mb-0.5">
                  {v.count}
                </div>
                <div className="text-xs font-mono text-muted">{v.family}</div>
                <div className="text-[10px] font-mono text-accent mt-1">
                  {v.percent}%
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs font-mono text-muted">
            <FileText className="w-3.5 h-3.5" />
            <span>
              30 validated security issues across 13 open-source LPA
              repositories | Severity: 26 High, 1 Medium, 3 Low
            </span>
          </div>
        </div>
      </motion.div>

      {/* ── System Architecture ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-2xl font-bold font-display mb-6">
          System Architecture
        </h2>

        <div className="card-base p-6 md:p-8">
          <div className="space-y-6">
            {[
              {
                stage: "Stage 1",
                title: "Ground Truth Crawler",
                desc: "Mines GitHub repositories to build a human-validated ground-truth dataset of real-world CVEs in LLM-Powered Applications.",
                components:
                  "Input processing -> GitHub API mining -> Regex/CWE analysis -> Version resolution -> Master report generation",
              },
              {
                stage: "Stage 2",
                title: "Multi-Model LLM Evaluation",
                desc: "Benchmarks frontier LLMs on detecting, classifying, and localizing vulnerabilities under the Tri-State Temporal Framework.",
                components:
                  "Data ingestion -> Snapshot resolution -> Context-delivery transform -> Model runners (Gemini, Claude, GPT-4o) -> Tri-State scoring -> Model-aware reporting",
              },
              {
                stage: "Stage 3",
                title: "Stratified Audit & Rescoring",
                desc: "Re-scores the entire benchmark from saved JSON backups under stratified temporal labels without re-querying APIs.",
                components:
                  "Phase A audit -> Manifest freeze -> Rescoring engine -> Cross-model analysis -> Statistical significance -> Publication figures",
              },
            ].map((s, i) => (
              <motion.div
                key={s.stage}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative pl-8 border-l-2 border-accent/30"
              >
                <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-1.5" />
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2 py-0.5 bg-accent/10 border border-accent/30 rounded text-accent font-mono font-bold text-xs">
                    {s.stage}
                  </span>
                  <h4 className="font-bold text-foreground">{s.title}</h4>
                </div>
                <p className="text-sm text-foreground/70 mb-2">{s.desc}</p>
                <div className="p-3 bg-background border border-border rounded-lg font-mono text-xs text-foreground/60 break-words">
                  {s.components}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Footer CTA ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center py-12 border-t border-border/50"
      >
        <p className="text-muted mb-6 font-mono text-sm">
          Full source code, raw LLM responses, and reproducible rescoring
          engine available on GitHub.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={researchPaper.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-medium rounded-md hover:bg-accent/90 transition-colors text-sm"
          >
            View Repository <ArrowUpRight className="w-4 h-4" />
          </a>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-border font-medium rounded-md hover:border-accent/50 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
