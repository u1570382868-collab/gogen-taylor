'use client';

import { useEffect } from 'react';

/**
 * Activa animaciones sobre elementos con la clase `.reveal` cuando entran en viewport.
 * Usa IntersectionObserver - muy ligero. No añade JS si reduced-motion está activo.
 */
export default function RevealOnScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );

    const nodes = document.querySelectorAll('.reveal');
    nodes.forEach((n) => observer.observe(n));

    // Soporte para elementos añadidos dinámicamente (autocompletar, tabs, etc.)
    const mutationObs = new MutationObserver(() => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
        observer.observe(el);
      });
    });
    mutationObs.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObs.disconnect();
    };
  }, []);

  return null;
}
