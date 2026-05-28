export const researchPaper = {
  title: "Can LLMs Distinguish Vulnerable from Patched Code?",
  subtitle: "An Empirical Study on LLM-Powered Applications",
  venue: "ACSAC 2026",
  status: "Under Review",
  githubUrl: "https://github.com/PushkarSikharam/Vulnerability-Detection-on-CodeBase",
  abstract:
    "An empirical benchmark evaluating whether frontier Large Language Models can detect real-world security vulnerabilities in LLM-Powered Applications. The system mines CVEs from open-source GitHub repositories, reconstructs their temporal lifecycle across Git commits, and benchmarks three proprietary frontier models under a Tri-State Temporal Framework across multiple context-delivery modes.",
};

export const benchmarkStats = [
  { label: "Total Assessments", value: 810, suffix: "" },
  { label: "CVEs Validated", value: 30, suffix: "" },
  { label: "LPA Repositories", value: 13, suffix: "" },
  { label: "Frontier Models", value: 3, suffix: "" },
];

export const modelComparison = [
  {
    model: "Gemini 2.5 Flash",
    color: "#4285F4",
    detectionRate: 69.2,
    falsePositiveRate: 66.7,
    patchBlindness: 56.5,
    precision: 59.5,
  },
  {
    model: "Claude 3.5 Sonnet",
    color: "#D97706",
    detectionRate: 56.2,
    falsePositiveRate: 50.0,
    patchBlindness: 42.9,
    precision: 61.5,
  },
  {
    model: "GPT-4o",
    color: "#10B981",
    detectionRate: 50.0,
    falsePositiveRate: 33.3,
    patchBlindness: 32.1,
    precision: 60.7,
  },
];

export const keyFindings = [
  {
    icon: "target",
    headline: "Recall vs. Precision Tradeoff",
    detail:
      "Gemini leads detection at 69.2% recall, but fires false alarms on 66.7% of safe code. GPT-4o is most conservative — fewest false alarms but misses over two-thirds of real vulnerabilities.",
  },
  {
    icon: "eye-off",
    headline: "Severe Patch Blindness",
    detail:
      "All models fail to recognize that vulnerabilities have been fixed. Even the best performer (GPT-4o) still flags 32.1% of patched code as vulnerable — a fundamental reasoning failure.",
  },
  {
    icon: "shield-alert",
    headline: "No Standalone Reliability",
    detail:
      "No model is reliable as a standalone security auditor. Overall precision hovers around 60% across all three models, meaning roughly 2 in 5 vulnerability reports are incorrect.",
  },
];

export const vulnerabilityFamilies = [
  { family: "XSS / Injection", count: 12, percent: 40.0 },
  { family: "Path Traversal", count: 6, percent: 20.0 },
  { family: "SSRF / RCE", count: 2, percent: 6.7 },
  { family: "General Security", count: 10, percent: 33.3 },
];
