import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  plaga: z.string().min(1, "Seleccione un tipo de plaga"),
  email: z.string().email("Ingrese un correo válido"),
  contacto: z.string().min(1, "Ingrese su teléfono o WhatsApp"),
  comentarios: z.string().optional(),
});

export default function Hero() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plaga: "",
      email: "",
      contacto: "",
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
          servicio: values.plaga,
          email: values.email,
          telefono: values.contacto,
          comentarios: values.comentarios,
          origen: "Hero Form"
        }),
      });

      if (response.ok) {
        // Track conversion Google Ads
        if (typeof window.gtag_report_conversion === 'function') {
          window.gtag_report_conversion();
        }
        
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
    const formElement = document.getElementById("quote-form-hero");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Técnicos de Andes Plagas realizando control de plagas y sanitización en Santiago"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(212,32%,16%)]/90 via-[hsl(212,32%,16%)]/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 max-w-2xl animate-in slide-in-from-left-10 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(168,64%,44%)]/20 text-[hsl(168,64%,44%)] border border-[hsl(168,64%,44%)]/30 backdrop-blur-sm">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Resolución Sanitaria al día</span>
            </div>
            
            <h1 className="text-[2.25rem] sm:text-[2.5rem] leading-[1.1] md:text-5xl lg:text-6xl font-bold font-display text-white drop-shadow-lg text-balance">
              Control Profesional de <br />
              <span className="text-[hsl(168,64%,44%)]">Plagas y Sanitización</span> <br />
              en Santiago
            </h1>
            
            <p className="text-lg text-gray-200 md:text-xl max-w-lg leading-relaxed font-light">
              Protegemos tu salud y tu negocio con protocolos certificados y Resolución Sanitaria al día. Expertos en normativa SEREMI.
            </p>
            <div className="flex flex-col md:flex-row gap-3 pt-6 w-full">
              <Button onClick={scrollToForm} size="lg" className="w-full md:flex-1 bg-[#E8762E] hover:bg-[#D16524] text-white font-bold h-14 px-8 rounded-lg shadow-lg hover:shadow-orange-500/30 transition-all cursor-pointer">
                Solicitar Evaluación Ahora
              </Button>
              <a href="https://wa.me/56942713144" target="_blank" rel="noopener noreferrer" className="w-full md:flex-1" onClick={() => { if (typeof window.gtag_report_conversion === 'function') window.gtag_report_conversion(); }}>
                <Button size="lg" variant="outline" className="w-full bg-[#25D366]/10 border-2 border-[#25D366] text-white hover:bg-[#25D366] hover:text-white font-bold h-14 px-8 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 21.611l-3.324-.877-3.856.883.896-3.832-.888-3.356c1.196-4.52 5.568-7.551 10.155-7.551 5.761 0 10.428 4.646 10.428 10.377 0 5.73-4.667 10.377-10.428 10.377-1.077 0-2.126-.17-3.111-.476zm6.541-11.758c-1.282-1.272-2.986-1.975-4.802-1.975-3.738 0-6.779 3.023-6.779 6.742 0 1.189.313 2.353.906 3.385l-.963 3.518 3.652-.949c.995.539 2.112.822 3.262.822h.003c3.736 0 6.778-3.023 6.778-6.744 0-1.802-.705-3.493-1.993-4.773zm-4.793 10.25h-.002c-1.002 0-1.984-.267-2.842-.773l-.203-.119-2.116.55.565-2.046-.131-.208c-.556-.882-.849-1.9-.849-2.96 0-3.082 2.522-5.59 5.617-5.59 1.498 0 2.906.58 3.963 1.631a5.578 5.578 0 011.646 3.962c0 3.08-2.523 5.589-5.616 5.589zm3.085-4.18c-.169-.084-1.003-.492-1.158-.548-.155-.056-.268-.084-.381.084-.112.168-.436.548-.535.66-.098.112-.197.126-.366.042-.169-.084-.716-.261-1.365-.838-.505-.449-.846-1.004-.944-1.172-.099-.168-.01-.259.074-.343.076-.076.169-.196.253-.294.085-.098.113-.168.169-.28.056-.112.028-.21-.014-.294-.042-.084-.381-.91-.521-1.246-.136-.326-.275-.282-.381-.287-.098-.004-.21-.005-.324-.005-.112 0-.295.042-.45.21-.155.168-.591.574-.591 1.401 0 .827.605 1.626.69 1.738.084.112 1.196 1.808 2.898 2.502.405.165.722.264.969.338.407.128.778.11 1.07.067.327-.048 1.003-.406 1.144-.8.14-.393.14-.73.098-.8-.042-.07-.154-.112-.323-.196z"/></svg>
                  Hablar por WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Right Content - Floating Form */}
          <div id="quote-form-hero" className="w-full max-w-md mx-auto lg:ml-auto animate-in slide-in-from-right-10 duration-700 delay-200">
            <Card className="shadow-2xl border-0 overflow-hidden relative backdrop-blur-sm bg-white/95">
              <div className="h-2 w-full bg-[hsl(23,79%,55%)] absolute top-0 left-0"></div>
              <CardHeader className="pb-2 pt-6">
                <CardTitle className="text-2xl font-bold text-[hsl(212,32%,16%)] text-center font-display">
                  ¿Buscas un presupuesto?
                </CardTitle>
                <p className="text-center text-gray-500 text-sm">Respuesta en menos de 15 minutos</p>
              </CardHeader>
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="plaga"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold text-gray-700">Tipo de Servicio</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 border-gray-200 bg-white">
                                <SelectValue placeholder="Seleccione la plaga o servicio" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white">
                              <SelectItem value="ratas">Desratización (Roedores)</SelectItem>
                              <SelectItem value="insectos">Desinsectación (Insectos)</SelectItem>
                              <SelectItem value="sanitizacion">Sanitización (Virus/Bacterias)</SelectItem>
                              <SelectItem value="otro">Otro / Inspección</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold text-gray-700">Correo Electrónico</FormLabel>
                          <FormControl>
                            <Input placeholder="ejemplo@correo.com" {...field} className="h-12 border-gray-200 bg-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="contacto"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold text-gray-700">WhatsApp / Teléfono</FormLabel>
                          <FormControl>
                            <Input placeholder="+56 9 ..." {...field} className="h-12 border-gray-200 bg-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="comentarios"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold text-gray-700">Mensaje</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Ej: Tengo mascotas, el local es de dos pisos, vi rastros en la cocina..." 
                              className="min-h-[100px] resize-y border-gray-200 bg-white"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-[#E8762E] hover:bg-[#D16524] text-white font-bold text-lg h-14 rounded-lg shadow-lg hover:shadow-orange-500/30 transition-all mt-2 cursor-pointer"
                    >
                      {isSubmitting ? "ENVIANDO..." : "SOLICITAR COTIZACIÓN"}
                    </Button>
                    
                    <a 
                      href="https://wa.me/56942713144" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full block mt-4"
                      onClick={() => { if (typeof window.gtag_report_conversion === 'function') window.gtag_report_conversion(); }}
                    >
                      <Button type="button" variant="outline" className="w-full border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold h-14 rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 21.611l-3.324-.877-3.856.883.896-3.832-.888-3.356c1.196-4.52 5.568-7.551 10.155-7.551 5.761 0 10.428 4.646 10.428 10.377 0 5.73-4.667 10.377-10.428 10.377-1.077 0-2.126-.17-3.111-.476zm6.541-11.758c-1.282-1.272-2.986-1.975-4.802-1.975-3.738 0-6.779 3.023-6.779 6.742 0 1.189.313 2.353.906 3.385l-.963 3.518 3.652-.949c.995.539 2.112.822 3.262.822h.003c3.736 0 6.778-3.023 6.778-6.744 0-1.802-.705-3.493-1.993-4.773zm-4.793 10.25h-.002c-1.002 0-1.984-.267-2.842-.773l-.203-.119-2.116.55.565-2.046-.131-.208c-.556-.882-.849-1.9-.849-2.96 0-3.082 2.522-5.59 5.617-5.59 1.498 0 2.906.58 3.963 1.631a5.578 5.578 0 011.646 3.962c0 3.08-2.523 5.589-5.616 5.589zm3.085-4.18c-.169-.084-1.003-.492-1.158-.548-.155-.056-.268-.084-.381.084-.112.168-.436.548-.535.66-.098.112-.197.126-.366.042-.169-.084-.716-.261-1.365-.838-.505-.449-.846-1.004-.944-1.172-.099-.168-.01-.259.074-.343.076-.076.169-.196.253-.294.085-.098.113-.168.169-.28.056-.112.028-.21-.014-.294-.042-.084-.381-.91-.521-1.246-.136-.326-.275-.282-.381-.287-.098-.004-.21-.005-.324-.005-.112 0-.295.042-.45.21-.155.168-.591.574-.591 1.401 0 .827.605 1.626.69 1.738.084.112 1.196 1.808 2.898 2.502.405.165.722.264.969.338.407.128.778.11 1.07.067.327-.048 1.003-.406 1.144-.8.14-.393.14-.73.098-.8-.042-.07-.154-.112-.323-.196z"/></svg>
                        Hablar por WhatsApp
                      </Button>
                    </a>
                    
                    <p className="text-xs text-center text-gray-400 mt-4">
                      Tus datos están protegidos. No enviamos spam.
                    </p>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
