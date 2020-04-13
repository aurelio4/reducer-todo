import React, { useState, useReducer } from 'react'
import { reducer, initialState } from './reducers/reducer'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import './App.css'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [newTask, setNewTask] = useState('')

  const handleChange = e => {
    setNewTask(e.target.value)
  }

  const handleTodoUpdate = id => {
    dispatch({ type: 'UPDATE_TODO_STATUS', payload: id })
  }

  const handleDispatch = () => {
    dispatch({ type: 'ADD_TODO', payload: newTask })
    setNewTask('')
  }

  const handleRemoveCompleted = () => {
    dispatch({ type: 'REMOVE_COMPLETED' })
  }

  return (
    <>
      <TodoInput newTask={newTask} handleTextChange={handleChange} handleRemoveCompleted={handleRemoveCompleted} dispatch={handleDispatch} />
      <TodoList todos={state} handleTodoUpdate={handleTodoUpdate}  />
    </>
  );
}