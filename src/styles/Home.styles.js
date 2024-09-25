import styled from "styled-components"

export const HomeConteudo = styled.main`
    padding-top: 6rem;
    padding-bottom: 12rem;
    border: 1.5rem solid ${({ $darkMode }) => ($darkMode ? '#ECF7FE' : '#1A2D7A')};
    background: ${({ $darkMode }) => ($darkMode ? '#1A2D7A' : '#ECF7FE')};
    transition: .5s;
    .oculto{
        display: none;
    }

    .titulo{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 18rem;

        img{
            width: 17rem;
        }

        h1{
            font-family: "Poppins";
            font-size: 7.125rem;
            font-weight: 400;
            color: ${({ $darkMode }) => ($darkMode ? '#ECF7FE' : '#1A2D7A')};
            max-width: 38.875rem;
            text-align: center;
            line-height: .9;
        }
    }

    .textos{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4rem;
        
        h2{
            font-family: "Roboto";
            font-size: 4.25rem;
            font-weight: 400;
            background: ${({ $darkMode }) => ($darkMode ? '#2481E3' : '#1465BB')};
            color: #ECF7FE;
            text-align: center;
            padding-block: .5rem;
            padding-inline: 2rem;
            border-radius: 15px;
            box-shadow: 0px 4px 4px 0px rgba(0,0,0,.5);
        }

        p{
            font-family: "Open Sans";
            font-size: 3.125rem;
            text-align: center;
            width: 69rem;
            color: ${({ $darkMode }) => ($darkMode ? '#ECF7FE' : '#1A2D7A')};
        }
    }

    h3{
        font-family: "Poppins";
        font-size: 7.125rem;
        font-weight: 400;
        text-align: center;
        color: ${({ $darkMode }) => ($darkMode ? '#ECF7FE' : '#1A2D7A')};
        margin-block: 6rem;
    }

    .mais{
        display: grid;
        grid-template-columns: repeat(2, 20rem);
        justify-content: space-evenly;
        margin-inline: 2rem;
        gap: 10rem;

        a{
            font-family: "Roboto";
            font-size: 2.75rem;
            font-weight: 400;
            background: ${({ $darkMode }) => ($darkMode ? '#2481E3' : '#1465BB')};
            color: #ECF7FE;
            text-align: center;
            padding-block: .5rem;
            padding-inline: 2rem;
            border-radius: 15px;
            text-decoration: none;
            width: auto;
        }
    }

`