// export function getPuntosPorResiduo(tipo: string): number {
//   const normalizado = tipo.trim().toLowerCase();

//   const mapa: Record<string, number> = {
//     "botella de plástico (pet)": 2,
//     papel: 20,
//     vidrio: 10,
//     lata: 2,
//     "lata de aluminio": 3,
//     baterías: 20,
//     "bolsa reutilizable": 5,
//     "equipo electronico": 10,
//     "bolsa de plastico": 1,
//     carton: 25,
//     madera: 15,
//     chatarra: 20,
//     cables: 5,
//     celular: 10,
//     llanta: 4,
//   };

//   return mapa[normalizado] ?? 5;
// }

export const residuos = [
  { nombre: "botella de plástico (pet)", puntos: 2 },
  { nombre: "papel", puntos: 20 },
  { nombre: "vidrio", puntos: 10 },
  { nombre: "lata", puntos: 2 },
  { nombre: "lata de aluminio", puntos: 3 },
  { nombre: "batería", puntos: 20 },
  { nombre: "bolsa reutilizable", puntos: 5 },
  { nombre: "equipo electronico", puntos: 10 },
  { nombre: "bolsa de plastico", puntos: 1 },
  { nombre: "carton", puntos: 25 },
  { nombre: "madera", puntos: 15 },
  { nombre: "chatarra", puntos: 20 },
  { nombre: "cable", puntos: 5 },
  { nombre: "celular", puntos: 10 },
  { nombre: "llanta", puntos: 4 },
];
