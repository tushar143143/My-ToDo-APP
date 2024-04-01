import {createSlice, nanoid } from '@reduxjs/toolkit';
export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: JSON.parse(localStorage.getItem('todos')) || [{id: 1, text: "Hello world", completed: false}]
    },
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload,
                completed: false
            }
            state.todos.push(todo);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload );
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
                localStorage.setItem('todos', JSON.stringify(state.todos));
            }
        },
    }
})

export const {addTodo, removeTodo,toggleTodo} = todoSlice.actions

export default todoSlice.reducer