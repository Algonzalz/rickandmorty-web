"use client"

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


export interface Episodes {
	id: number
	name: string
	air_date: string
	episode: string
}


const myCustomFilterFn: FilterFn<Episodes> = (
	row: Row<Episodes>,
	columnId: string,
	filterValue: string,
	addMeta: (meta: any) => void
) => {
	filterValue = filterValue.toLowerCase();

	const filterParts = filterValue.split(" ");
	const rowValues =
		`${row.original.name} ${row.original.episode}`.toLowerCase();

	return filterParts.every((part) => rowValues.includes(part));
};


export const columns: ColumnDef<Episodes>[] = [
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
		accessorKey: "air_date",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Fecha
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			)
		},
	},
	{
		accessorKey: "episode",
		header: "Episodio",
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
					</DropdownMenuContent>
				</DropdownMenu>
			)
		},
	},
]
