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
  // const todos = [
  //   { id: v1(), text: 'test1', isDone: true },
  //   { id: v1(), text: 'test2', isDone: false },
  //   { id: v1(), text: 'test3', isDone: true }
  // ]
  const todoListId1 = v1()
  const todoListId2 = v1()

  const [task, setTask] = useState({
    [todoListId1]: [
      { id: v1(), title: 'test1', isDone: true },
      { id: v1(), title: 'test2', isDone: false },
      { id: v1(), title: 'test3', isDone: true }
    ],
    [todoListId2]: [
      { id: v1(), title: 'test4', isDone: true },
      { id: v1(), title: 'test5', isDone: false },
      { id: v1(), title: 'test6', isDone: true }
    ]
  }
  )

  // const [task, setTask] = useState<Array<TaskType>>(todos)



  const [todoLists, setTodoLists] = useState<Array<todoListsType>>([
    { id: todoListId1, title: 'What to learn', filter: 'active' },
    { id: todoListId2, title: 'What to buy', filter: 'active' }
  ])




  const addTodo = (title: string, todoListId: string) => {

    const newTodo: TaskType = {
      id: v1(),
      title: title,
      isDone: false,
    }
    const newTask = task[todoListId]
    const newTodos = [newTodo, ...newTask]
    task[todoListId] = newTodos

    setTask({...task})
    //else{
    //   const element: HTMLElement | null = document.getElementById('text-input')
    //   element?.classList.add('error-input')
    // }


  }
  const removeTodo = (id: string, todoListId: string) => {
    const newTask = task[todoListId]
    const filterTask = newTask.filter(prev => prev.id != id)
    task[todoListId] = filterTask
    setTask({...task})
  }

  const changeFilter = (value: FilterValuesType, todoListId: string) => {
    const todoList = todoLists.find(t => t.id === todoListId)
    if (todoList) {
      todoList.filter = value
      setTodoLists([...todoLists])
    }
  }

  const changeCheckStatus = (taskId: string, isDone: boolean, todoListId: string) => {
    const newTask = task[todoListId]
    const newTasks = newTask.find(t => t.id === taskId)
    if (newTasks) {
      newTasks.isDone = isDone
      setTask({...task})
    }
    
  }



  return (
    <div className="App">
      {todoLists.map((todo) => {
        let taskForTodo = task[todo.id]
        if (todo.filter === 'completed') {
          taskForTodo = taskForTodo.filter(t => t.isDone === true)
        }
        if (todo.filter === 'active') {
          taskForTodo = taskForTodo.filter(t => t.isDone === false)
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
