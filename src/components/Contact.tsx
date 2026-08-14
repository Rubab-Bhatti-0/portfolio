import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/portfolio";
import {
  copyTextFallback,
  hasValidationErrors,
  MAX_EMAIL_LENGTH,
  MAX_MESSAGE_LENGTH,
  MAX_NAME_LENGTH,
  validateContactForm,
  type ContactFormErrors,
} from "../lib/validation";
import Toast from "./Toast";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info"; isOpen: boolean }>({
    message: "",
    type: "success",
    isOpen: false,
  });

  const showToast = (message: string, type: "success" | "error" | "info" = "success") => {
    setToast({ message, type, isOpen: true });
  };

  const handleCopy = async (text: string, label: string) => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else if (!copyTextFallback(text)) {
        throw new Error("Clipboard is unavailable");
      }
      showToast(`${label} copied to clipboard!`, "success");
    } catch {
      showToast(`Failed to copy ${label.toLowerCase()}`, "error");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validateContactForm(form);
    setErrors(nextErrors);

    if (hasValidationErrors(nextErrors)) {
      const firstError = Object.values(nextErrors)[0];
      showToast(firstError ?? "Please correct the highlighted fields.", "error");
      return;
    }

    setIsSubmitting(true);
    showToast("Redirecting to your email client...", "success");

    window.setTimeout(() => {
      const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
        `Portfolio inquiry from ${form.name.trim()}`
      )}&body=${encodeURIComponent(`From: ${form.name.trim()} <${form.email.trim()}>\n\n${form.message.trim()}`)}`;
      window.location.href = mailtoHref;
      setIsSubmitting(false);
      setForm({ name: "", email: "", message: "" });
      setErrors({});
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
            <form onSubmit={handleSubmit} noValidate className="space-y-md">
              <div className="grid md:grid-cols-2 gap-md">
                <div>
                  <label htmlFor="contact-name" className="block font-label-md text-on-surface-variant mb-base">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    maxLength={MAX_NAME_LENGTH}
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-on-surface placeholder-on-surface-variant/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none disabled:opacity-50 aria-[invalid=true]:border-red-500"
                  />
                  {errors.name && <p id="contact-name-error" className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="contact-email" className="block font-label-md text-on-surface-variant mb-base">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    maxLength={MAX_EMAIL_LENGTH}
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-on-surface placeholder-on-surface-variant/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none disabled:opacity-50 aria-[invalid=true]:border-red-500"
                  />
                  {errors.email && <p id="contact-email-error" className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="block font-label-md text-on-surface-variant mb-base">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Your message here..."
                  rows={5}
                  maxLength={MAX_MESSAGE_LENGTH}
                  disabled={isSubmitting}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-on-surface placeholder-on-surface-variant/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-none disabled:opacity-50 aria-[invalid=true]:border-red-500"
                />
                <div className="mt-1 flex items-start justify-between gap-3">
                  {errors.message ? <p id="contact-message-error" className="text-sm text-red-500">{errors.message}</p> : <span />}
                  <span className="text-xs text-on-surface-variant/70">{form.message.length}/{MAX_MESSAGE_LENGTH}</span>
                </div>
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
