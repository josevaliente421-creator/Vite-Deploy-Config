import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useSEO } from "@/hooks/use-seo";
import { CONTACT_EMAIL } from "@/lib/analytics";

const sections = [
  {
    title: "1. Responsable del tratamiento",
    content:
      "Andes Plagas, con correo de contacto gerencia@andesplagas.cl, es responsable del tratamiento de los datos personales que los usuarios entregan a través de este sitio web.",
  },
  {
    title: "2. Datos que recopilamos",
    content:
      "A través del formulario de contacto recopilamos: nombre, tipo de cliente, empresa, teléfono/WhatsApp, comuna y el mensaje que usted decida incluir. Estos datos se utilizan únicamente para responder su solicitud de cotización o evaluación.",
  },
  {
    title: "3. Uso de los datos",
    content:
      "Los datos facilitados se emplean para: contactarlo en relación con su solicitud, preparar cotizaciones y coordinar servicios. No utilizamos sus datos para enviar publicidad no solicitada.",
  },
  {
    title: "4. Terceros y herramientas de medición",
    content:
      "Los datos del formulario se procesan mediante una herramienta de automatización para gestionar la respuesta a su solicitud. Utilizamos herramientas de medición y análisis (Google Analytics, Google Tag Manager y Google Ads) para entender el uso del sitio, sin identificación personal.",
  },
  {
    title: "5. Conservación",
    content:
      "Conservamos sus datos mientras sea necesario para atender su solicitud y, posteriormente, durante el tiempo requerido por las obligaciones legales aplicables.",
  },
  {
    title: "6. Sus derechos",
    content:
      "Puede solicitar el acceso, rectificación o eliminación de sus datos personales escribiendo a gerencia@andesplagas.cl.",
  },
  {
    title: "7. Cambios a esta política",
    content:
      "Esta política puede actualizarse. Cualquier cambio será publicado en esta página.",
  },
];

export default function PoliticaDePrivacidad() {
  useSEO(
    "Política de Privacidad | Andes Plagas",
    "Política de privacidad de Andes Plagas: cómo tratamos los datos que nos entregas a través del formulario, WhatsApp o teléfono."
  );

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-[hsl(212,32%,16%)] mb-8 font-display">
              Política de Privacidad
            </h1>
            <p className="text-gray-500 mb-10">Última actualización: septiembre de 2026</p>

            <div className="space-y-8">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-xl font-bold text-[hsl(212,32%,16%)] mb-2 font-display">{section.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                </section>
              ))}
            </div>

            <p className="mt-12 text-sm text-gray-500">
              Ante cualquier duda sobre esta política, escríbanos a{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-[hsl(168,64%,44%)] underline">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
