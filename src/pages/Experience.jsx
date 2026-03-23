import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const experiences = [
  {
    title: "Software Developer (Appian)",
    subtitle: "Current Role",
    description:
      "Rapidly onboarded to the Appian low-code platform, earning certification while building transferable skills in workflow automation, application development, and scalable enterprise solutions.",
  },
  {
    title: "Senior Software Developer (srcLogic)",
    subtitle: "Previous Role",
    description:
      "Developed and enhanced enterprise Pega applications for federal clients, delivering automated workflows, data-driven reporting, and scalable backend solutions while collaborating across agile teams and mentoring junior developers.",
  },
  {
    title: "Software Engineer Intern (DICK'S Sporting Goods)",
    subtitle: "Internship",
    description:
      "Built full-stack applications using Java and Angular, including an SMS alerting system and internal inventory search tool, improving developer visibility and operational efficiency.",
  },
];

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionTitle
        eyebrow="Experience"
        title2="A quick snapshot of background and direction."
      />

      <div className="space-y-5">
        {experiences.map((item) => (
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
    </section>
  );
}
export default Experience;
