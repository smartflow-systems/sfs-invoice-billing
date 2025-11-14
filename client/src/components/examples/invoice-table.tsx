import { InvoiceTable } from "../invoice-table";

export default function InvoiceTableExample() {
  const mockInvoices = [
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
  ];

  return (
    <InvoiceTable
      invoices={mockInvoices}
      onView={(id) => console.log("View invoice:", id)}
      onSend={(id) => console.log("Send invoice:", id)}
      onDownload={(id) => console.log("Download invoice:", id)}
      onDelete={(id) => console.log("Delete invoice:", id)}
    />
  );
}
