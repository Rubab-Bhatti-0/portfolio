import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { projects, type Status } from "../data/portfolio";
import type { Project } from "../data/portfolio";
import ProjectModal from "./ProjectModal";

const statusStyle: Record<Status, string> = {
  live: "text-primary border-primary/40",
  internal: "text-amber-500 border-amber-500/40",
  archived: "text-on-surface-variant border-outline-variant",
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured);
  const displayedProjects = featured.slice(0, 4);

  return (
    <section id="projects" className="mx-auto max-w-container-max px-gutter md:px-xl py-xl">
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <div className="mb-xl">
        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-md reveal-on-scroll">
          Featured <span className="text-primary">Projects</span>
        </h2>
      </div>

      {/* Featured Projects Grid - Limited to 4 */}
      <div className="grid gap-md md:grid-cols-2 mb-xl reveal-on-scroll">
        {displayedProjects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="group bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/30 hover:shadow-2xl transition-all reveal-on-scroll cursor-pointer"
            style={{ transitionDelay: `${i * 100}ms` }}
            onClick={() => setSelectedProject(p)}
          >
            <div className="aspect-video overflow-hidden bg-surface-container">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-tertiary/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <span className="material-symbols-outlined text-primary text-6xl opacity-20">
                  {p.status === "live" ? "check_circle" : "archive"}
                </span>
              </div>
            </div>
            <div className="p-lg">
              <div className="flex justify-between items-start mb-sm">
                <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">{p.title}</h3>
                <span
                  className={`text-xs font-label-sm border rounded-full px-3 py-1 uppercase tracking-wider ${statusStyle[p.status]}`}
                >
                  {p.status}
                </span>
              </div>
              <p className="text-on-surface-variant mb-md text-body-md line-clamp-2">{p.description}</p>
              <div className="flex flex-wrap gap-xs mb-md">
                {p.stack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-label-sm bg-surface-container px-2 py-1 rounded text-on-surface"
                  >
                    {tech}
                  </span>
                ))}
                {p.stack.length > 3 && (
                  <span className="text-xs font-label-sm text-on-surface-variant">+{p.stack.length - 3} more</span>
                )}
              </div>
              <div className="flex items-center gap-xs text-primary font-label-md group-hover:gap-sm transition-all">
                View Details
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="mt-xl text-center reveal-on-scroll">
        <Link
          to="/projects"
          className="inline-flex items-center gap-xs font-label-md text-primary hover:underline underline-offset-4 bg-primary/10 px-6 py-3 rounded-full hover:bg-primary/20 transition-colors"
        >
          View All Projects
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>
    </section>
  );
}
