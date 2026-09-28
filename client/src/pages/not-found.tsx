import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import WhatsAppIcon from "@/components/whatsapp-icon";
import { useSEO } from "@/hooks/use-seo";
import { trackWhatsApp, whatsappHref } from "@/lib/analytics";

export default function NotFound() {
  useSEO("Página no encontrada | Andes Plagas", "La página que buscas no existe o fue movida.", {
    noindex: true,
  });

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 px-5">
      <div className="max-w-md w-full text-center">
        <p className="text-6xl font-bold text-[hsl(168,64%,44%)] font-display mb-4">404</p>
        <h1 className="text-2xl font-bold text-[hsl(212,32%,16%)] mb-3 font-display">
          Página no encontrada
        </h1>
        <p className="text-gray-600 mb-8">
          La página que buscas no existe o fue movida. Podemos ayudarte con tu problema de plagas.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button className="w-full sm:w-auto bg-[hsl(23,79%,55%)] hover:bg-[hsl(23,79%,45%)] text-white font-bold h-12 px-6 rounded-lg cursor-pointer">
              <Home className="w-4 h-4" />
              Volver al inicio
            </Button>
          </Link>
          <a
            href={whatsappHref("Hola, necesito ayuda con una plaga.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsApp("404")}
          >
            <Button variant="outline" className="w-full sm:w-auto border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold h-12 px-6 rounded-lg cursor-pointer flex items-center justify-center gap-2">
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
