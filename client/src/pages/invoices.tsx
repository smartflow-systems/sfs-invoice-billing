import { useState } from "react";
import { InvoiceTable } from "@/components/invoice-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Invoices() {
  // todo: remove mock functionality
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
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
    {
      id: "5",
      number: "INV-005",
      client: "Innovation Labs",
      amount: "$4,200.00",
      date: "2024-01-22",
      status: "sent" as const,
    },
  ]);

  const filteredInvoices = mockInvoices.filter((invoice) => {
    const matchesSearch =
      invoice.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.number.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || invoice.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Invoices</h1>
          <p className="text-muted-foreground mt-1">
            Manage and track all your invoices
          </p>
        </div>
        <Button data-testid="button-create-invoice">
          <Plus className="h-4 w-4 mr-2" />
          Create Invoice
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search invoices..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
            data-testid="input-search-invoices"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]" data-testid="select-status-filter">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="sent">Sent</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="overdue">Overdue</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <InvoiceTable
        invoices={filteredInvoices}
        onView={(id) => console.log("View invoice:", id)}
        onSend={(id) => console.log("Send invoice:", id)}
        onDownload={(id) => console.log("Download PDF:", id)}
        onDelete={(id) => console.log("Delete invoice:", id)}
      />
    </div>
  );
}
