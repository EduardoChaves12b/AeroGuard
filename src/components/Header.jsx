import { Head } from "../styles/Componentes.styles";
import { GlobalStyle } from "../styles/global";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoLight from "/LogoLight.png"
import LogoDark from "/LogoDark.png"
import Menu from "/IconMenu.png"

export default function Header({ darkMode }) {
  
  const [ativa, SetAtiva] = useState(false);
  const ToggleAtiva = () => {
    SetAtiva(!ativa)
  }
  
  return (
    <Head>
        <section id="desktop" className={darkMode ? 'dark' : 'light'}>
            <NavLink to="/materiais">Materiais</NavLink>
            <NavLink to="/sobre-nos">Sobre nós</NavLink>
            <NavLink to="/" id="logo" className={darkMode ? 'oculto' : ''}><img src={LogoLight} alt="Logo AeroGuard" /></NavLink>
            <NavLink to="/" id="logo" className={darkMode ? '' : 'oculto'}><img src={LogoDark} alt="Logo AeroGuard" /></NavLink>
            <NavLink to="/guia">Guia</NavLink>
            <NavLink to="/referencias">Referências</NavLink>
        </section>

        <section id="mobile" className={`${ativa ? 'ativa' : 'inativa'} ${darkMode ? 'dark' : 'light'}`}>
            <NavLink to="/materiais">Materiais</NavLink>
            <NavLink to="/sobre-nos">Sobre nós</NavLink>
            <NavLink to="/guia">Guia</NavLink>
            <NavLink to="/referencias">Referências</NavLink>
            <button onClick={ToggleAtiva}>X</button>
        </section>

        <button className="mobile" onClick={ToggleAtiva}><img src={Menu} alt="" /></button>
        <GlobalStyle/>
    </Head>
    
  )
}
