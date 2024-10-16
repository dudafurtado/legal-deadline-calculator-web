"use client";

import { DatePicker } from "@/components/DatePicker";
import Menu from "@/components/Menu";
import { SelectInput } from "@/components/SelectInput";
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

export default function Home() {
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
      <main className="flex flex-col items-center content-center">
        <h1 className="m-6">Calcule aqui o seu prazo:</h1>
        <Form {...form}>
          <form className="space-y-8">
            <FormField
              // control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Data de início</FormLabel>
                  <FormControl>
                    {/* <Input placeholder="22/07/2030" {...field} /> */}
                    <DatePicker />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              // control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Prazo</FormLabel>
                  <FormControl>
                    <SelectInput />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              // control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Estado</FormLabel>
                  <FormControl>
                    <SelectInput />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              // control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Cidade</FormLabel>
                  <FormControl>
                    <SelectInput />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Calcular</Button>
          </form>
        </Form>
      </main>
    </article>
  );
}
