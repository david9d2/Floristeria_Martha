import { categories, categoryImages, itemsByCategory } from "../data/catalog";

type Props = {
  category: string;
  onBack: () => void;
};

export default function Categoria({ category, onBack }: Props) {
  const items = itemsByCategory[category] ?? [];
  const price = categories.find((c) => c.name === category)?.price ?? "";

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={onBack}
          className="bg-[#eff2f0] size-10 rounded-full flex items-center justify-center hover:bg-[#e3e9e5] transition-colors"
          aria-label="Volver al catálogo"
        >
          <svg
            className="size-5"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              d="M11 4L6 9L11 14"
              stroke="#5F7D6B"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#2e1e1c]">
            {category}
          </h1>
          <p className="text-xs font-semibold text-[#5f7d6b] mt-1">{price}</p>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] relative max-w-3xl mb-6">
        <img
          alt={category}
          className="absolute inset-0 size-full object-cover"
          src={categoryImages[category]}
        />
      </div>
      <p className="text-[#6b5a58] text-sm mb-8">
        Selecciona el arreglo que más te guste y pídelo por WhatsApp.
      </p>

      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        {items.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-2xl overflow-hidden border border-[#efebe9] flex flex-col"
          >
            <div className="aspect-square relative bg-[#fdfbfa]">
              <img
                alt={item.name}
                className="absolute inset-0 size-full object-cover"
                src={item.img}
              />
            </div>
            <div className="p-3 sm:p-5 flex flex-col flex-1">
              <p className="font-serif text-base sm:text-lg text-[#2e1e1c] leading-snug">
                {item.name}
              </p>
              <p className="text-[#5f7d6b] font-semibold text-sm mt-1">
                {item.price}
              </p>
              <a
                href="https://wa.me/50400000000?text=Hola,%20quiero%20pedir:%20"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex w-full items-center justify-center bg-[#5f7d6b] text-white text-xs font-semibold py-2.5 rounded-full hover:bg-[#4e6a58] transition-colors"
              >
                Pedir por WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}