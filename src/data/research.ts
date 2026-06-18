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
    color: "#c9a55a",
    detectionRate: 69.2,
    falsePositiveRate: 66.7,
    patchBlindness: 56.5,
    precision: 59.5,
  },
  {
    model: "Claude 4.6 Sonnet",
    color: "#f59e0b",
    detectionRate: 56.2,
    falsePositiveRate: 50.0,
    patchBlindness: 42.9,
    precision: 61.5,
  },
  {
    model: "GPT-4o",
    color: "#4ade80",
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
      "Gemini leads detection at 69.2% recall, but fires false alarms on 66.7% of safe code. GPT-4o is most conservative: fewest false alarms but misses over two-thirds of real vulnerabilities.",
  },
  {
    icon: "eye-off",
    headline: "Severe Patch Blindness",
    detail:
      "All models fail to recognize that vulnerabilities have been fixed. Even the best performer (GPT-4o) still flags 32.1% of patched code as vulnerable: a fundamental reasoning failure.",
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

export const relatedResearch = [
  {
    slug: "crypto-fusion",
    title: "Crypto Fusion & Forecasting",
    venue: "ICCSMM 2025",
    status: "Published",
    summary:
      "A multimodal financial forecasting study combining market data, news and social sentiment, temporal modeling, and portfolio evaluation.",
    proof:
      "Reported an 8.3% RMSE reduction, +8.7 percentage-point directional accuracy improvement, and +0.29 Sharpe-ratio lift across 200+ monitored assets.",
    terminalLines: [
      "> rmse_reduction: 8.3%",
      "> directional_accuracy: +8.7pp",
      "> sharpe_lift: +0.29",
      "> monitored_assets: 200+",
    ],
    findings: [
      "Multimodal signals improved forecasting quality beyond price-only baselines.",
      "Sentiment and market features were evaluated against portfolio-level outcomes, not only prediction error.",
      "The strongest practical result was the combined RMSE reduction and Sharpe-ratio lift across a broad monitored asset set.",
    ],
    link: "https://github.com/abhishekjoshi007/CryptoFusion",
  },
  {
    slug: "rainfall-prediction",
    title: "Hybrid Rainfall Prediction Model",
    venue: "Independent Research",
    status: "Developed",
    summary:
      "A Corpus Christi rainfall forecasting model combining Prophet seasonality with XGBoost residual modeling for lightweight local weather prediction.",
    proof:
      "Reduced MAE from 3.16 mm to 2.18 mm using lag features, rolling weather windows, Prophet baselines, and XGBoost residual learning.",
    terminalLines: [
      "> baseline_mae: 3.16mm",
      "> best_mae: 2.18mm",
      "> final_rmse: 6.25mm",
      "> final_r2: 0.29",
    ],
    findings: [
      "Prophet captured the seasonal rainfall baseline while XGBoost modeled nonlinear residual behavior.",
      "Lag and rolling-window features made the model more useful for local Corpus Christi weather history.",
      "The hybrid approach reduced MAE while staying lightweight enough for a practical forecasting workflow.",
    ],
    link: "https://github.com/PushkarSikharam/Corpus-Christi-Rainfall-Prediction-Model",
  },
];
