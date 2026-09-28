import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ServiceHero from "@/components/service-hero";
import TrustBar from "@/components/trust-bar";
import FaqSection from "@/components/faq-section";
import FinalCta from "@/components/final-cta";
import { useSEO } from "@/hooks/use-seo";
import { FAQS } from "@shared/seo-content";
import { ShieldAlert, Zap, CheckCircle2, FileCheck, Search, Target, LayoutDashboard, History, UtensilsCrossed, Building2, Warehouse, Home, Phone, ShieldCheck } from "lucide-react";

const risks = [
  {
    icon: ShieldAlert,
    color: "red",
    title: "Riesgos sanitarios",
    desc: "Los roedores transmiten enfermedades graves como Hantavirus, Leptospirosis y Salmonelosis, poniendo en peligro a sus colaboradores y clientes.",
  },
  {
    icon: Zap,
    color: "orange",
    title: "Daños estructurales",
    desc: "Su hábito de roer puede causar cortocircuitos e incendios al dañar cables eléctricos, además de destruir mobiliario y estructuras.",
  },
  {
    icon: CheckCircle2,
    color: "teal",
    title: "Contaminación de alimentos",
    desc: "Contaminan suministros con orina, heces y pelos, provocando pérdidas económicas y riesgos de intoxicación.",
  },
  {
    icon: FileCheck,
    color: "blue",
    title: "Multas y clausuras",
    desc: "Para empresas, la presencia de roedores puede significar clausura y multas de la autoridad sanitaria, dañando su reputación.",
  },
];

const process = [
  { icon: Search, title: "1. Inspección técnica", desc: "Evaluamos puntos críticos y focos de infestación en terreno." },
  { icon: Target, title: "2. Diagnóstico", desc: "Creamos un plan de acción personalizado según la especie identificada." },
  { icon: LayoutDashboard, title: "3. Instalación", desc: "Colocamos estaciones de cebado seguras, ancladas y monitoreadas." },
  { icon: History, title: "4. Seguimiento", desc: "Control preventivo periódico y monitoreo constante de resultados." },
];

const sectors = [
  { icon: UtensilsCrossed, title: "Restaurantes y alimentos", desc: "Planes con certificación para locales que manipulan alimentos." },
  { icon: Building2, title: "Empresas y oficinas", desc: "Programas preventivos para oficinas y locales comerciales." },
  { icon: Warehouse, title: "Industria y bodegas", desc: "Control para plantas de alimentos y centros logísticos." },
  { icon: Home, title: "Hogares", desc: "Servicios puntuales con productos de bajo impacto para su familia." },
];

export default function Desratizacion() {
  useSEO(
    "Desratización para Empresas y Locales en Santiago | Andes Plagas",
    "Servicio de desratización para empresas, locales comerciales y hogares en Santiago. Control de roedores con documentación SEREMI. Cotiza tu evaluación."
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <ServiceHero
        image="/service-1.webp"
        imageWidth={1408}
        imageHeight={768}
        title={<>Desratización para <span className="text-[hsl(168,64%,44%)]">Empresas y Locales</span> en Santiago</>}
        subtitle="Control de roedores con métodos certificados, seguros y efectivos. Eliminamos el problema y dejamos la documentación al día para su negocio."
        bullets={["Resolución Sanitaria al día", "Estaciones de cebado seguras", "Documentación SEREMI", "Atendemos urgencias en la RM"]}
        service="desratizacion"
        serviceLabel="Desratización"
        whatsappMessage="Hola, necesito un servicio de desratización."
        defaultProblem="Roedores"
      />

      <TrustBar />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(212,32%,16%)] text-center mb-12 font-display">
            ¿Por qué es importante la desratización?
          </h2>
          <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {risks.map((risk) => (
              <div key={risk.title} className="flex gap-5 p-6 rounded-2xl bg-[hsl(210,20%,96%)] border border-gray-100">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 border border-gray-100">
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

      <section className="py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(212,32%,16%)] mb-12 font-display">
            Nuestro proceso de desratización
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {process.map((step) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(212,32%,16%)] text-center mb-12 font-display">
            Desratización para cada tipo de cliente
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {sectors.map((sector) => (
              <div key={sector.title} className="bg-[hsl(210,20%,96%)] rounded-2xl p-7 text-center border border-gray-100">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100">
                  <sector.icon className="w-7 h-7 text-[hsl(168,64%,44%)]" />
                </div>
                <h3 className="font-bold text-[hsl(212,32%,16%)] mb-2">{sector.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{sector.desc}</p>
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
              Entregamos el Certificado Oficial de Tratamiento, válido ante SEREMI, municipalidades y
              fiscalizaciones de la autoridad sanitaria. Ideal para empresas que deben demostrar un plan
              de control de roedores vigente.
            </p>
            <a href="tel:+56942713144" className="inline-flex items-center gap-2 text-xl font-bold hover:text-[#E8762E] transition-colors">
              <Phone className="w-6 h-6 text-[#E8762E]" />
              +56 9 4271 3144
            </a>
          </div>
        </div>
      </section>

      <FaqSection faqs={FAQS.desratizacion} />

      <FinalCta
        title={<>¿Problemas con roedores? <span className="text-[#E8762E]">Actúa hoy.</span></>}
        subtitle="No permita que una plaga ponga en riesgo la salud de su equipo ni la reputación de su negocio. Solicite una evaluación profesional."
        service="desratizacion"
        buttonLabel="Solicitar desratización"
        whatsappMessage="Hola, necesito un servicio de desratización."
      />

      <Footer />
    </div>
  );
}
