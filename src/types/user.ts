export interface AuthenticatedUser {
    id?: number;
    nickName?: string;
    nome?: string;
    email: string;
    senha?: string;
    saldoPontos?: number;
    comercioVinculado?: number | { id?: number; idComercio?: number } | null;
}

export function getStoredUser(): AuthenticatedUser | null {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
        return null;
    }

    try {
        const parsedUser: unknown = JSON.parse(storedUser);

        if (typeof parsedUser !== "object" || parsedUser === null || !("email" in parsedUser)) {
            console.error("Usuário armazenado em formato inválido.");
            return null;
        }

        return parsedUser as AuthenticatedUser;
    } catch (error) {
        console.error("Não foi possível ler o usuário armazenado.", error);
        return null;
    }
}

export function getUserDisplayName(user: AuthenticatedUser | null): string {
    return user?.nickName || user?.nome || user?.email || "aventureiro";
}
