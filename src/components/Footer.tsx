import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 font-[var(--font-mono)] text-xs text-[var(--color-muted)] sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. </p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}
