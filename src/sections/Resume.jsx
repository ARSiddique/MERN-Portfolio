import { motion } from 'framer-motion';
import { FaDownload, FaEye } from 'react-icons/fa';

export default function Resume() {
    return (
        <section
            id="resume"
            className="min-h-[60vh] py-20 px-6 bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors"
        >
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <motion.h2
                    className="text-4xl font-bold text-cyan-600 dark:text-cyan-400"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Resume
                </motion.h2>

                <motion.p
                    className="text-lg text-gray-700 dark:text-gray-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                >
                    Download or view my latest CV to explore my MERN stack experience and project work.
                </motion.p>

                <motion.div
                    className="flex justify-center gap-6 flex-wrap"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <a
                        href="/Abdul-Rauf-CV.pdf"
                        download
                        className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition cursor-pointer"
                        aria-label="Download Abdul Rauf CV"
                    >
                        <FaDownload className="text-lg" aria-hidden="true" />
                        Download CV
                    </a>

                    <a
                        href="/Abdul-Rauf-CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border-2 border-cyan-600 text-cyan-600 dark:text-cyan-400 px-6 py-3 rounded-lg shadow-md hover:bg-cyan-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition cursor-pointer"
                        aria-label="View Abdul Rauf CV online"
                    >
                        <FaEye className="text-lg" aria-hidden="true" />
                        View Online
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
