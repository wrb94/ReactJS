import React from 'react'
import { render } from 'react-dom' // gets 'render' package from react-dom
import MyFirstComponent from './MyFirstComponent'

render(
  <MyFirstComponent />,
  document.getElementById('app')
)
