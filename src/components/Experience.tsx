import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title">
      <h2 id="experience-title" className="portfolio-section-title">Experience</h2>
      <div className="mt-4 space-y-4">
        {experience.map((role) => (
          <article key={role.org} className="glass-card rounded-2xl p-5">
            <h3 className="font-headline-md leading-tight font-bold">{role.role}</h3>
            <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
              <p className="font-semibold text-primary">{role.org}</p>
              <p className="text-on-surface-variant">{role.period} · {role.location}</p>
              {role.status === "running" && <span className="font-semibold text-secondary">In progress</span>}
            </div>
            <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-on-surface-variant marker:text-primary">
              {role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
