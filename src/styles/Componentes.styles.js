import styled from "styled-components"

export const Head = styled.header`
    #desktop{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: 10.75rem;
        transition: .3s;

        img{
            width: 10.875rem;
        }

        .oculto{
            display: none;
        }

        a{
            font-family: "Roboto";
            font-size: 2.5rem;
            text-decoration: none;
            width: 14.75rem;
            height: 5.25rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 15px;
        }
    }
    
    .light{
        background: #1A2D7A;
        a{
            color: #ECF7FE;
            background: #1465BB;
        }
    }

    .dark{
        background: #ECF7FE;
        a{
            color: #ECF7FE;
            background: #1A2D7A;
        }
    }

    #logo{
        background: none;
    }

    .mobile, .inativa{display: none;}

    @media (max-width: 430px) {
        #desktop{
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

export const Modo = styled.button`
    all: unset;
    position: absolute;
    right: 1.5rem;

    .oculto{
        display: none;
    }

    img{
        width: 7.125rem;
        aspect-ratio: 1;
        object-fit: cover;
    }
    
    :hover{
        cursor: pointer;
    }

    @media (max-width: 430px) {
        left: 1.25rem;
        top: 2rem;
        max-width: 6.5rem;
    }
`