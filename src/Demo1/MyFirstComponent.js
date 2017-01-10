import React from 'react'
import Message from './Message'

const MyFirstComponent = React.createClass({
  render () { // one DOM element on return
    return (
      <div>
        <Message />
      </div>
    )
  }
})

export default MyFirstComponent
