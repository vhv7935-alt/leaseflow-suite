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
  DollarSign,
  TrendingUp,
  TrendingDown,
  Calendar,
  Plus,
  Search,
  Filter,
  Download,
  Eye,
  AlertCircle,
} from "lucide-react";

const Payments = () => {
  const payments = [
    {
      id: 1,
      tenant: "John Smith",
      property: "123 Main Street, Apt 2B",
      amount: 1200,
      dueDate: "2024-01-01",
      paidDate: "2024-01-01",
      status: "Paid",
      method: "Bank Transfer",
      late: false,
    },
    {
      id: 2,
      tenant: "Sarah Johnson",
      property: "456 Oak Avenue",
      amount: 1500,
      dueDate: "2024-01-01",
      paidDate: "2023-12-30",
      status: "Paid",
      method: "Check",
      late: false,
    },
    {
      id: 3,
      tenant: "Mike Wilson",
      property: "789 Pine Street, Unit 5C",
      amount: 1100,
      dueDate: "2024-01-01",
      paidDate: null,
      status: "Overdue",
      method: null,
      late: true,
    },
    {
      id: 4,
      tenant: "Emily Davis",
      property: "321 Broadway, Loft 12",
      amount: 1800,
      dueDate: "2024-02-01",
      paidDate: null,
      status: "Pending",
      method: null,
      late: false,
    },
    {
      id: 5,
      tenant: "John Smith",
      property: "123 Main Street, Apt 2B",
      amount: 1200,
      dueDate: "2023-12-01",
      paidDate: "2023-12-01",
      status: "Paid",
      method: "Bank Transfer",
      late: false,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-success text-white";
      case "Pending":
        return "bg-warning text-white";
      case "Overdue":
        return "bg-danger text-white";
      case "Partial":
        return "bg-info text-white";
      default:
        return "bg-muted";
    }
  };

  const stats = {
    totalCollected: payments
      .filter((p) => p.status === "Paid")
      .reduce((sum, p) => sum + p.amount, 0),
    pendingAmount: payments
      .filter((p) => p.status === "Pending")
      .reduce((sum, p) => sum + p.amount, 0),
    overdueAmount: payments
      .filter((p) => p.status === "Overdue")
      .reduce((sum, p) => sum + p.amount, 0),
    totalPayments: payments.filter((p) => p.status === "Paid").length,
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
            Payments
          </h1>
          <p className="text-slate-600 text-lg">
            Track rent payments and financial overview
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="gap-2 border-slate-200 hover:bg-slate-100 rounded-xl"
          >
            <Download className="w-4 h-4" />
            Export
          </Button>
          <Button className="gap-2 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-xl transition-all duration-200 rounded-xl">
            <Plus className="w-4 h-4" />
            Record Payment
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-emerald-50 to-green-100 hover:from-emerald-100 hover:to-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-slate-700">
              Total Collected
            </CardTitle>
            <div className="p-2 bg-gradient-to-br from-emerald-600 to-green-700 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-200">
              <DollarSign className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
              ${stats.totalCollected.toLocaleString()}
            </div>
            <p className="text-sm text-emerald-600 font-semibold flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-amber-50 to-orange-100 hover:from-amber-100 hover:to-orange-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-slate-700">
              Pending
            </CardTitle>
            <div className="p-2 bg-gradient-to-br from-amber-600 to-orange-700 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-200">
              <Calendar className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
              ${stats.pendingAmount.toLocaleString()}
            </div>
            <p className="text-sm text-slate-600 font-medium">Due this month</p>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-red-50 to-rose-100 hover:from-red-100 hover:to-rose-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-slate-700">
              Overdue
            </CardTitle>
            <div className="p-2 bg-gradient-to-br from-red-600 to-rose-700 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-200">
              <AlertCircle className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-rose-700 bg-clip-text text-transparent">
              ${stats.overdueAmount.toLocaleString()}
            </div>
            <p className="text-sm text-red-600 font-semibold flex items-center mt-1">
              <TrendingDown className="w-3 h-3 mr-1" />
              Needs attention
            </p>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-100 hover:from-blue-100 hover:to-indigo-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-slate-700">
              Total Payments
            </CardTitle>
            <div className="p-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-200">
              <DollarSign className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              {stats.totalPayments}
            </div>
            <p className="text-sm text-slate-600 font-medium">This month</p>
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
                placeholder="Search payments by tenant, property, or amount..."
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Calendar className="w-4 h-4" />
                Date Range
              </Button>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payments List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Payments</CardTitle>
          <CardDescription>All rent payment transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {payments.map((payment) => (
              <div
                key={payment.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium">{payment.tenant}</span>
                    <Badge
                      className={`text-xs ${getStatusColor(payment.status)}`}
                    >
                      {payment.status}
                    </Badge>
                    {payment.late && (
                      <Badge className="text-xs bg-danger text-white">
                        Late
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {payment.property}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>Due: {payment.dueDate}</span>
                    {payment.paidDate && <span>Paid: {payment.paidDate}</span>}
                    {payment.method && <span>Method: {payment.method}</span>}
                  </div>
                </div>
                <div className="text-right mr-4">
                  <div className="text-2xl font-bold">
                    ${payment.amount.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {payment.status === "Paid" ? "Received" : "Expected"}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="gap-2">
                    <Eye className="w-4 h-4" />
                    View
                  </Button>
                  {payment.status === "Overdue" && (
                    <Button size="sm" className="gap-2">
                      <AlertCircle className="w-4 h-4" />
                      Follow Up
                    </Button>
                  )}
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
          <CardDescription>Common payment management tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Plus className="w-6 h-6" />
              <span className="text-sm">Record Payment</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <AlertCircle className="w-6 h-6" />
              <span className="text-sm">Send Reminder</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Download className="w-6 h-6" />
              <span className="text-sm">Export Report</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Calendar className="w-6 h-6" />
              <span className="text-sm">Payment Schedule</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payments;
