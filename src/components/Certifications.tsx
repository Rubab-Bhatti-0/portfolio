import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { certifications } from "../data/portfolio";
import { slugify } from "../lib/validation";

export default function Certifications() {
  // Group certifications by category
  const categories = Array.from(new Set(certifications.map(c => c.category)));
  
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "javascript": return "javascript";
      case "anthropic": return "psychology";
      case "artificial intelligence": return "smart_toy";
      case "web development": return "code";
      default: return "workspace_premium";
    }
  };

  const getCount = (category: string) => {
    return certifications.filter(c => c.category === category).length;
  };

  return (
    <section id="certifications" className="border-y border-outline-variant py-10 md:py-14">
      <div className="portfolio-container">
        <h2 className="portfolio-section-title mb-5">Certifications</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                to={`/certifications/${slugify(category)}`}
                className="portfolio-card group flex h-full flex-col items-start gap-3 rounded-2xl p-5"
              >
                <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-surface-container text-primary">
                  <span className="material-symbols-outlined text-xl" aria-hidden="true">{getCategoryIcon(category)}</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                    {category}
                  </h3>
                  <p className="text-on-surface-variant font-label-md mt-1">
                    {getCount(category)} {getCount(category) === 1 ? 'Certification' : 'Certifications'}
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-1 pt-1 text-sm font-bold text-primary">
                  View certificates <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
