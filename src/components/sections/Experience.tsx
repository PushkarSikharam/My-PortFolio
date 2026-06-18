"use client";

import { motion } from "framer-motion";
import { experience, publications, education } from "@/data/data";
import { BookOpen, ExternalLink, GraduationCap, Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-border/50">
      <div className="mb-16">
        <h2 className="text-4xl font-bold font-display mb-4">Experience & Research</h2>
        <p className="text-muted text-lg max-w-2xl">
          Experience, research, and academic work centered on AI/ML systems, data engineering, and production software.
        </p>
      </div>

      <div className="mb-10">
        <h3 className="text-2xl font-bold font-display mb-3 flex items-center gap-3">
          <Briefcase className="w-6 h-6 text-accent" />
          Experience
        </h3>
      </div>

      <div className="space-y-12 max-w-4xl">
        {experience.map((exp, i) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            className="relative pl-8 border-l border-border"
          >
            <div className="absolute w-3 h-3 bg-background border-2 border-accent rounded-full -left-[6.5px] top-1.5"></div>
            
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-4">
              <h3 className="text-xl font-bold">{exp.role}</h3>
              <span className="text-muted font-mono text-sm">{exp.company}</span>
              <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-border"></span>
              <span className="text-accent font-mono text-sm">{exp.duration}</span>
            </div>

            <ul className="space-y-3 mb-6">
              {exp.bullets.map((bullet, idx) => (
                <li key={idx} className="text-foreground/80 leading-relaxed max-w-3xl">
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.tech.map(t => (
                <span key={t} className="px-2 py-1 bg-surface border border-border rounded text-[11px] font-mono text-muted">
                  {t}
                </span>
              ))}
            </div>

            {exp.link && (
              <div className="mt-4">
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                >
                  View Research Repository <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Education Section */}
      <div className="mt-24 mb-10">
        <h3 className="text-2xl font-bold font-display mb-3 flex items-center gap-3">
          <GraduationCap className="w-6 h-6 text-accent" />
          Education
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {education.map((edu) => (
          <motion.div 
            key={edu.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            className="p-6 rounded-xl border border-border bg-surface"
          >
            <h4 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h4>
            <p className="text-muted font-mono text-sm mb-3">{edu.school}</p>
            <span className="inline-block px-3 py-1 bg-background border border-border rounded-full text-xs font-mono text-accent">
              {edu.year}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 mb-10">
        <h3 className="text-2xl font-bold font-display mb-3 flex items-center gap-3">
          <BookOpen className="w-6 h-6 text-accent" />
          Selected Publications
        </h3>
        <p className="text-muted text-lg max-w-2xl">
          Academic research and technical writing.
        </p>
      </div>

      <div className="space-y-6 max-w-4xl">
        {publications.map((pub, i) => (
          <motion.div 
            key={pub.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            className="group"
          >
            <a href={pub.link === "#" ? undefined : pub.link} target={pub.link === "#" ? undefined : "_blank"} rel={pub.link === "#" ? undefined : "noopener noreferrer"} className="block p-5 border-l-2 border-accent/60 hover:bg-surface/50 transition-colors duration-200">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h4 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors leading-snug">
                    {pub.title}
                  </h4>
                  <p className="text-muted font-mono text-sm mt-2">{pub.venue}</p>
                  {pub.link === "#" && (
                    <p className="text-xs font-mono text-muted mt-2">Link available on request.</p>
                  )}
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span className="text-accent font-mono text-sm">{pub.year}</span>
                  <ExternalLink className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
