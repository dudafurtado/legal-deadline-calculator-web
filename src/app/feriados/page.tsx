import Menu from "@/components/Menu";
import { Modal } from "@/components/Modal";
import { PaginationTable } from "@/components/Pagination";
import { SelectInput } from "@/components/SelectState";
import { TableHolidays } from "@/components/TableHolidays";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Holidays() {
  return (
    <article className="flex flex-col gap-8 m-8">
      <Menu />

      <main className="flex flex-col items-center justify-center gap-8">
        <section className="w-full flex justify-between">
          <h1 className="text-2xl font-bold">Feriados</h1>
          <Modal />
        </section>

        <p className="text-justify">
          Essa listagem contém por padrão todos os feriados nacionais e
          estaduais. Já em relação aos municipais estão separados a partir dos
          10 mais utilizados para consultas de prazos. Caso queira editar o
          conteúdo do feriado ou deletar clique nos botões da tabela.
        </p>

        <section className="w-full flex justify-between gap-4">
          <Input type="text" placeholder="Escreva o nome de um feriado" />
          <SelectInput />
          <Button type="submit">Pesquisar</Button>
        </section>

        <TableHolidays />
        <PaginationTable />
      </main>
    </article>
  );
}
