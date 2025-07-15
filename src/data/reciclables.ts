// export const reciclables = [
//   { name: "Madera", img: "/residuos/madera.jpg", href: "/guia/tarimas" },
//   {
//     name: "Bolsas reutilizables (PP)",
//     img: "/residuos/bolso.webp",
//     href: "/guia/bolsas",
//   },
//   { name: "Chatarra", img: "/residuos/chatarra.png", href: "/guia/playo" },
//   { name: "Vidrio", img: "/residuos/vidrio.webp", href: "/guia/caple" },
//   { name: "Cartón", img: "/residuos/carton.webp", href: "/guia/carton" },
//   { name: "Revistas", img: "/residuos/revistas.png", href: "/guia/revistas" },
//   { name: "PET", img: "/residuos/pet.webp", href: "/guia/pet" },
//   { name: "HDPE", img: "/residuos/hdpe.webp", href: "/guia/hdpe" },
//   {
//     name: "Bolsas de plástico",
//     img: "/residuos/bolsas-plastico.webp",
//     href: "/guia/capsulas",
//   },
//   { name: "Lata", img: "/residuos/lataa.webp", href: "/guia/lata" },
//   {
//     name: "Papel",
//     img: "/residuos/papel.webp",
//     href: "/guia/poliestireno",
//   },
//   {
//     name: "Periódico",
//     img: "/residuos/periodico.webp",
//     href: "/guia/periodico",
//   },
// ];

// export const manejoEspecial = [
//   { name: "Pilas", img: "/residuos/pilas.webp", href: "/guia/pilas" },
//   { name: "Baterías", img: "/residuos/bateria.webp", href: "/guia/baterias" },
//   { name: "Aceite usado", img: "/residuos/aceite.webp", href: "/guia/aceite" },
//   {
//     name: "Residuos electrónicos",
//     img: "/residuos/electronicos.webp",
//     href: "/guia/electronicos",
//   },
//   {
//     name: "Cables",
//     img: "/residuos/cables.webp",
//     href: "/guia/electronicos",
//   },
//   {
//     name: "Celular",
//     img: "/residuos/celular.webp",
//     href: "/guia/electronicos",
//   },
//   {
//     name: "Discos de vinilo",
//     img: "/residuos/discos.webp",
//     href: "/guia/electronicos",
//   },
//   {
//     name: "Focos",
//     img: "/residuos/focos.webp",
//     href: "/guia/electronicos",
//   },
//   {
//     name: "Llantas",
//     img: "/residuos/llantas.webp",
//     href: "/guia/electronicos",
//   },
//   {
//     name: "Medicina",
//     img: "/residuos/medicina.webp",
//     href: "/guia/electronicos",
//   },
// ];
export const reciclables = [
  {
    slug: "maderas",
    name: "Madera",
    img: "/residuos/madera.jpg",
    type: "reciclable",
    description:
      "La madera se puede reutilizar o reciclar si está limpia y seca.",
    reutilizacion: {
      descripcion:
        "Puedes hacer muebles pequeños, decorar paredes o crear compost.",
      images: ["/reutilizacion/carton1.jpg", "/reutilizacion/carton2.jpg"],
    },
  },
  {
    slug: "bolsas",
    name: "Bolsas reutilizables (PP)",
    img: "/residuos/bolso.webp",
    type: "reciclable",
    description:
      "Este tipo de bolsas pueden reutilizarse múltiples veces y luego reciclarse.",
    reutilizacion: {
      descripcion:
        "Puedes hacer muebles pequeños, decorar paredes o crear compost.",
      images: ["/reutilizacion/carton1.jpg", "/reutilizacion/carton2.jpg"],
    },
  },
  {
    slug: "chatarra",
    name: "Chatarra",
    img: "/residuos/chatarra.png",
    type: "reciclable",
    description:
      "La chatarra metálica es reciclable y muy valiosa en centros de acopio.",
    reutilizacion: {
      descripcion:
        "Puedes hacer muebles pequeños, decorar paredes o crear compost.",
      images: ["/reutilizacion/carton1.jpg", "/reutilizacion/carton2.jpg"],
    },
  },
  {
    slug: "vidrio",
    name: "Vidrio",
    img: "/residuos/vidrio.webp",
    type: "reciclable",
    description: "El vidrio es 100% reciclable y no pierde calidad.",
    reutilizacion: {
      descripcion:
        "Puedes hacer muebles pequeños, decorar paredes o crear compost.",
      images: ["/reutilizacion/carton1.jpg", "/reutilizacion/carton2.jpg"],
    },
  },
  {
    slug: "carton",
    name: "Cartón",
    img: "/residuos/carton.webp",
    type: "reciclable",
    description: "Reciclar cartón ahorra árboles y energía.",
    reutilizacion: {
      descripcion:
        "Puedes hacer muebles pequeños, decorar paredes o crear compost.",
      images: ["/reutilizacion/carton1.jpg", "/reutilizacion/carton2.jpg"],
    },
  },
  {
    slug: "revistas",
    name: "Revistas",
    img: "/residuos/revistas.png",
    type: "reciclable",
    description: "Las revistas deben estar secas y limpias para reciclarse.",
    reutilizacion: {
      descripcion:
        "Puedes hacer muebles pequeños, decorar paredes o crear compost.",
      images: ["/reutilizacion/carton1.jpg", "/reutilizacion/carton2.jpg"],
    },
  },
  {
    slug: "pet",
    name: "PET",
    img: "/residuos/pet.webp",
    type: "reciclable",
    description: "El PET es reciclado en textiles, botellas y otros productos.",
    reutilizacion: {
      descripcion:
        "Puedes hacer muebles pequeños, decorar paredes o crear compost.",
      images: ["/reutilizacion/carton1.jpg", "/reutilizacion/carton2.jpg"],
    },
  },
  {
    slug: "hdpe",
    name: "HDPE",
    img: "/residuos/hdpe.webp",
    type: "reciclable",
    description: "El HDPE es un plástico duro común en envases de limpieza.",
    reutilizacion: {
      descripcion:
        "Puedes hacer muebles pequeños, decorar paredes o crear compost.",
      images: ["/reutilizacion/carton1.jpg", "/reutilizacion/carton2.jpg"],
    },
  },
  {
    slug: "bolsas-plastico",
    name: "Bolsas de plástico",
    img: "/residuos/bolsas-plastico.webp",
    type: "reciclable",
    description: "Las bolsas deben estar limpias y secas para su reciclaje.",
    reutilizacion: {
      descripcion:
        "Puedes hacer muebles pequeños, decorar paredes o crear compost.",
      images: ["/reutilizacion/carton1.jpg", "/reutilizacion/carton2.jpg"],
    },
  },
  {
    slug: "lata",
    name: "Lata",
    img: "/residuos/lataa.webp",
    type: "reciclable",
    description: "Las latas de aluminio son 100% reciclables.",
    reutilizacion: {
      descripcion:
        "Puedes hacer muebles pequeños, decorar paredes o crear compost.",
      images: ["/reutilizacion/carton1.jpg", "/reutilizacion/carton2.jpg"],
    },
  },
  {
    slug: "papel",
    name: "Papel",
    img: "/residuos/papel.webp",
    type: "reciclable",
    description:
      "El papel puede reciclarse si no está sucio con grasa o líquidos.",
    reutilizacion: {
      descripcion:
        "Puedes hacer muebles pequeños, decorar paredes o crear compost.",
      images: ["/reutilizacion/carton1.jpg", "/reutilizacion/carton2.jpg"],
    },
  },
  {
    slug: "periodico",
    name: "Periódico",
    img: "/residuos/periodico.webp",
    type: "reciclable",
    description: "Los periódicos limpios se reciclan fácilmente.",
    reutilizacion: {
      descripcion:
        "Puedes hacer muebles pequeños, decorar paredes o crear compost.",
      images: ["/reutilizacion/carton1.jpg", "/reutilizacion/carton2.jpg"],
    },
  },
];

export const manejoEspecial = [
  // Manejo especial
  {
    slug: "pilas",
    name: "Pilas",
    img: "/residuos/pilas.webp",
    type: "especial",
    description:
      "Las pilas contienen metales tóxicos y deben tratarse adecuadamente.",
    reutilizacion: {
      descripcion:
        "Puedes hacer muebles pequeños, decorar paredes o crear compost.",
      images: ["/reutilizacion/carton1.jpg", "/reutilizacion/carton2.jpg"],
    },
  },
  {
    slug: "baterias",
    name: "Baterias",
    img: "/residuos/bateria.webp",
    type: "especial",
    description: "Las baterías requieren un punto limpio para su disposición.",
    reutilizacion: {
      descripcion:
        "Puedes hacer muebles pequeños, decorar paredes o crear compost.",
      images: ["/reutilizacion/carton1.jpg", "/reutilizacion/carton2.jpg"],
    },
  },
  {
    slug: "aceite",
    name: "Aceite usado",
    img: "/residuos/aceite.webp",
    type: "especial",
    description: "Nunca tires aceite por el desagüe; puede reciclarse.",
    reutilizacion: {
      descripcion:
        "Puedes hacer muebles pequeños, decorar paredes o crear compost.",
      images: ["/reutilizacion/carton1.jpg", "/reutilizacion/carton2.jpg"],
    },
  },
  {
    slug: "electronicos",
    name: "Residuos electrónicos",
    img: "/residuos/electronicos.webp",
    type: "especial",
    description:
      "Los electrónicos deben reciclarse para recuperar metales y evitar contaminación.",
    reutilizacion: {
      descripcion:
        "Puedes hacer muebles pequeños, decorar paredes o crear compost.",
      images: ["/reutilizacion/carton1.jpg", "/reutilizacion/carton2.jpg"],
    },
  },
  {
    slug: "cables",
    name: "Cables",
    img: "/residuos/cables.webp",
    type: "especial",
    description: "Los cables contienen cobre valioso y pueden reciclarse.",
    reutilizacion: {
      descripcion:
        "Puedes hacer muebles pequeños, decorar paredes o crear compost.",
      images: ["/reutilizacion/carton1.jpg", "/reutilizacion/carton2.jpg"],
    },
  },
  {
    slug: "celulares",
    name: "Celular",
    img: "/residuos/celular.webp",
    type: "especial",
    description: "Los celulares pueden ser reciclados o donados.",
    reutilizacion: {
      descripcion:
        "Puedes hacer muebles pequeños, decorar paredes o crear compost.",
      images: ["/reutilizacion/carton1.jpg", "/reutilizacion/carton2.jpg"],
    },
  },
  {
    slug: "discos",
    name: "Discos de vinilo",
    img: "/residuos/discos.webp",
    type: "especial",
    description:
      "No reciclables tradicionalmente; deben donarse o manejarse con cuidado.",
    reutilizacion: {
      descripcion:
        "Puedes hacer muebles pequeños, decorar paredes o crear compost.",
      images: ["/reutilizacion/carton1.jpg", "/reutilizacion/carton2.jpg"],
    },
  },
  {
    slug: "foco",
    name: "Focos",
    img: "/residuos/focos.webp",
    type: "especial",
    description:
      "Los focos contienen mercurio y deben desecharse en puntos específicos.",
    reutilizacion: {
      descripcion:
        "Puedes hacer muebles pequeños, decorar paredes o crear compost.",
      images: ["/reutilizacion/carton1.jpg", "/reutilizacion/carton2.jpg"],
    },
  },
  {
    slug: "llantas",
    name: "Llantas",
    img: "/residuos/llantas.webp",
    type: "especial",
    description: "Las llantas pueden reciclarse o reutilizarse.",
    reutilizacion: {
      descripcion:
        "Puedes hacer muebles pequeños, decorar paredes o crear compost.",
      images: ["/reutilizacion/carton1.jpg", "/reutilizacion/carton2.jpg"],
    },
  },
  {
    slug: "medicina",
    name: "Medicina",
    img: "/residuos/medicina.webp",
    type: "especial",
    description:
      "No deben tirarse a la basura ni al WC; llévalas a un punto limpio.",
    reutilizacion: {
      descripcion:
        "Puedes hacer muebles pequeños, decorar paredes o crear compost.",
      images: ["/reutilizacion/carton1.jpg", "/reutilizacion/carton2.jpg"],
    },
  },
];
