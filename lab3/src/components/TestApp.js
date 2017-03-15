import _ from 'lodash'
import React from 'react'
import { Link } from 'react-router'
import Footer from './Footer'

const TestApp = React.createClass({
  propTypes: {
    children: React.PropTypes.any,
    todos: React.PropTypes.array,
    markCompleted: React.PropTypes.func
  },

  componentDidMount () {
    console.log('componentDidMount')
  },

  nextId: 4,

  markCompleted (taskId) {
    const foundTodo = _.find(this.state.todos, todo => todo.id === taskId)
    foundTodo.completed = !foundTodo.completed

    this.setState({ todos: this.state.todos })
  },

  markPriority (taskId) {
    const foundTodo = _.find(this.state.todos, todo => todo.id === taskId)
    foundTodo.priority = !foundTodo.priority

    this.setState({ todos: this.state.todos })
  },

  addTodo (text, priority = false) {
    const newTodo = {
      id: this.nextId++,
      completed: false,
      priority: priority,
      text: text
    }

    this.state.todos.push(newTodo)
    this.setState({ todos: this.state.todos })
  },

  render () {
    var activeTodoCount = this.props.todos.reduce(function (count, todo) {
      return todo.completed ? count : count + 1
    }, 0)

    var doneTodoCount = this.props.todos.length - activeTodoCount

    return (
      <div className='mainApp'>
        <div className='navbar'>
          <nav>
            <Link activeClassName='active' to='/na'>Priorytety</Link>
            <Link activeClassName='active' onlyActiveOnIndex to='/'>Skrzynka spraw</Link>
            <Link activeStyle={{ color: 'red' }} to='/calendar'>Kalendarz</Link>
          </nav>
        </div>

        <div className='tasksList'>
          {React.cloneElement(
            this.props.children,
            {
              todos: this.props.todos,
              markCompleted: this.props.markCompleted,
              markPriority: this.markPriority,
              addTodo: this.addTodo
            })}
          <Footer todoCount={activeTodoCount} doneTodoCount={doneTodoCount} />
        </div>
      </div>)
  }
})

export default TestApp
