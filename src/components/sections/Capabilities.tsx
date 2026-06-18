"use client";

import { motion } from "framer-motion";
import { capabilities } from "@/data/data";

const sizeByTitle: Record<string, string> = {
  "LLM Applications": "md:col-span-2 md:row-span-2",
  "Data Engineering": "md:col-span-1",
  "Backend Systems": "md:col-span-1",
  "ML Systems & Analytics": "md:col-span-1",
  "Deployment & MLOps": "md:col-span-1",
};

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 border-t border-border/50">
      <div className="mb-14">
        <h2 className="text-4xl font-bold font-display mb-4">Engineering Focus</h2>
        <p className="text-muted text-lg max-w-2xl">
          The work clusters around LLM applications, evaluation pipelines, data systems, and the backend surfaces that make them usable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-fr gap-4">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: i * 0.04 }}
            className={`card-base p-6 md:p-7 ${sizeByTitle[cap.title] ?? ""}`}
          >
            <div className="h-full flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold font-display mb-3">{cap.title}</h3>
              <p className="text-muted leading-relaxed mb-6">{cap.summary}</p>
              <p className="mt-auto pt-5 border-t border-border/70 text-xs font-mono text-muted uppercase leading-relaxed">
                {cap.tech}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
