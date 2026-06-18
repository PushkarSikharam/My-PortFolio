import type { Metadata } from "next";
import ResearchPage from "@/components/sections/ResearchPage";

export const metadata: Metadata = {
  title: "LLM Vulnerability Research Findings | Sai Pushkar Sikharam",
  description:
    "Focused findings from an empirical benchmark of Gemini, Claude, and GPT-4o on real-world CVE detection in LLM-powered applications.",
  keywords: [
    "LLM Vulnerability Detection",
    "ACSAC 2026",
    "Patch Blindness",
    "Cybersecurity Research",
    "Sai Pushkar Sikharam",
  ],
};

export default function Research() {
  return <ResearchPage />;
}
