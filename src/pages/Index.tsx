import { useState } from "react";
import AuthPage from "@/components/auth/AuthPage";
import Layout from "@/components/Layout";
import OwnerDashboard from "@/components/dashboard/OwnerDashboard";
import TenantDashboard from "@/components/dashboard/TenantDashboard";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState<"owner" | "tenant">("owner");

  // For demo purposes - in real app this would be handled by actual auth
  const handleLogin = (type: "owner" | "tenant") => {
    setUserType(type);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <AuthPage onLogin={handleLogin} />;
  }

  return (
    <Layout userType={userType} onLogout={handleLogout}>
      {userType === "owner" ? <OwnerDashboard /> : <TenantDashboard />}
    </Layout>
  );
};

export default Index;
