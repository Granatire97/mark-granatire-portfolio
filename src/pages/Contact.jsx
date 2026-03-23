import React from "react";
import SectionTitle from "./SectionTitle";

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="rounded-[2rem] border border-sky-300/20 bg-black from-sky-300/10 via-zinc-950 to-black p-8 md:p-12">
        <SectionTitle eyebrow="Contact" title="Let’s build something strong." />

        <div className="grid gap-4 md:grid-cols-3">
          <a
            href="mailto:markgranatire@gmail.com"
            className="rounded-2xl border border-white/10 bg-black/40 p-5 transition hover:border-sky-300/30"
          >
            <p className="text-sm text-zinc-500">Email</p>
            <p className="mt-2 font-medium text-white">
              markgranatire@gmail.com
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/mark-granatire-jr/"
            className="rounded-2xl border border-white/10 bg-black/40 p-5 transition hover:border-sky-300/30"
          >
            <p className="text-sm text-zinc-500">LinkedIn</p>
            <p className="mt-2 font-medium text-white">
              linkedin.com/in/mark-granatire-jr/
            </p>
          </a>
          <a
            href="https://github.com/Granatire97"
            className="rounded-2xl border border-white/10 bg-black/40 p-5 transition hover:border-sky-300/30"
          >
            <p className="text-sm text-zinc-500">GitHub</p>
            <p className="mt-2 font-medium text-white">
              github.com/Granatire97
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
export default Contact;
