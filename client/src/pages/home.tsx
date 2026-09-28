import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TrustBar from "@/components/trust-bar";
import Services from "@/components/services";
import Footer from "@/components/footer";
import { useSEO } from "@/hooks/use-seo";
import { Zap, BadgeCheck, Leaf } from "lucide-react";

const differentiators = [
  {
    icon: Zap,
    title: "Respuesta rápida",
    desc: "Atendemos urgencias en menos de 24 horas dentro de la Región Metropolitana.",
  },
  {
    icon: BadgeCheck,
    title: "Personal certificado",
    desc: "Técnicos con capacitación constante y acreditación sanitaria.",
  },
  {
    icon: Leaf,
    title: "Productos seguros",
    desc: "Utilizamos productos de bajo impacto ambiental, seguros para personas y mascotas.",
  },
];

const sectors = [
  "Restaurantes y cocina",
  "Industria y bodegas",
  "Oficinas",
  "Comercio y retail",
  "Hogares",
];

export default function Home() {
  useSEO(
    "Control de Plagas para Empresas en Santiago | Andes Plagas",
    "Empresa de control de plagas para empresas y locales comerciales en Santiago. Desratización, desinsectación y sanitización con documentación SEREMI. Solicita tu evaluación."
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />

        <section className="py-20 bg-[hsl(210,20%,96%)]">
          <div className="container mx-auto px-5 text-center">
            <h2 className="text-3xl font-bold text-[hsl(212,32%,16%)] mb-10 font-display">
              ¿Por qué elegir Andes Plagas?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {differentiators.map((item) => (
                <div key={item.title} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-[hsl(168,64%,44%)]/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-[hsl(168,64%,44%)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(168,64%,44%)] mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-5 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[hsl(212,32%,16%)] mb-6 font-display">
              Sectores que atendemos en Santiago y la RM
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {sectors.map((sector) => (
                <span key={sector} className="px-5 py-2.5 rounded-full bg-[hsl(210,20%,96%)] text-sm font-medium text-[hsl(212,32%,16%)] border border-gray-100">
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
