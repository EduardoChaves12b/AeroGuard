import { GlobalStyle } from "../styles/global";
import { MateriaisConteudo } from '../styles/Materiais.styles'
import { useState } from 'react';
import Header from '../components/Header'
import Botao from "../components/Botao";

export default function Materiais() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <MateriaisConteudo $darkMode={darkMode}>
      <Header darkMode={darkMode}/>
      <Botao darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <GlobalStyle/>
    </MateriaisConteudo>
  )
}
