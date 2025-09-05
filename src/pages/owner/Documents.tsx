import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  File
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
      status: "Active"
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
      status: "Active"
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
      status: "Active"
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
      status: "Active"
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
      status: "Active"
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
      status: "Archived"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Lease": return "bg-primary text-white";
      case "Receipt": return "bg-success text-white";
      case "Inspection": return "bg-warning text-white";
      case "Insurance": return "bg-info text-white";
      case "Maintenance": return "bg-muted text-foreground";
      default: return "bg-muted";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-success text-white";
      case "Archived": return "bg-muted text-foreground";
      case "Expired": return "bg-danger text-white";
      default: return "bg-muted";
    }
  };

  const documentTypes = ["All", "Lease", "Receipt", "Inspection", "Insurance", "Maintenance"];
  const properties = [...new Set(documents.map(d => d.property))];

  const stats = {
    total: documents.length,
    active: documents.filter(d => d.status === "Active").length,
    archived: documents.filter(d => d.status === "Archived").length,
    totalSize: documents.reduce((sum, d) => sum + parseFloat(d.size), 0).toFixed(1)
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Documents</h1>
          <p className="text-muted-foreground">Manage all property-related documents</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export All
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
            <CardTitle className="text-sm font-medium">Active</CardTitle>
            <File className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{stats.active}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Archived</CardTitle>
            <Folder className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-muted-foreground">{stats.archived}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
            <Upload className="h-4 w-4 text-info" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-info">{stats.totalSize} MB</div>
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
                placeholder="Search documents by name, tenant, or property..." 
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
                Property
              </Button>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Status
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Documents List */}
      <Card>
        <CardHeader>
          <CardTitle>All Documents</CardTitle>
          <CardDescription>Property documents and files</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {documents.map((document) => (
              <div key={document.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-4 flex-1">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FileText className="w-6 h-6 text-primary" />
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                      <div>
                        <span className="font-medium">Property:</span> {document.property}
                      </div>
                      {document.tenant && (
                        <div>
                          <span className="font-medium">Tenant:</span> {document.tenant}
                        </div>
                      )}
                      <div>
                        <span className="font-medium">Size:</span> {document.size} • {document.fileType}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Uploaded: {document.dateUploaded} • Modified: {document.dateModified}
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
                  <Button size="sm" variant="outline" className="gap-2">
                    <Edit className="w-4 h-4" />
                    Edit
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2 text-destructive hover:text-destructive">
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