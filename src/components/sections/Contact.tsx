"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-border/50 text-center">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Open to the right role</h2>
      <p className="text-muted max-w-xl mx-auto mb-8">
        I am open to AI/ML, data engineering, and backend roles where evaluation and product engineering both matter.
      </p>

      <div className="flex items-center justify-center gap-3 mb-8">
        <a href="mailto:s.sai.pushkar@gmail.com" aria-label="Email" className="p-3 rounded-full border border-border bg-surface text-muted hover:text-accent hover:border-accent transition-colors">
          <Mail className="w-5 h-5" />
        </a>
        <a href="https://github.com/PushkarSikharam" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-3 rounded-full border border-border bg-surface text-muted hover:text-accent hover:border-accent transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://linkedin.com/in/sai-pushkar-sikharam-167666234" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 rounded-full border border-border bg-surface text-muted hover:text-accent hover:border-accent transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
      </div>

      <a href="/Sai%20Pushkar%20Sikharam.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex px-5 py-3 rounded-md border border-accent text-accent hover:bg-accent hover:text-background transition-colors font-medium">
        Download Resume
      </a>
    </section>
  );
}
