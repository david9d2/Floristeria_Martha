import svgPaths from "../../imports/svg-rz12zwvfuc";

type Props = { onNavigate: (page: string) => void; currentPage: string };

const categoryImages = [
  "https://images.unsplash.com/photo-1487530811176-3780de880c2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600",
  "https://images.unsplash.com/photo-1644745547446-f04a49a3693f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600",
  "https://images.unsplash.com/photo-1521543832500-49e69fb2bea2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600",
  "https://images.unsplash.com/photo-1567428051128-5f09a0200655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600",
  "https://images.unsplash.com/photo-1565695951564-007d8f297e48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600",
];

const categories = [
  { name: "Ramos", price: "Desde $45.00" },
  { name: "Arreglos con chocolate", price: "Desde $65.00" },
  { name: "Ocasiones especiales", price: "Desde $85.00" },
  { name: "Arreglos fúnebres", price: "Desde $120.00" },
  { name: "Venta al por mayor", price: "Desde $180.00" },
];

function IosSignal() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g><path clipRule="evenodd" d={svgPaths.p2bb6eb80} fill="#2E1E1C" fillRule="evenodd" /></g>
      </svg>
    </div>
  );
}

function IosWifiSignal() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g><path clipRule="evenodd" d={svgPaths.p646c5c0} fill="#2E1E1C" fillRule="evenodd" /></g>
      </svg>
    </div>
  );
}

function IosBatteryFull() {
  return (
    <div className="h-[20px] relative shrink-0 w-[28px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 28 20" width="28">
        <g><path d={svgPaths.p66c9640} fill="#2E1E1C" /></g>
      </svg>
    </div>
  );
}

export default function Catalogo({ onNavigate, currentPage }: Props) {
  const active = "#5f7d6b";
  const inactive = "#6b5a58";
  const isInicio = currentPage === "inicio";
  const isCatalogo = currentPage === "catalogo";
  const isNosotros = currentPage === "nosotros";
  const isContacto = currentPage === "contacto";

  return (
    <div className="bg-[#fdfbfa] flex flex-col relative size-full">
      <div className="flex flex-col flex-1 min-h-0 w-full overflow-y-auto">
        {/* Status Bar */}
        <div className="content-stretch flex h-[44px] items-center justify-between px-[24px] relative shrink-0 w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2e1e1c] text-[14px] whitespace-nowrap">9:41</p>
          <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
            <IosSignal /><IosWifiSignal /><IosBatteryFull />
          </div>
        </div>

        {/* Header with back button */}
        <div className="content-stretch flex items-center gap-[12px] px-[24px] pt-[20px] pb-[4px] relative shrink-0 w-full">
          <button
            onClick={() => onNavigate("inicio")}
            className="bg-[#eff2f0] flex items-center justify-center rounded-full size-[36px] shrink-0 border-none cursor-pointer"
            aria-label="Volver"
          >
            <svg fill="none" height="18" viewBox="0 0 18 18" width="18">
              <path d="M11 4L6 9L11 14" stroke="#5F7D6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
          <p className="font-['Instrument_Serif:Regular',sans-serif] relative shrink-0 text-[#2e1e1c] text-[28px]">Nuestro Catálogo</p>
        </div>

        <div className="px-[24px] pb-[12px] shrink-0 w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[#6b5a58] text-[14px]">Colecciones botánicas exclusivas para transmitir emociones inolvidables.</p>
        </div>

        {/* Category Grid */}
        <div className="content-stretch flex flex-col gap-[20px] items-start pb-[32px] px-[24px] relative shrink-0 w-full">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white relative rounded-[16px] shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                <div className="h-[150px] relative shrink-0 w-full">
                  <img alt={cat.name} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={categoryImages[i]} />
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic p-[14px] relative shrink-0 w-full">
                  <p className="font-['Instrument_Serif:Regular',sans-serif] relative shrink-0 text-[#2e1e1c] text-[22px] w-full">{cat.name}</p>
                  <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6b5a58] text-[12px] w-full">{cat.price}</p>
                </div>
              </div>
              <div aria-hidden className="absolute border border-[#efebe9] border-solid inset-0 pointer-events-none rounded-[16px]" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div aria-hidden className="absolute border-[#efebe9] border-solid border-t inset-0 pointer-events-none" />
        <div className="content-stretch flex h-[64px] items-center justify-between px-[24px] relative shrink-0 w-full">
          <button onClick={() => onNavigate("inicio")} className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px] cursor-pointer bg-transparent border-none p-0">
            <svg className="size-[22px]" fill="none" height="22" viewBox="0 0 22 22" width="22">
              <path d={svgPaths.p1e6ad500} stroke={isInicio ? active : inactive} strokeLinecap="round" strokeWidth="2" />
            </svg>
            <p className={`leading-[normal] not-italic relative shrink-0 text-[11px] whitespace-nowrap ${isInicio ? "font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#5f7d6b]" : "font-['Inter:Regular',sans-serif] font-normal text-[#6b5a58]"}`}>Inicio</p>
          </button>
          <button onClick={() => onNavigate("catalogo")} className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px] cursor-pointer bg-transparent border-none p-0">
            <svg className="size-[22px]" fill="none" height="22" viewBox="0 0 22 22" width="22">
              <path d={svgPaths.p10635e00} stroke={isCatalogo ? active : inactive} strokeLinecap="round" strokeWidth="2" />
            </svg>
            <p className={`leading-[normal] not-italic relative shrink-0 text-[11px] whitespace-nowrap ${isCatalogo ? "font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#5f7d6b]" : "font-['Inter:Regular',sans-serif] font-normal text-[#6b5a58]"}`}>Catálogo</p>
          </button>
          <button onClick={() => onNavigate("nosotros")} className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px] cursor-pointer bg-transparent border-none p-0">
            <svg className="size-[22px]" fill="none" height="22" viewBox="0 0 22 22" width="22">
              <path d={svgPaths.p7608100} stroke={isNosotros ? active : inactive} strokeLinecap="round" strokeWidth="2" />
            </svg>
            <p className={`leading-[normal] not-italic relative shrink-0 text-[11px] whitespace-nowrap ${isNosotros ? "font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#5f7d6b]" : "font-['Inter:Regular',sans-serif] font-normal text-[#6b5a58]"}`}>Nosotros</p>
          </button>
          <button onClick={() => onNavigate("contacto")} className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px] cursor-pointer bg-transparent border-none p-0">
            <svg className="size-[22px]" fill="none" height="22" viewBox="0 0 22 22" width="22">
              <clipPath id="clip-cat-phone"><rect fill="white" height="22" width="22" /></clipPath>
              <g clipPath="url(#clip-cat-phone)">
                <path d={svgPaths.p28009a00} stroke={isContacto ? active : inactive} strokeLinecap="round" strokeWidth="2" />
              </g>
            </svg>
            <p className={`leading-[normal] not-italic relative shrink-0 text-[11px] whitespace-nowrap ${isContacto ? "font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#5f7d6b]" : "font-['Inter:Regular',sans-serif] font-normal text-[#6b5a58]"}`}>Contacto</p>
          </button>
        </div>
        <div className="content-stretch flex items-start justify-center pb-[8px] pt-[12px] relative shrink-0 w-full">
          <div className="bg-[#2e1e1c] h-[5px] relative rounded-[100px] shrink-0 w-[139px]" />
        </div>
      </div>
    </div>
  );
}
