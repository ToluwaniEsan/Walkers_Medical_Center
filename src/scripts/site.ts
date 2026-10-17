const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Header turns to frosted glass once the page scrolls.
const header = document.querySelector<HTMLElement>('[data-header]');
const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Light/dark toggle. Follows the device setting until the visitor picks one.
const root = document.documentElement;
const themeToggle = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
const applyTheme = (dark: boolean) => {
  root.classList.toggle('is-dark', dark);
  themeToggle?.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0E1420' : '#064CA4');
};
applyTheme(root.classList.contains('is-dark'));
themeToggle?.addEventListener('click', () => {
  const dark = !root.classList.contains('is-dark');
  const swap = () => {
    root.dataset.theme = dark ? 'dark' : 'light';
    applyTheme(dark);
  };
  try {
    localStorage.setItem('wmc-theme', dark ? 'dark' : 'light');
  } catch {}
  // Brief cross-fade between themes where supported.
  if (!reduceMotion && document.startViewTransition) document.startViewTransition(swap);
  else swap();
});
darkQuery.addEventListener('change', (e) => {
  if (!root.dataset.theme) applyTheme(e.matches);
});

// Mobile menu.
const toggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]');
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  document.body.classList.toggle('nav-open', open);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
    toggle?.click();
    toggle?.focus();
  }
});

// Fade-and-rise as sections scroll into view. Cards in the same grid follow
// one another; once shown, the element drops back to its normal transitions.
const revealables = document.querySelectorAll<HTMLElement>('[data-reveal]');
if (reduceMotion || !('IntersectionObserver' in window)) {
  revealables.forEach((el) => el.classList.add('is-visible'));
} else {
  revealables.forEach((el) => {
    const siblings = el.parentElement ? [...el.parentElement.children].filter((c) => c.hasAttribute('data-reveal')) : [];
    const i = siblings.indexOf(el);
    if (i > 0) el.style.transitionDelay = `${Math.min(i, 5) * 80}ms`;
    el.addEventListener('transitionend', function done(e) {
      if (e.target !== el || e.propertyName !== 'opacity') return;
      el.style.transitionDelay = '';
      el.removeAttribute('data-reveal');
      el.classList.remove('is-visible');
      el.removeEventListener('transitionend', done);
    });
  });
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px' },
  );
  revealables.forEach((el) => io.observe(el));
}

// Material-style ripple on buttons.
if (!reduceMotion) {
  document.addEventListener('pointerdown', (e) => {
    const target = (e.target as HTMLElement).closest<HTMLElement>('.btn, .call-fab');
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    target.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  });
}

// Hide the floating call button once the footer (which has the number) is on screen.
const fab = document.querySelector<HTMLElement>('.call-fab');
const footer = document.querySelector('.site-footer');
if (fab && footer && 'IntersectionObserver' in window) {
  new IntersectionObserver(([entry]) => fab.classList.toggle('is-hidden', entry.isIntersecting)).observe(footer);
}

// Cards lean away from the pointer, as if it were pressing on them, with a soft
// light following it. Mouse: on hover. Touch: while the finger is down, then the
// card springs back. Larger cards tilt less so they never feel wobbly.
if (!reduceMotion) {
  const cards = document.querySelectorAll<HTMLElement>('.card:not(.lab-panel)');
  cards.forEach((card) => {
    card.classList.add('tilt');
    const press = (e: PointerEvent) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      const max = Math.min(8, 2400 / r.width);
      card.style.transition = 'transform 0.12s ease-out, box-shadow 0.25s, border-color 0.25s';
      card.style.transform = `perspective(900px) rotateX(${((0.5 - y) * 2 * max).toFixed(2)}deg) rotateY(${((x - 0.5) * 2 * max).toFixed(2)}deg) scale(0.985)`;
      card.style.setProperty('--gx', `${(x * 100).toFixed(1)}%`);
      card.style.setProperty('--gy', `${(y * 100).toFixed(1)}%`);
      card.classList.add('is-tilting');
    };
    const release = () => {
      card.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.7, 0.2, 1), box-shadow 0.25s, border-color 0.25s';
      card.style.transform = '';
      card.classList.remove('is-tilting');
    };
    card.addEventListener('pointermove', (e) => {
      if (e.pointerType === 'mouse') press(e);
    });
    card.addEventListener('pointerleave', release);
    card.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'mouse') press(e);
    });
    card.addEventListener('pointerup', (e) => {
      if (e.pointerType !== 'mouse') release();
    });
    // A touch that turns into a scroll is cancelled; spring back then too.
    card.addEventListener('pointercancel', release);
  });
}
