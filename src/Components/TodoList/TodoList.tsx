import React, { FormEvent, useRef, useState } from 'react'
import './TodoList.css'



type PropsType = {
  title: string
}


function TodoList(props: PropsType) {
  const [value, setValue] = useState<any>([])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(value)
  }

  return (
    <div>
        <h3>{props.title}</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} 
            />
            <button>+</button>
        </form>
        <ul className='list'>
            <li><input type="checkbox" checked={true}/><span>CSS&HTML</span></li><button>x</button>
            <li><input type="checkbox" checked={true}/><span>JS</span></li>
            <li><input type="checkbox" checked={false}/><span>React</span></li>
        </ul>
        <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    </div>
  )
}

export default TodoList