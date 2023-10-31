import React from 'react'
import { Container } from './style'
import Form from '../Form'

function Todo (){
    return (
        <Container>
            <h2 style={{ textAlign: 'center' }}>Lista de Tareas</h2>
            <Form/>
        </Container>
    )
}

export default Todo