import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import capstone from "../assets/images/capstone.png";
import dcehackathon from "../assets/images/dcehackathon.png";
import analyticswebsite from "../assets/images/analyticswebsite.png";

const projects = [
  {
    title: "NHL Player Value & Salary Modeling (Capstone)",
    description:
      "Analyzed how NHL player performance translates to salary cap value (AAV) by building a full data pipeline and applying regression and machine learning models. Generated interpretable insights to support roster construction and contract decision-making.",
    image: capstone,
    impact:
      "Generated interpretable insights linking performance to player value, enabling more informed contract and roster decisions.",
    tags: [
      "Python",
      "R",
      "Machine Learning",
      "Data Modeling",
      "Feature Engineering",
      "Data Analysis",
      "Sports Analytics",
    ],
  },
  {
    title: "Defensive Chaos Analysis (HALO Hackathon)",
    description:
      "Developed a Defensive Chaos Episode (DCE) framework to quantify player performance under sustained defensive pressure using tracking data. Created new metrics to evaluate defensive reliability in high-risk situations, enabling deeper player evaluation beyond traditional stats.",
    image: dcehackathon,
    impact:
      "Introduced a structured way to quantify performance under pressure, enabling deeper evaluation in high-risk, game-relevant situations.",
    tags: [
      "Python",
      "Data Analysis",
      "Feature Engineering",
      "Sports Analytics",
      "Tracking Data",
    ],
  },
  {
    title: "Hockey Analytics Web App (2021 Big Data Cup)",
    description:
      "Built a full-stack interactive dashboard using Flask, Plotly, and Bootstrap to explore event-level hockey data. Implemented dynamic filtering and visualizations to support player and team analysis, with a focus on usability and real-time exploratory workflows.",
    image: analyticswebsite,
    impact:
      "Enabled interactive exploration of complex event-level data, improving accessibility and usability for analysis and decision support.",
    github: "https://github.com/Granatire97/2021-bdc-app",
    tags: [
      "Python",
      "Flask",
      "Plotly",
      "Bootstrap",
      "Data Visualization",
      "GitHub",
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="border-y border-white/5 bg-zinc-950/60">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionTitle eyebrow="Projects" title="Work worth highlighting." />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="rounded-[2rem] border border-white/5 bg-zinc-950 p-6"
            >
              <div className="mb-5 h-44 rounded-[1.5rem] border border-sky-300/10 bg-zinc-900 overflow-hidden flex items-center justify-center">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-sm text-sky-300">{project.impact}</p>
              <p className="mt-4 leading-7 text-zinc-400">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-sky-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="rounded-full border border-sky-300/25 px-4 py-2 text-sm text-sky-200 transition hover:bg-sky-300/10">
                      GitHub
                    </button>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;
