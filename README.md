# Walkers Medical Center website

Public website for Walkers Medical Center & Orthopaedic Specialist Hospital, Ile-Ife. Built with [Astro](https://astro.build) as a static site, for deployment on Vercel.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Where things live

- `src/data/site.ts`: all hospital content (contact details, services, units, lab tests). Edit copy here.
- `src/styles/global.css`: design tokens and styles.
- `src/pages/`: one file per page.
- `src/assets/photos/`: photo slots. Each slot shows a placeholder until a real photo is registered in `index.ts`.

Anything the hospital has not supplied yet is shown with a **Content needed** marker. Replace it with real content rather than made-up copy.

## Hosting on GitHub Pages

`.github/workflows/deploy-pages.yml` builds the site and publishes it on every push to `main`. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**. The workflow passes the Pages address to the build, so links work under `/Walkers_Medical_Center/`. Internal links use `url()` from `src/lib/url.ts` for this reason.

## Contact form

The message form on the Contact page sends through [FormSubmit](https://formsubmit.co) to the address in `site.form` (`src/data/site.ts`). The first message ever sent triggers a one-time "Activate form" email to that inbox; messages only arrive after someone clicks it. To send to a different inbox, change both URLs in `site.form`.
