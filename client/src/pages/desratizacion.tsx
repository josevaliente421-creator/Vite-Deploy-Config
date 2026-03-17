import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Phone, ShieldAlert, Zap, Search, Target, LayoutDashboard, History, MessageSquare, MapPin, PhoneCall } from "lucide-react";
import TrustBar from "@/components/trust-bar";
import { useToast } from "@/hooks/use-toast";
import { useSEO } from "@/hooks/use-seo";

const formSchema = z.object({
  propiedad: z.string().min(1, "Seleccione tipo de propiedad"),
  infestacion: z.string().min(1, "Seleccione nivel de infestación"),
  email: z.string().email("Ingrese un correo válido"),
  telefono: z.string().min(1, "Ingrese su teléfono"),
  comentarios: z.string().optional(),
});

export default function Desratizacion() {
  useSEO(
    "Control de Roedores y Desratización | Andes Plagas Chile",
    "Especialistas en control de roedores y desratización en Santiago. Protege tu empresa u hogar con nuestra resolución sanitaria al día. ¡Solicita evaluación!"
  );

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      propiedad: "",
      infestacion: "",
      email: "",
      telefono: "",
      comentarios: "",
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
          servicio: "Desratización",
          propiedad: values.propiedad,
          infestacion: values.infestacion,
          email: values.email,
          telefono: values.telefono,
          comentarios: values.comentarios,
          origen: "Página Desratización"
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
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
            alt="Técnico realizando control de roedores y desratización en Santiago - Andes Plagas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/70 to-transparent"></div>
        </div>

        <div className="container mx-auto px-5 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 max-w-2xl text-white">
              <h1 className="text-[2.25rem] sm:text-[2.5rem] leading-[1.1] md:text-5xl lg:text-6xl font-bold font-display text-balance">
                Servicio Profesional de <span className="text-[#26B89A]">Desratización</span> en Santiago y Todo Chile
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                Eliminamos ratas y roedores con métodos certificados, seguros y efectivos para hogares, empresas e industrias.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2 font-medium"><CheckCircle2 className="text-[#26B89A] w-5 h-5 shrink-0" /> <span>Resolución Sanitaria al día</span></div>
                <div className="flex items-center gap-2 font-medium"><CheckCircle2 className="text-[#26B89A] w-5 h-5 shrink-0" /> <span>Técnicos certificados</span></div>
                <div className="flex items-center gap-2 font-medium"><CheckCircle2 className="text-[#26B89A] w-5 h-5 shrink-0" /> <span>Atención rápida</span></div>
                <div className="flex items-center gap-2 font-medium"><CheckCircle2 className="text-[#26B89A] w-5 h-5 shrink-0" /> <span>Cobertura nacional</span></div>
              </div>
              <div className="flex flex-col md:flex-row gap-3 pt-6 w-full">
                <Button onClick={scrollToForm} size="lg" className="w-full md:flex-1 bg-[#E8762E] hover:bg-[#D16524] text-white font-bold h-14 px-8 rounded-lg shadow-lg hover:shadow-orange-500/30 transition-all cursor-pointer">
                  Solicitar Desratización Ahora
                </Button>
                <a href="https://wa.me/56942713144" target="_blank" rel="noopener noreferrer" className="w-full md:flex-1">
                  <Button size="lg" variant="outline" className="w-full bg-[#25D366]/10 border-2 border-[#25D366] text-white hover:bg-[#25D366] hover:text-white font-bold h-14 px-8 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 21.611l-3.324-.877-3.856.883.896-3.832-.888-3.356c1.196-4.52 5.568-7.551 10.155-7.551 5.761 0 10.428 4.646 10.428 10.377 0 5.73-4.667 10.377-10.428 10.377-1.077 0-2.126-.17-3.111-.476zm6.541-11.758c-1.282-1.272-2.986-1.975-4.802-1.975-3.738 0-6.779 3.023-6.779 6.742 0 1.189.313 2.353.906 3.385l-.963 3.518 3.652-.949c.995.539 2.112.822 3.262.822h.003c3.736 0 6.778-3.023 6.778-6.744 0-1.802-.705-3.493-1.993-4.773zm-4.793 10.25h-.002c-1.002 0-1.984-.267-2.842-.773l-.203-.119-2.116.55.565-2.046-.131-.208c-.556-.882-.849-1.9-.849-2.96 0-3.082 2.522-5.59 5.617-5.59 1.498 0 2.906.58 3.963 1.631a5.578 5.578 0 011.646 3.962c0 3.08-2.523 5.589-5.616 5.589zm3.085-4.18c-.169-.084-1.003-.492-1.158-.548-.155-.056-.268-.084-.381.084-.112.168-.436.548-.535.66-.098.112-.197.126-.366.042-.169-.084-.716-.261-1.365-.838-.505-.449-.846-1.004-.944-1.172-.099-.168-.01-.259.074-.343.076-.076.169-.196.253-.294.085-.098.113-.168.169-.28.056-.112.028-.21-.014-.294-.042-.084-.381-.91-.521-1.246-.136-.326-.275-.282-.381-.287-.098-.004-.21-.005-.324-.005-.112 0-.295.042-.45.21-.155.168-.591.574-.591 1.401 0 .827.605 1.626.69 1.738.084.112 1.196 1.808 2.898 2.502.405.165.722.264.969.338.407.128.778.11 1.07.067.327-.048 1.003-.406 1.144-.8.14-.393.14-.73.098-.8-.042-.07-.154-.112-.323-.196z"/></svg>
                    Hablar por WhatsApp
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
                      <FormField control={form.control} name="propiedad" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold text-gray-700">Tipo de Propiedad</FormLabel>
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
                      <FormField control={form.control} name="infestacion" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold text-gray-700">Nivel de Infestación</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl><SelectTrigger className="bg-white h-12 border-gray-200"><SelectValue placeholder="Seleccione..." /></SelectTrigger></FormControl>
                            <SelectContent className="bg-white">
                              <SelectItem value="baja">Baja (Avistamientos ocasionales)</SelectItem>
                              <SelectItem value="media">Media (Presencia diaria)</SelectItem>
                              <SelectItem value="alta">Alta (Plaga establecida)</SelectItem>
                            </SelectContent>
                          </Select>
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
                      <FormField control={form.control} name="comentarios" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold text-gray-700">Mensaje</FormLabel>
                          <FormControl><Textarea placeholder="Ej: Tengo mascotas, el local es de dos pisos, vi rastros en la cocina..." {...field} className="bg-white min-h-[100px] resize-y border-gray-200" /></FormControl>
                        </FormItem>
                      )} />
                      <Button type="submit" disabled={isSubmitting} className="w-full bg-[#E8762E] hover:bg-[#D16524] text-white font-bold h-14 rounded-lg shadow-lg hover:shadow-orange-500/30 transition-all mt-4 cursor-pointer">
                        {isSubmitting ? "ENVIANDO..." : "SOLICITAR EVALUACIÓN"}
                      </Button>
                      
                      <a 
                        href="https://wa.me/56942713144" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full block mt-4"
                      >
                        <Button type="button" variant="outline" className="w-full border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold h-14 rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 21.611l-3.324-.877-3.856.883.896-3.832-.888-3.356c1.196-4.52 5.568-7.551 10.155-7.551 5.761 0 10.428 4.646 10.428 10.377 0 5.73-4.667 10.377-10.428 10.377-1.077 0-2.126-.17-3.111-.476zm6.541-11.758c-1.282-1.272-2.986-1.975-4.802-1.975-3.738 0-6.779 3.023-6.779 6.742 0 1.189.313 2.353.906 3.385l-.963 3.518 3.652-.949c.995.539 2.112.822 3.262.822h.003c3.736 0 6.778-3.023 6.778-6.744 0-1.802-.705-3.493-1.993-4.773zm-4.793 10.25h-.002c-1.002 0-1.984-.267-2.842-.773l-.203-.119-2.116.55.565-2.046-.131-.208c-.556-.882-.849-1.9-.849-2.96 0-3.082 2.522-5.59 5.617-5.59 1.498 0 2.906.58 3.963 1.631a5.578 5.578 0 011.646 3.962c0 3.08-2.523 5.589-5.616 5.589zm3.085-4.18c-.169-.084-1.003-.492-1.158-.548-.155-.056-.268-.084-.381.084-.112.168-.436.548-.535.66-.098.112-.197.126-.366.042-.169-.084-.716-.261-1.365-.838-.505-.449-.846-1.004-.944-1.172-.099-.168-.01-.259.074-.343.076-.076.169-.196.253-.294.085-.098.113-.168.169-.28.056-.112.028-.21-.014-.294-.042-.084-.381-.91-.521-1.246-.136-.326-.275-.282-.381-.287-.098-.004-.21-.005-.324-.005-.112 0-.295.042-.45.21-.155.168-.591.574-.591 1.401 0 .827.605 1.626.69 1.738.084.112 1.196 1.808 2.898 2.502.405.165.722.264.969.338.407.128.778.11 1.07.067.327-.048 1.003-.406 1.144-.8.14-.393.14-.73.098-.8-.042-.07-.154-.112-.323-.196z"/></svg>
                          Hablar por WhatsApp
                        </Button>
                      </a>
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
        <div className="container mx-auto px-5">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6 font-display uppercase tracking-tight">¿Por qué es importante la Desratización?</h2>
            <div className="w-24 h-1.5 bg-[#26B89A] mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="flex gap-6 p-6 rounded-2xl hover:bg-red-50/50 transition-colors">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center shrink-0 border border-red-200"><ShieldAlert className="text-red-600 w-8 h-8" /></div>
              <div>
                <h3 className="font-bold text-xl mb-3 text-[#0F172A]">Riesgos Sanitarios</h3>
                <p className="text-[#64748B] leading-relaxed">Los roedores transmiten enfermedades graves como el Hantavirus, Leptospirosis y Salmonelosis, poniendo en peligro a su familia y colaboradores.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 rounded-2xl hover:bg-orange-50/50 transition-colors">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center shrink-0 border border-orange-200"><Zap className="text-orange-600 w-8 h-8" /></div>
              <div>
                <h3 className="font-bold text-xl mb-3 text-[#0F172A]">Daños Estructurales</h3>
                <p className="text-[#64748B] leading-relaxed">Su hábito constante de roer puede causar cortocircuitos e incendios al dañar cables eléctricos, además de destruir mobiliario y estructuras.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 rounded-2xl hover:bg-teal-50/50 transition-colors">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center shrink-0 border border-teal-200"><CheckCircle2 className="text-teal-600 w-8 h-8" /></div>
              <div>
                <h3 className="font-bold text-xl mb-3 text-[#0F172A]">Contaminación de Alimentos</h3>
                <p className="text-[#64748B] leading-relaxed">Contaminan suministros de alimentos con orina, heces y pelos, provocando pérdidas económicas masivas y riesgos de intoxicación.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 rounded-2xl hover:bg-blue-50/50 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0 border border-blue-200"><ShieldAlert className="text-blue-600 w-8 h-8" /></div>
              <div>
                <h3 className="font-bold text-xl mb-3 text-[#0F172A]">Multas Sanitarias</h3>
                <p className="text-[#64748B] leading-relaxed">Para empresas, la presencia de roedores significa la clausura inmediata y altas multas por el SEREMI, dañando irreversiblemente su reputación.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-16 font-display uppercase tracking-tight">Nuestro Proceso de Desratización</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Search, title: "1. Inspección técnica", desc: "Evaluamos puntos críticos y focos de infestación en terreno." },
              { icon: Target, title: "2. Diagnóstico", desc: "Creamos un plan de acción personalizado según la especie identificada." },
              { icon: LayoutDashboard, title: "3. Instalación", desc: "Colocamos estaciones de cebado seguras, ancladas y certificadas." },
              { icon: History, title: "4. Seguimiento", desc: "Control preventivo mensual y monitoreo constante de resultados." }
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
        <div className="container mx-auto px-5">
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
                  <img src={sol.img} alt={`Servicio de desratización para ${sol.title.toLowerCase()} en Santiago`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <CardContent className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-[#0F172A]">Desratización para {sol.title}</h3>
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
        <div className="container mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] text-center mb-16 font-display uppercase tracking-tight">Clientes Satisfechos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Juan Pérez", role: "Administrador de Restaurant", text: "Excelente servicio, eliminaron el problema en una semana y nos ayudaron con toda la documentación para la certificación SEREMI.", img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop" },
              { name: "María González", role: "Dueña de Casa", text: "Muy profesionales y puntuales. Los productos no tienen olor y son realmente seguros para mis mascotas. Totalmente recomendados.", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6954?q=80&w=2070&auto=format&fit=crop" },
              { name: "Ricardo Soto", role: "Gerente Logístico", text: "Llevamos más de un año con su plan preventivo industrial y los resultados han sido impecables. Cero avistamientos en bodega.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" }
            ].map((t, i) => (
              <Card key={i} className="p-0 border-0 shadow-xl overflow-hidden rounded-2xl flex flex-col bg-white">
                <div className="h-40 overflow-hidden">
                  <img src={t.img} alt={`Cliente satisfecho con servicio de desratización - ${t.name}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
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
        <div className="container mx-auto px-5 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display uppercase tracking-tight">¿Problemas con roedores? <span className="text-[#E8762E]">Actúa hoy.</span></h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            No permitas que una plaga ponga en riesgo tu salud, la de tu familia o la reputación de tu negocio. Evaluación profesional inmediata y garantizada.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button onClick={scrollToForm} size="lg" className="bg-[#E8762E] hover:bg-[#D16524] text-white font-bold h-18 px-12 rounded-xl text-xl shadow-2xl shadow-orange-500/20 transition-all cursor-pointer">
              Solicitar Desratización Ahora
            </Button>
            <a href="https://wa.me/56942713144" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold h-18 px-12 rounded-xl text-xl transition-all cursor-pointer flex items-center justify-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 21.611l-3.324-.877-3.856.883.896-3.832-.888-3.356c1.196-4.52 5.568-7.551 10.155-7.551 5.761 0 10.428 4.646 10.428 10.377 0 5.73-4.667 10.377-10.428 10.377-1.077 0-2.126-.17-3.111-.476zm6.541-11.758c-1.282-1.272-2.986-1.975-4.802-1.975-3.738 0-6.779 3.023-6.779 6.742 0 1.189.313 2.353.906 3.385l-.963 3.518 3.652-.949c.995.539 2.112.822 3.262.822h.003c3.736 0 6.778-3.023 6.778-6.744 0-1.802-.705-3.493-1.993-4.773zm-4.793 10.25h-.002c-1.002 0-1.984-.267-2.842-.773l-.203-.119-2.116.55.565-2.046-.131-.208c-.556-.882-.849-1.9-.849-2.96 0-3.082 2.522-5.59 5.617-5.59 1.498 0 2.906.58 3.963 1.631a5.578 5.578 0 011.646 3.962c0 3.08-2.523 5.589-5.616 5.589zm3.085-4.18c-.169-.084-1.003-.492-1.158-.548-.155-.056-.268-.084-.381.084-.112.168-.436.548-.535.66-.098.112-.197.126-.366.042-.169-.084-.716-.261-1.365-.838-.505-.449-.846-1.004-.944-1.172-.099-.168-.01-.259.074-.343.076-.076.169-.196.253-.294.085-.098.113-.168.169-.28.056-.112.028-.21-.014-.294-.042-.084-.381-.91-.521-1.246-.136-.326-.275-.282-.381-.287-.098-.004-.21-.005-.324-.005-.112 0-.295.042-.45.21-.155.168-.591.574-.591 1.401 0 .827.605 1.626.69 1.738.084.112 1.196 1.808 2.898 2.502.405.165.722.264.969.338.407.128.778.11 1.07.067.327-.048 1.003-.406 1.144-.8.14-.393.14-.73.098-.8-.042-.07-.154-.112-.323-.196z"/></svg>
                WhatsApp Directo
              </Button>
            </a>
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
