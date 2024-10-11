import { GlobalStyle } from "../styles/global";
import {SobreConteudo, Card} from '../styles/Sobre.styles'
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import Header from '../components/Header'
import Botao from "../components/Botao";
import Andrey from "/Andrey.png"
import Gabriel from "/Gabriel.png"
import Eduardo from "/Eduardo.png"
import Vinicius from "/Vinicius.png"
import Instagram from "/Instagram.png"
import Linkedin from "/Linkedin.png"
import Light from "/HomeLight.png"
import Dark from "/HomeDark.png"

export default function Sobre() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <SobreConteudo $darkMode={darkMode}>
      <Header darkMode={darkMode}/>
      <Botao darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <NavLink to="/"><img className={darkMode ? 'oculta logo' : 'logo'} src={Light} alt="" /></NavLink>
      <NavLink to="/"><img className={darkMode ? 'logo' : 'oculta logo'} src={Dark} alt="" /></NavLink>
      <h1>Sobre nós</h1>
      <section id="integrantes">
        <Card $darkMode={darkMode}>
          <h3>Eduardo Chaves</h3>
          <img src={Eduardo} alt="Eduardo Chaves" />
          <a href="https://www.instagram.com/chves_du/"><img src={Instagram} alt="Instagram" />chves_du</a>
          <a href="https://www.linkedin.com/in/eduardo-chaves-7078492ba/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={Linkedin} alt="Linkedin" />Eduardo Chaves</a>
        </Card>
        <Card $darkMode={darkMode}>
          <h3>Gabriel Silva</h3>
          <img src={Gabriel} alt="Gabriel Silva" />
          <a href="https://www.instagram.com/gaabrielsilvas/"><img src={Instagram} alt="Instagram" />gaabrielsilvas</a>
          <a href="https://www.linkedin.com/in/gabriel-souza-silva-b79795252/"><img src={Linkedin} alt="Linkedin" />Gabriel Silva</a>
        </Card>
        <Card $darkMode={darkMode}>
          <h3>Andrey Trolezi</h3>
          <img src={Andrey} alt="Andrey Trolezi" />
          <a href="https://www.instagram.com/trolezi.andrey/"><img src={Instagram} alt="Instagram" />trolezi.andrey</a>
          <a href="https://www.linkedin.com/in/andrey-trolezi-3239552b8/"><img src={Linkedin} alt="Linkedin" />Andrey Trolezi</a>
        </Card>
        <Card $darkMode={darkMode}>
          <h3>Vinicius Alves</h3>
          <img src={Vinicius} alt="Vinicius Alves" />
          <a href="https://www.instagram.com/vinicius01_zs/"><img src={Instagram} alt="Instagram" />vinicius01_zs</a>
          <a href="https://www.linkedin.com/in/vinicius-alves-6b8aa4262/"><img src={Linkedin} alt="Linkedin" />Vinicius Alves</a>
        </Card>
      </section>
      <GlobalStyle/>
    </SobreConteudo>
  )
}