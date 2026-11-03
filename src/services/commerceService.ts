import type { Comercio } from "../pages/app/components/ComercioCard";
import { apiRequest, jsonRequest } from "./api";

export function listComercios(signal?: AbortSignal) {
    return apiRequest("/comercios", { signal });
}

export function createComercio(payload: Omit<Comercio, "id">) {
    return jsonRequest("POST", "/comercios", payload);
}

export function updateComercio(comercio: Comercio) {
    if (comercio.id === undefined) {
        throw new Error("O comércio precisa de um ID para ser editado.");
    }

    return jsonRequest("PUT", `/comercios/${comercio.id}`, comercio);
}
