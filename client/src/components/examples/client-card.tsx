import { ClientCard } from "../client-card";

export default function ClientCardExample() {
  return (
    <ClientCard
      id="1"
      name="Acme Corporation"
      email="contact@acme.com"
      phone="+1 (555) 123-4567"
      totalInvoices={12}
      outstandingAmount="$5,240.00"
      onEdit={(id) => console.log("Edit client:", id)}
      onDelete={(id) => console.log("Delete client:", id)}
    />
  );
}
