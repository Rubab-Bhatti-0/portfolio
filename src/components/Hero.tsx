import { motion } from "framer-motion";
import { profile, experience } from "../data/portfolio";
import StatusDot from "./StatusDot";

function useUptime() {
  const start = new Date("2024-02-01T00:00:00Z");
  const now = new Date();
  const days = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  return days;
}

export default function Hero() {
  const uptime = useUptime();
  const running = experience.filter((e) => e.status === "running");

  return (
    <section id="top" className="relative flex min-h-screen items-center px-6 pt-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[1.3fr_1fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-4 flex items-center gap-2 font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-cyan)]">
            <StatusDot />  {profile.location}
          </p>
          <h1 className="font-[var(--font-display)] text-5xl font-semibold leading-[1.05] tracking-tight text-[var(--color-text)] sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 font-[var(--font-display)] text-2xl text-[var(--color-muted)] sm:text-3xl">
            {profile.role}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-muted)]">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-md bg-[var(--color-cyan)] px-5 py-2.5 font-[var(--font-mono)] text-sm font-medium text-[var(--color-ink)] transition-transform hover:scale-[1.03]"
            >
              view projects
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-[var(--color-line)] px-5 py-2.5 font-[var(--font-mono)] text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-cyan)]"
            >
              github ↗
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-[var(--color-line)] px-5 py-2.5 font-[var(--font-mono)] text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-cyan)]"
            >
              linkedin ↗
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="rounded-xl border border-[var(--color-line)] bg-[var(--color-panel)]/80 p-5 font-[var(--font-mono)] text-xs shadow-[0_0_40px_-15px_rgba(79,216,201,0.35)] backdrop-blur"
        >
          <div className="mb-4 flex items-center justify-between border-b border-[var(--color-line)] pb-3 text-[var(--color-muted)]">
            <span>status.log</span>
            <span className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-amber)]/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-cyan)]/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-muted)]/40" />
            </span>
          </div>
          <div className="space-y-2 text-[var(--color-muted)]">
            <p>
              <span className="text-[var(--color-cyan)]">$</span> uptime --since 2024-02
            </p>
            <p className="pl-4 text-[var(--color-text)]">{uptime.toLocaleString()} days building</p>
            <p className="pt-2">
              <span className="text-[var(--color-cyan)]">$</span> ps --running
            </p>
            {running.map((r) => (
              <p key={r.org} className="pl-4 text-[var(--color-text)]">
                <StatusDot color="amber" /> <span className="ml-1">{r.role} @ {r.org}</span>
              </p>
            ))}
            <p className="pt-2">
              <span className="text-[var(--color-cyan)]">$</span> whoami
            </p>
            <p className="pl-4 text-[var(--color-text)]">CS undergrad · COMSATS University</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
