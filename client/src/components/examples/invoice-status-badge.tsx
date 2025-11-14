import { InvoiceStatusBadge } from "../invoice-status-badge";

export default function InvoiceStatusBadgeExample() {
  return (
    <div className="flex gap-2">
      <InvoiceStatusBadge status="draft" />
      <InvoiceStatusBadge status="sent" />
      <InvoiceStatusBadge status="paid" />
      <InvoiceStatusBadge status="overdue" />
    </div>
  );
}
