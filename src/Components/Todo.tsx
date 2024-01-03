import { FormEvent, useRef, useState } from "react"
import { FilterValuesType } from "../App"



export type TaskType = {
  id: number
  text: string
  isDone: boolean
}

type PropsType = {
  title: string
  tasks: Array<TaskType>
  removeTodo: (id: number) => void
  changeFilter: (value: FilterValuesType) => void
  addTodo: () => void
  setInput: any
  input: string
}




export function Todo(props: PropsType) {


  // const [todos, setTodos] = useState<Itodo[]>([userTest])
  const [checkbox, setCheckbox] = useState(true)

  const hundlerSubmit = (e: FormEvent) => {
    e.preventDefault()
    props.setInput('')

  }

  return (
    <form onSubmit={hundlerSubmit}>
      <input type="text" placeholder="What title?" value={props.input} onChange={e => props.setInput(e.target.value)} />
      <button onClick={() => props.addTodo()}>+</button>
      <h3>{props.title}</h3>
      <ul>
        {props.tasks.map(t => <li>
          <input type="checkbox" defaultChecked={checkbox}  onChange={() => setCheckbox((state) => !state)} /> <span>{t.text}</span><button onClick={() => { props.removeTodo(t.id) }}>x</button>
        </li>)}

      </ul>
      <div>
        <button onClick={() => props.changeFilter('all')}>All</button>
        <button onClick={() => props.changeFilter('active')}>Active</button>
        <button onClick={() => props.changeFilter('completed')}>Completed</button>
      </div>
    </form>
  )
}


