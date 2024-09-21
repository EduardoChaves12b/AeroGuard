import styled from "styled-components"

export const GuiaConteudo = styled.main`
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

    #guias{
        display: flex;
        justify-content: space-around;
        align-items: center;
        min-height: calc(100vh - 30rem);
        gap: 1rem;
        padding-inline: 1rem;

        .oculto{
            background-image: linear-gradient(to bottom, #1A2D7A, #3053E0);
        }

        .ativo{
            background-image: linear-gradient(to bottom, #FBFDFF, rgba(20, 101, 187, .625));
        }
        
        button{
            max-width: 36.75rem;
            min-height: 47.5rem;
            width: 100%;
            border: none;
            border-radius: 15px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            cursor: pointer;
            transition: 0.5s;
            padding-inline: 2.5rem;

            h3{
                font-family: "Open Sans";
                font-weight: 400;
                font-size: 3.5rem;
            }

            img{
                max-width: 17.25rem;
            }

            p{
                font-family: "Righteous";
                font-size: 1.75rem;
                color: #1A2D7A;
                text-align: left;
            }
        }

        button:active{
            transform: scale(.9);
        }
    }

    .oculto p{
        display: none;
    }

    .ativo h3{
        color: #1A2D7A;
    }

    .oculto h3{
        color: #ECF7FE;
    }

    .oculto img{
        filter: invert(100%) brightness(1000%);     
    }
`