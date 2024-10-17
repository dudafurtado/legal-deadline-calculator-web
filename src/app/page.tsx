import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import PpIcon from "@/assets/pp-icon.webp";

export default function Home() {
  return (
    <article className="w-screen h-screen bg-black p-6">
      <main className="flex flex-col items-center justify-center">
        <Image src={PpIcon} alt={""} width={600} height={350} />
        <p></p>
        <Button variant="outline" className="w-1/2" asChild>
          <Link href="/login">Login</Link>
        </Button>
      </main>
    </article>
  );
}
