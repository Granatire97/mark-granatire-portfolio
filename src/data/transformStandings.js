export function transformStandings(data) {
  return (data?.standings ?? []).map((t) => ({
    teamName: t?.teamName?.default ?? t?.teamCommonName?.default ?? "",
    GP: t?.gamesPlayed ?? 0,
    W: t?.wins ?? 0,
    L: t?.losses ?? 0,
    OTL: t?.otLosses ?? 0,
    PTS: t?.points ?? 0,
    Percentage: t?.pointPctg != null ? Number(t.pointPctg).toFixed(3) : "",
    GD: t?.goalDifferential ?? 0,
    Clinched: t?.clinchIndicator,
  }));
}
