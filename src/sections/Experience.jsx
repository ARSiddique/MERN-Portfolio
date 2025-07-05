// src/sections/Experience.jsx
import { motion } from 'framer-motion';

const experiences = [
    {
        role: "MERN Stack Developer",
        company: "Freelance / Personal Projects",
        duration: "Dec 2024 – Present",
        description:
            "Building full-stack apps with authentication, dashboards, REST APIs, and beautiful UIs using MERN, Tailwind, Redux, and ShadCN UI.",
    },
    {
        role: "Game Developer",
        company: "Game Pixel Studio / Ozi Technologies",
        duration: "Dec 2021 – Nov 2023",
        description:
            "Developed simulation games in Unity for Android using C#. Led gameplay design and optimization for performance on low-end devices.",
    },
    {
        role: "WordPress Developer (Intern)",
        company: "Pagie Portal",
        duration: "Sep 2021 – Dec 2021",
        description:
            "Worked on custom themes and elementor-based websites for European construction clients. Built responsive and SEO-optimized layouts.",
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="min-h-screen py-20 px-6 bg-[#0f172a] text-white"
        >
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-cyan-400 text-center mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Experience
                </motion.h2>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#1e293b] p-6 rounded-lg shadow-md hover:shadow-cyan-600/40 transition"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                        >
                            <h3 className="text-xl font-semibold text-cyan-300">
                                {exp.role} - <span className="text-white">{exp.company}</span>
                            </h3>
                            <p className="text-sm text-gray-400 mb-2">{exp.duration}</p>
                            <p className="text-gray-300 text-sm">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
