import { motion, AnimatePresence } from "framer-motion";
import type { Certification } from "../data/portfolio";

interface CertificateModalProps {
  certification: Certification | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CertificateModal({ certification, isOpen, onClose }: CertificateModalProps) {
  if (!certification) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-3xl bg-surface-container-lowest border border-outline-variant/30 rounded-3xl overflow-hidden shadow-2xl pointer-events-auto relative max-h-[90vh] flex flex-col lightning-glow"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-on-surface-variant hover:text-on-surface transition-colors z-10 bg-surface-container-low/80 backdrop-blur-sm p-1.5 rounded-full"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>

              <div className="overflow-y-auto p-6 md:p-10 flex-1">
                {/* Issuer & Date */}
                <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-bold tracking-[0.15em] text-on-surface-variant/70 uppercase">
                  <span>{certification.issuer}</span>
                  {certification.date && (
                    <>
                      <span className="w-1.5 h-1.5 rounded-full bg-outline-variant" />
                      <span>{certification.date}</span>
                    </>
                  )}
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-6 leading-tight pr-8">
                  {certification.name}
                </h2>

                {/* Certificate Image Frame */}
                <div className="border border-outline-variant/30 rounded-2xl overflow-hidden bg-surface-container-low mb-6 shadow-sm aspect-[4/3] max-w-2xl mx-auto flex items-center justify-center relative group">
                  <img
                    src={certification.image || "/certificate_placeholder.png"}
                    alt={`${certification.name} Certificate`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback to placeholder if the image fails to load
                      e.currentTarget.src = "/certificate_placeholder.png";
                    }}
                  />
                </div>

                {/* Description */}
                {certification.description && (
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface mb-2">
                      About the Course
                    </h4>
                    <p className="text-on-surface-variant leading-relaxed text-body-md">
                      {certification.description}
                    </p>
                  </div>
                )}

                {/* Skills tags */}
                {certification.skills && certification.skills.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface mb-3">
                      Skills Gained
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {certification.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3.5 py-1.5 rounded-full bg-surface-container border border-outline-variant/20 text-on-surface-variant text-xs font-semibold"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-outline-variant/20">
                  {certification.verifyUrl && (
                    <a
                      href={certification.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:opacity-95 transition-all text-sm"
                    >
                      Verify Credential
                      <span className="material-symbols-outlined text-sm">north_east</span>
                    </a>
                  )}
                  
                  {certification.courseUrl && (
                    <a
                      href={certification.courseUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-surface-container-high hover:bg-surface-container-highest text-on-surface px-6 py-3 rounded-xl font-semibold border border-outline-variant/30 hover:shadow-md transition-all text-sm"
                    >
                      Course Details
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                  )}
                  
                  <button
                    onClick={onClose}
                    className="inline-flex items-center gap-2 bg-surface-container-low hover:bg-surface-container text-on-surface-variant px-6 py-3 rounded-xl font-semibold border border-outline-variant/20 hover:text-on-surface transition-all text-sm ml-auto"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
