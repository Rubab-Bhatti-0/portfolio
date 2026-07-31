import { profile } from "../data/portfolio";
import { Link, useLocation } from "react-router-dom";

const links = [
  { href: "about", label: "About" },
  { href: "skills", label: "Skills" },
  { href: "experience", label: "Experience" },
  { href: "projects", label: "Projects" },
  { href: "certifications", label: "Certifications" },
  { href: "contact", label: "Contact" },
];

export default function Footer() {
  const location = useLocation();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="w-full py-xl bg-surface-container-lowest border-t border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-gutter md:px-xl flex flex-col md:flex-row justify-between items-center gap-sm">
        <div className="flex flex-col items-center md:items-start gap-xs">
          <span className="font-display-lg text-headline-md text-on-surface font-bold">
            {profile.name}
          </span>
          <p className="text-outline font-body-md text-center md:text-left">
            © {new Date().getFullYear()} {profile.name}. Built with precision in {profile.location}.
          </p>
        </div>
        
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-md md:gap-lg">
          {links.map((link) => (
            <Link
              key={link.href}
              to={`/#${link.href}`}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-body-md text-body-md transition-colors nav-item relative whitespace-nowrap text-on-surface-variant hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
