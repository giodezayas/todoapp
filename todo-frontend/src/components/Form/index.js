import React from 'react';
import { Button, FormContainer, Innut,Innut2, Select } from './style';

function Form(props) {
    const {
        inputValue1,
        setInputValue1,
        inputValue2,
        setInputValue2,
        selectedValue,
        setSelectedValue
    } = props;

    

    return (
        <FormContainer >
            <Innut
                value={inputValue1}
                type='text'
                onChange={(e)=> setInputValue1(e.target.value)}
                role='input'
            />
            <Innut2
                value={inputValue2}
                type='text'
                onChange={(e)=> setInputValue2(e.target.value)}
                role='input'
            />
            <Select value={selectedValue} onChange={(e)=> setSelectedValue(e.target.value)} role='dropdown'>
                <option value="" disabled hidden>
                    Escoge la categoría
                </option>
                <option value="WORK">Work</option>
                <option value="HOME">Home</option>
                <option value="LEARNING">Learning</option>
            </Select>
            <br />
            <Button type='submit'>Add</Button>
        </FormContainer>
    );
}

export default Form;
