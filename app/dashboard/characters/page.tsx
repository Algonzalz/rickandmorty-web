import { Character, columns } from "./columns";

import { DataTable } from "./data-table";


async function getCharacters(): Promise<Character[]> {

    const response = await fetch('https://rickandmortyapi.com/api/character');

    const data = response.json()
    return data
}

export default async function Page() {

    const data = await getCharacters() as any;

    return (
        <>
            <div className="flex items-center justify-center">
                <h1 className="text-4xl font-bold tracking-tight text-emerald-300 ">Personajes</h1>
            </div>
            <DataTable columns={columns} data={data.results} />

        </>
    );
}