import { chromium, expect, test } from "@playwright/test";

test("home page introduces the portfolio", async () => {
  const browser = await chromium.connectOverCDP("ws://127.0.0.1:9223");

  try {
    const context = await browser.newContext();
    try {
      const page = await context.newPage();
      const response = await page.goto("http://127.0.0.1:4322/");

      expect(response?.status()).toBe(200);
      await expect(page).toHaveTitle("Jaro Robberechts");
      await expect(page.getByRole("heading", { level: 1 })).toHaveText("Jaro Robberechts");
      await expect(page.getByText("Portfolio coming soon.")).toBeVisible();
    } finally {
      await context.close();
    }
  } finally {
    await browser.close();
  }
});
