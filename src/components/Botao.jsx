import { Modo } from "../styles/Componentes.styles"
import Lua from "/IconLua.png"
import Sol from "/IconSol.png"

export default function Botao({ darkMode, toggleDarkMode }) {
  return (
    <Modo $darkMode={darkMode} onClick={toggleDarkMode}>
        <img className={darkMode ? 'oculto' : ''} src={Lua} alt="Sol ícone" />
        <img className={darkMode ? '' : 'oculto'} src={Sol} alt="Lua ícone" />
    </Modo>
  )
}
