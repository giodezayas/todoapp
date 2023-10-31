import React from 'react'
import { Button, FormContainer,Innut,Innut2,Select } from './style'

function Form (){
    return (
        <FormContainer>
            <Innut
            value=''
            type='text'
            role='input'
            />
            <Innut2
            value=''
            type='text'
            role='input'/>
            <Select
            value=''
            role='dropdown'
            >
            <option value="" disabled hidden>
                Escoge la categoría
            </option>
            <option value="WORK">Work</option>
            <option value="HOME"> Home</option>
            <option value="LEARNING">Learning</option>
            </Select>
            
            <Button type='submit'>Add</Button>
        </FormContainer>
    )
}

export default Form 