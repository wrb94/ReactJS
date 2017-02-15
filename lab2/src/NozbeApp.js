import React from 'react'
import { render } from 'react-dom'
import { Route, Router, hashHistory } from 'react-router'
import Calendar from './Calendar.js'

render(
  <Router history={hashHistory}>
    <Route path='/' component={Calendar} />
    <Route path='/tasks' component={Tasks} />
  </Router>,
  document.getElementById('app')
)
