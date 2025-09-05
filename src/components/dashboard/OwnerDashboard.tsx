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
import AddPropertyDialog from "@/components/AddPropertyDialog";
import {
  Building2,
  Users,
  DollarSign,
  Wrench,
  TrendingUp,
  AlertCircle,
  Plus,
  Eye,
  FileText,
  Calendar,
  AlertTriangle,
} from "lucide-react";

const OwnerDashboard = () => {
  // State for properties count
  const [propertiesCount, setPropertiesCount] = useState(12);

  // Mock data - will be replaced with real data from backend
  const stats = {
    totalProperties: propertiesCount,
    totalTenants: 18,
    monthlyIncome: 25600,
    pendingMaintenance: 3,
    occupancyRate: 85,
  };

  // Handle property addition
  const handlePropertyAdded = (newProperty: any) => {
    setPropertiesCount((prev) => prev + 1);
    // In a real app, you would update the properties list here
    console.log("New property added:", newProperty);
  };

  const recentPayments = [
    {
      tenant: "John Smith",
      property: "123 Main St",
      amount: 1200,
      status: "paid",
      date: "2024-01-15",
    },
    {
      tenant: "Sarah Johnson",
      property: "456 Oak Ave",
      amount: 1500,
      status: "pending",
      date: "2024-01-10",
    },
    {
      tenant: "Mike Wilson",
      property: "789 Pine St",
      amount: 1100,
      status: "overdue",
      date: "2024-01-01",
    },
  ];

  const maintenanceRequests = [
    {
      id: 1,
      tenant: "John Smith",
      property: "123 Main St",
      issue: "Leaky faucet",
      category: "Plumbing",
      priority: "Medium",
      date: "2024-01-14",
    },
    {
      id: 2,
      tenant: "Sarah Johnson",
      property: "456 Oak Ave",
      issue: "Broken light fixture",
      category: "Electrical",
      priority: "High",
      date: "2024-01-13",
    },
    {
      id: 3,
      tenant: "Mike Wilson",
      property: "789 Pine St",
      issue: "Cracked window",
      category: "General",
      priority: "Low",
      date: "2024-01-12",
    },
  ];

  const leaseStatus = [
    {
      tenant: "John Smith",
      property: "123 Main St",
      startDate: "2023-06-01",
      endDate: "2024-05-31",
      status: "Active",
      daysLeft: 120,
    },
    {
      tenant: "Sarah Johnson",
      property: "456 Oak Ave",
      startDate: "2023-09-01",
      endDate: "2024-08-31",
      status: "Active",
      daysLeft: 213,
    },
    {
      tenant: "Mike Wilson",
      property: "789 Pine St",
      startDate: "2022-12-01",
      endDate: "2024-02-15",
      status: "Expiring Soon",
      daysLeft: 15,
    },
  ];

  const getLeaseStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-success text-white";
      case "Expiring Soon":
        return "bg-warning text-white";
      case "Expired":
        return "bg-danger text-white";
      case "Renewed":
        return "bg-info text-white";
      default:
        return "bg-muted";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-success text-white";
      case "pending":
        return "bg-warning text-white";
      case "overdue":
        return "bg-danger text-white";
      default:
        return "bg-muted";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-danger text-white";
      case "Medium":
        return "bg-warning text-white";
      case "Low":
        return "bg-success text-white";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
            Property Owner Dashboard
          </h1>
          <p className="text-slate-600 text-lg">
            Welcome back! Here's your comprehensive property overview.
          </p>
        </div>
        <AddPropertyDialog onPropertyAdded={handlePropertyAdded} />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-100 hover:from-blue-100 hover:to-indigo-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-slate-700">
              Total Properties
            </CardTitle>
            <div className="p-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-200">
              <Building2 className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              {stats.totalProperties}
            </div>
            <p className="text-sm text-slate-600 font-medium">
              Across all locations
            </p>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-emerald-50 to-green-100 hover:from-emerald-100 hover:to-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-slate-700">
              Active Tenants
            </CardTitle>
            <div className="p-2 bg-gradient-to-br from-emerald-600 to-green-700 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-200">
              <Users className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
              {stats.totalTenants}
            </div>
            <p className="text-sm text-slate-600 font-medium">
              Currently renting
            </p>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-amber-50 to-orange-100 hover:from-amber-100 hover:to-orange-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-slate-700">
              Monthly Income
            </CardTitle>
            <div className="p-2 bg-gradient-to-br from-amber-600 to-orange-700 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-200">
              <DollarSign className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
              ${stats.monthlyIncome.toLocaleString()}
            </div>
            <p className="text-sm text-emerald-600 font-semibold">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-red-50 to-rose-100 hover:from-red-100 hover:to-rose-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-slate-700">
              Pending Issues
            </CardTitle>
            <div className="p-2 bg-gradient-to-br from-red-600 to-rose-700 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-200">
              <Wrench className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-rose-700 bg-clip-text text-transparent">
              {stats.pendingMaintenance}
            </div>
            <p className="text-sm text-slate-600 font-medium">
              Maintenance requests
            </p>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-violet-100 hover:from-purple-100 hover:to-violet-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-slate-700">
              Occupancy Rate
            </CardTitle>
            <div className="p-2 bg-gradient-to-br from-purple-600 to-violet-700 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-200">
              <TrendingUp className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-violet-700 bg-clip-text text-transparent">
              {stats.occupancyRate}%
            </div>
            <p className="text-sm text-emerald-600 font-semibold">
              Above average
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Payments */}
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <div>
              <CardTitle className="text-xl font-bold text-slate-800">
                Recent Payments
              </CardTitle>
              <CardDescription className="text-slate-600">
                Latest rent payment activities
              </CardDescription>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 hover:bg-slate-100 border-slate-200"
            >
              <Eye className="w-4 h-4" />
              View All
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentPayments.map((payment, index) => (
              <div
                key={index}
                className="group flex items-center justify-between p-4 border border-slate-200/50 rounded-xl hover:shadow-md hover:border-slate-300/50 transition-all duration-200 bg-gradient-to-r from-slate-50/50 to-white"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-semibold text-slate-800">
                      {payment.tenant}
                    </span>
                    <Badge
                      className={`text-xs font-medium px-2 py-1 ${getStatusColor(
                        payment.status
                      )}`}
                    >
                      {payment.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-600 font-medium">
                    {payment.property}
                  </p>
                  <p className="text-xs text-slate-500">Due: {payment.date}</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-xl text-slate-800">
                    ${payment.amount}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Maintenance Requests */}
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <div>
              <CardTitle className="text-xl font-bold text-slate-800">
                Maintenance Requests
              </CardTitle>
              <CardDescription className="text-slate-600">
                Recent maintenance and repair requests
              </CardDescription>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 hover:bg-slate-100 border-slate-200"
            >
              <Eye className="w-4 h-4" />
              View All
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {maintenanceRequests.map((request) => (
              <div
                key={request.id}
                className="group flex items-center justify-between p-4 border border-slate-200/50 rounded-xl hover:shadow-md hover:border-slate-300/50 transition-all duration-200 bg-gradient-to-r from-slate-50/50 to-white"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-semibold text-slate-800">
                      {request.issue}
                    </span>
                    <Badge
                      className={`text-xs font-medium px-2 py-1 ${getPriorityColor(
                        request.priority
                      )}`}
                    >
                      {request.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-600 font-medium">
                    {request.property}
                  </p>
                  <p className="text-xs text-slate-500">
                    {request.tenant} • {request.category} • {request.date}
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="hover:bg-slate-100 border-slate-200"
                >
                  Assign
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Lease Management */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Lease Status Overview */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Lease Management
              </CardTitle>
              <CardDescription>
                Current lease agreements and renewals
              </CardDescription>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Eye className="w-4 h-4" />
              View All
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {leaseStatus.map((lease, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">{lease.tenant}</span>
                    <Badge
                      className={`text-xs ${getLeaseStatusColor(lease.status)}`}
                    >
                      {lease.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {lease.property}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {lease.startDate} - {lease.endDate} • {lease.daysLeft} days
                    left
                  </p>
                </div>
                <div className="text-right">
                  {lease.status === "Expiring Soon" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-warning border-warning"
                    >
                      <AlertTriangle className="w-4 h-4 mr-1" />
                      Renew
                    </Button>
                  )}
                  {lease.status === "Active" && (
                    <Button size="sm" variant="ghost">
                      View Details
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Lease Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Lease Actions
            </CardTitle>
            <CardDescription>
              Manage lease agreements and renewals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg bg-warning/5 border-warning/20">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-warning" />
                  <span className="font-medium text-warning">
                    1 Lease Expiring Soon
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Mike Wilson's lease at 789 Pine St expires in 15 days
                </p>
                <Button size="sm" className="gap-2">
                  <FileText className="w-4 h-4" />
                  Send Renewal Notice
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-16 flex-col gap-1">
                  <Plus className="w-5 h-5" />
                  <span className="text-sm">New Lease</span>
                </Button>
                <Button variant="outline" className="h-16 flex-col gap-1">
                  <FileText className="w-5 h-5" />
                  <span className="text-sm">Templates</span>
                </Button>
                <Button variant="outline" className="h-16 flex-col gap-1">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm">Renewals</span>
                </Button>
                <Button variant="outline" className="h-16 flex-col gap-1">
                  <Eye className="w-5 h-5" />
                  <span className="text-sm">All Leases</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Plus className="w-6 h-6" />
              <span className="text-sm">Add Tenant</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <DollarSign className="w-6 h-6" />
              <span className="text-sm">Record Payment</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Wrench className="w-6 h-6" />
              <span className="text-sm">Schedule Maintenance</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <FileText className="w-6 h-6" />
              <span className="text-sm">Manage Leases</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OwnerDashboard;
