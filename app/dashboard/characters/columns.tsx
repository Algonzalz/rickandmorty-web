"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Character = {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
}

export const columns: ColumnDef<Character>[] = [
    {
        accessorKey: "name",
        header: "Nombre",
    },
    {
        accessorKey: "status",
        header: "Estado",
    },
    {
        accessorKey: "species",
        header: "Especie",
    },
    {
        accessorKey: "type",
        header: "Tipo",
    },
    {
        accessorKey: "gender",
        header: "Genero",
    },
]
