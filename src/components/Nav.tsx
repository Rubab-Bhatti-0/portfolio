import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { profile } from "../data/portfolio";

const links = [
  { href: "about", label: "About" },
  { href: "skills", label: "Skills" },
  { href: "experience", label: "Experience" },
  { href: "projects", label: "Projects" },
  { href: "certifications", label: "Certifications" },
  { href: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.documentElement.classList.contains("dark") || localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleSectionTracking = () => {
      if (location.pathname !== "/") return;
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute("id") || "";
        }
        
        // Ensure section is visible
        if (window.pageYOffset >= sectionTop - window.innerHeight * 0.8) {
          section.classList.add("active");
          section.querySelectorAll(".reveal-on-scroll").forEach(el => el.classList.add("active"));
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleSectionTracking);
    handleSectionTracking(); // Initial check
    return () => window.removeEventListener("scroll", handleSectionTracking);
  }, [location.pathname]);

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
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-full max-w-container-max mx-auto px-gutter md:px-xl h-20">
        <div className="flex-1 flex justify-start">
          <Link
            to="/"
            className="font-display-lg text-xl md:text-2xl tracking-tight text-on-surface font-bold shrink-0"
          >
            Rubab Bashir
          </Link>
        </div>

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

        {/* Desktop Controls - Right */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-md">
          {/* Theme Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-all cursor-pointer border border-outline-variant/30"
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined text-xl select-none">
              {isDarkMode ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* Resume Button */}
          <div className="relative group">
            <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all flex items-center gap-xs whitespace-nowrap">
              Resume
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-surface-container-high border border-outline-variant rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 overflow-hidden">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="block px-4 py-3 text-body-md text-on-surface hover:bg-primary/10 transition-colors border-b border-outline-variant/30"
              >
                GitHub Profile
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="block px-4 py-3 text-body-md text-on-surface hover:bg-primary/10 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Controls - Right */}
        <div className="md:hidden flex items-center gap-sm">
          {/* Theme Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-all border border-outline-variant/20"
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined text-xl select-none">
              {isDarkMode ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="text-on-surface p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-surface border-b border-outline-variant p-gutter flex flex-col gap-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              to={`/#${link.href}`}
              className="text-on-surface-variant hover:text-primary transition-colors"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleLinkClick(e, link.href);
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-outline-variant/30 pt-sm mt-sm">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="block text-on-surface-variant hover:text-primary transition-colors mb-sm"
            >
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="block text-on-surface-variant hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
