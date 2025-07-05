// src/sections/Hero.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaLaptopCode, FaEnvelopeOpenText } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-24 px-6 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Left: Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm uppercase text-cyan-400 tracking-wider">
            MERN Stack Developer
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 leading-tight text-white mt-2">
            Turning Ideas into Interactive Web Experiences
          </h1>

          <span className="block text-xl text-cyan-300 font-semibold tracking-wide mb-4">
            I'm Abdul Rauf
          </span>

          <p className="text-gray-300 text-lg mb-6 max-w-xl mx-auto md:mx-0">
            I build high-performance, full-stack web apps using
            <span className="text-cyan-300 font-semibold"> React</span>,
            <span className="text-cyan-300 font-semibold"> Node.js</span>,
            <span className="text-cyan-300 font-semibold"> Express</span>, and
            <span className="text-cyan-300 font-semibold"> MongoDB</span>. Focused on clean code, UI/UX, and seamless user experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center md:justify-start gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="inline-flex items-center gap-2 bg-cyan-500 text-white px-6 py-2 rounded font-semibold hover:bg-cyan-600 transition cursor-pointer"
            >
              <FaLaptopCode className="text-lg" /> View Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="inline-flex items-center gap-2 border border-cyan-500 text-cyan-400 px-6 py-2 rounded font-semibold hover:bg-cyan-600 hover:text-white transition cursor-pointer"
            >
              <FaEnvelopeOpenText className="text-lg" /> Hire Me
            </Link>
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
            // src="https://assets3.lottiefiles.com/packages/lf20_9cyyl8i5.json"
            src="https://assets4.lottiefiles.com/packages/lf20_kkflmtur.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            style={{ width: '100%', height: 'auto' }}
          ></lottie-player>
        </motion.div>
      </div>
    </section>
  );
}
