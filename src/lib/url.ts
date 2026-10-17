// Prefixes a site path with the configured base, so links keep working when
// the site is served from a sub-folder (e.g. GitHub Pages project sites).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path: string) => `${base}${path}`;
