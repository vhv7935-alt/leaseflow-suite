import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, TestTube } from "lucide-react";

const AcceptanceCriteria = () => {
  return (
    <div className="space-y-8">
      {/* 6. Acceptance Criteria & Test Cases */}
      <Card>
        <CardHeader className="bg-srs-section">
          <CardTitle className="flex items-center gap-2 text-srs-header">
            <CheckCircle2 className="w-5 h-5" />
            6. Acceptance Criteria & Test Cases
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          
          {/* Expense Tracker */}
          <div className="mb-8 p-6 border-l-4 border-srs-test-case bg-srs-test-case/5 rounded-r-lg">
            <h3 className="text-lg font-semibold mb-4 text-srs-test-case">6.1 Expense Tracker</h3>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-srs-requirement">Acceptance Criteria:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-srs-requirement mt-0.5 flex-shrink-0" />
                  The system should display tenant payment history (paid, pending, overdue amounts)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-srs-requirement mt-0.5 flex-shrink-0" />
                  The owner should be able to filter payments by tenant, property, or date range
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-srs-requirement mt-0.5 flex-shrink-0" />
                  Total outstanding amounts should be calculated and displayed accurately
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-srs-requirement mt-0.5 flex-shrink-0" />
                  Tenant contact information should be easily accessible from payment records
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <TestTube className="w-4 h-4" />
                Test Cases:
              </h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">TC-ET-001</Badge>
                    <span className="font-medium text-sm">Payment Update Verification</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Test:</strong> Verify that after a tenant makes a payment, the system updates the "Paid" amount correctly.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Expected Result:</strong> Payment history shows updated amount, pending balance reduces accordingly.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">TC-ET-002</Badge>
                    <span className="font-medium text-sm">Partial Payment Handling</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Test:</strong> Verify that pending amount reduces correctly when a partial payment is made.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Expected Result:</strong> System calculates and displays remaining balance accurately.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">TC-ET-003</Badge>
                    <span className="font-medium text-sm">Payment History Access</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Test:</strong> Verify that owner can view complete payment history per tenant.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Expected Result:</strong> All payment records are visible with dates, amounts, and status.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Document Storage */}
          <div className="mb-8 p-6 border-l-4 border-srs-test-case bg-srs-test-case/5 rounded-r-lg">
            <h3 className="text-lg font-semibold mb-4 text-srs-test-case">6.2 Document Storage</h3>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-srs-requirement">Acceptance Criteria:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-srs-requirement mt-0.5 flex-shrink-0" />
                  Users should be able to upload rent agreements in PDF/JPG/PNG/DOC format
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-srs-requirement mt-0.5 flex-shrink-0" />
                  Documents should be retrievable anytime by authorized users
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-srs-requirement mt-0.5 flex-shrink-0" />
                  File uploads should be limited to 10MB per document
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-srs-requirement mt-0.5 flex-shrink-0" />
                  Document access should be restricted based on user roles
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <TestTube className="w-4 h-4" />
                Test Cases:
              </h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">TC-DS-001</Badge>
                    <span className="font-medium text-sm">Successful Document Upload</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Test:</strong> Upload a valid PDF document and verify it appears in the tenant's record.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Expected Result:</strong> Document uploads successfully and appears in document list.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">TC-DS-002</Badge>
                    <span className="font-medium text-sm">Invalid File Type Rejection</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Test:</strong> Attempt to upload an unsupported file type (.exe, .zip).
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Expected Result:</strong> System rejects upload with appropriate error message.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">TC-DS-003</Badge>
                    <span className="font-medium text-sm">Document Access Control</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Test:</strong> Verify that tenants cannot view documents belonging to other tenants.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Expected Result:</strong> Access denied with appropriate authorization error.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Maintenance & Repairs */}
          <div className="mb-8 p-6 border-l-4 border-srs-test-case bg-srs-test-case/5 rounded-r-lg">
            <h3 className="text-lg font-semibold mb-4 text-srs-test-case">6.3 Maintenance & Repairs</h3>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-srs-requirement">Acceptance Criteria:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-srs-requirement mt-0.5 flex-shrink-0" />
                  Tenants should be able to log issues under predefined categories
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-srs-requirement mt-0.5 flex-shrink-0" />
                  Owners should be able to update issue status and assign contractors
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-srs-requirement mt-0.5 flex-shrink-0" />
                  System should send notifications when status changes
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-srs-requirement mt-0.5 flex-shrink-0" />
                  Photo attachments should be supported for issue documentation
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <TestTube className="w-4 h-4" />
                Test Cases:
              </h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">TC-MR-001</Badge>
                    <span className="font-medium text-sm">Issue Logging</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Test:</strong> Verify that a tenant can raise a plumbing request with description and photo.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Expected Result:</strong> Request is logged with correct category and all attachments.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">TC-MR-002</Badge>
                    <span className="font-medium text-sm">Status Update</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Test:</strong> Verify that an owner can change request status to "in-progress".
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Expected Result:</strong> Status updates successfully and tenant receives notification.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">TC-MR-003</Badge>
                    <span className="font-medium text-sm">Notification System</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Test:</strong> Verify that notifications are sent when maintenance status changes.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Expected Result:</strong> Both email and in-app notifications are delivered promptly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Property Management */}
          <div className="p-6 border-l-4 border-srs-test-case bg-srs-test-case/5 rounded-r-lg">
            <h3 className="text-lg font-semibold mb-4 text-srs-test-case">6.4 Property Management</h3>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-srs-requirement">Acceptance Criteria:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-srs-requirement mt-0.5 flex-shrink-0" />
                  Owners should be able to add multiple properties with complete details
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-srs-requirement mt-0.5 flex-shrink-0" />
                  Property status should be updateable (available, occupied, under maintenance)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-srs-requirement mt-0.5 flex-shrink-0" />
                  Tenants should be assignable to specific properties
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-srs-requirement mt-0.5 flex-shrink-0" />
                  Property search and filtering should be available
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <TestTube className="w-4 h-4" />
                Test Cases:
              </h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">TC-PM-001</Badge>
                    <span className="font-medium text-sm">Property Addition</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Test:</strong> Add a new property with address, rent amount, and amenities.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Expected Result:</strong> Property is saved with all details and appears in property list.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">TC-PM-002</Badge>
                    <span className="font-medium text-sm">Tenant Assignment</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Test:</strong> Assign a tenant to a property and verify the association.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Expected Result:</strong> Property status changes to "occupied" and tenant details are linked.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default AcceptanceCriteria;