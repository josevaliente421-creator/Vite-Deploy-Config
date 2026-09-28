import { Link } from "wouter";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/whatsapp-icon";
import { CONTACT_EMAIL, PHONE_DISPLAY, PHONE_TEL, trackPhone, trackWhatsApp, whatsappHref } from "@/lib/analytics";

const WHATSAPP_MSG = "Hola, necesito ayuda con control de plagas.";

const serviceLinks = [
  { label: "Control de plagas empresas", href: "/control-de-plagas-empresas" },
  { label: "Desratización", href: "/desratizacion" },
  { label: "Desinsectación", href: "/desinsectacion" },
  { label: "Sanitización", href: "/sanitizacion" },
];

export default function Footer() {
  const handleQuoteClick = () => {
    const el = document.getElementById("quote-form-hero") || document.getElementById("quote-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(whatsappHref(WHATSAPP_MSG), "_blank", "noopener");
      trackWhatsApp("footer");
    }
  };

  return (
    <footer className="bg-[hsl(212,32%,16%)] text-white pt-16 pb-10">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <img
                src="/logo.webp"
                alt="Andes Plagas - Especialistas en control de plagas en Santiago"
                width="504"
                height="296"
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
              Control profesional de plagas y sanitización para empresas, locales comerciales y hogares.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold font-display mb-5 border-b border-[hsl(168,64%,44%)]/30 inline-block pb-2">
              Servicios
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold font-display mb-5 border-b border-[hsl(168,64%,44%)]/30 inline-block pb-2">
              Empresa
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/certificaciones" className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer">
                  Certificaciones
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidad" className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer">
                  Política de privacidad
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold font-display mb-5 border-b border-[hsl(168,64%,44%)]/30 inline-block pb-2">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group" onClick={() => trackPhone("footer")}>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[hsl(168,64%,44%)] transition-colors shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-semibold">{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a href={whatsappHref(WHATSAPP_MSG)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group" onClick={() => trackWhatsApp("footer")}>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#25D366] transition-colors shrink-0">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <span className="font-semibold">WhatsApp</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[hsl(168,64%,44%)] transition-colors shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>{CONTACT_EMAIL}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm">Santiago, Región Metropolitana</span>
              </li>
            </ul>
            <Button onClick={handleQuoteClick} className="mt-6 w-full bg-[hsl(23,79%,55%)] hover:bg-[hsl(23,79%,45%)] text-white font-bold rounded-full cursor-pointer">
              Solicitar evaluación
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Andes Plagas. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/politica-de-privacidad" className="hover:text-white transition-colors cursor-pointer">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
