import styled from "styled-components"

export const ReferenciasConteudo = styled.main`
    background: ${({ $darkMode }) => ($darkMode ? '#1A2D7A' : '#ECF7FE')};
    transition: .5s;
    .oculto{
        display: none;
    }

    #botao{
        all: unset;
        position: absolute;
        right: 1.5rem;

        img{
            width: 7.125rem;
            aspect-ratio: 1;
            object-fit: cover;
        }
    }
    #botao:hover{
        cursor: pointer;
    }
`