import { motion } from "framer-motion";
import { FaDownload, FaEye } from "react-icons/fa";

const CV_URL = "/Abdul-Rauf-CV.pdf";

function cx(...a) {
  return a.filter(Boolean).join(" ");
}

export default function Resume() {
  return (
    <section id="resume" className="relative min-h-[70vh] py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-white/60 dark:bg-white/5 backdrop-blur text-cyan-700 dark:text-cyan-200 text-xs font-semibold tracking-wide uppercase">
            ✦ Resume
          </div>

          <h2 className="mt-4 text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              CV
            </span>
          </h2>

          <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Download or view my latest CV to explore my MERN stack experience and project work.
          </p>
        </motion.div>

        <motion.div
          className={cx(
            "mt-10 mx-auto max-w-3xl",
            "rounded-3xl p-8",
            "border border-black/10 dark:border-white/10",
            "bg-white/60 dark:bg-white/5 backdrop-blur-xl",
            "shadow-xl"
          )}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={CV_URL}
              download
              className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              aria-label="Download CV"
            >
              <FaDownload /> Download CV
            </a>

            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 text-slate-900 dark:text-white hover:shadow-md hover:shadow-cyan-500/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              aria-label="View CV online"
            >
              <FaEye /> View Online
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
