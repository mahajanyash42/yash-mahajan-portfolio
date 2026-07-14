import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/site";
export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <div className="project-number">0{index + 1}</div>
      <p className="eyebrow">{project.eyebrow}</p>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="impact">{project.impact}</div>
      <div className="chips">{project.stack.slice(0,5).map(s => <span key={s}>{s}</span>)}</div>
      <div className="project-actions">
        <Link href={`/projects/${project.slug}`}>Case study <ArrowUpRight size={16}/></Link>
        <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}><Github size={18}/></a>
      </div>
    </article>
  )
}
