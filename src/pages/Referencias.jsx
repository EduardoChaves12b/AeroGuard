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
          <a href="https://repositorio.pucgoias.edu.br/jspui/handle/123456789/4892" target="_blank">
            Análise da eficácia de medida caseira e umidificador na melhora da umidade do ar.
          </a>
        </Artigo>
        <Artigo $darkMode={darkMode}>
          <h2>2</h2>
          <a href="https://memoria.ifrn.edu.br/bitstream/handle/1044/2050/TCC%20vers%C3%A3o%20final.pdf" target="_blank">
            Utilização de prototipagem arduino para controlar a umidade em ambientes climatizados.
          </a>
        </Artigo>
        <Artigo $darkMode={darkMode}>
          <h2>3</h2>
          <a href="https://periodicos.set.edu.br/saude/article/view/10607" target="_blank">
            Associação entre poluição do ar e da asma com níves de poluetes dentro do recomendável.
          </a>
        </Artigo>
        <Artigo $darkMode={darkMode}>
          <h2>4</h2>
          <a href="https://estudogeral.uc.pt/handle/10316/82743" target="_blank">
            Poluição ambiental como factor de risco para o aumento de asma brônquica?
          </a>
        </Artigo>
      </section>
      <GlobalStyle/>
    </ReferenciasConteudo>
  )
}
