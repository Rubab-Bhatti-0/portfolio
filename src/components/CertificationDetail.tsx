import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { certifications, type Certification } from "../data/portfolio";
import CertificateModal from "./CertificateModal";
import { slugify } from "../lib/validation";

export default function CertificationDetail() {
  const { category: categoryParam } = useParams<{ category: string }>();
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const categorySlug = (categoryParam ?? "").trim().toLowerCase();
  const matchedCategory = Array.from(new Set(certifications.map((cert) => cert.category))).find(
    (categoryName) => slugify(categoryName) === categorySlug,
  );
  const filteredCerts = matchedCategory
    ? certifications.filter((cert) => cert.category === matchedCategory)
    : [];

  const getIcon = (issuer: string) => {
    if (issuer.includes("IBM")) return "workspace_premium";
    if (issuer.includes("Meta")) return "verified";
    if (issuer.includes("Scrimba") || issuer.includes("Coursera")) return "school";
    if (issuer.includes("Anthropic")) return "psychology";
    return "card_giftcard";
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <CertificateModal
        certification={selectedCert}
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
      />
      
      <div className="max-w-container-max mx-auto px-gutter md:px-xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-xs font-label-md text-primary hover:underline underline-offset-4 mb-8"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Portfolio
        </Link>
        
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-xl text-on-surface">
          {matchedCategory ? (
            <>{matchedCategory} <span className="text-primary">Certifications</span></>
          ) : (
            <span className="text-primary">Certification category</span>
          )}
        </h1>

        {!matchedCategory ? (
          <div className="glass-card rounded-2xl p-8 text-center border border-outline-variant/30">
            <span className="material-symbols-outlined text-4xl text-primary mb-3">search_off</span>
            <h2 className="font-headline-md text-xl font-bold text-on-surface mb-2">Certification category not found</h2>
            <p className="text-on-surface-variant mb-5">The requested certification category does not exist.</p>
            <Link to="/#certifications" className="text-primary font-semibold hover:underline">Return to certifications</Link>
          </div>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          {filteredCerts.map((cert, i) => (
            <motion.button
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              type="button"
              className="glass-card p-6 rounded-2xl flex flex-col justify-between border border-outline-variant/30 hover:shadow-lg hover:border-primary/50 transition-all group cursor-pointer h-full w-full text-left"
              onClick={() => setSelectedCert(cert)}
            >
              <div>
                {/* Header Icon + Info */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-2xl">{getIcon(cert.issuer)}</span>
                  </div>
                  <div>
                    <h3 className="font-headline-md text-lg font-bold text-on-surface group-hover:text-primary transition-colors leading-snug line-clamp-2">
                      {cert.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-1.5 mt-1 text-[10px] font-bold tracking-wider text-on-surface-variant/70 uppercase">
                      <span>{cert.issuer}</span>
                      {cert.date && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-outline-variant" />
                          <span>{cert.date}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                {cert.description && (
                  <p className="text-on-surface-variant text-sm mb-4 line-clamp-2 leading-relaxed">
                    {cert.description}
                  </p>
                )}
              </div>

              {/* Skills Tags & Footer */}
              <div className="mt-auto pt-3 border-t border-outline-variant/10">
                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-semibold bg-surface-container/60 px-2 py-0.5 rounded text-on-surface-variant"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="text-[10px] font-semibold text-outline">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>
                )}
                
                <div className="text-primary font-label-sm uppercase tracking-wider group-hover:translate-x-1 transition-transform flex items-center gap-1 text-xs">
                  View Certificate <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
        )}
      </div>
    </div>
  );
}
