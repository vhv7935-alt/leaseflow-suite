import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Users,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  AlertTriangle,
} from "lucide-react";

const Tenants = () => {
  const tenants = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      phone: "(555) 123-4567",
      property: "123 Main Street, Apt 2B",
      rent: 1200,
      leaseStart: "2023-06-01",
      leaseEnd: "2024-05-31",
      status: "Active",
      paymentStatus: "Current",
      lastPayment: "2024-01-01",
      avatar: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      phone: "(555) 234-5678",
      property: "456 Oak Avenue",
      rent: 1500,
      leaseStart: "2023-09-01",
      leaseEnd: "2024-08-31",
      status: "Active",
      paymentStatus: "Current",
      lastPayment: "2024-01-01",
      avatar: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Mike Wilson",
      email: "mike.wilson@email.com",
      phone: "(555) 345-6789",
      property: "789 Pine Street, Unit 5C",
      rent: 1100,
      leaseStart: "2022-12-01",
      leaseEnd: "2024-02-15",
      status: "Expiring Soon",
      paymentStatus: "Overdue",
      lastPayment: "2023-12-01",
      avatar: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@email.com",
      phone: "(555) 456-7890",
      property: "321 Broadway, Loft 12",
      rent: 1800,
      leaseStart: "2023-10-01",
      leaseEnd: "2024-09-30",
      status: "Active",
      paymentStatus: "Current",
      lastPayment: "2024-01-01",
      avatar: "/placeholder.svg",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-success text-white";
      case "Expiring Soon":
        return "bg-warning text-white";
      case "Inactive":
        return "bg-muted";
      default:
        return "bg-muted";
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case "Current":
        return "bg-success text-white";
      case "Overdue":
        return "bg-danger text-white";
      case "Pending":
        return "bg-warning text-white";
      default:
        return "bg-muted";
    }
  };

  const stats = {
    total: tenants.length,
    active: tenants.filter((t) => t.status === "Active").length,
    expiring: tenants.filter((t) => t.status === "Expiring Soon").length,
    overdue: tenants.filter((t) => t.paymentStatus === "Overdue").length,
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
            Tenants
          </h1>
          <p className="text-slate-600 text-lg">
            Manage your tenants and their information
          </p>
        </div>
        <Button className="gap-2 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-xl transition-all duration-200">
          <Plus className="w-4 h-4" />
          Add Tenant
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-100 hover:from-blue-100 hover:to-indigo-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-slate-700">
              Total Tenants
            </CardTitle>
            <div className="p-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-200">
              <Users className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              {stats.total}
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-emerald-50 to-green-100 hover:from-emerald-100 hover:to-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-slate-700">
              Active Leases
            </CardTitle>
            <div className="p-2 bg-gradient-to-br from-emerald-600 to-green-700 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-200">
              <Users className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
              {stats.active}
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-amber-50 to-orange-100 hover:from-amber-100 hover:to-orange-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-slate-700">
              Expiring Soon
            </CardTitle>
            <div className="p-2 bg-gradient-to-br from-amber-600 to-orange-700 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-200">
              <AlertTriangle className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
              {stats.expiring}
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-red-50 to-rose-100 hover:from-red-100 hover:to-rose-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-slate-700">
              Overdue Payments
            </CardTitle>
            <div className="p-2 bg-gradient-to-br from-red-600 to-rose-700 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-200">
              <DollarSign className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-rose-700 bg-clip-text text-transparent">
              {stats.overdue}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                placeholder="Search tenants by name, email, or property..."
                className="pl-12 h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl text-slate-600"
              />
            </div>
            <Button
              variant="outline"
              className="gap-2 h-12 px-6 border-slate-200 hover:bg-slate-100 rounded-xl"
            >
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tenants List */}
      <div className="grid gap-6">
        {tenants.map((tenant) => (
          <Card
            key={tenant.id}
            className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
          >
            <CardContent className="pt-6">
              <div className="flex items-start space-x-6">
                <Avatar className="w-16 h-16 ring-4 ring-slate-100 group-hover:ring-blue-100 transition-all duration-200">
                  <AvatarImage src={tenant.avatar} alt={tenant.name} />
                  <AvatarFallback className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-semibold text-lg">
                    {tenant.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-200">
                          {tenant.name}
                        </h3>
                        <Badge
                          className={`text-xs font-semibold px-3 py-1 ${getStatusColor(
                            tenant.status
                          )}`}
                        >
                          {tenant.status}
                        </Badge>
                        <Badge
                          className={`text-xs font-semibold px-3 py-1 ${getPaymentStatusColor(
                            tenant.paymentStatus
                          )}`}
                        >
                          {tenant.paymentStatus}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-slate-100 rounded-lg">
                            <Mail className="w-4 h-4 text-slate-600" />
                          </div>
                          <span className="truncate text-slate-600 font-medium">
                            {tenant.email}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-slate-100 rounded-lg">
                            <Phone className="w-4 h-4 text-slate-600" />
                          </div>
                          <span className="text-slate-600 font-medium">
                            {tenant.phone}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-slate-100 rounded-lg">
                            <MapPin className="w-4 h-4 text-slate-600" />
                          </div>
                          <span className="truncate text-slate-600 font-medium">
                            {tenant.property}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-slate-100 rounded-lg">
                            <DollarSign className="w-4 h-4 text-slate-600" />
                          </div>
                          <span className="text-slate-600 font-medium">
                            ${tenant.rent}/month
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-700">
                            Lease:
                          </span>
                          <span className="text-slate-600">
                            {tenant.leaseStart} - {tenant.leaseEnd}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-700">
                            Last Payment:
                          </span>
                          <span className="text-slate-600">
                            {tenant.lastPayment}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-700">
                            Status:
                          </span>
                          <span className="text-slate-600">
                            {tenant.paymentStatus}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 ml-4">
                      <Button
                        size="sm"
                        variant="outline"
                        className="gap-2 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-200"
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="gap-2 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700 transition-all duration-200"
                      >
                        <Edit className="w-4 h-4" />
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="gap-2 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700 transition-all duration-200"
                      >
                        <Mail className="w-4 h-4" />
                        Contact
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tenants;
