import React from 'react'

const Todo = ({ text, completed, markCompleted }) => {
  const style = completed ? 'glyphicon glyphicon-ok-circle' : 'glyphicon glyphicon-remove-circle'

  return (
    <a href='#' className='task-item' onClick={markCompleted}>
      <span className='task-check'>
        <span className={style} />
      </span>
      <span className='task-inner'>{text}</span>
    </a>
  )
}

Todo.propTypes = {
  text: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired,
  markCompleted: React.PropTypes.func.isRequired
}

export default Todo
