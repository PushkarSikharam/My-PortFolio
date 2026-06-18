"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

function metricSentence(project: (typeof projects)[number]) {
  if (project.id === "github-cve") {
    return "810 assessments across 30 validated CVEs, 13 LPA repositories, and 3 frontier models.";
  }

  if (project.id === "kinetica") {
    return "Three system layers, 20+ backend routes, and an EWMA + OLS adaptive engine.";
  }

  return project.metrics.map((metric) => `${metric.value} ${metric.label.toLowerCase()}`).join(", ");
}

export default function Projects() {
  const featured = projects.slice(0, 2);
  const remaining = projects.slice(2);

  return (
    <section id="projects" className="py-24 border-t border-border/50">
      <div className="mb-14">
        <h2 className="text-4xl font-bold font-display mb-4">Selected Work</h2>
        <p className="text-muted text-lg max-w-2xl">
          Product builds and research systems, separated by the amount of evidence they need on the page.
        </p>
      </div>

      <div className="space-y-8 mb-10">
        {featured.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            className="card-base p-6 md:p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5">
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">{project.title}</h3>
                <p className="text-foreground/75 leading-relaxed mb-5">{project.summary}</p>
                <p className="text-sm font-mono text-accent mb-6">{metricSentence(project)}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-background border border-border rounded text-xs font-mono text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="border-l-2 border-accent/70 pl-4 mb-6">
                  <p className="text-xs font-mono text-muted uppercase mb-2">Architecture</p>
                  <p className="text-sm text-foreground/75 leading-relaxed">{project.architecture}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {project.decisions.slice(0, 3).map((decision) => (
                    <p key={decision} className="text-sm text-foreground/72 leading-relaxed">
                      {decision}
                    </p>
                  ))}
                </div>

                {project.githubUrl.startsWith("http") && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-foreground transition-colors">
                    View Repository <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {remaining.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.2, delay: index * 0.04 }}
            className="card-base p-6"
          >
            <h3 className="text-2xl font-display font-bold mb-3">{project.title}</h3>
            <p className="text-sm text-foreground/72 leading-relaxed mb-5">{project.summary}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.slice(0, 4).map((tag) => (
                <span key={tag} className="px-2.5 py-1 bg-background border border-border rounded text-xs font-mono text-muted">
                  {tag}
                </span>
              ))}
            </div>
            {project.githubUrl.startsWith("http") && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-foreground transition-colors">
                View Repository <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
