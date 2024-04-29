import React from 'react'
import AddTodo from "../components/add_todo"
import Todos from '../components/todos'

const page = () => {
  return (
    <main>
      Heres is a todo app 
      <AddTodo />
      <Todos/>
   </main>
  )
}

export default page
