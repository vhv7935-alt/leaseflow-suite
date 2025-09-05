import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  AlertTriangle
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
      avatar: "/placeholder.svg"
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
      avatar: "/placeholder.svg"
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
      avatar: "/placeholder.svg"
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
      avatar: "/placeholder.svg"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-success text-white";
      case "Expiring Soon": return "bg-warning text-white";
      case "Inactive": return "bg-muted";
      default: return "bg-muted";
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case "Current": return "bg-success text-white";
      case "Overdue": return "bg-danger text-white";
      case "Pending": return "bg-warning text-white";
      default: return "bg-muted";
    }
  };

  const stats = {
    total: tenants.length,
    active: tenants.filter(t => t.status === "Active").length,
    expiring: tenants.filter(t => t.status === "Expiring Soon").length,
    overdue: tenants.filter(t => t.paymentStatus === "Overdue").length
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Tenants</h1>
          <p className="text-muted-foreground">Manage your tenants and their information</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Tenant
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tenants</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{stats.total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Leases</CardTitle>
            <Users className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{stats.active}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expiring Soon</CardTitle>
            <AlertTriangle className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{stats.expiring}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overdue Payments</CardTitle>
            <DollarSign className="h-4 w-4 text-danger" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-danger">{stats.overdue}</div>
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
                placeholder="Search tenants by name, email, or property..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tenants List */}
      <div className="grid gap-6">
        {tenants.map((tenant) => (
          <Card key={tenant.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={tenant.avatar} alt={tenant.name} />
                  <AvatarFallback>{tenant.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold">{tenant.name}</h3>
                        <Badge className={`text-xs ${getStatusColor(tenant.status)}`}>
                          {tenant.status}
                        </Badge>
                        <Badge className={`text-xs ${getPaymentStatusColor(tenant.paymentStatus)}`}>
                          {tenant.paymentStatus}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-muted-foreground" />
                          <span className="truncate">{tenant.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-muted-foreground" />
                          <span>{tenant.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span className="truncate">{tenant.property}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-muted-foreground" />
                          <span>${tenant.rent}/month</span>
                        </div>
                      </div>
                      
                      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                        <div>
                          <span className="font-medium">Lease:</span> {tenant.leaseStart} - {tenant.leaseEnd}
                        </div>
                        <div>
                          <span className="font-medium">Last Payment:</span> {tenant.lastPayment}
                        </div>
                        <div>
                          <span className="font-medium">Status:</span> {tenant.paymentStatus}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 ml-4">
                      <Button size="sm" variant="outline" className="gap-2">
                        <Eye className="w-4 h-4" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="gap-2">
                        <Edit className="w-4 h-4" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" className="gap-2">
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