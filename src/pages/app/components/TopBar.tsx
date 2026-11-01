import { getStoredUser } from "../../../types/user";

function TopBar() {
    const user = getStoredUser();
    const points = user?.saldoPontos ?? 0;

    return (
        <header className="border-b mt-[-5px] w-full border-slate-200 bg-white px-4 py-3 shadow-sm sm:px-6 fixed z-1000">
            <div className="mx-auto flex max-w-4xl items-center justify-between">
                <div className="flex items-center">
                    <div>
                        <p className="text-[1.2rem] font-['Nico_Moji',sans-serif] font-bold text-white bg-indigo-600 py-1 px-2 rounded-xl flex gap-2">
                            <span className="font-medium hidden md:block">Plataforma</span>
                            ECOPlay</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <span className="rounded-full text-[0.8rem] font-['Nico_Moji',sans-serif] bg-emerald-50 px-3 py-1.5 text-xs text-emerald-700">
                        <span className="font-bold text-[1rem]">{points.toLocaleString("pt-BR")}</span> ECOPoints
                    </span>
                </div>
            </div>
        </header>
    );
}

export default TopBar;
