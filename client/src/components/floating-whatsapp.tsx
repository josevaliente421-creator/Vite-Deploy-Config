import WhatsAppIcon from "@/components/whatsapp-icon";
import { trackWhatsApp, whatsappHref } from "@/lib/analytics";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref("Hola, necesito ayuda con una plaga.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[20px] right-[20px] z-[9999] w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer"
      aria-label="Chat en WhatsApp"
      onClick={() => trackWhatsApp("floating")}
    >
      <WhatsAppIcon className="w-7 h-7 sm:w-[34px] sm:h-[34px]" />
    </a>
  );
}
