export type ProductItem = { name: string; price: string; priceNum: number; img: string };

const raw = import.meta.glob("/src/data/Catalogo/**/*.jpg", { eager: true });

type Entry = { folder: string; num: number; url: string };

const entries: Entry[] = Object.keys(raw).map((path) => {
  const parts = path.split("/");
  return {
    folder: parts[parts.length - 2] ?? "",
    num: Number.parseInt(
      (parts[parts.length - 1] ?? "").match(/\d+/)?.[0] ?? "0",
      10,
    ),
    url: (raw[path] as { default?: string }).default ?? "",
  };
});

const imgs = (folder: string) =>
  entries
    .filter((e) => e.folder === folder)
    .sort((a, b) => a.num - b.num)
    .map((e) => e.url);

export const categories = [
  { name: "Ramos", price: "Desde L 1,200" },
  { name: "Arreglos con Chocolates", price: "Desde L 1,700" },
  { name: "Arreglos Especiales", price: "Desde L 2,200" },
  { name: "Arreglos Fúnebres", price: "Desde L 3,100" },
  { name: "Venta al Por Mayor", price: "Desde L 4,700" },
];

export const categoryImages: Record<string, string> = {
  "Ramos": imgs("Ramos")[0],
  "Arreglos con Chocolates": imgs("Arreglos con Chocolates")[0],
  "Arreglos Especiales": imgs("Arreglos Especiales")[0],
  "Arreglos Fúnebres": imgs("Arreglos Funebres")[0],
  "Venta al Por Mayor": imgs("Por Mayor")[0],
};

export const itemsByCategory: Record<string, ProductItem[]> = {
  "Ramos": [
    { name: "Ramo de Rosas Clásico", price: "L 1,200", priceNum: 1200, img: imgs("Ramos")[0] },
    { name: "Bouquet Primaveral", price: "L 1,450", priceNum: 1450, img: imgs("Ramos")[1] },
    { name: "Ramo de Girasoles Radiante", price: "L 1,300", priceNum: 1300, img: imgs("Ramos")[2] },
    { name: "Ramo Silvestre de Autor", price: "L 1,600", priceNum: 1600, img: imgs("Ramos")[3] },
    { name: "Ramo de Tulipanes Frescos", price: "L 1,700", priceNum: 1700, img: imgs("Ramos")[4] },
  ],
  "Arreglos con Chocolates": [
    { name: "Caja con Rosas y Chocolates", price: "L 1,700", priceNum: 1700, img: imgs("Arreglos con Chocolates")[0] },
    { name: "Combo Corazón Dulce", price: "L 1,950", priceNum: 1950, img: imgs("Arreglos con Chocolates")[1] },
    { name: "Rosas, Chocolate y Peluche", price: "L 2,100", priceNum: 2100, img: imgs("Arreglos con Chocolates")[2] },
    { name: "Canasta Gourmet Floral", price: "L 2,300", priceNum: 2300, img: imgs("Arreglos con Chocolates")[3] },
    { name: "Arreglo de Rosas con Toffee", price: "L 1,900", priceNum: 1900, img: imgs("Arreglos con Chocolates")[4] },
  ],
  "Arreglos Especiales": [
    { name: "Florero de Cumpleaños", price: "L 2,200", priceNum: 2200, img: imgs("Arreglos Especiales")[0] },
    { name: "Combo Aniversario Rosas Perfectas", price: "L 2,600", priceNum: 2600, img: imgs("Arreglos Especiales")[1] },
    { name: "Detalle con Amor", price: "L 2,300", priceNum: 2300, img: imgs("Arreglos Especiales")[2] },
    { name: "Arreglo Elegante Jardín", price: "L 2,450", priceNum: 2450, img: imgs("Arreglos Especiales")[3] },
    { name: "Centro de Mesa Premium", price: "L 2,800", priceNum: 2800, img: imgs("Arreglos Especiales")[4] },
  ],
  "Arreglos Fúnebres": [
    { name: "Corona de Lirios Blancos", price: "L 3,100", priceNum: 3100, img: imgs("Arreglos Funebres")[0] },
    { name: "Cruz Floral Presencial", price: "L 3,500", priceNum: 3500, img: imgs("Arreglos Funebres")[1] },
    { name: "Centro de Condolencia", price: "L 3,300", priceNum: 3300, img: imgs("Arreglos Funebres")[2] },
    { name: "Arreglo de Despedida", price: "L 3,200", priceNum: 3200, img: imgs("Arreglos Funebres")[3] },
    { name: "Escudo Floral con Cintas", price: "L 3,400", priceNum: 3400, img: imgs("Arreglos Funebres")[4] },
  ],
  "Venta al Por Mayor": [
    { name: "Capítulo de Rosas (50)", price: "L 4,700", priceNum: 4700, img: imgs("Por Mayor")[0] },
    { name: "Surtido de Gerberas (100)", price: "L 5,200", priceNum: 5200, img: imgs("Por Mayor")[1] },
    { name: "Fardo Mixto de Temporada", price: "L 5,500", priceNum: 5500, img: imgs("Por Mayor")[2] },
    { name: "Claveles Mayorista (200)", price: "L 5,800", priceNum: 5800, img: imgs("Por Mayor")[3] },
    { name: "Paquete de Girasoles (100)", price: "L 6,000", priceNum: 6000, img: imgs("Por Mayor")[4] },
  ],
};