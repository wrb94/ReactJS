import React from 'react'
import Message from './Message'

const Button = React.createClass({
  propTypes: {
    countUp: React.PropTypes.number
  },

  render () {
    return (
      <div>
        <button onClick={() => this.props.countUp(1)}>Count up!</button>
      </div>
    )
  }
})

const MyFirstComponent = React.createClass({
  getInitialState () {
    return {
      value: 0,
      disabled: false
    }
  },
  countUp (i) {
    console.log('click')
    this.setState({
      value: this.state.value + i
    }) // TODO function handler
  },
  countDown (i) {
    console.log('down')
    this.setState({
      value: this.state.value - i
    })
  },
  // this.props  this.state.value || this.setState({value:1})
  render () { // one DOM element on return
    return (
      <div>
        <Message message='Hello1' />
        <Message message={this.state.value} />
        <button onClick={Button}>Count Up!</button>
      </div>
    )
  }
})

export default MyFirstComponent
