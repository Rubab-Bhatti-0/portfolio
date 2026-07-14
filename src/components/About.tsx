import { motion } from "framer-motion";
import { profile } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="grid gap-10 md:grid-cols-[auto_1fr]"
      >
        <p className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-cyan)]">
           about
        </p>
        <div className="max-w-2xl">
          <h2 className="font-[var(--font-display)] text-3xl font-semibold text-[var(--color-text)] sm:text-4xl">
            Building at the intersection of web and intelligence.
          </h2>
          <p className="mt-6 leading-relaxed text-[var(--color-muted)]">{profile.summary}</p>
          <div className="mt-8 rounded-lg border border-[var(--color-line)] bg-[var(--color-panel)]/60 p-5">
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-muted)]">
              education
            </p>
            <p className="mt-2 font-[var(--font-display)] text-lg text-[var(--color-text)]">
              {profile.education.degree}
            </p>
            <p className="text-sm text-[var(--color-muted)]">
              {profile.education.school} · {profile.education.period}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
