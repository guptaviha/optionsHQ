"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button";

export type Options = {
  id: number
  symbol: Text
  ticker: Text
  expiration_date: Date
  target_price: number
  transaction_date: Date
  type: "call" | "put"
  quantity: number
  contract_price: number
  total_amount: number
  action: "buy" | "sell"
  commission_and_fees: number
  account_name: string
}

export const columns: ColumnDef<Options>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "symbol",
    header: "Symbol",
  },
  {
    accessorKey: "ticker",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "expiration_date",
    header: "Expiration Date",
  },
  {
    accessorKey: "target_price",
    header: "Target Price",
  },
  {
    accessorKey: "transaction_date",
    header: "Transaction Date",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "contract_price",
    header: "Contract Price",
  },
  {
    accessorKey: "total_amount",
    header: "Total Amount",
  },
  {
    accessorKey: "action",
    header: "Action",
  },
  {
    accessorKey: "commission_and_fees",
    header: "Commission and Fees",
  },
  {
    accessorKey: "account_name",
    header: "Account Name",
  },
]
