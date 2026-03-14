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
import { cn } from "@/lib/utils";

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
    } else {
      window.location.href = "/#quote-form-hero";
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <img 
              src="https://res.cloudinary.com/dojxjnqsg/image/upload/v1773520878/f3a3b2ff-3e00-4a9c-856c-a421cc227182.png" 
              alt="Andes Plagas - Control de plagas y sanitización en Santiago" 
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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-[hsl(212,32%,16%)] hover:text-[hsl(168,64%,44%)] transition-colors cursor-pointer">
            Inicio
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
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button 
            onClick={handleQuoteClick}
            className="bg-[hsl(23,79%,55%)] hover:bg-[hsl(23,79%,45%)] text-white rounded-full px-6 font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            COTIZAR AHORA
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-[hsl(212,32%,16%)]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          <Link href="/" className="text-sm font-medium p-2 hover:bg-gray-50 rounded cursor-pointer">
            Inicio
          </Link>
          <div className="p-2">
            <span className="text-sm font-medium block mb-2">Servicios</span>
            <div className="pl-4 flex flex-col gap-2 border-l-2 border-[hsl(168,64%,44%)]">
              <Link href="/desratizacion" className="text-sm text-gray-600 cursor-pointer">Desratización</Link>
              <Link href="/desinsectacion" className="text-sm text-gray-600 cursor-pointer">Desinsectación</Link>
              <Link href="/sanitizacion" className="text-sm text-gray-600 cursor-pointer">Sanitización</Link>
            </div>
          </div>
          <Link href="/certificaciones" className="text-sm font-medium p-2 hover:bg-gray-50 rounded cursor-pointer">
            Certificaciones
          </Link>
          <Button onClick={handleQuoteClick} className="w-full bg-[hsl(23,79%,55%)] text-white rounded-full font-bold cursor-pointer hover:bg-[hsl(23,79%,45%)]">
            COTIZAR AHORA
          </Button>
        </div>
      )}
    </nav>
  );
}
