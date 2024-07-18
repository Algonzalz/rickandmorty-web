import { columns, Episodes } from "./columns";
import { DataTable } from "./data-table";



async function getEpisodes(): Promise<Episodes[]> {

    const response = await fetch('https://rickandmortyapi.com/api/episode');

    const data = response.json()
    return data
}

export default async function Page() {

    const data = await getEpisodes() as any;

    return (
        <>
            <div className="flex items-center justify-center">
                <h1 className="text-4xl font-bold tracking-tight text-emerald-300 ">Episodios</h1>
            </div>
            <DataTable columns={columns} data={data.results} />

        </>
    );
}