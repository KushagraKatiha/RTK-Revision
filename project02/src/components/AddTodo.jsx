import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/reducers/todoSlicer'

function AddTodo() {
    const [todoText, setTodoText] = React.useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(todoText))
        setTodoText('')
    }

  return (
    <>
        <form onSubmit={handleSubmit} className='px-4 py-2 bg-violet-600'>
            <div className='flex justify-center gap-5'>
                <label htmlFor="todo"></label>
                <input 
                className='px-3 py-2 border border-gray-300 rounded-md bg-black'
                type="text"
                id='todo' 
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                />
                <button
                type='submit'
                className='px-3 py-2 bg-blue-500 text-white rounded-md'
                >Add Todo</button>
            </div>
        </form>
    </>
  )
}

export default AddTodo