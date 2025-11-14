import { useState } from "react";
import { StatsCard } from "@/components/stats-card";
import { InvoiceTable } from "@/components/invoice-table";
import { DollarSign, FileText, CheckCircle, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Dashboard() {
  // todo: remove mock functionality
  const [mockInvoices] = useState([
    {
      id: "1",
      number: "INV-001",
      client: "Acme Corp",
      amount: "$2,500.00",
      date: "2024-01-15",
      status: "paid" as const,
    },
    {
      id: "2",
      number: "INV-002",
      client: "TechStart Inc",
      amount: "$1,200.00",
      date: "2024-01-20",
      status: "sent" as const,
    },
    {
      id: "3",
      number: "INV-003",
      client: "Global Solutions",
      amount: "$3,750.00",
      date: "2024-01-10",
      status: "overdue" as const,
    },
    {
      id: "4",
      number: "INV-004",
      client: "StartupHub",
      amount: "$850.00",
      date: "2024-01-18",
      status: "draft" as const,
    },
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Overview of your business finances
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Revenue This Month"
          value="$12,450"
          icon={DollarSign}
          trend={{ value: "12%", isPositive: true }}
        />
        <StatsCard
          title="Outstanding Invoices"
          value="$8,300"
          icon={FileText}
          trend={{ value: "8%", isPositive: false }}
        />
        <StatsCard
          title="Paid Invoices"
          value="24"
          icon={CheckCircle}
          trend={{ value: "18%", isPositive: true }}
        />
        <StatsCard
          title="Total Expenses"
          value="$3,240"
          icon={TrendingUp}
          trend={{ value: "5%", isPositive: false }}
        />
      </div>

      <Tabs defaultValue="recent" className="space-y-4">
        <TabsList data-testid="tabs-dashboard">
          <TabsTrigger value="recent" data-testid="tab-recent">Recent Activity</TabsTrigger>
          <TabsTrigger value="overdue" data-testid="tab-overdue">Overdue</TabsTrigger>
        </TabsList>
        <TabsContent value="recent" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Invoices</CardTitle>
            </CardHeader>
            <CardContent>
              <InvoiceTable
                invoices={mockInvoices}
                onView={(id) => console.log("View invoice:", id)}
                onSend={(id) => console.log("Send invoice:", id)}
                onDownload={(id) => console.log("Download PDF:", id)}
                onDelete={(id) => console.log("Delete invoice:", id)}
              />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="overdue" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Overdue Invoices</CardTitle>
            </CardHeader>
            <CardContent>
              <InvoiceTable
                invoices={mockInvoices.filter((inv) => inv.status === "overdue")}
                onView={(id) => console.log("View invoice:", id)}
                onSend={(id) => console.log("Send invoice:", id)}
                onDownload={(id) => console.log("Download PDF:", id)}
                onDelete={(id) => console.log("Delete invoice:", id)}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
