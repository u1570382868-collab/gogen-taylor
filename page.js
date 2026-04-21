'use client';

import { Suspense, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import EngineCard from '@/components/EngineCard';
import Icon from '@/components/Icon';
import Button from '@/components/Button';
import SearchBar from '@/components/SearchBar';
import WhatsAppButton from '@/components/WhatsAppButton';
import { search } from '@/lib/search';
import { engines } from '@/data/engines';
import { parts } from '@/data/parts';

function SearchContent() {
  const sp = useSearchParams();
  const initialQ = sp.get('q') || '';
  const [q, setQ] = useState(initialQ);

  const results = useMemo(() => (initialQ ? search(initialQ) : null), [initialQ]);

  return (
    <>
      <div className="container-gt">
        <Breadcrumb items={[{ label: 'Inicio', href: '/' }, { label: 'Búsqueda' }]} />
      </div>

      <section className="bg-surface-secondary py-10 md:py-14">
        <div className="container-gt max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="gt-redline" />
            <p className="text-eyebrow uppercase text-red-600">Búsqueda</p>
          </div>
          <h1 className="text-display-md font-display text-ink-800 uppercase mb-6">
            {initialQ ? `Resultados para "${initialQ}"` : 'Busca en el catálogo'}
          </h1>
          <SearchBar variant="hero" autoFocus={!initialQ} />
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container-gt">
          {!initialQ ? (
            <div className="max-w-2xl">
              <p className="text-body-lg text-ink-500 mb-6">
                Teclea el nombre de la pieza, el modelo de motor o una referencia OEM. Puedes usar
                el atajo <span className="font-mono text-mono-sm px-2 py-0.5 bg-ink-50 rounded-xs">/</span>{' '}
                desde cualquier página para enfocar el buscador.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Inyectores',
                  'Bombas de inyección',
                  'Turbos',
                  'Pistones',
                  'Juntas',
                  'Filtros',
                ].map((term) => (
                  <Link
                    key={term}
                    href={`/buscar/?q=${encodeURIComponent(term)}`}
                    className="flex items-center justify-between p-4 bg-white rounded-sm border border-ink-100 hover:border-ink-800 hover:shadow-sm transition-all"
                  >
                    <span className="text-body text-ink-800">{term}</span>
                    <Icon name="arrowRight" className="w-4 h-4 text-ink-400" />
                  </Link>
                ))}
              </div>
            </div>
          ) : results &&
            results.engines.length === 0 &&
            results.parts.length === 0 &&
            results.subcategories.length === 0 ? (
            <div className="max-w-2xl text-center py-12">
              <Icon name="search" className="w-12 h-12 mx-auto mb-4 text-ink-300" />
              <h2 className="text-h3 font-display text-ink-800 mb-3">
                Sin resultados para &quot;{initialQ}&quot;
              </h2>
              <p className="text-body text-ink-500 mb-6">
                No hemos encontrado coincidencias en el catálogo, pero podemos tener tu referencia.
                Pregúntanos directamente y te confirmamos disponibilidad.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <WhatsAppButton size="lg" />
                <Button href="/motores/" variant="secondary" size="lg">
                  Ver catálogo completo
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-12">
              {results.engines.length > 0 && (
                <div>
                  <h2 className="text-h2 font-display text-ink-800 uppercase mb-6">
                    Motores ({results.engines.length})
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                    {results.engines.map((e) => (
                      <EngineCard key={e.id} engine={e} />
                    ))}
                  </div>
                </div>
              )}

              {results.parts.length > 0 && (
                <div>
                  <h2 className="text-h2 font-display text-ink-800 uppercase mb-2">
                    Piezas ({results.parts.length})
                  </h2>
                  <p className="text-body-sm text-ink-500 mb-6">
                    Pincha en una pieza para elegir el motor y ver la ficha completa.
                  </p>
                  <div className="flex flex-col gap-2 max-w-3xl">
                    {results.parts.map((p) => (
                      <details
                        key={p.id}
                        className="group bg-white border border-ink-100 rounded-sm overflow-hidden"
                      >
                        <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-ink-50">
                          <div className="flex-1">
                            <div className="text-body font-semibold text-ink-800 mb-0.5">
                              {p.name}
                            </div>
                            <div className="text-body-sm text-ink-500">
                              {p.shortDescription}
                            </div>
                          </div>
                          <Icon
                            name="chevronDown"
                            className="w-5 h-5 text-ink-400 group-open:rotate-180 transition-transform flex-shrink-0"
                          />
                        </summary>
                        <div className="px-5 pb-5 pt-2 border-t border-ink-100">
                          <p className="text-body-sm text-ink-500 mb-3">
                            Elige el motor para ver la ficha específica:
                          </p>
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                            {engines.slice(0, 12).map((e) => (
                              <Link
                                key={e.id}
                                href={`/producto/${e.id}/${p.id}/`}
                                className="px-3 py-2 rounded-xs bg-ink-50 hover:bg-ink-800 hover:text-white text-body-sm text-ink-700 transition-colors text-center"
                              >
                                {e.name}
                              </Link>
                            ))}
                          </div>
                          {engines.length > 12 && (
                            <Link
                              href="/motores/"
                              className="inline-flex items-center gap-1 mt-3 text-body-sm font-medium text-red-600 hover:underline"
                            >
                              Ver los {engines.length} motores
                              <Icon name="arrowRight" className="w-4 h-4" />
                            </Link>
                          )}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {results.subcategories.length > 0 && (
                <div>
                  <h2 className="text-h2 font-display text-ink-800 uppercase mb-6">
                    Sistemas mecánicos ({results.subcategories.length})
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {results.subcategories.map((s) => (
                      <div
                        key={s.id}
                        className="bg-white border border-ink-100 rounded-sm p-6"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <span className="w-10 h-10 flex items-center justify-center bg-ink-50 rounded-sm">
                            <Icon name={s.iconKey} className="w-5 h-5 text-ink-800" />
                          </span>
                          <h3 className="text-h5 font-sans text-ink-800">{s.name}</h3>
                        </div>
                        <p className="text-body-sm text-ink-500">{s.shortDescription}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function BuscarPage() {
  return (
    <Suspense
      fallback={
        <div className="container-gt py-20 text-center text-ink-500">Cargando búsqueda…</div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
