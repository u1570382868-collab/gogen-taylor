'use client';

import { buildWhatsAppUrl } from '@/lib/whatsapp';
import Icon from './Icon';
import Button from './Button';

/**
 * Botón WhatsApp con mensaje prellenado.
 * context: si se pasa `partName` y `engineName`, genera el mensaje técnico.
 */
export default function WhatsAppButton({
  partName,
  engineName,
  variant = 'whatsapp',
  size = 'lg',
  label = 'Consultar por WhatsApp',
  fullWidth = false,
  className = '',
}) {
  const url = buildWhatsAppUrl({ partName, engineName });

  return (
    <Button
      href={url}
      external
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      className={className}
      aria-label={label}
    >
      <Icon name="whatsapp" className="w-5 h-5" strokeWidth={0} />
      <span>{label}</span>
    </Button>
  );
}
