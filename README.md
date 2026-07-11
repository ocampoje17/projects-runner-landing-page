# Projects Runner Landing Page

Landing page for **Projects Runner**, with full Vietnamese and English copy plus a direct release-page download flow.

- Stack: Vite + React + TypeScript + Tailwind CSS v4
- i18n: `i18next`, `react-i18next`, `i18next-browser-languagedetector`
- Domain: [projects-runner.laychu.com](https://projects-runner.laychu.com)
- App repo: [ocampoje17/projects-runner-app](https://github.com/ocampoje17/projects-runner-app)

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

## GitHub Pages

- Workflow: `.github/workflows/deploy.yml`
- Custom domain: `projects-runner.laychu.com` via `public/CNAME`
- After first deploy, set DNS `CNAME` for `projects-runner.laychu.com` to `ocampoje17.github.io`
