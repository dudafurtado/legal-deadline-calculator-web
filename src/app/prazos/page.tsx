import { TableDeadline } from "@/components/TableDeadlines";

export default function Holidays() {
  return (
    <article className="m-8">
      <h1>Prazos</h1>
      <p>
        O resultado da sua pesquisa de prazo de 5 dias a partir do dia
        23/08/2020 do estado da Bahia e município de Salvador tem o prazo fatal
        no dia 30/08/2021.
      </p>
      <TableDeadline />
    </article>
  );
}
