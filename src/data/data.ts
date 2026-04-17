export const experience = [
  {
    id: "grad-research",
    role: "Graduate Research Assistant",
    company: "Texas A&M University - Corpus Christi",
    duration: "2025 - Present",
    bullets: [
      "Designed and implemented an automated GitHub security auditing pipeline analysing 89 open-source repositories, correlating Issues, PRs, Commits, and Releases to detect CVE/CWE vulnerabilities.",
      "Implemented regex-based detection, confidence scoring, fix-version resolution (commit SHA to release tag mapping), and rate-limit–aware scalable API orchestration.",
      "Contributed to Crypto Fusion, a multimodal AI framework integrating Temporal Graph Neural Networks, Transformers, and Reinforcement Learning for financial forecasting and portfolio optimization.",
      "Engineered large-scale multimodal data pipelines (market, Reddit, news; 200+ assets, 2017–2025) and developed FinBERT/LLM-based sentiment and correlation models for financial forecasting.",
      "Achieved 8.3% RMSE reduction, +8.7 percentage points directional accuracy, and +0.29 Sharpe ratio improvement at 10 bps transaction costs versus state-of-the-art baselines.",
      "Built a hybrid time-series model combining Prophet and XGBoost to improve rainfall forecasting accuracy for Corpus Christi. Processed 2010–2025 weather data and engineered lag/rolling features to capture temporal patterns",
      "Reduced prediction error to MAE: 2.18 mm, RMSE: 6.25 mm through model stacking and evaluation using R² and RMSE."
    ],
    tech: ["Python", "Vulnerability Analysis", "Data Engineering", "Research"]
  },
  {
    id: "python-dev",
    role: "Python Developer",
    company: "Math Buddy",
    duration: "Past Role",
    bullets: [
      "Architected backend services and API endpoints to support internal applications.",
      "Improved system reliability via structured logging, asynchronous processing, and rigorous testing.",
      "Collaborated across teams to deploy updates seamlessly into production environments."
    ],
    tech: ["Python", "FastAPI", "Flask", "Machine Learning"]
  }
];

export const capabilities = [
  {
    title: "AI Systems",
    summary: "Building intelligent logic into robust applications.",
    items: ["RAG Pipelines", "LLM Integration", "NLP Workflows", "Production Inference APIs"],
    tech: "PyTorch, LangChain, HuggingFace"
  },
  {
    title: "Backend Engineering",
    summary: "Architecting the core of scalable systems.",
    items: ["FastAPI Services", "Async Orchestration", "Structured Logging", "Reliable APIs"],
    tech: "Python, Next.js, SQL/NoSQL"
  },
  {
    title: "Cloud, Deployment & MLOps",
    summary: "Bridging the gap between research and production.",
    items: ["Model Deployment", "Containerization", "CI/CD Pipelines", "Latency Optimization"],
    tech: "Docker, Vercel, AWS/GCP basics"
  },
  {
    title: "Security & Analysis",
    summary: "Defensive programming and auditing.",
    items: ["Vulnerability Auditing", "Deterministic Analysis", "Rate-limit Management", "Data Integrity"],
    tech: "GitHub API, OWASP Principles"
  }
];

export const publications = [
  {
    id: "pub-1",
    title: "A Comprehensive Study: Machine Learning Based Analysis and Forecasting of Cryptocurrency Trends",
    venue: "First International Conference on Computational Science and Mathematical Modelling (ICCSMM 2025)",
    year: "2025",
    link: "#"
  },
  {
    id: "pub-2",
    title: "Helmet Detection and Number Plate Recognition using YOLOv3 in Real-Time",
    venue: "IEEE - 2023 3rd International Conference on Innovative Mechanisms for Industry Applications (ICIMIA)",
    year: "2023",
    link: "https://ieeexplore.ieee.org/document/10425838"
  },
  {
    id: "pub-3",
    title: "BALANCING ENTREPRENEURSHIP AND PERSONAL LIFE",
    venue: "International Journal of Scientific Research in Engineering and Management (IJSREM)",
    year: "September 24 2024",
    link: "https://ijsrem.com/download/balancing-entrepreneurship-and-personal-life/"
  },
  {
    id: "pub-4",
    title: "THE REVOLUTION IN HEALTHCARE: HEALTH INFORMATION TECHNOLOGY",
    venue: "International Journal of Scientific Research in Engineering and Management (IJSREM)",
    year: "November 19 2023",
    link: "https://ijsrem.com/download/the-revolution-in-healthcare-health-information-technology/"
  },
];
