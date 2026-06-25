"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

function metricSentence(project: (typeof projects)[number]) {
  if (project.id === "kinetica") {
    return "20+ backend routes around an adaptive engine that keeps the calorie math explainable.";
  }

  if (project.id === "talk2campus") {
    return "Scoped to the TAMU-CC corpus, with roughly 10 API endpoints and testing from about 10 users.";
  }

  return project.metrics.map((metric) => `${metric.value} ${metric.label.toLowerCase()}`).join(", ");
}

function projectProofLine(project: (typeof projects)[number]) {
  switch (project.id) {
    case "talk2campus":
      return "Scoped to the TAMU-CC corpus, tested with about 10 users, and built with WhisperX voice input.";
    case "helmet-detection":
      return "Uses two pretrained Haar cascades for rider-region and number-plate detection, with IEEE 2023 publication linkage.";
    case "cryptostalker":
      return "Compared 3 forecasting algorithms, used Random Forest as the strongest model, and paired forecasts with sentiment-aware trade signals.";
    default:
      return null;
  }
}

export default function Projects() {
  const visibleProjects = projects.filter(
    (project) => !["github-cve", "crypto-fusion", "coastal-hrrr-rainfall"].includes(project.id)
  );
  const featured = visibleProjects.slice(0, 2);
  const remaining = visibleProjects.slice(2);

  return (
    <section id="projects" className="py-24 border-t border-border/50">
      <div className="mb-14">
        <h2 className="text-4xl font-bold font-display mb-4">Selected Work</h2>
        <p className="text-muted text-lg max-w-2xl">
          Product builds and applied systems, with research work kept in the research sections.
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
                <div className="rounded-lg border border-border bg-background/45 p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <p className="text-xs font-mono text-muted uppercase">Architecture</p>
                  </div>
                  <p className="text-sm text-foreground/75 leading-relaxed">{project.architecture}</p>
                </div>

                {project.id === "kinetica" ? (
                  <div className="space-y-4 mb-6 text-sm text-foreground/72 leading-relaxed">
                    <p>{project.decisions[0]}</p>
                    <p>{project.decisions[1]}</p>
                    <p className="rounded-md border border-border bg-background/40 p-3 text-muted">{project.decisions[2]}</p>
                  </div>
                ) : (
                  <div className="mb-6">
                    <p className="text-sm text-foreground/72 leading-relaxed mb-4">{project.decisions[0]}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.decisions.slice(1, 3).map((decision) => (
                        <p key={decision} className="text-xs text-muted leading-relaxed border border-border rounded-md p-3 bg-background/50">
                          {decision}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

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
            {projectProofLine(project) && (
              <p className="text-xs font-mono text-accent leading-relaxed mb-5">{projectProofLine(project)}</p>
            )}
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
