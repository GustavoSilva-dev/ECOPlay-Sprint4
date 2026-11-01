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
import PlatformAccess from './components/PlatformAccess'
import ProtectedRoute from './components/ProtectedRoute'
import AppHome from './pages/app/Home'
import Missions from './pages/app/Missions'
import Comercios from './pages/app/Comercios'
import Lootboxes from './pages/app/Lootboxes'

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
        <Route path="/plataforma" element={<PlatformAccess />}></Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/plataforma/home" element={<AppHome />}></Route>
          <Route path="/plataforma/missoes" element={<Missions />}></Route>
          <Route path="/plataforma/comercios" element={<Comercios />}></Route>
          <Route path="/plataforma/recompensas" element={<Lootboxes />}></Route>
        </Route>
        <Route path="/*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
