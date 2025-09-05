import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  DollarSign, 
  Calendar, 
  CreditCard,
  Receipt,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  Download
} from "lucide-react";

const MyRent = () => {
  const tenantInfo = {
    name: "John Smith",
    property: "123 Main Street, Apt 2B",
    monthlyRent: 1200,
    leaseStart: "2023-06-01",
    leaseEnd: "2024-05-31",
    owner: "Sarah Property Management"
  };

  const currentRent = {
    month: "January 2024",
    amountDue: 1200,
    amountPaid: 1200,
    dueDate: "2024-01-01",
    paidDate: "2024-01-01",
    status: "Paid",
    paymentMethod: "Bank Transfer"
  };

  const nextRent = {
    month: "February 2024",
    amountDue: 1200,
    dueDate: "2024-02-01",
    daysUntilDue: 12
  };

  const paymentHistory = [
    {
      month: "January 2024",
      amount: 1200,
      dueDate: "2024-01-01",
      paidDate: "2024-01-01",
      status: "Paid",
      method: "Bank Transfer",
      lateFee: 0
    },
    {
      month: "December 2023",
      amount: 1200,
      dueDate: "2023-12-01",
      paidDate: "2023-12-01",
      status: "Paid",
      method: "Bank Transfer",
      lateFee: 0
    },
    {
      month: "November 2023",
      amount: 1200,
      dueDate: "2023-11-01",
      paidDate: "2023-11-03",
      status: "Paid Late",
      method: "Check",
      lateFee: 50
    },
    {
      month: "October 2023",
      amount: 1200,
      dueDate: "2023-10-01",
      paidDate: "2023-10-01",
      status: "Paid",
      method: "Bank Transfer",
      lateFee: 0
    },
    {
      month: "September 2023",
      amount: 1200,
      dueDate: "2023-09-01",
      paidDate: "2023-09-01",
      status: "Paid",
      method: "Bank Transfer",
      lateFee: 0
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid": return "bg-success text-white";
      case "Paid Late": return "bg-warning text-white";
      case "Overdue": return "bg-danger text-white";
      case "Pending": return "bg-info text-white";
      default: return "bg-muted";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Paid": return CheckCircle;
      case "Paid Late": return AlertCircle;
      case "Overdue": return AlertCircle;
      case "Pending": return Clock;
      default: return Clock;
    }
  };

  const rentProgress = ((currentRent.amountPaid / currentRent.amountDue) * 100);
  const totalPaid = paymentHistory.reduce((sum, payment) => sum + payment.amount, 0);
  const totalLateFees = paymentHistory.reduce((sum, payment) => sum + payment.lateFee, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Rent</h1>
          <p className="text-muted-foreground">Track your rent payments and history</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Download Statement
          </Button>
          <Button className="gap-2">
            <CreditCard className="w-4 h-4" />
            Pay Rent
          </Button>
        </div>
      </div>

      {/* Current Rent Status */}
      <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary-glow/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-primary" />
            Current Month - {currentRent.month}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">
                ${currentRent.amountPaid}
              </div>
              <p className="text-sm text-muted-foreground">Amount Paid</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-muted-foreground mb-2">
                ${currentRent.amountDue - currentRent.amountPaid}
              </div>
              <p className="text-sm text-muted-foreground">Amount Due</p>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-primary mb-2">
                {currentRent.paidDate || currentRent.dueDate}
              </div>
              <p className="text-sm text-muted-foreground">
                {currentRent.paidDate ? "Paid Date" : "Due Date"}
              </p>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex justify-between text-sm mb-2">
              <span>Payment Progress</span>
              <span>{rentProgress}%</span>
            </div>
            <Progress value={rentProgress} className="h-3" />
          </div>
          {currentRent.status === "Paid" && (
            <div className="mt-4 p-3 bg-success/10 border border-success/20 rounded-lg text-center">
              <p className="text-success font-medium">✓ Payment completed on {currentRent.paidDate}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Next Payment & Stats */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Next Payment */}
        <Card className="border-info/20 bg-gradient-to-r from-info/5 to-info/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-info" />
              Next Payment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">${nextRent.amountDue}</div>
                  <p className="text-muted-foreground">{nextRent.month}</p>
                </div>
                <div className="text-right">
                  <div className={`text-lg font-semibold ${nextRent.daysUntilDue <= 5 ? 'text-warning' : 'text-primary'}`}>
                    {nextRent.daysUntilDue} days
                  </div>
                  <p className="text-sm text-muted-foreground">until due</p>
                </div>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground mb-3">Due Date: {nextRent.dueDate}</p>
                <Button className="w-full gap-2">
                  <CreditCard className="w-4 h-4" />
                  Pay Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Payment Summary
            </CardTitle>
            <CardDescription>Your payment statistics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-sm font-medium">Total Paid (Last 6 months)</span>
                <span className="text-lg font-bold text-success">${totalPaid.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-sm font-medium">On-time Payments</span>
                <span className="text-lg font-bold text-primary">
                  {paymentHistory.filter(p => p.status === "Paid").length}/{paymentHistory.length}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-sm font-medium">Total Late Fees</span>
                <span className={`text-lg font-bold ${totalLateFees > 0 ? 'text-warning' : 'text-success'}`}>
                  ${totalLateFees}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payment History */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Payment History</CardTitle>
            <CardDescription>Your recent rent payment records</CardDescription>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            Export History
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {paymentHistory.map((payment, index) => {
              const StatusIcon = getStatusIcon(payment.status);
              return (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="p-2 rounded-lg bg-muted">
                      <StatusIcon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{payment.month}</span>
                        <Badge className={`text-xs ${getStatusColor(payment.status)}`}>
                          {payment.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                        <div>Due: {payment.dueDate}</div>
                        <div>Paid: {payment.paidDate}</div>
                        <div>Method: {payment.method}</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">${payment.amount}</div>
                    {payment.lateFee > 0 && (
                      <div className="text-sm text-warning">+${payment.lateFee} late fee</div>
                    )}
                    <Button size="sm" variant="ghost" className="mt-1 gap-1">
                      <Receipt className="w-3 h-3" />
                      Receipt
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common payment tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2">
              <CreditCard className="w-6 h-6" />
              <span className="text-sm">Pay Rent</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Calendar className="w-6 h-6" />
              <span className="text-sm">Set Auto-Pay</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Receipt className="w-6 h-6" />
              <span className="text-sm">Download Receipt</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Download className="w-6 h-6" />
              <span className="text-sm">Payment History</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyRent;