export default function StockBadge({ status = 'in-stock', leadTime = '24–48h' }) {
  const variants = {
    'in-stock': {
      dot: 'bg-success',
      text: 'text-success',
      bg: 'bg-success-bg',
      label: `Disponible · ${leadTime}`,
    },
    'on-order': {
      dot: 'bg-warning',
      text: 'text-warning',
      bg: 'bg-warning-bg',
      label: 'Bajo pedido · 7–15 días',
    },
    consult: {
      dot: 'bg-danger',
      text: 'text-danger',
      bg: 'bg-danger-bg',
      label: 'Consultar disponibilidad',
    },
  };
  const v = variants[status] || variants['in-stock'];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-xs px-2 py-1 text-caption uppercase ${v.bg} ${v.text}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${v.dot}`} />
      {v.label}
    </span>
  );
}
