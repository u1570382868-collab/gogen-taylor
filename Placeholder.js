// Placeholder técnico industrial. Estética wireframe de motor en B/N.
// Se usa cuando no hay foto real del motor o de la pieza.

export function EnginePlaceholder({ name = '', className = 'w-full h-full' }) {
  return (
    <svg
      viewBox="0 0 400 250"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`Representación técnica del motor ${name}`}
    >
      <defs>
        <pattern id="engGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E3E3E6" strokeWidth="0.5" />
        </pattern>
        <linearGradient id="engBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5F5F5" />
          <stop offset="100%" stopColor="#EAEAEA" />
        </linearGradient>
      </defs>
      <rect width="400" height="250" fill="url(#engBg)" />
      <rect width="400" height="250" fill="url(#engGrid)" />

      {/* Bloque motor */}
      <g stroke="#2A2A2E" strokeWidth="1.5" fill="none">
        <rect x="80" y="100" width="240" height="90" rx="3" fill="#FFFFFF" />
        {/* Cilindros (4) */}
        <rect x="100" y="70" width="40" height="30" rx="2" fill="#FFFFFF" />
        <rect x="150" y="70" width="40" height="30" rx="2" fill="#FFFFFF" />
        <rect x="210" y="70" width="40" height="30" rx="2" fill="#FFFFFF" />
        <rect x="260" y="70" width="40" height="30" rx="2" fill="#FFFFFF" />
        {/* Base */}
        <rect x="70" y="190" width="260" height="20" rx="2" fill="#FFFFFF" />
        {/* Ruedas/soportes */}
        <circle cx="100" cy="215" r="8" fill="#FFFFFF" />
        <circle cx="300" cy="215" r="8" fill="#FFFFFF" />
        {/* Polea */}
        <circle cx="340" cy="145" r="15" fill="#FFFFFF" />
        <circle cx="340" cy="145" r="5" fill="#2A2A2E" />
        {/* Acento rojo */}
        <line x1="80" y1="130" x2="320" y2="130" stroke="#C8102E" strokeWidth="2" />
      </g>

      {/* Etiqueta técnica */}
      <g fontFamily="monospace" fontSize="10" fill="#5C5C62">
        <text x="20" y="30">MOTOR · DEUTZ</text>
        <text x="20" y="45" fontSize="14" fontWeight="600" fill="#0A0A0A">
          {name}
        </text>
      </g>
      <g fontFamily="monospace" fontSize="8" fill="#8A8A90">
        <text x="20" y="235">GOGEN-TAYLOR · OEM &amp; INDUSTRIAL PARTS</text>
      </g>
    </svg>
  );
}

export function PartPlaceholder({ name = '', iconKey = 'engine', className = 'w-full h-full' }) {
  return (
    <svg
      viewBox="0 0 300 300"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`Representación técnica de ${name}`}
    >
      <defs>
        <pattern id="partGrid" width="15" height="15" patternUnits="userSpaceOnUse">
          <path d="M 15 0 L 0 0 0 15" fill="none" stroke="#E3E3E6" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="300" height="300" fill="#F4F4F5" />
      <rect width="300" height="300" fill="url(#partGrid)" />

      {/* Círculo de referencia */}
      <circle
        cx="150"
        cy="150"
        r="100"
        fill="#FFFFFF"
        stroke="#BDBDC2"
        strokeWidth="1"
        strokeDasharray="4 4"
      />

      {/* Representación genérica de la pieza */}
      <g transform="translate(150 150)" stroke="#2A2A2E" fill="none" strokeWidth="2">
        <circle cx="0" cy="0" r="60" fill="#FFFFFF" />
        <circle cx="0" cy="0" r="40" />
        <circle cx="0" cy="0" r="20" />
        <circle cx="0" cy="0" r="5" fill="#2A2A2E" />
        {/* Radios */}
        <line x1="-60" y1="0" x2="-20" y2="0" />
        <line x1="60" y1="0" x2="20" y2="0" />
        <line x1="0" y1="-60" x2="0" y2="-20" />
        <line x1="0" y1="60" x2="0" y2="20" />
      </g>

      {/* Ticks de medida */}
      <g stroke="#5C5C62" strokeWidth="0.5">
        <line x1="30" y1="30" x2="50" y2="50" />
        <line x1="250" y1="250" x2="270" y2="270" />
      </g>

      <text x="20" y="25" fontFamily="monospace" fontSize="9" fill="#5C5C62">
        REF. TÉCNICA
      </text>
      <text x="20" y="40" fontFamily="monospace" fontSize="12" fontWeight="600" fill="#0A0A0A">
        {name}
      </text>

      <line x1="30" y1="270" x2="80" y2="270" stroke="#C8102E" strokeWidth="2" />
    </svg>
  );
}
