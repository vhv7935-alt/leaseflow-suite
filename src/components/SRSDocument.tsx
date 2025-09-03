import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Building2, Users, Shield, Wrench, FileText, TrendingUp } from "lucide-react";
import AcceptanceCriteria from "./AcceptanceCriteria";
import FutureEnhancements from "./FutureEnhancements";

const SRSDocument = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-8">
        {/* Header */}
        <div className="text-center mb-12 bg-srs-header text-primary-foreground p-8 rounded-lg">
          <h1 className="text-4xl font-bold mb-4">Software Requirements Specification</h1>
          <h2 className="text-2xl mb-4">Rental Property Management Website</h2>
          <div className="flex justify-center gap-4 text-sm">
            <Badge variant="secondary" className="bg-white/20 text-white">Version 1.0</Badge>
            <Badge variant="secondary" className="bg-white/20 text-white">Date: {new Date().toLocaleDateString()}</Badge>
          </div>
        </div>

        {/* Table of Contents */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-srs-header">Table of Contents</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-2">
              <li>1. Introduction</li>
              <li>2. Functional Requirements</li>
              <li>3. Non-Functional Requirements</li>
              <li>4. User Roles & Permissions</li>
              <li>5. System Flow</li>
              <li>6. Acceptance Criteria & Test Cases</li>
              <li>7. Future Enhancements</li>
            </ol>
          </CardContent>
        </Card>

        {/* 1. Introduction */}
        <Card className="mb-8">
          <CardHeader className="bg-srs-section">
            <CardTitle className="flex items-center gap-2 text-srs-header">
              <FileText className="w-5 h-5" />
              1. Introduction
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-3">1.1 Purpose</h3>
            <p className="mb-4 text-muted-foreground">
              This document specifies the software requirements for a Rental Property Management Website that enables property owners to manage multiple rental properties, track rent payments, store documents, and handle maintenance requests while providing tenants with a portal to view their rent status and raise maintenance issues.
            </p>
            
            <h3 className="text-lg font-semibold mb-3">1.2 Scope</h3>
            <p className="mb-4 text-muted-foreground">
              The system will provide a comprehensive property management solution including expense tracking, document management, maintenance request handling, and role-based access for property owners and tenants.
            </p>

            <h3 className="text-lg font-semibold mb-3">1.3 Target Users</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-srs-header mb-2">Property Owners</h4>
                <p className="text-sm text-muted-foreground">Individuals or entities who own rental properties and need to manage tenants, payments, and maintenance.</p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-srs-header mb-2">Tenants</h4>
                <p className="text-sm text-muted-foreground">Individuals renting properties who need to track their rent payments and report maintenance issues.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 2. Functional Requirements */}
        <Card className="mb-8">
          <CardHeader className="bg-srs-section">
            <CardTitle className="flex items-center gap-2 text-srs-header">
              <Building2 className="w-5 h-5" />
              2. Functional Requirements
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            
            {/* FR1: Expense Tracker */}
            <div className="mb-6 p-4 border-l-4 border-srs-requirement bg-srs-requirement/5">
              <h3 className="text-lg font-semibold mb-3 text-srs-requirement">FR1: Expense Tracker</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Description:</strong> Track rent payments and outstanding amounts for each tenant.</p>
                <p><strong>Priority:</strong> High</p>
                <div>
                  <strong>Features:</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Display payment history (paid, pending, overdue amounts)</li>
                    <li>Show tenant details (name, contact information)</li>
                    <li>Filter payments by tenant, property, or date range</li>
                    <li>Calculate total outstanding rent across all properties</li>
                    <li>Generate payment reminders</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FR2: Document Storage */}
            <div className="mb-6 p-4 border-l-4 border-srs-requirement bg-srs-requirement/5">
              <h3 className="text-lg font-semibold mb-3 text-srs-requirement">FR2: Document Storage & Management</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Description:</strong> Secure upload, storage, and retrieval of rental documents.</p>
                <p><strong>Priority:</strong> High</p>
                <div>
                  <strong>Features:</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Upload rent agreements, receipts, and legal documents</li>
                    <li>Support multiple file formats (PDF, JPG, PNG, DOC)</li>
                    <li>Organize documents by property and tenant</li>
                    <li>Version control for document updates</li>
                    <li>Secure access with role-based permissions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FR3: Property Management */}
            <div className="mb-6 p-4 border-l-4 border-srs-requirement bg-srs-requirement/5">
              <h3 className="text-lg font-semibold mb-3 text-srs-requirement">FR3: Multi-Property Management</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Description:</strong> Manage multiple properties with detailed information and status.</p>
                <p><strong>Priority:</strong> High</p>
                <div>
                  <strong>Features:</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Property details (address, location, size, amenities)</li>
                    <li>Rental status (available, occupied, under maintenance)</li>
                    <li>Associate tenants with specific properties</li>
                    <li>Property photos and documentation</li>
                    <li>Rent amount and lease terms for each property</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FR4: Maintenance System */}
            <div className="mb-6 p-4 border-l-4 border-srs-requirement bg-srs-requirement/5">
              <h3 className="text-lg font-semibold mb-3 text-srs-requirement">FR4: Maintenance & Repair Management</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Description:</strong> Log, track, and manage property maintenance requests.</p>
                <p><strong>Priority:</strong> Medium</p>
                <div>
                  <strong>Features:</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Categorized issue logging (plumbing, electrical, carpentry, etc.)</li>
                    <li>Priority levels (low, medium, high, urgent)</li>
                    <li>Status tracking (pending, in-progress, completed)</li>
                    <li>Photo attachments for issue documentation</li>
                    <li>Contractor assignment and cost tracking</li>
                    <li>Maintenance history for each property</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 3. Non-Functional Requirements */}
        <Card className="mb-8">
          <CardHeader className="bg-srs-section">
            <CardTitle className="flex items-center gap-2 text-srs-header">
              <Shield className="w-5 h-5" />
              3. Non-Functional Requirements
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-srs-header mb-2">Performance</h3>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Support up to 1,000 tenants</li>
                    <li>• Support up to 500 property owners</li>
                    <li>• Page load time &lt; 3 seconds</li>
                    <li>• File upload time &lt; 30 seconds for 10MB files</li>
                  </ul>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-srs-header mb-2">Security</h3>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• HTTPS encryption for all data transmission</li>
                    <li>• Data encryption at rest</li>
                    <li>• Role-based access control</li>
                    <li>• Session timeout after 30 minutes of inactivity</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-srs-header mb-2">Usability</h3>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Intuitive and responsive design</li>
                    <li>• Mobile-friendly interface</li>
                    <li>• Accessibility compliance (WCAG 2.1)</li>
                    <li>• Multi-browser support</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-srs-header mb-2">Reliability</h3>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• 99.9% uptime availability</li>
                    <li>• Automated backup every 24 hours</li>
                    <li>• Disaster recovery plan</li>
                    <li>• Error logging and monitoring</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-srs-header mb-2">Scalability</h3>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Horizontal scaling capability</li>
                    <li>• Database optimization for growth</li>
                    <li>• CDN integration for file delivery</li>
                    <li>• Load balancing support</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-srs-header mb-2">Compliance</h3>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• GDPR compliance for data privacy</li>
                    <li>• Regular security audits</li>
                    <li>• Data retention policies</li>
                    <li>• User consent management</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 4. User Roles */}
        <Card className="mb-8">
          <CardHeader className="bg-srs-section">
            <CardTitle className="flex items-center gap-2 text-srs-header">
              <Users className="w-5 h-5" />
              4. User Roles & Permissions
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border-2 border-srs-header/20 rounded-lg">
                <h3 className="text-xl font-semibold text-srs-header mb-4">Property Owner</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm">Property Management</h4>
                    <ul className="text-sm text-muted-foreground list-disc list-inside">
                      <li>Add/edit/delete properties</li>
                      <li>View all owned properties</li>
                      <li>Update property status</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Tenant Management</h4>
                    <ul className="text-sm text-muted-foreground list-disc list-inside">
                      <li>View tenant details</li>
                      <li>Track rent payments</li>
                      <li>Send payment reminders</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Document Access</h4>
                    <ul className="text-sm text-muted-foreground list-disc list-inside">
                      <li>Upload/download documents</li>
                      <li>View all property documents</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Maintenance</h4>
                    <ul className="text-sm text-muted-foreground list-disc list-inside">
                      <li>View maintenance requests</li>
                      <li>Update request status</li>
                      <li>Assign contractors</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 border-2 border-srs-header/20 rounded-lg">
                <h3 className="text-xl font-semibold text-srs-header mb-4">Tenant</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm">Rent Management</h4>
                    <ul className="text-sm text-muted-foreground list-disc list-inside">
                      <li>View rent status and history</li>
                      <li>Download rent receipts</li>
                      <li>View outstanding amounts</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Property Information</h4>
                    <ul className="text-sm text-muted-foreground list-disc list-inside">
                      <li>View current property details</li>
                      <li>Access lease agreement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Document Access</h4>
                    <ul className="text-sm text-muted-foreground list-disc list-inside">
                      <li>Upload payment proofs</li>
                      <li>View personal documents</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Maintenance</h4>
                    <ul className="text-sm text-muted-foreground list-disc list-inside">
                      <li>Log maintenance requests</li>
                      <li>Track request status</li>
                      <li>Upload issue photos</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 5. System Flow */}
        <Card className="mb-8">
          <CardHeader className="bg-srs-section">
            <CardTitle className="flex items-center gap-2 text-srs-header">
              <Wrench className="w-5 h-5" />
              5. System Flow
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {/* User Authentication Flow */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-srs-header">5.1 User Authentication Flow</h3>
                <div className="bg-muted/50 p-6 rounded-lg">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-srs-header text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <span>User enters email and password</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-srs-header text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <span>System validates credentials</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-srs-header text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <span>Role-based dashboard redirection</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-srs-header text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                      <span>Session established with timeout</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Maintenance Request Flow */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-srs-header">5.2 Maintenance Request Flow</h3>
                <div className="bg-muted/50 p-6 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Tenant Actions</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-srs-requirement text-white rounded-full flex items-center justify-center text-xs">1</div>
                          <span className="text-sm">Log maintenance issue</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-srs-requirement text-white rounded-full flex items-center justify-center text-xs">2</div>
                          <span className="text-sm">Select category & priority</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-srs-requirement text-white rounded-full flex items-center justify-center text-xs">3</div>
                          <span className="text-sm">Upload photos (optional)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-srs-requirement text-white rounded-full flex items-center justify-center text-xs">4</div>
                          <span className="text-sm">Submit request</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Owner Actions</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-srs-header text-white rounded-full flex items-center justify-center text-xs">1</div>
                          <span className="text-sm">Receive notification</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-srs-header text-white rounded-full flex items-center justify-center text-xs">2</div>
                          <span className="text-sm">Review request details</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-srs-header text-white rounded-full flex items-center justify-center text-xs">3</div>
                          <span className="text-sm">Update status & assign contractor</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-srs-header text-white rounded-full flex items-center justify-center text-xs">4</div>
                          <span className="text-sm">Mark as completed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 6. Acceptance Criteria & Test Cases */}
        <AcceptanceCriteria />

        {/* 7. Future Enhancements */}
        <FutureEnhancements />
      </div>
    </div>
  );
};

export default SRSDocument;