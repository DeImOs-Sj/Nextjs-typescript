"use client"
import { exportTraceState } from "next/dist/trace";
import { Children, createContext, ReactNode, useContext, useState } from "react";

export const todosContext = createContext< TodosContex|null>(null)

export type Todo = {
    id: string;
    task: string; 
    completed: boolean;
    createdAt: Date;

}

export type TodosContex = {
    todos: Todo[];
    handleAddTodo: (task: string) => void;
    
}

export const TodosProvider = ({children}: { children: ReactNode }) => {
    const [todos,setTodos] =useState<Todo[]>([])

    const handleAddTodo = (task:string) => {
        setTodos((prev) => {
            const newTodos: Todo[] = [
                {
                id: Math.random().toString(),
                task,
                completed: false,
                createdAt:new Date()
            },
            ...prev

            ]
            return newTodos
        }
        )
    }

    return (
        <todosContext.Provider value={{todos,handleAddTodo}}>
            {children}
        </todosContext.Provider>
    )
}


export function useTodos() {
    const todosContextValue = useContext(todosContext)
    if (!todosContextValue) {
        throw new Error('UseTodo use outside of provider')
    }
    return todosContextValue
}