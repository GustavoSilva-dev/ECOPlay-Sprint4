import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import useScrollReveal from "../../hooks/useScrollReveal";
import NextPageButton from "../../components/NextPageButton";
import startIcon from "../../assets/imagens/start-icone.png";

const steps = [
    {
        title: "ETAPA 1: Entrada na Plataforma (SoulUp & ECOPlay)",
        description: "O usuário acessa a plataforma SoulUp e entra na seção dedicada ao ECOPlay, onde visualiza o painel principal, as guildas acessíveis e as missões disponíveis.",
    },
    {
        title: "ETAPA 2: Escolha de uma Guilda (Comunidade Local)",
        description: "O cidadão se conecta a uma guilda baseada na sua localização geográfica (seu bairro, condomínio, ou até uma guilda personalizada) para participar de metas coletivas de sustentabilidade.",
    },
    {
        title: "ETAPA 3: Engajamento nas Ações Sustentáveis",
        description: "O usuário escolhe missões disponíveis na proximidade, indo desde missões solo a missões de guilda, como descartar resíduos corretamente no comércio parceiro, praticar reciclagem, plantar árvores ou participar de mutirões de limpeza.",
    },
    {
        title: "ETAPA 4: Plano Pago de Missões de Comércio",
        description: "Comerciantes e empresas assinam planos para anunciar missões personalizadas que atraem usuários até seus estabelecimentos. Não é obrigatório pagar este plano para utilizar a ECOPlay.",
    },
    {
        title: "ETAPA 5: Validação por Machine Learning",
        description: "O sistema utiliza algoritmos de machine learning para validar a autenticidade das ações sustentáveis registradas pelos usuários. Essa validação se aplica apenas às missões não comerciais.",
    },
    {
        title: "ETAPA 6: Validação Direta da Ação",
        description: "Para missões comerciais, o próprio comerciante parceiro certifica que a ação foi feita corretamente no local, garantindo a autenticidade e evitando fraudes.",
    },
    {
        title: "ETAPA 7: Acúmulo de Pontos e Abertura de Lootboxes",
        description: "Ao validar as ações, o usuário ganha pontos e desbloqueia Lootboxes de Bônus, que contêm multiplicadores de recompensas, itens cosméticos e recompensas exclusivas da plataforma.",
    },
    {
        title: "ETAPA 8: Retorno Econômico Real",
        description: "Por fim, os esforços dos usuários são convertidos em benefícios tangíveis, como descontos em produtos e bônus na conta de luz através da Prospera, gerando um fluxo contínuo de valor para a comunidade.",
    },
];

function Fluxograma() {
    const pageRef = useScrollReveal<HTMLDivElement>();

    return (
        <div ref={pageRef} className="scroll-reveal-page flex min-h-screen flex-col bg-[#D9D9D9] font-['Montserrat',sans-serif] text-[#2C3952]">
            <Header activePage="Fluxograma" />
            <Hero
                eyebrow="ECOPlay"
                title="Fluxograma"
                subtitle="Visualizando a jornada do usuário"
                layout="inner"
            />

            <main className="flex flex-1 flex-col items-center px-5 py-15">
                <section className="content-fade-in flex w-full max-w-187.5 flex-col text-center">
                    <p className="mb-2.5 tracking-[5px] text-[0.85rem] text-[#2C3952] min-[769px]:text-[1rem]">
                        ENTENDENDO O FLUXO
                    </p>
                    <h2 className="shadow-animate mb-6.25 font-['Nico_Moji',sans-serif] text-[3.75rem] font-normal text-[#2C3952]">
                        ECOPlay
                    </h2>
                    <p className="text-justify text-[0.95rem] leading-[1.7] min-[769px]:text-center min-[769px]:text-[1.1rem]">
                        Entenda o fluxo básico de funcionalidades da ECOPlay, desde o cadastro até a participação ativa na comunidade sustentável!
                    </p>
                </section>

                <section className="mt-17.5 flex w-full flex-col items-center gap-2.5">
                    <img
                        src={startIcon}
                        alt="Ícone de início"
                        className="animate-[fluxograma-move_2s_ease-in-out_infinite] mb-2 h-20 w-20 object-contain opacity-80"
                    />

                    {steps.map((step, index) => (
                        <div key={step.title} className="flex w-full flex-col items-center">
                            <article
                                className={`content-fade-in flex min-h-62.5 w-full max-w-125 flex-col items-center justify-center z-20 gap-7.5 rounded-xl p-5 text-center text-white shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-102 ${index % 2 === 0 ? "bg-[#5360FF]" : "bg-[#6B46C1]"}`}
                            >
                                <h3 className="text-[1rem] font-bold leading-tight min-[769px]:text-[1.1rem]">
                                    {step.title}
                                </h3>
                                <p className="text-[0.9rem] leading-[1.6] min-[769px]:text-[0.95rem]">
                                    {step.description}
                                </p>
                            </article>
                            {index < steps.length - 1 && (
                                <hr className="content-fade-in h-25 w-0.5 border-0 z-0 bg-[#2C3952]" />
                            )}
                        </div>
                    ))}
                    <NextPageButton label="Entre em contato" page="contato" className="self-center mt-5" />
                </section>
                
            </main>
            <Footer />
        </div>
    );
}

export default Fluxograma;