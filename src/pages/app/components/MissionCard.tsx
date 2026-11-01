import type { IconType } from "react-icons";

export interface MissionCardData {
    id: number;
    title: string;
    description: string;
    points: number;
    type: string;
    expiresIn: string;
    icon: IconType;
    iconClassName: string;
}

interface MissionCardProps {
    mission: MissionCardData;
    isCompleted: boolean;
    onComplete: () => void;
}

function MissionCard({ mission, isCompleted, onComplete }: MissionCardProps) {
    const Icon = mission.icon;

    return (
        <article className="flex flex-col gap-4 rounded-xl bg-white p-5 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center">
            <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-2xl ${mission.iconClassName}`}>
                <Icon aria-hidden="true" />
            </div>
            <div className="min-w-0 flex-1">
                <p className="text-[0.65rem] font-bold tracking-wide text-emerald-600">
                    {mission.type} <span className="font-medium text-slate-400">- Expira em {mission.expiresIn}</span>
                </p>
                <h2 className="mt-1 text-base font-bold text-slate-800">{mission.title}</h2>
                <p className="mt-1 text-sm text-slate-500">{mission.description}</p>
                <p className="mt-2 text-sm font-bold text-emerald-600">+{mission.points} pontos ECO</p>
            </div>
            <button
                type="button"
                onClick={onComplete}
                disabled={isCompleted}
                className={`rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-sm transition ${
                    isCompleted
                        ? "cursor-default bg-emerald-500"
                        : "bg-blue-600 hover:scale-105 hover:bg-blue-700"
                }`}
            >
                {isCompleted ? "Missão completada" : "Concluir Missão"}
            </button>
        </article>
    );
}

export default MissionCard;
