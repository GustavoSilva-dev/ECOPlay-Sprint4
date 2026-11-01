import { FiBox, FiLock, FiUnlock } from "react-icons/fi";
import type { Lootbox } from "../Lootboxes";

interface LootboxCardProps {
    lootbox: Lootbox;
    background?: string;
    onAcquire: () => void;
}

function LootboxCard({ lootbox, background, onAcquire }: LootboxCardProps) {
    const typeStyles = {
        COMUM: "border-slate-200",
        INCOMUM: "border-green-200",
        ÉPICA: "border-indigo-200",
        LENDÁRIO: "border-amber-200",
        MÍTICO: "border-purple-300",
    };

    return (
        <article className={`flex min-h-72 flex-col rounded-2xl border ${background || 'bg-white'} p-5 shadow-sm transition hover:shadow-md ${typeStyles[lootbox.tipo]}`}>
            <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-[0.65rem] font-bold tracking-wide text-slate-600">
                    {lootbox.tipo}
                </span>
                <span className="text-sm font-bold text-emerald-600">{lootbox.preco} pts</span>
            </div>

            <div className="my-7 flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-50 text-4xl text-indigo-600">
                <FiBox aria-hidden="true" />
            </div>

            <div className="flex-1">
                <h2 className="text-lg font-bold text-slate-800">{lootbox.nome}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">{lootbox.descricao}</p>
            </div>

            <button
                type="button"
                onClick={onAcquire}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
            >
                {lootbox.tipo === "COMUM" ? <FiUnlock aria-hidden="true" /> : <FiLock aria-hidden="true" />}
                Adquirir ({lootbox.preco} pts)
            </button>
        </article>
    );
}

export default LootboxCard;
