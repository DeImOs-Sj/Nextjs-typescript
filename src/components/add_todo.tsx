"use client"
import React, { FormEvent, useState } from 'react'
import { useTodos } from '@/store/Todos'

const add_todo = () => {

    const [todo, setTodo] = useState('');
    console.log(todo)

    const { handleAddTodo } = useTodos();

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddTodo(todo);
        setTodo('');
    }
  return (
      <div className=''>
          <form action="" onClick={handleFormSubmit}>
              <input type="text" placeholder='write your todo' value={todo} onChange={(event)=>setTodo(event.target.value)} id="addtodo" className='border border-red-200' />
              <button type='submit'>Click Me</button>
          </form>
      
    </div>
  )
}

export default add_todo
