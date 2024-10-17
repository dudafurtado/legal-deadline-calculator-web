"use client";

import Menu from "@/components/Menu";
import { Modal } from "@/components/Modal";
import { PaginationTable } from "@/components/Pagination";
import { SelectInput } from "@/components/SelectState";
import { TableHolidays } from "@/components/TableHolidays";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { searchHolidaySchema } from "@/validations/holidaySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { listHolidays } from "@/services/holidayRequests";

export default function Holidays() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof searchHolidaySchema>>({
    resolver: zodResolver(searchHolidaySchema),
    defaultValues: {
      search: "",
      state_id: 1,
    },
  });

  async function onSubmit(values: z.infer<typeof searchHolidaySchema>) {
    await listHolidays(values);
    toast({
      description: "Pesquisa na Listagem de Feriados Efetuada com Sucesso.",
    });
    return form.reset();
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
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Escreva o nome de um feriado"
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
                  <FormControl>
                    <SelectInput />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-4/12">
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
