import Image from "next/image";
import maiores from "@/assets/maiores2.png"
import { ArrowDown, ArrowUp } from "lucide-react";

export function Modulo3() {
  return (
    <div>
      <div>
        <h2 className="text-xl mb-2 font-bold">Acordes Maiores</h2>
        <p className="text-xs mb-4">Nessa aula, aprenderemos um pouco sobres os acordes maiores. Como formar cada um deles no braço do violão e conseguir identificar a cifra de cada um.</p>
        <Image src={maiores} alt="Acordes maiores" />


        <h3 className="text-lg mt-4 font-semibold">Mapa</h3>
        <p className="py-1">- Acima, temos o desenho de um braço do violão com os acordes. É como se o violão estivesse em pé, e virado para você.</p>
        <p className="py-1">- Os números correspondem aos dedos da mão esquerda (Dedo 1, 2, 3 ..)</p>
        <p className="py-1">- Cada linha vertical ( | ) equivale a uma corda</p>
        <p className="py-1">- E cada linha horizontal ( - ) equivale a uma casa</p>
        <p className="py-1">- As bolinhas pretas e a seta grande não vem ao caso nessa aula</p>
        <p className="py-1">- A bolinha Branca representa apartir de qual corda devemos tocar esse acorde. (ou seja, se a bolinha branca estiver na quinta corda, eu tenho que tocar da quinta corda para baixo)</p>
      </div>


      <h3 className="text-lg my-4 font-semibold">Vamos praticar!</h3>
      <strong>Vamos praticar esses acordes, com as batidas que aprendemos na aula anterior:</strong>

      <h4 className="text-lg mt-4 font-bold">Só para baixo: Contando até 8</h4>
      <div className="flex gap-1 mt-4">
        <div className="flex flex-col items-center">
          1
          <ArrowDown />
        </div>
        <div className="flex flex-col items-center">
          2
          <ArrowDown />
        </div><div className="flex flex-col items-center">
          3
          <ArrowDown />
        </div><div className="flex flex-col items-center">
          4
          <ArrowDown />
        </div><div className="flex flex-col items-center">
          5
          <ArrowDown />
        </div><div className="flex flex-col items-center">
          6
          <ArrowDown />
        </div><div className="flex flex-col items-center">
          7
          <ArrowDown />
        </div><div className="flex flex-col items-center">
          8
          <ArrowDown />
        </div>
      </div>

      <h4 className="text-lg mt-8 font-bold">Ritimica: Contando até 8</h4>

      <div className="flex gap-1 mt-4">
        <div className="flex flex-col items-center mr-2.5">
          1
          <ArrowDown />
        </div>
        <div className="flex flex-col items-center  mr-2.5">
          2
          <ArrowDown />
        </div><div className="flex flex-col items-center">
          3
          <ArrowUp />
        </div><div className="flex flex-col items-center">
          4
          <ArrowUp />
        </div><div className="flex flex-col items-center mr-2.5">
          5
          <ArrowDown />
        </div><div className="flex flex-col items-center">
          6
          <ArrowUp />
        </div><div className="flex flex-col items-center">
          7
          <ArrowUp />
        </div><div className="flex flex-col items-center">
          8
          <ArrowDown />
        </div>
      </div>

      <footer className="mt-4">
        <span className="font-semibold text-sm">Obs: Se você aprendeu a tocar a música Deus me ama na batida só para baixo da última aula. Pratique agora nessa batida ritimica.</span>
        <p className="text-sm mt-4">Espero todos na nossa Áula de Sábado: ás 16h! Deus abençõe!!</p>
      </footer>
    </div>
  )
}