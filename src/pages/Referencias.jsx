import { GlobalStyle } from "../styles/global";
import {Artigo, ReferenciasConteudo} from '../styles/Referencias.styles'
import { useState } from 'react';
import Header from '../components/Header'
import Botao from "../components/Botao";
import Baixar from "/Baixar.png"
import PDF from "/PDF.png"

export default function Referencias() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <ReferenciasConteudo $darkMode={darkMode}>
      <Header darkMode={darkMode}/>
      <Botao darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <h1>Referências Bibliográficas</h1>
      <section id="artigos">
        <Artigo $darkMode={darkMode}>
          <h2>1</h2>
          <a href="https://repositorio.pucgoias.edu.br/jspui/handle/123456789/4892">
            Análise da eficácia de medida caseira e umidificador na melhora da umidade do ar.
            <img src={PDF} alt="PDF" />
            <img className={darkMode ? 'branco' : ''} src={Baixar} alt="Baixar ícone" />
          </a>
        </Artigo>
        <Artigo $darkMode={darkMode}>
          <h2>2</h2>
          <a href="">
            Utilização de prototipagem arduino para controlar a umidade em ambientes climatizados.
            <img src={PDF} alt="PDF" />
            <img className={darkMode ? 'branco' : ''} src={Baixar} alt="Baixar ícone" />
          </a>
        </Artigo>
        <Artigo $darkMode={darkMode}>
          <h2>3</h2>
          <a href="">
            Associação entre poluição do ar e da asma com níves de poluetes dentro do recomendável.
            <img src={PDF} alt="PDF" />
            <img className={darkMode ? 'branco' : ''} src={Baixar} alt="Baixar ícone" />
          </a>
        </Artigo>
        <Artigo $darkMode={darkMode}>
          <h2>4</h2>
          <a href="">
            Poluição ambiental como factor de risco para o aumento de asma brônquica?
            <img src={PDF} alt="PDF" />
            <img className={darkMode ? 'branco' : ''} src={Baixar} alt="Baixar ícone" />
          </a>
        </Artigo>
      </section>
      <GlobalStyle/>
    </ReferenciasConteudo>
  )
}
