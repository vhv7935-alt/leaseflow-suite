import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Home, 
  DollarSign, 
  FileText, 
  Wrench, 
  Calendar, 
  Upload,
  Plus,
  Eye,
  Phone,
  Mail,
  AlertTriangle,
  Clock,
  CheckCircle
} from "lucide-react";

const TenantDashboard = () => {
  // Mock data - will be replaced with real data from backend
  const tenantInfo = {
    name: "John Smith",
    property: "123 Main Street, Apt 2B",
    monthlyRent: 1200,
    leaseStart: "2023-06-01",
    leaseEnd: "2024-05-31",
    owner: "Sarah Property Management"
  };

  const rentStatus = {
    currentMonth: "January 2024",
    amountPaid: 1200,
    amountDue: 0,
    nextDue: "2024-02-01",
    paymentHistory: [
      { month: "December 2023", amount: 1200, status: "paid", date: "2023-12-01" },
      { month: "November 2023", amount: 1200, status: "paid", date: "2023-11-01" },
      { month: "October 2023", amount: 1200, status: "paid", date: "2023-10-01" },
    ]
  };

  const maintenanceRequests = [
    { id: 1, issue: "Leaky faucet in kitchen", category: "Plumbing", status: "In Progress", date: "2024-01-14", priority: "Medium" },
    { id: 2, issue: "Thermostat not working", category: "HVAC", status: "Pending", date: "2024-01-10", priority: "High" },
    { id: 3, issue: "Light bulb replacement", category: "Electrical", status: "Completed", date: "2024-01-05", priority: "Low" },
  ];

  const documents = [
    { name: "Lease Agreement", type: "PDF", size: "2.4 MB", date: "2023-06-01" },
    { name: "Rent Receipt - Jan 2024", type: "PDF", size: "156 KB", date: "2024-01-01" },
    { name: "Move-in Checklist", type: "PDF", size: "890 KB", date: "2023-06-01" },
  ];

  const leaseInfo = {
    status: "Active",
    daysUntilExpiry: 120,
    autoRenewal: false,
    renewalOption: true,
    lastRenewalDate: null,
    earlyTerminationAllowed: false
  };

  const leaseDocuments = [
    { name: "Current Lease Agreement", type: "PDF", size: "2.4 MB", date: "2023-06-01", status: "Active" },
    { name: "Lease Amendment #1", type: "PDF", size: "890 KB", date: "2023-08-15", status: "Active" },
    { name: "Renewal Notice Template", type: "PDF", size: "456 KB", date: "2023-06-01", status: "Template" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid": return "bg-success text-white";
      case "Completed": return "bg-success text-white";
      case "In Progress": return "bg-warning text-white";
      case "Pending": return "bg-info text-white";
      case "overdue": return "bg-danger text-white";
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

  const rentProgress = ((rentStatus.amountPaid / tenantInfo.monthlyRent) * 100);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {tenantInfo.name}!</h1>
          <p className="text-muted-foreground">{tenantInfo.property}</p>
        </div>
        <Button className="gap-2" variant="outline">
          <Phone className="w-4 h-4" />
          Contact Owner
        </Button>
      </div>

      {/* Current Rent Status */}
      <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary-glow/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-primary" />
            Current Rent Status - {rentStatus.currentMonth}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">
                ${rentStatus.amountPaid}
              </div>
              <p className="text-sm text-muted-foreground">Amount Paid</p>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold mb-2 ${rentStatus.amountDue > 0 ? 'text-danger' : 'text-success'}`}>
                ${rentStatus.amountDue}
              </div>
              <p className="text-sm text-muted-foreground">Amount Due</p>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-primary mb-2">
                {rentStatus.nextDue}
              </div>
              <p className="text-sm text-muted-foreground">Next Payment Due</p>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex justify-between text-sm mb-2">
              <span>Payment Progress</span>
              <span>{rentProgress}%</span>
            </div>
            <Progress value={rentProgress} className="h-3" />
          </div>
          {rentStatus.amountDue === 0 && (
            <div className="mt-4 p-3 bg-success/10 border border-success/20 rounded-lg text-center">
              <p className="text-success font-medium">✓ You're all caught up! Next payment due {rentStatus.nextDue}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Payment History */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>Your recent rent payments</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Eye className="w-4 h-4" />
              View All
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {rentStatus.paymentHistory.map((payment, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">{payment.month}</span>
                    <Badge className={`text-xs ${getStatusColor(payment.status)}`}>
                      {payment.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Paid on: {payment.date}</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg">${payment.amount}</div>
                  <Button variant="ghost" size="sm" className="text-xs">
                    <FileText className="w-3 h-3 mr-1" />
                    Receipt
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Maintenance Requests */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>My Maintenance Requests</CardTitle>
              <CardDescription>Track your submitted requests</CardDescription>
            </div>
            <Button size="sm" className="gap-2">
              <Plus className="w-4 h-4" />
              New Request
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {maintenanceRequests.map((request) => (
              <div key={request.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">{request.issue}</span>
                    <Badge className={`text-xs ${getPriorityColor(request.priority)}`}>
                      {request.priority}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge className={`text-xs ${getStatusColor(request.status)}`}>
                      {request.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{request.category}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Submitted: {request.date}</p>
                </div>
                <Button size="sm" variant="outline">
                  View Details
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Lease Management */}
      <Card className="border-info/20 bg-gradient-to-r from-info/5 to-info/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-info" />
            Lease Management
          </CardTitle>
          <CardDescription>Your current lease agreement status and options</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className={`text-2xl font-bold mb-2 ${leaseInfo.status === 'Active' ? 'text-success' : 'text-warning'}`}>
                {leaseInfo.status}
              </div>
              <p className="text-sm text-muted-foreground">Current Status</p>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold mb-2 ${leaseInfo.daysUntilExpiry <= 30 ? 'text-warning' : 'text-primary'}`}>
                {leaseInfo.daysUntilExpiry}
              </div>
              <p className="text-sm text-muted-foreground">Days Until Expiry</p>
            </div>
            <div className="text-center">
              <div className={`text-lg font-semibold mb-2 ${leaseInfo.renewalOption ? 'text-success' : 'text-muted-foreground'}`}>
                {leaseInfo.renewalOption ? 'Available' : 'Not Available'}
              </div>
              <p className="text-sm text-muted-foreground">Renewal Option</p>
            </div>
          </div>
          
          {leaseInfo.daysUntilExpiry <= 60 && (
            <div className="mt-6 p-4 bg-warning/10 border border-warning/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-warning" />
                <span className="font-medium text-warning">Lease Expiring Soon</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Your lease expires on {tenantInfo.leaseEnd}. Consider renewing to avoid any disruption.
              </p>
              <div className="flex gap-2">
                <Button size="sm" className="gap-2">
                  <FileText className="w-4 h-4" />
                  Request Renewal
                </Button>
                <Button size="sm" variant="outline">
                  View Options
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Property Info & Documents */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Property Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Property Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium">Property Address</p>
                <p className="text-muted-foreground">{tenantInfo.property}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Monthly Rent</p>
                <p className="text-muted-foreground">${tenantInfo.monthlyRent}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Lease Start</p>
                <p className="text-muted-foreground">{tenantInfo.leaseStart}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Lease End</p>
                <p className="text-muted-foreground">{tenantInfo.leaseEnd}</p>
              </div>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm font-medium mb-2">Property Owner</p>
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">{tenantInfo.owner}</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lease Documents */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Lease Documents
              </CardTitle>
              <CardDescription>Lease agreements and related documents</CardDescription>
            </div>
            <Button size="sm" variant="outline" className="gap-2">
              <Upload className="w-4 h-4" />
              Upload
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {leaseDocuments.map((doc, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <FileText className="w-8 h-8 text-primary" />
                    {doc.status === "Active" && (
                      <CheckCircle className="w-3 h-3 text-success absolute -top-1 -right-1" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{doc.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {doc.type} • {doc.size} • {doc.date}
                    </p>
                    <Badge className={`text-xs mt-1 ${doc.status === 'Active' ? 'bg-success text-white' : 'bg-muted'}`}>
                      {doc.status}
                    </Badge>
                  </div>
                </div>
                <Button size="sm" variant="ghost">
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Regular Documents */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Other Documents
            </CardTitle>
            <CardDescription>Receipts and other property documents</CardDescription>
          </div>
          <Button size="sm" variant="outline" className="gap-2">
            <Upload className="w-4 h-4" />
            Upload
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {documents.map((doc, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-primary" />
                <div>
                  <p className="font-medium">{doc.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {doc.type} • {doc.size} • {doc.date}
                  </p>
                </div>
              </div>
              <Button size="sm" variant="ghost">
                <Eye className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2">
              <DollarSign className="w-6 h-6" />
              <span className="text-sm">Pay Rent</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Wrench className="w-6 h-6" />
              <span className="text-sm">Report Issue</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Calendar className="w-6 h-6" />
              <span className="text-sm">Schedule Inspection</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <FileText className="w-6 h-6" />
              <span className="text-sm">Lease Renewal</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TenantDashboard;