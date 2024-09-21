import { GlobalStyle } from "../styles/global";
import { GuiaConteudo } from '../styles/Guia.styles'
import { useState } from 'react';
import Header from '../components/Header'
import Lua from "/IconLua.png"
import Sol from "/IconSol.png"

export default function Guia() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <GuiaConteudo>
      <Header darkMode={darkMode}/>
      <button id="botao" onClick={toggleDarkMode}>
        <img className={darkMode ? 'oculto' : ''} src={Lua} alt="Sol ícone" />
        <img className={darkMode ? '' : 'oculto'} src={Sol} alt="Lua ícone" />
      </button>
      <GlobalStyle/>
    </GuiaConteudo>
  )
}
