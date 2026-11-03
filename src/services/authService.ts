import { jsonRequest } from "./api";

export interface AuthCredentials {
    email: string;
    senha: string;
}

export interface CreateUserPayload extends AuthCredentials {
    nickName: string;
}

export function createUser(payload: CreateUserPayload) {
    return jsonRequest("POST", "/usuarios", payload);
}

export function loginUser(payload: AuthCredentials) {
    return jsonRequest("POST", "/usuarios/login", payload);
}

export function updateUser(userId: number, payload: Record<string, string | number>) {
    return jsonRequest("PUT", `/usuarios/${userId}`, { id: userId, ...payload });
}
