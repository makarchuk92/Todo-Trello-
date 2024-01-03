import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Components/TodoList/TodoList';
import { Todo } from './Components/Todo';


function App() {
  const todos = [
    { id: 1, title: 'test1', isDone: true },
    { id: 2, title: 'test2', isDone: false},
    { id: 3, title: 'test3', isDone: true}
  ]

  const [task, setTask] = useState(todos)

  const removeTodo = (id: number) => {
    const filterTodo = task.filter( t => t.id !== id)
    setTask(filterTodo)
  }

  return (
    <div className="App">
      {/* <TodoList title='What is done' />
      <TodoList title='In progress' />
      <TodoList title='What needs to be done' /> */}
      <Todo title="what to learn?" tasks={task} removeTodo={removeTodo}/>
      
    </div>
  );
}

export default App;
