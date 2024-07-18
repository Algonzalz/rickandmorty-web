import { Character, columns } from "./columns";

import { DataTable } from "./data-table";


async function  getCharacters(): Promise<Character[]> {

    const response = await fetch('https://rickandmortyapi.com/api/character');

    const data = response.json()
    return data
}

export default async function Page() {

    const data = await getCharacters();
    
    return (
        <>
            <h1>Personajes</h1>
            <DataTable columns={columns} data={data} />
            
        </>
    );
}