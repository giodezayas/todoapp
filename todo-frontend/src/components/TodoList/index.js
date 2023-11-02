import React ,{useState}from 'react';
import { ListContainer, Row, Text,DeleteIcon } from './style';
import axios from '../../axios'

function TodoList({ todos,fetchData }) {
    const updateTodo=async(id,isCompleted)=>{
        try {
            const response =await axios.put(`/todos/${id}`,{
                completed: !isCompleted
            })
            fetchData();
        
        } catch (error) {
            console.log(error.message);
        }
    };
    const deleteTodo=async(id)=>{
        try {
            const response =await axios.delete(`/todos/${id}`,{
                id
            })
            fetchData();
        
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <div>
            <ListContainer>
                <Row >
                        <Text>  
                            Completed  
                        </Text>
                        <Text>
                           Titulo
                        </Text>
                        <Text>
                           Descripcion
                        </Text>
                        <Text>
                          Categoria
                        </Text>
                        <Text>    
                        </Text>
                </Row>
                {todos?.map((todo) => (
                    <Row key={todo._id} >
                        <input
                            type="checkbox"
                            checked={todo.completed} 
                            onChange={() => updateTodo(todo._id,todo.completed)} 
                            
                        />
                        <Text isCompleted={todo.completed}>
                            {todo.title}
                        </Text>
                        <Text isCompleted={todo.completed}>
                            {todo.description}
                        </Text>
                        <Text isCompleted={todo.completed}>
                            {todo.category}
                        </Text>
                        <DeleteIcon  onClick={() => deleteTodo(todo._id)} >X</DeleteIcon>
                    </Row>
                ))}
            </ListContainer>
        </div>
    );
}

export default TodoList;
