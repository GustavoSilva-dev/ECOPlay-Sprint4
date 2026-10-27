import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router";

function ErrorPage() {
    return (
        <div className="flex min-h-screen flex-col bg-[#D9D9D9] font-['Montserrat',sans-serif] text-[#2C3952]">
            <Header />

            <main className="relative flex flex-1 items-center justify-center overflow-hidden px-5 py-32 text-center text-white">
                <div className="relative z-10 flex max-w-175 flex-col items-center">
                    <p className="mb-2 font-['Nico_Moji',sans-serif] text-[#323A99] tracking-[2px]">
                        ECOPlay
                    </p>
                    <p className="mb-3 font-['Nico_Moji',sans-serif] text-[clamp(5rem,18vw,10rem)] leading-none text-[#323A99] drop-shadow-[5px_5px_0_rgb(44_57_82_/_0.25)]">
                        404
                    </p>
                    <h1 className="mb-4 text-2xl text-[#323A99] font-bold min-[769px]:text-4xl">
                        Essa página não existe
                    </h1>
                    <p className="mb-8 max-w-125 text-base leading-relaxed text-[#323A99] min-[769px]:text-lg">
                        Parece que este caminho saiu da rota. Volte para a página inicial e continue sua jornada sustentável com a ECOPlay.
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-[#323A99] no-underline shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#D9D9D9]"
                    >
                        Voltar para a página inicial
                    </Link>
                </div>
            </main>

            <Footer/>
        </div>
    )
}

export default ErrorPage;