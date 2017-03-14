import { TOGGLE_TODO } from '../actions/actions'

const todoReducer = (state = [], action) => {
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
