import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Award, ShieldCheck, FileCheck } from "lucide-react";
import { useSEO } from "@/hooks/use-seo";
import QuoteForm from "@/components/quote-form";

export default function Certificaciones() {
  useSEO(
    "Certificaciones SEREMI y Resolución Sanitaria | Andes Plagas",
    "Conoce las certificaciones de Andes Plagas: Resolución Sanitaria SEREMI, personal calificado, certificados de aplicación e insumos con registro ISP."
  );

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[hsl(212,32%,16%)] mb-6 font-display leading-tight">
              Certificaciones SEREMI y <span className="text-[#E8762E]">Resolución Sanitaria</span> en Santiago
            </h1>
            <p className="text-xl text-gray-600">
              Operamos bajo los estándares de calidad y seguridad exigidos por el Ministerio de Salud de Chile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="shadow-lg border-0 bg-[hsl(210,20%,96%)] hover:shadow-xl transition-shadow">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#26B89A]/10 rounded-full flex items-center justify-center mb-6 text-[#26B89A]">
                  <ShieldCheck size={32} />
                </div>
                <h2 className="text-2xl font-bold text-[hsl(212,32%,16%)] mb-4">Resolución SEREMI de Salud</h2>
                <p className="text-gray-600">
                  Contamos con Resolución Sanitaria vigente emitida por la Secretaría Regional Ministerial de Salud. Estamos autorizados para aplicar pesticidas de uso sanitario y doméstico, cumpliendo con el Decreto Supremo N° 157.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-[hsl(210,20%,96%)] hover:shadow-xl transition-shadow">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#26B89A]/10 rounded-full flex items-center justify-center mb-6 text-[#26B89A]">
                  <Award size={32} />
                </div>
                <h2 className="text-2xl font-bold text-[hsl(212,32%,16%)] mb-4">Personal Calificado</h2>
                <p className="text-gray-600">
                  Todos nuestros técnicos aplicadores cuentan con credencial vigente del SEREMI y reciben capacitación constante sobre el uso seguro de plaguicidas, protocolos de emergencia y normativas vigentes.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-[hsl(210,20%,96%)] hover:shadow-xl transition-shadow">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#26B89A]/10 rounded-full flex items-center justify-center mb-6 text-[#26B89A]">
                  <FileCheck size={32} />
                </div>
                <h2 className="text-2xl font-bold text-[hsl(212,32%,16%)] mb-4">Certificado de Aplicación</h2>
                <p className="text-gray-600">
                  Al finalizar cada servicio, entregamos el Certificado Oficial de Tratamiento válido ante SEREMI, Municipalidades y fiscalizaciones de la autoridad sanitaria, esencial para locales comerciales y empresas.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-[hsl(210,20%,96%)] hover:shadow-xl transition-shadow">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#26B89A]/10 rounded-full flex items-center justify-center mb-6 text-[#26B89A]">
                  <CheckCircle2 size={32} />
                </div>
                <h2 className="text-2xl font-bold text-[hsl(212,32%,16%)] mb-4">Insumos Autorizados</h2>
                <p className="text-gray-600">
                  Utilizamos exclusivamente plaguicidas, raticidas y desinfectantes con registro en el Instituto de Salud Pública (ISP) de Chile, garantizando eficacia y seguridad para personas, mascotas y el medio ambiente.
                </p>
              </CardContent>
            </Card>
          </div>

          <div id="quote-form" className="max-w-md mx-auto scroll-mt-28">
            <QuoteForm
              service="certificaciones"
              serviceLabel="Certificaciones / Regularización"
              location="certificaciones"
              title="¿Necesita regularizar su local?"
              subtitle="Te asesoramos con la documentación para cumplir la normativa sanitaria."
              whatsappMessage="Hola, necesito regularizar mi local (certificación / resolución sanitaria)."
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
