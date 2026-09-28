import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rat, Bug, ShieldCheck, Building2, Check } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    title: "Desratización",
    description: "Control de roedores con estaciones de cebado seguras y monitoreadas.",
    features: ["Empresas y locales", "Control preventivo", "Documentación SEREMI"],
    image: "/service-1.webp",
    width: 1408,
    height: 768,
    slug: "/desratizacion",
  },
  {
    title: "Desinsectación",
    description: "Control de insectos rastreros y voladores con productos de bajo impacto.",
    features: ["Normativa SEREMI", "Reportes técnicos", "Calendario anual"],
    image: "/service-desinsectacion.webp",
    width: 1408,
    height: 768,
    slug: "/desinsectacion",
  },
  {
    title: "Sanitización",
    description: "Desinfección de ambientes contra virus, bacterias y hongos patógenos.",
    features: ["Cumplimiento legal", "Resolución vigente", "Ambientes seguros"],
    image: "/hero-bg.webp",
    width: 1024,
    height: 1024,
    slug: "/sanitizacion",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-[hsl(212,32%,16%)] mb-4 tracking-tight">
            Soluciones de control de plagas
          </h2>
          <div className="w-20 h-1 bg-[hsl(168,64%,44%)] mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto font-medium">
            Programas preventivos corporativos con documentación técnica para auditorías y fiscalizaciones
            de la Autoridad Sanitaria (SEREMI).
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-0 shadow-xl overflow-hidden bg-[hsl(212,32%,16%)] text-white">
            <CardContent className="p-8 md:p-10 grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
              <div className="w-16 h-16 rounded-2xl bg-[hsl(168,64%,44%)]/20 flex items-center justify-center shrink-0">
                <Building2 className="w-8 h-8 text-[hsl(168,64%,44%)]" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-display mb-2">
                  Control de plagas para empresas
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Planes MIP con calendario de visitas, documentación para fiscalizaciones y seguimiento
                  continuo para restaurantes, industrias, bodegas, oficinas y locales comerciales.
                </p>
              </div>
              <Link href="/control-de-plagas-empresas" className="md:justify-self-end" onClick={() => window.scrollTo(0, 0)}>
                <Button className="bg-[hsl(168,64%,44%)] hover:bg-[hsl(168,64%,38%)] text-white font-bold whitespace-nowrap cursor-pointer">
                  Ver más
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.slug} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                <img
                  src={service.image}
                  width={service.width}
                  height={service.height}
                  alt={`Servicio profesional de ${service.title.toLowerCase()} en Santiago`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold font-display text-[hsl(212,32%,16%)]">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-grow">
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-[hsl(168,64%,44%)]/10 flex items-center justify-center text-[hsl(168,64%,44%)] shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-0 mt-auto">
                <Link href={service.slug} className="w-full" onClick={() => window.scrollTo(0, 0)}>
                  <Button variant="outline" className="w-full border-[hsl(168,64%,44%)] text-[hsl(168,64%,44%)] hover:bg-[hsl(168,64%,44%)] hover:text-white font-semibold group-hover:bg-[hsl(168,64%,44%)] group-hover:text-white transition-all cursor-pointer">
                    Más información
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {[
            { icon: Rat, label: "Roedores" },
            { icon: Bug, label: "Insectos" },
            { icon: ShieldCheck, label: "Sanitización" },
          ].map((item) => (
            <span key={item.label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(210,20%,96%)] text-sm font-medium text-[hsl(212,32%,16%)]">
              <item.icon className="w-4 h-4 text-[hsl(168,64%,44%)]" />
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
