import { profile } from "../data/portfolio";
import { Link } from "react-router-dom";

const links = [
  { href: "projects", label: "Projects" },
  { href: "about", label: "About" },
  { href: "experience", label: "Experience" },
  { href: "skills", label: "Skills" },
  { href: "certifications", label: "Certifications" },
  { href: "contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-outline-variant bg-background py-6">
      <div className="portfolio-container flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-display-lg font-bold">
            {profile.name}
          </p>
          <p className="text-sm text-on-surface-variant">{profile.location}</p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              to={`/#${link.href}`}
              className="portfolio-nav-link"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
