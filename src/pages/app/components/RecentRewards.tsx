import { useEffect, useState } from "react";
import { FiGift } from "react-icons/fi";
import { getStoredUser } from "../../../types/user";
import { listUserRewards } from "../../../services/rewardService";

interface Recompensa {
    id: number;
    idInventario: number;
    nomeItem: string;
    raridade: string;
    descricao: string;
}

function RecentRewards() {
    const [recompensas, setRecompensas] = useState<Recompensa[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const user = getStoredUser();

    useEffect(() => {
        const controller = new AbortController();
        const fetchRecompensas = async () => {
            if (user?.id === undefined) {
                setIsLoading(false);
                setErrorMessage("Não foi possível identificar o usuário.");
                return;
            }

            try {
                const response = await listUserRewards(user.id, controller.signal);

                if (response.status === 204) {
                    setRecompensas([]);
                } else if (response.ok) {
                    const data: Recompensa[] = await response.json();
                    setRecompensas(data);
                } else {
                    throw new Error(`Erro ao buscar recompensas: ${response.status}`);
                }
            } catch (error) {
                if (error instanceof DOMException && error.name === "AbortError") {
                    return;
                }

                console.error("Não foi possível carregar as recompensas recentes.", error);
                setErrorMessage("Não foi possível carregar as recompensas recentes.");
            } finally {
                if (!controller.signal.aborted) {
                    setIsLoading(false);
                }
            }
        };

        void fetchRecompensas();
        return () => controller.abort();
    }, [user?.id]);

    return (
        <section aria-labelledby="recent-rewards-title" className="mb-20">
            <div className="mb-3 flex items-center justify-between">
                <h2 id="recent-rewards-title" className="text-lg font-bold text-slate-800">
                    Recompensas recentes
                </h2>
                <span className="text-[0.65rem] font-semibold tracking-wide text-slate-500">INVENTÁRIO</span>
            </div>

            {isLoading ? (
                <p className="rounded-2xl bg-white p-6 text-center text-sm text-slate-500 shadow-sm">
                    Carregando recompensas...
                </p>
            ) : errorMessage ? (
                <p className="rounded-2xl bg-red-50 p-6 text-center text-sm font-semibold text-red-600" role="alert">
                    {errorMessage}
                </p>
            ) : recompensas.length === 0 ? (
                <p className="rounded-2xl bg-white p-6 text-center text-sm text-slate-500 shadow-sm">
                    Nenhuma recompensa ganha recentemente.
                </p>
            ) : (
                <div className="flex gap-4 overflow-x-auto pb-3" aria-label="Recompensas recentes ganhas">
                    {recompensas.map((recompensa) => (
                        <article
                            key={recompensa.id}
                            className="min-w-64 max-w-64 shrink-0 rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
                        >
                            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-xl text-emerald-600">
                                <FiGift aria-hidden="true" />
                            </span>
                            <p className="mt-4 text-[0.65rem] font-bold uppercase tracking-wide text-emerald-600">
                                {recompensa.raridade}
                            </p>
                            <h3 className="mt-1 text-base font-bold text-slate-800">{recompensa.nomeItem}</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-500">{recompensa.descricao}</p>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}

export default RecentRewards;
