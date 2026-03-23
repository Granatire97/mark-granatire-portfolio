import React from "react";

function SectionTitle({ eyebrow, title, title2, description }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      <h2 className="text-3xl font-bold tracking-tight text-black md:text-4xl">
        {title2}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-zinc-400">{description}</p>
      )}
    </div>
  );
}

export default SectionTitle;
