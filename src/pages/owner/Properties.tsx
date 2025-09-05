import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Building2, 
  MapPin, 
  Users, 
  DollarSign, 
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  Settings
} from "lucide-react";

const Properties = () => {
  const properties = [
    {
      id: 1,
      name: "Sunset Apartments A-1",
      address: "123 Main Street, Apt 2B",
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 1,
      rent: 1200,
      tenant: "John Smith",
      status: "Occupied",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Oak Avenue House",
      address: "456 Oak Avenue",
      type: "House",
      bedrooms: 3,
      bathrooms: 2,
      rent: 1500,
      tenant: "Sarah Johnson",
      status: "Occupied",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Pine Street Condo",
      address: "789 Pine Street, Unit 5C",
      type: "Condo",
      bedrooms: 1,
      bathrooms: 1,
      rent: 1100,
      tenant: null,
      status: "Vacant",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      name: "Downtown Loft",
      address: "321 Broadway, Loft 12",
      type: "Loft",
      bedrooms: 2,
      bathrooms: 2,
      rent: 1800,
      tenant: null,
      status: "Available",
      image: "/placeholder.svg"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Occupied": return "bg-success text-white";
      case "Vacant": return "bg-warning text-white";
      case "Available": return "bg-info text-white";
      case "Maintenance": return "bg-danger text-white";
      default: return "bg-muted";
    }
  };

  const stats = {
    total: properties.length,
    occupied: properties.filter(p => p.status === "Occupied").length,
    vacant: properties.filter(p => p.status === "Vacant").length,
    totalIncome: properties.filter(p => p.status === "Occupied").reduce((sum, p) => sum + p.rent, 0)
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Properties</h1>
          <p className="text-muted-foreground">Manage your rental properties</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Property
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
            <Building2 className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{stats.total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Occupied</CardTitle>
            <Users className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{stats.occupied}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vacant</CardTitle>
            <Building2 className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{stats.vacant}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Income</CardTitle>
            <DollarSign className="h-4 w-4 text-info" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-info">${stats.totalIncome.toLocaleString()}</div>
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
                placeholder="Search properties by name, address, or tenant..." 
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

      {/* Properties Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {properties.map((property) => (
          <Card key={property.id} className="hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-muted rounded-t-lg relative overflow-hidden">
              <img 
                src={property.image} 
                alt={property.name}
                className="w-full h-full object-cover"
              />
              <Badge className={`absolute top-3 right-3 ${getStatusColor(property.status)}`}>
                {property.status}
              </Badge>
            </div>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg">{property.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" />
                    {property.address}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                  <span>{property.bedrooms} bed</span>
                  <span>{property.bathrooms} bath</span>
                  <span className="capitalize">{property.type}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-primary">${property.rent}</div>
                  <div className="text-sm text-muted-foreground">per month</div>
                </div>
                <div className="text-right">
                  {property.tenant ? (
                    <div>
                      <div className="font-medium">{property.tenant}</div>
                      <div className="text-sm text-muted-foreground">Current Tenant</div>
                    </div>
                  ) : (
                    <div className="text-muted-foreground">No Tenant</div>
                  )}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" className="flex-1 gap-2">
                  <Eye className="w-4 h-4" />
                  View
                </Button>
                <Button size="sm" variant="outline" className="flex-1 gap-2">
                  <Edit className="w-4 h-4" />
                  Edit
                </Button>
                <Button size="sm" variant="outline" className="gap-2">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Properties;