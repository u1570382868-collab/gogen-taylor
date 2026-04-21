'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Icon from './Icon';
import { search } from '@/lib/search';

export default function SearchBar({ variant = 'compact', autoFocus = false }) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  useEffect(() => {
    const handler = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    const keyHandler = (e) => {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        setOpen(false);
        inputRef.current?.blur();
      }
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, []);

  const handleChange = (e) => {
    const v = e.target.value;
    setQuery(v);
    if (v.length >= 2) {
      setResults(search(v));
      setOpen(true);
    } else {
      setResults(null);
      setOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim().length >= 2) {
      router.push(`/buscar/?q=${encodeURIComponent(query.trim())}`);
      setOpen(false);
    }
  };

  const isHero = variant === 'hero';
  const inputHeightCls = isHero ? 'h-14 text-body-lg' : 'h-10 text-body-sm';
  const iconSize = isHero ? 'w-5 h-5' : 'w-4 h-4';

  return (
    <div ref={wrapperRef} className={`relative w-full ${isHero ? 'max-w-2xl' : 'max-w-sm'}`}>
      <form onSubmit={handleSubmit} className="flex">
        <div className="relative flex-1">
          <Icon
            name="search"
            className={`absolute left-3 top-1/2 -translate-y-1/2 text-ink-400 ${iconSize}`}
          />
          <input
            ref={inputRef}
            type="search"
            placeholder={
              isHero
                ? 'Busca por referencia OEM, pieza o motor…'
                : 'Buscar pieza o motor…'
            }
            value={query}
            onChange={handleChange}
            onFocus={() => results && setOpen(true)}
            className={`w-full ${inputHeightCls} pl-10 pr-4 bg-white border border-ink-200 rounded-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-ink-800 focus:shadow-inner transition-colors ${
              isHero ? 'rounded-r-none border-r-0' : ''
            }`}
            aria-label="Buscar"
            autoComplete="off"
          />
        </div>

        {isHero && (
          <button
            type="submit"
            className="h-14 px-6 rounded-sm rounded-l-none bg-red-600 text-white font-medium hover:bg-red-700 transition-colors"
          >
            Buscar
          </button>
        )}
      </form>

      {/* Dropdown resultados */}
      {open && results && (
        <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-ink-200 rounded-sm shadow-lg max-h-96 overflow-auto z-40">
          {results.engines.length === 0 &&
          results.parts.length === 0 &&
          results.subcategories.length === 0 ? (
            <div className="p-4 text-body-sm text-ink-400">
              Sin resultados para &quot;{query}&quot;. Pulsa Enter para buscar en todo el catálogo.
            </div>
          ) : (
            <>
              {results.engines.length > 0 && (
                <div className="p-2">
                  <p className="text-eyebrow uppercase text-ink-400 px-3 py-2">Motores</p>
                  {results.engines.slice(0, 4).map((e) => (
                    <Link
                      key={e.id}
                      href={`/motores/${e.id}/`}
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2 rounded-sm hover:bg-ink-50"
                    >
                      <div className="text-body-sm font-medium text-ink-800">{e.name}</div>
                      <div className="text-caption text-ink-400 uppercase">
                        {e.cylinders.count} cil · {e.displacement}
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {results.parts.length > 0 && (
                <div className="p-2 border-t border-ink-100">
                  <p className="text-eyebrow uppercase text-ink-400 px-3 py-2">Piezas</p>
                  {results.parts.slice(0, 4).map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        router.push(`/buscar/?q=${encodeURIComponent(p.name)}`);
                        setOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 rounded-sm hover:bg-ink-50"
                    >
                      <div className="text-body-sm font-medium text-ink-800">{p.name}</div>
                      <div className="text-caption text-ink-400">{p.shortDescription}</div>
                    </button>
                  ))}
                </div>
              )}

              {results.subcategories.length > 0 && (
                <div className="p-2 border-t border-ink-100">
                  <p className="text-eyebrow uppercase text-ink-400 px-3 py-2">Sistemas</p>
                  {results.subcategories.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        router.push(`/buscar/?q=${encodeURIComponent(s.name)}`);
                        setOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 rounded-sm hover:bg-ink-50 text-body-sm text-ink-800"
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                className="block w-full text-center py-3 border-t border-ink-100 bg-ink-50 text-body-sm font-medium text-ink-800 hover:bg-ink-100 transition-colors"
              >
                Ver todos los resultados →
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
