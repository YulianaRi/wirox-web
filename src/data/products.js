// image: nombre del archivo en public/images (o null para mostrar el espacio de foto).
export const WA_NUMBER = "51931097656";

export const categories = [
  { name: "Acrílico", color: "#19a7e6", on: "#fff" },
  { name: "Medallas", color: "#f5c400", on: "#1b1e27" },
  { name: "Llaveros", color: "#1fa34a", on: "#fff" },
  { name: "Sellos", color: "#e32636", on: "#fff" },
  { name: "Accesorios", color: "#f28c28", on: "#1b1e27" },
  { name: "A medida", color: "#2e3192", on: "#fff" },
];

export const img = (file) => `${import.meta.env.BASE_URL}images/${file}`;

export const products = [
  {
    name: "Medallas para colegios",
    category: "Medallas",
    text: "Plateadas y doradas, con cinta.",
    image: img("medallas.jpg"),
  },
  {
    name: "Láminas de acrílico, media plancha",
    category: "Acrílico",
    text: "Cortes por media plancha, por mayor y menor.",
    image: null,
  },
  {
    name: "Porta hojas A4",
    category: "Acrílico",
    text: "Formato A4 vertical para mostrador y oficina.",
    image: null,
  },
  {
    name: "Argollas doradas para llaveros",
    category: "Llaveros",
    text: "Argolla con cadena, acabado dorado.",
    image: img("argollas-doradas.jpg"),
  },
  {
    name: "Argollas plateadas para llaveros",
    category: "Llaveros",
    text: "Argolla con cadena, varios modelos.",
    image: img("argollas-plateadas.jpg"),
  },
  {
    name: "Elevadores de acero inox satinado",
    category: "Accesorios",
    text: "Para fijar placas y paneles.",
    image: img("elevadores.jpg"),
  },
  {
    name: "Puños y madera para sellos",
    category: "Sellos",
    text: "De plástico y madera, en diferentes tamaños.",
    image: img("sellos.jpg"),
  },
  {
    name: "Trabajos a medida",
    category: "A medida",
    text: "Placas, trofeos y piezas según tu idea.",
    image: null,
  },
];
