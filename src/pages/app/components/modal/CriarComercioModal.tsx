import type { FormEvent } from "react";
import { useState } from "react";

export interface CriarComercioPayload {
    idPlano: number;
    nome: string;
    planoAtivo: boolean;
    cnpj: string;
}

interface CriarComercioModalProps {
    onSubmit: (payload: CriarComercioPayload) => void | Promise<void>;
    onClose: () => void;
    isSubmitting?: boolean;
    errorMessage?: string;
}

function CriarComercioModal({
    onSubmit,
    onClose,
    isSubmitting = false,
    errorMessage,
}: CriarComercioModalProps) {
    const [nome, setNome] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [idPlano, setIdPlano] = useState("1");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await onSubmit({
            idPlano: Number(idPlano),
            nome: nome.trim(),
            planoAtivo: idPlano !== "0",
            cnpj,
        });
    };

    return (
        <div className="fixed inset-0 z-1100 flex items-center justify-center bg-black/50 px-4" role="presentation">
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="create-commerce-modal-title"
                className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
            >
                <h2 id="create-commerce-modal-title" className="text-xl font-bold text-blue-900">
                    Cadastrar Comércio
                </h2>

                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="commerce-name" className="mb-1.5 block text-sm font-bold text-slate-700">
                            NOME DO COMÉRCIO
                        </label>
                        <input
                            id="commerce-name"
                            type="text"
                            value={nome}
                            onChange={(event) => setNome(event.target.value)}
                            required
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>

                    <div>
                        <label htmlFor="commerce-cnpj" className="mb-1.5 block text-sm font-bold text-slate-700">
                            CNPJ
                        </label>
                        <input
                            id="commerce-cnpj"
                            type="text"
                            inputMode="numeric"
                            value={cnpj}
                            onChange={(event) => setCnpj(event.target.value.replace(/\D/g, ""))}
                            required
                            pattern="\d{14}"
                            maxLength={14}
                            placeholder="Somente números"
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>

                    <div>
                        <label htmlFor="commerce-plan" className="mb-1.5 block text-sm font-bold text-slate-700">
                            PLANO
                        </label>
                        <select
                            id="commerce-plan"
                            value={idPlano}
                            onChange={(event) => setIdPlano(event.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="1">ECOPartner</option>
                            <option value="0">Nenhum Plano</option>
                        </select>
                    </div>

                    {errorMessage && (
                        <p className="text-sm font-semibold text-red-600" role="alert">
                            {errorMessage}
                        </p>
                    )}

                    <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={isSubmitting}
                            className="rounded-full px-5 py-2.5 text-sm font-bold text-slate-600 transition hover:bg-slate-100"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
                        >
                            {isSubmitting ? "Cadastrando..." : "Cadastrar comércio"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CriarComercioModal;
