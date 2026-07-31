import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/portfolio";
import Toast from "./Toast";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info"; isOpen: boolean }>({
    message: "",
    type: "success",
    isOpen: false,
  });

  const showToast = (message: string, type: "success" | "error" | "info" = "success") => {
    setToast({ message, type, isOpen: true });
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        showToast(`${label} copied to clipboard!`, "success");
      })
      .catch(() => {
        showToast(`Failed to copy ${label.toLowerCase()}`, "error");
      });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      showToast("Please enter your name.", "error");
      return;
    }
    if (!form.email.trim()) {
      showToast("Please enter your email.", "error");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      showToast("Please enter a valid email address.", "error");
      return;
    }
    if (!form.message.trim()) {
      showToast("Please enter your message.", "error");
      return;
    }

    setIsSubmitting(true);
    showToast("Redirecting to your email client...", "success");

    setTimeout(() => {
      const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
        `Portfolio inquiry from ${form.name}`
      )}&body=${encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`)}`;
      window.location.href = mailtoHref;
      setIsSubmitting(false);
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-xl bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-gutter md:px-xl">
        <div className="grid lg:grid-cols-2 gap-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="reveal-on-scroll"
          >
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-md text-on-surface">
              Let's Build <span className="text-primary">Something Together</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg max-w-2xl break-words whitespace-normal text-left">
              Whether you have a project in mind, want to talk ML, or just want to connect, my inbox is always open.
            </p>

            {/* Contact Info */}
            <div className="space-y-md mb-xl">
              <div 
                className="flex items-center gap-sm cursor-pointer group/item"
                onClick={() => handleCopy(profile.location, "Location")}
                title="Click to copy location"
              >
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary group-hover/item:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <div className="font-label-sm text-outline uppercase tracking-wider text-on-surface-variant flex items-center gap-1">
                    Location
                    <span className="material-symbols-outlined text-xs opacity-0 group-hover/item:opacity-100 transition-opacity">content_copy</span>
                  </div>
                  <div className="font-body-md text-on-surface group-hover/item:text-primary transition-colors">{profile.location}</div>
                </div>
              </div>
              
              <div 
                className="flex items-center gap-sm cursor-pointer group/item"
                onClick={() => handleCopy(profile.email, "Email")}
                title="Click to copy email address"
              >
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary group-hover/item:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <div className="font-label-sm text-outline uppercase tracking-wider text-on-surface-variant flex items-center gap-1">
                    Email
                    <span className="material-symbols-outlined text-xs opacity-0 group-hover/item:opacity-100 transition-opacity">content_copy</span>
                  </div>
                  <div className="font-body-md text-on-surface group-hover/item:text-primary transition-colors">
                    {profile.email}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-md">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary hover:border-primary transition-all"
                title="GitHub"
              >
                <span className="material-symbols-outlined">code</span>
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary hover:border-primary transition-all"
                title="LinkedIn"
              >
                <span className="material-symbols-outlined">link</span>
              </a>
              <a
                href={profile.links.leetcode}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary hover:border-primary transition-all"
                title="LeetCode"
              >
                <span className="material-symbols-outlined">terminal</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-lg rounded-2xl reveal-on-scroll lightning-glow"
            style={{ transitionDelay: "200ms" }}
          >
            <form onSubmit={handleSubmit} className="space-y-md">
              <div className="grid md:grid-cols-2 gap-md">
                <div>
                  <label className="block font-label-md text-on-surface-variant mb-base">
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-on-surface placeholder-on-surface-variant/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block font-label-md text-on-surface-variant mb-base">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-on-surface placeholder-on-surface-variant/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none disabled:opacity-50"
                  />
                </div>
              </div>
              <div>
                <label className="block font-label-md text-on-surface-variant mb-base">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Your message here..."
                  rows={5}
                  disabled={isSubmitting}
                  className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-on-surface placeholder-on-surface-variant/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-none disabled:opacity-50"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-on-primary py-4 rounded-xl font-label-md hover:shadow-lg active:scale-95 transition-all flex items-center justify-center gap-xs disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <Toast
        message={toast.message}
        type={toast.type}
        isOpen={toast.isOpen}
        onClose={() => setToast((prev) => ({ ...prev, isOpen: false }))}
      />
    </section>
  );
}
