import { useRef, useState } from "react";
import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import WhatsAppIcon from "@/components/whatsapp-icon";
import { useToast } from "@/hooks/use-toast";
import { LEAD_WEBHOOK_URL, currentPage, trackFormStart, trackLead, trackWhatsApp, whatsappHref } from "@/lib/analytics";

const formSchema = z
  .object({
    nombre: z.string().min(2, "Ingrese su nombre"),
    tipoCliente: z.string().min(1, "Seleccione el tipo de cliente"),
    empresa: z.string().optional(),
    telefono: z.string().min(8, "Ingrese un teléfono de contacto"),
    email: z.string().email("Ingrese un correo válido"),
    problema: z.string().min(1, "Seleccione el problema"),
    comuna: z.string().optional(),
    mensaje: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.tipoCliente === "empresa" && (!data.empresa || data.empresa.trim().length < 2)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["empresa"],
        message: "Ingrese el nombre de la empresa",
      });
    }
  });

type QuoteFormValues = z.infer<typeof formSchema>;

type QuoteFormProps = {
  id?: string;
  service: string;
  serviceLabel: string;
  location: string;
  title?: string;
  subtitle?: string;
  submitLabel?: string;
  defaultProblem?: string;
  whatsappMessage?: string;
  showWhatsApp?: boolean;
};

const PROBLEMS = ["Roedores", "Cucarachas", "Chinches", "Insectos", "Otro / No estoy seguro"];

export default function QuoteForm({
  id,
  service,
  serviceLabel,
  location,
  title = "Cotización rápida",
  subtitle = "Cuéntanos tu problema y te contactamos a la brevedad.",
  submitLabel = "SOLICITAR COTIZACIÓN",
  defaultProblem,
  whatsappMessage = "Hola, necesito ayuda con una plaga.",
  showWhatsApp = true,
}: QuoteFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const formStartedRef = useRef(false);

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      tipoCliente: "",
      empresa: "",
      telefono: "",
      email: "",
      problema: defaultProblem || "",
      comuna: "",
      mensaje: "",
    },
  });

  const handleFirstFocus = () => {
    if (!formStartedRef.current) {
      formStartedRef.current = true;
      trackFormStart(location, service);
    }
  };

  async function onSubmit(values: QuoteFormValues) {
    if (honeypotRef.current && honeypotRef.current.value) {
      form.reset();
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          servicio: serviceLabel,
          tipo_cliente: values.tipoCliente,
          nombre: values.nombre,
          empresa: values.empresa || "",
          telefono: values.telefono,
          problema: values.problema,
          comuna: values.comuna || "",
          ciudad: values.comuna || "",
          email: values.email,
          mensaje: values.mensaje || "",
          comentario: values.mensaje || "",
          origen: `Formulario ${serviceLabel}`,
          page: currentPage(),
        }),
      });

      if (!response.ok) throw new Error("Error en el envío");

      trackLead({ location, service, customerType: values.tipoCliente });

      toast({
        title: "¡Solicitud enviada!",
        description: "Nos contactaremos contigo a la brevedad.",
      });
      form.reset();
      formStartedRef.current = false;
    } catch {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu solicitud. Intenta nuevamente o escríbenos por WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div id={id} className="w-full max-w-md mx-auto lg:ml-auto scroll-mt-28">
      <Card className="shadow-2xl border-0 overflow-hidden relative bg-white/95 backdrop-blur-sm">
        <div className="h-2 w-full bg-[hsl(23,79%,55%)]"></div>
        <CardHeader className="pb-2 pt-6">
          <CardTitle className="text-2xl font-bold text-[hsl(212,32%,16%)] text-center font-display">
            {title}
          </CardTitle>
          <p className="text-center text-gray-500 text-sm">{subtitle}</p>
        </CardHeader>
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" onFocusCapture={handleFirstFocus}>
              <input
                ref={honeypotRef}
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
                style={{ position: "absolute", left: "-9999px" }}
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-gray-700">Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Su nombre" autoComplete="name" {...field} className="h-12 border-gray-200 bg-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tipoCliente"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-gray-700">Tipo de cliente</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 border-gray-200 bg-white">
                            <SelectValue placeholder="Seleccione..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white">
                          <SelectItem value="empresa">Empresa</SelectItem>
                          <SelectItem value="particular">Particular</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="empresa"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-gray-700">
                        Empresa {form.watch("tipoCliente") === "particular" ? "(opcional)" : ""}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Ej: Comercializadora SPA" autoComplete="organization" {...field} className="h-12 border-gray-200 bg-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="telefono"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-gray-700">Teléfono / WhatsApp</FormLabel>
                      <FormControl>
                        <Input placeholder="+56 9 ..." autoComplete="tel" {...field} className="h-12 border-gray-200 bg-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-gray-700">Correo electrónico</FormLabel>
                      <FormControl>
                        <Input placeholder="correo@empresa.cl" type="email" autoComplete="email" {...field} className="h-12 border-gray-200 bg-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="comuna"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-gray-700">Comuna (opcional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Ej: Providencia" autoComplete="address-level2" {...field} className="h-12 border-gray-200 bg-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="problema"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-gray-700">Problema</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 border-gray-200 bg-white">
                          <SelectValue placeholder="Seleccione..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-white">
                        {PROBLEMS.map((problem) => (
                          <SelectItem key={problem} value={problem}>{problem}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="mensaje"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-gray-700">Mensaje (opcional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Cuéntenos brevemente su situación" rows={2} {...field} className="border-gray-200 bg-white" />
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
                {isSubmitting ? "ENVIANDO..." : submitLabel}
              </Button>

              {showWhatsApp && (
                <a
                  href={whatsappHref(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block mt-4"
                  onClick={() => trackWhatsApp(`form-${location}`, service)}
                >
                  <Button type="button" variant="outline" className="w-full border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold h-14 rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer">
                    <WhatsAppIcon className="w-5 h-5" />
                    Hablar por WhatsApp
                  </Button>
                </a>
              )}

              <p className="text-xs text-center text-gray-400 mt-4">
                Tus datos se usan solo para responder tu solicitud.{" "}
                <Link href="/politica-de-privacidad" className="underline hover:text-gray-600">
                  Política de privacidad
                </Link>
              </p>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
