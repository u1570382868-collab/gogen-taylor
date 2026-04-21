import Link from 'next/link';
import Icon from './Icon';

export default function SubcategoryCard({ subcategory, engineId, partsCount }) {
  const href = `/motores/${engineId}/${subcategory.id}/`;

  return (
    <Link
      href={href}
      className="group flex flex-col gap-4 bg-white rounded-sm p-6 shadow-sm hover:shadow-md transition-all duration-base ease-out hover:-translate-y-0.5 border border-ink-100"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-sm bg-ink-50 text-ink-800 group-hover:bg-red-600 group-hover:text-white transition-colors">
        <Icon name={subcategory.iconKey} className="w-7 h-7" strokeWidth={1.5} />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-h5 font-sans text-ink-800">{subcategory.name}</h3>
        <p className="text-body-sm text-ink-400">{subcategory.shortDescription}</p>
      </div>

      <div className="mt-auto flex items-center justify-between pt-2 border-t border-ink-100">
        <span className="text-caption uppercase text-ink-400">
          {partsCount} {partsCount === 1 ? 'referencia' : 'referencias'}
        </span>
        <span className="flex items-center gap-1 text-body-sm font-medium text-ink-800 group-hover:text-red-600 transition-colors">
          Ver piezas
          <Icon name="arrowRight" className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}
