import { useUser } from "../../../types/user";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router";

function TopBar() {
    const { user, clearUser } = useUser();
    const points = user?.saldoPontos ?? 0;
    const navigate = useNavigate();

    const handleLogout = () => {
        clearUser();
        navigate("/plataforma", { replace: true });
    };

    return (
        <header className="fixed inset-x-0 top-0 z-1000 border-b border-slate-200 border-t-4 border-indigo-600 bg-white px-4 py-3 shadow-sm sm:px-6">
            <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
                <div className="rounded-2xl bg-linear-to-r from-[#5360FF] to-[#202658] px-3 py-2 font-['Nico_Moji',sans-serif] text-sm font-normal leading-none text-white sm:px-4 sm:text-2xl">
                    Plataforma ECOPlay
                </div>
                <div className="flex items-center gap-2 sm:gap-4">
                    {localStorage.getItem("user") && (
                        <span title={user?.nickName} className="rounded-full cursor-default bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-800 sm:px-4 sm:text-sm border-2 border-emerald-800">
                            {user?.nickName?.slice(0,1).toUpperCase()}
                        </span>
                    )}

                    <span className="rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700 sm:px-4 font-['Nico_Moji',sans-serif] sm:text-sm">
                        <span className="font-bold text-xl">{points.toLocaleString("pt-BR")}</span> ECOPoints
                    </span>

                    <button
                        type="button"
                        onClick={handleLogout}
                        aria-label="Sair da plataforma"
                        className="flex items-center gap-1 rounded-full px-2 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-red-600"
                    >
                        <FiLogOut aria-hidden="true" />
                        <span className="hidden sm:inline">Sair</span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default TopBar;
