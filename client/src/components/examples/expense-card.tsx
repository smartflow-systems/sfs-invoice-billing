import { ExpenseCard } from "../expense-card";

export default function ExpenseCardExample() {
  return (
    <ExpenseCard
      id="1"
      description="Office Supplies - Q1 2024"
      amount="$245.50"
      date="Jan 15, 2024"
      category="Supplies"
      onEdit={(id) => console.log("Edit expense:", id)}
      onDelete={(id) => console.log("Delete expense:", id)}
    />
  );
}
