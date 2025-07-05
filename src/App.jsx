// src/App.jsx
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Testimonials from './sections/Testimonials';
import Experience from './sections/Experience';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="bg-[#0f172a] text-white scroll-smooth font-sans">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
