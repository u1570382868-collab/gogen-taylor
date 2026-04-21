import { engines } from '@/data/engines';
import { parts } from '@/data/parts';
import { subcategories } from '@/data/subcategories';

/**
 * Normaliza texto: minúsculas, sin tildes, sin signos de puntuación.
 */
function normalize(str = '') {
  return String(str)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Búsqueda global sobre motores, piezas y subcategorías.
 */
export function search(query) {
  const q = normalize(query);
  if (!q || q.length < 2) {
    return { engines: [], parts: [], subcategories: [], query };
  }

  const tokens = q.split(' ').filter(Boolean);

  const matchesAllTokens = (haystack) => {
    const h = normalize(haystack);
    return tokens.every((t) => h.includes(t));
  };

  const engineHits = engines.filter((e) => {
    const bag = [e.name, ...(e.altNames || []), e.description, ...(e.applications || [])].join(' ');
    return matchesAllTokens(bag);
  });

  const partHits = parts.filter((p) => {
    const bag = [p.name, p.shortDescription, p.description].join(' ');
    return matchesAllTokens(bag);
  });

  const subHits = subcategories.filter((s) => {
    const bag = [s.name, s.shortName, s.shortDescription, s.longDescription].join(' ');
    return matchesAllTokens(bag);
  });

  return {
    engines: engineHits,
    parts: partHits,
    subcategories: subHits,
    query,
  };
}
