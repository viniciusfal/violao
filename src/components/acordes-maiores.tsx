"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

export function AcordesMaiores() {
  const data = [
    {
      rep: "C",
      nome: "Dó"
    },
    {
      rep: "D",
      nome: "Ré"
    },
    {
      rep: "E",
      nome: "Mi"
    },
    {
      rep: "F",
      nome: "Fá"
    },
    {
      rep: "G",
      nome: "Sol"
    },
    {
      rep: "A",
      nome: "Lá"
    },
    {
      rep: "B",
      nome: "Si"
    }
  ]


  return (
    <Table>
      <TableHeader className="bg-primary">
        <TableRow className="hover:bg-primary">
          <TableHead className="text-center text-muted ">Cifra</TableHead>
          <TableHead className="text-center text-muted">Nome do Acorde</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((d, i) =>
          <TableRow key={i} className="even:bg-slate-200 hover:even:bg-slate-200">
            <TableCell className="text-center">{d.rep}</TableCell>
            <TableCell className="text-center">{d.nome}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}