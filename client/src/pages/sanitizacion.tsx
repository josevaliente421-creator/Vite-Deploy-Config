import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ServiceHero from "@/components/service-hero";
import TrustBar from "@/components/trust-bar";
import FaqSection from "@/components/faq-section";
import FinalCta from "@/components/final-cta";
import { useSEO } from "@/hooks/use-seo";
import { FAQS } from "@shared/seo-content";
import { ShieldAlert, ClipboardCheck, History, Sparkles, Search, Waves, ShieldCheck, CheckCircle2, Phone } from "lucide-react";

const whenToSanitize = [
  { icon: ShieldAlert, title: "Después de brotes", desc: "Desinfección tras confirmación de contagios en su establecimiento." },
  { icon: ClipboardCheck, title: "Ante fiscalizaciones", desc: "Cumplimiento de la normativa sanitaria vigente (SEREMI)." },
  { icon: History, title: "Protocolos preventivos", desc: "Mantenimiento periódico de espacios saludables." },
  { icon: Sparkles, title: "Reapertura de espacios", desc: "Asegure un inicio libre de agentes patógenos." },
];

const method = [
  { icon: Search, title: "1. Evaluación técnica", desc: "Identificamos zonas de alto tráfico y puntos críticos." },
  { icon: Waves, title: "2. Nebulización ULV", desc: "Aplicación de micro-gotas que alcanzan cada rincón." },
  { icon: ShieldCheck, title: "3. Productos autorizados", desc: "Desinfectantes profesionales con registro sanitario." },
  { icon: CheckCircle2, title: "4. Certificado oficial", desc: "Entrega de documento válido ante autoridades sanitarias." },
];

const benefits = [
  "Eliminación de agentes patógenos (virus, bacterias, hongos)",
  "Cumplimiento de la normativa sanitaria vigente (SEREMI)",
  "Protección para trabajadores, clientes y familia",
  "Ambientes más seguros para su negocio",
];

export default function Sanitizacion() {
  useSEO(
    "Sanitización para Empresas y Locales en Santiago | Andes Plagas",
    "Sanitización y desinfección profesional para empresas y hogares en Santiago. Cumple la normativa SEREMI con certificado de aplicación. Cotiza hoy."
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <ServiceHero
        image="/hero-bg.webp"
        imageWidth={1024}
        imageHeight={1024}
        title={<>Sanitización para <span className="text-[hsl(168,64%,44%)]">Empresas y Locales</span> en Santiago</>}
        subtitle="Desinfección profesional de ambientes contra virus, bacterias y agentes contaminantes, con productos autorizados y certificado de aplicación."
        bullets={["Productos con registro sanitario", "Técnicos especializados", "Certificado de aplicación", "Atendemos urgencias en la RM"]}
        service="sanitizacion"
        serviceLabel="Sanitización"
        whatsappMessage="Hola, necesito un servicio de sanitización."
      />

      <TrustBar />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(212,32%,16%)] font-display">
              ¿Cuándo necesita sanitizar su empresa?
            </h2>
            <p className="text-gray-500 text-lg font-medium mt-3">
              La prevención evita multas, contagios y cierres.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whenToSanitize.map((card) => (
              <div key={card.title} className="bg-[hsl(210,20%,96%)] rounded-2xl p-7 text-center border border-gray-100">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-5 border border-gray-100">
                  <card.icon className="w-7 h-7 text-[hsl(168,64%,44%)]" />
                </div>
                <h3 className="font-bold text-[hsl(212,32%,16%)] mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(212,32%,16%)] mb-12 font-display">
            Nuestro método de sanitización
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {method.map((step) => (
              <div key={step.title} className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                <div className="w-16 h-16 bg-[hsl(168,64%,44%)]/10 rounded-full flex items-center justify-center mb-6 border border-[hsl(168,64%,44%)]/20">
                  <step.icon className="w-8 h-8 text-[hsl(168,64%,44%)]" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-[hsl(212,32%,16%)]">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(212,32%,16%)] text-center font-display mb-10">
              Beneficios de una sanitización profesional
            </h2>
            <div className="space-y-5">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-4 bg-[hsl(210,20%,96%)] rounded-xl p-5 border border-gray-100">
                  <div className="bg-[hsl(168,64%,44%)] rounded-full p-1 mt-0.5 shrink-0">
                    <CheckCircle2 className="text-white w-4 h-4" />
                  </div>
                  <p className="text-lg font-medium text-[hsl(212,32%,16%)]">{benefit}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-8 flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 text-[hsl(168,64%,44%)]" />
              Consulte su caso al +56 9 4271 3144
            </p>
          </div>
        </div>
      </section>

      <FaqSection faqs={FAQS.sanitizacion} />

      <FinalCta
        title={<>Proteja su espacio <span className="text-[#E8762E]">hoy mismo</span></>}
        subtitle="Agende su sanitización profesional. Atención para empresas, locales comerciales y hogares en Santiago y la RM."
        service="sanitizacion"
        buttonLabel="Solicitar sanitización"
        whatsappMessage="Hola, necesito un servicio de sanitización."
      />

      <Footer />
    </div>
  );
}
