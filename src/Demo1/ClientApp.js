import React from 'react'
import { render } from 'react-dom' // gets 'render' package from react-dom

const MyFirstComponent = React.createClass({
  render () {
    return (<h1>Hello from component</h1>)
  }
})

render(
  <MyFirstComponent />,
  document.getElementById('app')
)
