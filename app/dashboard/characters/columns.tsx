"use client"

import { Badge } from "@/components/ui/badge"
import { ColumnDef, FilterFn, Row } from "@tanstack/react-table"


import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export interface Character {
	id: number
	name: string
	status: "Alive" | "unknown" | "Dead"
	species: string
	type: string
	gender: string
}


const myCustomFilterFn: FilterFn<Character> = (
	row: Row<Character>,
	columnId: string,
	filterValue: string,
	addMeta: (meta: any) => void
) => {
	filterValue = filterValue.toLowerCase();

	const filterParts = filterValue.split(" ");
	const rowValues =
		`${row.original.type} ${row.original.name} ${row.original.gender} ${row.original.species}`.toLowerCase();

	return filterParts.every((part) => rowValues.includes(part));
};


export const columns: ColumnDef<Character>[] = [
	{
		accessorKey: "id",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					ID
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			)
		},
	},
	{
		accessorKey: "name",
		filterFn: myCustomFilterFn,
		header: "Nombre",
	},
	{
		accessorKey: "status",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Estatus
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			)
		},
		cell: ({ row }) => {
			const status = row.getValue("status") as string

			const variant = {
				Alive: "succes",
				unknown: "default",
				Dead: "destructive"
			}[status] ?? ('default') as any

			return <Badge variant={variant}>{status}</Badge>
		},
	},
	{
		accessorKey: "species",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Especie
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			)
		},
	},
	{
		accessorKey: "type",
		header: "Tipo",
	},
	{
		accessorKey: "gender",
		header: "Genero",
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const payment = row.original

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Opciones</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(payment.id.toString())}
						>
							Editar
						</DropdownMenuItem>
						<DropdownMenuItem>Cambiar el status</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)
		},
	},
]
