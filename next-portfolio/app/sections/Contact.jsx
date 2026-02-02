"use client";

import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaWhatsapp,
  FaPhoneAlt,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";
import { HiSparkles, HiMail, HiUser } from "react-icons/hi";

// ✅ Next.js version: no Vite env
// If later you add a Next API route, it will be /api/contact
const API_BASE = "/api";

const EMAIL = "abdulraufsiddique10@gmail.com";
const PHONE_DISPLAY = "+92 316 4532412";
const PHONE_TEL = "+923164532412";
const WHATSAPP_WA = "923164532412";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/abdul-rauf-37a525216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";

function cx(...a) {
  return a.filter(Boolean).join(" ");
}

const Input = ({ label, icon, error, ...props }) => {
  return (
    <div>
      <label className="block mb-1 text-sm text-slate-700 dark:text-slate-300">
        {label}
      </label>
      <div
        className={cx(
          "flex items-center gap-2 rounded-xl border bg-white/60 dark:bg-white/5 backdrop-blur-xl px-3 py-2.5 transition",
          error
            ? "border-red-500/60 focus-within:ring-2 focus-within:ring-red-400/60"
            : "border-black/10 dark:border-white/10 focus-within:ring-2 focus-within:ring-cyan-500/60"
        )}
      >
        <span className="text-slate-500 dark:text-slate-300">{icon}</span>
        <input
          className="w-full bg-transparent outline-none text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
          {...props}
        />
      </div>
      {error ? (
        <p className="mt-1 text-xs text-red-600 dark:text-red-400">{error}</p>
      ) : null}
    </div>
  );
};

const TextArea = ({ label, error, ...props }) => {
  return (
    <div>
      <label className="block mb-1 text-sm text-slate-700 dark:text-slate-300">
        {label}
      </label>
      <textarea
        className={cx(
          "w-full rounded-xl border bg-white/60 dark:bg-white/5 backdrop-blur-xl p-3 outline-none transition",
          "text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500",
          error
            ? "border-red-500/60 focus:ring-2 focus:ring-red-400/60"
            : "border-black/10 dark:border-white/10 focus:ring-2 focus:ring-cyan-500/60"
        )}
        {...props}
      />
      {error ? (
        <p className="mt-1 text-xs text-red-600 dark:text-red-400">{error}</p>
      ) : null}
    </div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({
    submitting: false,
    success: "",
    error: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const errors = useMemo(() => {
    const e = {};
    if (!formData.name.trim()) e.name = "Name is required.";
    if (!formData.email.trim()) e.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      e.email = "Enter a valid email.";
    if (!formData.message.trim()) e.message = "Message is required.";
    else if (formData.message.trim().length < 10)
      e.message = "Message should be at least 10 characters.";
    return e;
  }, [formData]);

  const isValid = Object.keys(errors).length === 0;

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleBlur = (e) =>
    setTouched((p) => ({ ...p, [e.target.name]: true }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!isValid) return;

    setStatus({ submitting: true, success: "", error: "" });

    try {
      // ✅ If /api/contact does not exist yet, it will return 404.
      // The UI will show error message (safe).
      const res = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus({
        submitting: false,
        success: "Your message has been sent!",
        error: "",
      });
      setFormData({ name: "", email: "", message: "" });
      setTouched({ name: false, email: false, message: false });
    } catch {
      setStatus({
        submitting: false,
        success: "",
        error: "Something went wrong. Please try again.",
      });
    }
  };

  useEffect(() => {
    if (!status.success && !status.error) return;
    const t = setTimeout(
      () => setStatus((s) => ({ ...s, success: "", error: "" })),
      3200
    );
    return () => clearTimeout(t);
  }, [status.success, status.error]);

  return (
    <section id="contact" className="relative min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-white/60 dark:bg-white/5 backdrop-blur text-cyan-700 dark:text-cyan-200 text-xs font-semibold tracking-wide uppercase">
            <HiSparkles className="text-sm" />
            Contact
          </div>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold">
            Let’s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Talk
            </span>
          </h2>

          <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Want to work together or have a question? Send a message — I’ll reply soon.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          className="mt-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-xl overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-80" />

            <form onSubmit={handleSubmit} className="relative p-6 md:p-8 space-y-5 text-left">
              <Input
                label="Name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                icon={<HiUser className="text-lg" aria-hidden="true" />}
                error={touched.name ? errors.name : ""}
                autoComplete="name"
                required
              />

              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                icon={<HiMail className="text-lg" aria-hidden="true" />}
                error={touched.email ? errors.email : ""}
                autoComplete="email"
                required
              />

              <TextArea
                label="Message"
                name="message"
                rows={6}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.message ? errors.message : ""}
                required
              />

              {/* status */}
              <div aria-live="polite" className="min-h-[1.25rem]">
                {status.success ? (
                  <p className="text-sm text-green-700 dark:text-green-400 font-medium">
                    {status.success}
                  </p>
                ) : null}
                {status.error ? (
                  <p className="text-sm text-red-700 dark:text-red-400 font-medium">
                    {status.error}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="submit"
                  disabled={status.submitting || !isValid}
                  className={cx(
                    "group inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition",
                    "focus:outline-none focus:ring-2 focus:ring-cyan-500",
                    status.submitting || !isValid
                      ? "bg-slate-400/70 dark:bg-white/10 text-white/90 cursor-not-allowed"
                      : "bg-cyan-600 hover:bg-cyan-700 text-white shadow-[0_10px_30px_rgba(8,145,178,0.22)]"
                  )}
                >
                  <FaPaperPlane aria-hidden="true" />
                  {status.submitting ? "Sending..." : "Send Message"}
                  <span className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </button>

                <p className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-right">
                  Usually replies within 24 hours.
                </p>
              </div>

              {/* Quick contact icons row */}
              <div className="pt-5 border-t border-black/10 dark:border-white/10">
                <div className="flex flex-wrap gap-3 justify-center">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl
                               border border-black/10 dark:border-white/10
                               bg-white/70 dark:bg-white/10 hover:bg-white dark:hover:bg-white/15
                               transition focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <FaEnvelope className="text-cyan-600 dark:text-cyan-300" />
                    <span className="text-sm font-semibold">Gmail</span>
                  </a>

                  <a
                    href={`https://wa.me/${WHATSAPP_WA}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl
                               border border-black/10 dark:border-white/10
                               bg-white/70 dark:bg-white/10 hover:bg-white dark:hover:bg-white/15
                               transition focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <FaWhatsapp className="text-green-600" />
                    <span className="text-sm font-semibold">WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl
                               border border-black/10 dark:border-white/10
                               bg-white/70 dark:bg-white/10 hover:bg-white dark:hover:bg-white/15
                               transition focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <FaPhoneAlt className="text-cyan-600 dark:text-cyan-300" />
                    <span className="text-sm font-semibold">Call</span>
                  </a>

                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl
                               border border-black/10 dark:border-white/10
                               bg-white/70 dark:bg-white/10 hover:bg-white dark:hover:bg-white/15
                               transition focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <FaLinkedinIn className="text-slate-900 dark:text-white" />
                    <span className="text-sm font-semibold">LinkedIn</span>
                  </a>
                </div>

                <p className="mt-3 text-center text-xs text-slate-500 dark:text-slate-400">
                  {PHONE_DISPLAY} • {EMAIL}
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
