import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const Checkout = lazy(() => import("./pages/Checkout.tsx"));
const ThankYou = lazy(() => import("./pages/ThankYou.tsx"));
const Auth = lazy(() => import("./pages/Auth.tsx"));
const AdminOrders = lazy(() => import("./pages/AdminOrders.tsx"));

const queryClient = new QueryClient();
const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={routerBasename}>
        <Suspense fallback={<div className="min-h-screen bg-background text-foreground" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/obrigado" element={<ThankYou />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin/pedidos" element={<AdminOrders />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
