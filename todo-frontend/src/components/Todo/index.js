import React,{useState} from 'react'
import { Container } from './style'
import Form from '../Form'

function Todo (){
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    console.log(inputValue1,"titulo")
    console.log(inputValue2,"descripcion")
    console.log(selectedValue,"categoria")
    return (
        <Container>
            <h2 style={{ textAlign: 'center' }}>Lista de Tareas</h2>
            <Form
                inputValue1={inputValue1}
                setInputValue1={setInputValue1}
                inputValue2={inputValue2}
                setInputValue2={setInputValue2}
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
            />
        </Container>
    )
}

export default Todo