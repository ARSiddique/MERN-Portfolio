"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import PageBackground from "./components/PageBackground";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

export default function Page() {
  return (
    <div className="app">
      <PageBackground />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Resume />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
