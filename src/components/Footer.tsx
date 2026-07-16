import { profile } from "../data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
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
        <div className="flex gap-lg">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors font-body-md"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
