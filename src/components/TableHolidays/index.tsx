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
import { Holiday } from "@/interfaces/interfaces";
import { listHolidays } from "@/services/holidayRequests";
import { useEffect, useState } from "react";
import TrashIcon from "@/assets/trash-icon.png";
import EditIcon from "@/assets/edit-icon.png";
import Image from "next/image";

export function TableHolidays() {
  const [holidays, setHolidays] = useState<Holiday[]>([]);

  useEffect(() => {
    async function loadHolidays() {
      const res = await listHolidays();

      setHolidays(res);
    }

    loadHolidays();
  }, []);

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
              <Image src={TrashIcon} alt={""} width={20} height={20} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
