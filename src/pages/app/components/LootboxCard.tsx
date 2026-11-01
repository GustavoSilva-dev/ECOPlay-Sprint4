import { FiCheckCircle, FiLock, FiStar, FiUnlock } from "react-icons/fi";
import { PiLeafFill } from "react-icons/pi";
import type { Lootbox } from "../Lootboxes";

interface LootboxCardProps {
    lootbox: Lootbox;
    onAcquire: () => void;
}

function LootboxCard({ lootbox, onAcquire }: LootboxCardProps) {
    const isEpic = lootbox.tipo === "ÉPICA";

    return (
        <article className={`flex min-h-[26rem] w-72 shrink-0 flex-col rounded-3xl p-6 text-white shadow-md ${isEpic ? "bg-indigo-950" : "bg-purple-500"}`}>
            <div className="flex items-center justify-between gap-3">
                <span className={`rounded-full px-3 py-1 text-[0.65rem] font-bold tracking-wide ${isEpic ? "bg-emerald-400/20 text-emerald-300" : "bg-white/20 text-white"}`}>
                    [{lootbox.tipo}]
                </span>
                <span className="flex items-center gap-1 text-sm font-bold text-emerald-300">
                    {isEpic ? <FiStar aria-hidden="true" /> : <PiLeafFill aria-hidden="true" />}
                    {lootbox.preco} pts
                </span>
            </div>

            <div className="relative mx-auto my-8 flex h-32 w-32 items-center justify-center rounded-3xl bg-white/20 text-7xl">
                <span aria-hidden="true">{isEpic ? "🎁" : "📦"}</span>
                <span className="absolute -right-2 -top-2 rounded-full bg-emerald-400 p-1.5 text-white">
                    {isEpic ? <FiCheckCircle aria-hidden="true" /> : <FiCheckCircle aria-hidden="true" />}
                </span>
            </div>

            <div className="flex-1">
                <h2 className="text-xl font-bold">{lootbox.nome}</h2>
                <p className="mt-2 text-sm leading-6 text-white/75">{lootbox.descricao}</p>
            </div>

            <button
                type="button"
                onClick={onAcquire}
                className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition hover:scale-[1.02] ${
                    isEpic ? "bg-blue-600 hover:bg-blue-500" : "bg-blue-600/80 hover:bg-blue-600"
                }`}
            >
                {isEpic ? <FiLock aria-hidden="true" /> : <FiUnlock aria-hidden="true" />}
                Adquirir ({lootbox.preco} pts)
            </button>
        </article>
    );
}

export default LootboxCard;
