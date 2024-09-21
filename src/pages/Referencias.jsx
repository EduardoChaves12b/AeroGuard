import { GlobalStyle } from "../styles/global";
import {ReferenciasConteudo} from '../styles/Referencias.styles'
import { useState } from 'react';
import Header from '../components/Header'
import Botao from "../components/Botao";

export default function Referencias() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <ReferenciasConteudo $darkMode={darkMode}>
      <Header darkMode={darkMode}/>
      <Botao darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <GlobalStyle/>
    </ReferenciasConteudo>
  )
}
