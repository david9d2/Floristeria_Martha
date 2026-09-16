import svgPaths from "../../imports/svg-4gd3qnowmw";

type Props = { onNavigate: (page: string) => void; currentPage: string };

const heroImg = "https://latinflores.com/cdn/shop/files/SonrisaenPetalos.jpg?v=1746978115&width=990";

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

function StatusBar() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-between px-[24px] relative shrink-0 w-full sm:hidden">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2e1e1c] text-[14px] whitespace-nowrap">9:41</p>
      <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
        <IosSignal /><IosWifiSignal /><IosBatteryFull />
      </div>
    </div>
  );
}

export default function Inicio({ onNavigate, currentPage }: Props) {
  return (
    <div className="bg-[#fdfbfa] content-stretch flex flex-col items-start justify-between relative size-full">
      <div className="content-stretch flex flex-col items-start flex-1 min-h-0 overflow-y-auto relative w-full">
        <StatusBar />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center leading-[normal] not-italic pb-[12px] pt-[20px] relative shrink-0 text-center w-full whitespace-nowrap">
          <p className="font-['Instrument_Serif:Regular',sans-serif] relative shrink-0 text-[#2e1e1c] text-[38px]">Floristería Martha</p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#5f7d6b] text-[11px] uppercase">Arte y Elegancia Botánica</p>
        </div>
        <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-full">
          <div className="h-[320px] relative rounded-[24px] shrink-0 w-full overflow-hidden">
            <img alt="Floristería Hinu" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={heroImg} />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-center px-[24px] relative shrink-0 w-full">
          <div className="bg-[#f8ebef] content-stretch flex gap-[6px] items-center px-[16px] py-[8px] relative rounded-[100px] shrink-0">
            <div aria-hidden className="absolute border border-[#e6b0b8] border-solid inset-0 pointer-events-none rounded-[100px]" />
            <div className="relative shrink-0 size-[16px]">
              <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
                <g><path d={svgPaths.p2c68d480} stroke="#2E1E1C" strokeLinecap="round" strokeWidth="2" /></g>
              </svg>
            </div>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2e1e1c] text-[13px] whitespace-nowrap">Entrega a domicilio disponible</p>
          </div>
          <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[1.15] min-w-full not-italic relative shrink-0 text-[#2e1e1c] text-[32px] text-center w-[min-content]">Floristería exclusiva para momentos memorables</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#6b5a58] text-[14px] text-center w-[min-content]">Diseños florales de autor confeccionados con las especies más finas y frescas de la temporada.</p>
        </div>
        <div className="content-stretch flex flex-col items-start pb-[24px] pt-[28px] px-[24px] relative shrink-0 w-full">
          <button
            onClick={() => onNavigate("catalogo")}
            className="bg-[#5f7d6b] content-stretch flex gap-[8px] h-[52px] items-center justify-center px-[24px] relative rounded-[26px] shrink-0 w-full cursor-pointer"
          >
            <div className="relative shrink-0 size-[18px]">
              <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
                <g><path d={svgPaths.p39716d00} stroke="white" strokeLinecap="round" strokeWidth="2" /></g>
              </svg>
            </div>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Ver Catálogo Floral</p>
          </button>
        </div>
      </div>
      <BottomNav onNavigate={onNavigate} currentPage={currentPage} />
    </div>
  );
}

function BottomNav({ onNavigate, currentPage }: Props) {
  const active = "#5f7d6b";
  const inactive = "#6b5a58";
  const isInicio = currentPage === "inicio";
  const isCatalogo = currentPage === "catalogo";
  const isNosotros = currentPage === "nosotros";
  const isContacto = currentPage === "contacto";

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full sm:hidden">
      <div aria-hidden className="absolute border-[#efebe9] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex h-[64px] items-center justify-between px-[24px] relative shrink-0 w-full">
        <button onClick={() => onNavigate("inicio")} className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px] cursor-pointer bg-transparent border-none p-0">
          <svg className="size-[22px]" fill="none" height="22" viewBox="0 0 22 22" width="22">
            <path d={svgPaths.p1e6ad500} stroke={isInicio ? active : inactive} strokeLinecap="round" strokeWidth="2" />
          </svg>
          <p className={`font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] whitespace-nowrap ${isInicio ? "font-['Inter:Semi_Bold',sans-serif] text-[#5f7d6b]" : "font-['Inter:Regular',sans-serif] text-[#6b5a58] font-normal"}`}>Inicio</p>
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
            <clipPath id="clip-inicio-phone"><rect fill="white" height="22" width="22" /></clipPath>
            <g clipPath="url(#clip-inicio-phone)">
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
  );
}
