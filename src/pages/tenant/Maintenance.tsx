import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Wrench, 
  AlertTriangle, 
  Clock, 
  CheckCircle,
  Plus,
  Search,
  Filter,
  Eye,
  Calendar,
  Camera,
  Send
} from "lucide-react";

const Maintenance = () => {
  const maintenanceRequests = [
    {
      id: 1,
      title: "Leaky faucet in kitchen",
      description: "Kitchen faucet has been dripping constantly, causing water waste and noise.",
      category: "Plumbing",
      priority: "Medium",
      status: "In Progress",
      dateSubmitted: "2024-01-14",
      dateScheduled: "2024-01-16",
      assignedTo: "Mike's Plumbing",
      estimatedCompletion: "2024-01-17",
      updates: [
        { date: "2024-01-15", message: "Maintenance request reviewed and approved", type: "status" },
        { date: "2024-01-16", message: "Plumber scheduled for tomorrow", type: "info" }
      ]
    },
    {
      id: 2,
      title: "Thermostat not working properly",
      description: "Heating system not reaching set temperature, cold air coming out instead of warm.",
      category: "HVAC",
      priority: "High",
      status: "Scheduled",
      dateSubmitted: "2024-01-10",
      dateScheduled: "2024-01-18",
      assignedTo: "Climate Control Pro",
      estimatedCompletion: "2024-01-18",
      updates: [
        { date: "2024-01-11", message: "Emergency HVAC service scheduled", type: "status" },
        { date: "2024-01-15", message: "Technician will arrive between 9-11 AM", type: "info" }
      ]
    },
    {
      id: 3,
      title: "Light bulb replacement in bathroom",
      description: "Main ceiling light in bathroom has burned out and needs replacement.",
      category: "Electrical",
      priority: "Low",
      status: "Completed",
      dateSubmitted: "2024-01-05",
      dateScheduled: "2024-01-06",
      assignedTo: "Property Maintenance Team",
      estimatedCompletion: "2024-01-06",
      completedDate: "2024-01-06",
      updates: [
        { date: "2024-01-06", message: "Light bulb replaced successfully", type: "completion" },
        { date: "2024-01-06", message: "Request marked as completed", type: "status" }
      ]
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
    inProgress: maintenanceRequests.filter(r => r.status === "In Progress" || r.status === "Scheduled").length,
    completed: maintenanceRequests.filter(r => r.status === "Completed").length
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Maintenance Requests</h1>
          <p className="text-muted-foreground">Submit and track your maintenance requests</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          New Request
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>

      {/* New Request Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Submit New Request
          </CardTitle>
          <CardDescription>Report an issue or request maintenance for your property</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Issue Title</label>
                <Input placeholder="Brief description of the issue" />
              </div>
              <div>
                <label className="text-sm font-medium">Category</label>
                <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                  <option>Select category</option>
                  <option>Plumbing</option>
                  <option>Electrical</option>
                  <option>HVAC</option>
                  <option>Appliances</option>
                  <option>General Maintenance</option>
                  <option>Emergency</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Description</label>
              <Textarea 
                placeholder="Provide detailed description of the issue, including when it started and any relevant details..."
                rows={3}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Priority</label>
                <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                  <option>Select priority</option>
                  <option>Low - Can wait</option>
                  <option>Medium - Within a week</option>
                  <option>High - ASAP</option>
                  <option>Emergency - Immediate attention</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Preferred Time</label>
                <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                  <option>Select preferred time</option>
                  <option>Morning (8AM - 12PM)</option>
                  <option>Afternoon (12PM - 5PM)</option>
                  <option>Evening (5PM - 8PM)</option>
                  <option>Anytime</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Camera className="w-4 h-4" />
                Attach Photos
              </Button>
              <Button className="gap-2 ml-auto">
                <Send className="w-4 h-4" />
                Submit Request
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Search and Filter */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search your requests..." 
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
            </div>
          </div>
        </CardContent>
      </Card>

      {/* My Requests */}
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
                      
                      <p className="text-sm text-muted-foreground mb-3">{request.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-muted-foreground mb-3">
                        <div>
                          <span className="font-medium">Category:</span> {request.category}
                        </div>
                        <div>
                          <span className="font-medium">Submitted:</span> {request.dateSubmitted}
                        </div>
                        {request.dateScheduled && (
                          <div>
                            <span className="font-medium">Scheduled:</span> {request.dateScheduled}
                          </div>
                        )}
                        {request.assignedTo && (
                          <div>
                            <span className="font-medium">Assigned to:</span> {request.assignedTo}
                          </div>
                        )}
                      </div>
                      
                      {request.updates && request.updates.length > 0 && (
                        <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                          <div className="text-sm font-medium mb-2">Latest Updates:</div>
                          <div className="space-y-1">
                            {request.updates.slice(-2).map((update, index) => (
                              <div key={index} className="text-sm text-muted-foreground">
                                <span className="font-medium">{update.date}:</span> {update.message}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 ml-4">
                    <Button size="sm" variant="outline" className="gap-2">
                      <Eye className="w-4 h-4" />
                      View Details
                    </Button>
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
          <CardDescription>Common maintenance tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2">
              <AlertTriangle className="w-6 h-6" />
              <span className="text-sm">Emergency Request</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Wrench className="w-6 h-6" />
              <span className="text-sm">General Maintenance</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Calendar className="w-6 h-6" />
              <span className="text-sm">Schedule Inspection</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Camera className="w-6 h-6" />
              <span className="text-sm">Report with Photo</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Maintenance;