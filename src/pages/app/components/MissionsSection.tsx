import { PiPlantFill } from "react-icons/pi";
import { useNavigate } from "react-router";

export interface Mission {
    id: number;
    title: string;
    points: number;
}

const missions: Mission[] = [
    { id: 1, title: "Plante ou cuide de uma muda", points: 60 },
    { id: 2, title: "Limpe o ambiente", points: 20 },
];

function MissionsSection() {
    const navigate = useNavigate();

    return (
        <section aria-labelledby="missions-title" className="mt-5">
            <div className="mb-3 flex items-center justify-between">
                <h2 id="missions-title" className="text-lg font-bold text-slate-800">Missões</h2>
                <button type="button" onClick={() => navigate("/plataforma/missoes")} className="text-xs font-semibold text-indigo-600 hover:text-indigo-800">Ver todas</button>
            </div>
            <div className="space-y-3">
                {missions.map((mission) => (
                    <article key={mission.id} className="group flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-2xl text-emerald-600">
                            <PiPlantFill aria-hidden="true" className="transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <h3 className="mt-1 truncate text-sm font-bold text-slate-800">{mission.title}</h3>
                            <p className="mt-1 text-xs font-bold text-emerald-600 flex gap-1 items-center">+{mission.points} <span className="font-['Nico_Moji',sans-serif] font-medium">ECOPoints</span></p>
                        </div>
                        <button type="button" onClick={() => navigate("/plataforma/missoes")} className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 hover:scale-105 cursor-pointer">
                            Ver
                        </button>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default MissionsSection;
