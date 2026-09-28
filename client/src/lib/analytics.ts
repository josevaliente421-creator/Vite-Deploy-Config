export const SITE_URL = "https://www.andesplagas.cl";
export const WHATSAPP_NUMBER = "56942713144";
export const PHONE_TEL = "+56942713144";
export const PHONE_DISPLAY = "+56 9 4271 3144";
export const CONTACT_EMAIL = "gerencia@andesplagas.cl";
export const LEAD_WEBHOOK_URL = "https://hook.us2.make.com/koajghs02g7rrr1dn5agxgxqvxbn74lt";

export function currentPage(): string {
  if (typeof window === "undefined") return "/";
  return window.location.pathname || "/";
}

function push(event: string, params: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, page: currentPage(), ...params });
}

export function whatsappHref(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function trackWhatsApp(location: string, service?: string) {
  push("whatsapp_click", { location, ...(service ? { service } : {}) });
}

export function trackPhone(location: string, service?: string) {
  push("phone_click", { location, ...(service ? { service } : {}) });
}

export function trackFormStart(location: string, service?: string) {
  push("form_start", { location, ...(service ? { service } : {}) });
}

export function trackLead(params: {
  location: string;
  service: string;
  customerType: string;
}) {
  push("generate_lead", {
    location: params.location,
    service: params.service,
    customer_type: params.customerType,
  });

  // Conversión existente de Google Ads ("Contacto", AW-16650567440).
  // Solo se dispara con leads reales del formulario (no en clics de WhatsApp).
  if (typeof window.gtag_report_conversion === "function") {
    window.gtag_report_conversion();
  }
}
