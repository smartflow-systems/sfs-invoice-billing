import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Eye, Send, Download, Trash } from "lucide-react";
import { InvoiceStatusBadge } from "./invoice-status-badge";

type InvoiceStatus = "draft" | "sent" | "paid" | "overdue";

interface Invoice {
  id: string;
  number: string;
  client: string;
  amount: string;
  date: string;
  status: InvoiceStatus;
}

interface InvoiceTableProps {
  invoices: Invoice[];
  onView?: (id: string) => void;
  onSend?: (id: string) => void;
  onDownload?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export function InvoiceTable({
  invoices,
  onView,
  onSend,
  onDownload,
  onDelete,
}: InvoiceTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice #</TableHead>
            <TableHead>Client</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id} data-testid={`row-invoice-${invoice.id}`}>
              <TableCell className="font-mono font-medium" data-testid={`text-invoice-number-${invoice.id}`}>
                {invoice.number}
              </TableCell>
              <TableCell data-testid={`text-client-${invoice.id}`}>{invoice.client}</TableCell>
              <TableCell className="text-right font-mono" data-testid={`text-amount-${invoice.id}`}>
                {invoice.amount}
              </TableCell>
              <TableCell data-testid={`text-date-${invoice.id}`}>{invoice.date}</TableCell>
              <TableCell>
                <InvoiceStatusBadge status={invoice.status} />
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" data-testid={`button-actions-${invoice.id}`}>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => onView?.(invoice.id)} data-testid={`button-view-${invoice.id}`}>
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onSend?.(invoice.id)} data-testid={`button-send-${invoice.id}`}>
                      <Send className="mr-2 h-4 w-4" />
                      Send
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onDownload?.(invoice.id)} data-testid={`button-download-${invoice.id}`}>
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onDelete?.(invoice.id)} className="text-destructive" data-testid={`button-delete-${invoice.id}`}>
                      <Trash className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
