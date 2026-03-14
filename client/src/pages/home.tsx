import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TrustBar from "@/components/trust-bar";
import Services from "@/components/services";
import Footer from "@/components/footer";
import { useSEO } from "@/hooks/use-seo";

export default function Home() {
  useSEO(
    "Andes Plagas | Control de Plagas y Sanitización en Santiago",
    "Andes Plagas ofrece control profesional de plagas y sanitización en Santiago con protocolos certificados y resolución sanitaria al día. ¡Cotiza tu evaluación hoy!"
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        {/* Additional section for content if needed */}
        <section className="py-20 bg-[hsl(210,20%,96%)]">
           <div className="container mx-auto px-4 text-center">
             <h2 className="text-3xl font-bold text-[hsl(212,32%,16%)] mb-6 font-display">¿Por qué elegir Andes Plagas?</h2>
             <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
               <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                 <h3 className="text-xl font-bold text-[hsl(168,64%,44%)] mb-3">Respuesta Rápida</h3>
                 <p className="text-gray-600">Atendemos urgencias en menos de 24 horas dentro de la RM.</p>
               </div>
               <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                 <h3 className="text-xl font-bold text-[hsl(168,64%,44%)] mb-3">Personal Certificado</h3>
                 <p className="text-gray-600">Técnicos con capacitación constante y acreditación sanitaria.</p>
               </div>
               <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                 <h3 className="text-xl font-bold text-[hsl(168,64%,44%)] mb-3">Productos Seguros</h3>
                 <p className="text-gray-600">Utilizamos productos de bajo impacto ambiental y seguros para mascotas.</p>
               </div>
             </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
