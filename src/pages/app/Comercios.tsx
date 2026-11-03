import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TopBar from "./components/TopBar";
import ComercioCard, { type Comercio } from "./components/ComercioCard";
import CriarComercioModal, { type CriarComercioPayload } from "./components/modal/CriarComercioModal";
import { getStoredUser } from "../../types/user";
import { createComercio, listComercios, updateComercio } from "../../services/commerceService";

const idUsuarioLogado = getStoredUser()?.id ?? null;

function Comercios() {
    const [comercios, setComercios] = useState<Comercio[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [createErrorMessage, setCreateErrorMessage] = useState("");
    const [editingComercio, setEditingComercio] = useState<Comercio | null>(null);
    const [search, setSearch] = useState("");
    const [comerciosVersion, setComerciosVersion] = useState(0);

    useEffect(() => {
        const controller = new AbortController();
        const fetchComercios = async () => {
            setIsLoading(true);
            setErrorMessage("");

            try {
                const response = await listComercios(controller.signal);

                if (response.status === 204) {
                    setComercios([]);
                } else if (response.ok) {
                    const data: Comercio[] = await response.json();
                    setComercios(data);
                } else {
                    throw new Error(`Erro ao buscar comércios: ${response.status}`);
                }
            } catch (error) {
                if (error instanceof DOMException && error.name === "AbortError") {
                    return;
                }

                console.error("Não foi possível carregar os comércios.", error);
                setErrorMessage("Não foi possível carregar os comércios.");
                setComercios([]);
            } finally {
                if (!controller.signal.aborted) {
                    setIsLoading(false);
                }
            }
        };

        void fetchComercios();
        return () => controller.abort();
    }, [comerciosVersion]);

    const handleCreateComercio = async (payload: CriarComercioPayload) => {
        if (editingComercio) {
            if (editingComercio.id === undefined || editingComercio.idUsuario !== idUsuarioLogado) {
                setCreateErrorMessage("Você só pode editar o seu comércio.");
                return;
            }

            setIsCreating(true);
            setCreateErrorMessage("");
            try {
                const response = await updateComercio({
                    ...editingComercio,
                    idUsuario: idUsuarioLogado ?? editingComercio.idUsuario,
                    idPlano: payload.idPlano,
                    nome: payload.nome,
                    planoAtivo: payload.planoAtivo,
                    cnpj: payload.cnpj,
                });

                if (!response.ok) {
                    throw new Error(`Erro ao editar comércio: ${response.status}`);
                }

                setIsModalOpen(false);
                setEditingComercio(null);
                setComerciosVersion((version) => version + 1);
            } catch (error) {
                console.error("Não foi possível editar o comércio.", error);
                setCreateErrorMessage("Não foi possível editar o comércio.");
            } finally {
                setIsCreating(false);
            }
            return;
        }

        if (idUsuarioLogado === null) {
            setCreateErrorMessage("Não foi possível identificar o usuário.");
            return;
        }

        setIsCreating(true);
        setCreateErrorMessage("");

        try {
            const response = await createComercio({
                idUsuario: idUsuarioLogado,
                idPlano: payload.idPlano,
                nome: payload.nome,
                planoAtivo: payload.planoAtivo,
                cnpj: payload.cnpj,
            });

            if (!response.ok) {
                throw new Error(`Erro ao cadastrar comércio: ${response.status}`);
            }

            setIsModalOpen(false);
            setComerciosVersion((version) => version + 1);
        } catch (error) {
            console.error("Não foi possível cadastrar o comércio.", error);
            setCreateErrorMessage("Não foi possível cadastrar o comércio.");
        } finally {
            setIsCreating(false);
        }
    };

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
                        <div className="flex w-full flex-col gap-3 sm:w-auto sm:items-end">
                            <button
                                type="button"
                                onClick={() => {
                                    setCreateErrorMessage("");
                                    setEditingComercio(null);
                                    setIsModalOpen(true);
                                }}
                                className="rounded-full bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
                            >
                                Cadastrar Comércio
                            </button>
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
                    </div>

                    {errorMessage && (
                        <p className="mb-6 rounded-xl bg-red-50 p-4 text-sm font-semibold text-red-600" role="alert">
                            {errorMessage}
                        </p>
                    )}

                    {isLoading ? (
                        <p className="rounded-2xl bg-white px-6 py-12 text-center font-semibold text-slate-500 shadow-sm">
                            Carregando comércios...
                        </p>
                    ) : filteredComercios.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                            {filteredComercios.map((comercio) => (
                                comercio.idUsuario === idUsuarioLogado ? (
                                    <ComercioCard
                                        key={comercio.id ?? comercio.cnpj}
                                        comercio={comercio}
                                        background="bg-gradient-to-b from-[#ffffff] to-[#f1fff0]"
                                        user={true}
                                        onEdit={(selectedComercio) => {
                                            setCreateErrorMessage("");
                                            setEditingComercio(selectedComercio);
                                            setIsModalOpen(true);
                                        }}
                                    />
                                ) : (
                                    <ComercioCard key={comercio.id ?? comercio.cnpj} comercio={comercio} />
                                )
                            ))}
                        </div>
                    ) : comercios.length === 0 ? (
                        <div className="rounded-2xl bg-white px-6 py-12 text-center shadow-sm">
                            <p className="font-bold text-slate-800">Nenhum comércio cadastrado.</p>
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
            {isModalOpen && (
                <CriarComercioModal
                    key={editingComercio?.id ?? "new"}
                    onSubmit={handleCreateComercio}
                    onClose={() => {
                        setIsModalOpen(false);
                        setEditingComercio(null);
                    }}
                    isSubmitting={isCreating}
                    errorMessage={createErrorMessage}
                    comercio={editingComercio ?? undefined}
                />
            )}
        </div>
    );
}

export default Comercios;
