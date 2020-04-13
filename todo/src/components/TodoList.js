import React from 'react'
import '../App.css'

export default function TodoList(props) {
  return props.todos
  ? 
  (
    <ul className="list-container" key="ul-todo-list">
      {props.todos.map(todo => {
        return(
          <li key={todo.id} className={todo.completed ? 'completed' : ''} onClick={() => props.handleTodoUpdate(todo.id)}>{todo.item}</li>
        )
      })}
    </ul>
  )
  : <p>No items in list</p> 
}