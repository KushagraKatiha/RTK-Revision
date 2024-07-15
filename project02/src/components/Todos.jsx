// import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { removeTodo, updateTodo } from '../features/reducers/todoSlicer'

// function Todos() {
//     const todos = useSelector(state => state.todos)
//     const dispatch = useDispatch()

//     const [editId, setEditId] = useState(null)
//     const [editText, setEditText] = useState('')

//     const handleEdit = (todo) => {
//       setEditId(todo.id)
//       setEditText(todo.text)
//     }

//     const handleUpdate = (id) => {
//       dispatch(updateTodo({id, text: editText}))
//       setEditId(null)
//       setEditText('')
//     }

//   return (
//     <>
//         <h1>All Your Pending Works !!</h1>
//         <ul>
//           {todos.map(todo => (
//             <li key={todo.id}>
//               <div>
//                 {(editId === todo.id) ? (
//                   <input type="text"
//                   value={editText}
//                   onChange={e => e.target.value}
//                   />
//                 ): (
//                   todo.text
//                 )}
//               </div>
//               <div>
//                 {(editId === todo.id) ? (
//                   <button onClick={handleUpdate(todo.id)}>
//                     Update
//                   </button>
//                 ) : (
//                   <button onClick={handleEdit(todo)}>
//                     +
//                   </button>
//                 )}
//                 <button onClick={() => dispatch(removeTodo(todo.id))}>
//                   X
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//     </>
//   )
// }

// export default Todos




  
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/reducers/todoSlicer'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const [editId, setEditId] = useState(null)
    const [editText, setEditText] = useState('')

    const handleEdit = (todo) => {
        setEditId(todo.id)
        setEditText(todo.text)
    }

    const handleUpdate = (id) => {
        dispatch(updateTodo({ id, text: editText }))
        setEditId(null)
        setEditText('')
    }

    return (
        <>
            <h1 className='text-center text-3xl font-extrabold mt-5 mb-2'>Your Pending Work !!</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} className='flex flex-row justify-between items-center px-4 bg-gray-700 py-2'>
                        <div className='text-white text-xl'>
                            {editId === todo.id ? (
                                <input
                                    type='text'
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    className='bg-gray-600 text-white p-1 rounded'
                                />
                            ) : (
                                todo.text
                            )}
                        </div>
                        <div className='flex gap-5'>
                            {editId === todo.id ? (
                                <button
                                    onClick={() => handleUpdate(todo.id)}
                                    className='p-2 rounded bg-blue-500 text-white'>Update</button>
                            ) : (
                                <button
                                    onClick={() => handleEdit(todo)}
                                    className='p-2 rounded bg-green-500 text-white'>+</button>
                            )}
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className='p-2 rounded bg-red-500 text-white'>X</button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos
