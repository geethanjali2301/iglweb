import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AISolutions from "./pages/AISolutions";
import Advisory from "./pages/Advisory";
import Capabilities from "./pages/Capabilities";
import Company from "./pages/Company";
import LibrarySolutions from "./pages/LibrarySolutions";
import Publishers from "./pages/Publishers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ai-solutions" element={<AISolutions />} />
          <Route path="/advisory" element={<Advisory />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/company" element={<Company />} />
          <Route path="/library-solutions" element={<LibrarySolutions />} />
          <Route path="/publishers" element={<Publishers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
