import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
     <h1 className='bg-neutral-900 text-center text-md'>Redux ToolKit 02</h1>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
