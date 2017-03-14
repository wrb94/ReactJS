import { TOGGLE_TODO } from '../actions/actions'

const initialState = {
  todos: [
    { id: 1, completed: true, text: 'Task 1', priority: false },
    { id: 2, completed: false, text: 'Task 2', priority: false }
  ]
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if (todo.id === action.id) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo
        })
      })
    default:
      return state
  }
}

export default todoReducer
