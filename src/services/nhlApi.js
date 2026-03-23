export async function getStandings() {
  // Use the Vite dev-server proxy to avoid CORS issues in the browser.
  // The NHL endpoint `/v1/standings/now` redirects to `/v1/standings/{YYYY-MM-DD}`.
  // Redirects can cause the browser to follow cross-origin and then CORS fails,
  // so we call the date-based endpoint first (UTC).
  const directNowUrl = "https://api-web.nhle.com/v1/standings/now";
  const directDateBaseUrl = "https://api-web.nhle.com/v1/standings/";

  const proxyBaseUrl = "/nhl/v1/standings/";

  const utcToday = new Date().toISOString().slice(0, 10);
  const utcYesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

  const directUrlsToTry = [utcToday, utcYesterday].map(
    (d) => `${directDateBaseUrl}${d}`
  );
  directUrlsToTry.push(directNowUrl);

  const proxyUrlsToTry = [utcToday, utcYesterday].map(
    (d) => `${proxyBaseUrl}${d}`
  );
  proxyUrlsToTry.push("/nhl/v1/standings/now");

  const requestInit = {
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  };

  async function tryFetchMany(urls, label) {
    let lastErr;
    for (const url of urls) {
      try {
        const response = await fetch(url, requestInit);
        if (!response.ok) {
          const body = await response.text().catch(() => "");
          throw new Error(
            `${label} request failed: ${response.status} ${response.statusText}${
              body ? ` - ${body.slice(0, 200)}` : ""
            }`
          );
        }
        return response.json();
      } catch (err) {
        lastErr = err;
      }
    }
    throw lastErr ?? new Error(`${label} request failed`);
  }

  // 1) Try proxy first (should avoid CORS).
  try {
    return await tryFetchMany(proxyUrlsToTry, "Proxy");
  } catch (proxyErr) {
    // If the proxy can't reach upstream or isn't configured, try direct as a fallback.
    // (Direct may still be blocked by CORS, but this gives better error detail.)
    return await tryFetchMany(directUrlsToTry, "Direct");
  }
}
