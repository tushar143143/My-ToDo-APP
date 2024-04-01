import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

// AddTodo component handles adding new todos
function AddTodo() {
    // State to manage the input value
    const [input, setInput] = useState('');
    // Redux dispatch function
    const dispatch = useDispatch();

    // Handler function to add a new todo
    const addTodoHandler = (e) => {
        e.preventDefault(); // Prevent form submission
        // Check if input is not empty or only contains whitespace characters
        if (input.trim() !== '') {
            // Dispatch addTodo action with the input value
            dispatch(addTodo(input));
            // Clear the input field
            setInput('');
        } else {
            // If input is empty, show an alert message
            alert('Empty text cannot be added as a todo.');
        }
    };

    // JSX for the AddTodo component
    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Add Todo
            </button>
        </form>
    );
}

export default AddTodo;
