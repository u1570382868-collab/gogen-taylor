// PIEZAS — Estrictamente las listadas en el documento Word de GOGEN-TAYLOR.
// No se han inventado piezas adicionales. Cada pieza declara su subcategoría.
// Literal del Word:
//   Pistones, camisas y segmentos · Bielas · Cigüeñales · Árboles de levas
//   Cojinetes y casquillos · Juntas · Turbos · Filtros
//   Refrigeradores de Aceite, Radiadores e Intercoolers
//   Bombas inyección, Inyectores y de alimentacion
//   Bombas de agua y termostato · Motores de arranque y alternadores
//   Sensores presión aceite y temperatura · Solenoides de paro
//   Culata, valvulas · Kit de correa distribucion · Tensores de correa

export const parts = [
  // ── 1. TREN ALTERNATIVO Y BLOQUE MOTOR ──────────────────────────
  {
    id: 'pistones',
    name: 'Pistones',
    subcategoryId: 'tren-alternativo',
    shortDescription: 'Pistones completos para reparación integral del tren alternativo.',
    description:
      'Pistones de alta calidad para motores Deutz. Suministrados con pasador, clips y juego completo de segmentos. Fabricados en aleación de aluminio con tratamiento superficial específico para combustión diésel. Disponibles en medidas estándar y sobredimensionadas para rectificados.',
    technicalSpecs: [
      { label: 'Material', value: 'Aleación aluminio', group: 'Técnica' },
      { label: 'Incluye', value: 'Pasador, clips, segmentos', group: 'Suministro' },
      { label: 'Medidas', value: 'STD y sobredimensionadas', group: 'Técnica' },
      { label: 'Garantía', value: '12 meses', group: 'Comercial' },
    ],
  },
  {
    id: 'camisas',
    name: 'Camisas',
    subcategoryId: 'tren-alternativo',
    shortDescription: 'Camisas húmedas y secas para bloque motor.',
    description:
      'Camisas de cilindro para motores Deutz, disponibles en configuración húmeda y seca según serie de motor. Suministradas con juntas tóricas cuando corresponde. Material fundición centrifugada de alta resistencia al desgaste.',
    technicalSpecs: [
      { label: 'Material', value: 'Fundición centrifugada', group: 'Técnica' },
      { label: 'Tipo', value: 'Húmeda / Seca', group: 'Técnica' },
      { label: 'Incluye', value: 'Juntas tóricas (si aplica)', group: 'Suministro' },
      { label: 'Garantía', value: '12 meses', group: 'Comercial' },
    ],
  },
  {
    id: 'segmentos',
    name: 'Segmentos',
    subcategoryId: 'tren-alternativo',
    shortDescription: 'Juegos de segmentos originales y equivalentes.',
    description:
      'Juegos completos de segmentos (aros) para pistones Deutz. Incluye segmento de fuego, segmento de compresión y segmento rascador de aceite. Disponibles para medidas estándar y sobredimensionadas.',
    technicalSpecs: [
      { label: 'Composición', value: 'Fuego + Compresión + Rascador', group: 'Técnica' },
      { label: 'Medidas', value: 'STD y sobredimensionadas', group: 'Técnica' },
      { label: 'Cantidad', value: 'Juego por pistón', group: 'Suministro' },
      { label: 'Garantía', value: '12 meses', group: 'Comercial' },
    ],
  },
  {
    id: 'bielas',
    name: 'Bielas',
    subcategoryId: 'tren-alternativo',
    shortDescription: 'Bielas forjadas para motores industriales Deutz.',
    description:
      'Bielas forjadas de alta resistencia, rectificadas y equilibradas. Fabricadas para soportar las exigencias de motores industriales de trabajo continuo. Suministradas con casquillo de biela y tornillería cuando procede.',
    technicalSpecs: [
      { label: 'Material', value: 'Acero forjado', group: 'Técnica' },
      { label: 'Acabado', value: 'Rectificadas y equilibradas', group: 'Técnica' },
      { label: 'Garantía', value: '12 meses', group: 'Comercial' },
    ],
  },
  {
    id: 'ciguenales',
    name: 'Cigüeñales',
    subcategoryId: 'tren-alternativo',
    shortDescription: 'Cigüeñales rectificados y nuevos.',
    description:
      'Cigüeñales originales y reconstruidos para motores Deutz. Disponibles en versión nueva y rectificada a medida estándar o sobredimensionada. Pasan control de equilibrado dinámico y verificación de cotas antes de su envío.',
    technicalSpecs: [
      { label: 'Tipo', value: 'Nuevos / Rectificados', group: 'Técnica' },
      { label: 'Controles', value: 'Equilibrado dinámico', group: 'Calidad' },
      { label: 'Medidas', value: 'STD y sobredimensionadas', group: 'Técnica' },
      { label: 'Garantía', value: '12 meses', group: 'Comercial' },
    ],
  },
  {
    id: 'cojinetes',
    name: 'Cojinetes',
    subcategoryId: 'tren-alternativo',
    shortDescription: 'Cojinetes de biela y bancada.',
    description:
      'Cojinetes de biela y bancada para motores Deutz. Disponibles en medidas estándar y sobredimensionadas para adaptarse al rectificado del cigüeñal. Material bimetálico o trimetálico según aplicación.',
    technicalSpecs: [
      { label: 'Tipos', value: 'Biela y bancada', group: 'Técnica' },
      { label: 'Material', value: 'Bimetal / Trimetal', group: 'Técnica' },
      { label: 'Medidas', value: 'STD y sobredimensionadas', group: 'Técnica' },
      { label: 'Garantía', value: '12 meses', group: 'Comercial' },
    ],
  },
  {
    id: 'casquillos',
    name: 'Casquillos',
    subcategoryId: 'tren-alternativo',
    shortDescription: 'Casquillos de biela y árbol de levas.',
    description:
      'Casquillos de biela y de árbol de levas para motores Deutz. Suministrados sueltos o en juego completo según motor. Material especializado con alta resistencia al desgaste y fatiga.',
    technicalSpecs: [
      { label: 'Tipos', value: 'Biela y árbol de levas', group: 'Técnica' },
      { label: 'Presentación', value: 'Sueltos o juego', group: 'Suministro' },
      { label: 'Garantía', value: '12 meses', group: 'Comercial' },
    ],
  },

  // ── 2. CULATA Y DISTRIBUCIÓN ────────────────────────────────────
  {
    id: 'culata',
    name: 'Culata',
    subcategoryId: 'distribucion',
    shortDescription: 'Culatas completas, rectificadas o nuevas.',
    description:
      'Culatas completas para motores Deutz, disponibles nuevas o reconstruidas. Suministradas con válvulas, guías, asientos y muelles montados y probadas en banco de pruebas. Se incluyen juntas correspondientes bajo pedido.',
    technicalSpecs: [
      { label: 'Tipo', value: 'Nuevas / Rectificadas', group: 'Técnica' },
      { label: 'Suministro', value: 'Completa con válvulas', group: 'Suministro' },
      { label: 'Control', value: 'Probadas en banco', group: 'Calidad' },
      { label: 'Garantía', value: '12 meses', group: 'Comercial' },
    ],
  },
  {
    id: 'valvulas',
    name: 'Válvulas',
    subcategoryId: 'distribucion',
    shortDescription: 'Válvulas de admisión y escape.',
    description:
      'Válvulas de admisión y escape para motores Deutz. Fabricadas en aleaciones de alta temperatura para las válvulas de escape. Suministradas sueltas o en juego completo de culata.',
    technicalSpecs: [
      { label: 'Tipos', value: 'Admisión y escape', group: 'Técnica' },
      { label: 'Material', value: 'Acero templado / Nimonic (escape)', group: 'Técnica' },
      { label: 'Presentación', value: 'Sueltas o juego completo', group: 'Suministro' },
      { label: 'Garantía', value: '12 meses', group: 'Comercial' },
    ],
  },
  {
    id: 'arboles-levas',
    name: 'Árboles de levas',
    subcategoryId: 'distribucion',
    shortDescription: 'Árboles de levas para reposición.',
    description:
      'Árboles de levas nuevos y reconstruidos para motores Deutz. Rectificados según especificaciones originales del fabricante. Incluye controles dimensionales y de dureza superficial.',
    technicalSpecs: [
      { label: 'Tipo', value: 'Nuevos / Reconstruidos', group: 'Técnica' },
      { label: 'Control', value: 'Dimensional y dureza', group: 'Calidad' },
      { label: 'Garantía', value: '12 meses', group: 'Comercial' },
    ],
  },
  {
    id: 'kit-correa-distribucion',
    name: 'Kit de correa distribución',
    subcategoryId: 'distribucion',
    shortDescription: 'Kits completos de distribución.',
    description:
      'Kit completo de distribución incluyendo correa, tensor y rodillos guía. Se recomienda sustituir el conjunto completo en cada mantenimiento. Para motores Deutz con distribución por correa.',
    technicalSpecs: [
      { label: 'Incluye', value: 'Correa + tensor + rodillos', group: 'Suministro' },
      { label: 'Recomendación', value: 'Sustituir conjunto completo', group: 'Montaje' },
      { label: 'Garantía', value: '12 meses', group: 'Comercial' },
    ],
  },
  {
    id: 'tensores-correa',
    name: 'Tensores de correa',
    subcategoryId: 'distribucion',
    shortDescription: 'Tensores automáticos y manuales.',
    description:
      'Tensores de correa para motores Deutz. Versiones automáticas e hidráulicas según modelo. Imprescindibles para mantener la tensión correcta del sistema de distribución y accesorios.',
    technicalSpecs: [
      { label: 'Tipos', value: 'Automático / Hidráulico / Manual', group: 'Técnica' },
      { label: 'Aplicación', value: 'Distribución y accesorios', group: 'Técnica' },
      { label: 'Garantía', value: '12 meses', group: 'Comercial' },
    ],
  },

  // ── 3. SISTEMA DE LUBRICACIÓN ───────────────────────────────────
  {
    id: 'refrigeradores-aceite',
    name: 'Refrigeradores de aceite',
    subcategoryId: 'lubricacion',
    shortDescription: 'Intercambiadores de calor aceite-agua.',
    description:
      'Refrigeradores de aceite (oil cooler) para motores Deutz. Intercambiador de calor agua-aceite de alta eficiencia, fundamental para mantener la temperatura de trabajo del lubricante. Disponibles nuevos y reconstruidos.',
    technicalSpecs: [
      { label: 'Tipo', value: 'Intercambiador agua-aceite', group: 'Técnica' },
      { label: 'Versiones', value: 'Nuevo / Reconstruido', group: 'Técnica' },
      { label: 'Garantía', value: '12 meses', group: 'Comercial' },
    ],
  },
  {
    id: 'sensores-presion-aceite',
    name: 'Sensores de presión de aceite',
    subcategoryId: 'lubricacion',
    shortDescription: 'Sensores y transmisores de presión.',
    description:
      'Sensores y transmisores de presión de aceite para motores Deutz. Versiones para alarma simple (contacto) y para gestión electrónica (analógicos y digitales). Imprescindibles para la monitorización del sistema de lubricación.',
    technicalSpecs: [
      { label: 'Tipos', value: 'Contacto / Analógico / Digital', group: 'Técnica' },
      { label: 'Aplicación', value: 'Alarma y gestión ECU', group: 'Técnica' },
      { label: 'Garantía', value: '12 meses', group: 'Comercial' },
    ],
  },

  // ── 4. SISTEMA DE REFRIGERACIÓN ─────────────────────────────────
  {
    id: 'bombas-agua',
    name: 'Bombas de agua',
    subcategoryId: 'refrigeracion',
    shortDescription: 'Bombas centrífugas nuevas y reconstruidas.',
    description:
      'Bombas de agua nuevas y reconstruidas para motores Deutz refrigerados por líquido. Incluye cuerpo, rodete, eje y rodamientos. Suministradas con junta tórica o junta de papel según modelo.',
    technicalSpecs: [
      { label: 'Tipo', value: 'Centrífuga', group: 'Técnica' },
      { label: 'Versiones', value: 'Nueva / Reconstruida', group: 'Técnica' },
      { label: 'Incluye', value: 'Juntas de montaje', group: 'Suministro' },
      { label: 'Garantía', value: '12 meses', group: 'Comercial' },
    ],
  },
  {
    id: 'termostato',
    name: 'Termostato',
    subcategoryId: 'refrigeracion',
    shortDescription: 'Termostatos calibrados de cera.',
    description:
      'Termostatos de cera calibrados para motores Deutz. Disponibles en distintas temperaturas de apertura según aplicación (82°C, 87°C, 92°C, etc.). Elemento clave para el correcto régimen térmico del motor.',
    technicalSpecs: [
      { label: 'Tipo', value: 'Cera calibrada', group: 'Técnica' },
      { label: 'Apertura', value: 'Según aplicación', group: 'Técnica' },
      { label: 'Garantía', value: '12 meses', group: 'Comercial' },
    ],
  },
  {
    id: 'radiadores',
    name: 'Radiadores',
    subcategoryId: 'refrigeracion',
    shortDescription: 'Radiadores de agua para motor industrial.',
    description:
      'Radiadores para motores Deutz refrigerados por agua. Construcción en aluminio o cobre-latón según modelo. Disponibles para equipos de construcción, agrícolas, marinos y generación.',
    technicalSpecs: [
      { label: 'Material', value: 'Aluminio / Cobre-latón', group: 'Técnica' },
      { label: 'Aplicaciones', value: 'Industrial, agrícola, marino', group: 'Aplicación' },
      { label: 'Garantía', value: '12 meses', group: 'Comercial' },
    ],
  },
  {
    id: 'intercoolers',
    name: 'Intercoolers',
    subcategoryId: 'refrigeracion',
    shortDescription: 'Intercambiadores aire-aire y aire-agua.',
    description:
      'Intercoolers para motores turboalimentados BF y TCD de Deutz. Versiones aire-aire y aire-agua según aplicación. Su correcto funcionamiento es crítico para la eficiencia del motor turboalimentado.',
    technicalSpecs: [
      { label: 'Tipos', value: 'Aire-aire / Aire-agua', group: 'Técnica' },
      { label: 'Aplicación', value: 'BF y TCD turboalimentados', group: 'Aplicación' },
      { label: 'Garantía', value: '12 meses', group: 'Comercial' },
    ],
  },
  {
    id: 'sensores-temperatura',
    name: 'Sensores de temperatura',
    subcategoryId: 'refrigeracion',
    shortDescription: 'Sensores de temperatura del refrigerante.',
    description:
      'Sensores de temperatura de refrigerante para motores Deutz. Versiones de contacto para alarmas y analógicos/NTC para gestión electrónica. Imprescindibles para la monitorización térmica del motor.',
    technicalSpecs: [
      { label: 'Tipos', value: 'Contacto / NTC / Analógico', group: 'Técnica' },
      { label: 'Aplicación', value: 'Alarma y gestión ECU', group: 'Técnica' },
      { label: 'Garantía', value: '12 meses', group: 'Comercial' },
    ],
  },

  // ── 5. INYECCIÓN Y ALIMENTACIÓN ─────────────────────────────────
  {
    id: 'bombas-inyeccion',
    name: 'Bombas de inyección',
    subcategoryId: 'inyeccion',
    shortDescription: 'Bombas en línea, rotativas y CP3/CP4.',
    description:
      'Bombas de inyección para motores Deutz: bombas en línea mecánicas (Bosch, Lucas), bombas rotativas y bombas de alta presión Common Rail (CP3, CP4) para motores TCD. Nuevas y reconstruidas con banco de pruebas.',
    technicalSpecs: [
      { label: 'Tipos', value: 'En línea / Rotativa / CP3 / CP4', group: 'Técnica' },
      { label: 'Versiones', value: 'Nuevas / Reconstruidas', group: 'Técnica' },
      { label: 'Control', value: 'Probadas en banco', group: 'Calidad' },
      { label: 'Garantía', value: '12 meses', group: 'Comercial' },
    ],
  },
  {
    id: 'inyectores',
    name: 'Inyectores',
    subcategoryId: 'inyeccion',
    shortDescription: 'Inyectores mecánicos y Common Rail.',
    description:
      'Inyectores para motores Deutz. Versiones mecánicas para motores clásicos (con portainyector y tobera) e inyectores Common Rail (Bosch CRI) para TCD. Calibrados en banco de pruebas antes del envío.',
    technicalSpecs: [
      { label: 'Tipos', value: 'Mecánico / Common Rail', group: 'Técnica' },
      { label: 'Control', value: 'Calibración en banco', group: 'Calidad' },
      { label: 'Versiones', value: 'Nuevos / Reconstruidos', group: 'Técnica' },
      { label: 'Garantía', value: '12 meses', group: 'Comercial' },
    ],
  },
  {
    id: 'bombas-alimentacion',
    name: 'Bombas de alimentación',
    subcategoryId: 'inyeccion',
    shortDescription: 'Bombas de baja presión (alimentación).',
    description:
      'Bombas de alimentación (feed pump) para motores Deutz. Alimentan combustible a baja presión a la bomba de inyección principal. Versiones mecánicas (accionadas por levas) y eléctricas según motor.',
    technicalSpecs: [
      { label: 'Tipos', value: 'Mecánica / Eléctrica', group: 'Técnica' },
      { label: 'Función', value: 'Baja presión', group: 'Técnica' },
      { label: 'Garantía', value: '12 meses', group: 'Comercial' },
    ],
  },

  // ── 6. SOBREALIMENTACIÓN Y ADMISIÓN ─────────────────────────────
  {
    id: 'turbos',
    name: 'Turbos',
    subcategoryId: 'sobrealimentacion',
    shortDescription: 'Turbocompresores nuevos y reconstruidos.',
    description:
      'Turbocompresores para motores Deutz BF y TCD. Disponibles nuevos (Borg Warner, Garrett, Holset) y reconstruidos con garantía. Probados en banco de equilibrado y control de parámetros.',
    technicalSpecs: [
      { label: 'Marcas', value: 'Borg Warner / Garrett / Holset', group: 'Técnica' },
      { label: 'Versiones', value: 'Nuevos / Reconstruidos', group: 'Técnica' },
      { label: 'Control', value: 'Banco de equilibrado', group: 'Calidad' },
      { label: 'Garantía', value: '12 meses', group: 'Comercial' },
    ],
  },

  // ── 7. SISTEMA ELÉCTRICO Y ARRANQUE ─────────────────────────────
  {
    id: 'motores-arranque',
    name: 'Motores de arranque',
    subcategoryId: 'electrico',
    shortDescription: 'Motores de arranque 12V y 24V.',
    description:
      'Motores de arranque para motores Deutz en 12V y 24V. Nuevos y reconstruidos. Disponibles diferentes potencias según tamaño del motor a arrancar. Marcas Bosch, Iskra, Prestolite.',
    technicalSpecs: [
      { label: 'Tensión', value: '12V / 24V', group: 'Técnica' },
      { label: 'Marcas', value: 'Bosch / Iskra / Prestolite', group: 'Técnica' },
      { label: 'Versiones', value: 'Nuevos / Reconstruidos', group: 'Técnica' },
      { label: 'Garantía', value: '12 meses', group: 'Comercial' },
    ],
  },
  {
    id: 'alternadores',
    name: 'Alternadores',
    subcategoryId: 'electrico',
    shortDescription: 'Alternadores 12V / 24V con regulador incorporado.',
    description:
      'Alternadores para motores Deutz en 12V y 24V con distintas intensidades (50A, 90A, 120A, etc.). Nuevos y reconstruidos. Incluyen regulador incorporado y polea.',
    technicalSpecs: [
      { label: 'Tensión', value: '12V / 24V', group: 'Técnica' },
      { label: 'Intensidades', value: '50A, 90A, 120A...', group: 'Técnica' },
      { label: 'Incluye', value: 'Regulador y polea', group: 'Suministro' },
      { label: 'Garantía', value: '12 meses', group: 'Comercial' },
    ],
  },
  {
    id: 'solenoides-paro',
    name: 'Solenoides de paro',
    subcategoryId: 'electrico',
    shortDescription: 'Electroválvulas de parada del motor.',
    description:
      'Solenoides de paro (stop solenoid) para motores Deutz. Actúan sobre la bomba de inyección para detener el motor. Disponibles en 12V y 24V con diferentes longitudes de émbolo.',
    technicalSpecs: [
      { label: 'Tensión', value: '12V / 24V', group: 'Técnica' },
      { label: 'Función', value: 'Parada de emergencia', group: 'Técnica' },
      { label: 'Garantía', value: '12 meses', group: 'Comercial' },
    ],
  },

  // ── 8. JUNTAS Y RETENES ─────────────────────────────────────────
  {
    id: 'juntas',
    name: 'Juntas',
    subcategoryId: 'juntas',
    shortDescription: 'Kit de juntas completo y junta de culata.',
    description:
      'Juntas para motores Deutz: junta de culata individual, kit de juntas medio (half set) para trabajos de culata y kit de juntas completo (full set) para reparación integral. Calidad OEM con materiales especificados para cada motor.',
    technicalSpecs: [
      { label: 'Presentaciones', value: 'Culata / Medio / Completo', group: 'Suministro' },
      { label: 'Calidad', value: 'OEM', group: 'Técnica' },
      { label: 'Garantía', value: '12 meses', group: 'Comercial' },
    ],
  },

  // ── 9. FILTROS ──────────────────────────────────────────────────
  {
    id: 'filtros',
    name: 'Filtros',
    subcategoryId: 'filtros',
    shortDescription: 'Filtros de aire, aceite y combustible.',
    description:
      'Conjunto completo de filtros de mantenimiento para motores Deutz: filtros de aceite (roscados y de cartucho), filtros de combustible (primario y secundario con separador de agua) y filtros de aire. Calidad OEM y equivalentes premium.',
    technicalSpecs: [
      { label: 'Tipos', value: 'Aceite / Combustible / Aire', group: 'Técnica' },
      { label: 'Formatos', value: 'Roscado / Cartucho', group: 'Técnica' },
      { label: 'Calidad', value: 'OEM y equivalente premium', group: 'Técnica' },
      { label: 'Garantía', value: '12 meses', group: 'Comercial' },
    ],
  },
];

export const getPart = (id) => parts.find((p) => p.id === id);

export const getPartsBySubcategory = (subcategoryId) =>
  parts.filter((p) => p.subcategoryId === subcategoryId);

// Relación motor ↔ pieza: todas las piezas del catálogo son compatibles con
// todos los motores (se ajusta la referencia OEM específica por consulta).
// En una fase posterior con datos OEM reales, esta función devolverá solo las
// piezas con fit confirmado por motor.
export const getPartsForEngine = (engineId, subcategoryId = null) => {
  const source = subcategoryId
    ? parts.filter((p) => p.subcategoryId === subcategoryId)
    : parts;
  return source;
};
