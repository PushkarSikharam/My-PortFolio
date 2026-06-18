"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, [menuOpen]);

  const links = [
    { href: "#capabilities", label: "Focus" },
    { href: "#research", label: "Research" },
    { href: "#projects", label: "Work" },
    { href: "#experience", label: "Experience" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/86 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-display text-xl font-bold text-foreground hover:text-accent transition-colors">
          S.P.S
        </a>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6 text-sm font-medium">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
            <a href="/Sai%20Pushkar%20Sikharam.pdf" target="_blank" rel="noopener noreferrer" className="relative text-accent hover:text-foreground transition-colors">
              Resume
            </a>
          </nav>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 rounded-md border border-border bg-surface text-foreground"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4 text-sm font-medium">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-muted hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="mailto:s.sai.pushkar@gmail.com" onClick={() => setMenuOpen(false)} className="text-muted hover:text-accent transition-colors">
              Contact
            </a>
            <a href="/Sai%20Pushkar%20Sikharam.pdf" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-foreground transition-colors">
              Resume
            </a>
          </nav>
        </div>
      )}
    </motion.header>
  );
}
