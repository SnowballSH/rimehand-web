# Rimehand

> One robot. Any game.

Rimehand is an exploration into a generalist board-game-playing robot—one
system designed to see, reason, and play across the table.

[Avalanche](https://github.com/SnowballSH/Avalanche), our open-source chess
engine, is the first focused product under that broader ambition.

The landing page is configured to publish at
[rimehand.snowballsh.com](https://rimehand.snowballsh.com).

## Technology

- [Astro](https://astro.build) for static site generation
- [Tailwind CSS](https://tailwindcss.com) for styling
- TypeScript for project-level type checking
- GitHub Pages for hosting
- pnpm as the sole package manager

The site intentionally uses no client-side framework or JavaScript island.

## Development

Requirements:

- Node.js 22.22.3+, 24.16.0+, or 26.3.0+ on a supported release line
- pnpm 11.5.1

Install dependencies and start the development server:

```sh
pnpm install
pnpm dev
```

The local site is available at `http://localhost:4321` by default.

### Commands

| Command             | Purpose                                           |
| :------------------ | :------------------------------------------------ |
| `pnpm dev`          | Start the local Astro development server          |
| `pnpm build`        | Create the production build in `dist/`            |
| `pnpm preview`      | Preview the production build locally              |
| `pnpm lint`         | Run ESLint with warnings treated as errors        |
| `pnpm format`       | Format supported files with Prettier              |
| `pnpm format:check` | Verify formatting without changing files          |
| `pnpm typecheck`    | Check TypeScript and Astro templates              |
| `pnpm check`        | Run lint, formatting, and type checks             |
| `pnpm ci`           | Run every required check and the production build |

Run `pnpm ci` before opening a pull request.

## Project structure

```text
.
├── .github/workflows/   # Validation and GitHub Pages deployment
├── public/              # Font, favicon, social card, and custom-domain file
├── src/pages/           # Astro routes
├── src/styles/          # Tailwind entry point and theme tokens
├── astro.config.mjs     # Astro, Tailwind, and production-site configuration
└── package.json         # pnpm scripts and dependency versions
```

The configurable color and typography tokens live in
`src/styles/global.css`. The page content and metadata live in
`src/pages/index.astro`.

Astro template checks run in a small private workspace package pinned to
TypeScript 6, the latest version supported by Astro's checker. Project-level
TypeScript remains pinned to TypeScript 7.

## Deployment

Pushes to `main` are validated, built, and deployed through GitHub Actions.
Pull requests and non-`main` pushes run the same strict checks without
deploying.

The deployment expects GitHub Pages to use GitHub Actions as its source. The
custom domain is configured as `rimehand.snowballsh.com` through `public/CNAME`
and `astro.config.mjs`.

## Contact

Questions about Rimehand can be sent to
[yinuo@snowballsh.com](mailto:yinuo@snowballsh.com).
