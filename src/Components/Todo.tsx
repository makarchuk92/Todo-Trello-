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
}



export function Todo(props: PropsType) {



  const [checkbox, setCheckbox] = useState(false)
  const [input, setInput] = useState<string>('')

  const hundlerSubmit = (e: FormEvent) => {
    e.preventDefault()
    setInput('')
  }

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }



  return (
    <form onSubmit={hundlerSubmit}>
      <input type="text" placeholder="What title?" value={input} onChange={onChangeInputHandler} />
      <button onClick={() => props.addTodo(input)}>+</button>
      <h3>{props.title}</h3>
      <ul>
        {props.tasks.map(t => {
            const onChangeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
              // setCheckbox((state) => !state)
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
        <button onClick={() => props.changeFilter('all')}>All</button>
        <button onClick={() => props.changeFilter('active')}>Active</button>
        <button onClick={() => props.changeFilter('completed')}>Completed</button>
      </div>
    </form>
  )
}


