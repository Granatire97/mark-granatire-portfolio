import React from "react";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Standings from "./pages/Standings";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-white text-zinc-900 selection:bg-sky-300 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Standings />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
