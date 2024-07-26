import { Contato } from "@/_components/ui/Contato";
import { Main } from "@/_components/ui/Main";
import { Projetos } from "@/_components/ui/Projetos";
import { Sobre } from "@/_components/ui/Sobre";

export default function Home() {
  return (
    <div>
      <Main />
      <Sobre />
      <Projetos />
      <Contato />
    </div>
  );
}
