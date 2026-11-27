import { profile } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title">
      <h2 id="about-title" className="portfolio-section-title">About</h2>
      <p className="mt-3 max-w-prose leading-relaxed text-on-surface-variant">{profile.summary}</p>
      <div className="glass-card mt-5 rounded-2xl p-5">
        <p className="portfolio-eyebrow">Education</p>
        <p className="mt-2 font-headline-md font-bold">{profile.education.degree}</p>
        <p className="mt-1 text-sm text-on-surface-variant">{profile.education.school}</p>
        <p className="text-sm text-on-surface-variant">{profile.education.period}</p>
      </div>
    </section>
  );
}
