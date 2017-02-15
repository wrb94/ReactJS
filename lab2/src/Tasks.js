import React from 'react'
import Todo from './Todo'

export default React.createClass({
  getInitialState() {
    return {
      todos: [
        { id: 1, text: 'task1', completed: false },
        { id: 2, text: 'task2', completed: false },
        { id: 3, text: 'task3', completed: false },
        { id: 4, text: 'task4', completed: false }
      ]
    }
  },

  render() {
    return (
      <div>
        <h1>tasks</h1>

        {this.state.todos.map(todo =>
          <Todo key={todo.id} {...todo} />
        )}
      </div>
    )
  }
})
