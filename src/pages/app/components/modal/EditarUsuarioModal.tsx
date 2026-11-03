import type { FormEvent } from "react";
import { useState } from "react";
import type { AuthenticatedUser } from "../../../../types/user";

export interface EditarUsuarioPayload {
    nome: string;
    email: string;
    senha?: string;
}

interface EditarUsuarioModalProps {
    user: AuthenticatedUser;
    onSubmit: (payload: EditarUsuarioPayload) => void | Promise<void>;
    onClose: () => void;
    isSubmitting?: boolean;
    errorMessage?: string;
}

function EditarUsuarioModal({
    user,
    onSubmit,
    onClose,
    isSubmitting = false,
    errorMessage,
}: EditarUsuarioModalProps) {
    const [nome, setNome] = useState(user.nome ?? user.nickName ?? "");
    const [email, setEmail] = useState(user.email);
    const [senha, setSenha] = useState("");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await onSubmit({
            nome: nome.trim(),
            email: email.trim(),
            ...(senha ? { senha } : {}),
        });
    };

    return (
        <div className="fixed inset-0 z-1100 flex items-center justify-center bg-black/50 px-4" role="presentation">
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="edit-user-modal-title"
                className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
            >
                <h2 id="edit-user-modal-title" className="text-xl font-bold text-blue-900">
                    Editar usuário
                </h2>

                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="user-name" className="mb-1.5 block text-sm font-bold text-slate-700">
                            NOME
                        </label>
                        <input
                            id="user-name"
                            type="text"
                            value={nome}
                            onChange={(event) => setNome(event.target.value)}
                            required
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>

                    <div>
                        <label htmlFor="user-email" className="mb-1.5 block text-sm font-bold text-slate-700">
                            E-MAIL
                        </label>
                        <input
                            id="user-email"
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>

                    <div>
                        <label htmlFor="user-password" className="mb-1.5 block text-sm font-bold text-slate-700">
                            NOVA SENHA
                        </label>
                        <input
                            id="user-password"
                            type="password"
                            value={senha}
                            onChange={(event) => setSenha(event.target.value)}
                            placeholder="Deixe vazio para manter a atual"
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
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
                            {isSubmitting ? "Salvando..." : "Salvar alterações"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditarUsuarioModal;
