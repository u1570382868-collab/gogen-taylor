// Iconos line-style 1.5px stroke. Estética técnica industrial.
// Exporta por nombre. Uso: <Icon name="piston" className="w-6 h-6" />

const icons = {
  piston: (
    <path d="M9 3h6v5h-6zM9 8h6l-1 3h-4zM8 11h8v8a2 2 0 01-2 2h-4a2 2 0 01-2-2zM8 14h8M8 17h8" />
  ),
  camshaft: (
    <g>
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="14" cy="12" r="2.5" />
      <path d="M3 12h1M8.5 12h3M16.5 12h4.5M6 9.5v-2M14 9.5v-2" />
    </g>
  ),
  oil: (
    <path d="M12 3s5 6 5 10a5 5 0 01-10 0c0-4 5-10 5-10zM9.5 13.5c0 1.5 1 2.5 2.5 2.5" />
  ),
  cooling: (
    <g>
      <path d="M12 3v18M4.5 7.5l15 9M4.5 16.5l15-9" />
      <path d="M10 3l2 2 2-2M10 21l2-2 2 2M3.5 9l.7 2.7L7 12M17 12l2.8-.3L20.5 9M3.5 15l.7-2.7L7 12M17 12l2.8.3.7 2.7" />
    </g>
  ),
  injector: (
    <g>
      <path d="M10 3h4v2h-4zM10 5h4v10h-4zM11 15l1 4 1-4M8 7h2M14 7h2M8 10h2M14 10h2M8 13h2M14 13h2" />
    </g>
  ),
  turbine: (
    <g>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v4M12 17v4M21 12h-4M7 12H3M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8M18.4 18.4l-2.8-2.8M8.4 8.4L5.6 5.6" />
    </g>
  ),
  bolt: (
    <path d="M13 3L5 14h5l-1 7 8-11h-5l1-7z" />
  ),
  gasket: (
    <g>
      <path d="M4 6h16v12H4z" />
      <circle cx="8" cy="10" r="1" />
      <circle cx="16" cy="10" r="1" />
      <circle cx="8" cy="14" r="1" />
      <circle cx="16" cy="14" r="1" />
      <path d="M10 12h4" />
    </g>
  ),
  filter: (
    <g>
      <path d="M4 4h16l-6 8v8l-4-2v-6z" />
      <path d="M7 7h10" />
    </g>
  ),
  search: (
    <g>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </g>
  ),
  whatsapp: (
    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.9-2.8-1.5-3.9-3.5-.3-.5.3-.5.8-1.5.1-.2.1-.3 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2.1 3.2 5.2 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 3C7 3 3 7 3 12c0 1.6.4 3.1 1.2 4.5L3 21l4.7-1.2c1.3.7 2.8 1.1 4.3 1.1 5 0 9-4 9-9s-4-8.9-9-8.9z" fill="currentColor" stroke="none" />
  ),
  menu: (
    <path d="M4 6h16M4 12h16M4 18h16" />
  ),
  close: (
    <path d="M18 6 6 18M6 6l12 12" />
  ),
  arrowRight: (
    <path d="M5 12h14m-6-6 6 6-6 6" />
  ),
  chevronDown: (
    <path d="m6 9 6 6 6-6" />
  ),
  chevronRight: (
    <path d="m9 6 6 6-6 6" />
  ),
  check: (
    <path d="m5 12 5 5L20 7" />
  ),
  star: (
    <path d="M12 2l2.9 6.3 6.8.6-5.1 4.5 1.5 6.7L12 16.8 5.9 20l1.5-6.7L2.3 8.9l6.8-.6z" fill="currentColor" stroke="none" />
  ),
  starOutline: (
    <path d="M12 2l2.9 6.3 6.8.6-5.1 4.5 1.5 6.7L12 16.8 5.9 20l1.5-6.7L2.3 8.9l6.8-.6z" />
  ),
  mail: (
    <g>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m3 7 9 6 9-6" />
    </g>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7 13 13 0 0 0 .7 2.8 2 2 0 0 1-.4 2L8 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4 13 13 0 0 0 2.8.7 2 2 0 0 1 1.7 2z" />
  ),
  mapPin: (
    <g>
      <path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </g>
  ),
  linkedin: (
    <g>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" fill="currentColor" stroke="none" />
      <rect x="2" y="9" width="4" height="12" fill="currentColor" stroke="none" />
      <circle cx="4" cy="4" r="2" fill="currentColor" stroke="none" />
    </g>
  ),
  engine: (
    <g>
      <rect x="3" y="8" width="18" height="10" rx="1" />
      <path d="M7 8V5h4v3M14 8V5h4v3M3 12h18M6 18v2M18 18v2M21 11h1M2 11h1" />
    </g>
  ),
};

export default function Icon({ name, className = 'w-5 h-5', strokeWidth = 1.5 }) {
  const path = icons[name];
  if (!path) return null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {path}
    </svg>
  );
}
