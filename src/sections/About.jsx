// src/sections/About.jsx
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section
            id="about"
            className="min-h-screen py-20 px-6 bg-[#0f172a] text-white"
        >
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-cyan-400 mb-6 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    About Me
                </motion.h2>

                <motion.p
                    className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    I'm <span className="text-white font-semibold">Abdul Rauf</span>, a passionate MERN Stack Developer from Lahore, Pakistan. I specialize in building dynamic, high-performance websites and web apps using modern technologies like <span className="text-cyan-300">MongoDB, Express.js, React.js, and Node.js</span>. I love turning ideas into reality through clean code and user-focused design.
                </motion.p>

                <motion.div
                    className="mt-10 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <a
                        href="#contact"
                        className="inline-block bg-cyan-500 hover:bg-cyan-600 transition px-6 py-2 rounded text-white font-semibold"
                    >
                        Let's Connect
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
