import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import WhatsAppIcon from "@/components/whatsapp-icon";
import { PHONE_DISPLAY, PHONE_TEL, trackPhone, trackWhatsApp, whatsappHref } from "@/lib/analytics";

type FinalCtaProps = {
  title: ReactNode;
  subtitle: string;
  service: string;
  buttonLabel: string;
  whatsappMessage: string;
};

export default function FinalCta({ title, subtitle, service, buttonLabel, whatsappMessage }: FinalCtaProps) {
  const scrollToForm = () => {
    const formElement = document.getElementById("quote-form") || document.getElementById("quote-form-hero");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-24 bg-[hsl(212,32%,16%)] text-white relative overflow-hidden">
      <div className="container mx-auto px-5 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display text-balance">{title}</h2>
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-[#E8762E] hover:bg-[#D16524] text-white font-bold h-14 px-10 rounded-xl text-lg shadow-2xl shadow-orange-500/20 transition-all cursor-pointer"
          >
            {buttonLabel}
          </Button>
          <a
            href={whatsappHref(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsApp("final-cta", service)}
          >
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold h-14 px-10 rounded-xl text-lg transition-all cursor-pointer flex items-center justify-center gap-2">
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp directo
            </Button>
          </a>
        </div>
        <div className="mt-10 flex items-center justify-center gap-3 text-xl md:text-2xl font-bold">
          <PhoneCall className="text-[#E8762E] w-6 h-6" />
          <a href={`tel:${PHONE_TEL}`} className="hover:text-[#E8762E] transition-colors tracking-tight" onClick={() => trackPhone("final-cta", service)}>
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
