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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Property Owner Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's your property overview.
          </p>
        </div>
        <AddPropertyDialog onPropertyAdded={handlePropertyAdded} />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Properties
            </CardTitle>
            <Building2 className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {stats.totalProperties}
            </div>
            <p className="text-xs text-muted-foreground">
              Across all locations
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Tenants
            </CardTitle>
            <Users className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">
              {stats.totalTenants}
            </div>
            <p className="text-xs text-muted-foreground">Currently renting</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Monthly Income
            </CardTitle>
            <DollarSign className="h-4 w-4 text-info" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-info">
              ${stats.monthlyIncome.toLocaleString()}
            </div>
            <p className="text-xs text-success">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Issues
            </CardTitle>
            <Wrench className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">
              {stats.pendingMaintenance}
            </div>
            <p className="text-xs text-muted-foreground">
              Maintenance requests
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Occupancy Rate
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {stats.occupancyRate}%
            </div>
            <p className="text-xs text-success">Above average</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Payments */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Payments</CardTitle>
              <CardDescription>Latest rent payment activities</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Eye className="w-4 h-4" />
              View All
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentPayments.map((payment, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">{payment.tenant}</span>
                    <Badge
                      className={`text-xs ${getStatusColor(payment.status)}`}
                    >
                      {payment.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {payment.property}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Due: {payment.date}
                  </p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg">${payment.amount}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Maintenance Requests */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Maintenance Requests</CardTitle>
              <CardDescription>
                Recent maintenance and repair requests
              </CardDescription>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Eye className="w-4 h-4" />
              View All
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {maintenanceRequests.map((request) => (
              <div
                key={request.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">{request.issue}</span>
                    <Badge
                      className={`text-xs ${getPriorityColor(
                        request.priority
                      )}`}
                    >
                      {request.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {request.property}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {request.tenant} • {request.category} • {request.date}
                  </p>
                </div>
                <Button size="sm" variant="outline">
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
