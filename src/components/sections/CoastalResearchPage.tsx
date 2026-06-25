"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  CloudRain,
  Database,
  FileWarning,
  GitBranch,
  ShieldCheck,
} from "lucide-react";

type CoastalResearchItem = {
  title: string;
  venue: string;
  status: string;
  link: string;
  boundary: string[];
};

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.35 },
};

const coastalStats = [
  { before: "0.12", after: "0.06", label: "KCRP MAE", note: "lower is better" },
  { before: "1.28", after: "0.54", label: "KCRP RMSE", note: "lower is better" },
  { before: "0.34", after: "0.38", label: "KCRP F1", note: "higher is better" },
  { before: "0", after: "42.8k", label: "KRKP IDs Verified", note: "sample parity check" },
];

const coastalFramework = [
  {
    code: "F1",
    label: "Forecast Identity",
    title: "Preserve the issued forecast",
    body: "Each row keeps initialization time, valid time, lead, station, raw HRRR rainfall, observed rainfall, and event label together.",
    rule: "No comparison until HRRR identities are acquired and verified.",
  },
  {
    code: "L2",
    label: "Leakage Guard",
    title: "Only initialization-time features",
    body: "Station features, MRMS radar lags, and lead-time features are admitted only when they were available before forecast issue time.",
    rule: "Feature timestamps must not exceed forecast initialization time.",
  },
  {
    code: "T3",
    label: "Transfer Test",
    title: "Test beyond one station",
    body: "KCRP is the primary station; KRKP checks whether the correction logic survives a nearby coastal station without overstating the claim.",
    rule: "Transfer is bounded evidence, not universal generalization.",
  },
];

const kcrpComparison = [
  { model: "Raw HRRR", mae: 0.12, rmse: 1.28, f1: 0.34, csi: 0.21, precision: 0.31, recall: 0.39 },
  { model: "Phase 3B HRRR + station + MRMS", mae: 0.08, rmse: 0.93, f1: 0.35, csi: 0.21, precision: 0.48, recall: 0.28 },
  { model: "Phase 8 event-aware", mae: 0.06, rmse: 0.54, f1: 0.38, csi: 0.24, precision: 0.34, recall: 0.45 },
];

const calibrationComparison = [
  { model: "Phase 3B", brier: 0.021, prAuc: 0.2, rocAuc: 0.74, ece: 0.01 },
  { model: "Phase 8", brier: 0.019, prAuc: 0.31, rocAuc: 0.84, ece: 0.006 },
];

const transferComparison = [
  { model: "Raw HRRR", mae: 0.12, rmse: 1.58, f1: 0.17, csi: 0.09, precision: 0.1, recall: 0.56 },
  { model: "Direct KCRP to KRKP", mae: 0.04, rmse: 0.7, f1: 0.19, csi: 0.11, precision: 0.12, recall: 0.47 },
  { model: "KRKP local retrain", mae: 0.03, rmse: 0.7, f1: 0.26, csi: 0.15, precision: 0.21, recall: 0.35 },
  { model: "Pooled KCRP + KRKP", mae: 0.03, rmse: 0.7, f1: 0.21, csi: 0.12, precision: 0.16, recall: 0.33 },
];

const keyFindings = [
  {
    headline: "Leakage Control Was The Core Contribution",
    detail:
      "The study was rebuilt around forecast identity and timestamp checks, so the model could not improve by accidentally seeing future observations.",
  },
  {
    headline: "Event-Aware Correction Improved Error",
    detail:
      "Phase 8 improved rainfall amount error, F1, CSI, recall, and calibration over raw HRRR while keeping the correction model explainable.",
  },
  {
    headline: "Transfer Worked, But Claims Stay Bounded",
    detail:
      "KRKP validation improved error and event skill relative to raw HRRR, while keeping the claim limited to the tested stations.",
  },
];

const studyDesign = [
  "Each row is one issued forecast for one station and one lead time.",
  "Principal leads: 1 hour, 3 hours, 6 hours, and 24 hours.",
  "Rain-event threshold: 0.1 mm.",
  "Sources: NOAA HRRR, NOAA ISD station observations, MRMS radar QPE, and CO-OPS coastal observations for ablations.",
];

const negativeResults = [
  "Direct CO-OPS feature addition did not improve the chronological KCRP holdout.",
  "Coastal-regime analysis did not reveal a robust replacement for the Phase 3B baseline.",
  "A validation-trained regime gate improved validation but did not generalize to the test holdout.",
];

const glossaryTerms = [
  ["HRRR", "High-Resolution Rapid Refresh"],
  ["MRMS", "Multi-Radar/Multi-Sensor System"],
  ["QPE", "Quantitative Precipitation Estimation"],
  ["NOAA", "National Oceanic and Atmospheric Administration"],
  ["ISD", "Integrated Surface Database"],
  ["CO-OPS", "Center for Operational Oceanographic Products and Services"],
  ["GRIB", "General Regularly-distributed Information in Binary"],
  ["Zarr", "Chunked array storage format"],
  ["KCRP", "Corpus Christi International Airport station"],
  ["KRKP", "Aransas County Airport / Rockport station"],
  ["MAE", "Mean Absolute Error"],
  ["RMSE", "Root Mean Squared Error"],
  ["CSI", "Critical Success Index"],
  ["PR AUC", "Precision-Recall Area Under the Curve"],
  ["ROC AUC", "Receiver Operating Characteristic Area Under the Curve"],
];

function ImprovementCard({ stat, index }: { stat: (typeof coastalStats)[number]; index: number }) {
  return (
    <motion.article
      {...reveal}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="card-base p-6"
    >
      <p className="mb-5 text-xs font-mono uppercase tracking-wider text-muted">
        {stat.label}
      </p>
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="font-mono text-sm text-muted">before</p>
          <p className="text-2xl font-bold font-display text-foreground/60">
            {stat.before}
          </p>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 + index * 0.06 }}
          className="mb-2 h-px flex-1 origin-left bg-accent/60"
        />
        <div className="text-right">
          <p className="font-mono text-sm text-accent">after</p>
          <p className="text-3xl font-bold font-display text-foreground">
            {stat.after}
          </p>
        </div>
      </div>
      <p className="mt-5 text-xs font-mono text-muted">{stat.note}</p>
    </motion.article>
  );
}

function MiniBar({ value, max, invert = false }: { value: number; max: number; invert?: boolean }) {
  const width = Math.max((value / max) * 100, 4);

  return (
    <div className="flex min-w-[5rem] items-center gap-2">
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-background border border-border">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${width}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full rounded-full ${invert ? "bg-safe" : "bg-accent"}`}
        />
      </div>
      <span className="w-10 text-right font-mono text-xs text-foreground/80">
        {value.toFixed(value < 0.1 ? 3 : 2)}
      </span>
    </div>
  );
}

function GlossaryTicker() {
  const items = [...glossaryTerms, ...glossaryTerms];

  return (
    <motion.section
      {...reveal}
      className="mb-16 overflow-hidden rounded-xl border border-border bg-surface/70"
      aria-label="Weather research terminology glossary"
    >
      <div className="flex items-center border-b border-border px-4 py-2">
        <span className="mr-3 h-2 w-2 rounded-full bg-accent" />
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
          Terminology
        </p>
      </div>
      <div className="relative overflow-hidden py-4">
        <div className="glossary-ticker flex w-max gap-6 px-4">
          {items.map(([term, definition], index) => (
            <span
              key={`${term}-${index}`}
              className="inline-flex items-center gap-2 whitespace-nowrap font-mono text-sm"
              aria-hidden={index >= glossaryTerms.length}
            >
              <span className="rounded border border-accent/40 bg-accent/10 px-2 py-1 font-bold text-accent">
                {term}
              </span>
              <span className="text-foreground/70">{definition}</span>
              <span className="text-muted/40">/</span>
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function ModelTable({
  title,
  rows,
  description,
}: {
  title: string;
  rows: typeof kcrpComparison;
  description: string;
}) {
  const max = {
    mae: Math.max(...rows.map((row) => row.mae)),
    rmse: Math.max(...rows.map((row) => row.rmse)),
    f1: Math.max(...rows.map((row) => row.f1)),
    csi: Math.max(...rows.map((row) => row.csi)),
    precision: Math.max(...rows.map((row) => row.precision)),
    recall: Math.max(...rows.map((row) => row.recall)),
  };

  return (
    <motion.section {...reveal} className="mb-20">
      <div className="flex items-center gap-3 mb-6">
        <BarChart3 className="w-6 h-6 text-accent" />
        <h2 className="text-3xl font-bold font-display">{title}</h2>
      </div>
      <p className="text-foreground/70 leading-relaxed mb-8 max-w-3xl text-lg">
        {description}
      </p>

      <div className="card-base overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="p-4 text-left text-xs font-mono uppercase tracking-wider text-muted">
                Model
              </th>
              {["MAE", "RMSE", "F1", "CSI", "Precision", "Recall"].map((metric) => (
                <th
                  key={metric}
                  className="p-4 text-left text-xs font-mono uppercase tracking-wider text-accent"
                >
                  {metric}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60">
            {rows.map((row) => (
              <tr key={row.model} className={row.model.includes("Phase 8") ? "bg-accent/[0.04]" : ""}>
                <td className="min-w-[15rem] p-4 font-medium text-foreground">
                  {row.model}
                </td>
                <td className="p-4"><MiniBar value={row.mae} max={max.mae} invert /></td>
                <td className="p-4"><MiniBar value={row.rmse} max={max.rmse} invert /></td>
                <td className="p-4"><MiniBar value={row.f1} max={max.f1} /></td>
                <td className="p-4"><MiniBar value={row.csi} max={max.csi} /></td>
                <td className="p-4"><MiniBar value={row.precision} max={max.precision} /></td>
                <td className="p-4"><MiniBar value={row.recall} max={max.recall} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
}

function CalibrationTable() {
  return (
    <motion.section {...reveal} className="mb-20">
      <div className="flex items-center gap-3 mb-6">
        <BarChart3 className="w-6 h-6 text-accent" />
        <h2 className="text-3xl font-bold font-display">
          Probability Calibration
        </h2>
      </div>
      <p className="text-foreground/70 leading-relaxed mb-8 max-w-3xl text-lg">
        The event-aware model also improved probability quality, not just rainfall
        amount error.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {calibrationComparison.map((row) => (
          <article key={row.model} className="card-base p-6">
            <h3 className="text-xl font-display font-bold mb-5">{row.model}</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-border bg-background/45 p-4">
                <p className="text-xs font-mono text-muted">Brier Score</p>
                <p className="text-2xl font-display font-bold">{row.brier.toFixed(3)}</p>
              </div>
              <div className="rounded-lg border border-border bg-background/45 p-4">
                <p className="text-xs font-mono text-muted">PR AUC</p>
                <p className="text-2xl font-display font-bold">{row.prAuc.toFixed(2)}</p>
              </div>
              <div className="rounded-lg border border-border bg-background/45 p-4">
                <p className="text-xs font-mono text-muted">ROC AUC</p>
                <p className="text-2xl font-display font-bold">{row.rocAuc.toFixed(2)}</p>
              </div>
              <div className="rounded-lg border border-border bg-background/45 p-4">
                <p className="text-xs font-mono text-muted">Calibration Error</p>
                <p className="text-2xl font-display font-bold">{row.ece.toFixed(3)}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}

export default function CoastalResearchPage({ item }: { item: CoastalResearchItem }) {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <Link
        href="/#research"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors mb-12"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Research
      </Link>

      <motion.section {...reveal} className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <CloudRain className="h-8 w-8 text-accent" />
          <span className="text-sm font-mono text-muted uppercase tracking-wider">
            Research Findings
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-5 max-w-4xl">
          {item.title}
        </h1>
        <p className="text-xl text-foreground/75 leading-relaxed max-w-3xl mb-8">
          Can forecast-time-available observations improve point rainfall
          forecasts from HRRR along the Texas Coastal Bend without using
          information from the future?
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-mono text-accent">
            {item.venue}
          </span>
          <span className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-mono text-muted">
            {item.status}
          </span>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-foreground transition-colors"
          >
            View Repository <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </motion.section>

      <GlossaryTicker />

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
        {coastalStats.map((stat, index) => (
          <ImprovementCard key={stat.label} stat={stat} index={index} />
        ))}
      </section>

      <motion.section {...reveal} className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <GitBranch className="w-6 h-6 text-accent" />
          <h2 className="text-3xl font-bold font-display">
            Leakage-Controlled Forecast Identity Framework
          </h2>
        </div>
        <p className="text-foreground/70 leading-relaxed mb-8 max-w-3xl text-lg">
          The study treats rainfall correction as a post-processing problem:
          preserve the raw HRRR forecast identity, add only observations
          available at initialization time, and test the corrected forecast on a
          chronological holdout.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {coastalFramework.map((phase, index) => (
            <motion.article
              key={phase.code}
              {...reveal}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className={`card-base p-6 ${index === 0 ? "border-accent/40" : ""}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="rounded border border-accent/50 px-2 py-1 text-xs font-mono font-bold text-accent">
                  {phase.code}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-muted">
                  {phase.label}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold mb-3">
                {phase.title}
              </h3>
              <p className="text-foreground/75 leading-relaxed mb-5">
                {phase.body}
              </p>
              <p className="text-xs font-mono text-muted leading-relaxed">
                <span className="text-accent">Rule:</span> {phase.rule}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <ModelTable
        title="KCRP Chronological Test Comparison"
        rows={kcrpComparison}
        description="Phase 8 is the accepted model: a two-stage event-aware correction where expected rainfall equals rain-event probability multiplied by conditional event amount."
      />

      <CalibrationTable />

      <ModelTable
        title="KRKP Spatial-Transfer Validation"
        rows={transferComparison}
        description="The transfer test checks whether the KCRP correction logic remains useful at Aransas County Airport / Rockport after forecast identities are acquired and verified."
      />

      <motion.section {...reveal} className="mb-20">
        <h2 className="text-3xl font-bold font-display mb-8">Key Findings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {keyFindings.map((finding, index) => (
            <motion.article
              key={finding.headline}
              {...reveal}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="card-base p-6"
            >
              <div className="mb-4 flex items-center gap-2 text-accent">
                <ShieldCheck className="h-5 w-5" />
                <h3 className="text-sm font-bold font-display uppercase tracking-wide">
                  {finding.headline}
                </h3>
              </div>
              <p className="text-foreground/75 leading-relaxed">
                {finding.detail}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section {...reveal} className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <article className="card-base p-6 md:p-8">
          <div className="mb-5 flex items-center gap-3">
            <Database className="h-5 w-5 text-accent" />
            <h2 className="text-2xl font-display font-bold">Study Design</h2>
          </div>
          <div className="space-y-4">
            {studyDesign.map((item) => (
              <div key={item} className="flex gap-3 text-foreground/75 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="card-base p-6 md:p-8">
          <div className="mb-5 flex items-center gap-3">
            <FileWarning className="h-5 w-5 text-accent" />
            <h2 className="text-2xl font-display font-bold">Negative Results Retained</h2>
          </div>
          <div className="space-y-4">
            {negativeResults.map((item) => (
              <div key={item} className="flex gap-3 text-foreground/75 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-warning shrink-0" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </article>
      </motion.section>

      <motion.section {...reveal} className="card-base p-6 md:p-8 mb-12">
        <h2 className="text-3xl font-bold font-display mb-5">Claim Boundary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {item.boundary.map((boundary) => (
            <div key={boundary} className="rounded-lg border border-border bg-background/45 p-4">
              <p className="text-sm leading-relaxed text-foreground/75">
                {boundary}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      <div className="flex flex-wrap gap-4 border-t border-border/50 pt-10">
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-medium rounded-md hover:bg-foreground transition-colors"
        >
          View Research Repository <ArrowUpRight className="w-4 h-4" />
        </a>
        <Link
          href="/#research"
          className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-border font-medium rounded-md hover:border-accent/50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Research
        </Link>
      </div>
    </main>
  );
}
