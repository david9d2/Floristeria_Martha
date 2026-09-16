export type ProductItem = { name: string; price: string; img: string };

export const categories = [
  { name: "Ramos", price: "Desde $45.00" },
  { name: "Arreglos con chocolate", price: "Desde $65.00" },
  { name: "Ocasiones especiales", price: "Desde $85.00" },
  { name: "Arreglos fúnebres", price: "Desde $120.00" },
  { name: "Venta al por mayor", price: "Desde $180.00" },
];

const img = {
  r1: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600",
  r2: "https://images.unsplash.com/photo-1644745547446-f04a49a3693f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600",
  r3: "https://images.unsplash.com/photo-1521543832500-49e69fb2bea2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600",
  r4: "https://images.unsplash.com/photo-1567428051128-5f09a0200655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600",
  r5: "https://images.unsplash.com/photo-1565695951564-007d8f297e48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600",
};

export const categoryImages: Record<string, string> = {
  "Ramos": img.r1,
  "Arreglos con chocolate": img.r2,
  "Ocasiones especiales": img.r3,
  "Arreglos fúnebres": img.r4,
  "Venta al por mayor": img.r5,
};

export const itemsByCategory: Record<string, ProductItem[]> = {
  "Ramos": [
    { name: "Ramo de Rosas Clásico", price: "$45.00", img: img.r1 },
    { name: "Bouquet Primaveral", price: "$58.00", img: img.r2 },
    { name: "Ramo de Girasoles Radiante", price: "$49.00", img: img.r3 },
    { name: "Ramo Silvestre de Autor", price: "$62.00", img: img.r4 },
  ],
  "Arreglos con chocolate": [
    { name: "Caja con Rosas y Chocolates", price: "$65.00", img: img.r2 },
    { name: "Combo Corazón Dulce", price: "$72.00", img: img.r5 },
    { name: "Rosas, Chocolate y Peluche", price: "$78.00", img: img.r3 },
    { name: "Canasta Gourmet Floral", price: "$85.00", img: img.r4 },
  ],
  "Ocasiones especiales": [
    { name: "Florero de Cumpleaños", price: "$52.00", img: img.r3 },
    { name: "Combo Aniversario Rosas Perfectas", price: "$85.00", img: img.r1 },
    { name: "Detalle con Amor", price: "$55.00", img: img.r4 },
    { name: "Ramo Felicidades", price: "$60.00", img: img.r5 },
  ],
  "Arreglos fúnebres": [
    { name: "Corona de Lirios Blancos", price: "$95.00", img: img.r4 },
    { name: "Cruz Floral Presencial", price: "$120.00", img: img.r5 },
    { name: "Centro de Condolencia", price: "$110.00", img: img.r2 },
    { name: "Arreglo de Despedida", price: "$105.00", img: img.r3 },
  ],
  "Venta al por mayor": [
    { name: "Capítulo de Rosas (50)", price: "$180.00", img: img.r1 },
    { name: "Surtido de Gerberas (100)", price: "$220.00", img: img.r2 },
    { name: "Fardo Mixto de Temporada", price: "$210.00", img: img.r3 },
    { name: "Claveles Mayorista (200)", price: "$240.00", img: img.r5 },
  ],
};