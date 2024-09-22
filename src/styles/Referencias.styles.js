import styled from "styled-components"

export const ReferenciasConteudo = styled.main`
    background: ${({ $darkMode }) => ($darkMode ? '#1A2D7A' : '#ECF7FE')};
    transition: .5s;
    min-height: 100vh;
    border: 1.25rem solid ${({ $darkMode }) => ($darkMode ? '#ECF7FE' : '#1A2D7A')};
    h1{
        font-family: "Poppins";
        font-size: 6.125rem;
        font-weight: 400;
        text-align: center;
        color: ${({ $darkMode }) => ($darkMode ? '#ECF7FE' : '#1A2D7A')};
        padding-top: 3.5rem;
    }

    #artigos{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 10rem;
        min-height: calc(100vh - 30rem);
        max-width: 150rem;
    }

`
export const Artigo = styled.div`
    display: flex;

    h2{
        font-family: "Righteous";
        font-weight: 400;
        font-size: 5rem;
        background: ${({ $darkMode }) => ($darkMode ? '#ECF7FE' : '#1A2D7A')};
        color: ${({ $darkMode }) => ($darkMode ? '#1A2D7A' : '#ECF7FE')};
        width: 5rem;
        height: 5.25rem;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 1;
        margin-right: 5.5rem;
    }

    h2::after{
        content: '';
        position: absolute;
        left: 100%;
        top: 45%;
        width: 4.75rem;
        height: .75rem;
        background-color: ${({ $darkMode }) => ($darkMode ? '#ECF7FE' : '#1A2D7A')};
    }

    &::before {
        content: '';
        position: absolute;
        left: 13.325rem;
        top: 30rem;
        bottom: 15%;
        width: 1rem;
        background-color: ${({ $darkMode }) => ($darkMode ? '#ECF7FE' : '#1A2D7A')};
        z-index: 0;
    }

    a{
        font-family: "Open Sans";
        font-size: 2rem;
        color: ${({ $darkMode }) => ($darkMode ? '#ECF7FE' : '#1A2D7A')};
        text-align: center;
        display: flex;
        align-items: center;
        max-width: 95rem;
    }

    .branco{
        filter: invert(100%) brightness(1000%);     
    }
`