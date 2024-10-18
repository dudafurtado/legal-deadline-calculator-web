import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import PpIcon from "@/assets/pp-icon.webp";

export default function Home() {
  return (
    <article className="w-screen h-screen flex items-center justify-center bg-blueDark p-6">
      <main className="flex flex-col items-center justify-center">
        <Image src={PpIcon} alt={""} width={400} height={300} />
        <h1 className="text-2xl font-bold text-white mb-10 ">
          Calculadora de Prazos
        </h1>
        <Button
          variant="outline"
          className="lg:w-4/12 md:w-5/12 sm:w-6/12 font-semibold"
          asChild
        >
          <Link href="/login">Login</Link>
        </Button>
      </main>
    </article>
  );
}
