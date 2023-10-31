import styled from 'styled-components'

export const FormContainer = styled.div`
    display : flex  ;
    align-items:center;
    justify-content:center;
    padding:5px 0px ;
`;
export const Innut = styled.input`
    background-color: #f7f7f7  ;

    border:1px solid #ef7360;
    padding:8px ;
    border-radius:8px;
    :focus {
        border:3px solid #ef7360;
        outline:none;
    }
`;
export const Innut2 = styled.input`
    background-color: #f7f7f7  ;
    margin-left :1em;
    border:1px solid #ef7360;
    padding:8px ;
    border-radius:8px;
    :focus {
        border:3px solid #ef7360;
        outline:none;
    }
`;
export const Select = styled.select`
    background-color: #f7f7f7  ;
    margin-left :1em;
    border:1px solid #ef7360;
    padding:8px ;
    border-radius:8px;
    :focus {
        border:3px solid #ef7360;
        outline:none;
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