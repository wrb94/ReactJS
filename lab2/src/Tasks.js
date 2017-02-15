import React from 'react'
import Todo from './Todo'
import _ from 'lodash'

export default React.createClass({
  getInitialState () {
    return {
      todos: [
        { id: 1, text: 'task1', completed: false },
        { id: 2, text: 'task2', completed: false },
        { id: 3, text: 'task3', completed: false },
        { id: 4, text: 'task4', completed: false }
      ]
    }
  },

  markTaskAsCompleted (taskId) {
    const task = _.find(this.state.todos, todo => todo.id === taskId)
    task.completed = !task.completed

    this.setState({ todo: this.state.todos })
  },

  render () {
    return (
      <div>
        <h1>tasks</h1>

        {this.state.todos.map(todo =>
          <Todo key={todo.id}
            {...todo}
            markCompleted={() => this.markTaskAsCompleted(todo.id)} />
        )}
      </div>
    )
  }
})
