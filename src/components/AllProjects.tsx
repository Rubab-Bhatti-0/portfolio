import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects, type Status } from "../data/portfolio";

const statusStyle: Record<Status, string> = {
  live: "text-primary border-primary/40",
  internal: "text-amber-500 border-amber-500/40",
  archived: "text-on-surface-variant border-outline-variant",
};

export default function AllProjects() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-container-max mx-auto px-gutter md:px-xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-xs font-label-md text-primary hover:underline underline-offset-4 mb-8"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Portfolio
        </Link>
        
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-xl text-on-surface">
          All <span className="text-primary">Projects</span>
        </h1>

        {/* Featured Projects Section */}
        <div className="mb-2xl">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-lg">Featured Projects</h2>
          <div className="grid gap-md md:grid-cols-2 lg:grid-cols-3">
            {projects.filter(p => p.featured).map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/30 hover:shadow-2xl transition-all"
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
        </div>

        {/* Archive Section */}
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-lg">Archive</h2>
          <div className="space-y-sm border border-outline-variant/30 rounded-2xl overflow-hidden bg-surface-container-lowest/50">
            {projects.filter(p => !p.featured).map((p, i) => (
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
      </div>
    </div>
  );
}
