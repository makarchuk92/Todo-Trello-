import { ChangeEvent, FormEvent, useState } from "react"
import { FilterValuesType } from "../App"



export type TaskType = {
  id: string
  text: string
  isDone: boolean
}

type PropsType = {
  title: string
  tasks: Array<TaskType>
  removeTodo: (id: string) => void
  changeFilter: (value: FilterValuesType) => void
  addTodo: (input: string) => void
  changeCheckStatus: (taskId: string, isDone: boolean) => void
  filter: FilterValuesType
}



export function Todo(props: PropsType) {

  const [input, setInput] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

 

  const addTask = () => {
    if(input.trim() !== "") {
      props.addTodo(input.trim())
      setInput('')
    } else {
      setError('Field is required')
    }
    
  }

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
    setError(null)
    // const inputElement: HTMLElement | null = document.getElementById('text-input')
    // inputElement?.classList.remove('error-input')
  }



  return (
    <div>
      <input id="text-input" className={error ? "error-input" : ""} type="text" placeholder="What title?" value={input} onChange={onChangeInputHandler} />
      <button onClick={() => addTask()}>+</button>
      {error && <div className="text-input">{error}</div>}
      <h3>{props.title}</h3>
      <ul>
        {props.tasks.map(t => {
            const onChangeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
              props.changeCheckStatus(t.id, e.target.checked)
            }
          return <li key={t.id}>
          <input type="checkbox" checked={t.isDone} onChange={onChangeCheckboxHandler} />
          <span>{t.text}</span>
          <button onClick={() => { props.removeTodo(t.id) }}>x</button>
        </li>
        }
          
          )}

      </ul>
      <div>
        <button className={props.filter == 'all' ? "active-filter" : ""} onClick={() => props.changeFilter('all')}>All</button>
        <button className={props.filter == 'active' ? "active-filter" : ""} onClick={() => props.changeFilter('active')}>Active</button>
        <button className={props.filter == 'completed' ? "active-filter" : ""} onClick={() => props.changeFilter('completed')}>Completed</button>
      </div>
    </div>
  )
}


