
import Link from "next/link";

const links = [
    { name: "Personajes", href: "characters" },
    { name: "Episodios", href: "episodes" },
];

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-gradient-to-b from-[#0b1e2d] to-[#1c4b72] px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md w-full space-y-8">
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl font-bold tracking-tight text-[#9df39f]">Rick and Morty</h1>
                </div>
                <div className="bg-[#1c4b72] rounded-lg shadow-lg p-8 space-y-6">
                    <div>
                        {children}
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}
        // <>
        //     <main>


        //         <div className="pt-6 px-4">
        //             <div className="w-full min-h-[calc(100vh-230px)]">
        //                 <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
        //                     {children}
        //                 </div>
        //             </div>
        //         </div>
        //     </main>
        // </>
