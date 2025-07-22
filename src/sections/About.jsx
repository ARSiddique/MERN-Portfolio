import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import aboutImg from '../assets/mern-developer-illustration.png';

export default function About() {
    return (
        <section
            id="about"
            className="min-h-screen py-20 px-6 bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors"
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left: Image */}
                <motion.div
                    className="w-full"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        src={aboutImg}
                        alt="Illustration of Abdul Rauf coding"
                        className="w-full h-auto rounded-lg shadow-lg object-cover"
                        loading="lazy"
                    />
                </motion.div>

                {/* Right: Text */}
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-4xl font-bold text-cyan-600 dark:text-cyan-400">
                        About Me
                    </h2>

                    <p className="text-base md:text-lg leading-relaxed">
                        Hi, I'm <span className="font-semibold text-cyan-600 dark:text-cyan-400">Abdul Rauf</span>, a passionate MERN Stack Developer based in Lahore, Pakistan. I specialize in building fast, secure, and scalable web applications using
                        <span className="text-cyan-600 dark:text-cyan-400 font-semibold"> MongoDB</span>,
                        <span className="text-cyan-600 dark:text-cyan-400 font-semibold"> Express.js</span>,
                        <span className="text-cyan-600 dark:text-cyan-400 font-semibold"> React.js</span>, and
                        <span className="text-cyan-600 dark:text-cyan-400 font-semibold"> Node.js</span>.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed">
                        I thrive on transforming ideas into real-world, user-friendly digital products. With hands-on experience in API development, RESTful architecture, and modern UI/UX design, I ensure every project is optimized for performance and engagement.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed">
                        I'm always learning and enjoy tackling creative, meaningful challenges. Whether working solo or collaborating with teams, I bring dedication, energy, and adaptability to each project.
                    </p>

                    <ScrollLink
                        to="contact"
                        smooth
                        duration={500}
                        offset={-70}
                        className="inline-block bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition cursor-pointer"
                        aria-label="Connect with Abdul Rauf"
                    >
                        Let’s Connect
                    </ScrollLink>
                </motion.div>

            </div>
        </section>
    );
}
