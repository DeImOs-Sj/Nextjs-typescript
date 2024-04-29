"use client"

import { useTodos } from '@/store/Todos'
import React from 'react'

const todos = () => {

    const { todos } = useTodos()
    // console.log("array output", todos)
    const filterTodos = todos;
    

  return (
    <div>
          <ul>
              
              
              {
              
                  filterTodos.map( function(todo) {
                      return <li >
                          {
                              <input type="checkbox" name="" id={`todo-${todo.id}`} checked={todo.completed} onChange={() => { toggleTodoAsCompleted(todo.id)}}/>
}                          
                      </li>
                      
                  })
              
              }

      </ul>
    </div>
  )
}

export default todos
