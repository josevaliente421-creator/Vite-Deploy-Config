import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Desratizacion from "@/pages/desratizacion";
import Sanitizacion from "@/pages/sanitizacion";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/servicios/desratizacion" component={Desratizacion} />
      <Route path="/servicios/sanitizacion" component={Sanitizacion} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
