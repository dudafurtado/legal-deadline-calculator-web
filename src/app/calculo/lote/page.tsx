import Menu from "@/components/Menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function BatchCalculator() {
  return (
    <article className="flex flex-col gap-8 m-8">
      <Menu />

      <main className="w-full flex items-center justify-center">
        <section className="lg:w-4/12 sm:w-7/12 flex flex-col items-center justify-center gap-8">
          <h1 className="text-2xl font-bold mb-2">
            Cálculo em Lote de Prazos:
          </h1>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="picture" className="font-semibold">
              Arquivo Excel
            </Label>
            <Input id="picture" type="file" />
          </div>

          <Button type="submit" className="w-full">
            Calcular
          </Button>
        </section>
      </main>
    </article>
  );
}
