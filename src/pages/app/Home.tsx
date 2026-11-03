import { useState } from "react";
import TopBar from "./components/TopBar";
import MissionsSection from "./components/MissionsSection";
import QuickShortcuts from "./components/QuickShortcuts";
import RecentRewards from "./components/RecentRewards";
import EditarUsuarioModal, { type EditarUsuarioPayload } from "./components/modal/EditarUsuarioModal";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useUser, getUserDisplayName } from "../../types/user";
import { updateUser as updateUserRequest } from "../../services/authService";

function Home() {
    const { user, updateUser } = useUser();
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isUpdatingUser, setIsUpdatingUser] = useState(false);
    const [userErrorMessage, setUserErrorMessage] = useState("");

    const handleUpdateUser = async (payload: EditarUsuarioPayload) => {
        if (!user?.id) {
            setUserErrorMessage("Não foi possível identificar o usuário.");
            return;
        }

        setIsUpdatingUser(true);
        setUserErrorMessage("");
        try {
            const response = await updateUserRequest(user.id, {
                nickName: payload.nome,
                email: payload.email,
                ...(payload.senha ? { senha: payload.senha } : {}),
            });

            console.log("Usuário editado com sucesso.", payload.nome, payload.email, payload.senha, user.id);

            if (!response.ok) {
                throw new Error(`Erro ao editar usuário: ${response.status}`);
            }

            const updatedUser = await response.json().catch(() => null);
            updateUser(updatedUser && typeof updatedUser === "object" ? updatedUser : payload);
            setIsEditModalOpen(false);
        } catch (error) {
            console.error("Não foi possível editar o usuário.", error);
            setUserErrorMessage("Não foi possível editar o usuário.");
        } finally {
            setIsUpdatingUser(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 font-['Montserrat',sans-serif] text-slate-800 flex flex-col">
            <Header />
            <div className="pt-18">
                <TopBar />
                <main className="content-fade-in mx-auto mt-6 max-w-4xl space-y-8 px-4 sm:px-6">
                    <p className="sm:text-xl text-lg font-semibold text-indigo-900 pt-15">
                        Olá, <b>{getUserDisplayName(user)}</b>! <br/> Bem-vindo ao ECOPlay.
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                        <button
                            type="button"
                            onClick={() => {
                                setUserErrorMessage("");
                                setIsEditModalOpen(true);
                            }}
                            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-700"
                        >
                            Editar usuário
                        </button>
                    </div>
                    {userErrorMessage && (
                        <p className="text-sm font-semibold text-red-600" role="alert">
                            {userErrorMessage}
                        </p>
                    )}
                    <MissionsSection />
                    <QuickShortcuts />
                    <RecentRewards />
                </main>
            </div>
            <Footer />
            {isEditModalOpen && user && (
                <EditarUsuarioModal
                    user={user}
                    onSubmit={handleUpdateUser}
                    onClose={() => setIsEditModalOpen(false)}
                    isSubmitting={isUpdatingUser}
                    errorMessage={userErrorMessage}
                />
            )}
        </div>
    );
}

export default Home;
