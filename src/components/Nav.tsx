import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { profile } from "../data/portfolio";

const links = [
  { href: "projects", label: "Projects" },
  { href: "about", label: "About" },
  { href: "experience", label: "Experience" },
  { href: "skills", label: "Skills", secondary: true },
  { href: "certifications", label: "Certifications", secondary: true },
  { href: "contact", label: "Contact" },
];

export default function Nav() {
  const { pathname, hash } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => document.documentElement.classList.contains("dark"));
  const initials = profile.name.split(" ").map((name) => name[0]).join("");

  function toggleTheme() {
    const nextTheme = !isDarkMode;
    document.documentElement.classList.toggle("dark", nextTheme);
    localStorage.setItem("theme", nextTheme ? "dark" : "light");
    setIsDarkMode(nextTheme);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant bg-background">
      <nav aria-label="Portfolio navigation" className="portfolio-container">
        <div className="flex min-h-[4.25rem] items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-2.5 font-display-lg text-sm font-bold" onClick={() => setMobileMenuOpen(false)}>
            <span aria-hidden="true" className="grid size-8 place-items-center rounded-[10px] bg-surface-container text-xs text-primary">
              {initials}
            </span>
            {profile.name}
          </Link>

          <div className="hidden items-center gap-5 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                to={`/#${link.href}`}
                aria-current={pathname === "/" && hash === `#${link.href}` ? "location" : undefined}
                className={`portfolio-nav-link ${link.secondary ? "hidden xl:inline-flex" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="portfolio-icon-button"
              onClick={toggleTheme}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
            </button>
            <button
              type="button"
              className="portfolio-icon-button md:hidden"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
            </button>
          </div>
        </div>

        <div id="mobile-navigation" hidden={!mobileMenuOpen} className="absolute inset-x-0 top-full border-y border-outline-variant bg-background shadow-md md:hidden">
          <div className="portfolio-container grid grid-cols-2 gap-x-4 py-2">
            {links.map((link) => (
              <Link
                key={link.href}
                to={`/#${link.href}`}
                className="portfolio-nav-link flex min-h-11 items-center"
                aria-current={pathname === "/" && hash === `#${link.href}` ? "location" : undefined}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
