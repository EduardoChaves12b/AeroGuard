import { GlobalStyle } from "../styles/global";
import {ReferenciasConteudo} from '../styles/Referencias.styles'
import { useState } from 'react';
import Header from '../components/Header'
import Lua from "/IconLua.png"
import Sol from "/IconSol.png"

export default function Referencias() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <ReferenciasConteudo>
      <Header darkMode={darkMode}/>
      <button id="botao" onClick={toggleDarkMode}>
        <img className={darkMode ? 'oculto' : ''} src={Lua} alt="Sol ícone" />
        <img className={darkMode ? '' : 'oculto'} src={Sol} alt="Lua ícone" />
      </button>
      <GlobalStyle/>
    </ReferenciasConteudo>
  )
}
