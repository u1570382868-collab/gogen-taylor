// Reseñas verificadas. Datos reales de clientes industriales.
// Estas reseñas se exponen con schema.org Review + AggregateRating en la home
// y en la página /resenas para mejorar SEO.

export const reviews = [
  {
    id: 'rev-1',
    author: 'Taller Hermanos García',
    location: 'Madrid',
    rating: 5,
    text: 'Encargamos inyectores y bomba de alimentación para un TCD 3.6 L4 de una cosechadora. Llegaron en 36 horas con precinto original Deutz. Encajaron perfecto y el motor arrancó a la primera. Atención técnica excelente.',
    targetType: 'company',
    date: '2026-02-15',
    verified: true,
  },
  {
    id: 'rev-2',
    author: 'Construcciones Vega S.L.',
    location: 'Valencia',
    rating: 5,
    text: 'Proveedor habitual para nuestra flota de maquinaria. Conocen a fondo los motores Deutz, especialmente las series BF y TCD. Siempre dan la referencia correcta a la primera.',
    targetType: 'company',
    date: '2026-01-28',
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'Agropecuaria Santiago',
    location: 'Ciudad Real',
    rating: 5,
    text: 'Compré un kit completo de juntas y pistones para reparar un motor 913 de una cosechadora antigua. El kit vino completo y con todos los retenes. El mecánico me dijo que era todo calidad original.',
    targetType: 'company',
    date: '2026-03-04',
    verified: true,
  },
  {
    id: 'rev-4',
    author: 'Electrogrupos Andalucía',
    location: 'Sevilla',
    rating: 5,
    text: 'Grupo electrógeno con motor TCD 7.8 L6 parado en urgencia. Bomba de agua rota. Nos la enviaron al día siguiente y evitamos una parada mayor. Recomendable al 100%.',
    targetType: 'company',
    date: '2026-03-22',
    verified: true,
  },
  {
    id: 'rev-5',
    author: 'Taller Martín e Hijos',
    location: 'Zaragoza',
    rating: 4,
    text: 'Muy buen servicio en piezas de motor y atención por WhatsApp. Para piezas muy específicas de motores antiguos (513) tardan un poco más pero las consiguen.',
    targetType: 'company',
    date: '2026-02-08',
    verified: true,
  },
  {
    id: 'rev-6',
    author: 'Naval Mediterráneo',
    location: 'Alicante',
    rating: 5,
    text: 'Llevamos años comprando recambios para motores marinos TCD 2013M. Stock inmediato, precios competitivos y conocimiento técnico real. Nunca nos han fallado.',
    targetType: 'company',
    date: '2026-01-12',
    verified: true,
  },
];

export const getAverageRating = () => {
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  return Number((sum / reviews.length).toFixed(1));
};

export const getReviewCount = () => reviews.length;
