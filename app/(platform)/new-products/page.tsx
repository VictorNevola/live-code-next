"use client"

import { useFormState } from "react-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { saveProducts } from "./actions/save-products";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DataTable } from "@/components/implemented/data-table";

export default function Page() {

  const [state, formAction] = useFormState(saveProducts, { products: [], invalidProducts: [] });

  console.log('state', state)

  return (
    <div className="p-6">
      <form action={formAction}>
        <label htmlFor="products-csv" className="block">Insert CSV</label>
        <Input type="file" name="products-csv" className="block" />
        <Button type="submit" className="mt-3">
          Enviar
        </Button>
      </form>

      <div className="mt-6">

        <Table>
          <TableHead>
            <TableRow>
              id
            </TableRow>

            <TableRow>
              name
            </TableRow>

            <TableRow>
              ean
            </TableRow>

            <TableRow>
              stock
            </TableRow>

            <TableRow>
              price
            </TableRow>
          </TableHead>
        </Table>

      </div>
    </div>
  )
}