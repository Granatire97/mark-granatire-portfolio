import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const nhlProxy = {
  // Avoid browser CORS by proxying NHL requests through Vite.
  // Usage: fetch("/nhl/v1/standings/now")
  "/nhl": {
    target: "https://api-web.nhle.com",
    changeOrigin: true,
    // The upstream endpoint responds with redirects (e.g. /v1/standings/now -> /v1/standings/{date}).
    // If the redirect is passed back to the browser, the browser will follow it cross-origin and hit CORS.
    // Having the proxy follow redirects keeps the browser on your origin.
    followRedirects: true,
    // Keep the path after /nhl (e.g. /nhl/v1/... -> /v1/...)
    rewrite: (path) => path.replace(/^\/nhl/, ""),
  },
};

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: nhlProxy,
  },
  preview: {
    proxy: nhlProxy,
  },
});
