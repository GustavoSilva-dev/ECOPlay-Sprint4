import { useState } from "react";
import { FaRegEnvelope, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FiArrowRight, FiLock } from "react-icons/fi";
import { useNavigate } from "react-router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useUser } from "../../types/user";
import { createUser, loginUser } from "../../services/authService";

type AuthMode = "login" | "register";

const Register = () => {
    const [mode, setMode] = useState<AuthMode>("login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const { updateUser } = useUser();

    const isLogin = mode === "login";

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setErrorMessage("");

        if (!isLogin) {
            try {
                const createResponse = await createUser({
                    nickName: name.trim(),
                    email: email.trim(),
                    senha: password,
                });

                if (!createResponse.ok) {
                    throw new Error(`Account creation failed with status ${createResponse.status}`);
                }

                const loginResponse = await loginUser({ email: email.trim(), senha: password });

                if (!loginResponse.ok) {
                    throw new Error(`Login after account creation failed with status ${loginResponse.status}`);
                }

                const user = await loginResponse.json();
                updateUser(user);
                navigate("/plataforma/home");
            } catch (error) {
                console.error("Não foi possível criar a conta.", error);
                setErrorMessage("Não foi possível criar a conta. Verifique os dados e tente novamente.");
                setIsLoading(false);
            }

            return;
        }

        const loginRequest = loginUser({ email, senha: password });
        const minimumDelay = new Promise((resolve) => window.setTimeout(resolve, 1000));

        try {
            const response = await loginRequest.finally(() => minimumDelay);

            if (!response.ok) {
                throw new Error(`Login failed with status ${response.status}`);
            }

            const user = await response.json();
            updateUser(user);
            navigate("/plataforma/home");
        } catch (error) {
            console.error("Não foi possível realizar o login.", error);
            setErrorMessage("Email ou senha inválida");
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f7f7fd] font-['Montserrat',sans-serif] text-[#17234a]">
            <Header activePage="Acesse a Plataforma" />
            <main className="px-3 pt-24 sm:px-8 sm:pb-8 sm:pt-28">
            <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-300 flex-col">
                <div className="flex items-center justify-between gap-3 text-[0.7rem] font-bold sm:text-xs">
                    <span className="rounded-full bg-[#e7f1ff] px-3 py-1.5 uppercase tracking-wide text-[#183f95] rotate-[-3deg] animate-pulse">
                        <span className="mr-1.5 text-[#159447]">●</span>15.000 ECOPoints
                    </span>
                    <span className="rounded-full bg-[#e9ddff] px-3 py-1.5 text-[#6140b7] rotate-[3deg] animate-pulse">
                        <span className="mr-1">✦</span>LOOTBOX Mítica
                    </span>
                </div>

                <section className="flex flex-col items-center py-8 text-center sm:py-10 content-fade-in">
                    <h1 className="font-['Nico_Moji',sans-serif] text-5xl font-normal leading-none text-[#2c3952] drop-shadow-[3px_4px_0_rgb(83_96_255_/_0.3)] sm:text-6xl">
                        ECOPlay
                    </h1>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#26325e] sm:text-base">
                        Sua jornada sustentável começa aqui. Jogue,<br className="sm:hidden" /> recicle e ganhe recompensas reais!
                    </p>
                </section>

                <section className="relative mb-5 rounded-2xl bg-gradient-to-r from-[#e1eaff] to-[#eff1ff] px-5 py-6 sm:px-7 sm:py-7 content-fade-in">
                    <div className="pr-24 sm:pr-40">
                        <span className="text-xs font-bold uppercase tracking-wide text-[#5360ff] sm:text-sm">◎ Desafio diário</span>
                        <h2 className="mt-2 text-lg font-bold sm:text-xl">Conecte-se à sua ecovila</h2>
                        <p className="mt-2 text-sm text-[#33416b] sm:text-base">
                            Reduza pegadas de carbono e desbloqueie cupons locais.
                        </p>
                    </div>
                    <div className="absolute right-5 top-5 flex h-20 w-20 items-center justify-center rounded-4xl bg-[#b8e4d6] text-4xl sm:right-7 sm:top-7 sm:h-24 sm:w-24">
                        🌳
                    </div>
                </section>

                <section className="rounded-3xl bg-white p-5 shadow-[0_10px_30px_rgba(35,52,111,0.12)] sm:p-7 content-fade-in">
                    <div className="flex rounded-full bg-[#e7edff] p-1.5 text-sm font-semibold sm:text-base">
                        <button
                            type="button"
                            onClick={() => setMode("login")}
                            className={`flex-1 rounded-full py-2 transition-colors ${isLogin ? "bg-white text-[#5360ff] shadow-sm" : "text-[#17234a]"}`}
                        >
                            Entrar
                        </button>
                        <button
                            type="button"
                            onClick={() => setMode("register")}
                            className={`flex-1 rounded-full py-2 transition-colors ${!isLogin ? "bg-white text-[#5360ff] shadow-sm" : "text-[#17234a]"}`}
                        >
                            Criar Conta
                        </button>
                    </div>

                    {isLoading ? (
                        <div className="flex min-h-64 flex-col items-center justify-center gap-5 text-center" role="status">
                            <span className="h-12 w-12 animate-spin rounded-full border-4 border-[#dce3ff] border-t-[#5360ff]" />
                            <p className="text-base font-semibold text-[#26325e]">Preparando seu ecossistema...</p>
                        </div>
                    ) : (
                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        {!isLogin && (
                            <label className="block text-sm font-semibold sm:text-base">
                                Nome
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    placeholder="Como podemos te chamar?"
                                    required
                                    className="mt-2 w-full rounded-xl border-0 bg-[#f0f2ff] px-4 py-3.5 text-sm font-normal text-[#26325e] outline-none ring-[#5360ff] placeholder:text-[#8990ad] focus:ring-2 sm:text-base"
                                />
                            </label>
                        )}
                        <label className="block text-sm font-semibold sm:text-base">
                            E-mail
                            <span className="float-right text-xs font-normal text-[#5360ff] sm:text-sm">Ex: voce@eco.com</span>
                            <span className="relative mt-1 block">
                                <FaRegEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#66718e]" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    placeholder="aventureiro@ecoplay.app"
                                    required
                                    className="w-full rounded-xl border-0 bg-[#f0f2ff] py-3.5 pl-10 pr-4 text-sm font-normal text-[#26325e] outline-none ring-[#5360ff] placeholder:text-[#8990ad] focus:ring-2 sm:text-base"
                                />
                            </span>
                        </label>
                        <label className="block text-sm font-semibold sm:text-base">
                            Senha
                            <span className="relative mt-1 block">
                                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#66718e]" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    placeholder="Sua senha secreta"
                                    required
                                    className="w-full rounded-xl border-0 bg-[#f0f2ff] py-3.5 pl-10 pr-10 text-sm font-normal text-[#26325e] outline-none ring-[#5360ff] placeholder:text-[#8990ad] focus:ring-2 sm:text-base"
                                />
                                <button
                                    type="button"
                                    aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                                    onClick={() => setShowPassword((visible) => !visible)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#66718e]"
                                >
                                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                </button>
                            </span>
                        </label>
                        {errorMessage && (
                            <p className="text-sm font-semibold text-red-600" role="alert">
                                {errorMessage}
                            </p>
                        )}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#5360ff] py-4 text-sm font-bold text-white transition-colors hover:bg-[#414dd5] disabled:cursor-wait disabled:opacity-70 sm:text-base"
                        >
                            {isLogin ? "Entrar no ECOPlay" : "Criar minha conta"}
                            <FiArrowRight />
                        </button>
                    </form>
                    )}

                </section>

                <section className="mt-5 rounded-2xl bg-[#e2eaff] px-5 py-5 sm:px-6 content-fade-in">
                    <div className="flex items-center gap-2">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8cf0c1] text-lg">♟</span>
                        <div className="flex-1">
                            <div className="flex justify-between text-xs font-bold sm:text-sm">
                                <span>Comunidade ECOPlay</span>
                                <span className="text-[#087c59] animate-bounce">
                                    14.820 mudas plantadas</span>
                            </div>
                            <div className="mt-2 h-2 rounded-full bg-[#cbd7f4]">
                                <div className="h-full w-3/4 rounded-full bg-[#087c59]" />
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="mt-auto pt-6 text-center text-xs text-[#596382] sm:text-sm">
                    Ao entrar, você concorda com nossos <u>Termos Verdes</u> e <u>Privacidade</u>.
                </footer>
            </div>
            </main>
            <Footer />
        </div>
    );
};

export default Register;
