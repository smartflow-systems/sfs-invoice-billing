import { useState } from "react";
import { ExpenseCard } from "@/components/expense-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Expenses() {
  // todo: remove mock functionality
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [mockExpenses] = useState([
    {
      id: "1",
      description: "Office Supplies - Q1 2024",
      amount: "$245.50",
      date: "Jan 15, 2024",
      category: "Supplies",
    },
    {
      id: "2",
      description: "Software Subscription - Adobe Creative Cloud",
      amount: "$52.99",
      date: "Jan 5, 2024",
      category: "Software",
    },
    {
      id: "3",
      description: "Client Lunch Meeting",
      amount: "$127.80",
      date: "Jan 18, 2024",
      category: "Meals",
    },
    {
      id: "4",
      description: "Internet Service - January",
      amount: "$89.99",
      date: "Jan 1, 2024",
      category: "Utilities",
    },
    {
      id: "5",
      description: "Marketing - Google Ads Campaign",
      amount: "$450.00",
      date: "Jan 20, 2024",
      category: "Marketing",
    },
    {
      id: "6",
      description: "Office Rent - January",
      amount: "$1,800.00",
      date: "Jan 1, 2024",
      category: "Rent",
    },
  ]);

  const categoryTotals = mockExpenses.reduce((acc, expense) => {
    const amount = parseFloat(expense.amount.replace(/[$,]/g, ""));
    acc[expense.category] = (acc[expense.category] || 0) + amount;
    return acc;
  }, {} as Record<string, number>);

  const filteredExpenses = mockExpenses.filter((expense) => {
    const matchesSearch = expense.description
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || expense.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Expenses</h1>
          <p className="text-muted-foreground mt-1">
            Track and categorize your business expenses
          </p>
        </div>
        <Button data-testid="button-add-expense">
          <Plus className="h-4 w-4 mr-2" />
          Add Expense
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Object.entries(categoryTotals).map(([category, total]) => (
          <Card key={category}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-mono font-semibold">
                ${total.toFixed(2)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search expenses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
            data-testid="input-search-expenses"
          />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-[180px]" data-testid="select-category-filter">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Supplies">Supplies</SelectItem>
            <SelectItem value="Software">Software</SelectItem>
            <SelectItem value="Meals">Meals</SelectItem>
            <SelectItem value="Utilities">Utilities</SelectItem>
            <SelectItem value="Marketing">Marketing</SelectItem>
            <SelectItem value="Rent">Rent</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        {filteredExpenses.map((expense) => (
          <ExpenseCard
            key={expense.id}
            {...expense}
            onEdit={(id) => console.log("Edit expense:", id)}
            onDelete={(id) => console.log("Delete expense:", id)}
          />
        ))}
      </div>
    </div>
  );
}
