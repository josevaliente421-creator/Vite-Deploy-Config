import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ServiceHero from "@/components/service-hero";
import TrustBar from "@/components/trust-bar";
import FaqSection from "@/components/faq-section";
import FinalCta from "@/components/final-cta";
import { useSEO } from "@/hooks/use-seo";
import { FAQS } from "@shared/seo-content";
import { ShieldAlert, Zap, CheckCircle2, FileCheck, Search, Target, LayoutDashboard, History, Bug, ShieldCheck, Phone } from "lucide-react";

const pests = [
  { name: "Cucarachas", desc: "Rastreras en cocinas, bodegas y zonas húmedas." },
  { name: "Chinches de cama", desc: "En camas, mobiliario y espacios de descanso." },
  { name: "Termitas", desc: "Daño estructural en maderas y construcciones." },
  { name: "Hormigas", desc: "Invasiones en cocinas y despensas." },
  { name: "Moscas", desc: "Control en cocinas y zonas de producción." },
  { name: "Mosquitos", desc: "En patios, jardines y zonas exteriores." },
];

const risks = [
  {
    icon: ShieldAlert,
    title: "Riesgos sanitarios",
    desc: "Los insectos transmiten enfermedades, contaminan alimentos y dañan estructuras, poniendo en peligro a su equipo y su negocio.",
  },
  {
    icon: Zap,
    title: "Cumplimiento normativo",
    desc: "La presencia de plagas en un negocio puede derivar en clausuras y multas sanitarias. El control profesional ayuda a mantener el cumplimiento legal.",
  },
  {
    icon: CheckCircle2,
    title: "Productos de bajo impacto",
    desc: "Utilizamos productos de bajo impacto ambiental y técnicas de aplicación precisas, seguros para personas y mascotas.",
  },
  {
    icon: FileCheck,
    title: "Planes preventivos",
    desc: "Ofrecemos planes periódicos que mantienen sus espacios libres de insectos rastreros y voladores durante todo el año.",
  },
];

const process = [
  { icon: Search, title: "1. Inspección técnica", desc: "Identificamos focos de infestación y vías de acceso de insectos." },
  { icon: Target, title: "2. Diagnóstico", desc: "Determinamos especies y creamos un plan de acción personalizado." },
  { icon: LayoutDashboard, title: "3. Aplicación", desc: "Utilizamos equipos profesionales y productos certificados de bajo impacto." },
  { icon: History, title: "4. Seguimiento", desc: "Control preventivo periódico y monitoreo constante de resultados." },
];

export default function Desinsectacion() {
  useSEO(
    "Desinsectación para Empresas y Locales en Santiago | Andes Plagas",
    "Desinsectación profesional para empresas y locales en Santiago. Control de cucarachas, chinches, termitas y más, con documentación SEREMI. Cotiza hoy."
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <ServiceHero
        image="/hero-desinsectacion.webp"
        imageWidth={1408}
        imageHeight={768}
        title={<>Desinsectación para <span className="text-[hsl(168,64%,44%)]">Empresas y Locales</span> en Santiago</>}
        subtitle="Control de insectos rastreros y voladores con productos de bajo impacto y documentación para fiscalizaciones. Atendemos empresas, industrias y hogares."
        bullets={["Resolución Sanitaria al día", "Productos de bajo impacto", "Reportes técnicos", "Calendario anual disponible"]}
        service="desinsectacion"
        serviceLabel="Desinsectación"
        whatsappMessage="Hola, necesito un servicio de desinsectación (insectos)."
      />

      <TrustBar />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(212,32%,16%)] text-center mb-12 font-display">
            Plagas de insectos que tratamos
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pests.map((pest) => (
              <div key={pest.name} className="flex items-start gap-4 bg-[hsl(210,20%,96%)] rounded-2xl p-6 border border-gray-100">
                <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shrink-0 border border-gray-100">
                  <Bug className="w-5 h-5 text-[hsl(168,64%,44%)]" />
                </div>
                <div>
                  <h3 className="font-bold text-[hsl(212,32%,16%)]">{pest.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mt-1">{pest.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(212,32%,16%)] text-center mb-12 font-display">
            ¿Por qué es importante la desinsectación?
          </h2>
          <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {risks.map((risk) => (
              <div key={risk.title} className="flex gap-5 p-6 rounded-2xl bg-white border border-gray-100">
                <div className="w-14 h-14 bg-[hsl(168,64%,44%)]/10 rounded-2xl flex items-center justify-center shrink-0 border border-[hsl(168,64%,44%)]/20">
                  <risk.icon className="w-7 h-7 text-[hsl(168,64%,44%)]" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-[hsl(212,32%,16%)]">{risk.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{risk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(212,32%,16%)] mb-12 font-display">
            Nuestro proceso de desinsectación
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {process.map((step) => (
              <div key={step.title} className="bg-[hsl(210,20%,96%)] p-7 rounded-2xl border border-gray-100 flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 border border-gray-100">
                  <step.icon className="w-8 h-8 text-[hsl(168,64%,44%)]" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-[hsl(212,32%,16%)]">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[hsl(212,32%,16%)] text-white">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <ShieldCheck className="w-12 h-12 text-[hsl(168,64%,44%)] mx-auto mb-6" />
            <h2 className="text-3xl font-bold font-display mb-4">
              Documentación incluida en cada servicio
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Cada tratamiento se respalda con su certificado, válido ante SEREMI, municipalidades y
              fiscalizaciones. Con reportes técnicos y calendario anual para rubros alimentarios.
            </p>
            <a href="tel:+56942713144" className="inline-flex items-center gap-2 text-xl font-bold hover:text-[#E8762E] transition-colors">
              <Phone className="w-6 h-6 text-[#E8762E]" />
              +56 9 4271 3144
            </a>
          </div>
        </div>
      </section>

      <FaqSection faqs={FAQS.desinsectacion} />

      <FinalCta
        title={<>¿Problemas con insectos? <span className="text-[#E8762E]">Actúa hoy.</span></>}
        subtitle="No permita que una plaga de insectos dañe su negocio o ponga en riesgo la salud de su equipo. Solicite una evaluación profesional."
        service="desinsectacion"
        buttonLabel="Solicitar desinsectación"
        whatsappMessage="Hola, necesito un servicio de desinsectación (insectos)."
      />

      <Footer />
    </div>
  );
}
