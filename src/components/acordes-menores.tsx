"use-client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

export function AcordesMenores() {
  const data = [
    {
      rep: "Cm",
      nome: "Dó Menor"
    },
    {
      rep: "Dm",
      nome: "Ré Menor"
    },
    {
      rep: "Em",
      nome: "Mi Menor"
    },
    {
      rep: "Fm",
      nome: "Fá Menor"
    },
    {
      rep: "Gm",
      nome: "Sol Menor"
    },
    {
      rep: "Am",
      nome: "Lá Menor"
    },
    {
      rep: "Bm",
      nome: "Si Menor"
    }
  ]


  return (
    <Table>
      <TableHeader className="bg-card-foreground">
        <TableRow className="hover:bg-card-foreground">
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