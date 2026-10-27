import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import useScrollReveal from "../../hooks/useScrollReveal";
import businessIcon from "../../assets/imagens/business-icon.png";
import gearIcon from "../../assets/imagens/engrenagem-icone.png";
import NextPageButton from "../../components/NextPageButton";

function Solucao() {
    const pageRef = useScrollReveal<HTMLDivElement>();

    return (
        <div ref={pageRef} className="scroll-reveal-page flex min-h-screen flex-col bg-[#D9D9D9] font-['Montserrat',sans-serif] text-[#2C3952]">
            <Header activePage="A Solução" />
            <Hero
                eyebrow="ECOPlay"
                title="Entendendo a Solução!"
                subtitle="Aprofundando a ideia"
                layout="inner"
            />

            <main className="flex flex-1 justify-center px-5 py-20">
                <div className="flex w-full max-w-225 flex-col gap-17.5">
                    <section className="content-fade-in mx-auto w-full max-w-187.5 text-center">
                        <h2 className="shadow-animate mb-6.25 font-['Nico_Moji',sans-serif] text-[3.75rem] font-normal text-[#2C3952]">
                            ECOPlay
                        </h2>
                        <h3 className="mb-5 text-center text-[1.25rem] font-bold">
                            A estrutura da solução
                        </h3>
                        <p className="mb-5 text-justify text-[0.95rem] leading-[1.7] min-[769px]:text-[1.1rem]">
                            A ECOPlay é uma plataforma integrada de gamificação desenhada sob medida para o ecossistema SoulUp/Prospera. Nosso objetivo é transformar ações ecológicas isoladas em um hábito diário divertido, altamente competitivo e financeiramente recompensador.
                        </p>
                        <p className="text-justify text-[0.95rem] leading-[1.7] min-[769px]:text-[1.1rem]">
                            Através de dinâmicas baseadas em geolocalização, dividimos as cidades em guildas, estimulando o espírito de comunidade. No ecossistema ECOPlay, o usuário joga para ajudar o planeta, ganha prêmios individuais através de Lootboxes, compete em dinâmicas aceleradas de Pontos Privados (PV) e, ao final, converte seus esforços em descontos reais na conta de luz via Prospera ou em produtos no comércio da sua região.
                        </p>
                    </section>

                    <section className="mx-auto flex w-full max-w-187.5 flex-col">
                        <img src={gearIcon} alt="" className="animate-[rotate_3s_linear_infinite] mb-7.5 h-12.5 w-12.5 self-center opacity-80" />
                        <h2 className="content-fade-in mb-5 text-center text-[1.5rem] font-bold leading-tight">
                            Engenharia e Tecnologia: O que há por trás do jogo?
                        </h2>
                        <p className="content-fade-in mb-10 text-justify text-[0.95rem] leading-[1.7] min-[769px]:text-[1.1rem]">
                            Para construir uma solução escalável, segura e focada em uma excelente experiência de produto, planejamos uma arquitetura tecnológica robusta dividida em três pilares principais:
                        </p>

                        <div className="flex flex-col gap-10">
                            <article className="content-fade-in">
                                <h3 className="mb-5 text-center text-[1.1rem] font-bold">
                                    1. Inteligência Artificial e Arquitetura de Backend Híbrida
                                </h3>
                                <p className="mb-5 text-justify text-[0.95rem] leading-[1.7] min-[769px]:text-[1.05rem]">
                                    <strong>O que faz:</strong> Analisa de forma preliminar os posts e imagens enviados pelos usuários, além de cuidar da segurança e das requisições do projeto. Toda a inteligência e as regras de negócio do ecossistema rodam de forma dividida e especializada para garantir a máxima performance da plataforma.
                                </p>
                                <p className="text-justify text-[0.95rem] leading-[1.7] min-[769px]:text-[1.05rem]">
                                    <strong>Tecnologias:</strong> O núcleo principal do sistema será desenvolvido em <strong>Spring Boot (Java)</strong>. Em paralelo, serviços em <strong>Python</strong> rodam exclusivamente para cuidar da Inteligência Artificial do projeto, consumindo e processando APIs de visão computacional de forma assíncrona.
                                </p>
                            </article>

                            <article className="content-fade-in">
                                <h3 className="mb-5 text-center text-[1.1rem] font-bold">
                                    2. Motor de Gamificação e Banco de Dados Escalável
                                </h3>
                                <p className="mb-5 text-justify text-[0.95rem] leading-[1.7] min-[769px]:text-[1.05rem]">
                                    <strong>O que faz:</strong> Controla a distribuição de pontos, atualização do ranking de Guildas em tempo real, lógica de distribuição de Lootboxes diárias e o sistema de recompensas.
                                </p>
                                <p className="text-justify text-[0.95rem] leading-[1.7] min-[769px]:text-[1.05rem]">
                                    <strong>Tecnologias:</strong> Banco de dados relacional e de alta performance <strong>(PostgreSQL/MySQL)</strong> gerenciado com máxima estabilidade através do <strong>Spring Data JPA</strong>.
                                </p>
                            </article>

                            <article className="content-fade-in">
                                <h3 className="mb-5 text-center text-[1.1rem] font-bold">
                                    3. Frontend Web e Mobile: Interface Responsiva e Fluida
                                </h3>
                                <p className="mb-5 text-justify text-[0.95rem] leading-[1.7] min-[769px]:text-[1.05rem]">
                                    <strong>O que faz:</strong> Toda a camada visual com a qual os usuários e os comerciantes parceiros interagem, garantindo uma navegação intuitiva nas missões, rankings, mapas e painéis de validação.
                                </p>
                                <p className="text-justify text-[0.95rem] leading-[1.7] min-[769px]:text-[1.05rem]">
                                    <strong>Tecnologias:</strong> A interface do ecossistema será desenvolvida utilizando <strong>React</strong>, atendendo às especificações técnicas estabelecidas pela SoulUp e garantindo componentes reutilizáveis, performance e uma experiência responsiva.
                                </p>
                            </article>
                        </div>
                    </section>

                    <section className="content-fade-in mx-auto flex w-full max-w-187.5 flex-col">
                        <img src={businessIcon} alt="" className="animate-[move_2s_linear_infinite] mb-5 h-12.5 w-12.5 self-center opacity-80" />
                        <h2 className="mb-5 text-center text-[1.5rem] font-bold leading-tight">
                            O Diferencial de Negócio: Parceria B2B e Validação Direta
                        </h2>
                        <p className="mb-5 text-justify text-[0.95rem] leading-[1.7] min-[769px]:text-[1.1rem]">
                            O grande diferencial de engenharia de processos da ECOPlay é o Painel do Comerciante. Em vez de sobrecarregar os servidores tentando validar tudo via robôs, nós integramos o lojista local ao ecossistema.
                        </p>
                        <h3 className="content-fade-in mb-5 text-center text-[1.1rem] font-bold">Como funciona?</h3>
                        <p className="content-fade-in mb-5 text-justify text-[0.95rem] leading-[1.7] min-[769px]:text-[1.1rem]">
                            O comerciante assina o ECOPartner para anunciar missões em sua loja física. Quando o usuário vai até lá e cumpre o desafio, o próprio lojista valida a ação no sistema.
                        </p>
                        <h3 className="content-fade-in mb-5 text-center text-[1.1rem] font-bold">O resultado</h3>
                        <p className="content-fade-in text-justify text-[0.95rem] leading-[1.7] min-[769px]:text-[1.1rem]">
                            A integração direta com os comerciantes parceiros resulta em uma validação mais precisa e rápida dos desafios, aumentando a confiança dos usuários e a eficiência operacional da plataforma.
                        </p>
                    </section>
                    <NextPageButton label="Fluxograma do usuário" page="fluxograma" className="self-end" />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Solucao;