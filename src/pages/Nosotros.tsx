import svgPaths from "../../imports/svg-n9o7ojjqwr"

type Props = { onNavigate: (page: string) => void; currentPage: string }

const storeImg =
  "https://images.unsplash.com/photo-1639696194673-67b86204b885?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"

function IosSignal() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="20"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
        width="20"
      >
        <g>
          <path
            clipRule="evenodd"
            d={svgPaths.p2bb6eb80}
            fill="#2E1E1C"
            fillRule="evenodd"
          />
        </g>
      </svg>
    </div>
  )
}

function IosWifiSignal() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="20"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
        width="20"
      >
        <g>
          <path
            clipRule="evenodd"
            d={svgPaths.p646c5c0}
            fill="#2E1E1C"
            fillRule="evenodd"
          />
        </g>
      </svg>
    </div>
  )
}

function IosBatteryFull() {
  return (
    <div className="h-[20px] relative shrink-0 w-[28px]">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="20"
        preserveAspectRatio="none"
        viewBox="0 0 28 20"
        width="28"
      >
        <g>
          <path d={svgPaths.p66c9640} fill="#2E1E1C" />
        </g>
      </svg>
    </div>
  )
}

export default function Nosotros({ onNavigate, currentPage }: Props) {
  const active = "#5f7d6b"
  const inactive = "#6b5a58"
  const isInicio = currentPage === "inicio"
  const isCatalogo = currentPage === "catalogo"
  const isNosotros = currentPage === "nosotros"
  const isContacto = currentPage === "contacto"

  return (
    <div className="bg-[#fdfbfa] content-stretch flex flex-col items-start justify-between relative size-full">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full overflow-y-auto">
        {/* Status Bar */}
        <div className="content-stretch flex h-[44px] items-center justify-between px-[24px] relative shrink-0 w-full sm:hidden">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2e1e1c] text-[14px] whitespace-nowrap">
            9:41
          </p>
          <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
            <IosSignal />
            <IosWifiSignal />
            <IosBatteryFull />
          </div>
        </div>

        {/* Header */}
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic pb-[16px] pt-[20px] px-[24px] relative shrink-0 w-full">
          <p className="font-['Instrument_Serif:Regular',sans-serif] relative shrink-0 text-[#2e1e1c] text-[36px] whitespace-nowrap">
            Sobre Nosotros
          </p>
          <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#6b5a58] text-[14px] w-[min-content]">
            El arte de contar historias a través de las flores.
          </p>
        </div>

        {/* Store Image */}
        <div className="content-stretch flex flex-col items-start px-[24px] py-[8px] relative shrink-0 w-full">
          <div className="h-[220px] relative rounded-[20px] shrink-0 w-full overflow-hidden">
            <img
              alt="Nuestra tienda"
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full"
              src={storeImg}
            />
          </div>
        </div>

        {/* Story Copy */}
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[18px] items-start not-italic pt-[16px] px-[24px] relative shrink-0 w-full">
          <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#2e1e1c] text-[26px] w-full">
            Atención Personalizada y Cuidado en Cada Detalle
          </p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#6b5a58] text-[14px] w-full">
            En Floristería Martha creemos que cada arreglo cuenta un relato
            único. Nos especializamos en brindar una atención cercana y
            detallada, ayudándote a seleccionar la combinación perfecta para
            cada espacio y sentimiento.
          </p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#6b5a58] text-[14px] w-full">
            Nuestro servicio de entrega a domicilio garantiza que las flores
            lleguen con la frescura intacta y una presentación impecable directo
            a la puerta de ese ser querido.
          </p>
        </div>

        {/* Value Badges */}
        <div className="content-start flex flex-wrap gap-[10px] items-start p-[24px] relative shrink-0 w-full">
          <div className="bg-[#eff2f0] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[20px] shrink-0">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#5f7d6b] text-[12px] whitespace-nowrap">
              100% Frescas
            </p>
          </div>
          <div className="bg-[#f8ebef] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[20px] shrink-0">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2e1e1c] text-[12px] whitespace-nowrap">
              Hecho a Mano
            </p>
          </div>
          <div className="bg-[#ece9f0] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[20px] shrink-0">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#a195b8] text-[12px] whitespace-nowrap">
              Diseño de Autor
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full sm:hidden">
        <div
          aria-hidden
          className="absolute border-[#efebe9] border-solid border-t inset-0 pointer-events-none"
        />
        <div className="content-stretch flex h-[64px] items-center justify-between px-[24px] relative shrink-0 w-full">
          <button
            onClick={() => onNavigate("inicio")}
            className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px] cursor-pointer bg-transparent border-none p-0"
          >
            <svg
              className="size-[22px]"
              fill="none"
              height="22"
              viewBox="0 0 22 22"
              width="22"
            >
              <path
                d={svgPaths.p1e6ad500}
                stroke={isInicio ? active : inactive}
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
            <p
              className={`leading-[normal] not-italic relative shrink-0 text-[11px] whitespace-nowrap ${
                isInicio
                  ? "font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#5f7d6b]"
                  : "font-['Inter:Regular',sans-serif] font-normal text-[#6b5a58]"
              }`}
            >
              Inicio
            </p>
          </button>
          <button
            onClick={() => onNavigate("catalogo")}
            className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px] cursor-pointer bg-transparent border-none p-0"
          >
            <svg
              className="size-[22px]"
              fill="none"
              height="22"
              viewBox="0 0 22 22"
              width="22"
            >
              <path
                d={svgPaths.p10635e00}
                stroke={isCatalogo ? active : inactive}
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
            <p
              className={`leading-[normal] not-italic relative shrink-0 text-[11px] whitespace-nowrap ${
                isCatalogo
                  ? "font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#5f7d6b]"
                  : "font-['Inter:Regular',sans-serif] font-normal text-[#6b5a58]"
              }`}
            >
              Catálogo
            </p>
          </button>
          <button
            onClick={() => onNavigate("nosotros")}
            className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px] cursor-pointer bg-transparent border-none p-0"
          >
            <svg
              className="size-[22px]"
              fill="none"
              height="22"
              viewBox="0 0 22 22"
              width="22"
            >
              <path
                d={svgPaths.p7608100}
                stroke={isNosotros ? active : inactive}
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
            <p
              className={`leading-[normal] not-italic relative shrink-0 text-[11px] whitespace-nowrap ${
                isNosotros
                  ? "font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#5f7d6b]"
                  : "font-['Inter:Regular',sans-serif] font-normal text-[#6b5a58]"
              }`}
            >
              Nosotros
            </p>
          </button>
          <button
            onClick={() => onNavigate("contacto")}
            className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px] cursor-pointer bg-transparent border-none p-0"
          >
            <svg
              className="size-[22px]"
              fill="none"
              height="22"
              viewBox="0 0 22 22"
              width="22"
            >
              <clipPath id="clip-nos-phone">
                <rect fill="white" height="22" width="22" />
              </clipPath>
              <g clipPath="url(#clip-nos-phone)">
                <path
                  d={svgPaths.p28009a00}
                  stroke={isContacto ? active : inactive}
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </g>
            </svg>
            <p
              className={`leading-[normal] not-italic relative shrink-0 text-[11px] whitespace-nowrap ${
                isContacto
                  ? "font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#5f7d6b]"
                  : "font-['Inter:Regular',sans-serif] font-normal text-[#6b5a58]"
              }`}
            >
              Contacto
            </p>
          </button>
        </div>
        <div className="content-stretch flex items-start justify-center pb-[8px] pt-[12px] relative shrink-0 w-full">
          <div className="bg-[#2e1e1c] h-[5px] relative rounded-[100px] shrink-0 w-[139px]" />
        </div>
      </div>
    </div>
  )
}
