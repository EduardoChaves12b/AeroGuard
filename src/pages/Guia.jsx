import { GlobalStyle } from "../styles/global";
import { GuiaConteudo } from '../styles/Guia.styles'
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import Header from '../components/Header'
import Botao from "../components/Botao";
import Configuracao from "/IconConfiguracao.png"
import Controle from "/IconControle.png"
import Funcionalidade from "/IconFuncionalidade.png"
import Light from "/HomeLight.png"
import Dark from "/HomeDark.png"

export default function Guia() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const [guia1, setGuia1] = useState(false);
  const toggleGuia1 = () => {
    setGuia1(!guia1)
  }

  const [guia2, setGuia2] = useState(false);
  const toggleGuia2 = () => {
    setGuia2(!guia2)
  }

  const [guia3, setGuia3] = useState(false);
  const toggleGuia3 = () => {
    setGuia3(!guia3)
  }

  return (
    <GuiaConteudo $darkMode={darkMode}>
      <Header darkMode={darkMode}/>
      <Botao darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <NavLink to="/"><img className={darkMode ? 'oculta logo' : 'logo'} src={Light} alt="" /></NavLink>
      <NavLink to="/"><img className={darkMode ? 'logo' : 'oculta logo'} src={Dark} alt="" /></NavLink>
      <h1>Guia de Ultilização</h1>
      <section id="guias">
          <button onClick={toggleGuia1} className={guia1 ? 'ativo' : 'oculto'}>
            <h3>Funcionalidade</h3>
            <p>O nosso produto monitora a temperatura do ambiente e a umidade do ar de forma contínua e precisa. Após a coleta dos dados, ele processa essas informações e envia um alerta ao usuário por meio do aplicativo.</p>
            <img src={Funcionalidade} alt="" />
          </button>
        <button onClick={toggleGuia2} className={guia2 ? 'ativo' : 'oculto'}>
          <h3>Controle Intuitivo</h3>
          <p>Receba alertas em tempo real no seu aplicativo quando as condições de temperatura ou umidade ultrapassarem os limites definidos. Visualize os dados detalhados das medições recentes e históricas. Ajuste facilmente os limites de alerta e as configurações do dispositivo através do aplicativo.</p>
          <img src={Controle} alt="" />
        </button>
        <button onClick={toggleGuia3} className={guia3 ? 'ativo' : 'oculto'}>
          <h3>Configuração</h3>
          <p>Acesse as configurações no aplicativo para definir os limites desejados para temperatura e umidade. Estabeleça os valores mínimos e máximos aceitáveis para ambos os parâmetros. Isso permitirá que o dispositivo identifique condições fora dos limites e envie alertas correspondentes.</p>
          <img src={Configuracao} alt="" />
        </button>
      </section>

      <section class="videos">
        <div class="jogo">
          <h1>Jogo</h1>
          <iframe class="linkJogo"width="740" height="415" src="https://www.youtube.com/embed/k-IjhUJWbfo?si=TYtbN7EQUADy7fEy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="projeto">
          <h1>Projeto</h1>
          <iframe class="linkProjeto"width="740" height="415" src="https://www.youtube.com/embed/dn-_HtJ0e4E?si=PhGLbp4QC3dBZSw5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>
      <GlobalStyle/>
    </GuiaConteudo>
  )
}
