"use client";

import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Prevent hydration rendering mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-[104px] h-[36px]"></div>;

  return (
    <div className="flex bg-surface border border-border rounded-full p-1 gap-1">
      <button 
        onClick={() => setTheme('light')} 
        title="Light Mode"
        className={`p-1.5 rounded-full transition-colors ${theme === 'light' ? 'bg-background text-accent shadow-sm' : 'text-muted hover:text-foreground'}`}
      >
        <Sun className="w-4 h-4" />
      </button>
      <button 
        onClick={() => setTheme('system')} 
        title="System Default"
        className={`p-1.5 rounded-full transition-colors ${theme === 'system' ? 'bg-background text-accent shadow-sm' : 'text-muted hover:text-foreground'}`}
      >
        <Monitor className="w-4 h-4" />
      </button>
      <button 
        onClick={() => setTheme('dark')} 
        title="Dark Mode"
        className={`p-1.5 rounded-full transition-colors ${theme === 'dark' ? 'bg-background text-accent shadow-sm' : 'text-muted hover:text-foreground'}`}
      >
        <Moon className="w-4 h-4" />
      </button>
    </div>
  );
}
