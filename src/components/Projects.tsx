import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import { projects, type Status } from "../data/portfolio";

const statusStyle: Record<Status, string> = {
  live: "text-[var(--color-cyan)] border-[var(--color-cyan)]/40",
  internal: "text-[var(--color-amber)] border-[var(--color-amber)]/40",
  archived: "text-[var(--color-muted)] border-[var(--color-line)]",
};

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <div className="mb-12">
        <p className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-cyan)]">
           projects
        </p>
        <h2 className="mt-2 font-[var(--font-display)] text-3xl font-semibold text-[var(--color-text)] sm:text-4xl">
          Deployed services
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {featured.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="group flex flex-col rounded-xl border border-[var(--color-line)] bg-[var(--color-panel)]/60 p-6 transition-colors hover:border-[var(--color-cyan)]/50"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-[var(--font-display)] text-xl text-[var(--color-text)]">{p.title}</h3>
              <span
                className={`shrink-0 rounded border px-2 py-0.5 font-[var(--font-mono)] text-[10px] uppercase tracking-wider ${statusStyle[p.status]}`}
              >
                {p.status}
              </span>
            </div>
            <p className="mt-1 font-[var(--font-mono)] text-xs text-[var(--color-muted)]">{p.period}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded border border-[var(--color-line)] px-2 py-0.5 font-[var(--font-mono)] text-[10px] text-[var(--color-text)]"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-4 border-t border-[var(--color-line)] pt-4">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 font-[var(--font-mono)] text-xs text-[var(--color-text)] transition-colors hover:text-[var(--color-cyan)]"
              >
                <Code2 size={14} /> code
              </a>
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 font-[var(--font-mono)] text-xs text-[var(--color-text)] transition-colors hover:text-[var(--color-cyan)]"
                >
                  <ArrowUpRight size={14} /> live
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-14">
        <p className="mb-4 font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-muted)]">
          archive
        </p>
        <div className="divide-y divide-[var(--color-line)] rounded-xl border border-[var(--color-line)] bg-[var(--color-panel)]/40">
          {rest.map((p) => (
            <a
              key={p.title}
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col gap-1 px-5 py-4 transition-colors hover:bg-[var(--color-panel-2)]/60 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <span className="font-[var(--font-display)] text-[var(--color-text)]">{p.title}</span>
                <span className="ml-2 font-[var(--font-mono)] text-xs text-[var(--color-muted)]">{p.period}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.slice(0, 3).map((s) => (
                  <span key={s} className="font-[var(--font-mono)] text-[10px] text-[var(--color-muted)]">
                    {s}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
