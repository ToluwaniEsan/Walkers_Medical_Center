// Photo slots for the site. Every slot starts as `null` and renders a
// placeholder. To add a real photo, drop the file in this folder and import it:
//
//   import hero from './home-hero.jpg';
//   ...
//   'home-hero': hero,
//
// Real WMC photos only. No identifiable patients without written consent.
import type { ImageMetadata } from 'astro';

export const photos = {
  'home-hero': null,
  'home-outreach': null,
  'about-who-we-are': null,
  'about-gallery-1': null,
  'about-gallery-2': null,
  'about-gallery-3': null,
  'about-gallery-4': null,
  'about-gallery-5': null,
  'about-gallery-6': null,
  'services-featured': null,
  'lab-header': null,
  'outreach-gallery-1': null,
  'outreach-gallery-2': null,
  'outreach-gallery-3': null,
  'outreach-gallery-4': null,
  'outreach-gallery-5': null,
  'outreach-gallery-6': null,
  'contact-map': null,
} satisfies Record<string, ImageMetadata | null>;

export type PhotoSlot = keyof typeof photos;
