'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon';
import SearchBar from './SearchBar';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { company } from '@/data/config';
import { families } from '@/data/families';
import { engines } from '@/data/engines';
import { subcategories } from '@/data/subcategories';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'engines' | 'systems' | null
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Esc cierra drawer y dropdowns
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Cierra dropdowns al clicar fuera
  useEffect(() => {
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const whatsapp = buildWhatsAppUrl();

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-ink-100 transition-all duration-base ${
          scrolled ? 'shadow-sm' : ''
        }`}
        ref={navRef}
      >
        <div className="container-gt flex items-center justify-between h-14 md:h-[72px] gap-3">
          {/* Left: logo + mobile menu */}
          <div className="flex items-center gap-2 md:gap-3">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menú de navegación"
              aria-expanded={mobileOpen}
              className="xl:hidden w-10 h-10 flex items-center justify-center rounded-sm hover:bg-ink-50 active:bg-ink-100 transition-colors"
            >
              <Icon name="menu" className="w-6 h-6 text-ink-800" />
            </button>

            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label="GOGEN-TAYLOR - Inicio"
            >
              <Image
                src="/logo.jpg"
                alt=""
                width={48}
                height={48}
                className="h-9 w-9 md:h-10 md:w-10 rounded-sm transition-transform duration-base group-hover:scale-105"
                priority
              />
              <span className="hidden md:flex flex-col leading-none">
                <span className="text-h5 font-display uppercase tracking-tight text-ink-900">
                  GOGEN-TAYLOR
                </span>
                <span className="text-caption uppercase text-ink-400">
                  OEM &amp; Industrial Parts
                </span>
              </span>
            </Link>
          </div>

          {/* Center: desktop nav */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="Navegación principal">
            {/* Motores dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('engines')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                onClick={() =>
                  setActiveDropdown(activeDropdown === 'engines' ? null : 'engines')
                }
                aria-expanded={activeDropdown === 'engines'}
                aria-haspopup="true"
                className={`flex items-center gap-1 h-10 px-3 rounded-sm text-body font-medium transition-colors ${
                  activeDropdown === 'engines'
                    ? 'bg-ink-50 text-ink-900'
                    : 'text-ink-700 hover:bg-ink-50'
                }`}
              >
                Motores
                <Icon
                  name="chevronDown"
                  className={`w-4 h-4 transition-transform duration-base ${
                    activeDropdown === 'engines' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeDropdown === 'engines' && (
                <div
                  className="absolute top-full left-0 mt-1 bg-white border border-ink-100 rounded-sm shadow-lg grid grid-cols-3 gap-6 p-6 animate-fade-in-up"
                  style={{ width: '860px' }}
                >
                  {families.map((family) => {
                    const famEngines = engines.filter((e) => e.familyId === family.id);
                    return (
                      <div key={family.id}>
                        <p className="text-eyebrow uppercase text-red-600 mb-3">
                          {family.shortName}
                          <span className="ml-2 font-mono text-ink-400 normal-case tracking-normal">
                            {famEngines.length}
                          </span>
                        </p>
                        <ul className="flex flex-col gap-0.5">
                          {famEngines.map((e) => (
                            <li key={e.id}>
                              <Link
                                href={`/motores/${e.id}/`}
                                onClick={() => setActiveDropdown(null)}
                                className="block px-2 py-1.5 text-body-sm text-ink-700 hover:text-red-600 hover:bg-ink-50 rounded-sm transition-colors"
                              >
                                {e.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Sistemas dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('systems')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                onClick={() =>
                  setActiveDropdown(activeDropdown === 'systems' ? null : 'systems')
                }
                aria-expanded={activeDropdown === 'systems'}
                aria-haspopup="true"
                className={`flex items-center gap-1 h-10 px-3 rounded-sm text-body font-medium transition-colors ${
                  activeDropdown === 'systems'
                    ? 'bg-ink-50 text-ink-900'
                    : 'text-ink-700 hover:bg-ink-50'
                }`}
              >
                Sistemas
                <Icon
                  name="chevronDown"
                  className={`w-4 h-4 transition-transform duration-base ${
                    activeDropdown === 'systems' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeDropdown === 'systems' && (
                <div
                  className="absolute top-full left-0 mt-1 bg-white border border-ink-100 rounded-sm shadow-lg p-3 grid grid-cols-1 gap-0.5 animate-fade-in-up"
                  style={{ width: '340px' }}
                >
                  {subcategories.map((s) => (
                    <Link
                      key={s.id}
                      href="/motores/"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center gap-3 px-3 py-2 rounded-sm hover:bg-ink-50 group transition-colors"
                    >
                      <span className="w-9 h-9 flex items-center justify-center bg-ink-50 rounded-sm text-ink-800 group-hover:bg-red-600 group-hover:text-white transition-colors">
                        <Icon name={s.iconKey} className="w-5 h-5" />
                      </span>
                      <span className="flex-1">
                        <span className="block text-body-sm text-ink-800 group-hover:text-red-600 transition-colors">
                          {s.name}
                        </span>
                      </span>
                      <Icon
                        name="chevronRight"
                        className="w-4 h-4 text-ink-300 group-hover:text-red-600 group-hover:translate-x-0.5 transition-all"
                      />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/resenas/"
              className="h-10 px-3 flex items-center rounded-sm text-body font-medium text-ink-700 hover:bg-ink-50 transition-colors"
            >
              Reseñas
            </Link>
            <Link
              href="/contacto/"
              className="h-10 px-3 flex items-center rounded-sm text-body font-medium text-ink-700 hover:bg-ink-50 transition-colors"
            >
              Contacto
            </Link>
          </nav>

          {/* Right: search + WA */}
          <div className="flex items-center gap-1.5 md:gap-2">
            <div className="hidden md:block">
              <SearchBar variant="compact" />
            </div>
            <Link
              href="/buscar/"
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-sm hover:bg-ink-50 active:bg-ink-100 transition-colors"
              aria-label="Buscar"
            >
              <Icon name="search" className="w-5 h-5 text-ink-700" />
            </Link>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              className="w-10 h-10 flex items-center justify-center rounded-sm bg-whatsapp text-white hover:bg-whatsapp-hover active:scale-95 transition-all duration-base shadow-sm"
            >
              <Icon name="whatsapp" className="w-5 h-5" strokeWidth={0} />
            </a>
          </div>
        </div>

        {/* Línea roja decorativa inspirada en el logo */}
        <div
          className={`h-0.5 bg-red-600 transition-all duration-slow ease-out ${
            scrolled ? 'opacity-100' : 'opacity-90'
          }`}
        />
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 xl:hidden" role="dialog" aria-modal="true" aria-label="Menú de navegación">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in-up"
            style={{ animationDuration: '200ms' }}
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div
            className="absolute left-0 top-0 bottom-0 w-[88%] max-w-sm bg-white flex flex-col overflow-y-auto shadow-xl"
            style={{ animation: 'slideInLeft 280ms cubic-bezier(0.2, 0.8, 0.2, 1)' }}
          >
            <div className="flex items-center justify-between h-14 px-4 border-b border-ink-100 sticky top-0 bg-white z-10">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2"
              >
                <Image
                  src="/logo.jpg"
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-sm"
                />
                <span className="text-h5 font-display uppercase text-ink-900">
                  GOGEN-TAYLOR
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Cerrar menú"
                className="w-10 h-10 flex items-center justify-center rounded-sm hover:bg-ink-50 active:bg-ink-100 transition-colors"
              >
                <Icon name="close" className="w-6 h-6 text-ink-800" />
              </button>
            </div>

            <nav className="flex-1 px-2 py-4" aria-label="Navegación móvil">
              <Link
                href="/motores/"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 text-body font-medium text-ink-800 hover:bg-ink-50 rounded-sm transition-colors"
              >
                Todos los motores
              </Link>

              {families.map((family) => {
                const famEngines = engines.filter((e) => e.familyId === family.id);
                return (
                  <details key={family.id} className="group border-t border-ink-100 mt-1 pt-1">
                    <summary className="flex items-center justify-between cursor-pointer px-3 py-3 rounded-sm hover:bg-ink-50 list-none">
                      <span className="text-body font-medium text-ink-800">
                        {family.shortName}
                        <span className="ml-2 text-caption text-ink-400">
                          {famEngines.length}
                        </span>
                      </span>
                      <Icon
                        name="chevronDown"
                        className="w-4 h-4 text-ink-400 group-open:rotate-180 transition-transform duration-base"
                      />
                    </summary>
                    <ul className="pl-3 pb-2">
                      {famEngines.map((e) => (
                        <li key={e.id}>
                          <Link
                            href={`/motores/${e.id}/`}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 text-body-sm text-ink-600 hover:text-red-600 transition-colors"
                          >
                            {e.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                );
              })}

              <div className="border-t border-ink-100 mt-4 pt-2">
                <Link
                  href="/resenas/"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-3 text-body font-medium text-ink-800 hover:bg-ink-50 rounded-sm transition-colors"
                >
                  Reseñas
                </Link>
                <Link
                  href="/contacto/"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-3 text-body font-medium text-ink-800 hover:bg-ink-50 rounded-sm transition-colors"
                >
                  Contacto
                </Link>
              </div>
            </nav>

            <div className="p-4 border-t border-ink-100 bg-ink-50">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 h-12 w-full rounded-sm bg-whatsapp text-white font-medium hover:bg-whatsapp-hover active:scale-[0.98] transition-all shadow-sm"
              >
                <Icon name="whatsapp" className="w-5 h-5" strokeWidth={0} />
                WhatsApp directo
              </a>
              <a
                href={`tel:${company.phoneTel}`}
                className="flex items-center justify-center gap-2 h-12 w-full mt-2 rounded-sm border border-ink-800 text-ink-800 font-medium hover:bg-ink-800 hover:text-white transition-colors"
              >
                <Icon name="phone" className="w-4 h-4" />
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0.6;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
