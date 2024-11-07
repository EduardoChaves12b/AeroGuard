import { GlobalStyle } from "../styles/global";
import { Carrossel, MateriaisConteudo } from '../styles/Materiais.styles'
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import Header from '../components/Header'
import Botao from "../components/Botao";
import Voltar from "/IconVoltar.png"
import Avancar from "/IconAvancar.png"
import Arduino from "/NANO.png"
import MQ135 from "/MQ135.png"
import DHT22 from "/DHT22.png"
import HC05 from "/HC05.png"
import OLED from "/OLED.png"
import GPS from "/GPS.png"
import Bateria from "/Bateria.png"
import Light from "/HomeLight.png"
import Dark from "/HomeDark.png"

export default function Materiais() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const contents = [
    {
      title: "Arduino Nano",
      image: Arduino,
      description: "O Arduino Nano é uma placa microcontroladora compacta e de baixo custo baseada no ATmega328, projetada para facilitar o desenvolvimento de projetos de eletrônica e programação. Com dimensões pequenas, ele é ideal para projetos onde o espaço é limitado, como dispositivos vestíveis e sistemas embutidos. A placa conta com 14 pinos digitais (dos quais 6 podem ser usados como saídas PWM), 8 entradas analógicas e um conector mini-USB para programação e comunicação. Além disso, é compatível com a maioria dos sensores, módulos e componentes eletrônicos usados na plataforma Arduino, facilitando a prototipagem de projetos eletrônicos e robóticos.",
      price: "R$ 35,01"
    },

    {
      title: "Sensor MQ-135",
      image: MQ135,
      description: "O Sensor de Qualidade do Ar MQ-135 é usado para detectar poluentes como amônia, monóxido de carbono e benzeno. É ideal para monitoramento ambiental e sistemas de alerta de poluição, possuindo uma saída analógica que varia conforme a concentração dos gases, facilitando a integração com microcontroladores como o Arduino.",
      price: "R$ 13,90"
    },

    {
      title: "Sensor DHT22",
      image: DHT22,
      description: "O Sensor de Umidade e Temperatura DHT22 é um sensor digital utilizado para medir umidade e temperatura com precisão e confiabilidade. Com um único pino de dados, ele é fácil de integrar a microcontroladores como o Arduino, sendo ideal para projetos de monitoramento climático e automação residencial.",
      price: "R$ 19,90"
    },

    {
      title: "Modulo Bluetooth HC-05",
      image: HC05,
      description: "O Módulo Bluetooth HC-05 permite comunicação sem fio via Bluetooth, sendo usado em projetos de eletrônica para conectar microcontroladores como o Arduino. Ele pode operar como mestre ou escravo, facilitando a troca de dados entre dispositivos Bluetooth, ideal para automação e controle remoto em curtas distâncias.",
      price: "R$ 40,76"
    },

    {
      title: "Display OLED",
      image: OLED,
      description: "O display OLED é um tipo de tela que utiliza diodos orgânicos emissores de luz para formar imagens. Ao contrário das telas LCD, que dependem de uma luz de fundo, cada pixel em um display OLED emite sua própria luz quando uma corrente elétrica passa por ele. Essa característica permite que os OLEDs tenham cores vibrantes, pretos profundos e altos níveis de contraste. Além disso, são mais eficientes em termos de energia para exibir cenas escuras, têm ângulos de visão amplos e geralmente são mais finos e flexíveis, tornando-os ideais para dispositivos móveis, TVs e wearables.",
      price: "R$ 17,91"
    },

    {
      title: "Módulo GPS",
      image: GPS,
      description: "O módulo GPS para Arduino permite que o Arduino receba dados precisos de geolocalização, como latitude, longitude e altitude, captando sinais de satélites. Compacto e fácil de conectar, é ideal para projetos portáteis, drones e sistemas de rastreamento, oferecendo dados de localização em tempo real, sem depender da internet.",
      price: "R$ 39,90"
    },

    {
      title: "Bateria e Pilhas",
      image: Bateria,
      description: "O Suporte para 4 Pilhas AA com Plug para Arduino oferece uma fonte de energia portátil de 6V para projetos. Com um plug compatível com o Arduino, facilita a alimentação do microcontrolador e outros componentes, sendo ideal para projetos móveis ou que necessitam de alimentação independente de USB.",
      price: "R$ 69,80"
    }

  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + contents.length) % contents.length);
  };

  return (
    <MateriaisConteudo $darkMode={darkMode}>
      <Header darkMode={darkMode}/>
      <Botao darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <NavLink to="/"><img className={darkMode ? 'oculta logo' : 'logo'} src={Light} alt="" /></NavLink>
      <NavLink to="/"><img className={darkMode ? 'logo' : 'oculta logo'} src={Dark} alt="" /></NavLink>
      <Carrossel $darkMode={darkMode}>
        <h1>{contents[currentIndex].title}</h1>
        <div id="conteudo">
          <figure>
            <a href=""><img className="imagem" src={contents[currentIndex].image} alt={contents[currentIndex].title} /></a>
            <figcaption>{contents[currentIndex].price}</figcaption>
          </figure>
          <p>{contents[currentIndex].description}</p>
        </div>
        <button onClick={handlePrev} id="voltar" className={darkMode ? 'dark' : ''}><img src={Voltar}/></button>
        <button onClick={handleNext} id="avancar" className={darkMode ? 'dark' : ''}><img src={Avancar}/></button>
      </Carrossel>
      <GlobalStyle/>
    </MateriaisConteudo>
  )
}
