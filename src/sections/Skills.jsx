// src/sections/Skills.jsx
import { motion } from 'framer-motion';
import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaGithub,
    FaGitAlt,
    FaFigma,
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss } from 'react-icons/si';

const skills = [
    { name: 'React', icon: <FaReact className="text-sky-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-400" /> },
    { name: 'GitHub', icon: <FaGithub className="text-white" /> },
    { name: 'Figma', icon: <FaFigma className="text-pink-500" /> },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="min-h-screen py-20 px-6 bg-[#0f172a] text-white"
        >
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    className="text-4xl font-bold text-cyan-400 mb-10"
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
                            className="bg-[#1e293b] p-6 rounded-lg shadow-md hover:shadow-cyan-600/40 hover:scale-105 transition-all flex flex-col items-center justify-center"
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
