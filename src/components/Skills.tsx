import { motion } from "framer-motion";
import { skillModules } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-container-max px-gutter md:px-xl py-xl">
      <div className="mb-xl">
        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-md reveal-on-scroll">
          Technical <span className="text-primary">Skills</span>
        </h2>
      </div>
      <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-3">
        {skillModules.map((mod, i) => (
          <motion.div
            key={mod.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass-card p-lg rounded-2xl border border-outline-variant/30 hover:shadow-lg transition-all reveal-on-scroll"
          >
            <p className="font-label-md text-primary uppercase tracking-wider mb-md">
              {mod.label}
            </p>
            <div className="flex flex-wrap gap-xs">
              {mod.items.map((item) => (
                <span
                  key={item}
                  className="text-xs font-label-sm bg-surface-container px-2 py-1 rounded text-on-surface"
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
