import { BsShop } from "react-icons/bs";
import { GiTrophy } from "react-icons/gi";
import { PiTargetFill } from "react-icons/pi";
import { useNavigate } from "react-router";
import type { IconType } from "react-icons";

interface Shortcut {
    id: number;
    title: string;
    subtitle: string;
    icon: IconType;
    iconClassName: string;
    backgroundClassname: string;
    path?: string;
    featured?: boolean;
}

const shortcuts: Shortcut[] = [
    { id: 1, title: "Comércios Próximos", subtitle: "Parceiros com desconto", icon: BsShop, iconClassName: "bg-indigo-100 text-indigo-600", backgroundClassname: "bg-linear-to-br from-[#5360FF] to-[#FFFFFF]", path: "/plataforma/comercios" },
    { id: 2, title: "Missões Disponíveis", subtitle: "Complete e ganhe pontos", icon: PiTargetFill, iconClassName: "bg-amber-100 text-amber-600", backgroundClassname: "bg-linear-to-br from-[#F59E0B] to-[#FFFFFF]", path: "/plataforma/missoes" },
    { id: 3, title: "Recompensas e Lootboxes", subtitle: "Troque seus pontos por recompensas", icon: GiTrophy, iconClassName: "bg-emerald-100 text-emerald-600", backgroundClassname: "bg-linear-to-br from-[#10B981] to-[#FFFFFF]", path: "/plataforma/recompensas", featured: true },
];

function QuickShortcuts() {
    const navigate = useNavigate();

    return (
        <section aria-labelledby="shortcuts-title" className="mb-10">
            <div className="mb-3 flex items-center justify-between">
                <h2 id="shortcuts-title" className="text-lg font-bold text-slate-800">Atalhos Rápidos</h2>
                <span className="text-[0.65rem] font-semibold tracking-wide text-slate-500">AÇÕES</span>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {shortcuts.map(({ id, title, subtitle, icon: Icon, iconClassName, backgroundClassname, path, featured }) => (
                    <button
                        key={id}
                        type="button"
                        onClick={() => path && navigate(path)}
                        className={`group relative flex min-h-28 cursor-pointer items-center gap-4 rounded-2xl p-4 text-left shadow-sm transition hover:scale-103 hover:shadow-md ${featured ? "md:col-span-2" : ""} ${backgroundClassname}`}
                    >
                        <span className={`flex h-25 w-25 shrink-0 items-center justify-center rounded-xl text-xl ${iconClassName}`}>
                            <Icon aria-hidden="true" className="h-15 w-15 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                        </span>
                        <span className="min-w-0 flex-1">
                            <span className="block text-sm font-bold text-white">{title}</span>
                            <span className="mt-1 block text-xs text-white">{subtitle}</span>
                        </span>
                        <span className="text-lg text-white font-bold" aria-hidden="true">&gt;</span>
                    </button>
                ))}
            </div>
        </section>
    );
}

export default QuickShortcuts;
