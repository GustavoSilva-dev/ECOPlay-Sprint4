import { useState } from 'react'
import { useNavigate } from 'react-router'
import { PiPlantFill } from "react-icons/pi";

interface headerProps {
    activePage?: string
}

const navigationItems = [
    { label: 'Página Inicial', path: '/' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Quem Somos?', path: '/quem-somos' },
    { label: 'A Solução', path: '/solucao' },
    { label: 'Fluxograma', path: '/fluxograma' },
    { label: 'Contato', path: '/contato' },
    { label: 'FAQ', path: '/faq', active: true },
    { label: 'Acesse a Plataforma', path: '/prototipo' }
]

function Header({ activePage }: headerProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const navigate = useNavigate()

    const handleNavigation = (path: string, closeMobileMenu = false) => {
        navigate(path)
        window.scrollTo(0, 0);

        if (closeMobileMenu) {
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <header className="fixed inset-x-0 top-0 z-1000 border-b-[3px] border-[#D9D9D9] bg-linear-to-r from-[#5360FF] to-[#202658] px-2.5 py-2.5">
            <div className="relative z-10 mx-auto flex max-w-[90vw] items-center justify-between gap-3.75">
                <a
                    href="/"
                    className="animate-[logo-nav-animation_1s_ease-in-out] font-['Nico_Moji',sans-serif] text-5xl leading-none text-white no-underline"
                    aria-label="ECOPlay - Página inicial"
                    onClick={(event) => {
                        event.preventDefault()
                    }}
                >
                    EP
                </a>
                <button
                    type="button"
                    className="block cursor-pointer border-0 bg-transparent text-3xl leading-none text-white min-[921px]:hidden"
                    aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
                >
                    <span aria-hidden="true">&#9776;</span>
                </button>
                <nav className="hidden items-center gap-3 min-[921px]:flex" aria-label="Navegação principal">
                    {navigationItems.map((item) => item.label == "Acesse a Plataforma" ? (
                        <a
                            key={item.path}
                            href={item.path}
                            className={`whitespace-nowrap flex items-center gap-1 drop-shadow-lg font-['Montserrat',sans-serif] text-[1rem] text-black no-underline transition-all duration-300 hover:scale-105 pl-2 rounded-lg pr-2 bg-white font-semibold`}
                            onClick={(event) => {
                                event.preventDefault()
                                handleNavigation(item.path)
                            }}
                        >
                            <PiPlantFill /> {item.label}
                        </a>) : (<a
                            key={item.path}
                            href={item.path}
                            className={`whitespace-nowrap drop-shadow-lg font-['Montserrat',sans-serif] text-[1rem] text-white no-underline transition-all duration-300 hover:bg-[#6B46C1] pl-2 rounded-lg pr-2 ${activePage === item.label ? 'bg-[#6B46C1] font-bold' : 'font-semibold'}`}
                            onClick={(event) => {
                                event.preventDefault()
                                handleNavigation(item.path)
                            }}
                        >
                            {item.label}
                        </a>) 
                    )}
                </nav>
            </div>

            <nav
                className={`absolute left-0 right-0 top-15 z-0 flex w-full flex-col items-center justify-center gap-3.75 rounded-[5px] bg-linear-to-r from-[#5360FF] to-[#202658] p-5 transition-[opacity,visibility] duration-300 min-[921px]:hidden ${isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
                aria-label="Navegação mobile"
            >
                {navigationItems.map((item) => (
                    <a
                        key={item.path}
                        href={item.path}
                        className={`font-['Montserrat',sans-serif] text-[1.2rem] font-semibold text-white/80 no-underline ${item.active ? 'font-bold text-white' : ''}`}
                        onClick={(event) => {
                            event.preventDefault()
                            handleNavigation(item.path, true)
                        }}
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
        </header>
    )
}

export default Header;