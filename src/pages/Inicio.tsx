import type { Page } from "../App";
import { categories, categoryImages } from "../data/catalog";

type Props = {
  onNavigate: (page: Page) => void;
  openCategory: (category: string) => void;
};

const heroImg =
  "https://latinflores.com/cdn/shop/files/SonrisaenPetalos.jpg?v=1746978115&width=990";

const steps = [
  {
    n: "01",
    title: "Elige tus flores",
    text: "Explora nuestras colecciones y selecciona el arreglo perfecto para tu ocasión.",
  },
  {
    n: "02",
    title: "Personaliza tu pedido",
    text: "Agrega una dedicatoria, chocolate o detalles especiales con nuestra ayuda.",
  },
  {
    n: "03",
    title: "Recíbelo a domicilio",
    text: "Entregamos con estilo y puntualidad directo a la puerta de tu ser querido.",
  },
];

export default function Inicio({ onNavigate, openCategory }: Props) {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-[#f8ebef] border border-[#e6b0b8] text-[#2e1e1c] text-xs font-semibold px-3.5 py-1.5 rounded-full">
              <svg className="size-4" fill="none" viewBox="0 0 16 16">
                <path d="M2 8.5V4.5C2 3.95 2.45 3.5 3 3.5H11V10H3C2.45 10 2 9.55 2 9V8.5Z" stroke="#5F7D6B" strokeLinejoin="round" strokeWidth="1.5" />
                <path d="M11 5H13L15 7.5V10H15.5M11 10H15M6 10V10.5M10 10V10.5" stroke="#5F7D6B" strokeLinecap="round" strokeWidth="1.5" />
              </svg>
              Entrega a domicilio disponible
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-[#2e1e1c] mt-5">
              Floristería exclusiva para momentos memorables
            </h1>
            <p className="text-[#6b5a58] mt-5 text-sm sm:text-base leading-relaxed max-w-md">
              Diseños florales de autor confeccionados con las especies más finas
              y frescas de la temporada.
            </p>
            <button
              onClick={() => onNavigate("catalogo")}
              className="mt-8 bg-[#5f7d6b] text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#4e6a58] transition-colors"
            >
              Ver Catálogo Floral
            </button>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3] relative shadow-sm">
            <img
              alt="Ramo de flores frescas de la temporada"
              className="absolute inset-0 size-full object-cover"
              src={heroImg}
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2e1e1c]">
                Colecciones destacadas
              </h2>
              <p className="text-[#6b5a58] text-sm mt-2">
                Descubre los favoritos de nuestros clientes.
              </p>
            </div>
            <button
              onClick={() => onNavigate("catalogo")}
              className="hidden sm:inline-flex text-[#5f7d6b] text-sm font-semibold hover:underline"
            >
              Ver todo
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {categories.slice(0, 3).map((c) => (
              <button
                key={c.name}
                onClick={() => openCategory(c.name)}
                className="text-left group"
              >
                <div className="rounded-2xl overflow-hidden aspect-[4/3] relative bg-[#fdfbfa]">
                  <img
                    alt={c.name}
                    className="absolute inset-0 size-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src={categoryImages[c.name]}
                  />
                </div>
                <p className="font-serif text-lg sm:text-xl mt-3 text-[#2e1e1c] leading-snug">
                  {c.name}
                </p>
                <p className="text-[#5f7d6b] text-xs font-semibold mt-1">
                  {c.price}
                </p>
              </button>
            ))}
            <button
              onClick={() => onNavigate("catalogo")}
              className="hidden md:flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#efebe9] aspect-[4/3] hover:border-[#5f7d6b] transition-colors"
            >
              <span className="font-serif text-2xl text-[#5f7d6b]">
                Ver catálogo
              </span>
              <span className="text-xs text-[#6b5a58] mt-1">
                Todas nuestras colecciones
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#f8ebef]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-center text-[#2e1e1c]">
            ¿Cómo funciona?
          </h2>
          <p className="text-center text-[#6b5a58] text-sm mt-2 mb-10">
            Pedir tus flores es muy sencillo.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.n} className="text-center">
                <p className="font-serif text-5xl text-[#5f7d6b]">{s.n}</p>
                <h3 className="font-semibold text-[#2e1e1c] mt-3">{s.title}</h3>
                <p className="text-sm text-[#6b5a58] mt-2 leading-relaxed">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2e1e1c]">
            Arte y elegancia botánica
          </h2>
          <p className="text-[#6b5a58] text-sm sm:text-base leading-relaxed mt-4">
            Floristería Martha lleva desde 2010 convirtiendo sentimientos en
            arreglos inolvidables. Trabajamos con flores importadas de primera
            calidad y un diseño que se adapta a cada emoción.
          </p>
          <button
            onClick={() => onNavigate("nosotros")}
            className="mt-7 inline-flex border-2 border-[#5f7d6b] text-[#5f7d6b] font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-[#5f7d6b] hover:text-white transition-colors"
          >
            Conoce más de nosotros
          </button>
        </div>
      </section>
    </div>
  );
}