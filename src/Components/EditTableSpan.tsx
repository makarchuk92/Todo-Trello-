import React, { ChangeEvent, useState } from 'react'

type EditTableSpanPropsType = {
    title: string;
    onChangeView: (newValue: string) => void;
}

const EditTableSpan = (props: EditTableSpanPropsType) => {
  const [editMode, setEditMode] = useState(false)
  const [title, setTitle] = useState("")

  const activateEditMode = () => {
    setEditMode(true)
    setTitle(props.title)
  }
  const activateViewMode = () => {
    setEditMode(false)
    props.onChangeView(title)
  }

  const onChageTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  return (
    editMode ? <input type="text" value={title} autoFocus onBlur={activateViewMode} onChange={onChageTitleHandler} />
    :  <span onDoubleClick={activateEditMode}>{props.title}</span>
  )
}

export default EditTableSpan