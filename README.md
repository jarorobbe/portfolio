# portfolio

Astro portfolio for Jaro Robberechts, built as a static site for Vercel.

Tailwind CSS 4 is available through the Vite plugin and imported from `src/styles/global.css`.

## Develop

Requires Node.js 22.23.4 or newer.

```sh
npm ci
npm run dev
```

## Validate

```sh
npm run check
npm run build
npm run test:e2e
```

`npm run build` also checks types. Astro writes the static site to `dist/`.
The browser test uses Playwright with a local Lightpanda CDP server. Install
Lightpanda and make sure `lightpanda` is on your `PATH`; the test command starts
both Lightpanda and Astro automatically. No Chromium download is needed.

## Deploy

Import [jarorobbe/portfolio](https://github.com/jarorobbe/portfolio) into Vercel. Vercel detects Astro and uses `npm run build` with `dist/` as the output directory; no adapter or custom Vercel configuration is needed for this static site.
