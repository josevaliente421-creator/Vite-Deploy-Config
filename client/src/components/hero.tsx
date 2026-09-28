import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import QuoteForm from "@/components/quote-form";
import { PHONE_DISPLAY, PHONE_TEL, trackPhone, whatsappHref, trackWhatsApp } from "@/lib/analytics";
import WhatsAppIcon from "@/components/whatsapp-icon";

const WHATSAPP_MSG = "Hola, necesito control de plagas para mi empresa en Santiago.";

export default function Hero() {
  const scrollToForm = () => {
    const formElement = document.getElementById("quote-form-hero");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.webp"
          alt="Equipo profesional de control de plagas en instalaciones comerciales"
          width="1024"
          height="1024"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(212,32%,16%)]/90 via-[hsl(212,32%,16%)]/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="space-y-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(168,64%,44%)]/20 border border-[hsl(168,64%,44%)]/30 backdrop-blur-sm">
              <CheckCircle2 className="w-4 h-4 text-[hsl(168,64%,44%)]" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Resolución Sanitaria al día</span>
            </div>

            <h1 className="text-[2.25rem] sm:text-[2.5rem] leading-[1.1] md:text-5xl lg:text-6xl font-bold font-display text-white drop-shadow-lg text-balance">
              Control de Plagas para <span className="text-[hsl(168,64%,44%)]">Empresas</span> en Santiago
            </h1>

            <p className="text-lg text-gray-200 md:text-xl max-w-lg leading-relaxed">
              Desratización, desinsectación y sanitización con programas MIP y documentación para
              auditorías SEREMI. Atendemos empresas, locales comerciales y hogares.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full">
              <Button onClick={scrollToForm} size="lg" className="w-full sm:w-auto sm:flex-1 bg-[#E8762E] hover:bg-[#D16524] text-white font-bold h-14 px-8 rounded-lg shadow-lg hover:shadow-orange-500/30 transition-all cursor-pointer">
                Solicitar evaluación
                <ArrowRight className="w-5 h-5" />
              </Button>
              <a
                href={whatsappHref(WHATSAPP_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-[0.6]"
                onClick={() => trackWhatsApp("hero")}
              >
                <Button size="lg" variant="outline" className="w-full bg-[#25D366]/10 border-2 border-[#25D366] text-white hover:bg-[#25D366] hover:text-white font-bold h-14 px-4 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2">
                  <WhatsAppIcon className="w-5 h-5" />
                  WhatsApp
                </Button>
              </a>
            </div>

            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 text-white font-semibold hover:text-[hsl(168,64%,44%)] transition-colors pt-1"
              onClick={() => trackPhone("hero")}
            >
              <Phone className="w-4 h-4" />
              {PHONE_DISPLAY}
            </a>
          </div>

          <QuoteForm
            id="quote-form-hero"
            service="general"
            serviceLabel="Control de Plagas"
            location="hero"
            title="¿Buscas un presupuesto?"
            subtitle="Cuéntanos tu problema y te contactamos a la brevedad."
          />
        </div>
      </div>
    </section>
  );
}
