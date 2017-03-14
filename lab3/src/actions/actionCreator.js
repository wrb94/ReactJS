import { TOGGLE_TODO } from './actions'

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  }
}
