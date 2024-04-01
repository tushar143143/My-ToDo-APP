import React from 'react';
import './App.css';
import AddTodo from './component/AddTodo';
import Todos from './component/Todos';

function App() {
  // Main component rendering the To-Do application
  return (
    <>
      {/* Heading */}
      <h1 className='font-serif text-3xl'>To-Do Application For QuadB TECH</h1>
      
      {/* AddTodo component to add new tasks */}
      <AddTodo/>
      
      {/* Todos component to display the list of tasks */}
      <Todos/>
    </>
  );
}

export default App;
