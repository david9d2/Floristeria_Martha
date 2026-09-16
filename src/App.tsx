import { useState } from "react";
import Inicio from "./pages/Inicio";
import Catalogo from "./pages/Catalogo";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";

type Page = "inicio" | "catalogo" | "nosotros" | "contacto";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("inicio");

  const navigate = (page: string) => setCurrentPage(page as Page);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e8e0da]">
      <div className="w-[390px] h-[844px] relative overflow-hidden rounded-[40px] shadow-2xl">
        {currentPage === "inicio" && <Inicio onNavigate={navigate} currentPage={currentPage} />}
        {currentPage === "catalogo" && <Catalogo onNavigate={navigate} currentPage={currentPage} />}
        {currentPage === "nosotros" && <Nosotros onNavigate={navigate} currentPage={currentPage} />}
        {currentPage === "contacto" && <Contacto onNavigate={navigate} currentPage={currentPage} />}
      </div>
    </div>
  );
}
