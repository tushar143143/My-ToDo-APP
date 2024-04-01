// Import the `configureStore` function from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Import the todoReducer from its location
import todoReducer from '../features/todo/todoSlice';

// Create a Redux store using `configureStore`
export const store = configureStore({
    // Define the initial state and reducers for the store
    reducer: {
        // Assign the `todoReducer` to the 'todos' slice of the store
        todos: todoReducer
    }
});
