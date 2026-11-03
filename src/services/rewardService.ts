import { apiRequest } from "./api";

export function listUserRewards(userId: number, signal?: AbortSignal) {
    return apiRequest(`/recompensas/usuario/${userId}`, { signal });
}
