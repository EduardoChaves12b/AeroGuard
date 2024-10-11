import { GlobalStyle } from "../styles/global";
import {Artigo, ReferenciasConteudo} from '../styles/Referencias.styles'
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import Header from '../components/Header'
import Botao from "../components/Botao";
import Light from "/HomeLight.png"
import Dark from "/HomeDark.png"

export default function Referencias() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <ReferenciasConteudo $darkMode={darkMode}>
      <Header darkMode={darkMode}/>
      <Botao darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <NavLink to="/"><img className={darkMode ? 'oculto logo' : 'logo'} src={Light} alt="" /></NavLink>
      <NavLink to="/"><img className={darkMode ? 'logo' : 'oculto logo'} src={Dark} alt="" /></NavLink>
      <h1>Referências Bibliográficas</h1>
      <section id="artigos">
        <Artigo $darkMode={darkMode}>
          <h2>1</h2>
          <a href="https://repositorio.pucgoias.edu.br/jspui/handle/123456789/4892" >
            Análise da eficácia de medida caseira e umidificador na melhora da umidade do ar.
          </a>
        </Artigo>
        <Artigo $darkMode={darkMode}>
          <h2>2</h2>
          <a href="">
            Utilização de prototipagem arduino para controlar a umidade em ambientes climatizados.
          </a>
        </Artigo>
        <Artigo $darkMode={darkMode}>
          <h2>3</h2>
          <a href="">
            Associação entre poluição do ar e da asma com níves de poluetes dentro do recomendável.
          </a>
        </Artigo>
        <Artigo $darkMode={darkMode}>
          <h2>4</h2>
          <a href="">
            Poluição ambiental como factor de risco para o aumento de asma brônquica?
          </a>
        </Artigo>
      </section>
      <GlobalStyle/>
    </ReferenciasConteudo>
  )
}
