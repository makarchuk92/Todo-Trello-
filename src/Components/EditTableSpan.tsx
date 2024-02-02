import React, { useState } from 'react'

type EditTableSpanPropsType = {
    title: string;
}

const EditTableSpan = (props: EditTableSpanPropsType) => {
  const [editMode, setEditMode] = useState(false)

  const activateEditMode = () => setEditMode(true)
  const activateViewMode = () => setEditMode(false)

  return (
    editMode ? <input type="text" value={props.title} autoFocus onBlur={activateViewMode} />
    :  <span onDoubleClick={activateEditMode}>{props.title}</span>
  )
}

export default EditTableSpan