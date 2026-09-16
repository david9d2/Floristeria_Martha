import svgPaths from "./svg-ivg705xiln";
import imgMapFallback from "./49070af68e8e346a97a053698a21f6ea096e27d1.png";

function IosSignal() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ios-signal">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="ios-signal">
          <path clipRule="evenodd" d={svgPaths.p2bb6eb80} fill="#2E1E1C" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IosWifiSignal() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ios-wifi-signal">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="ios-wifi-signal">
          <path clipRule="evenodd" d={svgPaths.p646c5c0} fill="#2E1E1C" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IosBatteryFull() {
  return (
    <div className="h-[20px] relative shrink-0 w-[28px]" data-name="ios-battery-full">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 28 20" width="28">
        <g id="ios-battery-full">
          <path d={svgPaths.p66c9640} fill="#2E1E1C" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StatusIcons() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-name="status-icons">
      <IosSignal />
      <IosWifiSignal />
      <IosBatteryFull />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-between px-[24px] relative shrink-0 w-full" data-name="status-bar">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2e1e1c] text-[14px] whitespace-nowrap">9:41</p>
      <StatusIcons />
    </div>
  );
}

function ContactHeader() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic pb-[16px] pt-[20px] px-[24px] relative shrink-0 w-full" data-name="contact-header">
      <p className="font-['Instrument_Serif:Regular',sans-serif] relative shrink-0 text-[#2e1e1c] text-[36px] whitespace-nowrap">Contacto</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#6b5a58] text-[14px] w-[min-content]">Estamos encantados de atenderte y hacer realidad tus ideas florales.</p>
    </div>
  );
}

function MapContainer() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20px] px-[24px] relative shrink-0 w-full" data-name="map-container">
      <div className="h-[160px] relative rounded-[16px] shrink-0 w-full" data-name="map-fallback">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgMapFallback} />
      </div>
    </div>
  );
}

function MapPin() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="map-pin">
          <path d={svgPaths.p8b99100} id="Vector" stroke="#5F7D6B" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#eff2f0] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <MapPin />
    </div>
  );
}

function AddressText() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative" data-name="address-text">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#2e1e1c] text-[12px] uppercase whitespace-nowrap">Dirección</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#6b5a58] text-[14px] w-[min-content]">Av. de los Claveles 452, Jardines del Prado</p>
    </div>
  );
}

function AddressRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="address-row">
      <Frame />
      <AddressText />
    </div>
  );
}

function Clock() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="clock">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_8)" id="clock">
          <path d={svgPaths.p8765900} id="Vector" stroke="#2E1E1C" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_8">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#f8ebef] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <Clock />
    </div>
  );
}

function HoursText() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative" data-name="hours-text">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#2e1e1c] text-[12px] uppercase whitespace-nowrap">Horario de Atención</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#6b5a58] text-[14px] w-[min-content]">Lunes a Sábado: 9:00 AM – 8:00 PM</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#6b5a58] text-[14px] w-[min-content]">Domingos: 10:00 AM – 4:00 PM</p>
    </div>
  );
}

function HoursRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="hours-row">
      <Frame1 />
      <HoursText />
    </div>
  );
}

function Facebook() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="facebook">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="facebook">
          <path d={svgPaths.p164fd480} id="Vector" stroke="#A195B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#ece9f0] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <Facebook />
    </div>
  );
}

function FbText() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative" data-name="fb-text">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#2e1e1c] text-[12px] uppercase whitespace-nowrap">Facebook</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#6b5a58] text-[14px] w-[min-content]">/floristeriahinu</p>
    </div>
  );
}

function FacebookRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="facebook-row">
      <Frame2 />
      <FbText />
    </div>
  );
}

function InfoPanel() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[20px] relative rounded-[20px] shrink-0 w-full" data-name="info-panel">
      <div aria-hidden className="absolute border border-[#efebe9] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <AddressRow />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 314 1" width="314">
            <line id="Line" stroke="#EFEBE9" x2="314" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <HoursRow />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 314 1" width="314">
            <line id="Line" stroke="#EFEBE9" x2="314" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <FacebookRow />
    </div>
  );
}

function MessageCircle() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="message-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g clipPath="url(#clip0_0_13)" id="message-circle">
          <path d={svgPaths.pc7f2500} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_13">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function WhatsappBtn() {
  return (
    <div className="bg-[#25d366] content-stretch flex gap-[10px] h-[56px] items-center justify-center relative rounded-[28px] shrink-0 w-full" data-name="whatsapp-btn">
      <MessageCircle />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Escríbenos por WhatsApp</p>
    </div>
  );
}

function WhatsappActionBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full" data-name="whatsapp-action-block">
      <WhatsappBtn />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b5a58] text-[12px] text-center w-full">Consulta inmediata sobre arreglos personalizados y envíos.</p>
    </div>
  );
}

function ChannelsAndAddress() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] relative shrink-0 w-full" data-name="channels-and-address">
      <InfoPanel />
      <WhatsappActionBlock />
    </div>
  );
}

function ScreenContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="screen-content">
      <StatusBar />
      <ContactHeader />
      <MapContainer />
      <ChannelsAndAddress />
    </div>
  );
}

function Home() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="home">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="home">
          <path d={svgPaths.p1e6ad500} id="Vector" stroke="#6B5A58" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TabInicio() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]" data-name="tab-Inicio">
      <Home />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b5a58] text-[11px] whitespace-nowrap">Inicio</p>
    </div>
  );
}

function Grid() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="grid">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="grid">
          <path d={svgPaths.p10635e00} id="Vector" stroke="#6B5A58" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TabCatalogo() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]" data-name="tab-Catálogo">
      <Grid />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b5a58] text-[11px] whitespace-nowrap">Catálogo</p>
    </div>
  );
}

function Heart() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="heart">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="heart">
          <path d={svgPaths.p7608100} id="Vector" stroke="#6B5A58" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TabNosotros() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]" data-name="tab-Nosotros">
      <Heart />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b5a58] text-[11px] whitespace-nowrap">Nosotros</p>
    </div>
  );
}

function Phone() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="phone">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g clipPath="url(#clip0_0_19)" id="phone">
          <path d={svgPaths.p28009a00} id="Vector" stroke="#5F7D6B" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_19">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TabContacto() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]" data-name="tab-Contacto">
      <Phone />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#5f7d6b] text-[11px] whitespace-nowrap">Contacto</p>
    </div>
  );
}

function BottomNav() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between px-[24px] relative shrink-0 w-full" data-name="bottom-nav">
      <TabInicio />
      <TabCatalogo />
      <TabNosotros />
      <TabContacto />
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="content-stretch flex items-start justify-center pb-[8px] pt-[12px] relative shrink-0 w-full" data-name="home-indicator">
      <div className="bg-[#2e1e1c] h-[5px] relative rounded-[100px] shrink-0 w-[139px]" data-name="indicator-bar" />
    </div>
  );
}

function BottomNavContainer() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="bottom-nav-container">
      <div aria-hidden className="absolute border-[#efebe9] border-solid border-t inset-0 pointer-events-none" />
      <BottomNav />
      <HomeIndicator />
    </div>
  );
}

export default function FloristeriaHinuContacto() {
  return (
    <div className="bg-[#fdfbfa] content-stretch flex flex-col items-start justify-between relative size-full" data-name="floristeria-hinu-contacto">
      <ScreenContent />
      <BottomNavContainer />
    </div>
  );
}