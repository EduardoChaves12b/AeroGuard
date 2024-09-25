import styled from "styled-components"

export const MateriaisConteudo = styled.main`
    background: ${({ $darkMode }) => ($darkMode ? '#1A2D7A' : '#ECF7FE')};
    transition: .5s;
    min-height: 100vh;
    border: 1.25rem solid ${({ $darkMode }) => ($darkMode ? '#ECF7FE' : '#1A2D7A')};

    .oculta, .logo{
        display: none;
    }
    @media (max-width: 500px){
        overflow-x: hidden;
        .logo{
            display: block;
            width: 8rem;
            margin-inline: auto;
        }
        .oculta{
            display: none;
        }
    }
`

export const Carrossel = styled.div`
    h1{
        font-family: "Poppins";
        font-size: 6.125rem;
        font-weight: 400;
        text-align: center;
        color: ${({ $darkMode }) => ($darkMode ? '#ECF7FE' : '#1A2D7A')};
        padding-top: 3.5rem;
    }

    #conteudo{
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-inline: 8rem;
        min-height: calc(100vh - 34rem);

        p{
            font-family: "Open Sans";
            color: ${({ $darkMode }) => ($darkMode ? '#ECF7FE' : '#1A2D7A')};
            font-size: 1.833rem;
            max-width: 45rem;
        }

        figcaption{
            text-align: center;
            color: ${({ $darkMode }) => ($darkMode ? '#ECF7FE' : '#1A2D7A')};
            font-size: 3rem;
            font-family: "Open Sans";
        }
    }

    button{
        all: unset;
        position: absolute;
        top: 50%;
        cursor: pointer;

        img{
            max-width: 12rem;
        }
    }

    button:active{
        transform: scale(.9);
    }

    #voltar{
        left: 1rem;
    }

    #avancar{
        right: 1rem;
    }

    .dark img{
        filter: invert(100%) brightness(1000%); 
    }

    @media (max-width: 500px){
        h1{
            font-size: 2.75rem;
            padding-top: 1rem;
        }

        #conteudo{
            flex-direction: column;
            margin-inline: 2rem;
            justify-content: space-evenly;
            img{
                max-width: 21rem;
            }
            p{
                max-width: 31.25rem;
                font-size: 1.25rem;
            }
            figcaption{
                font-size: 1.75rem;
            }
        }

        button{
            top: 33%;
            img{
                max-width: 7.25rem;
            }
        }
    }
`