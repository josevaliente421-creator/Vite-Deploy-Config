import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ServiceHero from "@/components/service-hero";
import FaqSection from "@/components/faq-section";
import FinalCta from "@/components/final-cta";
import TrustBar from "@/components/trust-bar";
import { useSEO } from "@/hooks/use-seo";
import { FAQS } from "@shared/seo-content";
import { Rat, Bug, ShieldAlert, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const problems = [
  {
    icon: Rat,
    title: "Roedores en instalaciones",
    desc: "Ratas y ratones en bodegas, cocinas o zonas de carga: riesgo sanitario y de clausura.",
  },
  {
    icon: Bug,
    title: "Cucarachas e insectos",
    desc: "Insectos rastreros y voladores que contaminan productos e insumos.",
  },
  {
    icon: ShieldAlert,
    title: "Riesgo de fiscalización",
    desc: "La autoridad sanitaria puede clausurar locales por presencia de plagas.",
  },
  {
    icon: ClipboardCheck,
    title: "Exigencia de documentación",
    desc: "Su empresa necesita certificados y protocolos al día para auditorías.",
  },
];

const services = [
  {
    title: "Programas MIP preventivos",
    desc: "Planes con calendario de visitas, monitoreo y seguimiento continuo.",
  },
  {
    title: "Desratización",
    desc: "Control de roedores con estaciones de cebado seguras y monitoreadas.",
  },
  {
    title: "Desinsectación",
    desc: "Control de insectos rastreros y voladores con productos de bajo impacto.",
  },
  {
    title: "Sanitización",
    desc: "Desinfección de ambientes contra virus, bacterias y hongos patógenos.",
  },
  {
    title: "Documentación y certificados",
    desc: "Certificados de aplicación válidos ante SEREMI y municipalidades.",
  },
  {
    title: "Seguimiento y reportes",
    desc: "Reportes técnicos y control preventivo periódico de resultados.",
  },
];

const process = [
  { number: "1", title: "Evaluación", desc: "Visitamos su empresa y evaluamos los puntos críticos en terreno." },
  { number: "2", title: "Identificación", desc: "Determinamos la especie y los focos del problema." },
  { number: "3", title: "Propuesta", desc: "Preparamos un plan de acción personalizado para su rubro." },
  { number: "4", title: "Tratamiento", desc: "Aplicamos el control correspondiente con equipos profesionales." },
  { number: "5", title: "Seguimiento", desc: "Monitoreamos resultados y entregamos la documentación." },
];

export default function ControlDePlagasEmpresas() {
  useSEO(
    "Control de Plagas para Empresas en Santiago | Andes Plagas",
    "Programas de control de plagas para empresas en Santiago: desratización, desinsectación y sanitización con certificados para fiscalizaciones SEREMI. Solicita tu evaluación."
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <ServiceHero
        image="/hero-bg.webp"
        imageWidth={1024}
        imageHeight={1024}
        title={<>Control de Plagas para <span className="text-[hsl(168,64%,44%)]">Empresas</span> en Santiago</>}
        subtitle="Programas MIP (Manejo Integrado de Plagas) con documentación técnica para auditorías y fiscalizaciones de la Autoridad Sanitaria."
        bullets={["Resolución Sanitaria al día", "Documentación SEREMI", "Planes según su rubro", "Atendemos urgencias en la RM"]}
        service="empresas"
        serviceLabel="Control de Plagas Empresas"
        whatsappMessage="Hola, necesito control de plagas para mi empresa en Santiago."
        formTitle="Evaluación para su empresa"
        formSubtitle="Coordinamos una visita y le enviamos una propuesta."
      />

      <TrustBar />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(212,32%,16%)] text-center mb-12 font-display">
            ¿Su empresa enfrenta alguno de estos problemas?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {problems.map((problem) => (
              <div key={problem.title} className="bg-[hsl(210,20%,96%)] rounded-2xl p-6 text-center border border-gray-100">
                <div className="w-14 h-14 bg-[hsl(168,64%,44%)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <problem.icon className="w-7 h-7 text-[hsl(168,64%,44%)]" />
                </div>
                <h3 className="font-bold text-[hsl(212,32%,16%)] mb-2">{problem.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(212,32%,16%)] text-center mb-12 font-display">
            Servicios para empresas
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <h3 className="font-bold text-[hsl(212,32%,16%)] text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(212,32%,16%)] mb-12 font-display">
            Cómo trabajamos
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {process.map((step) => (
              <div key={step.number} className="bg-[hsl(210,20%,96%)] rounded-2xl p-6 border border-gray-100">
                <div className="w-11 h-11 rounded-full bg-[hsl(168,64%,44%)] text-white font-bold flex items-center justify-center mx-auto mb-4 font-display text-lg">
                  {step.number}
                </div>
                <h3 className="font-bold text-[hsl(212,32%,16%)] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[hsl(212,32%,16%)] text-white">
        <div className="container mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-center">
            <div>
              <h2 className="text-3xl font-bold font-display mb-6">
                Operamos bajo normativa sanitaria
              </h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-[hsl(168,64%,44%)] font-bold shrink-0">✓</span>
                  Resolución Sanitaria vigente para aplicar pesticidas de uso sanitario y doméstico.
                </li>
                <li className="flex gap-3">
                  <span className="text-[hsl(168,64%,44%)] font-bold shrink-0">✓</span>
                  Técnicos aplicadores con capacitación constante y acreditación sanitaria.
                </li>
                <li className="flex gap-3">
                  <span className="text-[hsl(168,64%,44%)] font-bold shrink-0">✓</span>
                  Insumos con registro en el Instituto de Salud Pública (ISP).
                </li>
                <li className="flex gap-3">
                  <span className="text-[hsl(168,64%,44%)] font-bold shrink-0">✓</span>
                  Certificado de aplicación válido ante SEREMI y municipalidades.
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/certificaciones" onClick={() => window.scrollTo(0, 0)}>
                  <Button variant="outline" className="border-[hsl(168,64%,44%)] text-[hsl(168,64%,44%)] hover:bg-[hsl(168,64%,44%)] hover:text-white font-bold cursor-pointer">
                    Ver certificaciones
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <p className="text-lg leading-relaxed text-gray-200">
                "Al finalizar cada servicio, entregamos el Certificado Oficial de Tratamiento, esencial
                para locales comerciales y empresas ante fiscalizaciones."
              </p>
              <p className="mt-4 text-sm text-gray-400">Equipo técnico Andes Plagas</p>
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={FAQS.empresas} />

      <FinalCta
        title={<>Mantenga su empresa <span className="text-[#E8762E]">libre de plagas</span></>}
        subtitle="Solicite una evaluación y reciba una propuesta para su empresa sin compromiso."
        service="empresas"
        buttonLabel="Solicitar evaluación"
        whatsappMessage="Hola, necesito control de plagas para mi empresa en Santiago."
      />

      <Footer />
    </div>
  );
}
