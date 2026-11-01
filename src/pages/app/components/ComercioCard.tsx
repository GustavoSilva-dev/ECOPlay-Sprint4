import { FiCoffee, FiMapPin, FiShoppingBag, FiTarget } from "react-icons/fi";

export interface Comercio {
    id: string;
    nome: string;
    categoria: string;
    missoesAtivas: number;
}

interface ComercioCardProps {
    comercio: Comercio;
}

const categoryIcons = {
    alimentacao: FiShoppingBag,
    cafe: FiCoffee,
    hortifruti: FiMapPin,
} as const;

function ComercioCard({ comercio }: ComercioCardProps) {
    const Icon = categoryIcons[comercio.categoria as keyof typeof categoryIcons] ?? FiMapPin;

    const handleClick = () => {
        console.log("Navegar para detalhes do comércio ID:", comercio.id);
        // TODO: Implementar rota de detalhes do comércio usando react-router-dom
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className="flex aspect-square cursor-pointer flex-col items-center justify-between rounded-2xl bg-white p-6 text-center shadow-md transition-shadow hover:shadow-lg"
        >
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-4xl text-blue-600">
                <Icon aria-hidden="true" />
            </span>
            <span className="px-2">
                <span className="block text-lg font-bold text-slate-800">{comercio.nome}</span>
                <span className="mt-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">{comercio.categoria}</span>
            </span>
            <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-green-600">
                <FiTarget aria-hidden="true" />
                {comercio.missoesAtivas} {comercio.missoesAtivas === 1 ? "missão ativa" : "missões ativas"}
            </span>
        </button>
    );
}

export default ComercioCard;
