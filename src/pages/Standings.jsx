import React from "react";
import StandingsTable from "./StandingsTable";
import SectionTitle from "./SectionTitle";

export default function Standings() {
  return (
    <section id="sampleTool" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionTitle
        eyebrow="Sample Tool"
        title2="Live NHL Standings Dashboard."
        description="Live NHL standings powered by the NHL API, fetched and transformed in real-time to reflect current team performance."
      />
      <div>
        <h1>2025-2026 NHL Standings</h1>
        <p className="mt-2 text-sm text-zinc-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        <StandingsTable />
        <p className="mt-6 text-sm text-zinc-600">
          This tool demonstrates the ability to ingest live sports data, apply
          league-specific rules, and present it in a structured, user-friendly
          format.
        </p>
        <p className="mt-6 text-sm text-zinc-600">
          Pipeline: NHL API → data transformation → daily refresh → React
          dashboard
        </p>
      </div>
    </section>
  );
}
