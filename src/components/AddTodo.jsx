import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
    const [input, setInput] = React.useState('')

    const dispatch = useDispatch()

    const addTodoHandler = e => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
        <input type="text" 
            className='bg-gray-800 rounded border border-gray-700 focus:outline-none focus:border-blue-500  focus:ring-blue-500 text-base outline-none text-gray-100 px-3 py-1 leading-8 transition-colors duration-200 ease-in-out'
            placeholder='Add a todo...'
            value={input}
            onChange={e => setInput(e.target.value)}
        />

        <button
            type='submit'
            className='text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg'
        >
            Add a Todo
        </button>
    </form>
  )
}

export default AddTodo