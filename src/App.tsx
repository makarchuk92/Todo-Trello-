import React, { useState } from 'react';
import './App.css';
import { TaskType, Todo } from './Components/Todo';
import { v1 } from 'uuid';



export type FilterValuesType = 'all' | 'active' | 'completed'
type todoListsType = {
  id: string
  title: string
  filter: FilterValuesType
}

function App() {
  const todos = [
    { id: v1(), text: 'test1', isDone: true },
    { id: v1(), text: 'test2', isDone: false },
    { id: v1(), text: 'test3', isDone: true }
  ]


  const [task, setTask] = useState<Array<TaskType>>(todos)

  const [todoLists, setTodoLists] = useState <Array<todoListsType>>([
    {id: v1(), title: 'What to learn', filter: 'active'},
    {id: v1(), title: 'What to buy', filter: 'active'}
  ]) 
 

  const addTodo = (input: string) => {

    const newTodo: TaskType = {
      text: input,
      isDone: false,
      id: Date.now().toString()
    }

    
      setTask([newTodo, ...task])
     //else{
    //   const element: HTMLElement | null = document.getElementById('text-input')
    //   element?.classList.add('error-input')
    // }
    
    
  }
  const removeTodo = (id: string) => {
    setTask(prev => prev.filter(todo => todo.id !== id))
  }

  const changeFilter = (value: FilterValuesType, todoListId: string) => {
     const todoList = todoLists.find( t => t.id === todoListId)
    if(todoList) {
      todoList.filter = value
      setTodoLists([...todoLists])
    }
  }

  const changeCheckStatus = (taskId: string, isDone: boolean) => {
    const newTask = task.find( t => t.id === taskId)
    if(newTask) {
      newTask.isDone = isDone
    }
    setTask([...task])
  }

 

  return (
    <div className="App">
      {todoLists.map((todo) => {
         let taskForTodo = task
         if (todo.filter === 'completed') {
           taskForTodo = task.filter(t => t.isDone === true)
         }
         if (todo.filter === 'active') {
           taskForTodo = task.filter(t => t.isDone === false)
         }
        return <Todo title={todo.title}
        key={todo.id} id={todo.id}
        tasks={taskForTodo} removeTodo={removeTodo} changeFilter={changeFilter} addTodo={addTodo} changeCheckStatus={changeCheckStatus} filter={todo.filter}
         />
      })}
      
    </div>
  );
}

export default App;
