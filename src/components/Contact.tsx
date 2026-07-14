import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Code2, Globe } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Portfolio inquiry from ${form.name || "a visitor"}`
  )}&body=${encodeURIComponent(form.message)}`;

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-cyan)]">
             contact
          </p>
          <h2 className="mt-2 font-[var(--font-display)] text-3xl font-semibold text-[var(--color-text)] sm:text-4xl">
            Open a connection
          </h2>
          <p className="mt-4 max-w-md text-[var(--color-muted)]">
            Have a role, project, or collaboration in mind? Send a message directly, or reach out on any of the
            channels below.
          </p>
          <div className="mt-8 flex flex-col gap-3 font-[var(--font-mono)] text-sm">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-[var(--color-text)] transition-colors hover:text-[var(--color-cyan)]">
              <Mail size={16} /> {profile.email}
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[var(--color-text)] transition-colors hover:text-[var(--color-cyan)]">
              <Code2 size={16} /> github.com/Rubab-Bhatti-0
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[var(--color-text)] transition-colors hover:text-[var(--color-cyan)]">
              <Globe size={16} /> LinkedIn
            </a>
            <a href={profile.links.leetcode} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[var(--color-text)] transition-colors hover:text-[var(--color-cyan)]">
              <Code2 size={16} /> LeetCode
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={(e) => e.preventDefault()}
          className="rounded-xl border border-[var(--color-line)] bg-[var(--color-panel)]/60 p-6"
        >
          <label className="block font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-muted)]">
            your name
          </label>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="mt-2 w-full rounded-md border border-[var(--color-line)] bg-[var(--color-ink)] px-3 py-2 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-cyan)]"
            placeholder="Jane Doe"
          />
          <label className="mt-4 block font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-muted)]">
            message
          </label>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={5}
            className="mt-2 w-full resize-none rounded-md border border-[var(--color-line)] bg-[var(--color-ink)] px-3 py-2 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-cyan)]"
            placeholder="Let's build something..."
          />
          <a
            href={mailtoHref}
            className="mt-5 inline-block w-full rounded-md bg-[var(--color-cyan)] px-5 py-2.5 text-center font-[var(--font-mono)] text-sm font-medium text-[var(--color-ink)] transition-transform hover:scale-[1.02]"
          >
            send message
          </a>
          {/* <p className="mt-3 text-center font-[var(--font-mono)] text-[10px] text-[var(--color-muted)]">
            opens your email client — no backend attached
          </p> */}
        </motion.form>
      </div>
    </section>
  );
}
