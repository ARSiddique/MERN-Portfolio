"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import {
  HiLocationMarker,
  HiLightningBolt,
  HiCode,
  HiSparkles,
} from "react-icons/hi";

export default function About() {
  return (
    <section id="about" className="relative min-h-screen py-20 px-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-xl overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-cyan-500/12 via-transparent to-blue-500/12" />
            <div className="p-4">
              <img
                src="/mern-developer-illustration.png"
                alt="Illustration of Abdul Rauf coding"
                className="w-full h-auto rounded-xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-white/60 dark:bg-white/5 backdrop-blur text-cyan-700 dark:text-cyan-200 text-xs font-semibold tracking-wide uppercase">
            <HiSparkles className="text-sm" />
            About
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Me
            </span>
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-200">
            Hi, I'm{" "}
            <span className="font-semibold text-cyan-700 dark:text-cyan-300">
              Abdul Rauf
            </span>
            , a MERN Stack Developer based in Lahore, Pakistan. I build fast, secure,
            scalable web applications using{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              MongoDB, Express.js, React.js, and Node.js
            </span>
            .
          </p>

          <p className="text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-200">
            I enjoy transforming ideas into real-world, user-friendly products with clean UI,
            smooth UX, and production-ready structure.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-200">
            Always learning, always improving — solo or in teams, I deliver with consistency.
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur text-slate-700 dark:text-slate-200">
              <HiLocationMarker className="text-base text-cyan-600 dark:text-cyan-300" />
              Lahore, Pakistan
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur text-slate-700 dark:text-slate-200">
              <HiCode className="text-base text-cyan-600 dark:text-cyan-300" />
              MERN + Next.js
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur text-slate-700 dark:text-slate-200">
              <HiLightningBolt className="text-base text-cyan-600 dark:text-cyan-300" />
              UI/UX + APIs
            </span>
          </div>

          <ScrollLink
            to="contact"
            smooth
            duration={500}
            offset={-90}
            className="group inline-flex items-center gap-2 bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition cursor-pointer shadow-[0_10px_30px_rgba(8,145,178,0.22)]"
            aria-label="Connect with Abdul Rauf"
          >
            Let’s Connect
            <span className="inline-block transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  );
}
