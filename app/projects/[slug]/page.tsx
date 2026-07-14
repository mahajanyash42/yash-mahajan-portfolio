import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/site";

export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();
  return <main className="case-page">
    <div className="case-nav section-shell"><Link href="/#projects"><ArrowLeft size={17}/> Back to portfolio</Link><a href={project.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={15}/></a></div>
    <section className="case-hero section-shell"><p className="eyebrow">{project.eyebrow}</p><h1>{project.title}</h1><p>{project.summary}</p><div className="impact impact--large">{project.impact}</div><div className="chips">{project.stack.map(s=><span key={s}>{s}</span>)}</div></section>
    <section className="case-content section-shell"><div className="case-block"><p className="section-label">The challenge</p><h2>Why this problem needed a different architecture</h2><p>{project.challenge}</p></div><div className="case-block"><p className="section-label">The solution</p><h2>How I approached it</h2><p>{project.solution}</p></div><div className="case-columns"><div><p className="section-label">Architecture</p><ol>{project.architecture.map(x=><li key={x}>{x}</li>)}</ol></div><div><p className="section-label">Results</p><ul>{project.results.map(x=><li key={x}>{x}</li>)}</ul></div></div></section>
    <footer className="footer section-shell"><span>Yash Mahajan</span><Link href="/#projects">More projects <ArrowUpRight size={15}/></Link></footer>
  </main>
}
