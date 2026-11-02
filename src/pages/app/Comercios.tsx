import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TopBar from "./components/TopBar";
import ComercioCard, { type Comercio } from "./components/ComercioCard";

const mockComercios: Comercio[] = [
    { id: "1", nome: "Padaria Verde", categoria: "alimentacao", missoesAtivas: 2 },
    { id: "2", nome: "Feira Orgânica", categoria: "hortifruti", missoesAtivas: 1 },
    { id: "3", nome: "Café Raiz Botânica", categoria: "cafe", missoesAtivas: 3 },
    { id: "4", nome: "Mercado Circular", categoria: "alimentacao", missoesAtivas: 2 },
    { id: "5", nome: "Horta da Praça", categoria: "hortifruti", missoesAtivas: 1 },
    { id: "6", nome: "Café do Bairro", categoria: "cafe", missoesAtivas: 4 },
];

function Comercios() {
    const [comercios] = useState<Comercio[]>(mockComercios);
    const [search, setSearch] = useState("");

    const filteredComercios = comercios.filter((comercio) =>
        comercio.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
    );

    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-br from-[#fff] to-[#e1e2fe] font-['Montserrat',sans-serif] text-slate-800">
            <Header />
            <div className="pt-18">
                <TopBar />
                <main className="content-fade-in mx-auto mt-6 w-full max-w-5xl flex-1 px-4 pb-16 pt-16 sm:px-6">
                    <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-blue-900 sm:text-3xl">Comércios Locais</h1>
                            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                                Descubra parceiros, complete missões comerciais e fortaleça a economia da sua região.
                            </p>
                        </div>
                        <label className="flex w-full items-center gap-2 rounded-full bg-white px-4 py-3 text-slate-400 shadow-sm sm:max-w-xs">
                            <FiSearch aria-hidden="true" />
                            <span className="sr-only">Buscar comércio</span>
                            <input
                                type="search"
                                value={search}
                                onChange={(event) => setSearch(event.target.value)}
                                placeholder="Buscar comércio"
                                className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                            />
                        </label>
                    </div>

                    {filteredComercios.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                            {filteredComercios.map((comercio) => (
                                <ComercioCard key={comercio.id} comercio={comercio} />
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-2xl bg-white px-6 py-12 text-center shadow-sm">
                            <p className="font-bold text-slate-800">Nenhum comércio encontrado</p>
                            <p className="mt-2 text-sm text-slate-500">Tente buscar por outro nome.</p>
                        </div>
                    )}
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default Comercios;
