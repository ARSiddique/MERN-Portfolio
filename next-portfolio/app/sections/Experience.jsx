import { motion } from "framer-motion";
import { HiSparkles, HiBriefcase, HiCalendar } from "react-icons/hi";

const EXPERIENCES = [
  {
    role: "Freelance MERN Stack Developer",
    company: "Remote / Self-employed",
    duration: "Jul 2025 – Present",
    description:
      "Delivering full-stack web apps with admin panels, dashboards, and API integrations using MERN stack and ShadCN UI.",
  },
  {
    role: "MERN Stack Developer",
    company: "Heapware Technologies",
    duration: "Dec 2024 – Jun 2025",
    description:
      "Built secure projects with authentication, dashboards, protected routes, and reusable components using Next.js, Node.js, Express, MongoDB, Tailwind CSS, and Redux Toolkit.",
  },
  {
    role: "MERN Stack Developer (Intern)",
    company: "ASHWIZ",
    duration: "Aug 2024 – Nov 2024",
    description:
      "Developed small-scale apps, implemented CRUD operations, and practised real-world workflows using Git, REST APIs, and MVC architecture.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative min-h-screen py-20 px-6">
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
            Experience
          </div>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Journey
            </span>
          </h2>

          <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Roles I’ve worked in — focused on MERN, performance, UI/UX, and clean architecture.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mt-12 relative">
          {/* center/left line */}
          <div className="pointer-events-none absolute left-3 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 via-slate-300/20 to-blue-500/30" />

          <div role="list" className="space-y-8">
            {EXPERIENCES.map((exp, idx) => {
              const isRight = idx % 2 === 1;

              return (
                <motion.div
                  key={exp.role + exp.company}
                  role="listitem"
                  className={[
                    "relative grid md:grid-cols-2 gap-6",
                    isRight ? "md:text-left" : "md:text-right",
                  ].join(" ")}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: idx * 0.08, duration: 0.55 }}
                >
                  {/* Left column spacer/content */}
                  <div className={isRight ? "hidden md:block" : ""} />

                  {/* Card side */}
                  <div className={isRight ? "" : "md:col-start-1"}>
                    <div
                      className={[
                        "relative rounded-2xl border border-black/10 dark:border-white/10",
                        "bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-xl",
                        "p-6 md:p-7 hover:shadow-cyan-500/15 transition-all",
                        isRight ? "md:col-start-2" : "",
                      ].join(" ")}
                      tabIndex={0}
                    >
                      {/* soft gradient overlay */}
                      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-70" />

                      <div className="relative">
                        {/* top row */}
                        <div className="flex flex-wrap items-center gap-2 justify-start md:justify-start">
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border border-cyan-500/25 bg-white/70 dark:bg-white/10 text-cyan-700 dark:text-cyan-200">
                            <HiBriefcase className="text-base" />
                            {exp.company}
                          </span>

                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 text-slate-700 dark:text-slate-200">
                            <HiCalendar className="text-base text-cyan-600 dark:text-cyan-300" />
                            {exp.duration}
                          </span>
                        </div>

                        <h3 className="mt-4 text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">
                          {exp.role}
                        </h3>

                        <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-200">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="pointer-events-none absolute left-3 md:left-1/2 md:-translate-x-1/2 top-8">
                    <div className="h-3.5 w-3.5 rounded-full bg-cyan-500 shadow-[0_0_0_6px_rgba(8,145,178,0.12)]" />
                  </div>

                  {/* Right column spacer */}
                  <div className={isRight ? "" : "hidden md:block"} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
