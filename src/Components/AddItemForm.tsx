import { Button, TextField, colors } from '@mui/material'
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
        <TextField id="standard-basic" label="Type value" variant="standard" error={!!error} helperText={error} value={input} onChange={onChangeInputHandler} />
        <Button onClick={addTask} variant="contained" size='small' className='btn__addClick'>+</Button>
      </div>
    )
  
  }

export default AddItemForm