import { ArrowDown, ArrowUpRight, BrainCircuit, CodeXml } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "../data/portfolio";

export default function Hero() {
  const [firstName, ...lastName] = profile.name.split(" ");

  return (
    <section id="hero" aria-labelledby="hero-title" className="portfolio-container grid items-center gap-6 py-10 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] md:gap-10 md:py-16 lg:gap-14">
      <div>
        <p className="portfolio-eyebrow">{profile.location}</p>
        <h1 id="hero-title" className="my-3 font-display-lg text-[clamp(3rem,7.8vw,5.5rem)] leading-[.98] font-bold tracking-[-.085em]">
          {firstName} <span className="text-primary">{lastName.join(" ")}</span>
        </h1>
        <p className="text-xl leading-snug font-bold tracking-tight md:text-2xl">{profile.role}</p>
        <p className="mt-2.5 max-w-[43ch] text-on-surface-variant">{profile.intro}</p>

        <div className="mt-5 flex flex-wrap gap-2.5">
          <Link to="/#projects" className="portfolio-button bg-primary text-on-primary hover:brightness-110">
            View projects <ArrowDown size={16} aria-hidden="true" />
          </Link>
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="portfolio-button portfolio-button-secondary">
            GitHub <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>

      <aside aria-label="Technical focus" className="hero-focus grid content-center gap-3 rounded-[19px] p-5 sm:grid-cols-2 sm:gap-4 md:grid-cols-1 md:self-stretch md:p-7 lg:p-9">
        <div className="flex items-center gap-3">
          <span className="hero-focus-icon"><CodeXml size={19} aria-hidden="true" /></span>
          <div>
            <p className="font-headline-md font-bold">Full-stack web</p>
            <p className="text-xs text-[#e0cee9]">React · Node.js · MongoDB</p>
          </div>
        </div>
        <div className="flex items-center gap-3 border-t border-[#e9d8ff]/25 pt-3 sm:border-t-0 sm:pt-0 md:border-t md:pt-4">
          <span className="hero-focus-icon"><BrainCircuit size={18} aria-hidden="true" /></span>
          <div>
            <p className="font-headline-md font-bold">Machine learning</p>
            <p className="text-xs text-[#e0cee9]">Python · FastAPI · OpenCV</p>
          </div>
        </div>
      </aside>
    </section>
  );
}
