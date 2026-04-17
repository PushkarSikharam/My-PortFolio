export const projects = [
  {
    id: "github-cve",
    title: "GitHub CVE/CWE Security Auditing Pipeline",
    summary: "A scalable backend pipeline to analyze repositories for security vulnerability correlations.",
    tags: ["Python", "GitHub API", "Data Engineering", "Security"],
    problem: "Identifying deterministic vulnerability patches across massive open-source repositories required significant manual overhead and lacked structured confidence scoring.",
    architecture: "GitHub sources -> ingestion -> normalization -> rule analysis -> confidence scoring -> fix resolution -> reporting",
    decisions: [
      "Designed a deterministic vulnerability detection engine to minimize false positives.",
      "Implemented a rate-limit-aware orchestrator to sustain analysis across 89 repositories.",
      "Used structured confidence scoring to rank the likelihood of identified fix-versions."
    ],
    metrics: [
      { label: "Repositories Analyzed", value: "89" },
      { label: "Pipeline Reliability", value: "High" }
    ],
    githubUrl: "--On-Going Research--",
  },
  {
    id: "rainfall-prediction",
    title: "Hybrid Rainfall Prediction Model",
    summary: "A lightweight time-series forecasting system combining Prophet and XGBoost to predict localized rainfall.",
    tags: ["Time-Series", "XGBoost", "Prophet", "Python"],
    problem: "Forecasting daily rainfall accurately typically requires massive climate simulators, posing challenges for lightweight, resource-constrained environments.",
    architecture: "Meteostat API -> Feature Engineering -> Prophet (Seasonality) -> XGBoost (Residuals) -> Hybrid Output",
    decisions: [
      "Integrated Facebook Prophet to capture long-term seasonal baselines and data trends.",
      "Trained an XGBoost layer specifically on Prophet's residual errors to model short-term, non-linear atmospheric logic.",
      "Engineered 3-day and 7-day sliding window parameters, significantly improving the predictive capability and doubling the final R² coefficient.",
    ],
    metrics: [
      { label: "Prophet Baseline MAE", value: "3.16 mm" },
      { label: "Hybrid MAE", value: "2.18 mm" },
      { label: "Final R² Score", value: "0.29" },
    ],
    githubUrl: "https://github.com/PushkarSikharam/Corpus-Christi-Rainfall-Prediction-Model",
  },
  {
    id: "talk2campus",
    title: "Talk2Campus",
    summary: "An API-driven RAG architecture to interactively query campus data.",
    tags: ["FastAPI", "React", "RAG", "LLM", "Vector DB"],
    problem: "Students lacked a centralized, conversational way to query complex, distributed campus databases efficiently.",
    architecture: "React UI -> FastAPI Backend -> Retrieval Layer -> Vector Database -> LLM Response Orchestration",
    decisions: [
      "Separated the frontend and backend architectures to isolate the heavy retrieval logic.",
      "Implemented asynchronous FastAPI request handlers to maintain responsiveness under load.",
      "Used structured endpoints for precise data retrieval before passing context to the LLM."
    ],
    metrics: [
      { label: "REST Endpoints", value: "10+" },
      { label: "Average Response Latency", value: "<2s" }
    ],
    githubUrl: "https://github.com/PushkarSikharam/Talk2Campus",
  },
  {
    id: "crypto-fusion",
    title: "Crypto Fusion & Forecasting",
    summary: "A multimodal financial analysis system combining sentiment and market data.",
    tags: ["Machine Learning", "Python", "Data Processing", "Time-Series"],
    problem: "Single-modality forecasting failed to capture edge cases driven by news sentiment and external market shocks.",
    architecture: "Market Data + News Sentiment -> Preprocessing -> Model Pipeline -> Forecast / Optimization Output",
    decisions: [
      "Integrated multimodal data sources to construct a more resilient feature space.",
      "Engineered automated preprocessing pipelines to handle missing data in real-time.",
      "Utilized extensive hyperparameter tuning to optimize directional accuracy."
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
    id: "helmet-detection",
    title: "Helmet & Number Plate Recognition",
    summary: "A real-time computer vision inference pipeline for traffic safety.",
    tags: ["Computer Vision", "YOLO", "Real-time Inference", "Python"],
    problem: "Manual traffic monitoring could not scale, and existing models struggled with real-time inference latency.",
    architecture: "Video Pipeline -> YOLO Detection Layer -> Extraction -> Logging",
    decisions: [
      "Leveraged YOLO architectures specifically tuned for high-speed object recognition.",
      "Optimized the inference hardware utilization via batching and memory management."
    ],
    metrics: [
      { label: "Inference Target", value: "Real-time" }
    ],
    githubUrl: "https://github.com/PushkarSikharam/Helmet_detection",
  },
];
