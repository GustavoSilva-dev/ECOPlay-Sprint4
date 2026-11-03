import { apiRequest } from "./api";

export function openLootbox(email: string, type: string) {
    return apiRequest(`/lootbox/abrir/${encodeURIComponent(email)}/${type}`, { method: "POST" });
}
