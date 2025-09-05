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
import AddPropertyDialog from "@/components/AddPropertyDialog";
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
  Settings,
} from "lucide-react";

const Properties = () => {
  const [properties, setProperties] = useState([
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
      image: "/placeholder.svg",
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
      image: "/placeholder.svg",
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
      image: "/placeholder.svg",
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
      image: "/placeholder.svg",
    },
  ]);

  // Handle property addition
  const handlePropertyAdded = (newProperty: any) => {
    setProperties((prev) => [...prev, newProperty]);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Occupied":
        return "bg-success text-white";
      case "Vacant":
        return "bg-warning text-white";
      case "Available":
        return "bg-info text-white";
      case "Maintenance":
        return "bg-danger text-white";
      default:
        return "bg-muted";
    }
  };

  const stats = {
    total: properties.length,
    occupied: properties.filter((p) => p.status === "Occupied").length,
    vacant: properties.filter((p) => p.status === "Vacant").length,
    totalIncome: properties
      .filter((p) => p.status === "Occupied")
      .reduce((sum, p) => sum + p.rent, 0),
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
            Properties
          </h1>
          <p className="text-slate-600 text-lg">
            Manage your rental properties portfolio
          </p>
        </div>
        <AddPropertyDialog onPropertyAdded={handlePropertyAdded} />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              {stats.total}
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-emerald-50 to-green-100 hover:from-emerald-100 hover:to-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-slate-700">
              Occupied
            </CardTitle>
            <div className="p-2 bg-gradient-to-br from-emerald-600 to-green-700 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-200">
              <Users className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
              {stats.occupied}
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-amber-50 to-orange-100 hover:from-amber-100 hover:to-orange-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-slate-700">
              Vacant
            </CardTitle>
            <div className="p-2 bg-gradient-to-br from-amber-600 to-orange-700 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-200">
              <Building2 className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
              {stats.vacant}
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-violet-100 hover:from-purple-100 hover:to-violet-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-slate-700">
              Monthly Income
            </CardTitle>
            <div className="p-2 bg-gradient-to-br from-purple-600 to-violet-700 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-200">
              <DollarSign className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-violet-700 bg-clip-text text-transparent">
              ${stats.totalIncome.toLocaleString()}
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
                placeholder="Search properties by name, address, or tenant..."
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

      {/* Properties Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {properties.map((property) => (
          <Card
            key={property.id}
            className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
          >
            <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-t-xl relative overflow-hidden">
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <Badge
                className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold shadow-lg ${getStatusColor(
                  property.status
                )}`}
              >
                {property.status}
              </Badge>
            </div>
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-200">
                    {property.name}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-2 text-slate-600">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    {property.address}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-1 text-slate-600">
                    <span className="font-semibold">{property.bedrooms}</span>
                    <span>bed</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-600">
                    <span className="font-semibold">{property.bathrooms}</span>
                    <span>bath</span>
                  </div>
                  <div className="px-2 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-700 capitalize">
                    {property.type}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                    ${property.rent}
                  </div>
                  <div className="text-sm text-slate-500 font-medium">
                    per month
                  </div>
                </div>
                <div className="text-right">
                  {property.tenant ? (
                    <div>
                      <div className="font-semibold text-slate-800">
                        {property.tenant}
                      </div>
                      <div className="text-sm text-slate-500">
                        Current Tenant
                      </div>
                    </div>
                  ) : (
                    <div className="text-slate-500 font-medium">No Tenant</div>
                  )}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 gap-2 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-200"
                >
                  <Eye className="w-4 h-4" />
                  View
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 gap-2 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700 transition-all duration-200"
                >
                  <Edit className="w-4 h-4" />
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-2 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700 transition-all duration-200"
                >
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
