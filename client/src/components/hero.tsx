import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  plaga: z.string().min(1, "Seleccione un tipo de plaga"),
  contacto: z.string().min(1, "Ingrese su teléfono o WhatsApp"),
});

export default function Hero() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plaga: "",
      contacto: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Técnicos de control de plagas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(212,32%,16%)]/90 via-[hsl(212,32%,16%)]/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 max-w-2xl animate-in slide-in-from-left-10 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(168,64%,44%)]/20 text-[hsl(168,64%,44%)] border border-[hsl(168,64%,44%)]/30 backdrop-blur-sm">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Resolución Sanitaria al día</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight drop-shadow-lg">
              Control Profesional de <br />
              <span className="text-[hsl(168,64%,44%)]">Plagas y Sanitización</span> <br />
              en Santiago
            </h1>
            
            <p className="text-lg text-gray-200 md:text-xl max-w-lg leading-relaxed font-light">
              Protegemos tu salud y tu negocio con protocolos certificados y Resolución Sanitaria al día. Expertos en normativa SEREMI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-[hsl(168,64%,44%)] hover:bg-[hsl(168,64%,35%)] text-white font-bold rounded-lg shadow-lg hover:shadow-[hsl(168,64%,44%)]/50 transition-all text-base h-14 px-8"
              >
                Ver Planes Empresas
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[hsl(212,32%,16%)] font-bold rounded-lg text-base h-14 px-8"
              >
                Ver Soluciones Hogar
              </Button>
            </div>
          </div>

          {/* Right Content - Floating Form */}
          <div className="w-full max-w-md mx-auto lg:ml-auto animate-in slide-in-from-right-10 duration-700 delay-200">
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
                            <SelectContent>
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

                    <Button 
                      type="submit" 
                      className="w-full bg-[hsl(23,79%,55%)] hover:bg-[hsl(23,79%,45%)] text-white font-bold text-lg h-14 rounded-lg shadow-lg hover:shadow-orange-500/30 transition-all mt-2"
                    >
                      SOLICITAR COTIZACIÓN
                    </Button>
                    
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
