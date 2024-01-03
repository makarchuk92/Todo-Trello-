import React, { useState } from 'react';
import './App.css';
import TodoList from './Components/TodoList/TodoList';
import { TaskType, Todo } from './Components/Todo';
import { text } from 'stream/consumers';



export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
  const todos = [
    { id: 1, text: 'test1', isDone: true },
    { id: 2, text: 'test2', isDone: false },
    { id: 3, text: 'test3', isDone: true }
  ]

  const [task, setTask] = useState<Array<TaskType>>(todos)
  const [filter, setFilter] = useState<FilterValuesType>('all')
  const [input, setInput] = useState<string>('')

  const addTodo = () => {

    const newTodo = {
      text: input,
      isDone: false,
      id: Date.now()
    }
    setTask([...task, newTodo])
    
  }
  const removeTodo = (id: number) => {
    setTask(prev => prev.filter(todo => todo.id !== id))
  }

  const changeFilter = (value: FilterValuesType) => {
    setFilter(value)
  }

  let taskForTodo = task
  if (filter === 'completed') {
    taskForTodo = task.filter(t => t.isDone === true)
  }
  if (filter === 'active') {
    taskForTodo = task.filter(t => t.isDone === false)
  }

  return (
    <div className="App">
      <Todo title="what to learn?" tasks={taskForTodo} removeTodo={removeTodo} changeFilter={changeFilter} addTodo={addTodo} input={input} setInput={setInput}/>
    </div>
  );
}

export default App;
