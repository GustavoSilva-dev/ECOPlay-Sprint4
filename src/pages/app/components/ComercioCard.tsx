import { BsShop } from "react-icons/bs";

export interface Comercio {
    id?: number;
    idUsuario: number;
    idPlano: number;
    nome: string;
    planoAtivo: boolean;
    cnpj: string;
}

interface ComercioCardProps {
    comercio: Comercio;
    background?: string;
    user?: boolean;
}

function formatCnpj(cnpj: string) {
    const digits = cnpj.replace(/\D/g, "");

    if (digits.length !== 14) {
        return cnpj;
    }

    return digits.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
}


function ComercioCard({ comercio, background, user}: ComercioCardProps) {
    return (
        <article className={`flex aspect-square flex-col items-center justify-between rounded-2xl ${background || "bg-white"} p-6 text-center shadow-md transition-shadow hover:shadow-lg`}>
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-4xl text-blue-600">
                <BsShop aria-hidden="true" />
            </span>

            {user && (
                <span className="mt-2 block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                    Seu Comércio
                </span>
            )}
            
            <span className="px-2">
                <span className="block text-lg font-bold text-slate-800">{comercio.nome}</span>
                <span className="mt-1 block text-sm text-slate-500">{formatCnpj(comercio.cnpj)}</span>
            </span>
            <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    comercio.planoAtivo ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                }`}
            >
                {comercio.planoAtivo ? "ECOPartner Ativo" : "Sem plano ativo"}
            </span>
        </article>
    );
}

export default ComercioCard;
