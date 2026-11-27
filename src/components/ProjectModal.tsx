import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useId, useRef } from "react";
import type { Project } from "../data/portfolio";
import { isValidHttpUrl } from "../lib/validation";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !project) return;

    dialog.showModal();
    return () => dialog.close();
  }, [project]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      className="project-dialog"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {project && (
        <div className="p-5 sm:p-8">
          <div className="flex items-start justify-between gap-3">
            <div>
              {project.category && <p className="portfolio-eyebrow">{project.category}</p>}
              <h2 id={titleId} className="mt-1 font-display-lg text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
                {project.title}
              </h2>
              {project.subtitle && <p className="mt-1 text-base font-bold">{project.subtitle}</p>}
            </div>
            <button type="button" className="portfolio-icon-button shrink-0" aria-label="Close project details" onClick={onClose}>
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          <p className="mt-3 text-on-surface-variant">{project.description}</p>
          {project.bullets && (
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-on-surface-variant marker:text-primary">
              {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          )}
          {project.summary && <p className="mt-4 text-sm font-medium text-primary">{project.summary}</p>}
          <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((technology) => <li key={technology} className="portfolio-tag">{technology}</li>)}
          </ul>

          {(isValidHttpUrl(project.live) || isValidHttpUrl(project.github)) && (
            <div className="mt-5 flex flex-wrap gap-2.5">
              {isValidHttpUrl(project.live) && (
                <a href={project.live} target="_blank" rel="noreferrer" className="portfolio-button bg-primary text-on-primary hover:brightness-110">
                  View live <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
              {isValidHttpUrl(project.github) && (
                <a href={project.github} target="_blank" rel="noreferrer" className="portfolio-button portfolio-button-secondary">
                  View code <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </dialog>
  );
}
