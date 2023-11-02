import styled from 'styled-components'

export const ListContainer = styled.ul`
    cursor:pointer;
    padding :0px ;
`;


export const Row = styled.li`
    align-items: center;
    display: flex;
    font-size: 1rem;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #ccc; /* Agregar un borde inferior para separar las filas */
`;

export const Text = styled.span`
    ::first-letter {
        text-transform: capitalize;
    }
`;
