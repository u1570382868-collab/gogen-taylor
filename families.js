export const families = [
  {
    id: 'air-cooled',
    name: 'Refrigerados por aire',
    shortName: 'Aire',
    description:
      'La generación clásica Deutz. Motores mecánicos refrigerados por aire, robustos, de mantenimiento sencillo. Presentes en tractores, compresores y generadores desde los años 70.',
    displayOrder: 1,
  },
  {
    id: 'water-oil-cooled',
    name: 'Refrigerados por agua y aceite',
    shortName: 'Agua/Aceite',
    description:
      'Transición hacia refrigeración líquida y mayor potencia específica. Gama 1011–2013, motores mecánicos y primeros electrónicos.',
    displayOrder: 2,
  },
  {
    id: 'tcd-electronic',
    name: 'TCD electrónicos',
    shortName: 'TCD',
    description:
      'Gama moderna Deutz con gestión electrónica, common rail, cumplimiento Stage IV y V. Montados en maquinaria agrícola, construcción y generación actuales.',
    displayOrder: 3,
  },
];

export const getFamily = (id) => families.find((f) => f.id === id);
