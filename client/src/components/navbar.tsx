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
      <div className="container mx-auto px-5 md:px-6 flex items-center justify-between">
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg p-5 flex flex-col gap-3 animate-in slide-in-from-top-5 max-h-[calc(100vh-80px)] overflow-y-auto">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
            Inicio
          </Link>
          <div className="p-3">
            <span className="text-base font-medium block mb-3 text-[hsl(212,32%,16%)]">Servicios</span>
            <div className="pl-4 flex flex-col gap-3 border-l-2 border-[hsl(168,64%,44%)]">
              <Link href="/desratizacion" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-gray-600 hover:text-[hsl(168,64%,44%)] cursor-pointer py-1">Desratización</Link>
              <Link href="/desinsectacion" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-gray-600 hover:text-[hsl(168,64%,44%)] cursor-pointer py-1">Desinsectación</Link>
              <Link href="/sanitizacion" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-gray-600 hover:text-[hsl(168,64%,44%)] cursor-pointer py-1">Sanitización</Link>
            </div>
          </div>
          <Link href="/certificaciones" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
            Certificaciones
          </Link>
          
          <div className="pt-4 pb-2 border-t border-gray-100 flex flex-col gap-3 mt-2">
            <Button onClick={handleQuoteClick} className="w-full h-14 bg-[hsl(23,79%,55%)] text-white rounded-xl font-bold text-lg cursor-pointer hover:bg-[hsl(23,79%,45%)]">
              COTIZAR AHORA
            </Button>
            
            <a href="https://wa.me/56942713144" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button variant="outline" className="w-full h-14 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold text-lg cursor-pointer flex items-center justify-center gap-2 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 21.611l-3.324-.877-3.856.883.896-3.832-.888-3.356c1.196-4.52 5.568-7.551 10.155-7.551 5.761 0 10.428 4.646 10.428 10.377 0 5.73-4.667 10.377-10.428 10.377-1.077 0-2.126-.17-3.111-.476zm6.541-11.758c-1.282-1.272-2.986-1.975-4.802-1.975-3.738 0-6.779 3.023-6.779 6.742 0 1.189.313 2.353.906 3.385l-.963 3.518 3.652-.949c.995.539 2.112.822 3.262.822h.003c3.736 0 6.778-3.023 6.778-6.744 0-1.802-.705-3.493-1.993-4.773zm-4.793 10.25h-.002c-1.002 0-1.984-.267-2.842-.773l-.203-.119-2.116.55.565-2.046-.131-.208c-.556-.882-.849-1.9-.849-2.96 0-3.082 2.522-5.59 5.617-5.59 1.498 0 2.906.58 3.963 1.631a5.578 5.578 0 011.646 3.962c0 3.08-2.523 5.589-5.616 5.589zm3.085-4.18c-.169-.084-1.003-.492-1.158-.548-.155-.056-.268-.084-.381.084-.112.168-.436.548-.535.66-.098.112-.197.126-.366.042-.169-.084-.716-.261-1.365-.838-.505-.449-.846-1.004-.944-1.172-.099-.168-.01-.259.074-.343.076-.076.169-.196.253-.294.085-.098.113-.168.169-.28.056-.112.028-.21-.014-.294-.042-.084-.381-.91-.521-1.246-.136-.326-.275-.282-.381-.287-.098-.004-.21-.005-.324-.005-.112 0-.295.042-.45.21-.155.168-.591.574-.591 1.401 0 .827.605 1.626.69 1.738.084.112 1.196 1.808 2.898 2.502.405.165.722.264.969.338.407.128.778.11 1.07.067.327-.048 1.003-.406 1.144-.8.14-.393.14-.73.098-.8-.042-.07-.154-.112-.323-.196z"/></svg>
                WhatsApp Directo
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
