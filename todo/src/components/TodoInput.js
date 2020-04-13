import React from 'react'
import '../App.css'

export default function TodoInput(props) {
  return(
    <div className="input-container">
      <input type="text" value={props.newTask} onChange={props.handleTextChange} />
      <button type="submit" onClick={props.dispatch}>Add Task</button>
      <button type="submit" onClick={props.handleRemoveCompleted}>Remove Completed Tasks</button>
    </div>
  )
}