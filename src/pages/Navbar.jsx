import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Sample Tool", href: "#sampleTool" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-sky-400/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#home"
          className="text-lg font-bold tracking-[0.3em] text-white"
        >
          <span className="text-sky-300">MAG</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-300 transition hover:text-sky-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-sky-300/40 px-4 py-2 text-sm font-medium text-sky-200 transition hover:border-sky-300 hover:bg-sky-300/10"
        >
          Let’s Connect
        </a>
      </div>
    </header>
  );
}
export default Navbar;
