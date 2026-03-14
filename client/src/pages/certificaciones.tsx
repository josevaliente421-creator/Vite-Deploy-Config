import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Award, ShieldCheck, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/use-seo";

export default function Certificaciones() {
  useSEO(
    "Certificaciones SEREMI y Resolución Sanitaria | Andes Plagas",
    "Andes Plagas cuenta con Resolución Sanitaria SEREMI y personal certificado para el control de plagas y sanitización en Santiago. ¡Cumple con la normativa!"
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
              Operamos bajo los más estrictos estándares de calidad y seguridad exigidos por el Ministerio de Salud de Chile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="shadow-lg border-0 bg-[hsl(210,20%,96%)] hover:shadow-xl transition-shadow">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#26B89A]/10 rounded-full flex items-center justify-center mb-6 text-[#26B89A]">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(212,32%,16%)] mb-4">Resolución SEREMI de Salud</h3>
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
                <h3 className="text-2xl font-bold text-[hsl(212,32%,16%)] mb-4">Personal Calificado</h3>
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
                <h3 className="text-2xl font-bold text-[hsl(212,32%,16%)] mb-4">Certificado de Aplicación</h3>
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
                <h3 className="text-2xl font-bold text-[hsl(212,32%,16%)] mb-4">Insumos Autorizados</h3>
                <p className="text-gray-600">
                  Utilizamos exclusivamente plaguicidas, raticidas y desinfectantes con registro en el Instituto de Salud Pública (ISP) de Chile, garantizando eficacia y seguridad para personas, mascotas y el medio ambiente.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-[#0F172A] rounded-2xl p-10 text-center max-w-4xl mx-auto shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">¿Necesitas regularizar tu local o empresa?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Te asesoramos y entregamos toda la documentación necesaria para cumplir con la normativa sanitaria vigente en Santiago.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/#quote-form-hero">
                <Button size="lg" className="w-full sm:w-auto bg-[#E8762E] hover:bg-[#D16524] text-white font-bold h-14 px-8 rounded-lg shadow-lg hover:shadow-orange-500/30 transition-all cursor-pointer">
                  Solicitar Evaluación
                </Button>
              </a>
              <a href="https://wa.me/56942713144" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-[#25D366]/10 border-2 border-[#25D366] text-white hover:bg-[#25D366] hover:text-white font-bold h-14 px-8 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 21.611l-3.324-.877-3.856.883.896-3.832-.888-3.356c1.196-4.52 5.568-7.551 10.155-7.551 5.761 0 10.428 4.646 10.428 10.377 0 5.73-4.667 10.377-10.428 10.377-1.077 0-2.126-.17-3.111-.476zm6.541-11.758c-1.282-1.272-2.986-1.975-4.802-1.975-3.738 0-6.779 3.023-6.779 6.742 0 1.189.313 2.353.906 3.385l-.963 3.518 3.652-.949c.995.539 2.112.822 3.262.822h.003c3.736 0 6.778-3.023 6.778-6.744 0-1.802-.705-3.493-1.993-4.773zm-4.793 10.25h-.002c-1.002 0-1.984-.267-2.842-.773l-.203-.119-2.116.55.565-2.046-.131-.208c-.556-.882-.849-1.9-.849-2.96 0-3.082 2.522-5.59 5.617-5.59 1.498 0 2.906.58 3.963 1.631a5.578 5.578 0 011.646 3.962c0 3.08-2.523 5.589-5.616 5.589zm3.085-4.18c-.169-.084-1.003-.492-1.158-.548-.155-.056-.268-.084-.381.084-.112.168-.436.548-.535.66-.098.112-.197.126-.366.042-.169-.084-.716-.261-1.365-.838-.505-.449-.846-1.004-.944-1.172-.099-.168-.01-.259.074-.343.076-.076.169-.196.253-.294.085-.098.113-.168.169-.28.056-.112.028-.21-.014-.294-.042-.084-.381-.91-.521-1.246-.136-.326-.275-.282-.381-.287-.098-.004-.21-.005-.324-.005-.112 0-.295.042-.45.21-.155.168-.591.574-.591 1.401 0 .827.605 1.626.69 1.738.084.112 1.196 1.808 2.898 2.502.405.165.722.264.969.338.407.128.778.11 1.07.067.327-.048 1.003-.406 1.144-.8.14-.393.14-.73.098-.8-.042-.07-.154-.112-.323-.196z"/></svg>
                  Hablar por WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}