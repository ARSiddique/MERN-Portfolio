import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

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
      once: false,
      offset: 120,
      mirror: false,
    });

    const t = setTimeout(() => AOS.refreshHard(), 200);

    const onLoad = () => AOS.refreshHard();
    window.addEventListener("load", onLoad);

    return () => {
      clearTimeout(t);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <div className="min-h-screen font-sans text-slate-900 dark:text-white transition-colors bg-slate-50 dark:bg-[#050A18]">
      {/* GLOBAL BACKGROUND (single source of truth) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* soft blobs */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[750px] rounded-full blur-3xl bg-cyan-400/20 dark:bg-cyan-400/12" />
        <div className="absolute top-40 -left-28 h-96 w-96 rounded-full blur-3xl bg-blue-500/15 dark:bg-blue-500/10" />
        <div className="absolute bottom-10 -right-28 h-96 w-96 rounded-full blur-3xl bg-cyan-500/12 dark:bg-cyan-500/10" />

        {/* grid (light + dark) */}
        <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.09]
          bg-[linear-gradient(to_right,rgba(2,6,23,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.18)_1px,transparent_1px)]
          dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)]
          bg-[size:64px_64px]" />
        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.22)_100%)] opacity-0 dark:opacity-100" />
      </div>

      <Navbar />

      {/* floating buttons are NOT footer content (just fixed UI) */}
      <FloatingActions />

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
