"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["About", "Experience", "Projects", "Skills", "Contact"];
export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <a href="#top" className="brand" aria-label="Home"><span>Y</span>M</a>
      <nav className="nav-links">
        {links.map((l) => <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>)}
      </nav>
      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
      {open && <div className="mobile-menu">{links.map((l) => <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>)}</div>}
    </header>
  );
}
