import { ChangeEvent, FormEvent, useState } from "react"
import { FilterValuesType } from "../App"
import AddItemForm from "./AddItemForm"
import EditTableSpan from "./EditTableSpan"



export type TaskType = {
  id: string
  title: string
  isDone: boolean
}

type PropsType = {
  id: string
  title: string
  tasks: Array<TaskType>
  removeTodo: (id: string, todoListId: string) => void
  changeFilter: (value: FilterValuesType, todoListId: string) => void
  addTodo: (input: string, todoListId: string) => void
  changeCheckStatus: (taskId: string, isDone: boolean, todoListId: string) => void
  changeTaskTitle: (taskId: string, newTitle: string, todoListId: string) => void
  filter: FilterValuesType
  removeTodoList: (id: string) => void
  changeTodoListTitle: (id: string, newTitle: string) => void
}



export function Todo(props: PropsType) {


  const removeTodoList = () => {
    props.removeTodoList(props.id)
  }

  const changeTodoListTitle = (newTitle: string) => {
    props.changeTodoListTitle(props.id, newTitle)
  }

  const addNewTodo = (title: string) => {
    props.addTodo(title, props.id)
  }


  return (
    <div>
      <h3> <EditTableSpan title={props.title} onChangeView={changeTodoListTitle}/> <button onClick={removeTodoList}>x</button></h3>
      <AddItemForm addItem={addNewTodo} />
      <ul>
        {props.tasks.map(t => {
          const onChangeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeCheckStatus(t.id, e.target.checked, props.id)
          }

          const onChangeView = (newTitle: string) => {
            props.changeTaskTitle(t.id, newTitle, props.id)
          }
          return <li key={t.id} className={t.isDone ? "is-done" : ''} >
            <input type="checkbox" checked={t.isDone} onChange={onChangeCheckboxHandler} />
            <EditTableSpan title={t.title} onChangeView={onChangeView}/>
            <button onClick={() => { props.removeTodo(t.id, props.id) }}>x</button>
          </li>
        }

        )}

      </ul>
      <div>
        <button className={props.filter == 'all' ? "active-filter" : ""} onClick={() => props.changeFilter('all', props.id)}>All</button>
        <button className={props.filter == 'active' ? "active-filter" : ""} onClick={() => props.changeFilter('active', props.id)}>Active</button>
        <button className={props.filter == 'completed' ? "active-filter" : ""} onClick={() => props.changeFilter('completed', props.id)}>Completed</button>
      </div>
    </div>
  )
}




