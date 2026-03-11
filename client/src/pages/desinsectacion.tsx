import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Phone, ShieldAlert, Zap, Search, Target, LayoutDashboard, History, MessageSquare, MapPin, PhoneCall, Bug } from "lucide-react";
import TrustBar from "@/components/trust-bar";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  espacio: z.string().min(1, "Seleccione tipo de espacio"),
  metros: z.string().min(1, "Ingrese metros aproximados"),
  email: z.string().email("Ingrese un correo válido"),
  telefono: z.string().min(1, "Ingrese su teléfono"),
});

export default function Desinsectacion() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      espacio: "",
      metros: "",
      email: "",
      telefono: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://hook.us2.make.com/koajghs02g7rrr1dn5agxgxqvxbn74lt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          servicio: "Desinsectación",
          espacio: values.espacio,
          metros: values.metros,
          email: values.email,
          telefono: values.telefono,
          origen: "Página Desinsectación"
        }),
      });

      if (response.ok) {
        toast({
          title: "¡Solicitud enviada!",
          description: "Nos contactaremos contigo a la brevedad.",
        });
        form.reset();
      } else {
        throw new Error("Error en el envío");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu solicitud. Intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const scrollToForm = () => {
    const formElement = document.getElementById("quote-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1584650549422-497dfb5c1638?q=80&w=2070&auto=format&fit=crop"
            alt="Control de insectos profesional"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/70 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
                Servicio Profesional de <span className="text-[#26B89A]">Desinsectación</span> en Santiago y Todo Chile
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                Eliminamos insectos rastreros y voladores con métodos certificados, seguros y efectivos para hogares, empresas e industrias.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2 font-medium"><CheckCircle2 className="text-[#26B89A] w-5 h-5" /> <span>Resolución Sanitaria al día</span></div>
                <div className="flex items-center gap-2 font-medium"><CheckCircle2 className="text-[#26B89A] w-5 h-5" /> <span>Técnicos certificados</span></div>
                <div className="flex items-center gap-2 font-medium"><CheckCircle2 className="text-[#26B89A] w-5 h-5" /> <span>Atención rápida</span></div>
                <div className="flex items-center gap-2 font-medium"><CheckCircle2 className="text-[#26B89A] w-5 h-5" /> <span>Cobertura nacional</span></div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button onClick={scrollToForm} size="lg" className="bg-[#E8762E] hover:bg-[#D16524] text-white font-bold h-14 px-8 rounded-lg shadow-lg hover:shadow-orange-500/30 transition-all cursor-pointer">Solicitar Cotización</Button>
                <a href="tel:+56942713144" className="w-full">
                  <Button size="lg" variant="outline" className="w-full border-2 border-white text-white hover:bg-white hover:text-[#0F172A] font-bold h-14 px-8 rounded-lg transition-all cursor-pointer">
                    <Phone className="mr-2 w-5 h-5" /> Llamar Ahora
                  </Button>
                </a>
              </div>
            </div>

            <div id="quote-form" className="w-full max-w-md mx-auto lg:ml-auto">
              <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
                <div className="h-2 w-full bg-[#E8762E]"></div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#0F172A] text-center font-display">Solicitar Evaluación</CardTitle>
                  <p className="text-center text-gray-500 text-sm">Respuesta inmediata</p>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField control={form.control} name="espacio" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold text-gray-700">Tipo de Espacio</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl><SelectTrigger className="bg-white h-12 border-gray-200"><SelectValue placeholder="Seleccione..." /></SelectTrigger></FormControl>
                            <SelectContent className="bg-white">
                              <SelectItem value="casa">Casa</SelectItem>
                              <SelectItem value="empresa">Empresa</SelectItem>
                              <SelectItem value="industria">Industria</SelectItem>
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
                      <Button type="submit" disabled={isSubmitting} className="w-full bg-[#E8762E] hover:bg-[#D16524] text-white font-bold h-14 rounded-lg shadow-lg hover:shadow-orange-500/30 transition-all mt-4 cursor-pointer">
                        {isSubmitting ? "ENVIANDO..." : "SOLICITAR EVALUACIÓN"}
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

      {/* Importance Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6 font-display uppercase tracking-tight">¿Por qué es importante la Desinsectación?</h2>
            <div className="w-24 h-1.5 bg-[#26B89A] mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="flex gap-6 p-6 rounded-2xl hover:bg-red-50/50 transition-colors">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center shrink-0 border border-red-200"><ShieldAlert className="text-red-600 w-8 h-8" /></div>
              <div>
                <h3 className="font-bold text-xl mb-3 text-[#0F172A]">Riesgos de Plagas</h3>
                <p className="text-[#64748B] leading-relaxed">Los insectos transmiten enfermedades, contaminan alimentos y dañan estructuras, poniendo en peligro a su familia y negocio.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 rounded-2xl hover:bg-orange-50/50 transition-colors">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center shrink-0 border border-orange-200"><Zap className="text-orange-600 w-8 h-8" /></div>
              <div>
                <h3 className="font-bold text-xl mb-3 text-[#0F172A]">Cumplimiento Normativo</h3>
                <p className="text-[#64748B] leading-relaxed">La presencia de plagas en negocios implica clausura inmediata y multas sanitarias. Nuestro servicio garantiza cumplimiento legal.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 rounded-2xl hover:bg-teal-50/50 transition-colors">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center shrink-0 border border-teal-200"><CheckCircle2 className="text-teal-600 w-8 h-8" /></div>
              <div>
                <h3 className="font-bold text-xl mb-3 text-[#0F172A]">Eficacia Probada</h3>
                <p className="text-[#64748B] leading-relaxed">Utilizamos productos de bajo impacto ambiental y técnicas de aplicación precisas para eliminar insectos de forma permanente.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 rounded-2xl hover:bg-blue-50/50 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0 border border-blue-200"><ShieldAlert className="text-blue-600 w-8 h-8" /></div>
              <div>
                <h3 className="font-bold text-xl mb-3 text-[#0F172A]">Protección Integral</h3>
                <p className="text-[#64748B] leading-relaxed">Ofrecemos planes preventivos mensuales que mantienen sus espacios libres de insectos rastreros y voladores.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-16 font-display uppercase tracking-tight">Nuestro Proceso de Desinsectación</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Search, title: "1. Inspección técnica", desc: "Identificamos focos de infestación y vías de acceso de insectos." },
              { icon: Target, title: "2. Diagnóstico", desc: "Determinamos especies y creamos un plan de acción personalizado." },
              { icon: LayoutDashboard, title: "3. Aplicación", desc: "Utilizamos equipos profesionales y productos certificados de bajo impacto." },
              { icon: History, title: "4. Seguimiento", desc: "Control preventivo periódico y monitoreo constante de resultados." }
            ].map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-20 h-20 bg-[#26B89A]/10 rounded-full flex items-center justify-center mb-8 border border-[#26B89A]/20">
                  <step.icon className="text-[#26B89A] w-10 h-10" />
                </div>
                <h3 className="font-bold text-xl mb-4 text-[#0F172A]">{step.title}</h3>
                <p className="text-[#64748B] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] text-center mb-16 font-display uppercase tracking-tight">Soluciones para cada sector</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Empresas", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop", desc: "Planes mensuales con certificación SEREMI para oficinas y locales comerciales." },
              { title: "Hogares", img: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2070&auto=format&fit=crop", desc: "Servicios puntuales y preventivos con productos seguros para niños y mascotas." },
              { title: "Industrial", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop", desc: "Control de alto impacto para bodegas, plantas de alimentos y centros logísticos." }
            ].map((sol, i) => (
              <Card key={i} className="overflow-hidden border-0 shadow-2xl shadow-gray-200/60 group cursor-pointer rounded-2xl flex flex-col h-full">
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
                  <img src={sol.img} alt={sol.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <CardContent className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-[#0F172A]">Desinsectación para {sol.title}</h3>
                  <p className="text-[#64748B] mb-8 leading-relaxed flex-grow">{sol.desc}</p>
                  <Button onClick={scrollToForm} variant="outline" className="w-full border-[#26B89A] text-[#26B89A] hover:bg-[#26B89A] hover:text-white font-bold h-12 rounded-lg transition-all cursor-pointer">Cotizar Servicio</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] text-center mb-16 font-display uppercase tracking-tight">Clientes Satisfechos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Roberto García", role: "Dueño de Restaurante", text: "Eliminaron los insectos en una noche. Al día siguiente pudimos reabrir sin problemas. Excelente servicio.", img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop" },
              { name: "Patricia Müller", role: "Administradora de Clínica", text: "Muy profesionales. El plan preventivo mensual nos da la seguridad de pasar cualquier fiscalización. Recomendados.", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6954?q=80&w=2070&auto=format&fit=crop" },
              { name: "Carlos Morales", role: "Gerente de Bodega", text: "Llevamos más de un año con su servicio. Sin plagas, sin problemas y cumpliendo con todas las normativas.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" }
            ].map((t, i) => (
              <Card key={i} className="p-0 border-0 shadow-xl overflow-hidden rounded-2xl flex flex-col bg-white">
                <div className="h-40 overflow-hidden">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="p-8">
                  <MessageSquare className="text-[#26B89A] w-10 h-10 mb-6 opacity-20" />
                  <p className="text-[#0F172A] italic mb-8 leading-relaxed font-medium">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#26B89A]/10 flex items-center justify-center font-bold text-[#26B89A] text-lg">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-[#0F172A]">{t.name}</div>
                      <div className="text-sm text-[#64748B] font-medium">{t.role}</div>
                    </div>
                  </div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display uppercase tracking-tight">¿Problemas con insectos? <span className="text-[#E8762E]">Actúa hoy.</span></h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            No permitas que una plaga de insectos dañe tu negocio o ponga en riesgo la salud de tu familia. Solución profesional inmediata y garantizada.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button onClick={scrollToForm} size="lg" className="bg-[#E8762E] hover:bg-[#D16524] text-white font-bold h-18 px-12 rounded-xl text-xl shadow-2xl shadow-orange-500/20 transition-all cursor-pointer">
              Solicitar Desinsectación Ahora
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
