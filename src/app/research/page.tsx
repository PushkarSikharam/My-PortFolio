import type { Metadata } from "next";
import ResearchPage from "@/components/sections/ResearchPage";

export const metadata: Metadata = {
  title: "Research — Can LLMs Distinguish Vulnerable from Patched Code? | Sai Pushkar Sikharam",
  description:
    "An empirical benchmark of 810 assessments evaluating Gemini 2.5 Flash, Claude 3.5 Sonnet, and GPT-4o on real-world CVE detection in LLM-Powered Applications under a Tri-State Temporal Framework.",
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
