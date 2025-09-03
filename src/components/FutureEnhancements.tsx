import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Smartphone, CreditCard, TrendingUp, Bot, Puzzle, Globe } from "lucide-react";

const FutureEnhancements = () => {
  return (
    <Card>
      <CardHeader className="bg-srs-section">
        <CardTitle className="flex items-center gap-2 text-srs-header">
          <Lightbulb className="w-5 h-5" />
          7. Future Enhancements
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Online Rent Payments */}
          <div className="p-6 border-2 border-srs-future/20 rounded-lg bg-srs-future/5">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="w-6 h-6 text-srs-future" />
              <h3 className="text-lg font-semibold text-srs-future">Online Rent Payments</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Integration with payment gateways for seamless rent collection.
            </p>
            <div className="space-y-2">
              <Badge variant="outline" className="text-xs mr-2">UPI Integration</Badge>
              <Badge variant="outline" className="text-xs mr-2">Credit/Debit Cards</Badge>
              <Badge variant="outline" className="text-xs mr-2">Net Banking</Badge>
              <Badge variant="outline" className="text-xs">Auto-Debit</Badge>
            </div>
            <div className="mt-4 text-xs text-muted-foreground">
              <strong>Timeline:</strong> Phase 2 (6-9 months)
            </div>
          </div>

          {/* Analytics Dashboard */}
          <div className="p-6 border-2 border-srs-future/20 rounded-lg bg-srs-future/5">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-srs-future" />
              <h3 className="text-lg font-semibold text-srs-future">Analytics Dashboard</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Comprehensive insights into rental income and expense patterns.
            </p>
            <div className="space-y-2">
              <Badge variant="outline" className="text-xs mr-2">Revenue Analytics</Badge>
              <Badge variant="outline" className="text-xs mr-2">Expense Tracking</Badge>
              <Badge variant="outline" className="text-xs mr-2">Occupancy Rates</Badge>
              <Badge variant="outline" className="text-xs">ROI Calculations</Badge>
            </div>
            <div className="mt-4 text-xs text-muted-foreground">
              <strong>Timeline:</strong> Phase 2 (6-9 months)
            </div>
          </div>

          {/* AI-based Maintenance Prediction */}
          <div className="p-6 border-2 border-srs-future/20 rounded-lg bg-srs-future/5">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="w-6 h-6 text-srs-future" />
              <h3 className="text-lg font-semibold text-srs-future">AI-based Maintenance Prediction</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Predict potential maintenance issues before they occur using historical data.
            </p>
            <div className="space-y-2">
              <Badge variant="outline" className="text-xs mr-2">Predictive Analytics</Badge>
              <Badge variant="outline" className="text-xs mr-2">Maintenance Scheduling</Badge>
              <Badge variant="outline" className="text-xs mr-2">Cost Forecasting</Badge>
              <Badge variant="outline" className="text-xs">ML Models</Badge>
            </div>
            <div className="mt-4 text-xs text-muted-foreground">
              <strong>Timeline:</strong> Phase 3 (12-18 months)
            </div>
          </div>

          {/* Chatbot Assistance */}
          <div className="p-6 border-2 border-srs-future/20 rounded-lg bg-srs-future/5">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="w-6 h-6 text-srs-future" />
              <h3 className="text-lg font-semibold text-srs-future">Chatbot Assistance</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              AI-powered chatbot for quick tenant support and issue resolution.
            </p>
            <div className="space-y-2">
              <Badge variant="outline" className="text-xs mr-2">24/7 Support</Badge>
              <Badge variant="outline" className="text-xs mr-2">Quick Responses</Badge>
              <Badge variant="outline" className="text-xs mr-2">Issue Logging</Badge>
              <Badge variant="outline" className="text-xs">FAQ Handling</Badge>
            </div>
            <div className="mt-4 text-xs text-muted-foreground">
              <strong>Timeline:</strong> Phase 3 (12-18 months)
            </div>
          </div>

          {/* Mobile App Integration */}
          <div className="p-6 border-2 border-srs-future/20 rounded-lg bg-srs-future/5">
            <div className="flex items-center gap-3 mb-4">
              <Smartphone className="w-6 h-6 text-srs-future" />
              <h3 className="text-lg font-semibold text-srs-future">Mobile App Integration</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Native mobile applications for iOS and Android platforms.
            </p>
            <div className="space-y-2">
              <Badge variant="outline" className="text-xs mr-2">iOS App</Badge>
              <Badge variant="outline" className="text-xs mr-2">Android App</Badge>
              <Badge variant="outline" className="text-xs mr-2">Push Notifications</Badge>
              <Badge variant="outline" className="text-xs">Offline Support</Badge>
            </div>
            <div className="mt-4 text-xs text-muted-foreground">
              <strong>Timeline:</strong> Phase 2 (6-9 months)
            </div>
          </div>

          {/* Third-party Integrations */}
          <div className="p-6 border-2 border-srs-future/20 rounded-lg bg-srs-future/5">
            <div className="flex items-center gap-3 mb-4">
              <Puzzle className="w-6 h-6 text-srs-future" />
              <h3 className="text-lg font-semibold text-srs-future">Third-party Integrations</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Connect with popular accounting and property management tools.
            </p>
            <div className="space-y-2">
              <Badge variant="outline" className="text-xs mr-2">QuickBooks</Badge>
              <Badge variant="outline" className="text-xs mr-2">Tally ERP</Badge>
              <Badge variant="outline" className="text-xs mr-2">Google Calendar</Badge>
              <Badge variant="outline" className="text-xs">Zapier</Badge>
            </div>
            <div className="mt-4 text-xs text-muted-foreground">
              <strong>Timeline:</strong> Phase 3 (12-18 months)
            </div>
          </div>

          {/* Multi-language Support */}
          <div className="p-6 border-2 border-srs-future/20 rounded-lg bg-srs-future/5 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-srs-future" />
              <h3 className="text-lg font-semibold text-srs-future">Multi-language Support</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Support for multiple languages to serve diverse tenant and owner populations.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="space-y-2">
                <Badge variant="outline" className="text-xs mr-2">English</Badge>
                <Badge variant="outline" className="text-xs mr-2">Hindi</Badge>
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="text-xs mr-2">Spanish</Badge>
                <Badge variant="outline" className="text-xs mr-2">French</Badge>
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="text-xs mr-2">German</Badge>
                <Badge variant="outline" className="text-xs mr-2">Arabic</Badge>
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="text-xs mr-2">Mandarin</Badge>
                <Badge variant="outline" className="text-xs">Regional Languages</Badge>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">
              <strong>Timeline:</strong> Phase 4 (18+ months)
            </div>
          </div>
        </div>

        {/* Implementation Roadmap */}
        <div className="mt-8 p-6 bg-muted/30 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-srs-header">Implementation Roadmap</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-8 bg-srs-requirement text-white rounded flex items-center justify-center text-xs font-bold">
                Phase 1
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm">Core System (Current Scope)</div>
                <div className="text-xs text-muted-foreground">0-6 months: Basic property management, expense tracking, document storage, maintenance system</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-16 h-8 bg-srs-test-case text-white rounded flex items-center justify-center text-xs font-bold">
                Phase 2
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm">Enhanced Features</div>
                <div className="text-xs text-muted-foreground">6-9 months: Payment integration, analytics dashboard, mobile apps</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-16 h-8 bg-srs-future text-white rounded flex items-center justify-center text-xs font-bold">
                Phase 3
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm">AI & Advanced Features</div>
                <div className="text-xs text-muted-foreground">12-18 months: AI predictions, chatbot, third-party integrations</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-16 h-8 bg-srs-header text-white rounded flex items-center justify-center text-xs font-bold">
                Phase 4
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm">Global Expansion</div>
                <div className="text-xs text-muted-foreground">18+ months: Multi-language support, regional compliance, advanced analytics</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FutureEnhancements;