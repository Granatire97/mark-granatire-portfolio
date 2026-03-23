import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/images/IMG_1272.jpg";
import { Github, Linkedin, Mail, FileText, ChevronDown } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/5"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.15),transparent_35%)]" />
      <div className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">
            Data Science • Software • Sports Analytics
          </p>
          <h1 className="max-w-4xl text-6xl font-bold leading-tight tracking-tight text-zinc-900 md:text-7xl">
            Mark Granatire
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 md:text-xl">
            Data scientist and software developer focused on building tools that
            support real-world decision-making.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-sky-500 hover:bg-sky-600 px-6 py-3 font-semibold text-black transition hover:scale-[1.02]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full bg-zinc-900 border border-black-700 px-6 py-3 font-semibold text-white transition hover:border-sky-300 hover:text-sky-200 hove:bg-zinc-800"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-zinc-400">
            <a
              href="https://github.com/Granatire97"
              className="transition hover:text-sky-500"
              aria-label="GitHub"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/mark-granatire-jr/"
              className="transition hover:text-sky-500"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a
              href="mailto:markgranatire@gmail.com"
              className="transition hover:text-sky-300"
              aria-label="Email"
            >
              <Mail />
            </a>
            <a
              href="../public/MarkGranatire__Resume__2026.pdf"
              className="transition hover:text-sky-500"
              aria-label="Resume"
            >
              <FileText />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative z-10"
        >
          <div className="rounded-[2rem] border border-sky-300/20 bg-zinc-950 p-6 shadow-2xl shadow-sky-950/30">
            <div className="mb-6 flex items-center justify-between">
              <img src={logo} alt="Logo" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="pb-8 text-center text-zinc-500">
        <a
          href="#about"
          className="inline-flex items-center gap-2 transition hover:text-sky-300"
        >
          Scroll to explore <ChevronDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
export default Hero;
