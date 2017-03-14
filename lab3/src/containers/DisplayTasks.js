import { connect } from 'react-redux'
import TestApp from '../components/TestApp'
import { toggleTodo } from '../actions/actionCreator'

const sortTasks = (todos) => {
  return todos.sort(function (a, b) {
    return (a.completed === b.completed) ? 0 : a.completed ? 1 : -1
  })
}

const mapStateToProps = (state) => {
  return {
    todos: sortTasks(state.todos)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    markCompleted: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestApp)
