import { FormEvent, useRef, useState } from "react"
import Task from "./Task"

interface Itodo {
    tasks: string
    completed?: boolean
    id?: number
  }

type TaskType = {
  id: number
  title: string
  isDone: boolean
}  

type PropsType = {
  title: string,
  tasks: Array <TaskType>
  removeTodo: (id: number) => void
}
 

export function Todo  (props: PropsType)  {
 
        const [value, setValue] = useState<any>([])
        
        // const [todos, setTodos] = useState<Itodo[]>([userTest])

        const hundlerSubmit = (e: FormEvent) => {
          e.preventDefault()
          console.log(value);
          
        }
  
  
        
        // const removeTodo = (id: number) => {
        //   setTodo(prev => prev.filter(todo => todo.id === id))
        // }
      
        // const addTodo = (title: string) => {
        //   const newTodo: Itodo = {
        //     title: title,
        //     completed: false,
        //     id: Date.now()
        //   }

        
        //   // setTodo(prev => [newTodo, ...todo])
        // }

        // const addTodo = (task: string) => {
              
        //         const newTodo: Itodo = {
        //           tasks: task,
        //           completed: false,
        //           id: Date.now()
        //         }
        //           // setTodos([...todos, newTodo])
        // }
      
 
      
      
        return (
          <form onSubmit={hundlerSubmit}>
             <input type="text" placeholder="What title?" value={value} onChange={e => setValue(e.target.value)}/>
             <button>+</button>
             <h3>{props.title}</h3>
             <ul>
              {props.tasks.map(t =>  <li>
                <input type="checkbox" checked={t.isDone} /> <span>{t.title}</span><button onClick={() => {props.removeTodo(t.id)}}>x</button>
                </li> )} 
              
             </ul>
             
          </form>
        )
      }


