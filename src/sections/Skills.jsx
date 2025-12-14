import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb, SiJavascript, SiTailwindcss } from "react-icons/si";
import { HiSparkles } from "react-icons/hi";

const SKILLS = [
  { name: "React", icon: <FaReact className="text-cyan-400" aria-hidden="true" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-slate-200" aria-hidden="true" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400" aria-hidden="true" /> },
  { name: "Express.js", icon: <SiExpress className="text-slate-300" aria-hidden="true" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" aria-hidden="true" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" aria-hidden="true" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" aria-hidden="true" /> },
  {
    name: "Git & GitHub",
    icon: (
      <div className="flex items-center gap-2" aria-hidden="true">
        <FaGitAlt className="text-orange-400" />
        <FaGithub className="text-white" />
      </div>
    ),
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-white/60 dark:bg-white/5 backdrop-blur text-cyan-700 dark:text-cyan-200 text-xs font-semibold tracking-wide uppercase"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <HiSparkles className="text-sm" />
          Skills
        </motion.div>

        <motion.h2
          className="mt-4 text-4xl md:text-5xl font-extrabold"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Tech I Use
        </motion.h2>

        <motion.p
          className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          Clean UI, solid backend, and production-ready workflows.
        </motion.p>

        <div role="list" className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={skill.name}
              role="listitem"
              className="group rounded-2xl border border-black/10 dark:border-white/10 bg-white/55 dark:bg-white/5 backdrop-blur-xl p-6 shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 transition cursor-pointer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.06, duration: 0.45 }}
              tabIndex={0}
            >
              <div className="text-4xl mb-3 flex justify-center">{skill.icon}</div>
              <h3 className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-100">
                {skill.name}
              </h3>
              <div className="mt-3 h-px w-10 mx-auto bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
