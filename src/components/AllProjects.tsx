import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { projects, type Project } from "../data/portfolio";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function AllProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section aria-labelledby="all-projects-title" className="portfolio-container min-h-screen py-10 md:py-14">
      <Link to="/#projects" className="portfolio-text-link">
        <ArrowLeft size={15} aria-hidden="true" /> Back to portfolio
      </Link>
      <h1 id="all-projects-title" className="portfolio-section-title mt-2 mb-6">All projects</h1>
      <div className="grid gap-3.5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} onOpen={setSelectedProject} showMetadata />
        ))}
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
