import Link from 'next/link';
import Icon from './Icon';
import StockBadge from './StockBadge';
import { PartPlaceholder } from './Placeholder';
import { getSubcategory } from '@/data/subcategories';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export default function ProductCard({ part, engine }) {
  const subcategory = getSubcategory(part.subcategoryId);
  const href = `/producto/${engine.id}/${part.id}/`;
  const whatsappUrl = buildWhatsAppUrl({
    partName: part.name,
    engineName: engine.name,
  });

  // SKU determinista a partir de motor + pieza
  const sku = `GT-${engine.id.replace(/[^a-z0-9]/gi, '').toUpperCase().slice(0, 6)}-${part.id
    .replace(/[^a-z0-9]/gi, '')
    .toUpperCase()
    .slice(0, 6)}`;

  return (
    <article className="group flex flex-col bg-white rounded-sm shadow-sm hover:shadow-md transition-all duration-base ease-out hover:-translate-y-0.5">
      <Link href={href} className="block">
        <div className="relative aspect-square overflow-hidden bg-ink-50">
          <PartPlaceholder name={part.name} iconKey={subcategory?.iconKey} />
        </div>
      </Link>

      <div className="flex flex-col flex-1 p-4 gap-3">
        <div>
          <p className="text-eyebrow text-red-600 uppercase mb-1">
            {subcategory?.shortName}
          </p>
          <Link href={href}>
            <h3 className="text-h5 font-sans text-ink-800 hover:text-red-600 transition-colors">
              {part.name}
            </h3>
          </Link>
        </div>

        <div className="flex flex-col gap-1 text-body-sm">
          <div className="flex gap-2">
            <span className="text-ink-400 w-10">SKU</span>
            <span className="font-mono text-mono-sm text-ink-700">{sku}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-ink-400 w-10">Motor</span>
            <span className="text-ink-700">{engine.name}</span>
          </div>
        </div>

        <div>
          <StockBadge status="in-stock" leadTime="24–48h" />
        </div>

        <div className="mt-auto grid grid-cols-2 gap-2 pt-2">
          <Link
            href={href}
            className="inline-flex items-center justify-center gap-1 h-10 px-3 rounded-sm border-[1.5px] border-ink-800 text-body-sm font-medium text-ink-800 hover:bg-ink-800 hover:text-white transition-colors"
          >
            Ver ficha
            <Icon name="arrowRight" className="w-4 h-4" />
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Consultar ${part.name} por WhatsApp`}
            className="inline-flex items-center justify-center gap-1 h-10 px-3 rounded-sm bg-whatsapp text-white text-body-sm font-medium hover:bg-whatsapp-hover transition-colors"
          >
            <Icon name="whatsapp" className="w-4 h-4" strokeWidth={0} />
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
