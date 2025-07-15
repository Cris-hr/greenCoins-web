export const reciclables = [
  {
    slug: "woods",
    name: "Wood",
    img: "/residuos/madera.jpg",
    type: "reciclable",
    description: "The wood can be reused or recycled if it is clean and dry.",
    reutilizacion: {
      descripcion:
        "You can make small furniture, decorate walls or create compost.",
      images: ["/manualidad/madera11.jpeg", "/manualidad/madera12.jpg"],
    },
  },
  {
    slug: "bags",
    name: "Reusable bags (PP)",
    img: "/residuos/bolso.webp",
    type: "reciclable",
    description:
      "This type of bag can be reused multiple times and then recycled.",
    reutilizacion: {
      descripcion: "You can make wall decorations or cover pencil holders.",
      images: ["/manualidad/bolso11.jpg", "/manualidad/bolso12.jpg"],
    },
  },
  {
    slug: "scrap",
    name: "Scrap",
    img: "/residuos/chatarra.png",
    type: "reciclable",
    description:
      "Scrap metal is recyclable and very valuable in collection centers.",
    reutilizacion: {
      descripcion: "You can make from small to large original handicrafts.",
      images: ["/manualidad/chatarra11.jpg", "/manualidad/chatarra12.jpg"],
    },
  },
  {
    slug: "glass",
    name: "Glass",
    img: "/residuos/vidrio.webp",
    type: "reciclable",
    description: "Glass is 100% recyclable and does not lose quality.",
    reutilizacion: {
      descripcion:
        "You can make pots for plants or sailboats to decorate a dinner party or a spa.",
      images: ["/manualidad/vidrio.jpg", "/manualidad/vidrio12.webp"],
    },
  },
  {
    slug: "cardboard",
    name: "Cardboard",
    img: "/residuos/carton.webp",
    type: "reciclable",
    description: "Recycling cardboard saves trees and energy.",
    reutilizacion: {
      descripcion:
        "You can make cat house, pen holder and other decorative items.",
      images: ["/manualidad/carton11.jpeg", "/manualidad/carton12.jpg"],
    },
  },
  {
    slug: "magazines",
    name: "Magazines",
    img: "/residuos/revistas.png",
    type: "reciclable",
    description: "Magazines must be dry and clean in order to be recycled.",
    reutilizacion: {
      descripcion:
        "You can make decorative ornaments for parties, decorate drawers and much more.",
      images: ["/manualidad/revistas11.jpg", "/manualidad/revistas12.jpg"],
    },
  },
  {
    slug: "pet",
    name: "PET",
    img: "/residuos/pet.webp",
    type: "reciclable",
    description: "PET is recycled into textiles, bottles, and other products.",
    reutilizacion: {
      descripcion:
        "You can make crafts for school, pots for plants, among others..",
      images: ["/manualidad/pet.jpeg", "/manualidad/pet12.jpeg"],
    },
  },
  {
    slug: "hdpe",
    name: "HDPE",
    img: "/residuos/hdpe.webp",
    type: "reciclable",
    description: "HDPE is a common hard plastic used in cleaning containers.",
    reutilizacion: {
      descripcion:
        "You can make decorations for school, pencil holders, cleaning utensils, among others.",
      images: ["/manualidad/hdpe11.jpg", "/manualidad/hdpe12.jpg"],
    },
  },
  {
    slug: "plastic-bags",
    name: "Plastic bags",
    img: "/residuos/bolsas-plastico.webp",
    type: "reciclable",
    description: "The bags must be clean and dry for recycling.",
    reutilizacion: {
      descripcion:
        "You can knit wallets and purses, make handicrafts such as flowers, roses, etc.",
      images: [
        "/manualidad/bolsa-plastico11.jpg",
        "/manualidad/bolsa-plastico12.jpg",
      ],
    },
  },
  {
    slug: "can",
    name: "Can",
    img: "/residuos/lataa.webp",
    type: "reciclable",
    description: "Aluminum cans are 100% recyclable.",
    reutilizacion: {
      descripcion:
        "You can make pencil holders, wall decorations, sugar bowls, etc.",
      images: ["/manualidad/lata11.jpg", "/manualidad/lata12.jpg"],
    },
  },
  {
    slug: "paper",
    name: "Paper",
    img: "/residuos/papel.webp",
    type: "reciclable",
    description:
      "Paper can be recycled if it is not soiled with grease or liquids.",
    reutilizacion: {
      descripcion:
        "You can make decorations for parties, school crafts and more..",
      images: ["/manualidad/papel11.jpg", "/manualidad/papel12.webp"],
    },
  },
  {
    slug: "newspaper",
    name: "Newspaper",
    img: "/residuos/periodico.webp",
    type: "reciclable",
    description: "Clean newspapers are easily recycled.",
    reutilizacion: {
      descripcion:
        "You can make gift bags, crafts such as a wall clock, among others..",
      images: ["/manualidad/periodico11.jpg", "/manualidad/periodico12.jpg"],
    },
  },
];

export const manejoEspecial = [
  // Manejo especial
  {
    slug: "batteries",
    name: "Batteries",
    img: "/residuos/pilas.webp",
    type: "especial",
    description:
      "Batteries contain toxic metals and must be properly treated..",
    reutilizacion: {
      descripcion:
        "You can make Christmas tree decorations, table decorations, among others..",
      images: ["/manualidad/pilas.jpg", "/manualidad/pilas2.avif"],
    },
  },
  {
    slug: "batteries",
    name: "Batteries",
    img: "/residuos/bateria.webp",
    type: "especial",
    description: "Batteries require a clean point for disposal.",
    reutilizacion: {
      descripcion:
        "Batteries require special treatment and care, you should take them to authorized recycling points.",
      images: ["/manualidad/bateria11.webp", "/manualidad/bateria12.jpg"],
    },
  },
  {
    slug: "used-oil",
    name: "Used oil",
    img: "/residuos/aceite.webp",
    type: "especial",
    description: "Never pour oil down the drain; it can be recycled.",
    reutilizacion: {
      descripcion:
        "Used oil should not be disposed of just anywhere, it requires special treatment and should be taken to authorized points.",
      images: ["/manualidad/aceite11.jpg", "/manualidad/aceite12.jpg"],
    },
  },
  {
    slug: "electronic-waste",
    name: "Electronic waste",
    img: "/residuos/electronicos.webp",
    type: "especial",
    description:
      "Electronics must be recycled to recover metals and avoid contamination.",
    reutilizacion: {
      descripcion:
        "You can make pencil holders and handicrafts with parts of electronic equipment.",
      images: [
        "/manualidad/electronicos11.jpg",
        "/manualidad/electronicos12.jpg",
      ],
    },
  },
  {
    slug: "wires",
    name: "wires",
    img: "/residuos/cables.webp",
    type: "especial",
    description: "Cables contain valuable copper and can be recycled.",
    reutilizacion: {
      descripcion: "You can make various handicrafts, as well as knit chairs..",
      images: ["/manualidad/cables11.webp", "/manualidad/cables12.jpg"],
    },
  },
  {
    slug: "cell-phones",
    name: "Cell phones",
    img: "/residuos/celular.webp",
    type: "especial",
    description: "Cell phones can be recycled or donated.",
    reutilizacion: {
      descripcion:
        "Cell phones must be recycled in authorized points for special treatment.",
      images: ["/manualidad/celular11.jpg", "/manualidad/celular12.avif"],
    },
  },
  {
    slug: "discs",
    name: "Vinyl discs",
    img: "/residuos/discos.webp",
    type: "especial",
    description:
      "Not traditionally recyclable; should be donated or handled with care.",
    reutilizacion: {
      descripcion: "You can make wall decorations, table decorations, etc.",
      images: ["/manualidad/disco11.webp", "/manualidad/disco12.jpg"],
    },
  },
  {
    slug: "light-bulb",
    name: "Light bulbs",
    img: "/residuos/focos.webp",
    type: "especial",
    description:
      "The bulbs contain mercury and must be disposed of at specific points.",
    reutilizacion: {
      descripcion:
        "You can make decorations to decorate home environments such as the living room, bedroom or office.",
      images: ["/manualidad/foco11.jpg", "/manualidad/foco12.webp"],
    },
  },
  {
    slug: "tires",
    name: "Tires",
    img: "/residuos/llantas.webp",
    type: "especial",
    description: "Tires can be recycled or reused.",
    reutilizacion: {
      descripcion:
        "You can make flower pots, children's games, chicken feeders, etc.",
      images: ["/manualidad/llanta11.webp", "/manualidad/llanta12.jpg"],
    },
  },
  {
    slug: "medicine",
    name: "Medicine",
    img: "/residuos/medicina.webp",
    type: "especial",
    description:
      "They should not be thrown in the garbage, they should be taken to a clean point..",
    reutilizacion: {
      descripcion: "Medicine bottles can also be used for handicrafts.",
      images: ["/manualidad/medicina11.avif", "/manualidad/medicina12.jpg"],
    },
  },
];
