import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
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
          <Route
            path="/owner/properties"
            element={
              <Layout userType="owner">
                <OwnerProperties />
              </Layout>
            }
          />
          <Route
            path="/owner/tenants"
            element={
              <Layout userType="owner">
                <OwnerTenants />
              </Layout>
            }
          />
          <Route
            path="/owner/payments"
            element={
              <Layout userType="owner">
                <OwnerPayments />
              </Layout>
            }
          />
          <Route
            path="/owner/maintenance"
            element={
              <Layout userType="owner">
                <OwnerMaintenance />
              </Layout>
            }
          />
          <Route
            path="/owner/documents"
            element={
              <Layout userType="owner">
                <OwnerDocuments />
              </Layout>
            }
          />

          {/* Tenant Routes */}
          <Route
            path="/tenant/rent"
            element={
              <Layout userType="tenant">
                <TenantMyRent />
              </Layout>
            }
          />
          <Route
            path="/tenant/maintenance"
            element={
              <Layout userType="tenant">
                <TenantMaintenance />
              </Layout>
            }
          />
          <Route
            path="/tenant/documents"
            element={
              <Layout userType="tenant">
                <TenantDocuments />
              </Layout>
            }
          />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
