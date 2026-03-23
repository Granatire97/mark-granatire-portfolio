import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const skills = [
  {
    title: "Data Engineering & Infrastructure",
    description:
      "Building and maintaining scalable systems and pipelines to efficiently collect, process, and organize data.",
    tags: [
      "Python",
      "SQL",
      "Spark",
      "PYSpark",
      "ETL Pipelines",
      "API Integration",
      "Data Modeling & Schema Design",
      "Distributed Data Processing",
    ],
  },
  {
    title: "Analytics & Modeling",
    description:
      "Analyzing data and applying statistical and machine learning methods to generate insights and predictions.",
    tags: [
      "R",
      "SAS",
      "Jupyter Notebooks",
      "Statistical Analysis",
      "Feature Engineering",
      "Predictive Modeling",
      "Model Evaluation & Validation",
      "Exploratory Data Analysis (EDA)",
    ],
  },
  {
    title: "Software Development & Visualization",
    description:
      "Developing applications, APIs, and dashboards that make data accessible, interactive, and actionable.",
    tags: [
      "Flask",
      "REST & SOAP APIs",
      "Java",
      "JavaScript",
      "TypeScript",
      "React",
      "HTML",
      "CSS",
      "Bootstrap",
      "Power BI",
      "Tableau",
      "Plotly",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="border-y border-white/5 bg-zinc-950/60">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionTitle
          eyebrow="Skills & Expertise"
          title="Technologies and tools I use to bring ideas to life"
        />
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill) => (
            <motion.article
              key={skill.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="rounded-[2rem] border border-white/5 bg-zinc-950 p-6"
            >
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {skill.title}
                </h3>
              </div>
              <p className="mt-3 leading-7 text-zinc-400">
                {skill.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-sky-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
