"use client";

import { DatePicker } from "@/components/DatePicker";
import Menu from "@/components/Menu";
import { SelectInput } from "@/components/SelectState";
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
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function IndividualCalculator() {
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
              // control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="font-semibold">
                    Data de início
                  </FormLabel>
                  <FormControl>
                    {/* <Input placeholder="22/07/2030" {...field} /> */}
                    <DatePicker />
                  </FormControl>
                  <FormDescription>
                    A partir de qual data o cálculo deve ser feito?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              // control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="font-semibold">Tipo de Prazo</FormLabel>
                  <FormControl>
                    <SelectInput />
                  </FormControl>
                  <FormDescription>
                    Quantos dias devem ser contados?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              // control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="font-semibold">Estado</FormLabel>
                  <FormControl>
                    <SelectInput />
                  </FormControl>
                  <FormDescription>
                    De qual estado devem ser verificados os feriados?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              // control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="font-semibold">Cidade</FormLabel>
                  <FormControl>
                    <SelectInput />
                  </FormControl>
                  <FormDescription>
                    Devemos verificar também feriados municipais?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Calcular
            </Button>
          </form>
        </Form>
      </main>
    </article>
  );
}
