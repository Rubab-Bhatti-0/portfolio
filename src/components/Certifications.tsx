import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { certifications } from "../data/portfolio";

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
    <section id="certifications" className="py-xl bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-gutter md:px-xl">
        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-xl text-center reveal-on-scroll text-on-surface">
          Professional <span className="text-primary">Certifications</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md reveal-on-scroll">
          {categories.map((category, i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                to={`/certifications/${category}`}
                className="glass-card p-lg rounded-2xl flex flex-col items-center text-center gap-md border border-outline-variant/30 hover:shadow-lg hover:border-primary/50 transition-all group h-full"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors mb-2">
                  <span className="material-symbols-outlined text-3xl">{getCategoryIcon(category)}</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                    {category}
                  </h3>
                  <p className="text-on-surface-variant font-label-md mt-1">
                    {getCount(category)} {getCount(category) === 1 ? 'Certification' : 'Certifications'}
                  </p>
                </div>
                <div className="mt-auto pt-4 text-primary font-label-sm uppercase tracking-widest group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
