import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";
import StatusDot from "./StatusDot";

const links = [
  { href: "#about", label: "about" },
  { href: "#stack", label: "stack" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#certs", label: "certs" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-[var(--color-ink)]/90 backdrop-blur border-b border-[var(--color-line)]" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-[var(--font-mono)] text-sm text-[var(--color-text)]">
          <StatusDot />
          <span className="tracking-tight">{profile.name.toLowerCase().replace(" ", "_")}</span>
        </a>
        <ul className="hidden gap-8 font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-muted)] md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-[var(--color-cyan)]">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-md border border-[var(--color-line)] px-3 py-1.5 font-[var(--font-mono)] text-xs text-[var(--color-cyan)] transition-colors hover:border-[var(--color-cyan)]"
        >
          say hi ↗
        </a>
      </nav>
    </header>
  );
}
