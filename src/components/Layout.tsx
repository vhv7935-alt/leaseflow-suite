import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();

  const navigation =
    userType === "owner"
      ? [
          { name: "Dashboard", href: "/", icon: Home },
          { name: "Properties", href: "/owner/properties", icon: Building2 },
          { name: "Tenants", href: "/owner/tenants", icon: Building2 },
          { name: "Payments", href: "/owner/payments", icon: Building2 },
          { name: "Maintenance", href: "/owner/maintenance", icon: Building2 },
          { name: "Documents", href: "/owner/documents", icon: Building2 },
        ]
      : [
          { name: "Dashboard", href: "/", icon: Home },
          { name: "My Rent", href: "/tenant/rent", icon: Building2 },
          { name: "Maintenance", href: "/tenant/maintenance", icon: Building2 },
          { name: "Documents", href: "/tenant/documents", icon: Building2 },
        ];

  // Check if current path matches navigation item
  const isCurrentPath = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
        <div className="fixed left-0 top-0 h-full w-72 bg-white/95 backdrop-blur-xl border-r border-slate-200/50 shadow-2xl transform transition-transform duration-300">
          <div className="flex h-20 items-center justify-between px-6 border-b border-slate-200/50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                  RentManager Pro
                </span>
                <p className="text-xs text-slate-500">Property Management</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(false)}
              className="hover:bg-slate-100 rounded-full p-2"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          <nav className="px-4 py-6 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`group flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isCurrentPath(item.href)
                    ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-500/25"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 hover:shadow-sm"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon
                  className={`w-5 h-5 transition-colors ${
                    isCurrentPath(item.href)
                      ? "text-white"
                      : "text-slate-500 group-hover:text-slate-700"
                  }`}
                />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
        <div className="flex flex-col flex-1 min-h-0 bg-white/80 backdrop-blur-xl border-r border-slate-200/50 shadow-xl">
          <div className="flex items-center h-20 px-6 border-b border-slate-200/50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                  RentManager Pro
                </span>
                <p className="text-xs text-slate-500">Property Management</p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col pt-6 pb-6 overflow-y-auto">
            <div className="px-6 mb-6">
              <Badge
                variant={userType === "owner" ? "default" : "secondary"}
                className={`px-3 py-1 text-xs font-medium ${
                  userType === "owner"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {userType === "owner" ? "Property Owner" : "Tenant"}
              </Badge>
            </div>
            <nav className="px-4 space-y-1 flex-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isCurrentPath(item.href)
                      ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-500/25"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 hover:shadow-sm"
                  }`}
                >
                  <item.icon
                    className={`w-5 h-5 transition-colors ${
                      isCurrentPath(item.href)
                        ? "text-white"
                        : "text-slate-500 group-hover:text-slate-700"
                    }`}
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="px-4 mt-6">
              <Button
                variant="outline"
                className="w-full gap-3 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border-slate-200 hover:border-slate-300 transition-all duration-200"
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
      <div className="lg:pl-72">
        {/* Top bar for mobile */}
        <div className="lg:hidden flex items-center justify-between h-16 px-6 border-b bg-white/80 backdrop-blur-xl border-slate-200/50">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(true)}
            className="hover:bg-slate-100 rounded-full p-2"
          >
            <Menu className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg shadow-md">
              <Building2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              RentManager Pro
            </span>
          </div>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>

        {/* Page content */}
        <main className="p-8 min-h-screen">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
