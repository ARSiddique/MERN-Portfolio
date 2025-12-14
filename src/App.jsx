// src/App.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageBackground from "./components/PageBackground";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import Experience from "./sections/Experience";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: false, // dubara scroll pe bhi animate
      offset: 120,
      mirror: false,
    });

    const t = setTimeout(() => {
      AOS.refreshHard();
    }, 200);

    const onLoad = () => AOS.refreshHard();
    const onResize = () => AOS.refresh();
    window.addEventListener("load", onLoad);
    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(t);
      window.removeEventListener("load", onLoad);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen font-sans text-slate-900 dark:text-white transition-colors">
      <PageBackground />

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
