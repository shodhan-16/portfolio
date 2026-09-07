import { useEffect, useRef, useState } from 'react';

/**
 * Tracks the section currently in view using IntersectionObserver.
 * Returns the active section id.
 */
export function useActiveSection(ids: readonly string[], offset = 0.35) {
  const [active, setActive] = useState(ids[0] ?? '');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibleMap = new Map<string, number>();

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            visibleMap.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
          });
          let bestId = ids[0];
          let bestRatio = 0;
          visibleMap.forEach((ratio, sid) => {
            if (ratio > bestRatio) {
              bestRatio = ratio;
              bestId = sid;
            }
          });
          if (bestRatio > 0) setActive(bestId);
        },
        { threshold: [0, offset, 0.5, 0.75, 1], rootMargin: '-10% 0px -10% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids, offset]);

  return active;
}

/** Smooth-scrolls to a section id. */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/** Returns scroll progress 0–1 and the current active section index. */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return progress;
}

/** Returns mouse position relative to viewport, throttled via rAF. */
export function useMousePosition() {
  const pos = useRef({ x: -100, y: -100 });
  const [, setTick] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        pos.current = { x: e.clientX, y: e.clientY };
        setTick((t) => (t + 1) % 1000);
      });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return pos.current;
}

/** Prefers-reduced-motion check. */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
}
