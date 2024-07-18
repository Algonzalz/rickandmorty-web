



import { ActiveLink } from "./components/active-link/ActiveLink";
import { Logout } from "./components/logout/Logout";
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
        <>
            <nav className="bg-[#0b1e2d] border-b border-[#1c4b72] fixed z-30 w-full">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">

                            <h1 className="text-4xl font-bold tracking-tight text-emerald-300 ">Rick and Morty Web</h1>

                        </div>
                        <div className="flex items-center">
                            <Logout></Logout>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="flex overflow-hidden bg-white pt-16">
                <aside
                    id="sidebar"
                    className="fixed hidden z-20 h-full top-0 left-0 pt-16 lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
                    aria-label="Sidebar"
                >
                    <div className="relative flex-1 flex flex-col min-h-0 borderR border-gray-200 bg-white pt-0">
                        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                            <div className="flex-1 px-3 bg-white divide-y space-y-1">
                                <ul className="space-y-2 pb-2">
                                    {links.map((link) => (
                                        <li key={link.href}>
                                            <ActiveLink {...link}></ActiveLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </aside>
                <div
                    className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
                    id="sidebarBackdrop"
                ></div>
                <div
                    id="main-content"
                    className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
                >
                    <main>
                        <div className="pt-6 px-4">
                            <div className="w-full min-h-[calc(100vh-230px)]">
                                <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </main>
                    <p className="text-center text-sm text-gray-500 my-10">
                        &copy; {new Date().getFullYear()}{" "}
                        <a href="#" className="hover:underline" target="_blank">
                            Henry Gonzalez
                        </a>
                    </p>
                </div>
            </div>

        </>
    );
}