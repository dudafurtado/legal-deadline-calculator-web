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
          <TableHead className="text-right">Estado</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {holidays.map((holiday) => (
          <TableRow key={holiday.id}>
            <TableCell className="font-medium">{holiday.name}</TableCell>
            <TableCell>{holiday.date}</TableCell>
            <TableCell className="text-right">{holiday.state_id}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
