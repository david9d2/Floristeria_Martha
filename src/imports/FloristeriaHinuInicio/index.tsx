import svgPaths from "./svg-4gd3qnowmw";
import imgHeroImage from "./4b458dfb9e9c279cbddefdc74fabd5b3450c8088.png";

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

function BrandHeader() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center leading-[normal] not-italic pb-[12px] pt-[20px] relative shrink-0 text-center w-full whitespace-nowrap" data-name="brand-header">
      <p className="font-['Instrument_Serif:Regular',sans-serif] relative shrink-0 text-[#2e1e1c] text-[38px]">Floristería Hinu</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#5f7d6b] text-[11px] uppercase">Arte y Elegancia Botánica</p>
    </div>
  );
}

function HeroImageContainer() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-full" data-name="hero-image-container">
      <div className="h-[320px] relative rounded-[24px] shrink-0 w-full" data-name="hero-image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgHeroImage} />
      </div>
    </div>
  );
}

function Truck() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="truck">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="truck">
          <path d={svgPaths.p2c68d480} id="Vector" stroke="#2E1E1C" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BadgeDelivery() {
  return (
    <div className="bg-[#f8ebef] content-stretch flex gap-[6px] items-center px-[16px] py-[8px] relative rounded-[100px] shrink-0" data-name="badge-delivery">
      <div aria-hidden className="absolute border border-[#e6b0b8] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Truck />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2e1e1c] text-[13px] whitespace-nowrap">Entrega a domicilio disponible</p>
    </div>
  );
}

function HomeDeliveryNotice() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center px-[24px] relative shrink-0 w-full" data-name="home-delivery-notice">
      <BadgeDelivery />
      <p className="[word-break:break-word] font-['Instrument_Serif:Regular',sans-serif] leading-[1.15] min-w-full not-italic relative shrink-0 text-[#2e1e1c] text-[32px] text-center w-[min-content]">Floristería exclusiva para momentos memorables</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#6b5a58] text-[14px] text-center w-[min-content]">Diseños florales de autor confeccionados con las especies más finas y frescas de la temporada.</p>
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="list">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="list">
          <path d={svgPaths.p39716d00} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#5f7d6b] content-stretch flex gap-[8px] h-[52px] items-center justify-center px-[24px] relative rounded-[26px] shrink-0 w-full" data-name="button">
      <List />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Ver Catálogo Floral</p>
    </div>
  );
}

function MenuCtaArea() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] pt-[28px] px-[24px] relative shrink-0 w-full" data-name="menu-cta-area">
      <Button />
    </div>
  );
}

function ScreenContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="screen-content">
      <StatusBar />
      <BrandHeader />
      <HeroImageContainer />
      <HomeDeliveryNotice />
      <MenuCtaArea />
    </div>
  );
}

function Home() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="home">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="home">
          <path d={svgPaths.p1e6ad500} id="Vector" stroke="#5F7D6B" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TabInicio() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]" data-name="tab-Inicio">
      <Home />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#5f7d6b] text-[11px] whitespace-nowrap">Inicio</p>
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
        <g clipPath="url(#clip0_0_4)" id="phone">
          <path d={svgPaths.p28009a00} id="Vector" stroke="#6B5A58" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_4">
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b5a58] text-[11px] whitespace-nowrap">Contacto</p>
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

export default function FloristeriaHinuInicio() {
  return (
    <div className="bg-[#fdfbfa] content-stretch flex flex-col items-start justify-between relative size-full" data-name="floristeria-hinu-inicio">
      <ScreenContent />
      <BottomNavContainer />
    </div>
  );
}