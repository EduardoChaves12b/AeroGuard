import styled from "styled-components"

export const ReferenciasConteudo = styled.main`
    background: ${({ $darkMode }) => ($darkMode ? '#1A2D7A' : '#ECF7FE')};
    transition: .5s;
    .oculto{
        display: none;
    }
`