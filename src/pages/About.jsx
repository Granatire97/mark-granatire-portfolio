import React from "react";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionTitle
        eyebrow="About"
        title2="A portfolio built to show the full picture."
        description="This site is designed to bring together my background in application development, graduate work in data science, and growing body of sports analytics projects in one clean experience."
      />

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-white/5 bg-zinc-950 p-8">
          <p className="text-lg leading-8 text-zinc-300">
            I’m focused on building a portfolio that shows both technical
            ability and domain-specific work. That includes analytics projects,
            machine learning research, interactive dashboards, and front-end
            presentation that feels polished and intentional.
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            My goal is to make it easy for recruiters, hiring managers, and
            sports organizations to quickly understand who I am, what I’ve
            built, and where I can add value.
          </p>
        </div>
        <div className="rounded-[2rem] border border-sky-300/20 bg-zinc-950 p-6 shadow-2xl shadow-sky-950/30">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-sm text-zinc-400">Featured Snapshot</span>
            <span className="rounded-full border border-sky-300/20 px-3 py-1 text-xs text-sky-200">
              2026 Portfolio
            </span>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/5 bg-black p-5">
              <p className="text-sm text-zinc-500">Focus</p>
              <p className="mt-2 text-lg font-semibold text-white">
                Sports Analytics + Data Science
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/5 bg-black p-5">
                <p className="text-sm text-zinc-500">Stack</p>
                <p className="mt-2 font-semibold text-white">
                  React, Python, SQL
                </p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-black p-5">
                <p className="text-sm text-zinc-500">Style</p>
                <p className="mt-2 font-semibold text-white">
                  Clean + Professional
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-sky-500/20 bg-sky-500/10 p-5">
              <p className="text-sm text-sky-500">Goal</p>
              <p className="mt-2 text-white">
                Showcase technical depth, hockey domain knowledge, and polished
                presentation in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
