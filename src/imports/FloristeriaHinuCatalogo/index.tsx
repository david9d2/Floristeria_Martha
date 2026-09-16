import svgPaths from "./svg-rz12zwvfuc";
import imgCategoryImage from "./a3270424a8e9a90fc09d5247103858618599a8ea.png";
import imgCategoryImage1 from "./bc3d5c0ac17e43174a4e3b49b5b28c1f28f4e169.png";
import imgCategoryImage2 from "./7147251dbc140da351a2145ba1ff13025b5978e1.png";
import imgCategoryImage3 from "./c91ff361a7e6676b1fe26f1056084266af309049.png";
import imgCategoryImage4 from "./299d4be8d62eb79271334125e1735f917d542c19.png";

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

function CatalogHeader() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic pb-[16px] pt-[20px] px-[24px] relative shrink-0 w-full" data-name="catalog-header">
      <p className="font-['Instrument_Serif:Regular',sans-serif] relative shrink-0 text-[#2e1e1c] text-[36px] whitespace-nowrap">Nuestro Catálogo</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#6b5a58] text-[14px] w-[min-content]">Colecciones botánicas exclusivas para transmitir emociones inolvidables.</p>
    </div>
  );
}

function CategoryInfo() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic p-[14px] relative shrink-0 w-full" data-name="category-info">
      <p className="font-['Instrument_Serif:Regular',sans-serif] relative shrink-0 text-[#2e1e1c] text-[22px] w-full">Ramos</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6b5a58] text-[12px] w-full">Desde $45.00</p>
    </div>
  );
}

function CategoryCard() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="category-card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[150px] relative shrink-0 w-full" data-name="category-image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCategoryImage} />
        </div>
        <CategoryInfo />
      </div>
      <div aria-hidden className="absolute border border-[#efebe9] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function CategoryInfo1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic p-[14px] relative shrink-0 w-full" data-name="category-info">
      <p className="font-['Instrument_Serif:Regular',sans-serif] relative shrink-0 text-[#2e1e1c] text-[22px] w-full">Arreglos con chocolate</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6b5a58] text-[12px] w-full">Desde $65.00</p>
    </div>
  );
}

function CategoryCard1() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="category-card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[150px] relative shrink-0 w-full" data-name="category-image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCategoryImage1} />
        </div>
        <CategoryInfo1 />
      </div>
      <div aria-hidden className="absolute border border-[#efebe9] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function CategoryInfo2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic p-[14px] relative shrink-0 w-full" data-name="category-info">
      <p className="font-['Instrument_Serif:Regular',sans-serif] relative shrink-0 text-[#2e1e1c] text-[22px] w-full">Ocasiones especiales</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6b5a58] text-[12px] w-full">Desde $85.00</p>
    </div>
  );
}

function CategoryCard2() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="category-card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[150px] relative shrink-0 w-full" data-name="category-image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCategoryImage2} />
        </div>
        <CategoryInfo2 />
      </div>
      <div aria-hidden className="absolute border border-[#efebe9] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function CategoryInfo3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic p-[14px] relative shrink-0 w-full" data-name="category-info">
      <p className="font-['Instrument_Serif:Regular',sans-serif] relative shrink-0 text-[#2e1e1c] text-[22px] w-full">Arreglos fúnebres</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6b5a58] text-[12px] w-full">Desde $120.00</p>
    </div>
  );
}

function CategoryCard3() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="category-card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[150px] relative shrink-0 w-full" data-name="category-image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCategoryImage3} />
        </div>
        <CategoryInfo3 />
      </div>
      <div aria-hidden className="absolute border border-[#efebe9] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function CategoryInfo4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic p-[14px] relative shrink-0 w-full" data-name="category-info">
      <p className="font-['Instrument_Serif:Regular',sans-serif] relative shrink-0 text-[#2e1e1c] text-[22px] w-full">Venta al por mayor</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6b5a58] text-[12px] w-full">Desde $180.00</p>
    </div>
  );
}

function CategoryCard4() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="category-card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[150px] relative shrink-0 w-full" data-name="category-image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCategoryImage4} />
        </div>
        <CategoryInfo4 />
      </div>
      <div aria-hidden className="absolute border border-[#efebe9] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function CatalogGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start pb-[32px] px-[24px] relative shrink-0 w-full" data-name="catalog-grid">
      <CategoryCard />
      <CategoryCard1 />
      <CategoryCard2 />
      <CategoryCard3 />
      <CategoryCard4 />
    </div>
  );
}

function ScreenContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="screen-content">
      <StatusBar />
      <CatalogHeader />
      <CatalogGrid />
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
          <path d={svgPaths.p10635e00} id="Vector" stroke="#5F7D6B" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TabCatalogo() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]" data-name="tab-Catálogo">
      <Grid />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#5f7d6b] text-[11px] whitespace-nowrap">Catálogo</p>
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
        <g clipPath="url(#clip0_0_14)" id="phone">
          <path d={svgPaths.p28009a00} id="Vector" stroke="#6B5A58" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
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

export default function FloristeriaHinuCatalogo() {
  return (
    <div className="bg-[#fdfbfa] content-stretch flex flex-col items-start justify-between relative size-full" data-name="floristeria-hinu-catalogo">
      <ScreenContent />
      <BottomNavContainer />
    </div>
  );
}