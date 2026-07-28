# Rimehand Web Contributor Instructions

## Project intent

This repository contains the single-page Rimehand product site. Keep it brief,
fast, accessible, and primarily static. Avalanche is the open-source chess
engine beneath the broader “One robot. Any game.” direction.

## Package management

- Use pnpm exclusively. Do not run npm, npx, Yarn, or Bun.
- Keep `pnpm-lock.yaml` committed and synchronized with `package.json`.
- Do not introduce another package-manager lockfile.
- Add dependencies only when they provide clear value that cannot be achieved
  cleanly with the existing Astro and browser platform features.

## Architecture

- Prefer Astro components and server-rendered HTML.
- Do not add client-side JavaScript or framework islands without a concrete
  interaction that requires them.
- Keep the one-page implementation in `src/pages/index.astro` until multiple
  routes or genuine reuse justify extracting components.
- Keep global styling and Tailwind theme tokens in `src/styles/global.css`.
- Use semantic HTML, visible focus states, sufficient contrast, and decorative
  icons with `aria-hidden="true"`.

## Visual and content conventions

- Preserve the light white, gray, and blue palette.
- Edit semantic theme tokens instead of scattering new brand colors.
- Use `public/favicon.png` for favicon-scale placements,
  `public/rimehand-mark.png` for larger artwork, and
  `public/Absans-Regular.otf` as the primary font.
- Prefer canonical Tailwind utilities over arbitrary values when an exact
  canonical class exists.
- Keep Rimehand claims exploratory; do not imply the generalist robot is already
  complete.
- Keep Avalanche links pointed at
  `https://github.com/SnowballSH/Avalanche`.
- Keep the public contact address as `yinuo@snowballsh.com`.
- Do not reintroduce status pills, external-arrow glyphs, or ambiguous labels.

## Development server

When starting the development server, use Astro background mode through pnpm:

```sh
pnpm astro dev --background
```

Manage it with:

```sh
pnpm astro dev status
pnpm astro dev logs
pnpm astro dev stop
```

## Quality requirements

- Run `pnpm format` after editing supported files.
- Run `pnpm ci` before finishing any implementation task.
- Do not suppress ESLint or formatting failures without documenting a concrete
  technical reason.
- Treat warnings as failures.
- Preserve the pnpm-only GitHub Actions workflows.

## Deployment

- Production is a static GitHub Pages site at
  `https://rimehand.snowballsh.com`.
- Keep `astro.config.mjs`, `public/CNAME`, and metadata URLs aligned.
- Do not add a GitHub Pages base path while the custom domain is in use.
- Pull requests must pass `.github/workflows/ci.yml`.
- Pushes to `main` are deployed by `.github/workflows/deploy.yml`.

## Astro documentation

Full documentation: https://docs.astro.build

Consult these guides before related changes:

- [Pages, dynamic routes, and middleware](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Framework components](https://docs.astro.build/en/guides/framework-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling and Tailwind](https://docs.astro.build/en/guides/styling/)
- [Internationalization](https://docs.astro.build/en/guides/internationalization/)
