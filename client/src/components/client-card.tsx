import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ClientCardProps {
  id: string;
  name: string;
  email: string;
  phone?: string;
  totalInvoices: number;
  outstandingAmount: string;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export function ClientCard({
  id,
  name,
  email,
  phone,
  totalInvoices,
  outstandingAmount,
  onEdit,
  onDelete,
}: ClientCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card data-testid={`card-client-${id}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-base font-semibold" data-testid={`text-client-name-${id}`}>{name}</CardTitle>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" data-testid={`button-client-actions-${id}`}>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onEdit?.(id)} data-testid={`button-edit-client-${id}`}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onDelete?.(id)} className="text-destructive" data-testid={`button-delete-client-${id}`}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground" data-testid={`text-client-email-${id}`}>{email}</span>
          </div>
          {phone && (
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground" data-testid={`text-client-phone-${id}`}>{phone}</span>
            </div>
          )}
        </div>
        <div className="flex justify-between pt-2 border-t">
          <div>
            <p className="text-xs text-muted-foreground">Total Invoices</p>
            <p className="text-sm font-semibold" data-testid={`text-total-invoices-${id}`}>{totalInvoices}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Outstanding</p>
            <p className="text-sm font-mono font-semibold" data-testid={`text-outstanding-${id}`}>{outstandingAmount}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
