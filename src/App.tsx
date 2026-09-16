import { useState } from "react";
import Inicio from "./pages/Inicio";
import Catalogo from "./pages/Catalogo";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";

type Page = "inicio" | "catalogo" | "nosotros" | "contacto";

type HeaderProps = { onNavigate: (page: string) => void; currentPage: string };

function Header({ onNavigate, currentPage }: HeaderProps) {
  const links: { id: Page; label: string }[] = [
    { id: "inicio", label: "Inicio" },
    { id: "catalogo", label: "Catálogo" },
    { id: "nosotros", label: "Nosotros" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <header className="hidden sm:flex bg-white items-center justify-between px-6 py-3 shrink-0 border-b border-[#efebe9]">
      <p className="font-['Instrument_Serif:Regular',sans-serif] text-[#2e1e1c] text-[22px]">Floristería Martha</p>
      <nav className="flex gap-6">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => onNavigate(link.id)}
            className={`text-[13px] font-medium cursor-pointer bg-transparent border-none p-0 transition-colors ${
              currentPage === link.id
                ? "text-[#5f7d6b] font-semibold"
                : "text-[#6b5a58] hover:text-[#5f7d6b]"
            }`}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("inicio");

  const navigate = (page: string) => setCurrentPage(page as Page);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e8e0da]">
      <div className="relative overflow-hidden flex flex-col w-[390px] h-[844px] rounded-[40px] shadow-2xl sm:w-full sm:max-w-[700px] sm:h-screen sm:mx-auto sm:rounded-none sm:shadow-none">
        <Header onNavigate={navigate} currentPage={currentPage} />
        <div className="flex-1 min-h-0 overflow-hidden">
          {currentPage === "inicio" && <Inicio onNavigate={navigate} currentPage={currentPage} />}
          {currentPage === "catalogo" && <Catalogo onNavigate={navigate} currentPage={currentPage} />}
          {currentPage === "nosotros" && <Nosotros onNavigate={navigate} currentPage={currentPage} />}
          {currentPage === "contacto" && <Contacto onNavigate={navigate} currentPage={currentPage} />}
        </div>
      </div>
    </div>
  );
}
