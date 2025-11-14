import { useState } from "react";
import { RecurringBillingCard } from "@/components/recurring-billing-card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function RecurringBilling() {
  // todo: remove mock functionality
  const [mockSubscriptions] = useState([
    {
      id: "1",
      clientName: "Acme Corporation",
      planName: "Premium Support",
      amount: "$299/mo",
      billingCycle: "monthly" as const,
      nextPaymentDate: "Feb 1, 2024",
      status: "active" as const,
    },
    {
      id: "2",
      clientName: "TechStart Inc",
      planName: "Pro Plan",
      amount: "$199/mo",
      billingCycle: "monthly" as const,
      nextPaymentDate: "Feb 5, 2024",
      status: "active" as const,
    },
    {
      id: "3",
      clientName: "Global Solutions",
      planName: "Enterprise Package",
      amount: "$2,400/yr",
      billingCycle: "yearly" as const,
      nextPaymentDate: "Jun 15, 2024",
      status: "active" as const,
    },
    {
      id: "4",
      clientName: "StartupHub",
      planName: "Basic Plan",
      amount: "$99/mo",
      billingCycle: "monthly" as const,
      nextPaymentDate: "Feb 10, 2024",
      status: "paused" as const,
    },
    {
      id: "5",
      clientName: "Innovation Labs",
      planName: "Quarterly Retainer",
      amount: "$1,500/qtr",
      billingCycle: "quarterly" as const,
      nextPaymentDate: "Mar 1, 2024",
      status: "active" as const,
    },
    {
      id: "6",
      clientName: "Digital Ventures",
      planName: "Premium Support",
      amount: "$299/mo",
      billingCycle: "monthly" as const,
      nextPaymentDate: "Feb 8, 2024",
      status: "active" as const,
    },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Recurring Billing</h1>
          <p className="text-muted-foreground mt-1">
            Manage subscriptions and recurring payments
          </p>
        </div>
        <Button data-testid="button-create-subscription">
          <Plus className="h-4 w-4 mr-2" />
          New Subscription
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockSubscriptions.map((subscription) => (
          <RecurringBillingCard
            key={subscription.id}
            {...subscription}
            onPause={(id) => console.log("Pause subscription:", id)}
            onCancel={(id) => console.log("Cancel subscription:", id)}
          />
        ))}
      </div>
    </div>
  );
}
