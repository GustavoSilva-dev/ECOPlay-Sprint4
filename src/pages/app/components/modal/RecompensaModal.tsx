import { FiGift } from "react-icons/fi";
import type { Recompensa } from "../../Lootboxes";

interface RecompensaModalProps {
    recompensa: Recompensa;
    onClose: () => void;
}

function RecompensaModal({ recompensa, onClose }: RecompensaModalProps) {
    return (
        <div className="fixed inset-0 z-1100 flex items-center justify-center bg-black/50 px-4" role="presentation">
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="recompensa-modal-title"
                className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl"
            >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-100 text-4xl text-amber-500">
                    <FiGift aria-hidden="true" />
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-wide text-emerald-600">Lootbox aberta!</p>
                <h2 id="recompensa-modal-title" className="mt-2 text-2xl font-bold text-slate-800">Parabéns!</h2>
                <p className="mt-3 text-base font-semibold text-blue-900">{recompensa.nomeItem}</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">{recompensa.descricao}</p>
                <button
                    type="button"
                    onClick={onClose}
                    className="mt-7 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
                >
                    Fechar
                </button>
            </div>
        </div>
    );
}

export default RecompensaModal;
