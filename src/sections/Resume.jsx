// src/sections/Resume.jsx
import { motion } from 'framer-motion';
import { FaDownload, FaEye } from 'react-icons/fa';

export default function Resume() {
    return (
        <section
            id="resume"
            className="min-h-[60vh] py-20 px-6 bg-[#0f172a] text-white"
        >
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    className="text-4xl font-bold text-cyan-400 mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Resume
                </motion.h2>

                <motion.p
                    className="text-lg text-gray-300 mb-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                >
                    Download or view my latest CV to explore my MERN stack experience and project work.
                </motion.p>

                <motion.div
                    className="flex justify-center gap-6 flex-wrap"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <a
                        href="/Abdul-Rauf-CV.pdf"
                        download
                        className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 text-white font-semibold rounded-lg shadow-md transition"
                    >
                        <FaDownload className="text-lg" />
                        Download CV
                    </a>

                    <a
                        href="/Abdul-Rauf-CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-3 font-semibold rounded-lg shadow-md transition"
                    >
                        <FaEye className="text-lg" />
                        View Online
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
