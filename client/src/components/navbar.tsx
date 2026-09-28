import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import WhatsAppIcon from "@/components/whatsapp-icon";
import { cn } from "@/lib/utils";
import { PHONE_DISPLAY, PHONE_TEL, trackPhone, trackWhatsApp, whatsappHref } from "@/lib/analytics";

const WHATSAPP_MSG = "Hola, necesito ayuda con control de plagas.";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleQuoteClick = () => {
    const el = document.getElementById("quote-form-hero") || document.getElementById("quote-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white py-5"
      )}
    >
      <div className="container mx-auto px-5 md:px-6 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <img
            src="https://res.cloudinary.com/dojxjnqsg/image/upload/v1773520878/f3a3b2ff-3e00-4a9c-856c-a421cc227182.png"
            alt="Andes Plagas - Control de plagas y sanitización en Santiago"
            width="56"
            height="56"
            className="h-14 w-auto object-contain group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-bold text-[hsl(212,32%,16%)] leading-tight text-lg tracking-tight font-display">
              ANDES PLAGAS
            </span>
            <span className="text-[10px] text-[hsl(168,64%,44%)] font-bold tracking-widest uppercase">
              Sanidad Ambiental
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          <Link href="/" className="text-sm font-medium text-[hsl(212,32%,16%)] hover:text-[hsl(168,64%,44%)] transition-colors cursor-pointer">
            Inicio
          </Link>
          <Link href="/control-de-plagas-empresas" className="text-sm font-medium text-[hsl(212,32%,16%)] hover:text-[hsl(168,64%,44%)] transition-colors cursor-pointer">
            Empresas
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-[hsl(212,32%,16%)] hover:text-[hsl(168,64%,44%)] transition-colors outline-none cursor-pointer">
              Servicios <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              <DropdownMenuItem>
                <Link href="/desratizacion" className="w-full cursor-pointer">Desratización</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/desinsectacion" className="w-full cursor-pointer">Desinsectación</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/sanitizacion" className="w-full cursor-pointer">Sanitización</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/certificaciones" className="text-sm font-medium text-[hsl(212,32%,16%)] hover:text-[hsl(168,64%,44%)] transition-colors cursor-pointer">
            Certificaciones
          </Link>

          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-2 text-sm font-semibold text-[hsl(212,32%,16%)] hover:text-[hsl(168,64%,44%)] transition-colors"
            onClick={() => trackPhone("navbar")}
          >
            <Phone className="w-4 h-4 text-[hsl(168,64%,44%)]" />
            {PHONE_DISPLAY}
          </a>
        </div>

        <div className="hidden md:block">
          <Button
            onClick={handleQuoteClick}
            className="bg-[hsl(23,79%,55%)] hover:bg-[hsl(23,79%,45%)] text-white rounded-full px-6 font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            SOLICITAR EVALUACIÓN
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-[hsl(212,32%,16%)]"
          aria-label="Abrir menú"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg p-5 flex flex-col gap-3 animate-in slide-in-from-top-5 max-h-[calc(100vh-80px)] overflow-y-auto">
          <Link href="/" onClick={closeMobileMenu} className="text-base font-medium p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
            Inicio
          </Link>
          <Link href="/control-de-plagas-empresas" onClick={closeMobileMenu} className="text-base font-medium p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
            Empresas
          </Link>
          <div className="p-3">
            <span className="text-base font-medium block mb-3 text-[hsl(212,32%,16%)]">Servicios</span>
            <div className="pl-4 flex flex-col gap-3 border-l-2 border-[hsl(168,64%,44%)]">
              <Link href="/desratizacion" onClick={closeMobileMenu} className="text-base text-gray-600 hover:text-[hsl(168,64%,44%)] cursor-pointer py-1">Desratización</Link>
              <Link href="/desinsectacion" onClick={closeMobileMenu} className="text-base text-gray-600 hover:text-[hsl(168,64%,44%)] cursor-pointer py-1">Desinsectación</Link>
              <Link href="/sanitizacion" onClick={closeMobileMenu} className="text-base text-gray-600 hover:text-[hsl(168,64%,44%)] cursor-pointer py-1">Sanitización</Link>
            </div>
          </div>
          <Link href="/certificaciones" onClick={closeMobileMenu} className="text-base font-medium p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
            Certificaciones
          </Link>

          <div className="pt-4 pb-2 border-t border-gray-100 flex flex-col gap-3 mt-2">
            <Button onClick={handleQuoteClick} className="w-full h-14 bg-[hsl(23,79%,55%)] text-white rounded-xl font-bold text-lg cursor-pointer hover:bg-[hsl(23,79%,45%)]">
              SOLICITAR EVALUACIÓN
            </Button>

            <a
              href={`tel:${PHONE_TEL}`}
              className="w-full"
              onClick={() => trackPhone("mobile-menu")}
            >
              <Button variant="outline" className="w-full h-14 border-2 border-[hsl(168,64%,44%)] text-[hsl(168,64%,44%)] hover:bg-[hsl(168,64%,44%)] hover:text-white font-bold text-lg cursor-pointer flex items-center justify-center gap-2 rounded-xl">
                <Phone className="w-5 h-5" />
                Llamar ahora
              </Button>
            </a>

            <a
              href={whatsappHref(WHATSAPP_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
              onClick={() => trackWhatsApp("mobile-menu")}
            >
              <Button variant="outline" className="w-full h-14 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold text-lg cursor-pointer flex items-center justify-center gap-2 rounded-xl">
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp Directo
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
