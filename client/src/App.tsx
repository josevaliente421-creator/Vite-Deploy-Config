import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Desratizacion from "@/pages/desratizacion";
import Sanitizacion from "@/pages/sanitizacion";
import Desinsectacion from "@/pages/desinsectacion";
import Certificaciones from "@/pages/certificaciones";
import FloatingWhatsApp from "@/components/floating-whatsapp";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/desratizacion" component={Desratizacion} />
      <Route path="/sanitizacion" component={Sanitizacion} />
      <Route path="/desinsectacion" component={Desinsectacion} />
      <Route path="/certificaciones" component={Certificaciones} />
      <Route component={NotFound} />
    </Switch>
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
