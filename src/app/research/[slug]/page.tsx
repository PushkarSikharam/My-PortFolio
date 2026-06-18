import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { relatedResearch } from "@/data/research";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return relatedResearch.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const item = relatedResearch.find((research) => research.slug === params.slug);

  if (!item) {
    return {
      title: "Research Findings | Sai Pushkar Sikharam",
    };
  }

  return {
    title: `${item.title} Findings | Sai Pushkar Sikharam`,
    description: item.summary,
  };
}

export default function ResearchFindingsPage({ params }: Props) {
  const item = relatedResearch.find((research) => research.slug === params.slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <Link
        href="/#research"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors mb-12"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Research
      </Link>

      <section className="mb-14">
        <p className="text-sm font-mono text-accent uppercase tracking-wider mb-4">
          Research Findings
        </p>
        <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-5">
          {item.title}
        </h1>
        <p className="text-lg text-muted font-mono mb-8">
          {item.venue} / {item.status}
        </p>
        <p className="text-foreground/75 leading-relaxed text-lg max-w-3xl">
          {item.summary}
        </p>
      </section>

      <section className="terminal-window overflow-hidden mb-10">
        <div className="flex items-center gap-2 border-b border-border px-5 py-4">
          <span className="w-3 h-3 rounded-full bg-warning" />
          <span className="w-3 h-3 rounded-full bg-danger" />
          <span className="w-3 h-3 rounded-full bg-safe" />
          <span className="ml-3 text-xs font-mono text-muted">research-findings</span>
        </div>

        <div className="p-6 md:p-8">
          <h2 className="text-2xl font-display font-bold mb-6">Key Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {item.terminalLines.map((line) => (
              <div key={line} className="bg-background border border-border rounded-lg p-4 font-mono text-sm text-foreground">
                {line}
              </div>
            ))}
          </div>
          <p className="text-accent font-mono text-sm leading-relaxed">
            {item.proof}
          </p>
        </div>
      </section>

      <section className="card-base p-6 md:p-8 mb-10">
        <h2 className="text-2xl font-display font-bold mb-5">Findings</h2>
        <div className="space-y-4">
          {item.findings.map((finding) => (
            <div key={finding} className="flex gap-3 text-foreground/75 leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              <p>{finding}</p>
            </div>
          ))}
        </div>
      </section>

      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-background font-medium rounded-md hover:bg-foreground transition-colors"
      >
        View Research Repository <ArrowUpRight className="w-4 h-4" />
      </a>
    </main>
  );
}
