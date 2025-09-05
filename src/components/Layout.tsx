import { useState } from "react";
import { Building2, Home, LogOut, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface LayoutProps {
  children: React.ReactNode;
  userType?: "owner" | "tenant";
  onLogout?: () => void;
}

const Layout = ({ children, userType = "owner", onLogout }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = userType === "owner" ? [
    { name: "Dashboard", href: "/", icon: Home, current: true },
    { name: "Properties", href: "/owner/properties", icon: Building2, current: false },
    { name: "Tenants", href: "/owner/tenants", icon: Building2, current: false },
    { name: "Payments", href: "/owner/payments", icon: Building2, current: false },
    { name: "Maintenance", href: "/owner/maintenance", icon: Building2, current: false },
    { name: "Documents", href: "/owner/documents", icon: Building2, current: false },
  ] : [
    { name: "Dashboard", href: "/", icon: Home, current: true },
    { name: "My Rent", href: "/tenant/rent", icon: Building2, current: false },
    { name: "Maintenance", href: "/tenant/maintenance", icon: Building2, current: false },
    { name: "Documents", href: "/tenant/documents", icon: Building2, current: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? '' : 'hidden'}`}>
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
        <div className="fixed left-0 top-0 h-full w-64 bg-card border-r shadow-lg">
          <div className="flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-primary" />
              <span className="font-bold">RentManager Pro</span>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
              <X className="w-4 h-4" />
            </Button>
          </div>
          <nav className="px-4 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  item.current
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-1 min-h-0 bg-card border-r">
          <div className="flex items-center h-16 px-4 border-b">
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg">RentManager Pro</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="px-4 mb-4">
              <Badge variant={userType === "owner" ? "default" : "secondary"}>
                {userType === "owner" ? "Property Owner" : "Tenant"}
              </Badge>
            </div>
            <nav className="px-4 space-y-2 flex-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    item.current
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="px-4 mt-6">
              <Button 
                variant="outline" 
                className="w-full gap-2" 
                onClick={onLogout}
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar for mobile */}
        <div className="lg:hidden flex items-center justify-between h-16 px-4 border-b bg-card">
          <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(true)}>
            <Menu className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-primary" />
            <span className="font-semibold">RentManager Pro</span>
          </div>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;