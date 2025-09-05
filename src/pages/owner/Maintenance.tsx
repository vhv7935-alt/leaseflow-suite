import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Wrench, 
  AlertTriangle, 
  Clock, 
  CheckCircle,
  Plus,
  Search,
  Filter,
  Eye,
  Users,
  Calendar
} from "lucide-react";

const Maintenance = () => {
  const maintenanceRequests = [
    {
      id: 1,
      title: "Leaky faucet in kitchen",
      tenant: "John Smith",
      property: "123 Main Street, Apt 2B",
      category: "Plumbing",
      priority: "Medium",
      status: "In Progress",
      dateSubmitted: "2024-01-14",
      dateScheduled: "2024-01-16",
      assignedTo: "Mike's Plumbing",
      estimatedCost: 150,
      description: "Kitchen faucet has been dripping constantly, causing water waste and noise."
    },
    {
      id: 2,
      title: "Broken light fixture in living room",
      tenant: "Sarah Johnson",
      property: "456 Oak Avenue",
      category: "Electrical",
      priority: "High",
      status: "Pending",
      dateSubmitted: "2024-01-13",
      dateScheduled: null,
      assignedTo: null,
      estimatedCost: 200,
      description: "Main light fixture in living room stopped working suddenly."
    },
    {
      id: 3,
      title: "Cracked window in bedroom",
      tenant: "Mike Wilson",
      property: "789 Pine Street, Unit 5C",
      category: "General",
      priority: "Low",
      status: "Completed",
      dateSubmitted: "2024-01-12",
      dateScheduled: "2024-01-13",
      assignedTo: "City Glass Repair",
      estimatedCost: 250,
      description: "Small crack in bedroom window, needs replacement for security."
    },
    {
      id: 4,
      title: "HVAC system not heating properly",
      tenant: "Emily Davis",
      property: "321 Broadway, Loft 12",
      category: "HVAC",
      priority: "High",
      status: "Scheduled",
      dateSubmitted: "2024-01-15",
      dateScheduled: "2024-01-17",
      assignedTo: "Climate Control Pro",
      estimatedCost: 400,
      description: "Heating system not reaching set temperature, cold air coming out."
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-success text-white";
      case "In Progress": return "bg-warning text-white";
      case "Scheduled": return "bg-info text-white";
      case "Pending": return "bg-muted text-foreground";
      default: return "bg-muted";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-danger text-white";
      case "Medium": return "bg-warning text-white";
      case "Low": return "bg-success text-white";
      default: return "bg-muted";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed": return CheckCircle;
      case "In Progress": return Wrench;
      case "Scheduled": return Calendar;
      case "Pending": return Clock;
      default: return AlertTriangle;
    }
  };

  const stats = {
    total: maintenanceRequests.length,
    pending: maintenanceRequests.filter(r => r.status === "Pending").length,
    inProgress: maintenanceRequests.filter(r => r.status === "In Progress").length,
    completed: maintenanceRequests.filter(r => r.status === "Completed").length,
    totalCost: maintenanceRequests.reduce((sum, r) => sum + r.estimatedCost, 0)
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Maintenance</h1>
          <p className="text-muted-foreground">Manage property maintenance and repair requests</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Request
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
            <Wrench className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{stats.total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-muted-foreground">{stats.pending}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <Wrench className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{stats.inProgress}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{stats.completed}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Cost</CardTitle>
            <AlertTriangle className="h-4 w-4 text-info" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-info">${stats.totalCost}</div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search by request title, tenant, or property..." 
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Category
              </Button>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Status
              </Button>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Priority
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Maintenance Requests */}
      <div className="grid gap-6">
        {maintenanceRequests.map((request) => {
          const StatusIcon = getStatusIcon(request.status);
          return (
            <Card key={request.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-2 rounded-lg bg-muted">
                      <StatusIcon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold">{request.title}</h3>
                        <Badge className={`text-xs ${getStatusColor(request.status)}`}>
                          {request.status}
                        </Badge>
                        <Badge className={`text-xs ${getPriorityColor(request.priority)}`}>
                          {request.priority}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-muted-foreground mb-3">
                        <div>
                          <span className="font-medium">Tenant:</span> {request.tenant}
                        </div>
                        <div>
                          <span className="font-medium">Property:</span> {request.property}
                        </div>
                        <div>
                          <span className="font-medium">Category:</span> {request.category}
                        </div>
                        <div>
                          <span className="font-medium">Submitted:</span> {request.dateSubmitted}
                        </div>
                      </div>
                      
                      {request.assignedTo && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground mb-3">
                          <div>
                            <span className="font-medium">Assigned to:</span> {request.assignedTo}
                          </div>
                          {request.dateScheduled && (
                            <div>
                              <span className="font-medium">Scheduled:</span> {request.dateScheduled}
                            </div>
                          )}
                          <div>
                            <span className="font-medium">Est. Cost:</span> ${request.estimatedCost}
                          </div>
                        </div>
                      )}
                      
                      <p className="text-sm text-muted-foreground">{request.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 ml-4">
                    <Button size="sm" variant="outline" className="gap-2">
                      <Eye className="w-4 h-4" />
                      View
                    </Button>
                    {request.status === "Pending" && (
                      <Button size="sm" className="gap-2">
                        <Users className="w-4 h-4" />
                        Assign
                      </Button>
                    )}
                    {request.status === "In Progress" && (
                      <Button size="sm" variant="outline" className="gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Complete
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common maintenance management tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Plus className="w-6 h-6" />
              <span className="text-sm">New Request</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Users className="w-6 h-6" />
              <span className="text-sm">Assign Contractor</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Calendar className="w-6 h-6" />
              <span className="text-sm">Schedule Maintenance</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <CheckCircle className="w-6 h-6" />
              <span className="text-sm">Mark Complete</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Maintenance;