import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Phone, ShieldAlert, Zap, Search, Waves, ShieldCheck, MessageSquare, PhoneCall, Bug } from "lucide-react";

const formSchema = z.object({
  espacio: z.string().min(1, "Seleccione tipo de espacio"),
  metros: z.string().min(1, "Ingrese metros aproximados"),
  telefono: z.string().min(1, "Ingrese su teléfono"),
});

export default function Desinsectacion() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      espacio: "",
      metros: "",
      telefono: "",
    },
  });

  const scrollToForm = () => {
    const formElement = document.getElementById("quote-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header Simplificado */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 h-20">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#1F7A5C] rounded-lg flex items-center justify-center">
              <Bug className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black text-[#0F172A] tracking-tighter">ANDES<span className="text-[#1F7A5C]">PLAGAS</span></span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+56942713144" className="hidden md:flex items-center gap-2 text-[#0F172A] font-bold text-lg hover:text-[#1F7A5C] transition-colors">
              <Phone className="w-5 h-5 text-[#F97316]" /> +56 9 4271 3144
            </a>
            <Button className="bg-[#F97316] hover:bg-[#EA580C] text-white font-bold px-6 py-6 rounded-xl shadow-lg shadow-orange-500/20 cursor-pointer">
              Llamar Ahora
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#0F172A]">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
            alt="Desinfección profesional"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display leading-[1.1] tracking-tight">
                Desinfección Profesional en Santiago con <span className="text-[#1F7A5C]">Atención Inmediata</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium">
                Eliminamos virus, bacterias y agentes contaminantes con protocolos certificados y respuesta rápida.
              </p>
              <div className="space-y-4">
                {[
                  "Atención rápida en Santiago",
                  "Productos certificados",
                  "Servicio para empresas y hogares",
                  "Certificado de desinfección incluido",
                  "Cobertura nacional"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-lg font-semibold">
                    <CheckCircle2 className="text-[#1F7A5C] w-6 h-6 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Button onClick={scrollToForm} size="lg" className="bg-[#F97316] hover:bg-[#EA580C] text-white font-black h-20 px-10 rounded-2xl text-xl shadow-2xl shadow-orange-500/30 transition-all cursor-pointer uppercase">
                  Solicitar Desinfección Ahora
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white/20 text-white hover:bg-white hover:text-[#0F172A] font-bold h-20 px-10 rounded-2xl text-xl backdrop-blur-md transition-all cursor-pointer">
                  Hablar por WhatsApp
                </Button>
              </div>
            </div>

            <div id="quote-form" className="w-full max-w-md mx-auto lg:ml-auto">
              <Card className="shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-0 bg-white p-2 rounded-[2rem]">
                <div className="bg-[#F8FAFC] p-8 rounded-[1.5rem]">
                  <CardHeader className="px-0 pt-0 text-center">
                    <CardTitle className="text-2xl font-black text-[#0F172A] uppercase tracking-tighter">Recibir Cotización</CardTitle>
                    <p className="text-[#F97316] font-bold text-lg mt-2 uppercase tracking-widest">En solo 15 Minutos</p>
                  </CardHeader>
                  <CardContent className="px-0 pb-0 pt-6">
                    <Form {...form}>
                      <form className="space-y-5">
                        <FormField control={form.control} name="espacio" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-bold text-[#0F172A] text-sm uppercase">Tipo de Espacio</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl><SelectTrigger className="bg-white h-14 border-gray-200 rounded-xl text-lg font-medium shadow-sm"><SelectValue placeholder="Seleccione..." /></SelectTrigger></FormControl>
                              <SelectContent className="bg-white rounded-xl">
                                <SelectItem value="oficina">Oficina</SelectItem>
                                <SelectItem value="restaurante">Restaurante</SelectItem>
                                <SelectItem value="industria">Industria</SelectItem>
                                <SelectItem value="hogar">Hogar</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="metros" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-bold text-[#0F172A] text-sm uppercase">Metros Aproximados</FormLabel>
                            <FormControl><Input placeholder="Ej: 150" {...field} className="bg-white h-14 border-gray-200 rounded-xl text-lg font-medium shadow-sm" /></FormControl>
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="telefono" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-bold text-[#0F172A] text-sm uppercase">Teléfono de contacto</FormLabel>
                            <FormControl><Input placeholder="+56 9..." {...field} className="bg-white h-14 border-gray-200 rounded-xl text-lg font-medium shadow-sm" /></FormControl>
                          </FormItem>
                        )} />
                        <Button className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-black h-16 rounded-xl shadow-xl shadow-orange-500/20 transition-all mt-4 cursor-pointer text-lg uppercase tracking-wider">
                          Recibir Cotización Ahora
                        </Button>
                        <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-widest mt-4">Respuesta rápida. Sin compromiso.</p>
                      </form>
                    </Form>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Riesgo Sanitario */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-6 uppercase tracking-tighter">¿Tienes riesgo sanitario?</h2>
            <p className="text-[#F97316] text-2xl font-black uppercase tracking-widest">Actúa antes de que el problema crezca</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              "Brotes o contagios recientes",
              "Fiscalizaciones sanitarias",
              "Reapertura de espacios",
              "Protección de trabajadores y clientes",
              "Prevención obligatoria en empresas"
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-8 rounded-[2rem] bg-[#F8FAFC] border border-gray-100 hover:border-[#1F7A5C] transition-all group">
                <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#1F7A5C] transition-colors">
                  <ShieldAlert className="text-red-600 w-8 h-8 group-hover:text-white transition-colors" />
                </div>
                <p className="text-xl font-bold text-[#0F172A] leading-tight flex items-center">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-2xl font-black text-[#0F172A] mb-8 uppercase tracking-tighter">“La prevención evita multas, cierres y riesgos innecesarios.”</p>
            <Button onClick={scrollToForm} size="lg" className="bg-[#1F7A5C] hover:bg-[#165a44] text-white font-black h-18 px-12 rounded-2xl text-xl shadow-2xl shadow-[#1F7A5C]/20 transition-all cursor-pointer uppercase">
              Solicitar Evaluación Inmediata
            </Button>
          </div>
        </div>
      </section>

      {/* Nuestro Servicio */}
      <section className="py-24 bg-[#0F172A] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-16 uppercase tracking-tighter">Nuestro Servicio de Desinfección</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Waves, title: "Equipos ULV", desc: "Nebulización y pulverización profesional de alta eficiencia." },
              { icon: ShieldCheck, title: "Productos Certificados", desc: "Uso exclusivo de desinfectantes autorizados por salud." },
              { icon: Search, title: "Técnicos Capacitados", desc: "Personal especializado en control de riesgos biológicos." },
              { icon: CheckCircle2, title: "Certificado Legal", desc: "Entrega inmediata de documento válido para autoridades." }
            ].map((step, i) => (
              <div key={i} className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all flex flex-col items-center">
                <div className="w-20 h-20 bg-[#1F7A5C] rounded-[1.5rem] flex items-center justify-center mb-8 shadow-2xl shadow-[#1F7A5C]/20">
                  <step.icon className="text-white w-10 h-10" />
                </div>
                <h3 className="font-black text-2xl mb-4 uppercase tracking-tighter">{step.title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] uppercase tracking-tighter leading-none">¿Por qué elegir <br/><span className="text-[#1F7A5C]">Andes Plagas?</span></h2>
              <div className="space-y-6">
                {[
                  "Técnicos certificados con capacitación constante",
                  "Protocolos aprobados por normativa sanitaria vigente",
                  "Atención rápida en Santiago y alrededores",
                  "Cobertura profesional en todo Chile",
                  "Seguimiento técnico post-servicio"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-[#1F7A5C]/10 flex items-center justify-center group-hover:bg-[#1F7A5C] transition-colors">
                      <Zap className="text-[#1F7A5C] w-4 h-4 group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-lg font-bold text-[#0F172A]">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-2xl font-black text-[#1F7A5C] uppercase tracking-widest pt-4">“Servicio seguro, rápido y efectivo.”</p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#F97316] rounded-[3rem] blur-2xl opacity-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6954?q=80&w=2070&auto=format&fit=crop" 
                  alt="Equipo Andes Plagas" 
                  className="relative rounded-[3rem] shadow-2xl border-8 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] text-center mb-20 uppercase tracking-tighter">Lo que dicen nuestros clientes</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              { company: "Holding Financiero", text: "Excelente rapidez para sanitizar nuestras sucursales tras un caso positivo. El profesionalismo es notable.", tag: "OFICINA" },
              { company: "Restaurant Gourmet", text: "Cumplimos con toda la normativa gracias a sus visitas mensuales. El certificado llega de inmediato.", tag: "GASTRONOMÍA" },
              { company: "Centro Logístico", text: "Atención técnica de primer nivel. Entienden los protocolos industriales de bioseguridad.", tag: "INDUSTRIA" }
            ].map((t, i) => (
              <div key={i} className="relative p-10 rounded-[2.5rem] bg-[#F8FAFC] border border-gray-100 shadow-xl shadow-gray-200/50">
                <span className="absolute -top-4 right-10 bg-[#F97316] text-white text-xs font-black px-4 py-2 rounded-full tracking-widest uppercase">{t.tag}</span>
                <MessageSquare className="text-[#1F7A5C] w-12 h-12 mb-8 opacity-20" />
                <p className="text-xl font-bold text-[#0F172A] italic mb-10 leading-relaxed">"{t.text}"</p>
                <div className="font-black text-[#1F7A5C] text-lg uppercase tracking-tighter">{t.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1F7A5C]/10 blur-[120px] rounded-full"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter">Protege tu espacio <span className="text-[#F97316]">hoy mismo</span></h2>
          <p className="text-2xl text-gray-400 mb-16 max-w-3xl mx-auto font-bold leading-relaxed">
            Agenda tu desinfección profesional con atención inmediata. <br className="hidden md:block"/> Resultados garantizados y certificados.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
            <Button onClick={scrollToForm} size="lg" className="bg-[#F97316] hover:bg-[#EA580C] text-white font-black h-24 px-16 rounded-[2rem] text-2xl shadow-2xl shadow-orange-500/30 transition-all cursor-pointer uppercase tracking-tighter">
              Solicitar Desinfección Ahora
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-[#1F7A5C] text-[#1F7A5C] hover:bg-[#1F7A5C] hover:text-white font-black h-24 px-16 rounded-[2rem] text-2xl transition-all cursor-pointer uppercase tracking-tighter">
              WhatsApp Directo
            </Button>
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-500 font-black uppercase tracking-[0.3em] text-sm">Llamada de urgencia 24/7</p>
            <a href="tel:+56942713144" className="flex items-center gap-4 text-4xl md:text-6xl font-black hover:text-[#F97316] transition-colors tracking-tighter">
              <PhoneCall className="text-[#F97316] w-12 h-12 md:w-16 md:h-16" /> +56 9 4271 3144
            </a>
          </div>
        </div>
      </section>

      {/* Footer Simple */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Bug className="text-[#1F7A5C] w-8 h-8" />
            <span className="text-2xl font-black text-[#0F172A] tracking-tighter">ANDES<span className="text-[#1F7A5C]">PLAGAS</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-[#64748B] font-bold text-sm uppercase tracking-widest mb-12">
            <div>📍 Santiago, Chile</div>
            <div>📧 contacto@andesplagas.cl</div>
            <div>🕒 Lun - Sáb: 08:00 - 20:00</div>
          </div>
          <p className="text-[#0F172A] font-black text-xs uppercase tracking-[0.5em] opacity-30">Nota legal: Servicio certificado con resolución sanitaria vigente</p>
        </div>
      </footer>
    </div>
  );
}
