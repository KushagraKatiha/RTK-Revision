import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {todos: [{id: 1, text: 'Hello World'}]},
    reducers:{
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const {id, text} = action.payload
            let existingTodo = state.todos.find(todo => todo.id === id)
            if(existingTodo){
                existingTodo.text = text
            }
        }
    }
})

export const {updateTodo, addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer