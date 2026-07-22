import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects, type Status } from "../data/portfolio";
import type { Project } from "../data/portfolio";
import ProjectModal from "./ProjectModal";

const statusStyle: Record<Status, string> = {
  live: "text-primary border-primary/40",
  internal: "text-amber-500 border-amber-500/40",
  archived: "text-on-surface-variant border-outline-variant",
};

export default function AllProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-background py-20">
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
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

        {/* All Projects Grid with Full Details */}
        {/* All Projects Vertical Stack */}
        <div className="flex flex-col gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group bg-surface-container-lowest rounded-2xl p-6 md:p-8 border border-outline-variant/30 hover:shadow-[0_0_30px_rgba(53,37,205,0.08)] hover:border-primary/40 hover:-translate-y-0.5 transition-all cursor-pointer relative"
              onClick={() => setSelectedProject(p)}
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  {/* Featured Badge if applicable */}
                  {p.featured && (
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 animate-pulse" />
                      <span className="text-xs font-bold tracking-widest text-primary uppercase">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Header row with Title & Status */}
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <h3 className="font-headline-md text-2xl md:text-3xl text-on-surface group-hover:text-primary transition-colors leading-tight">
                      {p.title}
                    </h3>
                    <span
                      className={`text-xs font-label-sm border rounded-full px-3 py-1 uppercase tracking-wider shrink-0 ${statusStyle[p.status]}`}
                    >
                      {p.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-on-surface-variant mb-4 text-body-md leading-relaxed">
                    {p.description}
                  </p>

                  {/* Summary / Tagline Arrow */}
                  {p.summary && (
                    <p className="text-primary font-medium mb-6 text-body-md flex items-start gap-2">
                      <span className="shrink-0 font-bold select-none">→</span>
                      <span>{p.summary}</span>
                    </p>
                  )}
                </div>

                {/* Bottom Row: Tech Stack Tags & View details button */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-2">
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-label-sm bg-surface-container/60 border border-outline-variant/20 px-3 py-1.5 rounded-full text-on-surface-variant font-medium hover:bg-surface-container transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-xs text-primary font-label-md shrink-0 group-hover:gap-sm transition-all self-end sm:self-auto">
                    View Details
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
