import { motion } from "framer-motion";
import { profile } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-container-max px-gutter md:px-xl py-xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="reveal-on-scroll"
      >
        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-md">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="max-w-4xl h-auto text-left">
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg leading-relaxed break-words whitespace-normal h-auto text-left">
            {profile.summary}
          </p>
          <div className="glass-card p-lg rounded-2xl border border-outline-variant/30 lightning-glow">
            <p className="font-label-md text-primary uppercase tracking-wider mb-base">
              Education
            </p>
            <p className="font-headline-md text-on-surface mb-base">
              {profile.education.degree}
            </p>
            <p className="text-body-md text-on-surface-variant">
              {profile.education.school} · {profile.education.period}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
