"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createHolidaySchema } from "@/validations/holidaySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SelectState } from "../SelectState";
import { DatePicker } from "../DatePicker";
import { createHoliday } from "@/services/holidayRequests";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import useMyContext from "@/hooks/useMyContext";

export function Modal() {
  const { toast } = useToast();
  const { reloadHolidayList, setReloadHolidayList } = useMyContext();

  const form = useForm<z.infer<typeof createHolidaySchema>>({
    resolver: zodResolver(createHolidaySchema),
    defaultValues: {
      name: "",
      date: undefined,
      state_id: "",
    },
  });

  async function onSubmit(values: z.infer<typeof createHolidaySchema>) {
    const formattedDate = values.date
      ? format(new Date(values.date), "yyyy-MM-dd")
      : undefined;
    const finalValues = {
      ...values,
      date: formattedDate,
      state_id: Number(values.state_id),
    };

    await createHoliday(finalValues);
    toast({
      description: "Feriado Criado com Sucessso.",
    });
    setReloadHolidayList(!reloadHolidayList);
    return form.reset();
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Criar Novo Feriado</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Criar Novo Feriado</AlertDialogTitle>
          <AlertDialogDescription>
            Insira nome, data e estado para criar um novo feriado.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o nome do feriado" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Data</FormLabel>
                  <FormControl>
                    <DatePicker
                      value={field.value ? new Date(field.value) : undefined}
                      onChange={field.onChange}
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
                <FormItem>
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
            <AlertDialogFooter>
              <AlertDialogCancel>Fechar</AlertDialogCancel>
              <Button type="submit">Criar</Button>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
