import { Options, columns } from "./columns"
import { DataTable } from "./data-table"
import { getRecord } from '@/utils/neon/server';


async function getData(): Promise<Options[]> {
  const data = await getRecord() || [];
  const optionsData = [];
  data.forEach(data => {
    optionsData.push({
      id: data.id
      , symbol: data.symbol
      , ticker: data.ticker
      , expiration_date: data.expiration_date.toLocaleDateString()
      , target_price: data.target_price
      , transaction_date: data.transaction_date.toLocaleDateString()
      , type: data.type
      , quantity: data.quantity
      , contract_price: data.contract_price
      , total_amount: data.total_amount
      , action: data.action
      , commission_and_fees: data.commission_and_fees
      , account_name: data.account_name
    });
  });
  return optionsData;
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div>
      <DataTable columns={columns} data={data} />
      {/* <pre>{JSON.stringify(data)}</pre> */}
    </div>
  )
}
