import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import NextPageButton from "../../components/NextPageButton";
import useScrollReveal from "../../hooks/useScrollReveal";

function Sobre() {
    const pageRef = useScrollReveal<HTMLDivElement>();

    return (
        <div ref={pageRef} className="scroll-reveal-page flex min-h-screen flex-col bg-[#D9D9D9] font-['Montserrat',sans-serif] text-[#2C3952]">
            <Header activePage="Sobre" />
            <Hero
                eyebrow="ECOPlay"
                title="Sobre a Solução:"
                subtitle="Entenda a nossa proposta!"
                layout="inner"
            />

            <main className="flex flex-1 justify-center px-5 py-20 min-[769px]:px-5">
                <div className="flex w-full max-w-225 flex-col gap-17.5">
                    <section className="content-fade-in mx-auto w-full max-w-187.5 text-center">
                        <h2 className="shadow-animate mb-6.25 font-['Nico_Moji',sans-serif] text-[3.75rem] font-normal text-[#2C3952]">
                            ECOPlay
                        </h2>
                        <h3 className="mb-5 text-[1.5rem] font-bold">
                            Uma resposta ao desafio da Soul Up
                        </h3>
                        <p className="text-[0.95rem] leading-[1.7] text-justify min-[769px]:text-[1.1rem]">
                            Para responder ao primeiro desafio proposto pela SoulUp, que foca na criação de um Sistema de Gamificação Sustentável capaz de validar ações ambientais e gerar engajamento, desenvolvemos a ECOPlay. Mais do que uma plataforma de pontos, a ECOPlay é um ecossistema que conecta o entusiasmo dos jogos à economia real e ao fortalecimento das comunidades locais.
                        </p>
                    </section>

                    <section className="flex flex-col gap-10">
                        <h2 className="content-fade-in text-center text-[1.5rem] font-bold">
                            Os nossos diferenciais
                        </h2>

                        <div className="flex w-full flex-col gap-7.5">
                            <Card
                                title="Engajamento por Comunidades e Competição"
                                variant="blue"
                            >
                                <p className="mb-3.75">
                                    O coração da solução são as Guildas. Baseadas na localização geográfica dos usuários, elas estimulam a cooperação para atingir metas coletivas de sustentabilidade.
                                </p>
                                <p>
                                    Para manter o dinamismo, estruturamos um fluxo de ranking mensal entre as guildas. Motivando os usuários a competirem e a realizarem atividades sustentáveis constantemente, afim de manter a competitivdade.
                                </p>
                            </Card>

                            <Card
                                title="O Motor de Missões e o Comércio Parceiro - ECOPartner"
                                variant="purple"
                            >
                                <p className="mb-3.75">
                                    Diferente de sistemas comuns, a ECOPlay integra o lojista ao jogo. Através de um ecossistema de assinaturas (<b>ECOPartner</b>), comerciantes podem anunciar missões para atrair usuários às suas lojas (como descarte de resíduos ou compra de produtos eco-friendly).
                                </p>
                                <p>
                                    O grande diferencial está no Sistema de Validação Direta, o próprio comerciante certifica a ação do usuário no local. Isso garante autenticidade, gera fluxo de clientes para os parceiros e permite que as empresas conquistem Selos Sustentáveis. Ao final, os esforços dos usuários são convertidos em benefícios tangíveis, como descontos em produtos e na conta de energia através da Prospera.
                                </p>
                            </Card>
                        </div>
                        <NextPageButton label="Conheça a equipe" page="quem-somos" className="self-end" />
                    </section>
                    
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Sobre;