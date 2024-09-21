import { GlobalStyle } from "../styles/global";
import { GuiaConteudo } from '../styles/Guia.styles'
import { useState } from 'react';
import Header from '../components/Header'
import Botao from "../components/Botao";

export default function Guia() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <GuiaConteudo $darkMode={darkMode}>
      <Header darkMode={darkMode}/>
      <Botao darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <GlobalStyle/>
    </GuiaConteudo>
  )
}
