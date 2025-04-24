"use client"
import Image from "next/image";

import violao from "@/assets/violao.jpg"
import posicaoClassica from "@/assets/posicao-classica.png"
import posicaoPopular from "@/assets/posicao-popular.png"
import nomeclaturas from "@/assets/nomeclaturas.png"
import maiores from "@/assets/maiores.jpg"
import menores from "@/assets/menores.jpg"
import notas from "@/assets/notas.webp"

import { TableAula1 } from "./table-aula-1";
import { AcordesMaiores } from "./acordes-maiores";
import { AcordesMenores } from "./acordes-menores";
import { Guitar } from "lucide-react";
import { Button } from "./ui/button";

export function Modulo1() {
  return (
    <div>
      <div className="mb-12">
        <h2 className="text-xl font-bold mb-4"> 1) Apresentação do Violão</h2> <br />
        <div className="flex justify-center items-start">
          <div className="w-1/2">
            <p className="leading-6">a) Corpo</p>
            <p className="leading-6">b)	Braço</p>
            <p className="leading-6">c)	Trastes</p>
            <p className="leading-6">d)	Casas</p>
            <p className="leading-6">e)	Boca</p>
            <p className="leading-6">f)	Cordas</p>
            <p className="leading-6"> g)	Tarrachas</p>
            <p className="leading-6"> h)	Cavalete</p>
          </div>
          <div className="w-1/2">
            <Image src={violao} alt="Violão" className="rounded" />
          </div>
        </div>

      </div>
      <div className="my-12">
        <h2 className="text-xl mb-4 font-bold"> 2) Numeração das cordas</h2>
        <TableAula1 />
      </div>

      <div className="my-8">
        <h2 className="text-xl mb-4 font-bold">3) Postura</h2>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold ">Postura Classica</h3>
            <Image src={posicaoClassica} alt="Posição classica" />
          </div>

          <div className="flex flex-col items-center ">
            <h3 className="text-lg font-semibold">Postura Popular</h3>
            <Image src={posicaoPopular} alt="Posição popular" />
          </div>
        </div>
      </div>

      <div className="my-12">
        <h2 className="text-xl font-bold mb-4">4) Formas de tocar o violão</h2>
        <h3 className="text-lg font-semibold">Mão Direita</h3>
        <ul className="flex justify-between mt-2 mb-4">
          <li>a) Ritimo</li>
          <li>b) Batidas</li>
          <li>c) Dedilhados</li>
        </ul>

        <h3 className="text-lg font-semibold">Mão Esquerda</h3>
        <ul className="flex justify-around mt-2">
          <li>a) Acordes</li>
          <li>b) Notas</li>
        </ul>
      </div>

      <div className="my-12">
        <h2 className="text-xl font-bold mb-4">5) Nomeclaturas que utilizaremos</h2>
        <Image src={nomeclaturas} alt="Nomeclaturas da mão para violão" className="size-full rounded" />
      </div>

      <div className="my-12">
        <h2 className="text-xl font-bold mb-4">6) Notas Musicais</h2>
        <Image src={notas} alt="Notas Musicais" className="rounded" />
      </div>

      <div className="my-12">
        <h2 className="text-xl font-bold mb-4">7) Acordes</h2>

        <div className="">
          <Image src={maiores} alt="Acordes Maiores" className="rounded mb-2" />
          <AcordesMaiores />
        </div>

        <div>
          <Image src={menores} alt="Acordes Menores" className="rounded mb-2 mt-8" />
          <AcordesMenores />
        </div>

      </div>

      <div className="my-12">
        <div className="flex gap-1.5 items-center">
          <Guitar className="size-6" />
          <h2 className="text-xl font-bold">Hora de Praticar</h2>
        </div>

        <div className="mt-4 text-center text-bold">
          <Button className="py-6">
            <a href="https://www.cifraclub.com.br/thalles-roberto/deus-me-ama/" target="_blank">Deus me ama - Thalles Roberto (C - F)</a>
          </Button>
        </div>

      </div>
    </div >
  )
} 