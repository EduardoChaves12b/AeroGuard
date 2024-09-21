import { Head } from "../styles/Componentes.styles";
import { GlobalStyle } from "../styles/global";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoLight from "/LogoLight.png"
import LogoDark from "/LogoDark.png"

export default function Header({ darkMode }) {
  return (
    <Head>
        <section id="desktop" className={darkMode ? 'dark' : 'light'}>
            <NavLink to="/">Produto</NavLink>
            <NavLink to="/sobre-nos">Sobre nós</NavLink>
            <img className={darkMode ? 'oculto' : ''} src={LogoLight} alt="Logo AeroGuard" />
            <img className={darkMode ? '' : 'oculto'} src={LogoDark} alt="Logo AeroGuard" />
            <NavLink to="/guia">Guia</NavLink>
            <NavLink to="/referencias">Referências</NavLink>
        </section>
        <GlobalStyle/>
    </Head>
    
  )
}
