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
import {
  FileText,
  Upload,
  Download,
  Eye,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  Folder,
  File,
} from "lucide-react";

const Documents = () => {
  const documents = [
    {
      id: 1,
      name: "Lease Agreement - John Smith",
      type: "Lease",
      tenant: "John Smith",
      property: "123 Main Street, Apt 2B",
      fileType: "PDF",
      size: "2.4 MB",
      dateUploaded: "2023-06-01",
      dateModified: "2023-06-01",
      status: "Active",
    },
    {
      id: 2,
      name: "Rent Receipt - January 2024",
      type: "Receipt",
      tenant: "John Smith",
      property: "123 Main Street, Apt 2B",
      fileType: "PDF",
      size: "156 KB",
      dateUploaded: "2024-01-01",
      dateModified: "2024-01-01",
      status: "Active",
    },
    {
      id: 3,
      name: "Move-in Inspection Report",
      type: "Inspection",
      tenant: "Sarah Johnson",
      property: "456 Oak Avenue",
      fileType: "PDF",
      size: "890 KB",
      dateUploaded: "2023-09-01",
      dateModified: "2023-09-01",
      status: "Active",
    },
    {
      id: 4,
      name: "Property Insurance Policy",
      type: "Insurance",
      tenant: null,
      property: "789 Pine Street, Unit 5C",
      fileType: "PDF",
      size: "1.2 MB",
      dateUploaded: "2023-01-15",
      dateModified: "2023-12-15",
      status: "Active",
    },
    {
      id: 5,
      name: "Maintenance Receipt - Plumbing",
      type: "Maintenance",
      tenant: "Mike Wilson",
      property: "789 Pine Street, Unit 5C",
      fileType: "PDF",
      size: "345 KB",
      dateUploaded: "2024-01-14",
      dateModified: "2024-01-14",
      status: "Active",
    },
    {
      id: 6,
      name: "Expired Lease - Previous Tenant",
      type: "Lease",
      tenant: "Former Tenant",
      property: "321 Broadway, Loft 12",
      fileType: "PDF",
      size: "2.1 MB",
      dateUploaded: "2022-10-01",
      dateModified: "2023-10-01",
      status: "Archived",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Lease":
        return "bg-primary text-white";
      case "Receipt":
        return "bg-success text-white";
      case "Inspection":
        return "bg-warning text-white";
      case "Insurance":
        return "bg-info text-white";
      case "Maintenance":
        return "bg-muted text-foreground";
      default:
        return "bg-muted";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-success text-white";
      case "Archived":
        return "bg-muted text-foreground";
      case "Expired":
        return "bg-danger text-white";
      default:
        return "bg-muted";
    }
  };

  const documentTypes = [
    "All",
    "Lease",
    "Receipt",
    "Inspection",
    "Insurance",
    "Maintenance",
  ];
  const properties = [...new Set(documents.map((d) => d.property))];

  const stats = {
    total: documents.length,
    active: documents.filter((d) => d.status === "Active").length,
    archived: documents.filter((d) => d.status === "Archived").length,
    totalSize: documents
      .reduce((sum, d) => sum + parseFloat(d.size), 0)
      .toFixed(1),
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
            Documents
          </h1>
          <p className="text-slate-600 text-lg">
            Manage all property-related documents
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="gap-2 border-slate-200 hover:bg-slate-100 rounded-xl"
          >
            <Download className="w-4 h-4" />
            Export All
          </Button>
          <Button className="gap-2 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-xl transition-all duration-200 rounded-xl">
            <Upload className="w-4 h-4" />
            Upload Document
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-100 hover:from-blue-100 hover:to-indigo-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-slate-700">
              Total Documents
            </CardTitle>
            <div className="p-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-200">
              <FileText className="h-4 w-4 text-white" />
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
              Active
            </CardTitle>
            <div className="p-2 bg-gradient-to-br from-emerald-600 to-green-700 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-200">
              <File className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
              {stats.active}
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-slate-50 to-gray-100 hover:from-slate-100 hover:to-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-slate-700">
              Archived
            </CardTitle>
            <div className="p-2 bg-gradient-to-br from-slate-600 to-gray-700 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-200">
              <Folder className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-to-r from-slate-600 to-gray-700 bg-clip-text text-transparent">
              {stats.archived}
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-violet-100 hover:from-purple-100 hover:to-violet-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-slate-700">
              Storage Used
            </CardTitle>
            <div className="p-2 bg-gradient-to-br from-purple-600 to-violet-700 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-200">
              <Upload className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-violet-700 bg-clip-text text-transparent">
              {stats.totalSize} MB
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
                placeholder="Search documents by name, tenant, or property..."
                className="pl-12 h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl text-slate-600"
              />
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="gap-2 h-12 px-6 border-slate-200 hover:bg-slate-100 rounded-xl"
              >
                <Filter className="w-4 h-4" />
                Type
              </Button>
              <Button
                variant="outline"
                className="gap-2 h-12 px-6 border-slate-200 hover:bg-slate-100 rounded-xl"
              >
                <Filter className="w-4 h-4" />
                Property
              </Button>
              <Button
                variant="outline"
                className="gap-2 h-12 px-6 border-slate-200 hover:bg-slate-100 rounded-xl"
              >
                <Filter className="w-4 h-4" />
                Status
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Documents List */}
      <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-slate-800">
            All Documents
          </CardTitle>
          <CardDescription className="text-slate-600">
            Property documents and files
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {documents.map((document) => (
              <div
                key={document.id}
                className="group flex items-center justify-between p-6 border-0 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-white/80 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-6 flex-1">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 group-hover:from-blue-100 group-hover:to-indigo-200 transition-all duration-200">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-200 truncate">
                        {document.name}
                      </h3>
                      <Badge
                        className={`text-xs font-semibold px-3 py-1 ${getTypeColor(
                          document.type
                        )}`}
                      >
                        {document.type}
                      </Badge>
                      <Badge
                        className={`text-xs font-semibold px-3 py-1 ${getStatusColor(
                          document.status
                        )}`}
                      >
                        {document.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                      <div>
                        <span className="font-medium">Property:</span>{" "}
                        {document.property}
                      </div>
                      {document.tenant && (
                        <div>
                          <span className="font-medium">Tenant:</span>{" "}
                          {document.tenant}
                        </div>
                      )}
                      <div>
                        <span className="font-medium">Size:</span>{" "}
                        {document.size} • {document.fileType}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Uploaded: {document.dateUploaded} • Modified:{" "}
                      {document.dateModified}
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
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-2 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700 transition-all duration-200"
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-2 text-red-600 hover:bg-red-50 hover:border-red-300 hover:text-red-700 transition-all duration-200"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common document management tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Upload className="w-6 h-6" />
              <span className="text-sm">Upload Lease</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <FileText className="w-6 h-6" />
              <span className="text-sm">Generate Receipt</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Eye className="w-6 h-6" />
              <span className="text-sm">Inspection Report</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Download className="w-6 h-6" />
              <span className="text-sm">Bulk Export</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Documents;
