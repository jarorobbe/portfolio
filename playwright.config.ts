import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  reporter: "list",
  workers: 1,
  webServer: [
    {
      command: "npm run dev -- --host 127.0.0.1 --port 4322 --ignore-lock",
      url: "http://127.0.0.1:4322",
      reuseExistingServer: true,
      timeout: 30_000,
    },
    {
      command: "lightpanda serve --host 127.0.0.1 --port 9223",
      url: "http://127.0.0.1:9223/json/version",
      reuseExistingServer: true,
      timeout: 30_000,
    },
  ],
});
