import { StatsCard } from "../stats-card";
import { DollarSign } from "lucide-react";

export default function StatsCardExample() {
  return (
    <StatsCard
      title="Revenue This Month"
      value="$12,450"
      icon={DollarSign}
      trend={{ value: "12%", isPositive: true }}
    />
  );
}
