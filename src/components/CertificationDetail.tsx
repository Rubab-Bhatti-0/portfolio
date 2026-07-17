import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { certifications } from "../data/portfolio";

export default function CertificationDetail() {
  const { category } = useParams<{ category: string }>();
  
  const filteredCerts = certifications.filter(
    (cert) => cert.category.toLowerCase() === category?.toLowerCase()
  );

  const getIcon = (issuer: string) => {
    if (issuer.includes("IBM")) return "workspace_premium";
    if (issuer.includes("Meta")) return "verified";
    if (issuer.includes("Scrimba") || issuer.includes("Coursera")) return "school";
    if (issuer.includes("Anthropic")) return "psychology";
    return "card_giftcard";
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-container-max mx-auto px-gutter md:px-xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-xs font-label-md text-primary hover:underline underline-offset-4 mb-8"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Portfolio
        </Link>
        
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-xl text-on-surface">
          {category} <span className="text-primary">Certifications</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          {filteredCerts.map((cert, i) => (
            <motion.a
              key={cert.name}
              href={cert.verifyUrl || cert.courseUrl}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
      </div>
    </div>
  );
}
