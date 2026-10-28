import { PiPlantFill } from "react-icons/pi";

export interface Mission {
    id: number;
    title: string;
    points: number;
    type: string;
    expiresIn: string;
}

const data = new Date();

const missions: Mission[] = [
    { id: 1, title: "Plante ou cuide de uma muda", points: 60, type: "DIÁRIA", expiresIn: `${(data.getHours() - 24) * -1}h` },
    { id: 2, title: "Limpe o ambiente", points: 20, type: "DIÁRIA", expiresIn: `${(data.getHours() - 24) * -1}h` },
];

function MissionsSection() {
    return (
        <section aria-labelledby="missions-title" className="mt-20">
            <div className="mb-3 flex items-center justify-between">
                <h2 id="missions-title" className="text-lg font-bold text-slate-800">Missões</h2>
                <button type="button" className="text-xs font-semibold text-indigo-600 hover:text-indigo-800">Ver todas</button>
            </div>
            <div className="space-y-3">
                {missions.map((mission) => (
                    <article key={mission.id} className="group flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-2xl text-emerald-600">
                            <PiPlantFill aria-hidden="true" className="transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-[0.65rem] font-bold tracking-wide text-emerald-600">
                                {mission.type} <span className="font-medium text-slate-400">- Expira em {mission.expiresIn}</span>
                            </p>
                            <h3 className="mt-1 truncate text-sm font-bold text-slate-800">{mission.title}</h3>
                            <p className="mt-1 text-xs font-semibold text-emerald-600">+{mission.points} pontos ECO</p>
                        </div>
                        <button type="button" className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 hover:scale-105 cursor-pointer">
                            Ver
                        </button>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default MissionsSection;
