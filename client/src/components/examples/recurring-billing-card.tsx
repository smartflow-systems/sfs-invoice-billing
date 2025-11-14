import { RecurringBillingCard } from "../recurring-billing-card";

export default function RecurringBillingCardExample() {
  return (
    <RecurringBillingCard
      id="1"
      clientName="Acme Corporation"
      planName="Premium Support"
      amount="$299/mo"
      billingCycle="monthly"
      nextPaymentDate="Feb 1, 2024"
      status="active"
      onPause={(id) => console.log("Pause subscription:", id)}
      onCancel={(id) => console.log("Cancel subscription:", id)}
    />
  );
}
