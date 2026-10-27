import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import NextPageButton from "../../components/NextPageButton";
import useScrollReveal from "../../hooks/useScrollReveal";
import brayanImage from "../../assets/imagens/brayan.png";
import brenoImage from "../../assets/imagens/breno.jpg";
import diogoImage from "../../assets/imagens/diogo.webp";
import edilsonImage from "../../assets/imagens/edilson.jpeg";
import gustavoImage from "../../assets/imagens/gustavo.jpeg";

interface ContactFormData {
    email: string;
    subject: string;
    message: string;
}

const members = [
    { id: "diogo", name: "Diogo Avelino", image: diogoImage },
    { id: "gustavo", name: "Gustavo Silva", image: gustavoImage },
    { id: "edilson", name: "Edilson Condori", image: edilsonImage },
    { id: "brayan", name: "Brayan dos Santos", image: brayanImage },
    { id: "breno", name: "Breno Henrique", image: brenoImage },
];

function Contato() {
    const pageRef = useScrollReveal<HTMLDivElement>();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormData>({
        mode: "onBlur",
        defaultValues: {
            email: "",
            subject: "",
            message: "",
        },
    });

    const onSubmit = () => {
        setIsSubmitted(true);
    };

    return (
        <div
            ref={pageRef}
            className="scroll-reveal-page flex min-h-screen flex-col bg-[#D9D9D9] font-['Montserrat',sans-serif] text-[#2C3952]"
        >
            <Header activePage="Contato" />
            <Hero
                eyebrow="ECOPlay"
                title="Entre em Contato"
                subtitle="Conosco!"
                layout="inner"
            />

            <main className="flex flex-1 justify-center px-5 py-15 min-[769px]:py-20">
                <div className="flex w-full max-w-150 flex-col items-center gap-7.5">
                    <section className="content-fade-in flex w-full flex-col items-center text-center">
                        <div className="mb-3.75 flex items-center justify-center -space-x-2.5">
                            {members.map((member) => (
                                <Link key={member.name} to={`/quem-somos/${member.id}`} aria-label={`Ver contato de ${member.name}`}>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="h-11.25 w-11.25 rounded-full border-2 border-white object-cover shadow-[0_4px_10px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:z-10 hover:scale-110"
                                    />
                                </Link>
                            ))}
                        </div>

                        <h2 className="shadow-animate mb-3.75 font-['Nico_Moji',sans-serif] text-[3.75rem] font-normal text-[#2C3952] max-[480px]:text-[3rem]">
                            ECOPlay
                        </h2>
                        <p className="text-[1rem] font-medium min-[769px]:text-[1.15rem]">
                            Entre em contato com a equipe da ECOPlay!
                        </p>
                    </section>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                        className="content-fade-in flex w-full flex-col gap-5 rounded-2xl bg-white p-7.5 text-left shadow-[0_10px_30px_rgba(0,0,0,0.08)] min-[481px]:p-10"
                    >
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="font-semibold">
                                EMAIL
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="seuemail@exemplo.com"
                                aria-invalid={Boolean(errors.email)}
                                {...register("email", {
                                    required: "Informe seu email.",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Informe um email válido.",
                                    },
                                })}
                                className="rounded-lg border-2 border-[#D9D9D9] px-4 py-3 outline-none transition-colors focus:border-[#5360FF] aria-[invalid=true]:border-red-500"
                            />
                            {errors.email && (
                                <p className="text-sm font-medium text-red-600">{errors.email.message}</p>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="subject" className="font-semibold">
                                ASSUNTO
                            </label>
                            <input
                                id="subject"
                                type="text"
                                placeholder="Como podemos ajudar?"
                                aria-invalid={Boolean(errors.subject)}
                                {...register("subject", {
                                    required: "Informe o assunto.",
                                    minLength: {
                                        value: 5,
                                        message: "O assunto deve ter no mínimo 5 caracteres.",
                                    },
                                })}
                                className="rounded-lg border-2 border-[#D9D9D9] px-4 py-3 outline-none transition-colors focus:border-[#5360FF] aria-[invalid=true]:border-red-500"
                            />
                            {errors.subject && (
                                <p className="text-sm font-medium text-red-600">{errors.subject.message}</p>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="font-semibold">
                                MENSAGEM
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                placeholder="Escreva sua mensagem..."
                                aria-invalid={Boolean(errors.message)}
                                {...register("message", {
                                    required: "Informe sua mensagem.",
                                    minLength: {
                                        value: 10,
                                        message: "A mensagem deve ter no mínimo 10 caracteres.",
                                    },
                                })}
                                className="resize-none rounded-lg border-2 border-[#D9D9D9] px-4 py-3 outline-none transition-colors focus:border-[#5360FF] aria-[invalid=true]:border-red-500"
                            />
                            {errors.message && (
                                <p className="text-sm font-medium text-red-600">{errors.message.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="mt-1 cursor-pointer rounded-lg bg-[#2D9B67] px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#237A50] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D9B67]"
                        >
                            Enviar mensagem
                        </button>
                        {isSubmitted && (
                            <p role="status" className="text-center font-semibold text-[#2D9B67]">
                                Mensagem validada! Em breve entraremos em contato.
                            </p>
                        )}
                    </form>

                    <NextPageButton page="faq" label="Confira as FAQs" className="self-end" />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Contato;