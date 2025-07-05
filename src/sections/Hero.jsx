// src/sections/Hero.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-cyan-400">
            Hi, I'm Abdul Rauf
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            A passionate <span className="text-white font-semibold">MERN Stack Developer</span> crafting full-stack apps using <span className="text-cyan-300 font-semibold">React</span>, <span className="text-cyan-300 font-semibold">Node.js</span>, <span className="text-cyan-300 font-semibold">Express</span>, and <span className="text-cyan-300 font-semibold">MongoDB</span>. I focus on performance, UX, and clean code.
          </p>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="inline-block bg-cyan-500 px-6 py-2 text-white font-semibold rounded hover:bg-cyan-600 transition cursor-pointer"
          >
            View Projects
          </Link>
        </motion.div>

        {/* Right: High-quality Lottie Animation */}
        <motion.div
          className="flex-1 w-full max-w-md"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <lottie-player
            src="https://assets7.lottiefiles.com/packages/lf20_pwohahvd.json"
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
