export const projects = [
  {
    id: "kinetica",
    title: "Kinetic",
    summary: "An ML-backed nutrition platform that combines a deterministic adaptive metabolic engine with AI-assisted food logging, contextual nutrition chat, and full-stack product workflows.",
    tags: ["Next.js 15", "FastAPI", "Python", "Gemini", "SQLite"],
    problem: "Most calorie trackers rely on static formulas and manual logging, which makes recommendations generic, noisy, and poorly adapted to real metabolic behavior over time.",
    architecture: "Three-layer product system: Application layer (authentication, onboarding, dashboard, analytics, feedback, admin review) -> Intelligence layer (adaptive metabolic engine, weight-trend modeling, contextual AI assistance) -> Persistence layer (users, foods, meals, weights, insights, feedback)",
    decisions: [
      "Separated the deterministic recommendation engine from the AI layer so adaptive calorie guidance stays explainable and mathematically grounded.",
      "Built the intelligence layer around EWMA smoothing, OLS-based weight velocity estimation, and confidence-gated calorie adjustments instead of relying on static TDEE formulas.",
      "Designed the product as a real authenticated multi-user workflow with onboarding, meal logging, analytics, feedback handling, and admin review rather than a prototype-style single-user app."
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
    summary: "An empirical benchmark of 810 assessments evaluating whether frontier LLMs (Gemini, Claude, GPT-4o) can detect real-world CVEs in LLM-Powered Applications under a Tri-State Temporal Framework.",
    tags: ["Python", "LLMs", "Cybersecurity", "Benchmarking", "GitHub API"],
    problem: "No rigorous benchmark existed to measure whether frontier LLMs can reliably distinguish vulnerable code from patched code in real-world LLM-powered applications across temporal states.",
    architecture: "Stage 1: GitHub CVE Crawler (API mining → regex/CWE analysis → version resolution) → Stage 2: Multi-Model LLM Evaluation (snapshot resolver → context-delivery modes → tri-state scoring) → Stage 3: Stratified Audit & Rescoring Engine (Phase A audit → manifest freeze → reproducible re-scoring)",
    decisions: [
      "Invented a Tri-State Temporal Framework (Pre-Fix / Vulnerable / Patched) with stratified Phase A auditing to measure model behavior across the full vulnerability lifecycle.",
      "Implemented 4 context-delivery modes (ARA, DCA-File, DCA-Region, DCA-Function) to isolate whether model accuracy depends on how much code context is provided.",
      "Built a rescoring engine that regenerates all metrics from saved JSON backups without re-querying APIs, ensuring full reproducibility of reported results.",
      "Designed rate-limit-aware multi-key API orchestration to reliably benchmark across 3 proprietary model APIs at scale."
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
    summary: "An API-driven RAG architecture for conversational access to distributed campus information.",
    tags: ["FastAPI", "React", "RAG", "LLM", "Vector DB"],
    problem: "Students lacked a centralized, conversational way to query complex, distributed campus databases efficiently.",
    architecture: "React UI -> FastAPI backend -> retrieval pipeline -> vector database -> LLM response orchestration",
    decisions: [
      "Separated frontend and backend responsibilities to isolate retrieval and generation workflows from the UI.",
      "Implemented asynchronous FastAPI handlers to keep LLM-backed requests responsive under load.",
      "Used structured retrieval before generation, along with OpenAI APIs and WhisperX-based voice support, to improve response relevance and usability."
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
    summary: "A multimodal financial analysis system combining market data, sentiment signals, and forecasting pipelines.",
    tags: ["Machine Learning", "Python", "Data Processing", "Time-Series"],
    problem: "Single-modality forecasting failed to capture edge cases driven by news sentiment and external market shocks.",
    architecture: "Market data + news sentiment -> preprocessing pipelines -> multimodal model stack -> forecast and portfolio signals",
    decisions: [
      "Integrated multimodal data sources to build a more resilient feature space than price-only forecasting.",
      "Engineered automated preprocessing to handle missing values and heterogeneous financial inputs at scale.",
      "Optimized directional accuracy through iterative tuning across model and feature configurations."
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
    summary: "A lightweight time-series forecasting system combining Prophet and XGBoost to predict localized rainfall.",
    tags: ["Time-Series", "XGBoost", "Prophet", "Python"],
    problem: "Forecasting daily rainfall accurately typically requires massive climate simulators, posing challenges for lightweight, resource-constrained environments.",
    architecture: "Meteostat API -> feature engineering -> Prophet seasonality baseline -> XGBoost residual modeling -> hybrid forecast",
    decisions: [
      "Integrated Prophet to capture long-term seasonal baselines and climate trends.",
      "Trained XGBoost on Prophet residuals to model short-term nonlinear atmospheric behavior.",
      "Engineered lag and rolling-window features to improve signal extraction from weather history."
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
    summary: "A real-time computer vision inference pipeline for traffic safety.",
    tags: ["Computer Vision", "YOLO", "Real-time Inference", "Python"],
    problem: "Manual traffic monitoring could not scale, and existing models struggled with real-time inference latency.",
    architecture: "Video pipeline -> YOLO detection layer -> extraction -> logging",
    decisions: [
      "Leveraged YOLO architectures specifically tuned for high-speed object recognition.",
      "Optimized inference hardware utilization through batching and memory management."
    ],
    metrics: [
      { label: "Pretrained Cascades", value: "2" },
      { label: "Inference Target", value: "Real-time" },
      { label: "Research Output", value: "IEEE 2023" }
    ],
    githubUrl: "https://github.com/PushkarSikharam/Helmet_detection",
  },
];
