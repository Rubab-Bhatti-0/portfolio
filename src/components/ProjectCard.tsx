import { ArrowUpRight } from "lucide-react";
import type { Project, Status } from "../data/portfolio";

const labels: Record<Status, string> = {
  live: "Live",
  internal: "Internal",
  archived: "Archived",
  development: "In development",
};

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
  showMetadata?: boolean;
}

export default function ProjectCard({ project, onOpen, showMetadata = false }: ProjectCardProps) {
  const { cover } = project;
  const detailed = Boolean(cover) || showMetadata;

  return (
    <article className={cover ? "portfolio-card grid overflow-hidden rounded-[19px] md:col-span-2 md:grid-cols-[1.06fr_1fr]" : "portfolio-card flex rounded-2xl"}>
      <div className={`flex min-w-0 flex-1 flex-col ${cover ? "p-5 sm:p-7 md:p-9" : "p-5 sm:p-6"}`}>
        <div className="flex flex-wrap items-center justify-between gap-2">
          {project.category && <p className="portfolio-eyebrow">{project.category}</p>}
          {showMetadata && (
            <span className="rounded-md bg-surface-container px-2 py-1 text-xs font-semibold text-on-surface-variant">
              {labels[project.status]}
            </span>
          )}
        </div>
        <h3 className={`mt-2 font-headline-md leading-tight font-bold ${cover ? "text-[clamp(2.3rem,5.5vw,3.6rem)] tracking-[-.075em]" : "text-[1.375rem] tracking-tight"}`}>
          {project.title}
        </h3>
        {project.subtitle && <p className="mt-1 text-lg font-bold tracking-tight">{project.subtitle}</p>}
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-on-surface-variant md:text-[.9375rem]">
          {project.description}
        </p>
        {detailed && (
          <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((technology) => (
              <li key={technology} className="portfolio-tag">{technology}</li>
            ))}
          </ul>
        )}
        <div className="mt-auto pt-2">
          <button
            type="button"
            aria-label={`View project details for ${project.title}`}
            aria-haspopup="dialog"
            className="portfolio-text-link"
            onClick={() => onOpen(project)}
          >
            View project details <ArrowUpRight size={15} aria-hidden="true" />
          </button>
        </div>
      </div>
      {cover && (
        <figure className="relative row-start-1 aspect-[2/1] overflow-hidden bg-[#244333] md:row-auto md:aspect-auto md:min-h-56">
          <img
            src={cover.src}
            alt={cover.alt}
            width={1536}
            height={1024}
            className="absolute inset-0 size-full object-cover object-[47%_57%]"
          />
          <figcaption className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] rounded-lg border border-[#b9d88b]/45 bg-[#143826] px-2.5 py-1.5 text-xs font-semibold text-[#f6ffe9]">
            {cover.caption}
          </figcaption>
        </figure>
      )}
    </article>
  );
}
