"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteHoliday, listHolidays } from "@/services/holidayRequests";
import { useEffect } from "react";
import TrashIcon from "@/assets/trash-icon.png";
import EditIcon from "@/assets/edit-icon.png";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import useMyContext from "@/hooks/useMyContext";

export function TableHolidays() {
  const { toast } = useToast();
  const { reloadHolidayList, setReloadHolidayList, holidays, setHolidays } =
    useMyContext();

  async function handleDeleteHoliday(holidayId: number) {
    await deleteHoliday(holidayId);
    toast({
      description: "Feriado Deletado com Sucessso.",
    });
    setReloadHolidayList(!reloadHolidayList);
    return;
  }

  useEffect(() => {
    async function loadHolidays() {
      const res = await listHolidays();

      setHolidays(res);
    }

    loadHolidays();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadHolidayList]);

  return (
    <Table>
      <TableCaption>Listagem dos feriados cadastrados no sistema.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Data</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>Editar</TableHead>
          <TableHead className="text-right">Excluir</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {holidays.map((holiday) => (
          <TableRow key={holiday.id}>
            <TableCell className="font-medium">{holiday.name}</TableCell>
            <TableCell>{holiday.date}</TableCell>
            <TableCell>{holiday.state}</TableCell>
            <TableCell>
              <Image src={EditIcon} alt={""} width={20} height={20} />
            </TableCell>
            <TableCell className="flex justify-end">
              <AlertDialog>
                <AlertDialogTrigger>
                  <Image src={TrashIcon} alt={""} width={20} height={20} />
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Deletar Feriado{" "}
                      <span className="text-red-600">{holiday.name}</span>
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Você tem certeza de que quer excluir do banco de dados o
                      feriado de nome{" "}
                      <span className="text-red-600">{holiday.name}</span>?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Não</AlertDialogCancel>
                    <AlertDialogAction
                      className="bg-red-600"
                      onClick={() => handleDeleteHoliday(holiday.id)}
                    >
                      Sim
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
