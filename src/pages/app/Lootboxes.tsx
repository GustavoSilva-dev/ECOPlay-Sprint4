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
    background?: string;
    tipo: "COMUM" | "INCOMUM" | "ÉPICA" | "LENDÁRIO" | "MÍTICO";
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
        nome: "Baú Épico",
        tipo: "ÉPICA",
        background: "bg-gradient-to-b from-gray-50 to-violet-200",
        preco: 750,
        descricao: "Vouchers de compras & badges raras",
        recompensasPossiveis: [
            { id: "voucher", nome: "Voucher de comércio local", descricao: "Um voucher especial para usar em um parceiro ECOPlay." },
            { id: "badge", nome: "Badge Guardião ECO", descricao: "Uma badge rara foi adicionada ao seu perfil." },
        ],
    },
    {
        id: "incomum",
        nome: "Caixa Incomum",
        tipo: "INCOMUM",
        background: "bg-gradient-to-b from-gray-50 to-lime-100",
        preco: 300,
        descricao: "Sementes especiais e itens de personalização",
        recompensasPossiveis: [
            { id: "muda", nome: "Muda especial", descricao: "Uma muda especial foi adicionada à sua coleção." },
            { id: "cosmetico", nome: "Cosmético ECO", descricao: "Você recebeu um novo item para personalizar seu perfil." },
        ],
    },
    {
        id: "lendario",
        nome: "Baú Lendário",
        tipo: "LENDÁRIO",
        background: "bg-gradient-to-b from-gray-50 to-yellow-200",
        preco: 1200,
        descricao: "Itens valiosos e recompensas de alto nível",
        recompensasPossiveis: [
            { id: "voucher-lendario", nome: "Voucher premium", descricao: "Você recebeu um voucher premium de um parceiro ECOPlay." },
            { id: "badge-lendaria", nome: "Badge Lendária", descricao: "Uma badge lendária foi adicionada ao seu perfil." },
        ],
    },
    {
        id: "mitico",
        nome: "Baú Mítico",
        tipo: "MÍTICO",
        background: "bg-gradient-to-b from-gray-50 to-rose-200",
        preco: 2500,
        descricao: "Recompensas únicas para grandes conquistas",
        recompensasPossiveis: [
            { id: "trofeu", nome: "Trofeu Mítico", descricao: "Você desbloqueou uma recompensa exclusiva." },
            { id: "xp-mitico", nome: "XP Mítico", descricao: "Você recebeu uma grande quantidade de experiência bônus." },
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
        setSelectedReward(lootbox.recompensasPossiveis[0]);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedReward(null);
    };

    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-br from-[#fff] to-[#e1e2fe] font-['Montserrat',sans-serif] text-slate-800">
            <Header />
            <div className="pt-18">
                <TopBar />
                <main className="content-fade-in mx-auto mt-6 w-full max-w-5xl flex-1 px-4 pb-16 pt-16 sm:px-6">
                    <div className="mb-8 flex items-center gap-3">
                        <div className="flex items-center gap-3">
                            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-2xl text-indigo-600">
                                <FiBox aria-hidden="true" />
                            </span>
                            <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl">Recompensas e Lootboxes</h1>
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Lootboxes disponíveis">
                        {lootboxes.map((lootbox) => (
                            <LootboxCard
                                key={lootbox.id}
                                background={lootbox.background}
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
