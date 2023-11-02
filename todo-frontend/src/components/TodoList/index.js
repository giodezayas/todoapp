import React, { useState } from 'react';
import { ListContainer, Row, Text, DeleteIcon ,Button} from './style';
import axios from '../../axios';

function TodoList({ todos, fetchData }) {
    const [categoryFilter, setCategoryFilter] = useState('');

    const updateTodo = async (id, isCompleted) => {
        try {
            const response = await axios.put(`/todos/${id}`, {
                completed: !isCompleted,
            });
            fetchData();
        } catch (error) {
            console.log(error.message);
        }
    };

    const deleteTodo = async (id) => {
        try {
            const response = await axios.delete(`/todos/${id}`);
            fetchData();
        } catch (error) {
            console.log(error.message);
        }
    };

    const filterByCategory = (category) => {
        setCategoryFilter(category);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' ,marginTop:30}}>
                <Button onClick={() => filterByCategory('home')}>Home</Button>
                <Button onClick={() => filterByCategory('work')}>Work</Button>
                <Button onClick={() => filterByCategory('learning')}>Learning</Button>
                <Button onClick={() => filterByCategory('')}>Clear Filter</Button>
            </div>

            <ListContainer>
                <Row>
                    <Text>Completed</Text>
                    <Text>Titulo</Text>
                    <Text>Descripcion</Text>
                    <Text>Categoria</Text>
                    <Text></Text>
                </Row>

                {todos
                    .filter((todo) => {
                        return categoryFilter ? todo.category === categoryFilter : true;
                    })
                    .map((todo) => (
                        <Row key={todo._id}>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => updateTodo(todo._id, todo.completed)}
                            />
                            <Text isCompleted={todo.completed}>{todo.title}</Text>
                            <Text isCompleted={todo.completed}>{todo.description}</Text>
                            <Text isCompleted={todo.completed}>{todo.category}</Text>
                            <DeleteIcon onClick={() => deleteTodo(todo._id)}>X</DeleteIcon>
                        </Row>
                    ))}
            </ListContainer>
        </div>
    );
}

export default TodoList;
