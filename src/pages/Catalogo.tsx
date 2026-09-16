import { categories, categoryImages } from "../data/catalog";

type Props = {
  openCategory: (category: string) => void;
};

export default function Catalogo({ openCategory }: Props) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-2xl">
        <h1 className="font-serif text-3xl sm:text-4xl text-[#2e1e1c]">
          Nuestro Catálogo
        </h1>
        <p className="text-[#6b5a58] text-sm sm:text-base mt-2">
          Colecciones botánicas exclusivas para transmitir emociones
          inolvidables. Elige una categoría para ver sus arreglos.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mt-8">
        {categories.map((c) => (
          <button
            key={c.name}
            onClick={() => openCategory(c.name)}
            className="text-left group bg-white rounded-2xl overflow-hidden border border-[#efebe9] hover:shadow-md transition-shadow"
          >
            <div className="aspect-[4/3] relative overflow-hidden bg-[#fdfbfa]">
              <img
                alt={c.name}
                className="absolute inset-0 size-full object-cover group-hover:scale-105 transition-transform duration-300"
                src={categoryImages[c.name]}
              />
            </div>
            <div className="p-4 sm:p-5 flex items-center justify-between gap-2">
              <div>
                <p className="font-serif text-lg sm:text-xl text-[#2e1e1c] leading-snug">
                  {c.name}
                </p>
                <p className="text-xs text-[#6b5a58] mt-1">{c.price}</p>
              </div>
              <span className="text-[#5f7d6b] text-xl shrink-0" aria-hidden>
                →
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}