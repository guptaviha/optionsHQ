import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import { getRecord } from '@/utils/neon/server';


async function getData(): Promise<Payment[]> {
  const data = await getRecord() || [];
  return [
    {
      id: data[0].id
      , symbol: data[0].symbol
      , ticker: data[0].ticker
      , expiration_date: data[0].expiration_date
      , target_price: data[0].target_price
      , transaction_date: new Date("2025-03-01T05:00:00.000Z")
      , type: data[0].type
      , quantity: data[0].quantity
      , contract_price: data[0].contract_price
      , total_amount: data[0].total_amount
      , action: data[0].action
      , commission_and_fees: data[0].commission_and_fees
      , account_name: data[0].account_name
    },
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
