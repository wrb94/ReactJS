import React from 'react'

const Todo = ({text, completed}) => (
  <a href='#' className='task-item'>
    <span className='taskChecked'>
      <span className={'glyphicon glyphicon-ok-circle'} />
    </span>
    <span className='task-inner'>{text}</span>
  </a>
)

Todo.propType = {
  text: React.PropTypes.string,
  completed: React.PropTypes.bool
}

export default Todo
