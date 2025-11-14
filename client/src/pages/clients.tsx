import { useState } from "react";
import { ClientCard } from "@/components/client-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";

export default function Clients() {
  // todo: remove mock functionality
  const [searchQuery, setSearchQuery] = useState("");
  const [mockClients] = useState([
    {
      id: "1",
      name: "Acme Corporation",
      email: "contact@acme.com",
      phone: "+1 (555) 123-4567",
      totalInvoices: 12,
      outstandingAmount: "$5,240.00",
    },
    {
      id: "2",
      name: "TechStart Inc",
      email: "billing@techstart.io",
      phone: "+1 (555) 234-5678",
      totalInvoices: 8,
      outstandingAmount: "$2,100.00",
    },
    {
      id: "3",
      name: "Global Solutions",
      email: "finance@globalsol.com",
      phone: "+1 (555) 345-6789",
      totalInvoices: 15,
      outstandingAmount: "$8,750.00",
    },
    {
      id: "4",
      name: "StartupHub",
      email: "admin@startuphub.co",
      totalInvoices: 5,
      outstandingAmount: "$1,320.00",
    },
    {
      id: "5",
      name: "Innovation Labs",
      email: "payments@innovlabs.com",
      phone: "+1 (555) 456-7890",
      totalInvoices: 20,
      outstandingAmount: "$12,400.00",
    },
    {
      id: "6",
      name: "Digital Ventures",
      email: "billing@digitalv.com",
      totalInvoices: 7,
      outstandingAmount: "$3,680.00",
    },
  ]);

  const filteredClients = mockClients.filter((client) =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Clients</h1>
          <p className="text-muted-foreground mt-1">
            Manage your client relationships
          </p>
        </div>
        <Button data-testid="button-add-client">
          <Plus className="h-4 w-4 mr-2" />
          Add Client
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search clients..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9"
          data-testid="input-search-clients"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredClients.map((client) => (
          <ClientCard
            key={client.id}
            {...client}
            onEdit={(id) => console.log("Edit client:", id)}
            onDelete={(id) => console.log("Delete client:", id)}
          />
        ))}
      </div>
    </div>
  );
}
