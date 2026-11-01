import type { MissionCardData } from "../MissionCard";

interface MissionCompletionModalProps {
    mission: MissionCardData;
    isConfirming: boolean;
    onConfirm: () => void;
    onClose: () => void;
}

function MissionCompletionModal({ mission, isConfirming, onConfirm, onClose }: MissionCompletionModalProps) {
    const Icon = mission.icon;

    return (
        <div className="fixed inset-0 z-1100 flex items-center justify-center bg-slate-950/50 px-4" role="presentation">
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="mission-modal-title"
                className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
            >
                <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${mission.iconClassName}`}>
                    <Icon aria-hidden="true" />
                </div>
                <div className="mt-5 text-center">
                    <p className="text-xs font-bold uppercase tracking-wide text-emerald-600">{mission.type}</p>
                    <h2 id="mission-modal-title" className="mt-2 text-xl font-bold text-blue-900">{mission.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-500">{mission.description}</p>
                    <p className="mt-4 text-base font-bold text-emerald-600">Você ganhará +{mission.points} pontos ECO</p>
                </div>
                <div className="mt-6 flex flex-col-reverse sm:flex-row sm:justify-end md:justify-center gap-3">
                    <button
                        type="button"
                        onClick={onClose}
                        disabled={isConfirming}
                        className="rounded-full px-5 py-2.5 text-sm font-bold text-slate-600 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        Cancelar
                    </button>
                    <button
                        type="button"
                        onClick={onConfirm}
                        disabled={isConfirming}
                        aria-busy={isConfirming}
                        className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-wait disabled:opacity-70"
                    >
                        {isConfirming ? "Confirmando conclusão" : "Confirmar Conclusão"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MissionCompletionModal;
