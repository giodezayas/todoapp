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

    color: ${(props) => (props.isCompleted ? 'red' : 'black')};
    text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'none')};
`;

export const DeleteIcon = styled.span`
    ::first-letter {
        text-transform: capitalize;
    }
`;

export const Button = styled.button`
    background-color: #ef7360  ;
    margin-left :1em;
    color:white;
    border-radius:10px;
    border:10px solid #ef7360;
    padding:8 px 20px ;
    border-radius:38px;
    cursor :ponter;
    font-size: 0.8rem;
    font-weigth:600;
`;
