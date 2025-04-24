"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";


export function TableAula1() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Corda</TableHead>
          <TableHead>Numero</TableHead>
          <TableHead>Nota (Afinação padrão)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>1º (Mizinha)</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Mi (e)</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>2º</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Si (B)</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>3º</TableCell>
          <TableCell>3</TableCell>
          <TableCell>Sol (G)</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>4ª</TableCell>
          <TableCell>4</TableCell>
          <TableCell>Ré (D)</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>5º</TableCell>
          <TableCell>5</TableCell>
          <TableCell>Lá (A)</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>6º (Mizona)</TableCell>
          <TableCell>6</TableCell>
          <TableCell>Mi (E)</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}