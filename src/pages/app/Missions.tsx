import { useState } from "react";
import { BsShop } from "react-icons/bs";
import { FiSliders } from "react-icons/fi";
import { PiLeafFill, PiPlantFill } from "react-icons/pi";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TopBar from "./components/TopBar";
import MissionCard, { type MissionCardData } from "./components/MissionCard";
import MissionCompletionModal from "./components/modal/MissionCompletionModal";
import CreateMissionModal, { type CreateMissionPayload } from "./components/modal/CreateMissionModal";

type MissionCategory = "sustainable" | "local";

const missions: Record<MissionCategory, MissionCardData[]> = {
    sustainable: [
        {
            id: 1,
            title: "Plante ou cuide de uma muda",
            description: "Ajude uma planta a crescer e registre sua evolução.",
            points: 60,
            icon: PiPlantFill,
            iconClassName: "bg-emerald-50 text-emerald-600",
        },
        {
            id: 2,
            title: "Limpe o ambiente",
            description: "Recolha resíduos em um espaço público próximo de você.",
            points: 20,
            icon: PiLeafFill,
            iconClassName: "bg-green-50 text-green-600",
        },
        {
            id: 3,
            title: "Separe seus recicláveis",
            description: "Faça a separação correta dos materiais recicláveis da sua casa.",
            points: 40,
            icon: PiLeafFill,
            iconClassName: "bg-lime-50 text-lime-600",
        },
    ],
    local: [
        {
            id: 4,
            title: "Compre de um comércio local",
            description: "Apoie um parceiro da sua região e compartilhe sua experiência.",
            points: 80,
            comercio: "Padaria Verde",
            icon: BsShop,
            iconClassName: "bg-indigo-50 text-indigo-600",
        },
        {
            id: 5,
            title: "Conheça um parceiro ECOPlay",
            description: "Visite um comércio participante e descubra uma nova opção sustentável.",
            points: 50,
            comercio: "Café Raiz Botânica",
            icon: BsShop,
            iconClassName: "bg-blue-50 text-blue-600",
        },
    ],
};

function Missions() {
    const [activeCategory, setActiveCategory] = useState<MissionCategory>("sustainable");
    const [completedMissionIds, setCompletedMissionIds] = useState<number[]>([]);
    const [selectedMissionId, setSelectedMissionId] = useState<number | null>(null);
    const [isConfirming, setIsConfirming] = useState(false);
    const [isCreateMissionModalOpen, setIsCreateMissionModalOpen] = useState(false);

    const selectedMission = Object.values(missions)
        .flat()
        .find((mission) => mission.id === selectedMissionId);

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

        setIsConfirming(true);
        window.setTimeout(() => {
            setCompletedMissionIds((completedIds) => [...completedIds, selectedMission.id]);
            setIsConfirming(false);
            setSelectedMissionId(null);
        }, 1000);
    };

    const handleCreateMission = (payload: CreateMissionPayload) => {
        void payload;
        setIsCreateMissionModalOpen(false);
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
                        {missions[activeCategory].map((mission) => (
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
                />
            )}
        </div>
    );
}

export default Missions;
