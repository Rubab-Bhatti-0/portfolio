import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { projects, type Project } from "../data/portfolio";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const selectedProjects = projects.filter((project) => project.featured).slice(0, 3);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" aria-labelledby="projects-title" className="portfolio-container pb-10 md:pb-12">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-outline-variant pt-5 pb-3">
        <h2 id="projects-title" className="portfolio-section-title">Selected projects</h2>
        <Link to="/projects" className="portfolio-text-link">
          All projects <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
      <div className="grid gap-3.5 md:grid-cols-2">
        {selectedProjects.map((project) => (
          <ProjectCard key={project.title} project={project} onOpen={setSelectedProject} />
        ))}
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
