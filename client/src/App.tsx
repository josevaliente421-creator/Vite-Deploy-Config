import { Switch, Route } from "wouter";
import { lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import FloatingWhatsApp from "@/components/floating-whatsapp";

const Home = lazy(() => import("@/pages/home"));
const Desratizacion = lazy(() => import("@/pages/desratizacion"));
const Sanitizacion = lazy(() => import("@/pages/sanitizacion"));
const Desinsectacion = lazy(() => import("@/pages/desinsectacion"));
const Certificaciones = lazy(() => import("@/pages/certificaciones"));
const ControlDePlagasEmpresas = lazy(() => import("@/pages/control-de-plagas-empresas"));
const PoliticaDePrivacidad = lazy(() => import("@/pages/politica-de-privacidad"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" aria-hidden="true" />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/control-de-plagas-empresas" component={ControlDePlagasEmpresas} />
        <Route path="/desratizacion" component={Desratizacion} />
        <Route path="/sanitizacion" component={Sanitizacion} />
        <Route path="/desinsectacion" component={Desinsectacion} />
        <Route path="/certificaciones" component={Certificaciones} />
        <Route path="/politica-de-privacidad" component={PoliticaDePrivacidad} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
      <FloatingWhatsApp />
    </QueryClientProvider>
  );
}

export default App;
