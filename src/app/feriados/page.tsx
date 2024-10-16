import { Modal } from "@/components/Modal";
import { PaginationTable } from "@/components/Pagination";
import { SelectInput } from "@/components/SelectInput";
import { TableHolidays } from "@/components/TableHolidays";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Holidays() {
  return (
    <article className="m-8">
      <h1>Feriados</h1>
      <section className="flex w-full max-w-sm items-center space-x-2">
        <div className="w-max flex gap-2">
          <SelectInput />
          <SelectInput />
          <Button type="submit">Pesquisar</Button>
        </div>
        <Modal />
      </section>

      <TableHolidays />
      <PaginationTable />
    </article>
  );
}
