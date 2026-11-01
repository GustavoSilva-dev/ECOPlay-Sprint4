import { useState } from "react";
import { FiBox } from "react-icons/fi";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TopBar from "./components/TopBar";
import LootboxCard from "./components/LootboxCard";
import RecompensaModal from "./components/modal/RecompensaModal";

export interface Recompensa {
    id: string;
    nome: string;
    descricao: string;
}

export interface Lootbox {
    id: string;
    nome: string;
    tipo: "COMUM" | "ÉPICA";
    preco: number;
    descricao: string;
    recompensasPossiveis: Recompensa[];
}

const lootboxes: Lootbox[] = [
    {
        id: "ecologica",
        nome: "Lootbox Ecológica",
        tipo: "COMUM",
        preco: 150,
        descricao: "Sementes, cosméticos e XP bônus",
        recompensasPossiveis: [
            { id: "sementes", nome: "Kit de sementes", descricao: "Um kit para começar seu próximo cultivo." },
            { id: "xp", nome: "XP bônus", descricao: "Você recebeu experiência extra para subir de nível." },
        ],
    },
    {
        id: "lendaria",
        nome: "Baú Lendário Eco",
        tipo: "ÉPICA",
        preco: 750,
        descricao: "Vouchers de compras & badges raras",
        recompensasPossiveis: [
            { id: "voucher", nome: "Voucher de comércio local", descricao: "Um voucher especial para usar em um parceiro ECOPlay." },
            { id: "badge", nome: "Badge Guardião ECO", descricao: "Uma badge rara foi adicionada ao seu perfil." },
        ],
    },
];

function Lootboxes() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedReward, setSelectedReward] = useState<Recompensa | null>(null);

    const handleAbrirLootbox = (lootboxId: string) => {
        const lootbox = lootboxes.find((item) => item.id === lootboxId);

        if (!lootbox) {
            return;
        }

        // TODO: Chamar API (POST) para registrar a compra da lootbox, deduzir saldo e retornar a recompensa gerada pelo backend
        const rewardIndex = Math.floor(Math.random() * lootbox.recompensasPossiveis.length);
        setSelectedReward(lootbox.recompensasPossiveis[rewardIndex]);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedReward(null);
    };

    return (
        <div className="flex min-h-screen flex-col bg-gray-50 font-['Montserrat',sans-serif] text-slate-800">
            <Header />
            <div className="pt-18">
                <TopBar />
                <main className="content-fade-in mx-auto mt-6 w-full max-w-5xl flex-1 px-4 pb-16 pt-16 sm:px-6">
                    <div className="mb-8 flex items-end justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-2xl text-indigo-600">
                                <FiBox aria-hidden="true" />
                            </span>
                            <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl">Recompensas e Lootboxes</h1>
                        </div>
                        <span className="shrink-0 text-[0.65rem] font-semibold tracking-wide text-gray-400">ROLE LATERALMENTE</span>
                    </div>

                    <div className="flex gap-6 overflow-x-auto pb-4" aria-label="Lootboxes disponíveis">
                        {lootboxes.map((lootbox) => (
                            <LootboxCard
                                key={lootbox.id}
                                lootbox={lootbox}
                                onAcquire={() => handleAbrirLootbox(lootbox.id)}
                            />
                        ))}
                    </div>
                </main>
            </div>
            <Footer />
            {isModalOpen && selectedReward && (
                <RecompensaModal recompensa={selectedReward} onClose={handleCloseModal} />
            )}
        </div>
    );
}

export default Lootboxes;
