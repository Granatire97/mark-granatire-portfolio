import React, { useEffect, useState } from "react";
import { getStandings } from "../services/nhlApi";
import { transformStandings } from "../data/transformStandings";

export default function StandingsTable() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const data = await getStandings();
        const mappedRows = transformStandings(data);
        setRows(mappedRows);
        console.log("standings data:", data);
        //setRows([]); // placeholder until you map the real fields
      } catch (e) {
        setError(e.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse text-left text-sm md:text-base">
        <thead className="border-b border-zinc-300 bg-zinc-100">
          <tr>
            <th className="px-3 py-2 font-semibold">Team</th>
            <th className="px-3 py-2 text-center font-semibold">Playoffs</th>
            <th className="px-3 py-2 text-right font-semibold">GP</th>
            <th className="px-3 py-2 text-right font-semibold">W</th>
            <th className="px-3 py-2 text-right font-semibold">L</th>
            <th className="px-3 py-2 text-right font-semibold">OTL</th>
            <th className="px-3 py-2 text-right font-semibold">PTS</th>
            <th className="px-3 py-2 text-right font-semibold">P%</th>
            <th className="px-3 py-2 text-right font-semibold">GD</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((t, index) => (
            <tr
              key={t.teamName}
              className={`border-b border-zinc-200 transition ${
                index < 3 ? "bg-sky-50 font-semibold" : "hover:bg-zinc-50"
              }`}
            >
              <td className="px-3 py-2">{t.teamName}</td>
              <td className="px-3 py-2 text-center tabular-nums">
                {t.Clinched}
              </td>
              <td className="px-3 py-2 text-right tabular-nums">{t.GP}</td>
              <td className="px-3 py-2 text-right tabular-nums">{t.W}</td>
              <td className="px-3 py-2 text-right tabular-nums">{t.L}</td>
              <td className="px-3 py-2 text-right tabular-nums">{t.OTL}</td>
              <td className="px-3 py-2 text-right tabular-nums">{t.PTS}</td>
              <td className="px-3 py-2 text-right tabular-nums">
                {t.Percentage ?? ""}
              </td>
              <td className="px-3 py-2 text-right tabular-nums">{t.GD}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
