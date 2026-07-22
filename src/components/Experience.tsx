import { motion } from "framer-motion";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-container-max px-gutter md:px-xl py-xl">
      <div className="mb-xl">
        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-md reveal-on-scroll">
          Professional <span className="text-primary">Experience</span>
        </h2>
      </div>

      <div className="relative border-l-2 border-primary/30 pl-lg space-y-lg reveal-on-scroll">
        {experience.map((role, i) => (
          <motion.div
            key={role.org}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="relative"
          >
            <span className="absolute -left-[1.65rem] top-2 h-3 w-3 rounded-full bg-primary border-2 border-background" />
            <div className={`glass-card p-lg rounded-2xl border border-outline-variant/30 hover:shadow-lg transition-all ${role.status === "running" ? "lightning-glow" : ""}`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-md mb-md">
                <div>
                  <h3 className="font-headline-md text-on-surface">
                    {role.role}
                  </h3>
                  <p className="text-primary font-label-md uppercase tracking-wider mt-xs">
                    {role.org}
                  </p>
                </div>
                {role.status === "running" && (
                  <span className="inline-flex items-center gap-xs bg-secondary-container/20 text-secondary-container px-3 py-1 rounded-full font-label-sm">
                    <span className="h-2 w-2 rounded-full bg-secondary-container animate-pulse" />
                    In Progress
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-md text-on-surface-variant text-body-md mb-md">
                <span>{role.period}</span>
                <span>·</span>
                <span>{role.location}</span>
              </div>
              <ul className="space-y-sm">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-md text-on-surface-variant text-body-md">
                    <span className="text-primary mt-1">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
