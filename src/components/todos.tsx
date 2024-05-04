"use client"
import { useTodos } from '@/store/Todos'
import React from 'react'

const Todos = () => {
    const { todos, handleTodoDelete, toggleTodoAsCompleted } = useTodos();

    // Assuming filterTodos is defined elsewhere in your code
    const filterTodos = todos;

    return (
        <div>
            <ul>
                {filterTodos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            id={`todo-${todo.id}`}
                            checked={todo.completed}
                            onChange={() => toggleTodoAsCompleted(todo.id)}
                        />
                        <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
                        {todo.completed && (
                            <button type="button" onClick={() => handleTodoDelete(todo.id)}>Delete</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;
