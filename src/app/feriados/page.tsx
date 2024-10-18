"use client";

import Menu from "@/components/Menu";
import { Modal } from "@/components/Modal";
import { PaginationTable } from "@/components/Pagination";
import { SelectState } from "@/components/SelectState";
import { TableHolidays } from "@/components/TableHolidays";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { searchHolidaySchema } from "@/validations/holidaySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { listHolidaysWithQuery } from "@/services/holidayRequests";
import useMyContext from "@/hooks/useMyContext";

export default function Holidays() {
  const { toast } = useToast();
  const { reloadHolidayList, setReloadHolidayList, setHolidays } =
    useMyContext();

  const form = useForm<z.infer<typeof searchHolidaySchema>>({
    resolver: zodResolver(searchHolidaySchema),
    defaultValues: {
      search: "",
      state_id: "",
    },
  });

  async function onSubmit(values: z.infer<typeof searchHolidaySchema>) {
    const res = await listHolidaysWithQuery(values);
    toast({
      description: "Pesquisa na Listagem de Feriados Efetuada com Sucesso.",
    });
    setHolidays(res);
    return;
  }

  function handleCleanForm() {
    form.reset();
    setReloadHolidayList(!reloadHolidayList);
    return;
  }

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

        <h2 className="self-start text-xl font-bold">Pesquisa do Feriado</h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex justify-center items-center space-x-8"
          >
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Feriado</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Escreva o nome do feriado"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="state_id"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Estado</FormLabel>
                  <FormControl>
                    <SelectState
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="button"
              className="w-4/12 self-end"
              onClick={() => handleCleanForm()}
            >
              Limpar Pesquisa
            </Button>

            <Button type="submit" className="w-4/12 self-end">
              Pesquisar
            </Button>
          </form>
        </Form>

        <TableHolidays />
        <PaginationTable />
      </main>
    </article>
  );
}
