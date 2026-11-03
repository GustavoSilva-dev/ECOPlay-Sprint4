const apiUrl = import.meta.env.VITE_API_URL;

export function apiRequest(path: string, options?: RequestInit): Promise<Response> {
    return fetch(`${apiUrl}${path}`, options);
}

export function jsonRequest(method: "POST" | "PUT", path: string, body: unknown): Promise<Response> {
    return apiRequest(path, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });
}
