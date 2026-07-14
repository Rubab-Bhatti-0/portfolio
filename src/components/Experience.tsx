import { motion } from "framer-motion";
import { experience } from "../data/portfolio";
import StatusDot from "./StatusDot";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <div className="mb-12">
        <p className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-cyan)]">
           experience
        </p>
        <h2 className="mt-2 font-[var(--font-display)] text-3xl font-semibold text-[var(--color-text)] sm:text-4xl">
          Where the hours went
        </h2>
      </div>

      <div className="relative border-l border-[var(--color-line)] pl-8">
        {experience.map((role, i) => (
          <motion.div
            key={role.org}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="relative mb-10 last:mb-0"
          >
            <span className="absolute -left-[2.28rem] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--color-cyan)]" />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-[var(--font-mono)] text-xs text-[var(--color-muted)]">
              <span>{role.period}</span>
              <span>·</span>
              <span>{role.location}</span>
              {role.status === "running" && (
                <span className="inline-flex items-center gap-1.5 text-[var(--color-amber)]">
                  <StatusDot color="amber" /> in progress
                </span>
              )}
            </div>
            <h3 className="mt-1 font-[var(--font-display)] text-xl text-[var(--color-text)]">
              {role.role} <span className="text-[var(--color-muted)]">@ {role.org}</span>
            </h3>
            <ul className="mt-3 space-y-1.5">
              {role.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-sm leading-relaxed text-[var(--color-muted)]">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-line)]" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
