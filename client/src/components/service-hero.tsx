import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import QuoteForm from "@/components/quote-form";
import WhatsAppIcon from "@/components/whatsapp-icon";
import { trackWhatsApp, whatsappHref } from "@/lib/analytics";

type ServiceHeroProps = {
  image: string;
  imageWidth: number;
  imageHeight: number;
  title: ReactNode;
  subtitle: string;
  bullets: string[];
  service: string;
  serviceLabel: string;
  whatsappMessage: string;
  formTitle?: string;
  formSubtitle?: string;
  defaultProblem?: string;
};

export default function ServiceHero({
  image,
  imageWidth,
  imageHeight,
  title,
  subtitle,
  bullets,
  service,
  serviceLabel,
  whatsappMessage,
  formTitle = "Cotización rápida",
  formSubtitle = "Cuéntanos tu problema y te contactamos a la brevedad.",
  defaultProblem,
}: ServiceHeroProps) {
  const scrollToForm = () => {
    const formElement = document.getElementById("quote-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={`Servicio profesional de ${serviceLabel.toLowerCase()} en Santiago`}
          width={imageWidth}
          height={imageHeight}
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(212,32%,16%)]/90 via-[hsl(212,32%,16%)]/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="space-y-6 max-w-2xl text-white">
            <h1 className="text-[2.25rem] sm:text-[2.5rem] leading-[1.1] md:text-5xl lg:text-6xl font-bold font-display text-balance">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">{subtitle}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {bullets.map((bullet) => (
                <div key={bullet} className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="text-[hsl(168,64%,44%)] w-5 h-5 shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-4 w-full">
              <Button
                onClick={scrollToForm}
                size="lg"
                className="w-full sm:w-auto sm:flex-1 bg-[#E8762E] hover:bg-[#D16524] text-white font-bold h-14 px-8 rounded-lg shadow-lg hover:shadow-orange-500/30 transition-all cursor-pointer"
              >
                Solicitar evaluación
              </Button>
              <a
                href={whatsappHref(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-[0.6]"
                onClick={() => trackWhatsApp("hero", service)}
              >
                <Button size="lg" variant="outline" className="w-full bg-[#25D366]/10 border-2 border-[#25D366] text-white hover:bg-[#25D366] hover:text-white font-bold h-14 px-6 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2">
                  <WhatsAppIcon className="w-5 h-5" />
                  Hablar por WhatsApp
                </Button>
              </a>
            </div>
          </div>

          <QuoteForm
            id="quote-form"
            service={service}
            serviceLabel={serviceLabel}
            location="hero"
            title={formTitle}
            subtitle={formSubtitle}
            defaultProblem={defaultProblem}
            whatsappMessage={whatsappMessage}
          />
        </div>
      </div>
    </section>
  );
}
