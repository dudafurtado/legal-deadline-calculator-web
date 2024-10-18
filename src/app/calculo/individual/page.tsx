"use client";

import { DatePicker } from "@/components/DatePicker";
import Menu from "@/components/Menu";
import { SelectCity } from "@/components/SelectCity";
import { SelectState } from "@/components/SelectState";
import { SelectTerm } from "@/components/SelectTerm";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useMyContext from "@/hooks/useMyContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function IndividualCalculator() {
  const { cities } = useMyContext();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <article className="m-6">
      <Menu />
      <main className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-2xl font-bold mb-2">
          Cálculo Individual de Prazo:
        </h1>
        <Form {...form}>
          <form className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="font-semibold">
                    Data de início
                  </FormLabel>
                  <FormControl>
                    <DatePicker
                      value={field.value ? new Date(field.value) : undefined}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormDescription>
                    A partir de qual data o cálculo deve ser feito?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="font-semibold">Tipo de Prazo</FormLabel>
                  <FormControl>
                    <SelectTerm value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormDescription>
                    Quantos dias devem ser contados?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="font-semibold">Estado</FormLabel>
                  <FormControl>
                    <SelectState
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormDescription>
                    De qual estado devem ser verificados os feriados?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {cities.length !== 0 && (
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="font-semibold">Cidade</FormLabel>
                    <FormControl>
                      <SelectCity
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormDescription>
                      Devemos verificar também feriados municipais?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <Button type="submit" className="w-full">
              Calcular
            </Button>
          </form>
        </Form>
      </main>
    </article>
  );
}
