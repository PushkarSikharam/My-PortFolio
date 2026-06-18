export const projects = [
  {
    id: "kinetica",
    title: "Kinetic",
    summary: "A nutrition platform built around a simple constraint: the AI can make logging easier, but the calorie math has to stay inspectable.",
    tags: ["Next.js 15", "FastAPI", "Python", "Gemini", "SQLite"],
    problem: "Most calorie trackers rely on static formulas and manual logging, which makes recommendations generic, noisy, and poorly adapted to real metabolic behavior over time.",
    architecture: "Three-layer product system: Application layer (authentication, onboarding, dashboard, analytics, feedback, admin review) -> Intelligence layer (adaptive metabolic engine, weight-trend modeling, contextual AI assistance) -> Persistence layer (users, foods, meals, weights, insights, feedback)",
    decisions: [
      "The core recommendation path is deterministic on purpose; AI helps with food logging and user experience, but it does not get to silently rewrite the metabolic engine.",
      "Weight changes are smoothed with EWMA and trend-estimated with OLS, which made the system less jumpy than a static TDEE calculator after noisy weigh-ins.",
      "I treated it like a product instead of a demo: onboarding, authentication, meal history, analytics, feedback handling, and an admin review loop all sit in the same workflow."
    ],
    metrics: [
      { label: "System Layers", value: "3" },
      { label: "FastAPI Routes", value: "20+" },
      { label: "Adaptive Engine", value: "EWMA + OLS" },
      { label: "Current Phase", value: "Phase 2" }
    ],
    githubUrl: "https://github.com/PushkarSikharam/Kinetica",
  },
  {
    id: "github-cve",
    title: "LLM Vulnerability Detection Benchmark",
    summary: "A research benchmark asking a deliberately uncomfortable question: can frontier LLMs tell vulnerable code from patched code when both come from real repositories?",
    tags: ["Python", "LLMs", "Cybersecurity", "Benchmarking", "GitHub API"],
    problem: "No rigorous benchmark existed to measure whether frontier LLMs can reliably distinguish vulnerable code from patched code in real-world LLM-powered applications across temporal states.",
    architecture: "Stage 1: GitHub CVE Crawler (API mining -> regex/CWE analysis -> version resolution) -> Stage 2: Multi-Model LLM Evaluation (snapshot resolver -> context-delivery modes -> tri-state scoring) -> Stage 3: Stratified Audit & Rescoring Engine (Phase A audit -> manifest freeze -> reproducible re-scoring)",
    decisions: [
      "The benchmark uses Pre-Fix, Vulnerable, and Patched states because a detector that only works on obviously vulnerable code is not useful in a real maintenance timeline.",
      "I tested four context modes rather than one prompt style, so failures could be tied to context delivery instead of hand-waved as model weakness.",
      "Every reported metric can be regenerated from saved JSON backups, which mattered once API cost, rate limits, and reproducibility started pulling against each other.",
      "The strongest result was also the most revealing one: patched code stayed hard for the models, exposing a 56.5% patch-blindness failure mode."
    ],
    metrics: [
      { label: "Total Assessments", value: "810" },
      { label: "CVEs Validated", value: "30" },
      { label: "LPA Repositories", value: "13" },
      { label: "Frontier Models", value: "3" }
    ],
    githubUrl: "https://github.com/PushkarSikharam/Vulnerability-Detection-on-CodeBase",
  },
  {
    id: "talk2campus",
    title: "Talk2Campus",
    summary: "A campus RAG assistant for TAMU-CC that let students query scattered university information through text or voice.",
    tags: ["FastAPI", "React", "RAG", "LLM", "Vector DB"],
    problem: "Students lacked a centralized, conversational way to query complex, distributed campus databases efficiently.",
    architecture: "React UI -> FastAPI backend -> retrieval pipeline -> vector database -> LLM response orchestration",
    decisions: [
      "Kept retrieval and response generation behind the API so the UI stayed thin and the knowledge workflow could evolve independently.",
      "The useful scope was narrow by design: one TAMU-CC campus corpus, roughly 10 endpoints, and testing with about 10 users instead of pretending it was a universal university assistant.",
      "Voice support used WhisperX because the project was meant to feel like a campus help desk, not just another chatbot box."
    ],
    metrics: [
      { label: "Campus Scope", value: "TAMU-CC" },
      { label: "REST Endpoints", value: "10" },
      { label: "Users Tested", value: "10+" },
      { label: "Response Quality", value: "Quick & Accurate" }
    ],
    githubUrl: "https://github.com/PushkarSikharam/Talk2Campus",
  },
  {
    id: "crypto-fusion",
    title: "Crypto Fusion & Forecasting",
    summary: "A forecasting system that combined market movement with sentiment signals instead of treating price history as the whole story.",
    tags: ["Machine Learning", "Python", "Data Processing", "Time-Series"],
    problem: "Single-modality forecasting failed to capture edge cases driven by news sentiment and external market shocks.",
    architecture: "Market data + news sentiment -> preprocessing pipelines -> multimodal model stack -> forecast and portfolio signals",
    decisions: [
      "Price-only forecasting missed sentiment shocks, so the feature pipeline fused market data with external text-derived signals.",
      "Most of the engineering work sat in the unglamorous middle: cleaning heterogeneous inputs, aligning timestamps, and keeping the model fed with comparable features.",
      "The final comparison tracked directional accuracy, RMSE, Sharpe ratio, and monitored assets rather than leaning on one friendly metric."
    ],
    metrics: [
      { label: "Directional Accuracy Improvement", value: "8.7 pp" },
      { label: "RMSE Reduction", value: "8.3%" },
      { label: "Sharpe Ratio Improvement", value: "0.29" },
      { label: "Monitored Assets", value: "200+" }
    ],
    githubUrl: "https://github.com/abhishekjoshi007/CryptoFusion",
  },
  {
    id: "rainfall-prediction",
    title: "Hybrid Rainfall Prediction Model",
    summary: "A local rainfall forecaster for Corpus Christi that used Prophet for seasonality and XGBoost for what the baseline kept missing.",
    tags: ["Time-Series", "XGBoost", "Prophet", "Python"],
    problem: "Forecasting daily rainfall accurately typically requires massive climate simulators, posing challenges for lightweight, resource-constrained environments.",
    architecture: "Meteostat API -> feature engineering -> Prophet seasonality baseline -> XGBoost residual modeling -> hybrid forecast",
    decisions: [
      "Prophet handled the broad seasonal curve; XGBoost was trained on the residuals where the simple baseline still left signal behind.",
      "Lag and rolling-window features made the model more useful for local weather history than a plain daily series.",
      "The practical win was lowering MAE from 3.16 mm to 2.18 mm with a lightweight pipeline."
    ],
    metrics: [
      { label: "Baseline MAE", value: "3.16 mm" },
      { label: "Best MAE", value: "2.18 mm" },
      { label: "Final RMSE", value: "6.25 mm" },
      { label: "Final R2", value: "0.29" }
    ],
    githubUrl: "https://github.com/PushkarSikharam/Corpus-Christi-Rainfall-Prediction-Model",
  },
  {
    id: "helmet-detection",
    title: "Helmet & Number Plate Recognition",
    summary: "A traffic-safety computer vision pipeline for detecting upper-body rider regions and license plates in video frames.",
    tags: ["Computer Vision", "YOLO", "Real-time Inference", "Python"],
    problem: "Manual traffic monitoring could not scale, and existing models struggled with real-time inference latency.",
    architecture: "Video pipeline -> YOLO detection layer -> extraction -> logging",
    decisions: [
      "Used two pretrained Haar cascades as the detection backbone: upper-body detection for rider localization and Russian plate detection for license-plate extraction.",
      "Kept the pipeline focused on frame-by-frame inference and logging, which made it easier to reason about failures than a larger end-to-end traffic system."
    ],
    metrics: [
      { label: "Pretrained Cascades", value: "2" },
      { label: "Inference Target", value: "Real-time" },
      { label: "Research Output", value: "IEEE 2023" }
    ],
    githubUrl: "https://github.com/PushkarSikharam/Helmet_detection",
  },
];
