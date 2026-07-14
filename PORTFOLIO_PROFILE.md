# Portfolio Content Brief — Yash Mahajan

## Instructions for the LLM (read this first, no further instructions will be given)

You are given a portfolio website template's code, plus this document. Do the following without asking me anything further:

1. **Keep the template's design as-is.** Do not change its layout, component structure, color scheme, typography, spacing, or animations unless a section literally cannot hold the content below without breaking (e.g., a fixed-length list that needs one more item) — in that case, adapt the markup minimally and keep the existing visual style consistent.
2. **Replace every piece of placeholder/sample content** (name, title, tagline, bio, location, contact links, nav labels, experience entries, skills, projects, stats, contact copy, page title/meta description) with the real content from the sections below. Do not leave any template placeholder text, lorem ipsum, sample company names, or dummy links in the final output.
3. **Map content to the template's existing sections** by purpose, not by name — e.g. put the bio wherever the template has an "About"/"Bio"/"Intro" block, put timeline entries wherever it has "Experience"/"Work"/"Timeline", etc. If the template has a section this document has no content for (e.g. testimonials, blog, education-only block beyond what's listed), leave that section's existing placeholder as a clearly marked TODO comment rather than inventing content.
4. **Do not fabricate anything** — no invented metrics, employers, dates, testimonials, or skills beyond what's listed here. If the template needs more items than provided (e.g. 6 project slots but only 4 projects exist), either leave the extra slots empty/hidden or duplicate-feature the strongest projects — don't invent new ones.
5. **Update metadata/SEO** (page `<title>`, `<meta description>`, Open Graph tags, favicon alt text, etc.) to match my name, title, and tagline.
6. **Use the exact contact links given** (email, LinkedIn, GitHub) — do not alter the URLs or handle.
7. **Preserve section order** where the template already has one; otherwise use the nav order in section 8 below.
8. **Section 10 ("current visual identity") is optional reference only** — only apply it if I explicitly ask you to restyle the template to match my existing site; otherwise ignore it and keep the template's own look.
9. When done, briefly list what you changed and flag anything you couldn't map (per rule 3) instead of silently guessing.

---

## 1. Identity

- **Full name:** Yash Mahajan
- **Title / role:** Data Scientist & AI/ML Engineer
- **One-line tagline (hero description):** I build intelligent systems, data products, and reliable AI applications that connect language models with databases, APIs, knowledge graphs, and real-world workflows.
- **Location:** College Park, Maryland
- **Availability status:** Open to full-time opportunities
- **Currently exploring roles in:** Data Science, AI/ML Engineering, Applied AI, Data Engineering
- **Education:** M.S. in Information Systems, University of Maryland (in progress)
- **Origin:** From Mumbai, India
- **Personal interests (for an "about" section):** Football (supports Real Madrid and Cristiano Ronaldo), working out, exploring new places

## 2. Contact

- **Email:** yashm1@umd.edu
- **LinkedIn:** https://www.linkedin.com/in/yashhmahajan/
- **GitHub:** https://github.com/mahajanyash42
- **Resume path (if template supports a downloadable resume):** /resume.pdf

## 3. Bio (long form, for an About section)

I am a Data Scientist and AI Engineer from Mumbai, pursuing an M.S. in Information Systems at the University of Maryland.

My work spans agentic AI, machine learning, data engineering, software development, cloud infrastructure, and intelligent automation. I am especially interested in systems that combine language models with structured databases, vector search, knowledge graphs, APIs, and validation layers.

Outside technology, I am usually following football, supporting Real Madrid and Cristiano Ronaldo, working out, or exploring new places.

## 4. Quick stats (for a hero/stat strip, if the template has one)

- 5 — Professional experiences
- 4 — Featured projects
- 2+ — Years across Data, AI & Cloud
- 3 — Industry domains

## 5. Experience (reverse-chronological order as listed)

### Software & Data Engineering Intern — Wave Automate LLC
**Jun 2026 — Present**
- Analyze 500+ synthetic healthcare call records and large application schemas using SQL and GCP data to support client-facing analytics.
- Develop and test JavaScript/TypeScript product features for call reporting, customer segmentation, appointment outcomes, and operational insights.
- Contribute through Git feature branches, local development, AI-assisted coding, debugging, product testing, and privacy-aware data handling.

### AI & Innovation Intern — Compass Pro Bono
**Jun 2026 — Present**
- Built an AI-powered grant intelligence workflow integrating six tools across search, extraction, LLM analysis, Google Sheets, automation, and Slack.
- Designed 10 targeted search strategies and a 14-field evaluation framework for relevance, deadlines, funding fit, and recommended actions.
- Automated a twice-weekly search → analyze → store → share pipeline supporting nonprofit AI adoption and capacity building.

### Teaching Assistant — University of Maryland
**Jan 2026 — Present**
- Develop applied AI research projects involving LangGraph, RAG, Graph-RAG, knowledge graphs, vector databases, SQL systems, APIs, and evaluation.
- Built multi-tool systems for SEC financial intelligence and multi-tier supply-chain risk reasoning using ChromaDB, SQL Server, Neo4j, and OpenAI.
- Create technical documentation and examples covering LangChain, tool calling, structured outputs, streaming, retrieval, and agent orchestration.

### Graduate Industry Practicum Consultant — AI Systems — University of Maryland · Microsoft industry client
**Jan 2026 — Present**
- Collaborate on an AI-powered multi-agent concept for emergency medical services, focused on patient intake, routing, handoffs, and coordination.
- Translate stakeholder needs into workflows, architecture, data models, and an implementation roadmap using Microsoft ecosystem tools.
- Work within a five-member consulting team on a synthetic-data, privacy-conscious prototype and measurable workflow targets.

### Cloud Engineer — Jio Platforms Ltd.
**Dec 2023 — Aug 2024**
- Supported enterprise Linux and cloud infrastructure while resolving operating-system, VM, and production issues through incident workflows.
- Performed patching and infrastructure operations across 50+ servers while contributing to VM migration, resizing, automation, and reliability.
- Collaborated with engineering teams and Red Hat support to help maintain a 99.9% infrastructure uptime target.

## 6. Skills (grouped)

**AI & Machine Learning:** Python, LangChain, LangGraph, RAG, Graph-RAG, OpenAI, Scikit-learn, Embeddings, Tool Calling

**Data Engineering & Database:** SQL, SQL Server, Neo4j, ChromaDB, GCP, ETL, REST APIs, Data Modeling, BigQuery

**Software & Applications:** TypeScript, JavaScript, Streamlit, FastAPI, Git, GitHub, VS Code, Next.js

**Analytics & Automation:** Pandas, NumPy, Matplotlib, Tableau, Power BI, n8n, Copilot Studio, Dataverse, Zapier, Google Sheets, Slack

## 7. Projects (full detail, in featured order)

### Project 1: Agentic RAG for Financial Intelligence
- **Eyebrow / category:** Reliable multi-tool financial AI
- **Summary:** A LangGraph system that routes SEC filing questions to semantic retrieval, structured SQL analysis, live EDGAR search, or a combined workflow—then validates numeric answers before returning them.
- **Impact metric:** 100% routing accuracy across 19 evaluation questions
- **Tech stack:** LangGraph, OpenAI, ChromaDB, SQL Server, SEC EDGAR, Python
- **GitHub:** https://github.com/mahajanyash42/agentic-rag-finance
- **Challenge:** Standard RAG is effective for qualitative questions but can silently fail on exact financial figures by retrieving narrative passages instead of authoritative structured values.
- **Solution:** I designed a routing layer that classifies each query and dispatches it to the right retrieval method. Numeric and cross-document answers pass through an additional validator grounded in SQL data.
- **Architecture:**
  1. Router classifies narrative, numeric, current, and cross-document queries
  2. ChromaDB retrieves 10-K narrative sections
  3. SQL Server answers exact financial and comparison questions
  4. SEC EDGAR handles filing recency
  5. Synthesis produces grounded responses with source context
  6. Validator checks generated figures against structured ground truth
- **Results:**
  - 19/19 evaluation questions routed correctly
  - 5/5 validator stress tests handled correctly
  - Cross-document answers combine management narrative with financial evidence

### Project 2: SupplyGraph: Graph-RAG for Supply Chain Risk
- **Eyebrow / category:** Multi-hop reasoning over complex dependencies
- **Summary:** A hybrid agent that combines Neo4j graph traversal with semantic search to trace how supplier disruptions propagate across tiers and affect finished products.
- **Impact metric:** 90% overall hybrid-agent accuracy
- **Tech stack:** LangGraph, Neo4j, Graph-RAG, Text-to-Cypher, Vector Search, Python
- **GitHub:** https://github.com/mahajanyash42/supplygraph-rag
- **Challenge:** Vector search can retrieve narrative incident details, but it cannot reliably walk multi-tier relationships such as Event → Facility → Supplier → Component → Product.
- **Solution:** I built a router that selects graph traversal, semantic retrieval, or both. The graph path uses Text-to-Cypher with schema validation and a self-correction retry for empty results.
- **Architecture:**
  1. Router selects graph, vector, or hybrid retrieval
  2. Neo4j traverses supplier tiers and product dependencies
  3. Neo4j vector index retrieves incident-report details
  4. Hybrid synthesis combines structural impact with narrative context
  5. Evaluation compares graph-only, vector-only, and hybrid strategies
- **Results:**
  - Hybrid agent reached 90% overall accuracy
  - Graph-only baseline: 65%; vector-only baseline: 40%
  - Identified and fixed a reproducible third-party Cypher validator failure

### Project 3: AI Shopping Agent
- **Eyebrow / category:** Amazon Rufus-inspired product assistant
- **Summary:** A conversational shopping assistant that uses LLM tool calling to search products, inspect ratings and reviews, recommend options, and support shopping actions through a Streamlit interface.
- **Impact metric:** End-to-end tool-calling workflow with a persistent product data layer
- **Tech stack:** LangChain, OpenAI, Streamlit, SQLite, Python
- **GitHub:** https://github.com/mahajanyash42/ai-shopping-agent
- **Challenge:** Shopping questions require the model to retrieve structured product data, apply constraints, explain tradeoffs, and take actions instead of simply generating text.
- **Solution:** I connected an LLM to product, review, cart, and order tools, then wrapped the workflow in an interactive application with persistent SQLite storage.
- **Architecture:**
  1. Natural-language request interpreted by the agent
  2. Tool calls search structured product and review data
  3. Results are returned to the model as observations
  4. The model synthesizes a recommendation and next action
  5. Streamlit provides a conversational front end
- **Results:**
  - Supports multi-constraint product discovery
  - Demonstrates explicit Think → Act → Observe agent behavior
  - Connects conversational AI with structured transactional data

### Project 4: FoodBridge AI
- **Eyebrow / category:** Agentic workflow for food rescue
- **Summary:** An intelligent food-rescue workflow that matches surplus food with shelters, coordinates approvals, and automates communication while keeping a human in the loop.
- **Impact metric:** Built for the UMD Agentic AI Competition
- **Tech stack:** n8n, Slack, Google Sheets, Gmail, LLM Workflows
- **GitHub:** https://github.com/mahajanyash42/FoodBridgeAI
- **Challenge:** Food donation coordination is fragmented and time-sensitive, requiring matching, communication, and approval across several stakeholders.
- **Solution:** I designed an agentic workflow that captures donation details, evaluates shelter fit, requests approval, and coordinates notifications across operational tools.
- **Architecture:**
  1. Donation intake enters the workflow
  2. Structured data is stored and evaluated
  3. An LLM supports matching and communication
  4. Slack enables human review and approval
  5. Gmail coordinates outbound communication
- **Results:**
  - Demonstrates human-in-the-loop agent design
  - Connects multiple business tools in one workflow
  - Focuses on practical social-impact automation

## 8. Navigation (typical section order for a one-page portfolio)

About, Experience, Projects, Skills, Contact

## 9. Contact section copy (ready to drop in)

**Heading:** Have a data problem, an AI product idea, or a role where I can contribute?
**Body:** Let's connect. I am currently exploring full-time opportunities across Data Science, AI/ML Engineering, Applied AI, and Data Engineering.
**Buttons:** Email Me (mailto:yashm1@umd.edu) · Connect on LinkedIn · Explore GitHub

## 10. Optional: current visual identity (only use if the template should match my existing site)

- **Palette:** near-black background (#090b10), panel surfaces (#10131a / #151923), off-white text (#f5f7fb), muted gray text (#a6adbb), red accent (#ef3138 / #ff5a5f), cyan secondary accent (#8ee6ee)
- **Typography:** Space Grotesk for headings, Inter for body text
- **Layout rhythm:** 1180px max content width, generous ~120px section padding, hairline dividers between sections
- **Motion:** sections fade + slide up once as they scroll into view
