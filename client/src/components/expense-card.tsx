import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Receipt } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ExpenseCardProps {
  id: string;
  description: string;
  amount: string;
  date: string;
  category: string;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export function ExpenseCard({
  id,
  description,
  amount,
  date,
  category,
  onEdit,
  onDelete,
}: ExpenseCardProps) {
  return (
    <Card data-testid={`card-expense-${id}`}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex gap-3 flex-1">
            <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
              <Receipt className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate" data-testid={`text-expense-description-${id}`}>{description}</p>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary" data-testid={`badge-category-${id}`}>{category}</Badge>
                <span className="text-xs text-muted-foreground" data-testid={`text-expense-date-${id}`}>{date}</span>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <p className="font-mono font-semibold" data-testid={`text-expense-amount-${id}`}>{amount}</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" data-testid={`button-expense-actions-${id}`}>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => onEdit?.(id)} data-testid={`button-edit-expense-${id}`}>
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onDelete?.(id)} className="text-destructive" data-testid={`button-delete-expense-${id}`}>
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
