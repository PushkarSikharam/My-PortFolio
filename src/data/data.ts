export const experience = [
  {
    id: "grad-research",
    role: "Graduate Research Assistant",
    company: "Texas A&M University - Corpus Christi",
    duration: "2025 - Present",
    link: "https://github.com/PushkarSikharam/Vulnerability-Detection-on-CodeBase",
    bullets: [
      "Led an empirical study benchmarking 3 frontier LLMs (Gemini 2.5 Flash, Claude 3.5 Sonnet, GPT-4o) across 810 total assessments on their ability to detect real-world CVEs in LLM-Powered Applications - submitted to ACSAC 2026.",
      "Built a full-stack CVE mining and benchmarking pipeline: GitHub API data collection, regex/CWE analysis, version resolution, multi-model evaluation runners, and an automated rescoring engine for reproducible results.",
      "Discovered severe patch blindness across all models - up to 56.5% of patched (safe) code flagged as vulnerable - establishing that no current LLM is reliable as a standalone security auditor.",
      "Engineered multimodal data pipelines for Crypto Fusion across market, Reddit, and news sources for 200+ assets, improving forecasting quality by 8.3% RMSE with a +0.29 Sharpe ratio lift.",
      "Built a hybrid Prophet + XGBoost rainfall forecasting model for Corpus Christi, reducing MAE from 3.16 mm to 2.18 mm through lagged features, rolling windows, and residual modeling."
    ],
    tech: ["Python", "LLMs", "Cybersecurity", "Data Pipelines", "Benchmarking", "Time-Series"]
  },
  {
    id: "python-dev",
    role: "Python Developer",
    company: "Math Buddy",
    duration: "Mar 2022 - Dec 2022",
    bullets: [
      "Built Python backend services and API endpoints to support internal product workflows and application integrations.",
      "Improved service reliability with structured logging, asynchronous processing patterns, and test-driven validation.",
      "Collaborated with product and engineering stakeholders to ship production updates with minimal deployment friction."
    ],
    tech: ["Python", "FastAPI", "Flask", "APIs", "Backend Systems"]
  }
];

export const capabilities = [
  {
    title: "LLM Applications",
    summary: "Designing AI features that connect retrieval, prompting, and backend logic into usable products - and benchmarking their reliability on real-world security tasks.",
    items: ["RAG Pipelines", "LLM Integration", "Multi-Model Evaluation", "Security Benchmarking"],
    tech: "Gemini, Claude, GPT-4o, LangChain, HuggingFace"
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
    id: "pub-acsac",
    title: "Can LLMs Distinguish Vulnerable from Patched Code? An Empirical Study on LLM-Powered Applications",
    venue: "ACSAC 2026 (Under Review)",
    year: "2026",
    link: "https://github.com/PushkarSikharam/Vulnerability-Detection-on-CodeBase"
  },
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
    year: "Aug 2024 - May 2026",
    logo: "/education/TAMU-CC.png",
    abbr: "TAMU-CC"
  },
  {
    id: "edu-2",
    degree: "Bachelor of Engineering in Computer Science",
    school: "Sri Chandrasekharendra Saraswathi Vishwa Maha Vidyalaya University",
    year: "2020-2024",
    logo: "/education/SCSVMV.png",
    abbr: "SCSVMV"
  }
];
