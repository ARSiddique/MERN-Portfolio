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

const SKILLS = [
    { name: 'React', icon: <FaReact className="text-cyan-600 dark:text-cyan-400" aria-hidden="true" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-gray-800 dark:text-gray-200" aria-hidden="true" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600 dark:text-green-400" aria-hidden="true" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-600 dark:text-gray-400" aria-hidden="true" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-700 dark:text-green-500" aria-hidden="true" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500 dark:text-yellow-400" aria-hidden="true" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-500 dark:text-sky-400" aria-hidden="true" /> },
    {
        name: 'Git & GitHub',
        icon: (
            <div className="flex items-center gap-1" aria-hidden="true">
                <FaGitAlt className="text-orange-500 dark:text-orange-400" />
                <FaGithub className="text-gray-900 dark:text-white" />
            </div>
        ),
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="min-h-screen py-20 px-6 bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors"
        >
            <div className="max-w-6xl mx-auto text-center">
                {/* Section Title */}
                <motion.h2
                    className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    My Skills
                </motion.h2>

                {/* Skills Grid */}
                <div role="list" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    {SKILLS.map((skill, idx) => (
                        <motion.div
                            key={skill.name}
                            role="listitem"
                            className="bg-gray-100 dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg hover:shadow-cyan-500/40 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all cursor-pointer flex flex-col items-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            tabIndex={0}
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
