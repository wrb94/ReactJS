import React from 'react'

// const {string} = React.PropTypes

// const Message = (props) => <h1>{props.message}</h1>

const Message = React.createClass({
  // propTypes: {
  //   message: React.PropTypes.string,
  //   value: React.PropTypes.number
  // },
  render () {
    return (
      <h1>{this.props.message}</h1>
    )
  }
})

export default Message
