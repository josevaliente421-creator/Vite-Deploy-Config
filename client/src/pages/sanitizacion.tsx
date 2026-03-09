import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Phone, ShieldAlert, Zap, Search, Target, LayoutDashboard, History, MessageSquare, MapPin, PhoneCall, ShieldCheck, Waves, ClipboardCheck, Sparkles } from "lucide-react";
import TrustBar from "@/components/trust-bar";

const formSchema = z.object({
  espacio: z.string().min(1, "Seleccione tipo de espacio"),
  metros: z.string().min(1, "Ingrese metros aproximados"),
  email: z.string().email("Ingrese un correo válido"),
  telefono: z.string().min(1, "Ingrese su teléfono"),
});

export default function Sanitizacion() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      espacio: "",
      metros: "",
      email: "",
      telefono: "",
    },
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1584744982491-665216d95f8b?q=80&w=2070&auto=format&fit=crop"
            alt="Técnico realizando sanitización"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/70 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
                Servicio Profesional de <span className="text-[#26B89A]">Sanitización</span> en Santiago y Todo Chile
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                Desinfección certificada para eliminar virus, bacterias y agentes contaminantes en espacios laborales y residenciales.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2 font-medium"><CheckCircle2 className="text-[#26B89A] w-5 h-5" /> <span>Productos certificados</span></div>
                <div className="flex items-center gap-2 font-medium"><CheckCircle2 className="text-[#26B89A] w-5 h-5" /> <span>Técnicos especializados</span></div>
                <div className="flex items-center gap-2 font-medium"><CheckCircle2 className="text-[#26B89A] w-5 h-5" /> <span>Atención rápida</span></div>
                <div className="flex items-center gap-2 font-medium"><CheckCircle2 className="text-[#26B89A] w-5 h-5" /> <span>Cobertura nacional</span></div>
                <div className="flex items-center gap-2 font-medium"><CheckCircle2 className="text-[#26B89A] w-5 h-5" /> <span>Resolución sanitaria</span></div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button size="lg" className="bg-[#E8762E] hover:bg-[#D16524] text-white font-bold h-14 px-8 rounded-lg shadow-lg hover:shadow-orange-500/30 transition-all cursor-pointer">Solicitar Sanitización Ahora</Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#0F172A] font-bold h-14 px-8 rounded-lg transition-all cursor-pointer">
                  Hablar por WhatsApp
                </Button>
              </div>
            </div>

            <div className="w-full max-w-md mx-auto lg:ml-auto">
              <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
                <div className="h-2 w-full bg-[#E8762E]"></div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#0F172A] text-center font-display uppercase tracking-tight">Solicitar Evaluación Inmediata</CardTitle>
                  <p className="text-center text-orange-600 font-bold text-sm">Respuesta en menos de 15 minutos</p>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form className="space-y-4">
                      <FormField control={form.control} name="espacio" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold text-gray-700">Tipo de Espacio</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl><SelectTrigger className="bg-white h-12 border-gray-200"><SelectValue placeholder="Seleccione..." /></SelectTrigger></FormControl>
                            <SelectContent className="bg-white">
                              <SelectItem value="oficina">Oficina</SelectItem>
                              <SelectItem value="local">Local Comercial</SelectItem>
                              <SelectItem value="industria">Industria</SelectItem>
                              <SelectItem value="hogar">Hogar</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="metros" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold text-gray-700">Metros Aproximados (m2)</FormLabel>
                          <FormControl><Input placeholder="Ej: 100" {...field} className="bg-white h-12 border-gray-200" /></FormControl>
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold text-gray-700">Email</FormLabel>
                          <FormControl><Input placeholder="correo@ejemplo.com" {...field} className="bg-white h-12 border-gray-200" /></FormControl>
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="telefono" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold text-gray-700">Teléfono / WhatsApp</FormLabel>
                          <FormControl><Input placeholder="+56 9..." {...field} className="bg-white h-12 border-gray-200" /></FormControl>
                        </FormItem>
                      )} />
                      <Button className="w-full bg-[#E8762E] hover:bg-[#D16524] text-white font-bold h-14 rounded-lg shadow-lg hover:shadow-orange-500/30 transition-all mt-4 cursor-pointer uppercase tracking-wider">
                        SOLICITAR EVALUACIÓN
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* When to sanitize */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6 font-display uppercase tracking-tight">¿Cuándo necesitas Sanitizar?</h2>
            <p className="text-[#64748B] text-lg font-medium">La prevención evita multas, contagios y cierres.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldAlert, title: "Después de brotes", desc: "Eliminación total tras confirmación de contagios." },
              { icon: ClipboardCheck, title: "Ante fiscalizaciones", desc: "Cumplimiento estricto de la normativa SEREMI." },
              { icon: History, title: "Protocolos preventivos", desc: "Mantenimiento periódico de espacios saludables." },
              { icon: Sparkles, title: "Reapertura de espacios", desc: "Asegura un inicio libre de agentes patógenos." }
            ].map((card, i) => (
              <Card key={i} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#F8FAFC]">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-[#26B89A]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#26B89A]/20">
                    <card.icon className="text-[#26B89A] w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-3 text-lg">{card.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{card.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-16 font-display uppercase tracking-tight">Nuestro Método Certificado</h2>
          <div className="grid md:grid-cols-4 gap-8 relative">
            {[
              { icon: Search, title: "Evaluación técnica", desc: "Identificamos zonas de alto tráfico y puntos críticos." },
              { icon: Waves, title: "Nebulización ULV", desc: "Aplicación de micro-gotas que alcanzan cada rincón." },
              { icon: ShieldCheck, title: "Productos autorizados", desc: "Uso de desinfectantes de grado hospitalario certificados." },
              { icon: CheckCircle2, title: "Certificado oficial", desc: "Entrega de documento válido para autoridades sanitarias." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-8 shadow-xl border border-gray-100 group-hover:border-[#26B89A] transition-colors">
                  <step.icon className="text-[#26B89A] w-10 h-10" />
                </div>
                <h3 className="font-bold text-xl mb-4 text-[#0F172A]">{step.title}</h3>
                <p className="text-[#64748B] leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] font-display uppercase tracking-tight">Beneficios de una sanitización profesional</h2>
              <div className="space-y-6">
                {[
                  "Eliminación total de agentes patógenos (virus, bacterias, hongos)",
                  "Cumplimiento 100% de la normativa vigente SEREMI",
                  "Protección real para trabajadores, clientes y familia",
                  "Mejora significativa de la imagen y confianza empresarial"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="bg-[#26B89A] rounded-full p-1 mt-1"><CheckCircle2 className="text-white w-4 h-4" /></div>
                    <p className="text-lg font-medium text-[#0F172A]">{benefit}</p>
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-[#E8762E] hover:bg-[#D16524] text-white font-bold h-14 px-10 rounded-lg shadow-lg cursor-pointer">
                Cotizar ahora
              </Button>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1584622781564-1d9876a3e740?q=80&w=2070&auto=format&fit=crop" 
                alt="Sanitización industrial profesional" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] text-center mb-16 font-display uppercase tracking-tight">Empresas que confían en nosotros</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Edificio Corporativo Las Condes", text: "Excelente respuesta ante un caso positivo. Sanitizaron 5 pisos en una noche y pudimos operar con normalidad al día siguiente.", img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop" },
              { name: "Cadena de Restaurantes", text: "Su plan preventivo mensual nos da la tranquilidad de pasar cualquier fiscalización sin problemas. Muy profesionales.", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" },
              { name: "Planta Industrial Quilicura", text: "El personal técnico conoce perfectamente los protocolos de seguridad. Certificación rápida y eficiente.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" }
            ].map((t, i) => (
              <Card key={i} className="p-0 border-0 shadow-xl overflow-hidden rounded-2xl flex flex-col bg-white">
                <div className="h-40 overflow-hidden">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="p-8">
                  <MessageSquare className="text-[#26B89A] w-10 h-10 mb-6 opacity-20" />
                  <p className="text-[#0F172A] italic mb-8 leading-relaxed font-medium">"{t.text}"</p>
                  <div className="font-bold text-[#0F172A]">{t.name}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#26B89A]/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-full bg-[#E8762E]/5 blur-3xl rounded-full"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display uppercase tracking-tight">Protege tu espacio <span className="text-[#E8762E]">hoy mismo</span></h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Agenda tu sanitización profesional con atención inmediata. Garantizamos ambientes seguros y libres de contagios.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" className="bg-[#E8762E] hover:bg-[#D16524] text-white font-bold h-18 px-12 rounded-xl text-xl shadow-2xl shadow-orange-500/20 transition-all cursor-pointer">
              Solicitar Sanitización Ahora
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-[#26B89A] text-[#26B89A] hover:bg-[#26B89A] hover:text-white font-bold h-18 px-12 rounded-xl text-xl transition-all cursor-pointer">
              WhatsApp Directo
            </Button>
          </div>
          <div className="mt-14 flex items-center justify-center gap-4 text-2xl md:text-3xl font-bold">
            <PhoneCall className="text-[#E8762E] w-8 h-8" />
            <a href="tel:+56942713144" className="hover:text-[#E8762E] transition-colors tracking-tight">+56 9 4271 3144</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
