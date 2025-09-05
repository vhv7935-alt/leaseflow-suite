import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SRS from "./pages/SRS";
import NotFound from "./pages/NotFound";

// Owner pages
import OwnerProperties from "./pages/owner/Properties";
import OwnerTenants from "./pages/owner/Tenants";
import OwnerPayments from "./pages/owner/Payments";
import OwnerMaintenance from "./pages/owner/Maintenance";
import OwnerDocuments from "./pages/owner/Documents";

// Tenant pages  
import TenantMyRent from "./pages/tenant/MyRent";
import TenantMaintenance from "./pages/tenant/Maintenance";
import TenantDocuments from "./pages/tenant/Documents";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/srs" element={<SRS />} />
          
          {/* Owner Routes */}
          <Route path="/owner/properties" element={<OwnerProperties />} />
          <Route path="/owner/tenants" element={<OwnerTenants />} />
          <Route path="/owner/payments" element={<OwnerPayments />} />
          <Route path="/owner/maintenance" element={<OwnerMaintenance />} />
          <Route path="/owner/documents" element={<OwnerDocuments />} />
          
          {/* Tenant Routes */}
          <Route path="/tenant/rent" element={<TenantMyRent />} />
          <Route path="/tenant/maintenance" element={<TenantMaintenance />} />
          <Route path="/tenant/documents" element={<TenantDocuments />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
