// src/sections/Skills.jsx
import { motion } from 'framer-motion';
import {
    FaReact,
    FaNodeJs,
    FaGithub,
    FaGitAlt,
} from 'react-icons/fa';
import {
    SiNextdotjs,
    SiExpress,
    SiMongodb,
    SiJavascript,
    SiTailwindcss,
} from 'react-icons/si';

const skills = [
    { name: 'React', icon: <FaReact className="text-sky-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
    {
        name: 'Git & GitHub', icon: (
            <div className="flex gap-1">
                <FaGitAlt className="text-orange-400" />
                <FaGithub className="text-white" />
            </div>
        )
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="min-h-screen py-20 px-6 bg-[#0f172a] text-white"
        >
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    className="text-4xl font-bold text-cyan-400 mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    My Skills
                </motion.h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#1e293b] p-6 rounded-xl shadow-md hover:shadow-cyan-600/40 hover:scale-105 transition-all flex flex-col items-center justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="text-4xl mb-3">{skill.icon}</div>
                            <h3 className="text-lg font-medium">{skill.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
