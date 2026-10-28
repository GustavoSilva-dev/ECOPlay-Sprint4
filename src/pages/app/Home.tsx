import TopBar from "./components/TopBar";
import MissionsSection from "./components/MissionsSection";
import QuickShortcuts from "./components/QuickShortcuts";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Home() {
    return (
        <div className="min-h-screen bg-gray-50 font-['Montserrat',sans-serif] text-slate-800 flex flex-col">
            <Header />
            <div className="pt-18">
                <TopBar />
                <main className="mx-auto mt-6 max-w-4xl space-y-8 px-4 sm:px-6">
                    <MissionsSection />
                    <QuickShortcuts />
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
