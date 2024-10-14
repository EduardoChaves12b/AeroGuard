import styled from "styled-components"

export const HomeConteudo = styled.main`
    padding-top: 6rem;
    padding-bottom: 12rem;
    border: 1.5rem solid ${({ $darkMode }) => ($darkMode ? '#ECF7FE' : '#1A2D7A')};
    background: ${({ $darkMode }) => ($darkMode ? '#1A2D7A' : '#ECF7FE')};
    transition: .5s;
    .oculto, .inativa, .mobile{
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
        gap: 5rem;

        a{
            font-family: "Roboto";
            font-size: 2.75rem;
            font-weight: 400;
            background: ${({ $darkMode }) => ($darkMode ? '#2481E3' : '#1465BB')};
            color: #ECF7FE;
            text-align: center;
            padding-block: .5rem;
            padding-inline: 2rem;
            padding-bottom: 1.5rem;
            padding-top: 1.5rem;
            border-radius: 15px;
            text-decoration: none;
            width: auto;
        }

        a:hover {
            background-color: #119DFC;
            transition: all .5s;
            letter-spacing: 2px;
            opacity: 1; 
            transform: scale(1, 1);
        }
    }

    @media (max-width: 500px) {
        overflow-x: hidden;
        padding-top: 1rem;
        min-height: 100vh;

        .titulo{
            img{
                width: 8rem;
            }
            h1{
                font-size: 2.75rem;
            }
            margin-bottom: 9.5rem;
        }

        .textos{
            h2{
                max-width: 21rem;
                font-size: 2.25rem;
                padding-block: 1rem;
            }

            p{
                width: 30.25rem;
                font-size: 1.5rem;
            }
            gap: 3.5rem;
        }

        h3, .mais{
            display: none;
        }

        .mobile{
            display: block;
            all: unset;
            position: absolute;
            right: 2rem;
            top: 3rem;
        }
        .inativa{
            display: none;
        }
        .ativa{
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            transition: .5s;
            border: solid 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
            z-index: 2;
            padding-block: 1.25rem;

            a{
                text-decoration: none;
                font-size: 2.25rem;
                font-family: "Roboto";
                background: #1465BB;
                width: 12.5rem;
                height: 5.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 15px;
                box-shadow: 0px 4px 4px 0px rgba(0,0,0,.5);
                color: #ECF7FE;
            }
            button{
                all: unset;
                position: absolute;
                left: 1.25rem;
                top: 1.25rem;
                font-family: "Righteous";
                font-size: 2.25rem;
            }
        }
        .dark{
            color: #ECF7FE;
            background: #1A2D7A;
        }
        .light{
            color: #1A2D7A;
            background: #ECF7FE;
        }
    }
`