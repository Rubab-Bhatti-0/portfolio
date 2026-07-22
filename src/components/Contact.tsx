import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
      `Portfolio inquiry from ${form.name || "a visitor"}`
    )}&body=${encodeURIComponent(form.message)}`;
    window.location.href = mailtoHref;
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
              <div className="flex items-center gap-sm">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <div className="font-label-sm text-outline uppercase tracking-wider text-on-surface-variant">
                    Location
                  </div>
                  <div className="font-body-md text-on-surface">{profile.location}</div>
                </div>
              </div>
              <div className="flex items-center gap-sm">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <div className="font-label-sm text-outline uppercase tracking-wider text-on-surface-variant">
                    Email
                  </div>
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-body-md text-on-surface hover:text-primary transition-colors"
                  >
                    {profile.email}
                  </a>
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
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-on-surface placeholder-on-surface-variant/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
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
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-on-surface placeholder-on-surface-variant/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
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
                  className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-on-surface placeholder-on-surface-variant/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-on-primary py-4 rounded-xl font-label-md hover:shadow-lg active:scale-95 transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
