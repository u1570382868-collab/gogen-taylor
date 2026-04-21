import Link from 'next/link';
import Icon from './Icon';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export default function CTABlock({
  title = '¿No encuentras tu referencia?',
  subtitle = 'Accedemos al catálogo Deutz completo. Pregúntanos por WhatsApp y te confirmamos disponibilidad y precio en el día.',
}) {
  const whatsapp = buildWhatsAppUrl();

  return (
    <section className="relative bg-surface-dark text-white py-16 md:py-20 overflow-hidden">
      {/* Decoración - línea roja */}
      <div className="absolute top-0 left-0 h-1 w-24 md:w-32 bg-red-600" />

      <div className="container-gt text-center max-w-2xl">
        <p className="text-eyebrow uppercase text-red-500 mb-4">Contacto directo</p>
        <h2 className="text-display-md md:text-display-lg font-display text-white mb-4">
          {title}
        </h2>
        <p className="text-body-lg text-ink-200 mb-8">{subtitle}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-sm bg-whatsapp text-white font-semibold hover:bg-whatsapp-hover transition-colors w-full sm:w-auto"
          >
            <Icon name="whatsapp" className="w-5 h-5" strokeWidth={0} />
            Consultar por WhatsApp
          </a>
          <Link
            href="/contacto/"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-sm bg-transparent border-[1.5px] border-white text-white font-semibold hover:bg-white hover:text-ink-900 transition-colors w-full sm:w-auto"
          >
            Enviar formulario
          </Link>
        </div>
      </div>
    </section>
  );
}
