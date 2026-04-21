import Link from 'next/link';
import { company } from '@/data/config';

/**
 * items: [{ label, href? }] — el último sin href.
 */
export default function Breadcrumb({ items = [] }) {
  if (!items.length) return null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: it.label,
      ...(it.href ? { item: `${company.siteUrl}${it.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="breadcrumb" className="py-3">
        <ol className="flex flex-wrap items-center gap-1 text-body-sm text-ink-400">
          {items.map((it, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={idx} className="flex items-center gap-1">
                {it.href && !isLast ? (
                  <Link
                    href={it.href}
                    className="hover:text-ink-800 hover:underline transition-colors"
                  >
                    {it.label}
                  </Link>
                ) : (
                  <span className="text-ink-700 font-medium">{it.label}</span>
                )}
                {!isLast && (
                  <span aria-hidden="true" className="text-ink-300 px-1">
                    ›
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
