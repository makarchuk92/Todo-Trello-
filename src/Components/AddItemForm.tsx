import React, { ChangeEvent, useState } from 'react'

export type AddItemFormPropsType = {
    addItem: (input: string) => void
  }


  const AddItemForm = (props: AddItemFormPropsType) => {
    const [input, setInput] = useState<string>('')
    const [error, setError] = useState<string | null>(null)
  
    const addTask = () => {
      if (input.trim() !== "") {
        props.addItem(input.trim())
        setInput('')
      } else {
        setError('Field is required')
      }
  
    }
  
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value)
      setError(null)

    }
  
    return (
      <div>
        <input id="text-input" className={error ? "error-input" : ""} type="text" placeholder="What title?" value={input} onChange={onChangeInputHandler} />
        <button onClick={() => addTask()}>+</button>
        {error && <div className="text-input">{error}</div>}
      </div>
    )
  
  }

export default AddItemForm