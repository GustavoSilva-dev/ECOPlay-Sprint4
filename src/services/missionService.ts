import type { CreateMissionPayload } from "../pages/app/components/modal/CreateMissionModal";
import { apiRequest, jsonRequest } from "./api";

export function listMissions(category: "sustainable" | "local", signal?: AbortSignal) {
    return apiRequest(category === "sustainable" ? "/missoes/padroes" : "/missoes/comercio", { signal });
}

export function listSustainableMissions(signal?: AbortSignal) {
    return apiRequest("/missoes/padroes", { signal });
}

export function completeMission(userId: number, missionId: number) {
    return apiRequest(`/missoes/concluir/${userId}/${missionId}`, { method: "POST" });
}

export function createMission(payload: CreateMissionPayload) {
    return jsonRequest("POST", "/missoes", {
        idComercio: payload.idComercio,
        nome: payload.name,
        descricao: payload.description,
        pontosRecompensa: payload.ecopoints,
    });
}
