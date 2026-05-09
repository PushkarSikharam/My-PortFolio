export const experience = [
  {
    id: "grad-research",
    role: "Graduate Research Assistant",
    company: "Texas A&M University - Corpus Christi",
    duration: "2025 - Present",
    link: "https://github.com/PushkarSikharam/Vulnerability-Detection-on-CodeBase",
    bullets: [
      "Designed and implemented a GitHub CVE vulnerability benchmark pipeline that mines repository histories, maps patched CVEs, and builds ground-truth datasets for LLM-based vulnerability detection.",
      "Built scalable Python data collection and analysis workflows using GitHub APIs, regex/CWE tagging, fix-version resolution, and rate-limit-aware orchestration for large-scale security research.",
      "Contributed to Crypto Fusion, a multimodal AI framework combining Temporal Graph Neural Networks, Transformers, and Reinforcement Learning for financial forecasting and portfolio optimization.",
      "Engineered multimodal data pipelines across market, Reddit, and news sources for 200+ assets, and developed FinBERT/LLM-driven sentiment and correlation features for downstream modeling.",
      "Improved forecasting quality with an 8.3% RMSE reduction, +8.7 percentage points directional accuracy, and +0.29 Sharpe ratio improvement at 10 bps transaction costs versus baseline models.",
      "Built a hybrid Prophet + XGBoost forecasting pipeline for Corpus Christi rainfall prediction, using lagged and rolling weather features from 2010-2025 to capture seasonality and nonlinear patterns.",
      "Reduced prediction error to 2.18 mm MAE and 6.25 mm RMSE through model stacking, feature engineering, and iterative evaluation."
    ],
    tech: ["Python", "LLMs", "Data Pipelines", "Vulnerability Analysis", "Time-Series"]
  },
  {
    id: "python-dev",
    role: "Python Developer",
    company: "Math Buddy",
    duration: "Mar 2022 - Dec 2022",
    bullets: [
      "Architected Python backend services and API endpoints to support internal product workflows and application integrations.",
      "Improved service reliability through structured logging, asynchronous processing patterns, and test-driven validation.",
      "Collaborated with product and engineering stakeholders to ship production updates with minimal deployment friction."
    ],
    tech: ["Python", "FastAPI", "Flask", "APIs", "Backend Systems"]
  }
];

export const capabilities = [
  {
    title: "LLM Applications",
    summary: "Designing AI features that connect retrieval, prompting, and backend logic into usable products.",
    items: ["RAG Pipelines", "LLM Integration", "Prompt-Oriented Workflows", "Production Inference APIs"],
    tech: "LangChain, HuggingFace, Gemini, FinBERT"
  },
  {
    title: "Data Engineering",
    summary: "Building reliable pipelines that collect, transform, and serve structured data for ML and analytics.",
    items: ["API Ingestion", "ETL/ELT Workflows", "Feature Engineering", "Dataset Curation"],
    tech: "Python, SQL, GitHub API, Pandas"
  },
  {
    title: "Backend Systems",
    summary: "Architecting APIs and services that turn data and model outputs into dependable user-facing systems.",
    items: ["FastAPI Services", "Async Orchestration", "Structured Logging", "Reliable APIs"],
    tech: "Python, FastAPI, Flask, Next.js"
  },
  {
    title: "ML Systems & Analytics",
    summary: "Applying machine learning and statistical modeling to solve forecasting, optimization, and decision problems.",
    items: ["Time-Series Forecasting", "Sentiment Modeling", "Multimodal Features", "Evaluation & Optimization"],
    tech: "XGBoost, Prophet, Transformers, PyTorch"
  },
  {
    title: "Deployment & MLOps",
    summary: "Bridging experimentation and production with pragmatic deployment and monitoring practices.",
    items: ["Model Deployment", "Containerization", "CI/CD Pipelines", "Performance Optimization"],
    tech: "Docker, Vercel, AWS/GCP basics"
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
  }
];

export const education = [
  {
    id: "edu-1",
    degree: "Master of Science in Computer Science",
    school: "Texas A&M University - Corpus Christi",
    year: "Aug 2024 - May 2026"
  },
  {
    id: "edu-2",
    degree: "Bachelor of Technology in Computer Science",
    school: "Sri Chandrasekharendra Saraswathi Vishwa Maha Vidyalaya University",
    year: "2020-2024"
  }
];
