import { columns } from "./columns";
import { DataTable } from "./data-table";

// async function  getCharacters() {

//     const response = fetch(`https://rickandmortyapi.com/api/character/1`, {
//         method: "GET"
//     });

//     const { data  = [] }: any = response.json();

//     const character = data.map( (info: { id: any; name: any; status: any; species: any; type: any; gender: any; }) =>({
//         id: info.id,
//         name: info.name,
//         status: info.status,
//         species: info.species,
//         type: info.type,
//         gender: info.gender,
//     }))
//     return character
// }

export default async function Page() {

    // const character = await getCharacters();

    const data = await fetch('https://rickandmortyapi.com/api/character/1').then((res) =>
        res.json()
      )

    console.log(data)
    return (
        <div>
            <h1>Personajes</h1>
            {/* <DataTable columns={columns} data={data} /> */}
            
        </div>
    );
}