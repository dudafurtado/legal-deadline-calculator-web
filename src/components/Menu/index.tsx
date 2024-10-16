import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
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

export default function Menu() {
  return (
    <Sheet key={"left"}>
      <SheetTrigger>
        <Image src={MenuIcon} width={40} height={40} alt={""} />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Cálculos</AccordionTrigger>
                <AccordionContent className="flex gap-2">
                  <Image src={Calculator} width={20} height={20} alt={""} />
                  Prazos Individuais
                </AccordionContent>
                <AccordionContent className="flex gap-2">
                  <Image src={SheetIcon} width={20} height={20} alt={""} />
                  Prazos em Lote
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Prazos</AccordionTrigger>
                <AccordionContent className="flex gap-2">
                  <Image src={DeadlineIcon} width={20} height={20} alt={""} />
                  Histórico de Prazos Feitos Anteriormente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Feriados</AccordionTrigger>
                <AccordionContent className="flex gap-2">
                  <Image src={HolidayIcon} width={20} height={20} alt={""} />
                  Listagem e Criação de Feriados.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
