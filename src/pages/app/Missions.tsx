import { useEffect, useState } from "react";
import { BsShop } from "react-icons/bs";
import { FiSliders } from "react-icons/fi";
import { PiLeafFill } from "react-icons/pi";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TopBar from "./components/TopBar";
import MissionCard, { type MissionCardData } from "./components/MissionCard";
import MissionCompletionModal from "./components/modal/MissionCompletionModal";
import CreateMissionModal, { type CreateMissionPayload } from "./components/modal/CreateMissionModal";
import { getStoredUser } from "../../types/user";

type MissionCategory = "sustainable" | "local";

interface ApiMission {
    id?: number;
    idMissao?: number;
    idComercio?: number;
    nome?: string;
    name?: string;
    descricao?: string;
    description?: string;
    pontosRecompensa?: number;
    pontos?: number;
    nomeComercio?: string;
}

function mapMission(mission: ApiMission, category: MissionCategory): MissionCardData {
    return {
        id: mission.id ?? mission.idMissao ?? 0,
        title: mission.nome ?? mission.name ?? "Missão",
        description: mission.descricao ?? mission.description ?? "",
        points: mission.pontosRecompensa ?? mission.pontos ?? 0,
        comercio: mission.nomeComercio,
        icon: category === "local" ? BsShop : PiLeafFill,
        iconClassName: category === "local" ? "bg-indigo-50 text-indigo-600" : "bg-emerald-50 text-emerald-600",
    };
}

function Missions() {
    const [activeCategory, setActiveCategory] = useState<MissionCategory>("sustainable");
    const [missionList, setMissionList] = useState<MissionCardData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [completedMissionIds, setCompletedMissionIds] = useState<number[]>([]);
    const [selectedMissionId, setSelectedMissionId] = useState<number | null>(null);
    const [isConfirming, setIsConfirming] = useState(false);
    const [isCreateMissionModalOpen, setIsCreateMissionModalOpen] = useState(false);
    const [isCreatingMission, setIsCreatingMission] = useState(false);
    const [createErrorMessage, setCreateErrorMessage] = useState("");
    const [missionsVersion, setMissionsVersion] = useState(0);
    const user = getStoredUser();

    const selectedMission = missionList.find((mission) => mission.id === selectedMissionId);

    useEffect(() => {
        const controller = new AbortController();
        const fetchMissions = async () => {
            setIsLoading(true);
            setErrorMessage("");
            try {
                const endpoint = activeCategory === "sustainable" ? "/missoes/padroes" : "/missoes/comercio";
                const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, { signal: controller.signal });

                if (response.status === 204) {
                    setMissionList([]);
                } else if (response.ok) {
                    const data: ApiMission[] = await response.json();
                    setMissionList(data.map((mission) => mapMission(mission, activeCategory)));
                } else {
                    throw new Error(`Erro ao buscar missões: ${response.status}`);
                }
            } catch (error) {
                if (error instanceof DOMException && error.name === "AbortError") {
                    return;
                }
                console.error("Não foi possível carregar as missões.", error);
                setErrorMessage("Não foi possível carregar as missões.");
                setMissionList([]);
            } finally {
                if (!controller.signal.aborted) {
                    setIsLoading(false);
                }
            }
        };

        void fetchMissions();
        return () => controller.abort();
    }, [activeCategory, missionsVersion]);

    const handleCompleteMission = (missionId: number) => {
        if (completedMissionIds.includes(missionId)) {
            return;
        }

        setSelectedMissionId(missionId);
    };

    const handleConfirmCompletion = () => {
        if (!selectedMission || isConfirming) {
            return;
        }

        if (!user?.id) {
            setErrorMessage("Não foi possível identificar o usuário.");
            return;
        }

        setIsConfirming(true);
        void fetch(`${import.meta.env.VITE_API_URL}/missoes/concluir/${user.id}/${selectedMission.id}`, {
            method: "POST",
        }).then((response) => {
            if (!response.ok) {
                throw new Error(`Erro ao concluir missão: ${response.status}`);
            }
            setCompletedMissionIds((completedIds) => [...completedIds, selectedMission.id]);
            setSelectedMissionId(null);
        }).catch((error: unknown) => {
            console.error("Não foi possível concluir a missão.", error);
            setErrorMessage("Não foi possível concluir a missão.");
        }).finally(() => setIsConfirming(false));
    };

    const handleCreateMission = async (payload: CreateMissionPayload) => {
        setIsCreatingMission(true);
        setCreateErrorMessage("");
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/missoes`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    idComercio: payload.idComercio,
                    nome: payload.name,
                    descricao: payload.description,
                    pontosRecompensa: payload.ecopoints,
                }),
            });

            if (!response.ok) {
                throw new Error(`Erro ao criar missão: ${response.status}`);
            }

            setIsCreateMissionModalOpen(false);
            setMissionsVersion((version) => version + 1);
            setActiveCategory("local");
        } catch (error) {
            console.error("Não foi possível criar a missão.", error);
            setCreateErrorMessage("Não foi possível criar a missão.");
        } finally {
            setIsCreatingMission(false);
        }
    };

    return (
        <div className="flex min-h-screen flex-col bg-gray-50 font-['Montserrat',sans-serif] text-slate-800">
            <Header />
            <div className="pt-18">
                <TopBar />
                <main className="content-fade-in mx-auto mt-6 w-full max-w-4xl flex-1 px-4 pb-16 pt-16 sm:px-6">
                    <div className="mb-8 flex items-start justify-between gap-4">
                        <div>
                            <h1 className="text-2xl font-bold text-blue-900 sm:text-3xl">Missões Disponíveis</h1>
                            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                                Complete desafios ecológicos e apoie comerciantes da sua região para subir de nível!
                            </p>
                        </div>
                        <div className="flex shrink-0 items-center gap-2">
                            <button
                                type="button"
                                onClick={() => setIsCreateMissionModalOpen(true)}
                                className="rounded-full bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-blue-700 sm:px-5 sm:text-sm"
                            >
                                Criar Missão
                            </button>
                            <button
                                type="button"
                                aria-label="Filtrar missões"
                                className="rounded-full bg-white p-3 text-blue-600 shadow-sm transition hover:bg-blue-50"
                            >
                                <FiSliders aria-hidden="true" />
                            </button>
                        </div>
                    </div>

                    <div className="mb-6 flex w-full max-w-md rounded-full bg-blue-100 p-1" role="tablist" aria-label="Categorias de missões">
                        <button
                            type="button"
                            role="tab"
                            aria-selected={activeCategory === "sustainable"}
                            onClick={() => setActiveCategory("sustainable")}
                            className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition ${
                                activeCategory === "sustainable" ? "bg-blue-600 text-white shadow-sm" : "text-blue-900 hover:bg-white/70"
                            }`}
                        >
                            <PiLeafFill aria-hidden="true" />
                            Sustentáveis
                        </button>
                        <button
                            type="button"
                            role="tab"
                            aria-selected={activeCategory === "local"}
                            onClick={() => setActiveCategory("local")}
                            className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition ${
                                activeCategory === "local" ? "bg-blue-600 text-white shadow-sm" : "text-blue-900 hover:bg-white/70"
                            }`}
                        >
                            <BsShop aria-hidden="true" />
                            Comércio Local
                        </button>
                    </div>

                    <div className="space-y-4" role="tabpanel">
                        {isLoading ? (
                            <p className="rounded-xl bg-white p-8 text-center text-slate-500">Carregando missões...</p>
                        ) : errorMessage ? (
                            <p className="rounded-xl bg-red-50 p-8 text-center font-semibold text-red-600" role="alert">{errorMessage}</p>
                        ) : missionList.length === 0 ? (
                            <p className="rounded-xl bg-white p-8 text-center text-slate-500">Nenhuma missão disponível nesta categoria.</p>
                        ) : missionList.map((mission) => (
                            <MissionCard
                                key={mission.id}
                                mission={mission}
                                isCompleted={completedMissionIds.includes(mission.id)}
                                onComplete={() => handleCompleteMission(mission.id)}
                            />
                        ))}
                    </div>
                </main>
            </div>
            <Footer />
            {selectedMission && (
                <MissionCompletionModal
                    mission={selectedMission}
                    isConfirming={isConfirming}
                    onConfirm={handleConfirmCompletion}
                    onClose={() => {
                        if (!isConfirming) {
                            setSelectedMissionId(null);
                        }
                    }}
                />
            )}
            {isCreateMissionModalOpen && (
                <CreateMissionModal
                    onSubmit={handleCreateMission}
                    onClose={() => setIsCreateMissionModalOpen(false)}
                    isSubmitting={isCreatingMission}
                    errorMessage={createErrorMessage}
                />
            )}
        </div>
    );
}

export default Missions;
