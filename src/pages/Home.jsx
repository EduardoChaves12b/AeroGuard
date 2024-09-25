import { GlobalStyle } from "../styles/global";
import { HomeConteudo } from '../styles/Home.styles'
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import HomeLight from "/HomeLight.png"
import HomeDark from "/HomeDark.png"
import Botao from "../components/Botao";
import Menu from "/IconMenu.png"


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const [ativa, SetAtiva] = useState(false);
  const ToggleAtiva = () => {
    SetAtiva(!ativa)
  }
  return (
    <HomeConteudo $darkMode={darkMode}>
      <Botao darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <section id="mobile" className={`${ativa ? 'ativa' : 'inativa'} ${darkMode ? 'dark' : 'light'}`}>
        <NavLink to="/materiais">Materiais</NavLink>
        <NavLink to="/sobre-nos">Sobre nós</NavLink>
        <NavLink to="/guia">Guia</NavLink>
        <NavLink to="/referencias">Referências</NavLink>
        <button onClick={ToggleAtiva}>X</button>
      </section>
      <button className="mobile" onClick={ToggleAtiva}><img src={Menu} alt="" /></button>

      <div className="titulo">
        <NavLink to="/"><img className={darkMode ? 'oculto' : ''} src={HomeLight} alt="" /></NavLink>
        <NavLink to="/"><img className={darkMode ? '' : 'oculto'} src={HomeDark} alt="" /></NavLink>
        <h1>AeroGuard Tech</h1>
      </div>

      <div className="textos">
        <h2>Sobre o Produto</h2>
        <p>Apresentamos nossa solução inovadora para problemas respiratórios, projetada para transformar a maneira como você cuida da sua saúde. Junte-se a nós nesta jornada de avanço tecnológico em prol de uma melhor qualidade de vida.</p>
        <h2>Publico alvo</h2>
        <p>Nosso produto é feito especificamente para pessoas com problemas respiratórios, sejam elas crianças, adultos ou idosos. fizemos pensando em dar uma melhor qualidade de vida para todos.</p>
      </div>

      <h3>Saiba Mais</h3>
      <div className="mais">
        <NavLink to="/sobre-nos">Sobre nós</NavLink>
        <NavLink to="/materiais">Materiais</NavLink>
        <NavLink to="/referencias">Referências</NavLink>
        <NavLink to="/guia">Guia</NavLink>
      </div>
      
      <GlobalStyle />
    </HomeConteudo>
  )
}
