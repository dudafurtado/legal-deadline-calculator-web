import Menu from "@/components/Menu";
import { TableDeadline } from "@/components/TableDeadlines";
import { Button } from "@/components/ui/button";

export default function Holidays() {
  return (
    <article className="m-8 flex flex-col gap-8">
      <Menu />
      <main className="flex flex-col items-center justify-center gap-8">
        <section className="w-full flex justify-between">
          <h1 className="text-2xl font-bold">
            Histórico dos Cálculos de Prazo
          </h1>
          <Button type="submit">Gerar Relatório</Button>
        </section>
        <p className="text-justify">
          <span className="underline decoration-sky-500"></span>O resultado da
          sua pesquisa de
          <span className="underline decoration-pink-500">prazo de 5 dias</span>
          a partir do
          <span className="underline decoration-indigo-500">
            dia 23/08/2020
          </span>
          do
          <span className="underline decoration-sky-500">estado da Bahia</span>e
          <span className="underline decoration-pink-500">
            município de Salvador
          </span>
          tem o
          <span className="underline decoration-indigo-500">
            prazo fatal no dia 30/08/2021
          </span>
          .
        </p>
        <TableDeadline />
      </main>
    </article>
  );
}
