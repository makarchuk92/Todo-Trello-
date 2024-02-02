import React, { useState } from 'react';
import './App.css';
import { TaskType, Todo } from './Components/Todo';
import { v1 } from 'uuid';
import AddItemForm from './Components/AddItemForm';
import TodoList from './Components/TodoList/TodoList';



export type FilterValuesType = 'all' | 'active' | 'completed'
type todoListsType = {
  id: string
  title: string
  filter: FilterValuesType
}

type TaskStateType = {
  [key: string]: Array<TaskType>
}

function App() {

  const todoListId1 = v1()
  const todoListId2 = v1()

  const [task, setTask] = useState<TaskStateType>({
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


  const [todoLists, setTodoLists] = useState<Array<todoListsType>>([
    { id: todoListId1, title: 'What to learn', filter: 'all' },
    { id: todoListId2, title: 'What to buy', filter: 'all' }
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
  
  const removeTodoList = (id: string) => {
    const filterTodoList = todoLists.filter(t => t.id !== id)
    setTodoLists(filterTodoList)
  }

  const changeTodoListTitle = (id: string, newTitle: string) => {
    const todoList = todoLists.find(t => t.id === id)
    if(todoList) {
      todoList.title = newTitle
      setTodoLists([...todoLists])
    }
  }

  const addTodoList = (title: string) => {
    const newTodoList: todoListsType = {
      id: v1(),
      title: title,
      filter: 'all'
    }
    setTodoLists([newTodoList, ...todoLists])
    setTask({...task, [newTodoList.id]: []})
  }

  const changeTaskTitle = (taskId: string, newTitle: string, todoListId: string) => {
    const newTask = task[todoListId]
    const newTasks = newTask.find(t => t.id === taskId)
    if (newTasks) {
      newTasks.title = newTitle
      setTask({...task})
    } 
  }


  return (
    <div className="App">
      <AddItemForm addItem={addTodoList} />
      {todoLists.map((todo) => {
        let taskForTodo = task[todo.id]
        if (todo.filter === 'completed') {
          taskForTodo = taskForTodo.filter(t => t.isDone === true)
        }
        if (todo.filter === 'active') {
          taskForTodo = taskForTodo.filter(t => t.isDone === false)
        }
        return <Todo title={todo.title}
          key={todo.id} id={todo.id} removeTodoList={removeTodoList} changeTaskTitle={changeTaskTitle} changeTodoListTitle={changeTodoListTitle}
          tasks={taskForTodo} removeTodo={removeTodo} changeFilter={changeFilter} addTodo={addTodo} changeCheckStatus={changeCheckStatus} filter={todo.filter}
        />
      })}

    </div>
  );
}

export default App;
