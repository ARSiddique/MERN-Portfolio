// src/sections/Experience.jsx
import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Freelance MERN Stack Developer",
        company: "Remote / Self-employed",
        duration: "Jul 2025 – Present",
        description:
        "Currently working as a freelance developer, delivering full-stack web apps with admin panels, dashboards, and API integrations using modern MERN stack and ShadCN UI.",
    },
    {
        role: "MERN Stack Developer",
        company: "Heapware Technologies",
        duration: "Dec 10, 2024 – Jun 10, 2025",
        description:
        "Developed full-stack projects with secure authentication, dashboards, protected routes, and reusable components using Next.js, Node, Express, MongoDB, Tailwind, and Redux Toolkit.",
    },
    {
        role: "MERN Stack Developer (Intern)",
        company: "ASHWIZ",
        duration: "Aug 10, 2024 – Nov 10, 2024",
        description:
            "Worked as a MERN stack intern where I built small-scale apps, implemented CRUD operations, and practiced real-world workflows using Git, REST APIs, and MVC structure.",
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
