import { motion } from "framer-motion";
import { certifications } from "../data/portfolio";

export default function Certifications() {
  const displayCerts = certifications.slice(0, 3);

  const getIcon = (issuer: string) => {
    if (issuer.includes("IBM")) return "workspace_premium";
    if (issuer.includes("Meta")) return "verified";
    if (issuer.includes("Scrimba") || issuer.includes("Coursera")) return "school";
    if (issuer.includes("Anthropic")) return "psychology";
    return "card_giftcard";
  };

  return (
    <section id="certifications" className="py-xl bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-gutter md:px-xl">
        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-xl text-center reveal-on-scroll text-on-surface">
          Professional <span className="text-primary">Certifications</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md reveal-on-scroll">
          {displayCerts.map((cert, i) => (
            <motion.a
              key={cert.name}
              href={cert.courseUrl}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card p-lg rounded-2xl flex items-center gap-md border border-outline-variant/30 hover:shadow-lg hover:border-primary/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined">{getIcon(cert.issuer)}</span>
              </div>
              <div>
                <h3 className="font-headline-md text-body-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                <p className="text-outline font-label-sm uppercase tracking-wider text-on-surface-variant">
                  {cert.issuer}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
        <div className="mt-lg text-center">
          <a
            href="#"
            className="inline-flex items-center gap-xs font-label-md text-primary hover:underline underline-offset-4"
          >
            View all certifications
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
