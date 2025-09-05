import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  FileText, 
  Upload, 
  Download, 
  Eye, 
  Search,
  Filter,
  File,
  CheckCircle,
  Clock,
  Calendar
} from "lucide-react";

const Documents = () => {
  const documents = [
    {
      id: 1,
      name: "Current Lease Agreement",
      type: "Lease",
      fileType: "PDF",
      size: "2.4 MB",
      dateUploaded: "2023-06-01",
      dateModified: "2023-06-01",
      status: "Active",
      description: "Main lease agreement for current tenancy period",
      expiryDate: "2024-05-31"
    },
    {
      id: 2,
      name: "Lease Amendment #1",
      type: "Amendment",
      fileType: "PDF",
      size: "890 KB",
      dateUploaded: "2023-08-15",
      dateModified: "2023-08-15",
      status: "Active",
      description: "Amendment allowing pet ownership",
      expiryDate: null
    },
    {
      id: 3,
      name: "Move-in Inspection Report",
      type: "Inspection",
      fileType: "PDF",
      size: "1.2 MB",
      dateUploaded: "2023-06-01",
      dateModified: "2023-06-01",
      status: "Completed",
      description: "Property condition at move-in",
      expiryDate: null
    },
    {
      id: 4,
      name: "Rent Receipt - January 2024",
      type: "Receipt",
      fileType: "PDF",
      size: "156 KB",
      dateUploaded: "2024-01-01",
      dateModified: "2024-01-01",
      status: "Active",
      description: "Rent payment confirmation for January 2024",
      expiryDate: null
    },
    {
      id: 5,
      name: "Rent Receipt - December 2023",
      type: "Receipt",
      fileType: "PDF",
      size: "156 KB",
      dateUploaded: "2023-12-01",
      dateModified: "2023-12-01",
      status: "Active",
      description: "Rent payment confirmation for December 2023",
      expiryDate: null
    },
    {
      id: 6,
      name: "Property Insurance Information",
      type: "Insurance",
      fileType: "PDF",
      size: "670 KB",
      dateUploaded: "2023-06-01",
      dateModified: "2023-12-01",
      status: "Current",
      description: "Property insurance details and tenant responsibilities",
      expiryDate: "2024-12-01"
    },
    {
      id: 7,
      name: "Maintenance Request Form",
      type: "Form",
      fileType: "PDF",
      size: "234 KB",
      dateUploaded: "2023-06-01",
      dateModified: "2023-06-01",
      status: "Template",
      description: "Template for submitting maintenance requests",
      expiryDate: null
    },
    {
      id: 8,
      name: "Emergency Contact Information",
      type: "Contact",
      fileType: "PDF",
      size: "145 KB",
      dateUploaded: "2023-06-01",
      dateModified: "2024-01-01",
      status: "Current",
      description: "Emergency contacts and procedures",
      expiryDate: null
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Lease": return "bg-primary text-white";
      case "Amendment": return "bg-info text-white";
      case "Receipt": return "bg-success text-white";
      case "Inspection": return "bg-warning text-white";
      case "Insurance": return "bg-muted text-foreground";
      case "Form": return "bg-muted text-foreground";
      case "Contact": return "bg-info text-white";
      default: return "bg-muted";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-success text-white";
      case "Current": return "bg-success text-white";
      case "Completed": return "bg-info text-white";
      case "Template": return "bg-muted text-foreground";
      case "Expired": return "bg-danger text-white";
      default: return "bg-muted";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Active": return CheckCircle;
      case "Current": return CheckCircle;
      case "Completed": return CheckCircle;
      case "Template": return File;
      case "Expired": return Clock;
      default: return File;
    }
  };

  const documentsByType = {
    "Lease Documents": documents.filter(d => d.type === "Lease" || d.type === "Amendment"),
    "Receipts & Payments": documents.filter(d => d.type === "Receipt"),
    "Inspection & Reports": documents.filter(d => d.type === "Inspection"),
    "Insurance & Forms": documents.filter(d => d.type === "Insurance" || d.type === "Form" || d.type === "Contact")
  };

  const stats = {
    total: documents.length,
    active: documents.filter(d => d.status === "Active" || d.status === "Current").length,
    receipts: documents.filter(d => d.type === "Receipt").length,
    leases: documents.filter(d => d.type === "Lease" || d.type === "Amendment").length
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Documents</h1>
          <p className="text-muted-foreground">Access your lease agreements, receipts, and property documents</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Download All
          </Button>
          <Button className="gap-2">
            <Upload className="w-4 h-4" />
            Upload Document
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
            <FileText className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{stats.total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Documents</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{stats.active}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lease Documents</CardTitle>
            <File className="h-4 w-4 text-info" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-info">{stats.leases}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Payment Receipts</CardTitle>
            <Calendar className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{stats.receipts}</div>
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
                placeholder="Search documents by name or type..." 
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Type
              </Button>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Status
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Document Categories */}
      {Object.entries(documentsByType).map(([category, docs]) => (
        <Card key={category}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              {category}
            </CardTitle>
            <CardDescription>{docs.length} documents in this category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {docs.map((document) => {
                const StatusIcon = getStatusIcon(document.status);
                return (
                  <div key={document.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <StatusIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium truncate">{document.name}</h3>
                          <Badge className={`text-xs ${getTypeColor(document.type)}`}>
                            {document.type}
                          </Badge>
                          <Badge className={`text-xs ${getStatusColor(document.status)}`}>
                            {document.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{document.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                          <div>
                            <span className="font-medium">Size:</span> {document.size} • {document.fileType}
                          </div>
                          <div>
                            <span className="font-medium">Uploaded:</span> {document.dateUploaded}
                          </div>
                          {document.expiryDate && (
                            <div>
                              <span className="font-medium">Expires:</span> {document.expiryDate}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button size="sm" variant="outline" className="gap-2">
                        <Eye className="w-4 h-4" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="gap-2">
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                );
              })}
              {docs.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  No documents in this category yet.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common document tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2">
              <FileText className="w-6 h-6" />
              <span className="text-sm">View Lease</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Download className="w-6 h-6" />
              <span className="text-sm">Download Receipt</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Upload className="w-6 h-6" />
              <span className="text-sm">Upload Document</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Eye className="w-6 h-6" />
              <span className="text-sm">Request Document</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Documents;