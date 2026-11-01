import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import NextPageButton from "../../components/NextPageButton";

interface FaqItem {
    question: string;
    answer: string;
}

const faqItems: FaqItem[] = [
    {
        question: "O que são as guildas e como entro em uma?",
        answer: "Guildas são comunidades de usuários baseadas na sua localização geográfica. Ao se cadastrar, a ECOPlay sugere as guildas mais próximas de você (seu bairro, condomínio ou guilda personalizada). Participar de uma guilda permite que você some pontos para metas coletivas e ganhe recompensas exclusivas da sua região.",
    },
    {
        question: "O que acontece se eu postar um conteúdo falso ou repetido?",
        answer: "Nossa solução utiliza inteligência artificial para detecção de duplicidade e o sistema de validação humana pelos lojistas parceiros. Usuários que tentarem burlar o sistema podem perder pontos ou ter a conta suspensa da guilda para manter a competição justa.",
    },
    {
        question: "Como minha loja pode anunciar missões na ECOPlay?",
        answer: "Comerciantes podem assinar o ECOPartner. Através dele, a IA irá gerar Missões de Comércio, onde os usuários da proximidade são incentivados a visitar seu estabelecimento para realizar ações sustentáveis, como descartar resíduos corretamente, comprar produtos ou tirar fotos.",
    },
    {
        question: "O que vem dentro das Lootboxes?",
        answer: "As Lootboxes são caixas de recompensa que contêm bônus de pontos, multiplicadores de experiência para sua guilda ou até cupons de desconto imediatos para lojas parceiras. Você coleta Lootboxes conforme acumula pontos na plataforma.",
    },
    {
        question: "Como funcionam os rankings?",
        answer: "As guildas das proximidades disputarão em um ranking mensal por quem realiza mais atividades sustentáveis, nisso, as guildas de maior ranking receberão prêmios, como bonus de pontos, bonus de engajamento na plataforma e afins.",
    },
];

function FAQs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="flex min-h-screen flex-col bg-[#D9D9D9] font-['Montserrat',sans-serif] text-[#2C3952]">
            <Header activePage="FAQ" />
            <Hero
                eyebrow="ECOPlay"
                title="FAQs:"
                subtitle="Perguntas Frequentes"
                layout="inner"
            />

            <main className="flex flex-1 justify-center px-5 py-15 min-[769px]:py-20">
                <div className="content-fade-in flex w-full max-w-187.5 flex-col items-center gap-10">
                    <h2 className="shadow-animate font-['Nico_Moji',sans-serif] text-[3.75rem] font-normal text-[#2C3952] max-[480px]:text-[3rem]">
                        ECOPlay
                    </h2>

                    <div className="flex w-full flex-col gap-0.5">
                        {faqItems.map((item, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div key={item.question} className="w-full overflow-hidden">
                                    <button
                                        type="button"
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-answer-${index}`}
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="flex w-full cursor-pointer items-center justify-between gap-5 border-0 bg-white px-7.5 py-5 text-left font-['Montserrat',sans-serif] text-[1rem] font-semibold text-[#2C3952] transition-colors duration-300 hover:bg-[#F7F7F7] max-[480px]:px-5 max-[480px]:py-4 max-[480px]:text-[0.95rem]"
                                    >
                                        <span>{item.question}</span>
                                        <span
                                            aria-hidden="true"
                                            className={`shrink-0 text-[1.25rem] font-bold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                        >
                                            ↓
                                        </span>
                                    </button>
                                    <div
                                        id={`faq-answer-${index}`}
                                        className={`grid transition-[grid-template-rows] duration-400 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                                    >
                                        <div className="min-h-0 overflow-hidden bg-white/40">
                                            <p className="px-7.5 py-6.25 text-justify text-[0.95rem] font-medium leading-[1.6] max-[480px]:px-5 max-[480px]:text-left max-[480px]:text-[0.9rem]">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <NextPageButton page="plataforma" className="self-end" label="Conhecer plataforma"/>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default FAQs;