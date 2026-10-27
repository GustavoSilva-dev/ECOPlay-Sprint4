import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import useScrollReveal from "../../hooks/useScrollReveal";
import brayanImage from "../../assets/imagens/brayan.png";
import brenoImage from "../../assets/imagens/breno.jpg";
import diogoImage from "../../assets/imagens/diogo.webp";
import edilsonImage from "../../assets/imagens/edilson.jpeg";
import gustavoImage from "../../assets/imagens/gustavo.jpeg";
import NextPageButton from "../../components/NextPageButton";
import { Link } from "react-router";

interface Member {
    name: string;
    image: string;
    linkedin: string;
    github: string;
    rotaDinamica: string;
    linkedinLabel: string;
    githubLabel: string;
}

const members: Member[] = [
    {
        name: "Diogo Avelino da Silva (RM573931)",
        image: diogoImage,
        linkedin: "https://www.linkedin.com/in/diogo-avelino-da-silva-2148933b5/",
        github: "https://github.com/capitaomiau",
        rotaDinamica: "/quem-somos/diogo",
        linkedinLabel: "diogo-avelino-da-silva",
        githubLabel: "capitaomiau",
    },
    {
        name: "Gustavo Soares Silva (RM573880)",
        image: gustavoImage,
        linkedin: "https://www.linkedin.com/in/gustavo-silva-23575638b/",
        github: "https://github.com/GustavoSilva-dev",
        rotaDinamica: "/quem-somos/gustavo",
        linkedinLabel: "gustavo-silva",
        githubLabel: "GustavoSilva-dev",
    },
    {
        name: "Edilson Condori (RM571464)",
        image: edilsonImage,
        linkedin: "https://www.linkedin.com/in/edilson-condori/",
        github: "https://github.com/Edilson-Cm",
        rotaDinamica: "/quem-somos/edilson",
        linkedinLabel: "edilson-condori",
        githubLabel: "Edilson-Cm",
    },
    {
        name: "Brayan dos Santos Sousa (RM564317)",
        image: brayanImage,
        linkedin: "https://www.linkedin.com/in/brayan-dos-santos-sousas/",
        github: "https://github.com/Brayan511",
        rotaDinamica: "/quem-somos/brayan",
        linkedinLabel: "brayan-dos-santos-sousa",
        githubLabel: "Brayan511",
    },
    {
        name: "Breno Henrique de Castro Rocha (RM572922)",
        image: brenoImage,
        linkedin: "https://www.linkedin.com/in/breno-rocha-53a6523ba?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        github: "https://github.com/BrenoRocha1",
        rotaDinamica: "/quem-somos/breno",
        linkedinLabel: "breno-henrique-de-castro-rocha",
        githubLabel: "BrenoRocha1",
    },
];

function QuemSomos() {
    const pageRef = useScrollReveal<HTMLDivElement>();

    return (
        <div ref={pageRef} className="scroll-reveal-page flex min-h-screen flex-col bg-[#D9D9D9] font-['Montserrat',sans-serif] text-[#2C3952]">
            <Header activePage="Quem Somos?" />
            <Hero
                eyebrow="ECOPlay"
                title="Conheça os Integrantes"
                subtitle="da Solução!"
                layout="inner"
            />

            <main className="flex flex-1 justify-center px-5 py-20">
                <div className="flex w-full max-w-237.5 flex-col gap-15">
                    {members.map((member, index) => (
                        <article
                            key={member.name}
                            className={`content-fade-in flex w-full flex-col items-center gap-7.5 min-[769px]:flex-row min-[769px]:gap-12.5 ${index % 2 === 1 ? "min-[769px]:flex-row-reverse" : ""}`}
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="border-image-animate h-45 w-45 shrink-0 rounded-full border-4object-cover shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
                            />

                            <div className="flex-1 text-center min-[769px]:text-left">
                                <h2 className="mb-3.75 text-[1.15rem] font-bold min-[769px]:text-[1.35rem]">
                                    {member.name}
                                </h2>
                                <p className="mb-3.75 text-[0.95rem] leading-[1.6] min-[769px]:text-[1.05rem]">
                                    Estudante de Análise e Desenvolvimento de Sistemas na FIAP, 1TDSR.
                                </p>
                                <div className="flex flex-wrap justify-center gap-3 min-[769px]:justify-start">
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center rounded-lg bg-[#6B46C1] px-4 py-2 text-sm font-semibold text-white no-underline transition-all duration-300 hover:scale-105 hover:bg-[#51329B]"
                                    >
                                        LinkedIn
                                    </a>
                                    <a
                                        href={member.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center rounded-lg bg-[#5360FF] px-4 py-2 text-sm font-semibold text-white no-underline transition-all duration-300 hover:scale-105 hover:bg-[#323A99]"
                                    >
                                        GitHub
                                    </a>
                                    <Link
                                        to={member.rotaDinamica}
                                        rel="noreferrer"
                                        className="inline-flex items-center rounded-lg bg-[#2D9B67] px-4 py-2 text-sm font-semibold text-white no-underline transition-all duration-300 hover:scale-105 hover:bg-[#2D6B20]"
                                    >
                                        Conhecer contato (rota dinâmica)
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                    <NextPageButton label="Entenda mais a solução" page="solucao" className="self-end" />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default QuemSomos;