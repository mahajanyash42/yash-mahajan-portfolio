import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { experiences, projects, siteConfig, skillGroups } from "@/data/site";

export default function Home() {
  return (
    <main id="top">
      <Nav />
      <section className="hero section-shell">
        <div className="hero-grid" />
        <Reveal className="hero-copy">
          <div className="availability"><span/> Open to full-time opportunities</div>
          <p className="kicker">DATA SCIENTIST · AI/ML ENGINEER</p>
          <h1>Building intelligent systems that connect <em>AI</em>, <em>data</em>, and <em>real-world decisions.</em></h1>
          <p className="hero-description">{siteConfig.description}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">Explore my work <ArrowDown size={17}/></a>
            <a className="btn btn-ghost" href={siteConfig.github} target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
          </div>
          <div className="hero-meta"><span><MapPin size={15}/>{siteConfig.location}</span><span>MSIS @ UMD</span></div>
        </Reveal>
        <Reveal delay={.15} className="hero-visual">
          <div className="portrait-wrap">
            <div className="portrait-glow"/>
            <div className="portrait">
              <Image src="/yash-hero-blazer-final.png" alt="Yash Mahajan" width={520} height={520} priority />
            </div>
          </div>
        </Reveal>
        <div className="hero-stats">
          <div><strong>5</strong><span>Professional Experiences</span></div>
          <div><strong>4</strong><span>Featured Projects</span></div>
          <div><strong>2+</strong><span>Years Across Data, AI & Cloud</span></div>
          <div><strong>3</strong><span>Industry Domains</span></div>
        </div>
      </section>

      <section id="about" className="section section-shell about">
        <Reveal><p className="section-label">01 · About</p><h2>I like building systems that are useful, explainable, and grounded in real data.</h2></Reveal>
        <div className="about-grid">
          <Reveal delay={.05}><p className="lead">I am a Data Scientist and AI Engineer from Mumbai, pursuing an M.S. in Information Systems at the University of Maryland.</p></Reveal>
          <Reveal delay={.12}><div className="about-copy"><p>My work spans agentic AI, machine learning, data engineering, software development, cloud infrastructure, and intelligent automation. I am especially interested in systems that combine language models with structured databases, vector search, knowledge graphs, APIs, and validation layers.</p><p>Outside technology, I am usually following football and cricket, supporting Real Madrid and Team India, working out, or exploring new places to eat.</p></div></Reveal>
        </div>
      </section>

      <section id="experience" className="section section-shell">
        <Reveal><p className="section-label">02 · Experience</p><h2>Building across product engineering, applied AI, research, consulting, and cloud.</h2></Reveal>
        <div className="timeline">
          {experiences.map((e, i) => <Reveal key={e.role} delay={i*.04} className="timeline-item"><div className="timeline-marker"><span/></div><div className="timeline-head"><div><h3>{e.role}</h3><p>{e.org}</p></div><time>{e.dates}</time></div><ul>{e.bullets.map(b => <li key={b}>{b}</li>)}</ul></Reveal>)}
        </div>
      </section>

      <section id="projects" className="section section-shell projects-section">
        <Reveal><p className="section-label">03 · Selected work</p><div className="section-heading-row"><h2>Projects designed around real failure modes—not just demos.</h2><a href={siteConfig.github} target="_blank" rel="noreferrer">View all on GitHub <ArrowUpRight size={16}/></a></div></Reveal>
        <div className="projects-grid">{projects.filter(p=>p.featured).map((p,i)=><Reveal key={p.slug} delay={i*.06}><ProjectCard project={p} index={i}/></Reveal>)}</div>
      </section>

      <section id="skills" className="section section-shell">
        <Reveal><p className="section-label">04 · Toolkit</p><h2>A broad technical foundation, organized around what I can build with it.</h2></Reveal>
        <div className="skills-grid">{skillGroups.map((g,i)=><Reveal key={g.title} delay={i*.05} className="skill-card"><p>0{i+1}</p><h3>{g.title}</h3><div className="skill-list">{g.skills.map(s=><span key={s}>{s}</span>)}</div></Reveal>)}</div>
      </section>

      <section id="contact" className="section section-shell contact">
        <Reveal className="contact-card"><p className="section-label">05 · Contact</p><h2>Have a data problem, an AI product idea, or a role where we can build something meaningful?</h2><p>Let’s connect. I’m currently exploring full-time opportunities in Data Science, AI/ML Engineering, Applied AI, and Data Engineering.</p><div className="contact-actions"><a className="btn btn-primary" href={siteConfig.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18}/> Connect on LinkedIn</a><a className="btn btn-ghost" href={siteConfig.github} target="_blank" rel="noreferrer"><Github size={18}/> Explore GitHub</a><a className="btn btn-ghost" href={`mailto:${siteConfig.email}`}><Mail size={18}/> Email Me</a></div></Reveal>
      </section>

      <footer className="footer section-shell"><span>© 2026 Yash Mahajan</span><span>Built with Next.js · Designed with intention</span></footer>
    </main>
  );
}
