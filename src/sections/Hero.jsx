import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaLaptopCode, FaEnvelopeOpenText } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-24 px-6 bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Left: Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm uppercase text-cyan-500 tracking-wider">
            MERN Stack Developer
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 leading-tight">
            Turning Ideas into Interactive Web Experiences
          </h1>

          <span className="block text-xl font-semibold tracking-wide mb-4 text-cyan-600 dark:text-cyan-400">
            I'm Abdul Rauf
          </span>

          <p className="text-base md:text-lg mb-6 max-w-xl mx-auto md:mx-0 leading-relaxed">
            I build high-performance, full-stack web apps using
            <span className="text-cyan-600 dark:text-cyan-400 font-semibold"> React</span>,
            <span className="text-cyan-600 dark:text-cyan-400 font-semibold"> Node.js</span>,
            <span className="text-cyan-600 dark:text-cyan-400 font-semibold"> Express</span>, and
            <span className="text-cyan-600 dark:text-cyan-400 font-semibold"> MongoDB</span>.
            Focused on clean code, UI/UX, and seamless user experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center md:justify-start gap-4">
            <ScrollLink
              to="projects"
              smooth
              duration={500}
              offset={-70}
              className="inline-flex items-center gap-2 bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition cursor-pointer"
              aria-label="View Projects"
            >
              <FaLaptopCode className="text-lg" aria-hidden="true" /> View Projects
            </ScrollLink>

            <ScrollLink
              to="contact"
              smooth
              duration={500}
              offset={-70}
              className="inline-flex items-center gap-2 border-2 border-cyan-600 text-cyan-600 dark:text-cyan-400 px-6 py-2 rounded-lg font-semibold hover:bg-cyan-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition cursor-pointer"
              aria-label="Hire Me"
            >
              <FaEnvelopeOpenText className="text-lg" aria-hidden="true" /> Hire Me
            </ScrollLink>
          </div>
        </motion.div>

        {/* Right: Lottie Animation */}
        <motion.div
          className="flex-1 w-full max-w-md"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <lottie-player
            src="https://assets4.lottiefiles.com/packages/lf20_kkflmtur.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            aria-label="Animation of coding process"
            role="img"
            className="w-full h-auto"
          ></lottie-player>
        </motion.div>

      </div>
    </section>
  );
}
