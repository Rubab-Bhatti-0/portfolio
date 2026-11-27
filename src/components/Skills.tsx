import { motion } from "framer-motion";
import { skillModules } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="portfolio-container py-10 md:py-14">
      <h2 className="portfolio-section-title mb-5">Technical skills</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillModules.map((mod, i) => (
          <motion.div
            key={mod.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass-card rounded-2xl p-5"
          >
            <h3 className="mb-3 font-headline-md font-bold">
              {mod.label}
            </h3>
            <div className="flex flex-wrap gap-xs">
              {mod.items.map((item) => (
                <span
                  key={item}
                  className="portfolio-tag"
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
