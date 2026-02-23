import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rat, Bug, ShieldCheck, Check } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    title: "Desratización",
    icon: <Rat className="w-10 h-10 text-[hsl(168,64%,44%)]" />,
    description: "Control efectivo de roedores con cebos seguros y estaciones monitoreadas.",
    features: ["Soluciones para Empresas", "Control preventivo", "Certificado SEREMI"],
    image: "/service-1.png", // Using the generated image
    color: "hsl(168,64%,44%)",
    slug: "/servicios/desratizacion"
  },
  {
    title: "Desinsectación",
    icon: <Bug className="w-10 h-10 text-[hsl(168,64%,44%)]" />,
    description: "Eliminación de insectos rastreros y voladores con productos de bajo impacto.",
    features: ["Normativa SEREMI", "Reportes técnicos", "Calendario anual"],
    image: "https://images.unsplash.com/photo-1584650549422-497dfb5c1638?auto=format&fit=crop&q=80&w=800", // Stock placeholder
    color: "hsl(23,79%,55%)",
    slug: "/servicios/desinsectacion"
  },
  {
    title: "Sanitización",
    icon: <ShieldCheck className="w-10 h-10 text-[hsl(168,64%,44%)]" />,
    description: "Desinfección de ambientes contra virus, bacterias y hongos patógenos.",
    features: ["Cumplimiento legal", "Resolución vigente", "Ambientes seguros"],
    image: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&q=80&w=800", // Stock placeholder
    color: "hsl(212,32%,16%)",
    slug: "/servicios/sanitizacion"
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-[hsl(212,32%,16%)] mb-4">
            Nuestros Servicios
          </h2>
          <div className="w-20 h-1 bg-[hsl(168,64%,44%)] mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Soluciones integrales certificadas para mantener tus espacios libres de plagas y seguros para las personas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 bg-white p-3 rounded-full shadow-md">
                  {service.icon}
                </div>
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
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-[hsl(168,64%,44%)]/10 flex items-center justify-center text-[hsl(168,64%,44%)]">
                        <Check className="w-3 h-3" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="pt-0 mt-auto">
                {service.slug ? (
                  <Link href={service.slug} className="w-full">
                    <Button variant="outline" className="w-full border-[hsl(168,64%,44%)] text-[hsl(168,64%,44%)] hover:bg-[hsl(168,64%,44%)] hover:text-white font-semibold group-hover:bg-[hsl(168,64%,44%)] group-hover:text-white transition-all cursor-pointer">
                      Más Información
                    </Button>
                  </Link>
                ) : (
                  <Button variant="outline" className="w-full border-[hsl(168,64%,44%)] text-[hsl(168,64%,44%)] hover:bg-[hsl(168,64%,44%)] hover:text-white font-semibold group-hover:bg-[hsl(168,64%,44%)] group-hover:text-white transition-all">
                    Más Información
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
