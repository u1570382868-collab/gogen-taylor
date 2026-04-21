import Link from 'next/link';
import Icon from './Icon';
import { EnginePlaceholder } from './Placeholder';
import { getFamily } from '@/data/families';

export default function EngineCard({ engine }) {
  const family = getFamily(engine.familyId);
  const href = `/motores/${engine.id}/`;

  return (
    <article className="group flex flex-col bg-white rounded-sm shadow-sm hover:shadow-md transition-all duration-base ease-out hover:-translate-y-0.5">
      <Link href={href} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-ink-50">
          <EnginePlaceholder name={engine.name} />
        </div>
      </Link>

      <div className="flex flex-col flex-1 p-5 gap-3">
        <p className="text-eyebrow text-red-600 uppercase">
          {family?.shortName} · {engine.generation === 'electronic' ? 'Electrónico' : engine.generation === 'classic' ? 'Clásico' : 'Transición'}
        </p>

        <Link href={href}>
          <h3 className="text-h3 font-display text-ink-800 hover:text-red-600 transition-colors">
            {engine.name}
          </h3>
        </Link>

        <div className="flex flex-col gap-1 text-body-sm text-ink-500">
          <span className="font-mono text-mono-sm">
            {engine.cylinders.count} cil. {engine.cylinders.configuration === 'V' ? 'en V' : 'en línea'} · {engine.displacement}
          </span>
          <span className="font-mono text-mono-sm">{engine.power}</span>
        </div>

        {engine.applications?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {engine.applications.slice(0, 3).map((app) => (
              <span
                key={app}
                className="inline-flex items-center rounded-xs bg-ink-50 px-2 py-0.5 text-caption text-ink-500 uppercase"
              >
                {app}
              </span>
            ))}
          </div>
        )}

        <Link
          href={href}
          className="mt-auto inline-flex items-center gap-1 pt-2 text-body font-medium text-ink-800 hover:text-red-600 transition-colors"
        >
          Ver motor
          <Icon name="arrowRight" className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
