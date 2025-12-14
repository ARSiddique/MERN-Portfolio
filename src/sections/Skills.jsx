import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

const SKILLS = [
  {
    name: "React",
    icon: <FaReact className="text-cyan-600 dark:text-cyan-300" aria-hidden="true" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-slate-900 dark:text-white" aria-hidden="true" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-600 dark:text-green-400" aria-hidden="true" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-slate-600 dark:text-slate-300" aria-hidden="true" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-700 dark:text-green-500" aria-hidden="true" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-500 dark:text-yellow-400" aria-hidden="true" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-500 dark:text-sky-400" aria-hidden="true" />,
  },
  {
    name: "Git & GitHub",
    icon: (
      <div className="flex items-center gap-2" aria-hidden="true">
        <FaGitAlt className="text-orange-500 dark:text-orange-400" />
        <FaGithub className="text-slate-900 dark:text-white" />
      </div>
    ),
  },
];

const container = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.07,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-cyan-400/10 text-cyan-700 dark:text-cyan-200 text-xs font-semibold tracking-wide uppercase">
            ✨ Skills
          </div>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Tech Stack
            </span>
          </h2>

          <p className="mt-3 text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Tools I use to build modern, scalable and clean web applications — focused on performance,
            UI/UX, and maintainable architecture.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 sm:gap-6"
          role="list"
        >
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              role="listitem"
              tabIndex={0}
              className="
                group relative rounded-2xl p-[1px]
                bg-gradient-to-br from-cyan-500/30 via-transparent to-blue-500/30
                focus:outline-none focus:ring-2 focus:ring-cyan-500/50
              "
            >
              <div
                className="
                  relative h-full rounded-2xl px-5 py-6
                  border border-black/10 dark:border-white/10
                  bg-white/60 dark:bg-white/5 backdrop-blur-xl
                  shadow-lg
                  transition
                  group-hover:-translate-y-1 group-hover:shadow-[0_20px_60px_rgba(8,145,178,0.18)]
                "
              >
                {/* top shine */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 to-transparent opacity-60 dark:from-white/10" />

                <div className="relative flex flex-col items-center text-center">
                  <div
                    className="
                      mb-3 grid place-items-center
                      h-14 w-14 rounded-2xl
                      bg-white/70 dark:bg-white/5
                      border border-black/10 dark:border-white/10
                      transition
                      group-hover:scale-105
                    "
                  >
                    <div className="text-3xl">{skill.icon}</div>
                  </div>

                  <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-white">
                    {skill.name}
                  </h3>

                  <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-300">
                    Pro-level usage
                  </p>
                </div>

                {/* hover glow */}
                <div className="pointer-events-none absolute -inset-6 rounded-2xl opacity-0 blur-2xl transition group-hover:opacity-100 bg-cyan-400/10 dark:bg-cyan-400/10" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom mini note */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {["Clean UI", "Performance", "Scalable APIs", "Best Practices"].map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-xs font-medium border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 text-slate-700 dark:text-slate-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
