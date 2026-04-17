"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-surface border border-border group-hover:border-accent/50 transition-colors">
            <div className="absolute w-1.5 h-1.5 bg-accent rounded-full -top-0.5 -right-0.5 animate-pulse"></div>
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-foreground stroke-current stroke-[1.5] group-hover:text-accent transition-colors">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
          </div>
          <span className="font-mono font-bold text-lg tracking-tight">S.P.S</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6 text-sm font-medium">
            <a href="#capabilities" className="text-muted hover:text-foreground transition-colors">Capabilities</a>
            <a href="#projects" className="text-muted hover:text-foreground transition-colors">Systems</a>
            <a href="#experience" className="text-muted hover:text-foreground transition-colors">Experience</a>
            <a href="/SaiPushkar Resume.pdf" target="_blank" className="text-accent hover:text-accent/80 transition-colors">
              Resume
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
