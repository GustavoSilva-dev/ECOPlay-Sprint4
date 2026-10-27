import Footer from "../../components/Footer";
import Header from "../../components/Header";
import EcoplayPrototype from "../../components/prototipo-structure/EcoplayPrototype";

function Prototipo() {
    return (
        <div className="flex min-h-screen flex-col bg-[#D9D9D9] font-['Montserrat',sans-serif] text-[#2C3952]">
            <Header activePage="Protótipo" />

            <main className="flex flex-1 justify-center px-5 pb-15 pt-35 min-[769px]:pb-20 min-[769px]:pt-40">
                <div className="flex w-full max-w-225 flex-col items-center gap-10 text-center">
                    <section className="content-fade-in flex max-w-187.5 flex-col items-center gap-5">
                        <h1 className="shadow-animate font-['Nico_Moji',sans-serif] text-[3.75rem] font-normal text-[#2C3952] max-[480px]:text-[3rem]">
                            ECOPlay
                        </h1>
                        <p className="max-w-175 text-[1rem] leading-[1.7] min-[769px]:text-[1.1rem]">
                            Aventure-se pelo protótipo da ECOPlay e descubra como a
                            plataforma transforma ações sustentáveis em uma jornada
                            gamificada.
                        </p>
                    </section>

                    <section
                        className="content-fade-in w-full rounded-2xl bg-white p-7.5 text-left shadow-[0_8px_20px_rgba(0,0,0,0.08)] min-[481px]:p-10"
                    >
                        <h2
                            id="prototype-information-title"
                            className="mb-3 text-center text-[1.35rem] font-bold"
                        >
                            Informações do protótipo
                        </h2>
                        <p className="text-center text-[0.95rem] leading-[1.7]">
                            O onboarding apresenta a jornada do jogador. Na Home,
                            o usuário acompanha pontos, sequência, missão em destaque,
                            guilda e lootboxes. As telas de Missões e Mapa simulam
                            ações sustentáveis e check-ins em comércios parceiros.
                            Guildas exibem ranking e metas coletivas, enquanto
                            Recompensas mostram benefícios da SoulUp. Separamos em campos <i>mostrar para conceito</i> (que ainda estamos planejando se iremos implementar) e <i>dá para construir</i> (que estamos decididos a implementar)
                            <br/>
                            <br/>

                            <b>*Pretendemos remodelar completamente esta página para a próxima sprint, ela não será mantida</b>
                        </p>
                    </section>

                    <section
                        aria-labelledby="prototype-title"
                        className="content-fade-in w-full rounded-2xl border-4 border-[#6B46C1] bg-white/40 p-5 min-[481px]:p-7.5"
                    >
                        <h2 id="prototype-title" className="sr-only">
                            Protótipo navegável da ECOPlay
                        </h2>
                        <EcoplayPrototype />
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Prototipo;