import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink, ShieldCheck } from "lucide-react";
import { certifications } from "../data/portfolio";

export default function Certifications() {
  return (
    <section id="certs" className="mx-auto max-w-6xl px-6 py-28">
      <div className="mb-12">
        <p className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-cyan)]">
          // certifications
        </p>
        <h2 className="mt-2 font-[var(--font-display)] text-3xl font-semibold text-[var(--color-text)] sm:text-4xl">
          Verified modules
        </h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="flex items-start gap-3 rounded-lg border border-[var(--color-line)] bg-[var(--color-panel)]/60 px-5 py-4"
          >
            <BadgeCheck className="mt-0.5 shrink-0 text-[var(--color-cyan)]" size={20} />
            <div className="flex-1">
              <p className="font-[var(--font-display)] text-sm text-[var(--color-text)]">{c.name}</p>
              <p className="font-[var(--font-mono)] text-xs text-[var(--color-muted)]">{c.issuer}</p>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                <a
                  href={c.courseUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 font-[var(--font-mono)] text-[11px] text-[var(--color-muted)] transition-colors hover:text-[var(--color-cyan)]"
                >
                  <ExternalLink size={12} /> view course
                </a>
                {c.verifyUrl ? (
                  <a
                    href={c.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 font-[var(--font-mono)] text-[11px] text-[var(--color-cyan)] transition-colors hover:underline"
                  >
                    <ShieldCheck size={12} /> verify certificate
                  </a>
                ) : (
                  <span className="flex items-center gap-1 font-[var(--font-mono)] text-[11px] text-[var(--color-muted)]/50">
                    <ShieldCheck size={12} /> verification link pending
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}