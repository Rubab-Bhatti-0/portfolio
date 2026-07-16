import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleSectionTracking = () => {
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
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full max-w-container-max mx-auto px-gutter md:px-xl h-20">
        <div className="flex-1 flex justify-start">
          <a
            href="#"
            className="font-display-lg text-display-lg-mobile md:text-display-lg tracking-tight text-on-surface font-bold shrink-0"
          >
            Rubab Bashir
          </a>
        </div>

        {/* Desktop Navigation Links - Middle */}
        <div className="hidden md:flex items-center justify-center gap-lg flex-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-body-md text-body-md transition-colors nav-item relative whitespace-nowrap ${
                activeSection === link.href.slice(1)
                  ? "text-primary font-bold"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Resume Button - Right */}
        <div className="hidden md:flex items-center justify-end flex-1">
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

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-on-surface"
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
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
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
