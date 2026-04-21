export const subcategories = [
  {
    id: 'tren-alternativo',
    name: 'Tren alternativo y bloque motor',
    shortName: 'Tren alternativo',
    shortDescription: 'Pistones, bielas, cigüeñales, cojinetes y casquillos.',
    longDescription:
      'El corazón mecánico del motor. Comprende todos los componentes en movimiento del conjunto alternativo: pistones, camisas, segmentos, bielas, cigüeñales y todos los cojinetes y casquillos que permiten la rotación y lubricación del conjunto.',
    iconKey: 'piston',
    displayOrder: 1,
  },
  {
    id: 'distribucion',
    name: 'Culata y distribución',
    shortName: 'Distribución',
    shortDescription: 'Culatas, válvulas, árboles de levas, kit correa, tensores.',
    longDescription:
      'Todo el sistema de apertura y cierre de válvulas y la distribución mecánica del motor. Incluye culatas completas, válvulas de admisión y escape, árboles de levas, kits de correa de distribución y tensores.',
    iconKey: 'camshaft',
    displayOrder: 2,
  },
  {
    id: 'lubricacion',
    name: 'Sistema de lubricación',
    shortName: 'Lubricación',
    shortDescription: 'Refrigeradores de aceite, sensores de presión, filtros de aceite.',
    longDescription:
      'Componentes que garantizan la correcta lubricación del motor y la monitorización de la presión de aceite. Refrigeradores de aceite, sensores de presión y filtros de aceite.',
    iconKey: 'oil',
    displayOrder: 3,
  },
  {
    id: 'refrigeracion',
    name: 'Sistema de refrigeración',
    shortName: 'Refrigeración',
    shortDescription: 'Bombas de agua, termostatos, radiadores, intercoolers.',
    longDescription:
      'Todos los componentes del circuito de refrigeración por agua: bombas de agua, termostatos, radiadores, intercoolers y sensores de temperatura.',
    iconKey: 'cooling',
    displayOrder: 4,
  },
  {
    id: 'inyeccion',
    name: 'Inyección y alimentación',
    shortName: 'Inyección',
    shortDescription: 'Bombas de inyección, inyectores, bombas de alimentación.',
    longDescription:
      'El sistema que entrega combustible al motor con la presión y el tiempo correctos. Bombas de inyección, inyectores, bombas de alimentación y filtros de combustible.',
    iconKey: 'injector',
    displayOrder: 5,
  },
  {
    id: 'sobrealimentacion',
    name: 'Sobrealimentación y admisión',
    shortName: 'Turbo',
    shortDescription: 'Turbocompresores y componentes de admisión.',
    longDescription:
      'Sobrealimentación por turbocompresor para motores BF y TCD. Incluye turbos completos y todo lo relacionado con la admisión forzada.',
    iconKey: 'turbine',
    displayOrder: 6,
  },
  {
    id: 'electrico',
    name: 'Sistema eléctrico y arranque',
    shortName: 'Eléctrico',
    shortDescription: 'Motores de arranque, alternadores, solenoides de paro, sensores.',
    longDescription:
      'Componentes eléctricos del motor: motores de arranque, alternadores, solenoides de paro y sensores de presión de aceite y temperatura.',
    iconKey: 'bolt',
    displayOrder: 7,
  },
  {
    id: 'juntas',
    name: 'Juntas y retenes',
    shortName: 'Juntas',
    shortDescription: 'Juntas de culata y conjuntos completos.',
    longDescription:
      'Conjuntos de juntas para la estanqueidad completa del motor: juntas de culata, kits completos y kits medios.',
    iconKey: 'gasket',
    displayOrder: 8,
  },
  {
    id: 'filtros',
    name: 'Filtros',
    shortName: 'Filtros',
    shortDescription: 'Filtros de aire, aceite y combustible.',
    longDescription:
      'Todos los filtros de mantenimiento del motor: filtros de aire, filtros de aceite y filtros de combustible.',
    iconKey: 'filter',
    displayOrder: 9,
  },
];

export const getSubcategory = (id) => subcategories.find((s) => s.id === id);
