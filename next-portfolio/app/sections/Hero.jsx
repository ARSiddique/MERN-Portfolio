import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaLaptopCode, FaEnvelopeOpenText } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-24 px-6 overflow-hidden">
      {/* soft separator glow only (no full bg) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/35 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-white/60 dark:bg-white/5 backdrop-blur text-cyan-700 dark:text-cyan-200 text-xs font-semibold tracking-wide uppercase">
            <HiSparkles className="text-sm" />
            MERN Stack Developer
          </div>

          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
            Turning{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Ideas
            </span>{" "}
            into Interactive Web Experiences
          </h1>

          <p className="mt-4 text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            I’m{" "}
            <span className="font-semibold text-cyan-700 dark:text-cyan-300">
              Abdul Rauf
            </span>{" "}
            — I build fast, secure, scalable web apps using{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              React, Node.js, Express & MongoDB
            </span>{" "}
            with a strong focus on UI/UX and clean architecture.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-2">
            {["Role-based Auth (JWT)", "Admin Dashboards", "REST APIs", "Responsive UI"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-medium border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 text-slate-700 dark:text-slate-200 backdrop-blur"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-3">
            <ScrollLink
              to="projects"
              smooth
              duration={500}
              offset={-90}
              className="group inline-flex items-center justify-center gap-2 bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition cursor-pointer shadow-[0_10px_30px_rgba(8,145,178,0.25)]"
              aria-label="View Projects"
            >
              <FaLaptopCode className="text-lg" aria-hidden="true" />
              View Projects
              <span className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </ScrollLink>

            <ScrollLink
              to="contact"
              smooth
              duration={500}
              offset={-90}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold border border-cyan-600/60 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition cursor-pointer bg-white/60 dark:bg-white/5 backdrop-blur"
              aria-label="Let’s Talk"
            >
              <FaEnvelopeOpenText className="text-lg" aria-hidden="true" />
              Let’s Talk
            </ScrollLink>
          </div>

          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
            Available for freelance & full-time roles • Lahore, Pakistan
          </p>
        </motion.div>

        {/* Right */}
        <motion.div
          className="flex-1 w-full max-w-md"
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-xl overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />

            <div className="p-4">
              <lottie-player
                src="https://assets4.lottiefiles.com/packages/lf20_kkflmtur.json"
                background="transparent"
                speed="1"
                loop
                autoplay
                aria-label="Animation of coding process"
                role="img"
                className="w-full h-auto"
              ></lottie-player>
            </div>

            <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold bg-cyan-600 text-white shadow">
              Fast UI
            </div>
            <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-900/90 text-white shadow dark:bg-white/10">
              Clean Code
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
