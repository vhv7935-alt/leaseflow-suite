import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Shield, Home } from "lucide-react";

interface AuthPageProps {
  onLogin?: (type: "owner" | "tenant") => void;
}

const AuthPage = ({ onLogin }: AuthPageProps) => {
  const [userType, setUserType] = useState<"owner" | "tenant">("owner");

  const handleAuth = (action: "login" | "signup") => {
    // For demo purposes - simulate successful authentication
    console.log(`${action} as ${userType}`);
    if (onLogin) {
      onLogin(userType);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-info/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Building2 className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              RentManager Pro
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Comprehensive property management solution for owners and tenants
          </p>
        </div>

        {/* Features Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow">
            <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Property Management</h3>
            <p className="text-sm text-muted-foreground">Manage multiple properties with detailed tracking</p>
          </Card>
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow">
            <Users className="w-12 h-12 text-success mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Tenant Portal</h3>
            <p className="text-sm text-muted-foreground">Easy rent tracking and maintenance requests</p>
          </Card>
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow">
            <Shield className="w-12 h-12 text-info mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Secure Documents</h3>
            <p className="text-sm text-muted-foreground">Safe storage and sharing of rental documents</p>
          </Card>
        </div>

        {/* Auth Form */}
        <Card className="max-w-md mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle>Welcome to RentManager Pro</CardTitle>
            <CardDescription>
              Sign in to manage your properties or view your rental information
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* User Type Selection */}
            <div className="mb-6">
              <Label className="text-sm font-medium mb-3 block">I am a:</Label>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant={userType === "owner" ? "default" : "outline"}
                  className="h-12 flex-col gap-1"
                  onClick={() => setUserType("owner")}
                >
                  <Building2 className="w-5 h-5" />
                  <span className="text-xs">Property Owner</span>
                </Button>
                <Button
                  variant={userType === "tenant" ? "default" : "outline"}
                  className="h-12 flex-col gap-1"
                  onClick={() => setUserType("tenant")}
                >
                  <Home className="w-5 h-5" />
                  <span className="text-xs">Tenant</span>
                </Button>
              </div>
            </div>

            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter your password" />
                </div>
                <Button 
                  className="w-full" 
                  onClick={() => handleAuth("login")}
                >
                  Sign In as {userType === "owner" ? "Owner" : "Tenant"}
                </Button>
              </TabsContent>

              <TabsContent value="signup" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input id="signup-email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input id="signup-password" type="password" placeholder="Create a password" />
                </div>
                {userType === "owner" && (
                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization (Optional)</Label>
                    <Input id="company" placeholder="Enter company name" />
                  </div>
                )}
                <Button 
                  className="w-full" 
                  onClick={() => handleAuth("signup")}
                >
                  Create {userType === "owner" ? "Owner" : "Tenant"} Account
                </Button>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <Badge variant="secondary" className="text-xs">
                {userType === "owner" ? "Manage multiple properties effortlessly" : "Track rent and requests easily"}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Backend Notice */}
        <Card className="max-w-2xl mx-auto mt-8 border-warning/20 bg-warning/5">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-warning mt-0.5" />
              <div>
                <h3 className="font-semibold text-warning mb-2">Backend Setup Required</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  To enable user authentication, document storage, and data management, you'll need to connect this project to Supabase.
                </p>
                <p className="text-sm text-muted-foreground">
                  Click the green Supabase button in the top right to connect your database and enable full functionality.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuthPage;