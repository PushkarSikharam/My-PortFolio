"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-border/50">
      <div className="mb-16">
        <h2 className="text-3xl font-bold font-sans mb-4">Featured Systems</h2>
        <p className="text-muted text-lg max-w-2xl">
          Architectural breakdowns of production-grade pipelines and models.
        </p>
      </div>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8"
          >
            <div className="md:col-span-4">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted mb-6">{project.summary}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-surface-light border border-border rounded-full text-xs font-mono text-muted">
                    {tag}
                  </span>
                ))}
              </div>

              {project.githubUrl !== "#" && (
                <a href={project.githubUrl} target="_blank" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-medium">
                  View Repository <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>

            <div className="md:col-span-8 glass-card p-8">
              <div className="mb-8">
                <h4 className="text-sm font-mono text-muted uppercase tracking-wider mb-3">Architecture Base</h4>
                <div className="p-4 bg-background border border-border rounded-lg font-mono text-sm text-foreground/80 break-words">
                  {project.architecture}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-mono text-muted uppercase tracking-wider mb-4">Engineering Decisions</h4>
                  <ul className="space-y-3">
                    {project.decisions.map((desc, i) => (
                      <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-mono text-muted uppercase tracking-wider mb-4">Measurable Impact</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="p-4 bg-surface border border-border rounded-lg">
                        <div className="text-2xl font-bold font-sans text-foreground mb-1">{metric.value}</div>
                        <div className="text-xs text-muted font-mono">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
