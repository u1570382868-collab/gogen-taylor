'use client';

import { useState, useEffect } from 'react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import Icon from './Icon';

export default function WhatsAppFAB() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const url = buildWhatsAppUrl();

  useEffect(() => {
    // Mostrar con leve retraso para no competir con el LCP
    const t = setTimeout(() => setMounted(true), 600);
    const onScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={`group fixed bottom-5 right-5 md:bottom-8 md:right-8 z-40 flex items-center justify-center rounded-full bg-whatsapp text-white shadow-lg hover:bg-whatsapp-hover hover:scale-105 active:scale-95 transition-all duration-base ease-out wa-pulse ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
      }`}
      style={{
        width: scrolled ? '56px' : '56px',
        height: '56px',
        transitionProperty: 'opacity, transform, background-color',
      }}
    >
      <Icon name="whatsapp" className="w-7 h-7" strokeWidth={0} />
      <span className="sr-only">Abrir WhatsApp</span>

      {/* Tooltip en desktop */}
      <span className="hidden md:block absolute right-full mr-3 px-3 py-1.5 bg-ink-800 text-white text-body-sm whitespace-nowrap rounded-sm opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-base shadow-md">
        Consultar por WhatsApp
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-ink-800 rotate-45" />
      </span>
    </a>
  );
}
