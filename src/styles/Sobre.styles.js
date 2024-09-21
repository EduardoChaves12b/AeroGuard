import styled from "styled-components"

export const SobreConteudo = styled.main`
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

    #integrantes{
        display: flex;
        align-items: center;
        justify-content: space-around;
        min-height: calc(100vh - 30rem);
        position: relative;
        &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 10%;
            right: 10%;
            height: 7px;
            background-color: ${({ $darkMode }) => ($darkMode ? '#ECF7FE' : '#1A2D7A')};
            z-index: 0;
        }
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding-inline: 1.75rem;
    z-index: 1;
    background-image: linear-gradient(to bottom, ${({ $darkMode }) => ($darkMode ? '#ECF7FE' : '#1A2D7A')}, #1465BB);
    h3{
        font-family: "Open Sans";
        font-size: 2.25rem;
        font-weight: 400;
        text-align: center;
        color: ${({ $darkMode }) => ($darkMode ? '#1A2D7A' : '#ECF7FE')};
        padding-block: 1rem;
    }
    img{
        width: 19rem;
        margin-bottom: 2.5rem;
    }
    a{
        display: flex;
        gap: 1.25rem;
        font-family: "Open Sans";
        font-weight: 400;
        font-size: 2rem;
        text-decoration: none;
        color: #ECF7FE;
        img{
            width: 3.375rem;
        }
    }
`