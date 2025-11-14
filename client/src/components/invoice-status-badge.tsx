import { Badge } from "@/components/ui/badge";

type InvoiceStatus = "draft" | "sent" | "paid" | "overdue";

interface InvoiceStatusBadgeProps {
  status: InvoiceStatus;
}

const statusConfig = {
  draft: { label: "Draft", variant: "secondary" as const },
  sent: { label: "Sent", variant: "default" as const },
  paid: { label: "Paid", variant: "default" as const },
  overdue: { label: "Overdue", variant: "destructive" as const },
};

export function InvoiceStatusBadge({ status }: InvoiceStatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <Badge variant={config.variant} data-testid={`badge-status-${status}`}>
      {config.label}
    </Badge>
  );
}
