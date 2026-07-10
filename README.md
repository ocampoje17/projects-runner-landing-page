# Projects Runner Landing Page

Marketing site for **Projects Runner**, a desktop command launcher for developers.

- Stack: Vite + React + TypeScript + Tailwind CSS v4
- Motion UI: [beUI v2](https://github.com/starc007/ui-components)
- Domain: [projects-runner.laychu.com](https://projects-runner.laychu.com)
- Repo: [ocampoje17/projects-runner-landing-page](https://github.com/ocampoje17/projects-runner-landing-page)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## beUI components used

Installed from the beUI registry (`https://beui.dev/r/{name}.json`):

- `button-base`, `button-stateful`, `button-magnetic`
- `animated-badge`, `animated-toast-stack`
- `tabs`, `tilt-card`, `marquee`
- `text-reveal`, `text-shimmer`, `number-ticker`
- `scroll-reveal`, `shared-layout-bg`, `theme-toggle`, `tooltip`

## GitHub Pages

- Workflow: `.github/workflows/deploy.yml`
- Custom domain: `projects-runner.laychu.com` via `public/CNAME`
- After first deploy, set DNS `CNAME` for `projects-runner.laychu.com` to `ocampoje17.github.io`
