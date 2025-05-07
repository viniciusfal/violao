import { Header } from "@/components/header";
import { Modulo1 } from "@/components/modulo1";
import { Modulo3 } from "@/components/modulo3";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Info } from "lucide-react";

export default function Home() {
  return (
    <div className="">
      <Header />

      <main className="bg-muted h-full px-4">
        <div className="py-4 flex items-center gap-1">
          <h1 className="font-bold text-xl">Modulos do curso de violão</h1>
          <a title="Os modulos serão liberados conforme as aulas acontecerem. Fique atento!">
            <Info className="size-5" />
          </a>
        </div>
        <Accordion type="single" collapsible className="w-full mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-semibold">Detalhes</AccordionTrigger>
            <AccordionContent>
              Esta apostila foi desenvolvida para o nosso curso: e contará com os conceitos que vão desde o básico:<br /> <br />

              - Partes do violão <br />

              - Afinação <br />

              - Postura correta <br />

              - Acordes básicos <br />

              - Ritmos simples <br />

              - Exercícios para desenvolver coordenação <br />

              - Musicas <br /> <br />

              + E com o tempo avançaremos de nível para aprendermos fundamentos de toda Teoria musical, Tecnicas, Mixagem de instrumentos elétricos, e etc...
              <br />
              <br />
              obs: Os modulos das aulas serão Liberados a medida que as aulas forem avançando
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible className="w-full mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>Aula 1 - 2</AccordionTrigger>
            <AccordionContent>
              <Modulo1 />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible className="w-full mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger >Aula 3</AccordionTrigger>
            <AccordionContent>
              <Modulo3 />
            </AccordionContent>
          </AccordionItem>
        </Accordion>


        <Accordion type="single" collapsible className="w-full mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger disabled>Aula 4</AccordionTrigger>
            <AccordionContent>

            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible className="w-full mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger disabled>Aula 5</AccordionTrigger>
            <AccordionContent>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
    </div>
  );
}
