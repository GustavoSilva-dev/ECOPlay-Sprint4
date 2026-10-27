import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import brayanImage from "../../assets/imagens/brayan.png";
import brenoImage from "../../assets/imagens/breno.jpg";
import diogoImage from "../../assets/imagens/diogo.webp";
import edilsonImage from "../../assets/imagens/edilson.jpeg";
import gustavoImage from "../../assets/imagens/gustavo.jpeg";

interface Member {
    id: string;
    name: string;
    rm: string;
    image: string;
    email: string;
    fiapEntryYear: number;
    linkedin: string;
    github: string;
}

const members: Member[] = [
    {
        id: "diogo",
        name: "Diogo Avelino da Silva",
        rm: "RM573931",
        image: diogoImage,
        email: "diogoavelinods@gmail.com",
        fiapEntryYear: 2026,
        linkedin: "https://www.linkedin.com/in/diogo-avelino-da-silva-2148933b5/",
        github: "https://github.com/capitaomiau",
    },
    {
        id: "gustavo",
        name: "Gustavo Soares Silva",
        rm: "RM573880",
        image: gustavoImage,
        email: "gustavosilvaxx25@gmail.com",
        fiapEntryYear: 2026,
        linkedin: "https://www.linkedin.com/in/gustavo-silva-23575638b/",
        github: "https://github.com/GustavoSilva-dev",
    },
    {
        id: "edilson",
        name: "Edilson Condori",
        rm: "RM571464",
        image: edilsonImage,
        email: "edilsoncondori08@gmail.com",
        fiapEntryYear: 2026,
        linkedin: "https://www.linkedin.com/in/edilson-condori/",
        github: "https://github.com/Edilson-Cm",
    },
    {
        id: "brayan",
        name: "Brayan dos Santos Sousa",
        rm: "RM564317",
        image: brayanImage,
        email: "brayandossantossousa4@gmail.com",
        fiapEntryYear: 2025,
        linkedin: "https://www.linkedin.com/in/brayan-dos-santos-sousas/",
        github: "https://github.com/Brayan511",
    },
    {
        id: "breno",
        name: "Breno Henrique de Castro Rocha",
        rm: "RM572922",
        image: brenoImage,
        email: "brenohenrique91901@gmail.com",
        fiapEntryYear: 2026,
        linkedin: "https://www.linkedin.com/in/breno-rocha-53a6523ba?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        github: "https://github.com/BrenoRocha1",
    },
];

function ContatoDinamico() {
    const { id } = useParams<{ id: string }>();
    const [member, setMember] = useState<Member | null>(null);

    useEffect(() => {
        const selectedMember = members.find((contact) => contact.id === id);
        setMember(selectedMember ?? null);
    }, [id]);

    if (!member) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#D9D9D9] px-5 text-center font-['Montserrat',sans-serif] text-[#2C3952]">
                <p className="font-semibold">Integrante não encontrado.</p>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen flex-col bg-[#D9D9D9] font-['Montserrat',sans-serif] text-[#2C3952]">
            <Header activePage="Quem Somos?" />
            <Hero
                eyebrow="ECOPlay"
                title={member.name}
                subtitle="Integrante da ECOPlay"
                layout="inner"
            />

            <main className="flex flex-1 justify-center px-5 py-15 min-[769px]:py-20">
                <div className="content-fade-in flex w-full max-w-150 flex-col gap-7.5">
                    <section className="flex flex-col items-center gap-4">
                        <img
                            src={member.image}
                            alt={`Foto de ${member.name}`}
                            className="h-36 w-36 rounded-full border-4 border-[#6B46C1] object-cover shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
                        />
                        <p className="text-base font-semibold text-[#6B46C1]">{member.rm}</p>
                    </section>

                    <section className="grid gap-5 min-[600px]:grid-cols-2">
                        <article className="rounded-2xl bg-white p-7.5 text-center shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                            <h2 className="mb-3 text-lg font-bold">Email</h2>
                            <p className="break-words text-[0.95rem]">{member.email}</p>
                        </article>
                        <article className="rounded-2xl bg-white p-7.5 text-center shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                            <h2 className="mb-3 text-lg font-bold">Ano de entrada na FIAP</h2>
                            <p className="text-2xl font-bold text-[#6B46C1]">{member.fiapEntryYear}</p>
                        </article>
                    </section>

                    <section className="flex flex-wrap justify-center gap-3">
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg bg-[#6B46C1] px-5 py-3 font-semibold text-white no-underline transition-all duration-300 hover:scale-105 hover:bg-[#51329B]"
                        >
                            LinkedIn
                        </a>
                        <a
                            href={member.github}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg bg-[#5360FF] px-5 py-3 font-semibold text-white no-underline transition-all duration-300 hover:scale-105 hover:bg-[#323A99]"
                        >
                            GitHub
                        </a>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default ContatoDinamico;