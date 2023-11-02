import React,{useEffect, useState} from 'react'
import { Container } from './style'
import Form from '../Form'
import TodoList from '../TodoList'
import axios from '../../axios'

function Todo (){
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const [todos, setTodos] = useState([]); 
    const  fetchData=async()=>{
        try {
            const response  =await axios.get("/todos");
            setTodos(response.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(()=>{
        fetchData();
    },[]);

    const  addTodo=async(e)=>{
        try {
           
            e.preventDefault();
            if (inputValue1.length===0 || inputValue2.length===0 || !(selectedValue==="WORK"||selectedValue==="HOME"||selectedValue==="LEARNING")) return null
            await axios.post("/todos",[
                {
                    ...todos,
                    title:inputValue1,
                    description:inputValue2,
                    category:selectedValue,
                    completed:false,
                }
            ]);
           fetchData();
           setInputValue1("")
           setInputValue2("")
           setSelectedValue("Escoge la categoría")
        } catch (error) {
            console.log(error.message);
        }
    };

    console.log(todos)
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
                addTodo={addTodo}
            />
            <TodoList todos={todos}/>
        </Container>
    )
}

export default Todo