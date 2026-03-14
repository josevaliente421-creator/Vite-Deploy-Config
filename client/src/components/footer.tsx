import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[hsl(212,32%,16%)] text-white pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute bottom-0 right-0 opacity-5">
        <Star className="w-96 h-96 text-white rotate-45 transform translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img 
                src="https://res.cloudinary.com/dojxjnqsg/image/upload/v1773520878/f3a3b2ff-3e00-4a9c-856c-a421cc227182.png" 
                alt="Andes Plagas - Especialistas en control de plagas en Santiago" 
                className="h-14 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-bold text-white leading-tight text-lg tracking-tight font-display">
                  ANDES PLAGAS
                </span>
                <span className="text-[10px] text-[hsl(168,64%,44%)] font-bold tracking-widest uppercase">
                  Sanidad Ambiental
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Líderes en sanidad ambiental. Protegemos lo que más importa con tecnología y profesionalismo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[hsl(168,64%,44%)]/10 hover:bg-[hsl(168,64%,44%)] flex items-center justify-center transition-all text-[hsl(168,64%,44%)] hover:text-white border border-[hsl(168,64%,44%)]/20">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[hsl(168,64%,44%)]/10 hover:bg-[hsl(168,64%,44%)] flex items-center justify-center transition-all text-[hsl(168,64%,44%)] hover:text-white border border-[hsl(168,64%,44%)]/20">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[hsl(168,64%,44%)]/10 hover:bg-[hsl(168,64%,44%)] flex items-center justify-center transition-all text-[hsl(168,64%,44%)] hover:text-white border border-[hsl(168,64%,44%)]/20">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold font-display mb-6 border-b border-[hsl(168,64%,44%)]/30 inline-block pb-2">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+56942713144" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[hsl(168,64%,44%)] transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-semibold">+56 9 4271 3144</span>
                </a>
              </li>
              <li>
                <a href="mailto:contacto@andesplagas.cl" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[hsl(168,64%,44%)] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>contacto@andesplagas.cl</span>
                </a>
              </li>
            </ul>
            <a href="#contacto" className="w-full mt-6">
              <Button className="w-full bg-[hsl(23,79%,55%)] hover:bg-[hsl(23,79%,45%)] text-white font-bold rounded-full cursor-pointer">
                Solicitar Visita Técnica
              </Button>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Andes Plagas. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
