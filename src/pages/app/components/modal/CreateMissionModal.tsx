export interface CreateMissionPayload {
    name: string;
    description: string;
    ecopoints: number;
}

interface CreateMissionModalProps {
    onSubmit: (payload: CreateMissionPayload) => void;
    onClose: () => void;
}

function CreateMissionModal({ onSubmit, onClose }: CreateMissionModalProps) {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        onSubmit({
            name: String(formData.get("name") ?? "").trim(),
            description: String(formData.get("description") ?? "").trim(),
            ecopoints: Number(formData.get("ecopoints")),
        });
    };

    return (
        <div className="fixed inset-0 z-1100 flex items-center justify-center bg-slate-950/50 px-4" role="presentation">
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="create-mission-modal-title"
                className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
            >
                <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-emerald-600">Nova missão</p>
                    <h2 id="create-mission-modal-title" className="mt-2 text-2xl font-bold text-blue-900">Criar Missão</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                        Preencha as informações abaixo para cadastrar um novo desafio.
                    </p>
                </div>

                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="mission-name" className="mb-1.5 block text-sm font-bold text-slate-700">
                            NOME DA MISSÃO
                        </label>
                        <input
                            id="mission-name"
                            name="name"
                            type="text"
                            required
                            placeholder="Ex.: Recolha resíduos na sua rua"
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>

                    <div>
                        <label htmlFor="mission-description" className="mb-1.5 block text-sm font-bold text-slate-700">
                            DESCRIÇÃO
                        </label>
                        <textarea
                            id="mission-description"
                            name="description"
                            required
                            rows={4}
                            placeholder="Explique o que o participante deverá fazer."
                            className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>

                    <div>
                        <label htmlFor="mission-ecopoints" className="mb-1.5 block text-sm font-bold text-slate-700">
                            ECOPOINTS
                        </label>
                        <input
                            id="mission-ecopoints"
                            name="ecopoints"
                            type="number"
                            min="1"
                            step="1"
                            required
                            placeholder="Ex.: 50"
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>

                    <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-full px-5 py-2.5 text-sm font-bold text-slate-600 transition hover:bg-slate-100"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
                        >
                            Criar missão
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateMissionModal;
import type { FormEvent } from "react";
