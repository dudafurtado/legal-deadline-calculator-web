"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";
import MenuIcon from "@/assets/menu-icon.png";
import Calculator from "@/assets/calculator-icon.png";
import SheetIcon from "@/assets/sheet-icon.png";
import DeadlineIcon from "@/assets/deadline-icon.png";
import HolidayIcon from "@/assets/holiday-icon.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Menu() {
  const router = useRouter();

  return (
    <Sheet key={"left"}>
      <SheetTrigger>
        <Image src={MenuIcon} width={30} height={30} alt={""} />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Cálculos</AccordionTrigger>
            <AccordionContent
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => router.push("/calculo/individual")}
            >
              Prazos Individuais
              <Image src={Calculator} width={30} height={30} alt={""} />
            </AccordionContent>
            <AccordionContent
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => router.push("/calculo/lote")}
            >
              Prazos em Lote
              <Image src={SheetIcon} width={30} height={30} alt={""} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Prazos</AccordionTrigger>
            <AccordionContent
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => router.push("/prazos")}
            >
              Histórico.
              <Image src={DeadlineIcon} width={30} height={30} alt={""} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Feriados</AccordionTrigger>
            <AccordionContent
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => router.push("/feriados")}
            >
              Listagem e Criação.
              <Image src={HolidayIcon} width={30} height={30} alt={""} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <SheetFooter className="w-full">
          <SheetClose asChild>
            <Button
              type="submit"
              className="w-full m-6"
              onClick={() => router.push("/")}
            >
              Sair da Aplicação
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
