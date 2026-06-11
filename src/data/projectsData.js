export const projectsData = [
  {
    id: 1,
    title: "Green Earth",
    description: "An AI-powered climate analytics platform that processes NetCDF climate datasets using FastAPI and NumPy. Integrates machine learning models (LSTM, Linear Regression, Isolation Forest) for anomaly detection and trend prediction, visualizing insights via an interactive dashboard.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000",
    technologies: ["Python", "FastAPI", "React", "LSTM", "Isolation Forest", "NetCDF", "NumPy", "Tailwind CSS"],
    github: "https://github.com/RidhiJindal17/green-earth",
    live: "https://green-earth-swart.vercel.app/",
    features: [
      "NetCDF atmospheric dataset processing using FastAPI and NumPy",
      "LSTM and Isolation Forest models for anomaly and trend detection",
      "Interactive data visualizations and dashboards in React"
    ]
  },
  {
    id: 2,
    title: "Path Finder",
    description: "An AI career guidance system and skill gap analyzer that processes resumes to identify alignment gaps. It maps semantic similarities and auto-generates personalized learning roadmaps with curated educational materials.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
    technologies: ["Python", "FastAPI", "Sentence-BERT", "Gemini API", "spaCy", "React"],
    github: "https://github.com/RidhiJindal17/PathFinderAI",
    live: "https://github.com/RidhiJindal17/PathFinderAI",
    features: [
      "Sentence-BERT semantic matching for skills alignment gap analysis",
      "Automated extraction of technical skills from resumes using spaCy",
      "Personalized learning roadmaps with curated YouTube resource recommendations"
    ]
  },
  {
    id: 3,
    title: "BidSphere",
    description: "BidSphere AI is an AI-powered enterprise bid lifecycle management platform that helps organizations manage proposals, automate workflows, track bid progress through a Kanban system, generate AI-driven insights, and maintain secure audit trails using a scalable MERN architecture.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
    technologies: ["React.js",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Recharts"],
    github: "https://github.com/RidhiJindal17/bid-tracker",
    live: "https://bid-tracker-tawny.vercel.app/",
    features: [
      "AI-powered bid analysis, Kanban workflow management, contextual AI chat, analytics dashboard, JWT authentication, RBAC, audit logs, notifications, document management, and enterprise-grade security."
    ]
  }
];
