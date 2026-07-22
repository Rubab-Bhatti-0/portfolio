import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "../data/portfolio";
import StatusDot from "./StatusDot";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-2xl bg-surface-container-lowest border border-outline-variant/30 rounded-3xl overflow-hidden shadow-2xl pointer-events-auto relative lightning-glow"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-on-surface-variant hover:text-on-surface transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              <div className="p-8 md:p-12">
                {/* Category & Status */}
                <div className="flex items-center gap-3 mb-6">
                  <StatusDot color="primary" />
                  <span className="text-[10px] font-bold tracking-[0.2em] text-on-surface-variant/70 uppercase">
                    {project.category || "WEB DEVELOPMENT"}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-on-surface mb-6 leading-tight">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Action Button */}
                <div className="flex gap-4 mb-10">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:opacity-95 transition-all"
                    >
                      View Live
                      <span className="material-symbols-outlined text-sm">north_east</span>
                    </a>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-surface-container-high hover:bg-surface-container-highest text-on-surface px-6 py-3 rounded-xl font-semibold border border-outline-variant/30 hover:shadow-md transition-all"
                    >
                      View Code
                      <span className="material-symbols-outlined text-sm">code</span>
                    </a>
                  )}
                </div>

                {/* Bullets */}
                <ul className="space-y-4 mb-10">
                  {(project.bullets || [project.description]).map((bullet, idx) => (
                    <li key={idx} className="flex gap-3 text-on-surface-variant leading-relaxed">
                      <span className="text-primary mt-1.5 flex-shrink-0">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 4L6 0V8L0 4Z" fill="currentColor" />
                        </svg>
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Highlight Quote */}
                {project.summary && (
                  <p className="text-primary font-medium italic mb-10 flex gap-2 items-center">
                    <span className="material-symbols-outlined text-base">arrow_right_alt</span>
                    {project.summary}
                  </p>
                )}

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 rounded-full bg-surface-container border border-outline-variant/30 text-on-surface-variant text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
