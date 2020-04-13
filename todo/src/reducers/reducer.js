export const initialState = [
{
  item: 'test',
  completed: false,
  id: Date.now()
}]

export const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
      ]
    case 'UPDATE_TODO_STATUS':
        return state.map(todo => {
          return todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
        })

    case 'REMOVE_COMPLETED':
        return state.filter(todo => !todo.completed)
    default:
      return state
  }
}