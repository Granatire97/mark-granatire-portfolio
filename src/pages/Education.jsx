import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const education = [
  {
    title: "M.S. Data Science",
    subtitle: "Loyola University Maryland",
    description:
      "Graduate coursework and applied projects across machine learning, business intelligence, statistical computing, and sports analytics.",
  },
  {
    title: "B.S. Information Science & Technology",
    subtitle: "Pennsylvania State University",
    description:
      "Interdisciplinary program focused on the intersection of information, technology, and systems, with coursework in programming, data management, application development, networking, and information systems design",
  },
];

function Education() {
  return (
    <section id="education" className="border-y border-white/5 bg-zinc-950/60">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionTitle
          eyebrow="Education"
          title="Undergraduate & Graduate History"
        />

        <div className="space-y-5">
          {education.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/5 bg-black p-6 md:p-8"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm uppercase tracking-[0.18em] text-sky-300">
                    {item.subtitle}
                  </p>
                </div>
              </div>
              <p className="mt-4 max-w-4xl leading-7 text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Education;
