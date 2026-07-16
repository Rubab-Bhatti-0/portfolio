import { useState } from "react";
import { motion } from "framer-motion";
import { projects, type Status } from "../data/portfolio";

const statusStyle: Record<Status, string> = {
  live: "text-primary border-primary/40",
  internal: "text-amber-500 border-amber-500/40",
  archived: "text-on-surface-variant border-outline-variant",
};

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const displayedProjects = showAll ? rest : rest.slice(0, 3);

  return (
    <section id="projects" className="mx-auto max-w-container-max px-gutter md:px-xl py-xl">
      <div className="mb-xl">
        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-md reveal-on-scroll">
          Featured <span className="text-primary">Projects</span>
        </h2>
      </div>

      {/* Featured Projects Grid */}
      <div className="grid gap-md md:grid-cols-2 mb-xl reveal-on-scroll">
        {featured.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="group bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/30 hover:shadow-2xl transition-all reveal-on-scroll"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="aspect-video overflow-hidden bg-surface-container">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-tertiary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-6xl opacity-20">
                  {p.status === "live" ? "check_circle" : "archive"}
                </span>
              </div>
            </div>
            <div className="p-lg">
              <div className="flex justify-between items-start mb-sm">
                <h3 className="font-headline-md text-headline-md text-on-surface">{p.title}</h3>
                <span
                  className={`text-xs font-label-sm border rounded-full px-3 py-1 uppercase tracking-wider ${statusStyle[p.status]}`}
                >
                  {p.status}
                </span>
              </div>
              <p className="text-on-surface-variant mb-md text-body-md">{p.description}</p>
              <div className="flex flex-wrap gap-xs mb-md">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-label-sm bg-surface-container px-2 py-1 rounded text-on-surface"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-md border-t border-outline-variant/30 pt-md">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-xs text-primary hover:text-primary/80 transition-colors font-label-md"
                >
                  <span className="material-symbols-outlined text-sm">code</span>
                  GitHub
                </a>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-xs text-primary hover:text-primary/80 transition-colors font-label-md"
                  >
                    <span className="material-symbols-outlined text-sm">north_east</span>
                    Live
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Archive Section */}
      <div className="reveal-on-scroll">
        <h3 className="font-headline-md text-headline-md text-on-surface mb-md">Archive</h3>
        <div className="space-y-sm border border-outline-variant/30 rounded-2xl overflow-hidden bg-surface-container-lowest/50">
          {displayedProjects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.github}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-md px-lg py-md hover:bg-surface-container/50 transition-colors border-b border-outline-variant/20 last:border-b-0"
            >
              <div>
                <h4 className="font-headline-md text-on-surface">{p.title}</h4>
                <p className="text-on-surface-variant text-body-md">{p.period}</p>
              </div>
              <div className="flex flex-wrap gap-xs">
                {p.stack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-label-sm text-on-surface-variant"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Show More Button */}
      {!showAll && rest.length > 3 && (
        <div className="mt-lg text-center reveal-on-scroll">
          <button
            onClick={() => setShowAll(true)}
            className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-md flex items-center gap-xs hover:shadow-xl hover:-translate-y-1 transition-all mx-auto mb-md"
          >
            Show More Projects
            <span className="material-symbols-outlined">add_circle</span>
          </button>
        </div>
      )}

      {/* View Full Archive Link */}
      <div className="mt-md text-center reveal-on-scroll">
        <a
          href={`${projects[0]?.github?.split("/").slice(0, -1).join("/")}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-xs font-label-md text-primary hover:underline underline-offset-4"
        >
          View full archive on GitHub
          <span className="material-symbols-outlined text-sm">link</span>
        </a>
      </div>
    </section>
  );
}
