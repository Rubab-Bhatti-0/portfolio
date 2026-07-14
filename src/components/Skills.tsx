import { motion } from "framer-motion";
import { skillModules } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-28">
      <div className="mb-12 flex items-baseline justify-between">
        <p className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-cyan)]">
         stack
        </p>
        <h2 className="font-[var(--font-display)] text-3xl font-semibold text-[var(--color-text)] sm:text-4xl">
          Modules loaded
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillModules.map((mod, i) => (
          <motion.div
            key={mod.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-lg border border-[var(--color-line)] bg-[var(--color-panel)]/60 p-5 transition-colors hover:border-[var(--color-cyan)]/50"
          >
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-amber)]">
              {mod.label}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {mod.items.map((item) => (
                <span
                  key={item}
                  className="rounded border border-[var(--color-line)] px-2 py-1 font-[var(--font-mono)] text-xs text-[var(--color-text)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
