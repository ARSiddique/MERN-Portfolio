import { motion } from 'framer-motion';

const EXPERIENCES = [
    {
        role: 'Freelance MERN Stack Developer',
        company: 'Remote / Self-employed',
        duration: 'Jul 2025 – Present',
        description:
            'Delivering full-stack web apps with admin panels, dashboards, and API integrations using MERN stack and ShadCN UI.',
    },
    {
        role: 'MERN Stack Developer',
        company: 'Heapware Technologies',
        duration: 'Dec 2024 – Jun 2025',
        description:
            'Built secure projects with authentication, dashboards, protected routes, and reusable components using Next.js, Node.js, Express, MongoDB, Tailwind CSS, and Redux Toolkit.',
    },
    {
        role: 'MERN Stack Developer (Intern)',
        company: 'ASHWIZ',
        duration: 'Aug 2024 – Nov 2024',
        description:
            'Developed small-scale apps, implemented CRUD operations, and practised real-world workflows using Git, REST APIs, and MVC architecture.',
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="min-h-screen py-20 px-6 bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors"
        >
            <div className="max-w-5xl mx-auto">
                {/* Section Title */}
                <motion.h2
                    className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Experience
                </motion.h2>

                {/* Experience List */}
                <div role="list" className="space-y-8">
                    {EXPERIENCES.map((exp, idx) => (
                        <motion.div
                            key={exp.role + exp.company}
                            role="listitem"
                            className="bg-gray-100 dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition cursor-pointer"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.6 }}
                            tabIndex={0}
                        >
                            <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400">
                                {exp.role}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                {exp.company} | {exp.duration}
                            </p>
                            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
