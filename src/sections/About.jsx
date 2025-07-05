// src/sections/About.jsx
import { motion } from 'framer-motion';
import aboutImg from '../assets/mern-developer-illustration.png'; // same illustration or a different one if you like

export default function About() {
    return (
        <section id="about" className="min-h-screen py-20 px-6 bg-[#0f172a] text-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left: Image */}
                <motion.div
                    className="w-full"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        src={aboutImg}
                        alt="Abdul Rauf Developer Illustration"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </motion.div>

                {/* Right: Text */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-4xl font-bold text-cyan-400 mb-6">About Me</h2>

                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                        Hi, I'm <span className="text-white font-semibold">Abdul Rauf</span>, a passionate and highly driven MERN Stack Developer from Lahore, Pakistan. I specialize in building fast, secure, and scalable web applications using <span className="text-cyan-300">MongoDB</span>, <span className="text-cyan-300">Express.js</span>, <span className="text-cyan-300">React.js</span>, and <span className="text-cyan-300">Node.js</span>.
                    </p>

                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                        I thrive on transforming ideas into real-world, user-friendly digital products. With hands-on experience in API development, RESTful architecture, and modern UI/UX design, I ensure every project is optimized for both performance and user engagement.
                    </p>

                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        I'm constantly learning and love working on creative, meaningful projects. Whether in a team or solo, I bring focus, energy, and adaptability to every challenge.
                    </p>

                    <a
                        href="#contact"
                        className="inline-block bg-cyan-500 hover:bg-cyan-600 transition px-6 py-2 rounded text-white font-semibold"
                    >
                        Let’s Connect
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
