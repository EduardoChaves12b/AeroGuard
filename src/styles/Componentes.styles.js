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
`