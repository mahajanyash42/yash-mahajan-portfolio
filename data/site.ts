export const siteConfig = {
  name: "Yash Mahajan",
  title: "Data Scientist & AI/ML Engineer",
  description:
    "I build data products, analytical solutions, and intelligent systems that turn complex information into reliable business decisions.",
  location: "College Park, Maryland",
  github: "https://github.com/mahajanyash42",
  linkedin: "https://www.linkedin.com/in/yashhmahajan/",
  email: "yashm1@umd.edu",
  resumeUrl: "/Yash_Mahajan_AI_Resume.pdf",
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  impact: string;
  stack: string[];
  github: string;
  demo?: string;
  featured: boolean;
  challenge: string;
  solution: string;
  architecture: string[];
  results: string[];
};

export const projects: Project[] = [
  {
    slug: "agentic-rag-finance",
    title: "Agentic RAG for Financial Intelligence",
    eyebrow: "Reliable multi-tool financial AI",
    summary:
      "A LangGraph system that routes SEC filing questions to semantic retrieval, structured SQL analysis, live EDGAR search, or a combined workflow—then validates numeric answers before returning them.",
    impact: "100% routing accuracy across 19 evaluation questions",
    stack: ["LangGraph", "OpenAI", "ChromaDB", "SQL Server", "SEC EDGAR", "Python"],
    github: "https://github.com/mahajanyash42/agentic-rag-finance",
    featured: true,
    challenge:
      "Standard RAG is effective for qualitative questions but can silently fail on exact financial figures by retrieving narrative passages instead of authoritative structured values.",
    solution:
      "I designed a routing layer that classifies each query and dispatches it to the right retrieval method. Numeric and cross-document answers pass through an additional validator grounded in SQL data.",
    architecture: [
      "Router classifies narrative, numeric, current, and cross-document queries",
      "ChromaDB retrieves 10-K narrative sections",
      "SQL Server answers exact financial and comparison questions",
      "SEC EDGAR handles filing recency",
      "Synthesis produces grounded responses with source context",
      "Validator checks generated figures against structured ground truth"
    ],
    results: [
      "19/19 evaluation questions routed correctly",
      "5/5 validator stress tests handled correctly",
      "Cross-document answers combine management narrative with financial evidence"
    ]
  },
  {
    slug: "supplygraph-rag",
    title: "SupplyGraph: Graph-RAG for Supply Chain Risk",
    eyebrow: "Multi-hop reasoning over complex dependencies",
    summary:
      "A hybrid agent that combines Neo4j graph traversal with semantic search to trace how supplier disruptions propagate across tiers and affect finished products.",
    impact: "90% overall hybrid-agent accuracy",
    stack: ["LangGraph", "Neo4j", "Graph-RAG", "Text-to-Cypher", "Vector Search", "Python"],
    github: "https://github.com/mahajanyash42/supplygraph-rag",
    demo: "https://supplygraph.yashmahajan.com/",
    featured: true,
    challenge:
      "Vector search can retrieve narrative incident details, but it cannot reliably walk multi-tier relationships such as Event → Facility → Supplier → Component → Product.",
    solution:
      "I built a router that selects graph traversal, semantic retrieval, or both. The graph path uses Text-to-Cypher with schema validation and a self-correction retry for empty results.",
    architecture: [
      "Router selects graph, vector, or hybrid retrieval",
      "Neo4j traverses supplier tiers and product dependencies",
      "Neo4j vector index retrieves incident-report details",
      "Hybrid synthesis combines structural impact with narrative context",
      "Evaluation compares graph-only, vector-only, and hybrid strategies"
    ],
    results: [
      "Hybrid agent reached 90% overall accuracy",
      "Graph-only baseline: 65%; vector-only baseline: 40%",
      "Identified and fixed a reproducible third-party Cypher validator failure"
    ]
  },
  {
    slug: "ai-shopping-agent",
    title: "AI Shopping Agent",
    eyebrow: "Amazon Rufus-inspired product assistant",
    summary:
      "A conversational shopping assistant that uses LLM tool calling to search products, inspect ratings and reviews, recommend options, and support shopping actions through a Streamlit interface.",
    impact: "End-to-end tool-calling workflow with a persistent product data layer",
    stack: ["LangChain", "OpenAI", "Streamlit", "SQLite", "Python"],
    github: "https://github.com/mahajanyash42/ai-shopping-agent",
    featured: true,
    challenge:
      "Shopping questions require the model to retrieve structured product data, apply constraints, explain tradeoffs, and take actions instead of simply generating text.",
    solution:
      "I connected an LLM to product, review, cart, and order tools, then wrapped the workflow in an interactive application with persistent SQLite storage.",
    architecture: [
      "Natural-language request interpreted by the agent",
      "Tool calls search structured product and review data",
      "Results are returned to the model as observations",
      "The model synthesizes a recommendation and next action",
      "Streamlit provides a conversational front end"
    ],
    results: [
      "Supports multi-constraint product discovery",
      "Demonstrates explicit Think → Act → Observe agent behavior",
      "Connects conversational AI with structured transactional data"
    ]
  },
  {
    slug: "foodbridge-ai",
    title: "FoodBridge AI",
    eyebrow: "Agentic workflow for food rescue",
    summary:
      "An intelligent food-rescue workflow that matches surplus food with shelters, coordinates approvals, and automates communication while keeping a human in the loop.",
    impact: "Built for the UMD Agentic AI Competition",
    stack: ["n8n", "Slack", "Google Sheets", "Gmail", "LLM Workflows"],
    github: "https://github.com/mahajanyash42/FoodBridgeAI",
    featured: true,
    challenge:
      "Food donation coordination is fragmented and time-sensitive, requiring matching, communication, and approval across several stakeholders.",
    solution:
      "I designed an agentic workflow that captures donation details, evaluates shelter fit, requests approval, and coordinates notifications across operational tools.",
    architecture: [
      "Donation intake enters the workflow",
      "Structured data is stored and evaluated",
      "An LLM supports matching and communication",
      "Slack enables human review and approval",
      "Gmail coordinates outbound communication"
    ],
    results: [
      "Demonstrates human-in-the-loop agent design",
      "Connects multiple business tools in one workflow",
      "Focuses on practical social-impact automation"
    ]
  }
];

export const experiences = [
  {
    role: "Software & Data Engineering Intern",
    org: "Wave Automate LLC",
    dates: "Jun 2026 — Present",
    bullets: [
      "Analyze 500+ synthetic healthcare call records and large application schemas using SQL and GCP data to support client-facing analytics.",
      "Develop and test JavaScript/TypeScript product features for call reporting, customer segmentation, appointment outcomes, and operational insights.",
      "Contribute through Git feature branches, local development, AI-assisted coding, debugging, product testing, and privacy-aware data handling."
    ]
  },
  {
    role: "AI & Innovation Intern",
    org: "Compass Pro Bono",
    dates: "Jun 2026 — Present",
    bullets: [
      "Built an AI-powered grant intelligence workflow integrating six tools across search, extraction, LLM analysis, Google Sheets, automation, and Slack.",
      "Designed 10 targeted search strategies and a 14-field evaluation framework for relevance, deadlines, funding fit, and recommended actions.",
      "Automated a twice-weekly search → analyze → store → share pipeline supporting nonprofit AI adoption and capacity building."
    ]
  },
  {
    role: "Teaching Assistant",
    org: "University of Maryland",
    dates: "Jan 2026 — Present",
    bullets: [
      "Develop applied AI research projects involving LangGraph, RAG, Graph-RAG, knowledge graphs, vector databases, SQL systems, APIs, and evaluation.",
      "Built multi-tool systems for SEC financial intelligence and multi-tier supply-chain risk reasoning using ChromaDB, SQL Server, Neo4j, and OpenAI.",
      "Create technical documentation and examples covering LangChain, tool calling, structured outputs, streaming, retrieval, and agent orchestration."
    ]
  },
  {
    role: "Graduate Industry Practicum Consultant — AI Systems",
    org: "University of Maryland · Microsoft industry client",
    dates: "Jan 2026 — Present",
    bullets: [
      "Collaborate on an AI-powered multi-agent concept for emergency medical services, focused on patient intake, routing, handoffs, and coordination.",
      "Translate stakeholder needs into workflows, architecture, data models, and an implementation roadmap using Microsoft ecosystem tools.",
      "Work within a five-member consulting team on a synthetic-data, privacy-conscious prototype and measurable workflow targets."
    ]
  },
  {
    role: "Cloud Engineer",
    org: "Jio Platforms Ltd.",
    dates: "Dec 2023 — Aug 2024",
    bullets: [
      "Supported enterprise Linux and cloud infrastructure while resolving operating-system, VM, and production issues through incident workflows.",
      "Performed patching and infrastructure operations across 50+ servers while contributing to VM migration, resizing, automation, and reliability.",
      "Collaborated with engineering teams and Red Hat support to help maintain a 99.9% infrastructure uptime target."
    ]
  }
];

export const skillGroups = [
  { title: "AI & Machine Learning", skills: ["Python", "LangChain", "LangGraph", "RAG", "Graph-RAG", "OpenAI", "Scikit-learn", "Embeddings", "Tool Calling"] },
  { title: "Data Engineering & Database", skills: ["SQL", "SQL Server", "Neo4j", "ChromaDB", "GCP", "ETL", "REST APIs", "Data Modeling", "BigQuery"] },
  { title: "Software & Applications", skills: ["TypeScript", "JavaScript", "Streamlit", "FastAPI", "Git", "GitHub", "VS Code", "Next.js"] },
  { title: "Analytics & Automation", skills: ["Pandas", "NumPy", "Matplotlib", "Tableau", "Power BI", "n8n", "Copilot Studio", "Dataverse" ,"Zapier", "Google Sheets", "Slack"] }
];
