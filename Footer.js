import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon';
import { company } from '@/data/config';
import { families } from '@/data/families';
import { subcategories } from '@/data/subcategories';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export default function Footer() {
  const whatsapp = buildWhatsAppUrl();

  return (
    <footer className="bg-surface-dark text-ink-300">
      {/* Línea roja decorativa superior */}
      <div className="h-0.5 bg-red-600" />

      <div className="container-gt py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-10">
          {/* Columna 1: Marca + contacto */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 rounded-sm"
              />
              <div className="flex flex-col leading-none">
                <span className="text-h5 font-display uppercase tracking-tight text-white">
                  {company.name}
                </span>
                <span className="text-caption uppercase text-ink-400">
                  OEM &amp; Industrial Parts
                </span>
              </div>
            </div>
            <p className="text-body-sm leading-relaxed">
              {company.tagline}. Distribuidor especializado en recambios Deutz.
            </p>

            <ul className="flex flex-col gap-2 text-body-sm mt-2">
              <li className="flex items-start gap-2">
                <Icon name="mapPin" className="w-4 h-4 mt-0.5 text-red-500 flex-shrink-0" />
                <span>{company.address.full}</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="mail" className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-white transition-colors"
                >
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="phone" className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a
                  href={`tel:${company.phoneTel}`}
                  className="font-mono hover:text-white transition-colors tabular-nums"
                >
                  {company.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2 text-ink-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span>{company.hours}</span>
              </li>
            </ul>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-10 px-4 mt-2 rounded-sm bg-whatsapp text-white font-medium hover:bg-whatsapp-hover transition-colors w-fit"
            >
              <Icon name="whatsapp" className="w-4 h-4" strokeWidth={0} />
              WhatsApp
            </a>
          </div>

          {/* Columna 2: Catálogo */}
          <div>
            <h3 className="text-eyebrow uppercase text-red-500 mb-4">Catálogo</h3>
            <ul className="flex flex-col gap-2 text-body-sm">
              <li>
                <Link href="/motores/" className="hover:text-white transition-colors">
                  Todos los motores
                </Link>
              </li>
              {families.map((f) => (
                <li key={f.id}>
                  <Link href="/motores/" className="hover:text-white transition-colors">
                    {f.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Sistemas */}
          <div>
            <h3 className="text-eyebrow uppercase text-red-500 mb-4">Sistemas mecánicos</h3>
            <ul className="flex flex-col gap-2 text-body-sm">
              {subcategories.map((s) => (
                <li key={s.id}>
                  <Link href="/motores/" className="hover:text-white transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Empresa + Legal */}
          <div>
            <h3 className="text-eyebrow uppercase text-red-500 mb-4">Empresa</h3>
            <ul className="flex flex-col gap-2 text-body-sm">
              <li>
                <Link href="/resenas/" className="hover:text-white transition-colors">
                  Reseñas
                </Link>
              </li>
              <li>
                <Link href="/contacto/" className="hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/buscar/" className="hover:text-white transition-colors">
                  Búsqueda
                </Link>
              </li>
              <li className="pt-2">
                <a
                  href={company.social.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Icon name="linkedin" className="w-4 h-4 text-red-500" strokeWidth={0} />
                  <span>{company.social.linkedin.label}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-ink-700">
        <div className="container-gt py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-caption uppercase text-ink-400">
          <span>
            © {new Date().getFullYear()} {company.legalName} · Todos los derechos reservados
          </span>
          <span className="font-mono normal-case tracking-normal">
            Recambios Deutz · OEM &amp; Industrial Parts
          </span>
        </div>
      </div>
    </footer>
  );
}
