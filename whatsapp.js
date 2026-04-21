import { company } from '@/data/config';

/**
 * Genera el deep-link de WhatsApp con el mensaje exacto solicitado.
 * Mensaje: "Hola, estoy interesado en la pieza: [nombre], del motor [motor].
 *           ¿Podéis darme más información y precio?"
 */
export function buildWhatsAppUrl({ partName, engineName } = {}) {
  let message;

  if (partName && engineName) {
    message = `Hola, estoy interesado en la pieza: ${partName}, del motor ${engineName}. ¿Podéis darme más información y precio?`;
  } else if (partName) {
    message = `Hola, estoy interesado en la pieza: ${partName}. ¿Podéis darme más información y precio?`;
  } else if (engineName) {
    message = `Hola, tengo una consulta sobre el motor ${engineName}. ¿Podéis darme más información?`;
  } else {
    message = `Hola, quería consultar sobre recambios Deutz.`;
  }

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${company.whatsappNumber}?text=${encoded}`;
}

export function buildWhatsAppUrlGeneral() {
  return buildWhatsAppUrl();
}
