import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, Pause, X } from "lucide-react";

interface RecurringBillingCardProps {
  id: string;
  clientName: string;
  planName: string;
  amount: string;
  billingCycle: "monthly" | "quarterly" | "yearly";
  nextPaymentDate: string;
  status: "active" | "paused";
  onPause?: (id: string) => void;
  onCancel?: (id: string) => void;
}

export function RecurringBillingCard({
  id,
  clientName,
  planName,
  amount,
  billingCycle,
  nextPaymentDate,
  status,
  onPause,
  onCancel,
}: RecurringBillingCardProps) {
  const initials = clientName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card data-testid={`card-subscription-${id}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-base" data-testid={`text-client-name-${id}`}>{clientName}</CardTitle>
              <p className="text-sm text-muted-foreground" data-testid={`text-plan-name-${id}`}>{planName}</p>
            </div>
          </div>
          <Badge variant={status === "active" ? "default" : "secondary"} data-testid={`badge-status-${id}`}>
            {status === "active" ? "Active" : "Paused"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Amount</span>
          <span className="font-mono font-semibold text-lg" data-testid={`text-amount-${id}`}>{amount}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Billing Cycle</span>
          <span className="text-sm capitalize" data-testid={`text-cycle-${id}`}>{billingCycle}</span>
        </div>
        <div className="flex items-center gap-2 pt-2 border-t">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            Next payment: <span className="font-medium" data-testid={`text-next-payment-${id}`}>{nextPaymentDate}</span>
          </span>
        </div>
        <div className="flex gap-2 pt-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => onPause?.(id)}
            data-testid={`button-pause-${id}`}
          >
            <Pause className="h-4 w-4 mr-2" />
            {status === "active" ? "Pause" : "Resume"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => onCancel?.(id)}
            data-testid={`button-cancel-${id}`}
          >
            <X className="h-4 w-4 mr-2" />
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
