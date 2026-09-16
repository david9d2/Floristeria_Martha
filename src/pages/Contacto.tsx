import svgPaths from "../../imports/svg-ivg705xiln";

type Props = { onNavigate: (page: string) => void; currentPage: string };

const mapImg = "https://images.unsplash.com/photo-1615488913817-095134dfeb54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800";

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

export default function Contacto({ onNavigate, currentPage }: Props) {
  const active = "#5f7d6b";
  const inactive = "#6b5a58";
  const isInicio = currentPage === "inicio";
  const isCatalogo = currentPage === "catalogo";
  const isNosotros = currentPage === "nosotros";
  const isContacto = currentPage === "contacto";

  return (
    <div className="bg-[#fdfbfa] content-stretch flex flex-col items-start justify-between relative size-full">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full overflow-y-auto">
        {/* Status Bar */}
        <div className="content-stretch flex h-[44px] items-center justify-between px-[24px] relative shrink-0 w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2e1e1c] text-[14px] whitespace-nowrap">9:41</p>
          <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
            <IosSignal /><IosWifiSignal /><IosBatteryFull />
          </div>
        </div>

        {/* Header */}
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic pb-[16px] pt-[20px] px-[24px] relative shrink-0 w-full">
          <p className="font-['Instrument_Serif:Regular',sans-serif] relative shrink-0 text-[#2e1e1c] text-[36px] whitespace-nowrap">Contacto</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#6b5a58] text-[14px] w-[min-content]">Estamos encantados de atenderte y hacer realidad tus ideas florales.</p>
        </div>

        {/* Map */}
        <div className="content-stretch flex flex-col items-start pb-[20px] px-[24px] relative shrink-0 w-full">
          <div className="h-[160px] relative rounded-[16px] shrink-0 w-full overflow-hidden">
            <img alt="Ubicación" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={mapImg} />
          </div>
        </div>

        {/* Info Panel + WhatsApp */}
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] relative shrink-0 w-full pb-[24px]">
          {/* Info Panel */}
          <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[20px] relative rounded-[20px] shrink-0 w-full">
            <div aria-hidden className="absolute border border-[#efebe9] border-solid inset-0 pointer-events-none rounded-[20px]" />
            {/* Address */}
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
              <div className="bg-[#eff2f0] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]">
                <svg className="size-[16px]" fill="none" height="16" viewBox="0 0 16 16" width="16">
                  <path d={svgPaths.p8b99100} stroke="#5F7D6B" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative">
                <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#2e1e1c] text-[12px] uppercase whitespace-nowrap">Dirección</p>
                <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#6b5a58] text-[14px] w-[min-content]">Av. de los Claveles 452, Jardines del Prado</p>
              </div>
            </div>
            <div className="h-px bg-[#EFEBE9] w-full" />
            {/* Hours */}
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
              <div className="bg-[#f8ebef] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]">
                <svg className="size-[16px]" fill="none" height="16" viewBox="0 0 16 16" width="16">
                  <clipPath id="clip-clock"><rect fill="white" height="16" width="16" /></clipPath>
                  <g clipPath="url(#clip-clock)">
                    <path d={svgPaths.p8765900} stroke="#2E1E1C" strokeLinecap="round" strokeWidth="2" />
                  </g>
                </svg>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative">
                <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#2e1e1c] text-[12px] uppercase whitespace-nowrap">Horario de Atención</p>
                <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#6b5a58] text-[14px] w-[min-content]">Lunes a Sábado: 9:00 AM – 8:00 PM</p>
                <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#6b5a58] text-[14px] w-[min-content]">Domingos: 10:00 AM – 4:00 PM</p>
              </div>
            </div>
            <div className="h-px bg-[#EFEBE9] w-full" />
            {/* Facebook */}
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
              <div className="bg-[#ece9f0] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]">
                <svg className="size-[16px]" fill="none" height="16" viewBox="0 0 16 16" width="16">
                  <path d={svgPaths.p164fd480} stroke="#A195B8" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative">
                <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#2e1e1c] text-[12px] uppercase whitespace-nowrap">Facebook</p>
                <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#6b5a58] text-[14px] w-[min-content]">/floristeriaMartha</p>
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full">
            <button className="bg-[#25d366] content-stretch flex gap-[10px] h-[56px] items-center justify-center relative rounded-[28px] shrink-0 w-full cursor-pointer border-none">
              <svg className="size-[22px]" fill="none" height="22" viewBox="0 0 22 22" width="22">
                <clipPath id="clip-msg"><rect fill="white" height="22" width="22" /></clipPath>
                <g clipPath="url(#clip-msg)">
                  <path d={svgPaths.pc7f2500} stroke="white" strokeLinecap="round" strokeWidth="2" />
                </g>
              </svg>
              <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Escríbenos por WhatsApp</p>
            </button>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b5a58] text-[12px] text-center w-full">Consulta inmediata sobre arreglos personalizados y envíos.</p>
          </div>
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
              <clipPath id="clip-cont-phone"><rect fill="white" height="22" width="22" /></clipPath>
              <g clipPath="url(#clip-cont-phone)">
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
