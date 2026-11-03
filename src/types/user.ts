import { createContext, createElement, useContext, useEffect, useState, type ReactNode } from "react";

export interface AuthenticatedUser {
    id?: number;
    nickName?: string;
    nome?: string;
    email: string;
    senha?: string;
    saldoPontos?: number;
    comercioVinculado?: number | { id?: number; idComercio?: number } | null;
}

type UserUpdate = Partial<AuthenticatedUser>;

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

interface UserContextValue {
    user: AuthenticatedUser | null;
    updateUser: (update: UserUpdate) => void;
    clearUser: () => void;
    syncUserFromResponse: (response: Response) => Promise<UserUpdate | null>;
}

const UserContext = createContext<UserContextValue | null>(null);

function isObject(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null;
}

function getUserUpdate(value: unknown): UserUpdate | null {
    if (!isObject(value)) {
        return null;
    }

    const update: UserUpdate = {};
    const fields: (keyof AuthenticatedUser)[] = ["id", "nickName", "nome", "email", "senha", "saldoPontos", "comercioVinculado"];

    for (const field of fields) {
        if (field in value) {
            Object.assign(update, { [field]: value[field] });
        }
    }

    return Object.keys(update).length > 0 ? update : null;
}

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<AuthenticatedUser | null>(() => getStoredUser());

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    const updateUser = (update: UserUpdate) => {
        setUser((currentUser) => {
            if (currentUser) {
                return { ...currentUser, ...update };
            }

            return typeof update.email === "string" ? { email: update.email, ...update } : currentUser;
        });
    };

    const clearUser = () => setUser(null);

    const syncUserFromResponse = async (response: Response) => {
        const body = await response.clone().text();

        if (!body.trim()) {
            return null;
        }

        let parsedBody: unknown;
        try {
            parsedBody = JSON.parse(body);
        } catch (error) {
            if (error instanceof SyntaxError) {
                return null;
            }
            throw error;
        }

        const update = getUserUpdate(parsedBody);
        if (update) {
            updateUser(update);
        }

        return update;
    };

    return createElement(UserContext.Provider, { value: { user, updateUser, clearUser, syncUserFromResponse } }, children);
}

export function useUser() {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useUser deve ser usado dentro de UserProvider.");
    }

    return context;
}

export function getUserDisplayName(user: AuthenticatedUser | null): string {
    return user?.nickName || user?.nome || user?.email || "aventureiro";
}
