import React from 'react';
import { ListContainer, Row, Text } from './style';

function TodoList({ todos }) {
    return (
        <div>
            <ListContainer>
                {todos?.map((todo) => (
                    <Row key={todo._id}>
                        <Text>
                            {todo.title}
                        </Text>
                        <Text>
                            {todo.description}
                        </Text>
                        <Text>
                            {todo.category}
                        </Text>
                    </Row>
                ))}
            </ListContainer>
        </div>
    );
}

export default TodoList;
