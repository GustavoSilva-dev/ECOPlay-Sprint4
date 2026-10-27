import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import NextPageButton from "../../components/NextPageButton";
import useScrollReveal from "../../hooks/useScrollReveal";

function Home() {
    const pageRef = useScrollReveal<HTMLDivElement>();

    return (
        <div ref={pageRef} className="scroll-reveal-page flex min-h-screen flex-col bg-[#D9D9D9] font-['Montserrat',sans-serif] text-[#2C3952]">
            <Header activePage="Página Inicial"/>
            <Hero />
            <main className="content-fade-in flex flex-1 items-center p-40 max-[480px]:p-15 max-[1024px]:p-30">
                <div className="mx-auto flex w-full max-w-275 flex-col gap-8.75 min-[1024px]:flex-row min-[1024px]:items-start min-[1024px]:justify-between min-[1024px]:gap-12.5">
                    <div className="flex-1">
                        <p className="mb-1.25 text-[1.1rem] font-normal min-[1024px]:mb-2.5 min-[1024px]:text-[1.5rem]">
                            Conheça a iniciativa...
                        </p>
                        <h1 className="shadow-animate m-0 font-['Nico_Moji',sans-serif] text-[3rem] font-normal leading-tight text-[#2C3952] min-[1024px]:text-[6rem]">
                            ECOPlay
                        </h1>
                    </div>

                    <div className="flex-1">
                        <h2 className="mb-3.75 text-[1.1rem] font-bold leading-tight min-[1024px]:mb-5 min-[1024px]:text-[1.5rem]">
                            O que é a iniciativa “ECOPlay”?
                        </h2>
                        <p className="mb-5 text-[0.95rem] leading-[1.6] min-[1024px]:text-[1.1rem] min-[1024px]:text-justify">
                            A ECOPlay é uma solução inovadora de gamificação desenhada para transformar a sustentabilidade em um hábito diário, engajador e lucrativo.
                        </p>
                        <p className="mb-0 text-[0.95rem] leading-[1.6] min-[1024px]:text-[1.1rem] min-[1024px]:text-justify">
                            Mais do que um simples programa de pontos, a ECOPlay atua como um elo entre o cidadão consciente, as comunidades locais e os estabelecimentos comerciais, engajando os usuários com a economia real de comércios locais e parceiros da plataforma SoulUp.
                        </p>
                        <NextPageButton className="mt-6"/>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Home;