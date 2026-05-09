"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { capabilities } from "@/data/data";

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 border-t border-border/50">
      <div className="mb-16">
        <h2 className="text-3xl font-bold font-sans mb-4">What I Build</h2>
        <p className="text-muted text-lg max-w-2xl">
          I build AI/ML systems, data pipelines, and backend services that turn models into usable, production-ready products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {capabilities.map((cap, i) => (
          <motion.div 
            key={cap.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="w-5 h-5 text-accent" />
              <h3 className="text-xl font-bold font-sans">{cap.title}</h3>
            </div>
            <p className="text-muted mb-6">{cap.summary}</p>
            
            <ul className="space-y-2 mb-6">
              {cap.items.map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-border/50">
              <p className="text-xs font-mono text-muted uppercase tracking-wider">
                Support: {cap.tech}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
