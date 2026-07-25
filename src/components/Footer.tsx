import { useEffect,useState } from "react";
import { profile } from "../data/portfolio";
import { Link } from "react-router-dom";

const links = [
  // { href: "#about", label: "About" },
  // { href: "#skills", label: "Skills" },
  // { href: "#projects", label: "Projects" },
  // { href: "#contact", label: "Contact" },
  { href: "about", label: "About" },
  { href: "skills", label: "Skills" },
  // { href: "experience", label: "Experience" },
  { href: "projects", label: "Projects" },
  // { href: "certifications", label: "Certifications" },
  { href: "contact", label: "Contact" },
];

export default function Footer() {
  const [activeSection, setActiveSection] = useState("");
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
        {/* <div className="flex gap-lg">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors font-body-md"
            >
              {link.label}
            </a>
          ))}
        </div> */}
                {/* Desktop Navigation Links - Middle */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-md lg:gap-lg">
          {links.map((link) => (
            <Link
              key={link.href}
              to={`/#${link.href}`}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`font-body-md text-body-md transition-colors nav-item relative whitespace-nowrap ${
                activeSection === link.href
                  ? "text-primary font-bold"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
