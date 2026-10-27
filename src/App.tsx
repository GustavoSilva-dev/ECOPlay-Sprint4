import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/institucional/Home'
import Sobre from './pages/institucional/Sobre'
import ErrorPage from './pages/institucional/ErrorPage'
import QuemSomos from './pages/institucional/QuemSomos'
import Solucao from './pages/institucional/Solucao'
import Fluxograma from './pages/institucional/Fluxograma'
import Contato from './pages/institucional/Contato'
import FAQs from './pages/institucional/FAQs'
import ContatoDinamico from './pages/institucional/ContatoDinamico'
import Register from './pages/auth/Register'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sobre" element={<Sobre />}></Route>
        <Route path="/quem-somos" element={<QuemSomos />}></Route>
        <Route path="/solucao" element={<Solucao />}></Route>
        <Route path="/fluxograma" element={<Fluxograma />}></Route>
        <Route path="/contato" element={<Contato />}></Route>
        <Route path="/quem-somos/:id" element={<ContatoDinamico />}></Route>
        <Route path="/faq" element={<FAQs />}></Route>
        <Route path="/prototipo" element={<Register />}></Route>
        <Route path="/*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
