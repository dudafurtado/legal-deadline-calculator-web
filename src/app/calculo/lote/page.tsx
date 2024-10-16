import Menu from "@/components/Menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function BatchCalculator() {
  return (
    <article className="flex flex-col gap-8 m-8">
      <Menu />
      <main className=" flex flex-col items-center justify-center gap-8">
        <h1 className="text-2xl font-bold mb-2">Cálculo em Lote de Prazos:</h1>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture" className="font-semibold">
            Arquivo Excel
          </Label>
          <Input id="picture" type="file" />
        </div>
        <Button type="submit" className="w-5/12">
          Calcular
        </Button>
      </main>
    </article>
  );
}
