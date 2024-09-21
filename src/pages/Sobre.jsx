import { GlobalStyle } from "../styles/global";
import {SobreConteudo, Card} from '../styles/Sobre.styles'
import { useState } from 'react';
import Header from '../components/Header'
import Botao from "../components/Botao";
import Andrey from "/Andrey.png"
import Gabriel from "/Gabriel.png"
import Eduardo from "/Eduardo.png"
import Vinicius from "/Vinicius.png"
import Instagram from "/Instagram.png"
import Linkedin from "/Linkedin.png"

export default function Sobre() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <SobreConteudo $darkMode={darkMode}>
      <Header darkMode={darkMode}/>
      <Botao darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <h1>Sobre nós</h1>
      <section id="integrantes">
        <Card $darkMode={darkMode}>
          <h3>Eduardo Chaves</h3>
          <img src={Eduardo} alt="Eduardo Chaves" />
          <a href=""><img src={Instagram} alt="Instagram" />chves_du</a>
          <a href=""><img src={Linkedin} alt="Linkedin" />Eduardo Chaves</a>
        </Card>
        <Card $darkMode={darkMode}>
          <h3>Gabriel Silva</h3>
          <img src={Gabriel} alt="Gabriel Silva" />
          <a href=""><img src={Instagram} alt="Instagram" />gaabrielsilvas</a>
          <a href=""><img src={Linkedin} alt="Linkedin" />Gabriel Silva</a>
        </Card>
        <Card $darkMode={darkMode}>
          <h3>Andrey Trolezi</h3>
          <img src={Andrey} alt="Andrey Trolezi" />
          <a href=""><img src={Instagram} alt="Instagram" />trolezi.andrey</a>
          <a href=""><img src={Linkedin} alt="Linkedin" />Andrey Trolezi</a>
        </Card>
        <Card $darkMode={darkMode}>
          <h3>Vinicius Alves</h3>
          <img src={Vinicius} alt="Vinicius Alves" />
          <a href=""><img src={Instagram} alt="Instagram" />vinicius01_zs</a>
          <a href=""><img src={Linkedin} alt="Linkedin" />Vinicius Alves</a>
        </Card>
      </section>
      <GlobalStyle/>
    </SobreConteudo>
  )
}