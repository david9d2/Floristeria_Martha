const storeImg =
  "https://images.unsplash.com/photo-1639696194673-67b86204b885?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080";

const badges = [
  { label: "100% Frescas", cls: "bg-[#eff2f0] text-[#5f7d6b]" },
  { label: "Hecho a Mano", cls: "bg-[#f8ebef] text-[#2e1e1c]" },
  { label: "Diseño de Autor", cls: "bg-[#ece9f0] text-[#a195b8]" },
];

export default function Nosotros() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-3xl">
        <h1 className="font-serif text-3xl sm:text-4xl text-[#2e1e1c]">
          Sobre Nosotros
        </h1>
        <p className="text-[#6b5a58] text-sm sm:text-base mt-2">
          El arte de contar historias a través de las flores.
        </p>
      </div>

      <div className="rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] relative mt-8">
        <img
          alt="Nuestra tienda"
          className="absolute inset-0 size-full object-cover"
          src={storeImg}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#2e1e1c]">
            Atención Personalizada y Cuidado en Cada Detalle
          </h2>
          <p className="text-[#6b5a58] text-sm sm:text-base leading-relaxed mt-4">
            En Floristería Martha creemos que cada arreglo cuenta un relato
            único. Nos especializamos en brindar una atención cercana y
            detallada, ayudándote a seleccionar la combinación perfecta para
            cada espacio y sentimiento.
          </p>
          <p className="text-[#6b5a58] text-sm sm:text-base leading-relaxed mt-4">
            Nuestro servicio de entrega a domicilio garantiza que las flores
            lleguen con la frescura intacta y una presentación impecable directo
            a la puerta de ese ser querido.
          </p>
        </div>
        <div className="flex flex-wrap content-start gap-2.5">
          {badges.map((b) => (
            <span
              key={b.label}
              className={`${b.cls} font-semibold text-xs px-4 py-2 rounded-full`}
            >
              {b.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}